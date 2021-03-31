import { Role } from "./Role";
import { TextChannel } from "./TextChannel";
import { GuildMember } from "./GuildMember";
import { Base } from "./Base";

export class Guild extends Base{
  id: string;
  name: string;
  icon?: string;
  icon_hash?: string;
  splash?: string;
  discovery_splash?: string;
  owner?: boolean;
  owner_id: string;
  roles: Map<string, Role> = new Map();
  channels = new Map<string, TextChannel>();
  members = new Map<string, GuildMember> ();
}
