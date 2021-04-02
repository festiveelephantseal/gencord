import { RoleTypes } from "./RoleTypes";
import { UserTypes } from "./UserTypes";

export interface GuildMember {
  user?: UserTypes;
  nick?: string;
  roles: RoleTypes[];
  joined_at?: Date;
  premium_since?: Date;
  deaf: boolean;
  mute: boolean;
  pending?: boolean;
  permissions?: string;
}
