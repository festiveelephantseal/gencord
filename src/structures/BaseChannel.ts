import { Base } from "./Base";

type ChannelTypes =
  | "dm"
  | "text"
  | "voice"
  | "category"
  | "news"
  | "store"
  | "unknown";

export abstract class BaseChannel extends Base {
  private id: string;
  private readonly createdAt: Date;
  private readonly createdTimestamp: number;
  private deleted: boolean;
  private type: ChannelTypes;
}
