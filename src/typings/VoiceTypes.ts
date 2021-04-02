import { GuildMember } from "./GuildMember";

export interface VoiceStates {
  guild_id?: string;
  channel_id?: string;
  member?: GuildMember;
  session_id: string;
  deaf: boolean;
  mute: boolean;
  self_deaf: boolean;
  self_mute: boolean;
  self_stream?: boolean;
  self_video: boolean;
  self_suppress: boolean;
}
