import { Client } from "../client/Client";
import { Guild } from "./Guild";
import { GuildChannel } from "./GuildChannel";

export class VoiceChannel extends GuildChannel {
  public bitrate: number;
  public maxUsers: number;
  readonly editable?: boolean;
  readonly isFull?: boolean;
  readonly joinable?: boolean;
  readonly speakable?: boolean;
}
// no methods added yet.
