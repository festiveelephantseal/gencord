import { Base } from "./Base";
import { Role } from "./Role";
import { User } from "./User";

export class Emoji extends Base {
  public id: string;
  public name: string;
  public roles = new Map<string, Role>();
  public user: User;
  public require_colons: boolean;
  public managed: boolean;
  public animated: boolean;
  public available: boolean;
}
