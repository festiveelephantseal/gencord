import WebSocketManager from "../gateway/WebSocketManager";
import { ClientOptions } from "../typings/ClientOptions";
import EventEmitter from "events";
import { ClientEvents } from "src/typings/ClientEvents";
import { ClientUser } from "./ClientUser";
import ws from "ws";
import fetch from "node-fetch";
import { BaseConstants } from "../typings/Constants";
import { Message } from "../structures/message/Message";
import { APIOptions } from "../typings/APIOptions";

export declare interface Client {
  login(token: string): Promise<void>;
  token: string;
  options: ClientOptions;
  user: ClientUser;
  on<E extends keyof ClientEvents>(event: E, listener: ClientEvents[E]): this;
}

export class Client extends EventEmitter {
  public constructor(options: ClientOptions) {
    super();
    this.options = options;
    this.token = options.token;
  }
  private socket: ws;

  protected heartbeat(ms: number) {
    setInterval(() => {
      this.socket.send(JSON.stringify({ op: 1, d: null }));
    }, ms);
  }

  public async request(options: APIOptions) {
    const fetched = await fetch(`${BaseConstants.API}${options.endpoint}`, {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${this.token}`,
      },
      body: options.body,
    });
    if (fetched.status === 429) {
      const json = await fetched.json();
      throw new Error(
        `You have been ratelimited, Request will be retried after ${json.retry_after}`
      );
    }
  }

  public async login(): Promise<void> {
    try {
      this.socket = new ws(BaseConstants.GATEWAY);

      this.socket.on("open", () => {
        this.identify();
      });

      this.socket.on("message", async (message) => {
        const payload = JSON.parse(message.toString());
        const { t, s, op, d } = payload;

        if (op === 10) {
          const { heartbeat_interval } = d;
          this.heartbeat(heartbeat_interval);
        } else if (payload.op === 0) {
          this.emit(t, d);
        }
        switch (t) {
          case "READY":
            this.emit("ready");
            break;
          case "MESSAGE_CREATE":
            this.emit("message", new Message(payload.d, this));
            break;
        }
      });

      this.socket.on("error", (error: string) => {
        console.log("Error", error);
      });

      this.socket.on("close", (error: any) => {
        if (error === 4004) throw new Error("Invalid token.");
        if (error === 4000) throw new Error("Unknown Error.");
        if (error === 4008) throw new Error("Ratelimited.");
        if (error === 4009) throw new Error("Session Timed Out.");
        this;
      });
    } catch (e) {
      e ? console.log(e) : false;
    }
  }

  public async ping(): Promise<any> {
    try {
      this.socket.ping();
      return setTimeout(() => {
        this.ping();
      }, 60000);
    } catch (err) {
      this.emit("error", err);
    }
  }

  public identify() {
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

export default Client;
