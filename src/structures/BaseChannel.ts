import { Base } from "./Base";
import { ChannelTypes } from "../typings/ChannelOptions";
export abstract class BaseChannel extends Base {
  id: string;
  private readonly createdAt: Date;
  private readonly createdTimestamp: number;
  private deleted: boolean;
  private type: ChannelTypes;

  public get _id(): string {
    return this.id;
  }

  public get _type(): ChannelTypes {
    return this.type;
  }

  public get _deleted(): boolean {
    return this.deleted;
  }

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
