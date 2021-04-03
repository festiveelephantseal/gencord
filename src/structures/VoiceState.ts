import { GuildMember } from "./GuildMember";

export class VoiceState extends GuildMember {
  public guild_id: string;
  public channel_id: string;
  public user_id: string;
  public member: GuildMember;
  public session_id: string;
  public deaf: boolean;
  public mute: boolean;
  public self_deaf: boolean;
  public self_mute: boolean;
  public self_stream: boolean;
  public suppress: boolean;
}
