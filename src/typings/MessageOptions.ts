export type MessageTypes =
  | "DEFAULT"
  | "RECIPIENT_ADD"
  | "RECIPIENT_REMOVE"
  | "CALL"
  | "CHANNEL_NAME_CHANGE"
  | "CHANNEL_ICON_CHANGE"
  | "PINS_ADD"
  | "GUILD_MEMBER_JOIN"
  | "USER_PREMIUM_GUILD_SUBSCRIPTION"
  | "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1"
  | "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2"
  | "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3"
  | "CHANNEL_FOLLOW_ADD"
  | "GUILD_DISCOVERY_DISQUALIFIED"
  | "GUILD_DISCOVERY_REQUALIFIED";

export interface MessageDeleteOptions {
  timeout?: number;
  reason?: string;
}

export interface MessagePinOptions {
  reason?: string;
}
