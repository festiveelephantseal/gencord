import { WebSocketManager } from "../gateway/WebSocketManager";
import { ClientOptions } from "../typings/ClientOptions";
import { API } from "../gateway/API";
import { EventEmitter } from "node:events";
import { ClientEvents } from "src/typings/ClientEvents";
import { ClientUser } from "./ClientUser";

export declare interface Client {
  on<Event extends keyof ClientEvents>(
    event: Event,
    listener: ClientEvents[Event]
  ): Function;
  login(token: string): Promise<void>;
  token: string;
  api: API;
  options: ClientOptions;
  socket: WebSocketManager;
  user: ClientUser;
}

export class Client {
  public constructor(options: ClientOptions) {
    this.socket = new WebSocketManager(this);
    this.options = options;
    this.token = options.token;
  }

  public async login(token: string): Promise<void> {
    try {
      this.token = token;
      this.socket.connect(token);
    } catch (e) {
      e ? console.log(e) : false;
    }
  }

  public identify() {
    this.socket.socket.send(
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
