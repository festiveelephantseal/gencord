import { Role } from "./Role";
import { TextChannel } from "./TextChannel";
import { GuildMember } from "./GuildMember";

export class Guild {
  id: string;
  name: string;
  icon?: string;
  icon_hash?: string;
  splash?: string;
  discovery_splash?: string;
  owner?: boolean;
  owner_id: string;
  roles: Map<string, Role> = new Map();
  channels: Map<string, TextChannel> = new Map();
  members: Map<string, GuildMember> = new Map();
}
