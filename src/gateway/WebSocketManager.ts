import { Client } from "../client/Client";
import EventEmitter from "events";
import ws from "ws";
import WebSocket from "ws";
import { BaseConstants } from "../typings/Constants";

export default class WebSocketManager extends EventEmitter {
  public socket: ws;

  public constructor(private client: Client) {
    super();
  }

  public connect(token: string) {}

  protected heartbeat(ms: number) {
    setInterval(() => {
      this.socket.send(JSON.stringify({ op: 1, d: null }));
    }, ms);
  }

  public destroy(reason?: string) {
    this.socket.close();
    console.log(`The socket was closed, ${reason || "No reason provided"}`);
    process.exit();
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
}
