import { User } from "../structures/User";

export class EmojiManager {
  public id: string;
  public name: string;
  public user: User;
  public require_colons: boolean;
  public animated: boolean;
}
