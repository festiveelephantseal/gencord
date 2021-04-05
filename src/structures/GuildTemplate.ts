import { Base } from "./Base";
import { Guild } from "./Guild";
import { User } from "./User";

export class GuildTemplate extends Base {
  public code: string;
  public name: string;
  public description: string;
  public usage_count: number;
  public creator_id: string;
  public creator: User;
  public created_at: Date;
  public updated_at: Date;
  public source_guild_id: string;
  public serialized_source_guild: Guild;
  public is_dirty: boolean;
}
