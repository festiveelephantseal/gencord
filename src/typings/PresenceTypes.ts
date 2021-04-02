import { UserTypes } from "./UserTypes";
import { ActivityTypes } from "./ActivityTypes";

export interface ActivityTimestamps {
  start?: number;
  end?: number;
}

export interface ActivityEmoji {
  name: string;
  id?: string;
  animated?: boolean;
}

export interface ActivityParty {
  id?: string;
  size?: number[];
}

export interface ActivityAssets {
  large_image?: string;
  large_text?: string;
  small_image?: string;
  small_text?: string;
}

export interface ActivitySecrets {
  join?: string;
  spectate?: string;
  match?: string;
}

export interface Activites {
  name: string;
  type: ActivityAssets;
  url?: string;
  created_at: number;
  timestamps?: ActivityTimestamps;
  application_id?: string;
  details?: string;
  state?: string;
  emoji?: ActivityEmoji;
  party?: ActivityParty;
  assets?: ActivityAssets;
  secrets?: ActivitySecrets;
  instance?: boolean;
  flags?: number;
}

export interface ClientStatus {
  desktop?: string;
  mobile?: string;
  web?: string;
}

export interface PresenceTypes {
  user: UserTypes;
  guild_id: string;
  status: string;
  activities: Activites[];
  client_status: ClientStatus;
}
