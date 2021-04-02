import { RoleTypes } from "./RoleTypes";
import { EmojiTypes } from "./EmojiTypes";
import { VoiceStates } from "./VoiceTypes";
import { GuildMember } from "./GuildMember";
import { ChannelTypes } from "./ChannelTypes";
import { PresenceTypes } from "./PresenceTypes";

type Features =
  | "ANIMATED_ICON"
  | "BANNER"
  | "COMMERCE"
  | "COMMUNITY"
  | "DISCOVERABLE"
  | "FEATURABLE"
  | "INVITE_SPLASH"
  | "NEWS"
  | "PARTNERED"
  | "RELAY_ENABLED"
  | "VANITY_URL"
  | "VERIFIED"
  | "VIP_REGIONS"
  | "WELCOME_SCREEN_ENABLED"
  | "MEMBER_VERIFICATION_GATE_ENABLED"
  | "PREVIEW_ENABLED";

export interface WelcomeScreenChannels {
  channel_id: string;
  description: string;
  emoji_id?: string;
  emoji_name?: string;
}

export interface WelcomeScreen {
  description?: string;
  welcome_channels: WelcomeScreenChannels[];
}

export enum VerificationLevel {
  "NONE" = 0,
  "LOW" = 1,
  "MEDIUM" = 2,
  "HIGH" = 3,
  "VERY_HIGH",
}
export interface GuildTypes {
  id: string;
  name: string;
  icon?: string;
  icon_hash?: string;
  splash?: string;
  discovery_splash?: string;
  owner?: true;
  owner_id: string;
  permissions?: string;
  region?: string;
  afk_channel_id?: string;
  afk_timeout: number;
  widget_enbaled?: boolean;
  widget_channel_id?: string;
  verifcation_level: VerificationLevel;
  default_message_notifications: number;
  explicit_content_filter: number;
  roles: RoleTypes[];
  emojis: EmojiTypes[];
  features: Features[];
  mfa_level: number;
  application_id?: string;
  system_channel_id?: string;
  system_channel_flags: number;
  rules_channel_id?: string;
  joined_at?: Date;
  large?: boolean;
  unavailable?: boolean;
  member_count?: number;
  voice_states?: VoiceStates[];
  members?: GuildMember[];
  channels?: ChannelTypes[];
  presences?: PresenceTypes[];
  max_presences?: number;
  max_members?: number;
  vanity_url_code?: string;
  description?: string;
  banner?: string;
  premium_tier: number;
  premium_subscription_count?: number;
  preferred_locale: string;
  public_updates_channel_id?: string;
  max_video_channel_users?: number;
  approximate_member_count?: number;
  approximate_presence_count?: number;
  welcome_screen?: WelcomeScreen;
}
