import { Base } from "./Base";

export class Emoji extends Base {
  readonly createdAt?: Date;
  readonly createdTimestamp?: number;
  readonly identifier?: string;
  public animated: boolean;
  public deleted: boolean;
  public id?: string;
  public name: string;
  public url?: string;
}

// FIXING
