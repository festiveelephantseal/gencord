import { Guild } from "./Guild";
import { GuildMember } from "./GuildMember";
import { VoiceChannel } from "./VoiceChannel";
import { VoiceConnection } from "./VoiceConnection";

export class VoiceState {
  readonly channel: VoiceChannel;
  readonly connection?: VoiceConnection;
  readonly deaf?: boolean;
  readonly member?: GuildMember;
  readonly mute?: boolean;
  readonly speaking?: boolean;
  public channelId: string;
  public guild: Guild;
  public id: string;
  public selfDeaf?: boolean;
  public selfMute?: boolean;
  public selfVideo?: boolean;
  public serverDeaf?: boolean;
  public serverMute?: boolean;
  public sessionId?: string;
  public streaming: boolean;
}

// FIXING
