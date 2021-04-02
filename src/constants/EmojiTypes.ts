import { RoleTypes } from "./RoleTypes";
import { UserTypes } from "./UserTypes";

export interface EmojiTypes {
  id?: string;
  name: string | null;
  roles?: RoleTypes[];
  user?: UserTypes;
  require_colons?: boolean;
  managed?: boolean;
  animated?: boolean;
  available?: boolean;
}
