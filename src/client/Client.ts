import { EventEmitter } from "events";
import ws from "ws";
import { RestHandler } from "../utils/APIHandler";
import { ActivityTypes } from "../constants/ActivityTypes";
import { Manager } from "../utils/Manager";
import { SlashCommandsManager } from "../structures/SlashCommandsManager";
import { Message } from "../structures/Message";

export interface ClientOptions {
  token: string;
  intents?: number;
  status?: "online" | "idle" | "dnd" | "invisible";
  activityName?: string;
  activityType: ActivityTypes;
}

export class Client extends EventEmitter {
  private socket: ws;

  /**
   * @param {ClientOptions} options passed into the client
   */

  public options: ClientOptions;

  /**
   * @param {string} the bots token
   */

  public token: string;

  public handler: RestHandler = new RestHandler(this);

  public manager: Manager = new Manager(this);

  public slashCommands: SlashCommandsManager = new SlashCommandsManager(this);

  public constructor(options: ClientOptions) {
    super();
    this.options = options;
    this.token = options.token;
    this.login();
  }

  private async login(): Promise<void> {
    this.socket = await new ws("wss://gateway.discord.gg/?v=8&encoding=json");

    this.socket.on("open", () => {
      this.identify();
    });

    this.socket.on("message", async (message) => {
      const payload = JSON.parse(message.toString());
      const { t, s, op, d } = payload;

      if (payload.op === 10) {
        const { heartbeat_interval } = d;
        this.heartbeat(heartbeat_interval);
      } else if (payload.op === 0) {
        this.emit(payload.t, payload.d);
      }

      if (payload.t === "MESSAGE_CREATE") {
        this.emit("message", new Message(payload.d, this));
      }
    });

    this.socket.on("error", (error: string) => {
      console.log("Error", error);
    });

    this.socket.on("close", (error: any) => {
      if (error === 4004) throw new Error("Invalid token");

      this.login();
    });
  }

  private heartbeat(ms: number) {
    setInterval(() => {
      this.socket.send(JSON.stringify({ op: 1, d: null }));
    }, ms);
  }

  public destroy(reason?: string) {
    this.socket.close();
    console.log(`The socket was closed, ${reason || "No reason provided"}`);
    process.exit();
  }

  public ping() {
    try {
      this.socket.ping();
      return setTimeout(() => {
        this.ping();
      }, 60000);
    } catch (err) {
      this.emit("error", err);
    }
  }

  private identify() {
    this.socket.send(
      JSON.stringify({
        op: 2,
        d: {
          token: this.options.token,
          intents: this.options.intents,
          properties: {
            $os: "linux",
            $browser: "gencord",
            $device: "gencord",
          },
          presence: {
            status: this.options.status,
            activities: [
              {
                name: this.options.activityName,
                type: this.options.activityType,
              },
            ],
          },
        },
      })
    );
  }
}
