import { Base } from "./Base";

export class User extends Base {
  private bot?: boolean;

  public get _bot(): boolean | undefined {
    return this.bot;
  }
}
