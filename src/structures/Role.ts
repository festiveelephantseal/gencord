import { Base } from "./Base";
import { Guild } from "./Guild";
import { GuildMember } from "./GuildMember";

export class Role extends Base {
  public color: number;
  public deleted?: boolean;
  public guild: Guild;
  public hoist: boolean;
  public id: string;
  public managed?: boolean;
  public mentionable?: boolean;
  public name: string;
  public rawPosition: number;
  //fix this later once we add perms
  //public permissions: Readonly<Permissions>
  readonly createdAt: Date;
  readonly createdTimestamp: number;
  readonly editable?: boolean;
  readonly hexColor: string;
  readonly members = new Map<string, GuildMember>();
  readonly position: number;
}
