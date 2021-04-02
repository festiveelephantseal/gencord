import { GuildManager } from "../managers/GuildManager";
import { CategoryChannel } from "./CategoryChannel";
import { Channel } from "./Channel";
import { Guild } from "./Guild";

interface OverWrites {
  id: string;
  allow: string;
  deny: string;
  type: number;
}

export class GuildChannel extends Channel {
  public guild: Guild;
  public name: string;
  public parent_id?: string;
  public rawPosition: number;
  public permission_overwrites = new Map<string, OverWrites>();
  readonly members: Map<string, GuildManager> = new Map();
  readonly position: number;
  readonly permissions_locked?: boolean;
  readonly deletable?: boolean;
  readonly manageable?: boolean;
  readonly parent?: CategoryChannel;
  readonly viewable?: boolean;
}

//no methods
