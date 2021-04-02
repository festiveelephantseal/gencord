import { UserTypes } from "./UserTypes";

export interface WebhookTypes {
  id: string;
  type: number;
  guild_id?: string;
  channel_id: string;
  user?: UserTypes;
  name: string;
  avatar: string;
  token?: string;
  application_id: string;
}
