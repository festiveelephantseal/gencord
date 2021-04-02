import { EventEmitter } from "events";
import { Client } from "../client/Client";
import { AudioPlayer } from "./AudioPlayer";
import { ClientVoiceManager } from "./ClientVoiceManager";
import { Speaking } from "./Speaking";
import { StreamDispatcher } from "./StreamDispatcher";
import { VoiceChannel } from "./VoiceChannel";
import { VoiceReceiver } from "./VoiceReceiver";
import { VoiceState } from "./VoiceState";

export enum VoiceStatus {
  CONNECTED = 0,
  CONNECTING = 1,
  AUTHENTICATING = 2,
  RECONNECTING = 3,
  DISCONNECTED = 4,
}

export class VoiceConnection extends EventEmitter {
  readonly client: Client;
  readonly dispathcer?: StreamDispatcher;

  public channel: VoiceChannel;
  public player: AudioPlayer;
  public receiver: VoiceReceiver;
  public speaking: Readonly<Speaking>;
  public status: VoiceStatus;
  public voice?: VoiceState;
  public voiceManager: ClientVoiceManager;
}

// FIXING
