import { Client } from "../client/Client";
import { VoiceBroadcast } from "./VoiceBroadcast";
import { VoiceConnection } from "./VoiceConnection";

export class ClientVoiceManager {
  readonly client: Client;
  public broadcasts: VoiceBroadcast[];
  public connections = new Map<string, VoiceConnection>();
}

// FIXING
