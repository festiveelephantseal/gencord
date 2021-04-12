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

  public async delete(): Promise<BaseChannel> {
    return new Promise((resolve, reject) => {
      this.client.api
        .request({
          method: "DELETE",
          endpoint: `/channels/${this.id}`,
        })
        .catch((err) => {
          err ? reject(this) : false;
        });

      resolve(this);
    });
  }

  public async get(): Promise<BaseChannel> {
    return new Promise((resolve, reject) => {
      this.client.api
        .request({
          method: "GET",
          endpoint: `/channels/${this.id}`,
        })
        .catch((err) => {
          err ? reject(this) : false;
        });
      resolve(this);
    });
  }
}
