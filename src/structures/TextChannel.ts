import { rejects } from "node:assert";
import { GuildChannel } from "./GuildChannel";

export class TextChannel extends GuildChannel {
  //will allow embeds later.

  public async send(content?: string) {
    return new Promise(async (resolve, reject) => {
      await this.client.api
        .request({
          method: "POST",
          endpoint: `channels/${this._id}/messages`,
        })
        .catch((err) => {
          err ? reject(this) : false;
          throw new Error(err);
        });
      resolve(this);
    });
  }
}
