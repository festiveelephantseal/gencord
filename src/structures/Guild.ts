import { Role } from "./Role";
import { TextChannel } from "./TextChannel";
import { GuildMember } from "./GuildMember";
import { Base } from "./Base";
import { VoiceChannel } from "./VoiceChannel";
import { GuildTypes } from "../constants/GuildTypes";
import { Client } from "../client/Client";
import {
  VerificationLevel,
  DefaultMessageNotifications,
  ExplicitContentFilterLevel,
  PremiumTier,
} from "../constants/GuildTypes";

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
    this._set(data);
  }
  _set(data: GuildTypes) {
    this.id = data.id;
    this.name = data.name;
    this.icon = data.icon;
    this.splash = data.splash;
    this.discoverySplash = data.discovery_splash;
    this.ownerId = data.owner_id;
    this.region = data.region;
    this.afkChannelId = data.afk_channel_id;
    this.afkTimeout = data.afk_timeout;
    this.widgetEnabled = data.widget_enbaled;
    this.widgetChannelId = data.widget_channel_id;
    this.verificationLevel = data.verifcation_level;
    this.defaultMessageNotifications = data.default_message_notifications;
    this.explicitContentFilter = data.explicit_content_filter;
    //roles
    //emojis
    this.features = data.features;
    this.mfaLevel = data.mfa_level;
    this.applicationId = data.application_id;
    this.systemChannelId = data.system_channel_id;
    this.rulesChannelId = data.rules_channel_id;
    this.large = data.large;
    this.memberCount = data.member_count;
    //states
    //members
    //channels
    //presences
    this.maxPresences = data.max_presences;
    this.maxMembers = data.max_members;
    this.vanityUrlCode = data.vanity_url_code;
    this.description = data.description;
    this.banner = data.banner;
    this.premiumTier = data.premium_tier;
    this.premiumSubscriptionCount = data.premium_subscription_count;
    this.preferredLocale = data.preferred_locale;
    this.approxMembers = data.approximate_member_count;
    this.approxPresences = data.approximate_presence_count;
  }
}
