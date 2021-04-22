import { GuildChannel } from "./GuildChannel";
import { GuildMember } from "../GuildMember";
import { GenCollection } from "../GenCollection";
import { Message } from "../message/Message";

export class TextChannel extends GuildChannel {
/*  private _messages = new Collection<string, GuildMember>();
  public constructor(){
    super(data, this.client);
  }
  public async send(content: string): Promise<Message> {
    return new Promise(async (resolve, reject) => {
      await this.client
        .request({
          method: "POST",
          endpoint: `channels/${this.id}/messages`,
          body: JSON.stringify(content),
        })
        .catch((err) => {
          err ? reject(this) : false;
          throw new Error(err);
        });
    });
  }*/
}