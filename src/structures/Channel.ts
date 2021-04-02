import { Base } from "./Base";

type ChannelTypes = "dm" | "text" | "voice" | "category" | "news" | "unknown";

export class Channel extends Base {
  readonly createdAt: Date;
  readonly createdTimestamp: number;
  public deleted?: boolean;
  public id: string;
  public type: ChannelTypes;
}

//no methods
