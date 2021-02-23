import { PermissionsOverwrite } from "./PermissionsOverwrite";

export interface ChannelCreateOptions {
  name: string;
  type: number;
  topic?: string;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user?: number;
  position?: number;
  nsfw?: number;
  permission_overwrites?: PermissionsOverwrite;
}
