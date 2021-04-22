import { Base } from "../Base";
import { ChannelTypes } from "../../typings/ChannelOptions";
export abstract class BaseChannel extends Base {
  private _id: string;
  private readonly _createdAt: Date;
  private readonly _createdTimestamp: number;
  private _deleted: boolean;
  private _type: ChannelTypes;

  public constructor(data: any) {
    super();
    this._id = data.id;
    this._type = data.type;
  }

  public get id(): string {
    return this._id;
  }

  public get type(): ChannelTypes {
    return this._type;
  }

  public get deleted(): boolean {
    return this.deleted;
  }

  public async delete(): Promise<BaseChannel> {
    return new Promise((resolve, reject) => {
      this.client
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
      this.client
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
