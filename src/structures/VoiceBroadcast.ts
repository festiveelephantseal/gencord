import { EventEmitter } from "events";
import { Client } from "../client/Client";
import { BroadcastDispatcher } from "./BroadcastDispatcher";
import { StreamDispatcher } from "./StreamDispatcher";

export class VoiceBroadcast extends EventEmitter {
  readonly dispatcher: BroadcastDispatcher;
  public client: Client;
  public subscribers: StreamDispatcher[];
}

// FIXING
