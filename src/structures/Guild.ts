import { Role } from "./Role";
import { TextChannel } from "./TextChannel";
import { GuildMember } from "./GuildMember";
import { Base } from "./Base";
import { VoiceChannel } from "./VoiceChannel";
import { GuildTypes } from "../constants/GuildTypes";
import { Client } from "../client/Client";

type DefaultMessageNotifications = "ALL" | "MENTIONS";
type ExplicitContentFilterLevel =
  | "DISABLED"
  | "MEMBER_WITHOUT_ROLES"
  | "ALL_MEMBERS";
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
  | "Types";

enum PremiumTier {
  NONE = 0,
  TIER_1 = 1,
  TIER_2 = 2,
  TIER_3 = 3,
}

type VerificationLevel = "NONE" | "LOW" | "MEDIUM" | "HIGH" | "VERY_HIGH";

export class Guild extends Base {
  readonly afkChannel?: VoiceChannel;
  readonly createdAt: Date;
  readonly createdTimestamp: number;
  readonly joinedAt: Date;
  readonly me: GuildMember;
  readonly nameAcronym: string;
  readonly owner?: GuildMember;
  readonly partnered: boolean;
  readonly publicUpdatesChannel?: TextChannel;
  readonly publicUpdatesChannelId?: string;
  readonly rulesChannel?: TextChannel;
  //readonly shard: WebSocketShard
  readonly systemChannel?: TextChannel;
  readonly verified: boolean;
  //readonly voice: VoiceState;
  readonly widgetChannel?: TextChannel;
  public afkChannelId: string;
  public afkTimeout?: number;
  public applicationId: string;
  public approxMembers?: number;
  public approxPresences?: number;
  public available: boolean;
  public banner?: string;
  //public channels
  public defaultMessageNotifications: DefaultMessageNotifications;
  public deleted: boolean;
  public description?: string;
  public discoverySplash?: string;
  //public emojis
  public explicitContentFilter: ExplicitContentFilterLevel;
  public features: Features[];
  public icon?: string;
  public id: string;
  public joinedTimestamp: number;
  public large: boolean;
  public maxMembers?: number;
  public maxPresences?: number;
  public memberCount: number;
  //public members
  public mfaLevel: number;
  public name: string;
  public ownerId: string;
  public preferredLocale: string;
  public premiumSubscriptionCount?: number;
  public premiumTier: PremiumTier;
  //public presences
  public region: string;
  //public roles;
  public rulesChannelId: string;
  public splash?: string;
  //public systemChannelFlags;
  public systemChannelId?: string;
  public vanityUrlCode?: string;
  public vanityURLUses?: number;
  public verificationLevel: VerificationLevel;
  //public voiceStates;
  public widgetChannelId?: string;
  public widgetEnabled?: boolean;

  public constructor(data: GuildTypes, client: Client) {
    super();
  }
}
