import EventEmitter from "events";
import WebSocket from "ws";
import { Client } from "../client/Client";

export class WebSocketManager extends EventEmitter {
  public socket: WebSocket;
  private readonly client: Client;

  public constructor() {
    super();
  }

  protected connect() {
    this.socket = new WebSocket("wss://gateway.discord.gg/?v=8&encoding=json");

    this.socket.on("open", () => {
      this.client.identify();
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
        case "READY":
          this.emit("ready");
          break;
      }
    });

    this.socket.on("error", (error: string) => {
      console.log("Error", error);
    });

    this.socket.on("close", (error: any) => {
      if (error === 4004) throw new Error("Invalid token");

      this.connect();
    });
  }

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
}
