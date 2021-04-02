import { EventEmitter } from "events";
import ws from "ws";
import { APIHandler } from "../utils/APIHandler";
import { ActivityTypes } from "../constants/ActivityTypes";
import { SlashCommandsManager } from "../managers/SlashCommandsManager";
import { Message } from "../structures/Message";
import { Guild } from "../structures/Guild";

export interface ClientOptions {
  token: string;
  intents?: number;
  status?: "online" | "idle" | "dnd" | "invisible";
  activityName?: string;
  activityType: ActivityTypes;
}

export class Client extends EventEmitter {
  private socket: ws;
  public options: ClientOptions;
  public token: string;
  public handler: APIHandler = new APIHandler(this);

  public slashCommands: SlashCommandsManager = new SlashCommandsManager(this);
  public guilds: Map<string, Guild> = new Map();

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
      switch (payload.t) {
        case "MESSAGE_CREATE":
          this.emit("message", new Message(payload.d, this));
          break;
        case "READY":
          this.emit("ready");
          break;
        case "GUILD_CREATE":
          this.guilds.set(payload.d.id, payload.d);
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

  private heartbeat(ms: number) {
    setInterval(() => {
      this.socket.send(JSON.stringify({ op: 1, d: null }));
    }, ms);
  }
}
