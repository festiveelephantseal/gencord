import EventEmitter from "events";
import { Client } from "../client/Client";

export enum WebSocketStatus {
  READY = 0,
  CONNECTING = 1,
  RECONNECTING = 2,
  IDLE = 3,
  NEARLY = 4,
  DISCONNECTED = 5,
  WAITING_FOR_GUILDS = 6,
  IDENTIFYING = 7,
  RESUMING = 9,
}

export class WebSocketManager extends EventEmitter {
  readonly client: Client;
  readonly ping: number;
  public gateway?: string;
  public shards = new Map<number, WebSocketShard>();
  public status: number;
}

export class WebSocketShard {
  public id: string;
  public manager;
  public ping: number;
  public status: WebSocketStatus;
}

// FIXING
