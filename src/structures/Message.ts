import { User } from "./User";
import Client from "../client";

export class Message {
  public id: string;
  public channel_id: string;
  public guild_id?: string;
  public author;
  public member?;
  public content: string;
  public timestamp: number;
  public edited_timestamp?: number;
  public tts: boolean;
  public mention_everyone: boolean;
  public mentions: User[];
  public mention_roles: Array<string>;
  private client: Client;

  public constructor(data, client) {
    this.client = client;
    this.id = data.id;
    this.channel_id = data.channel_id;
    this.guild_id = data.guild_id;
    this.author = data.author;
    this.content = data.content;
    this.timestamp = data.timestamp;
    this.edited_timestamp = data.edited_timestamp ?? false;
    this.tts = data.tts;
    this.mention_everyone = data.mention_everyone;
    this.mention_roles = data.mention_roles ?? false;
  }

  async _set() {
    this.member = await this.client.manager.getMember(
      this.guild_id,
      this.author.id
    );

    this.author = await this.client.manager.getUser(this.author.id);
  }

  public async reply(channelID: string, content: string): Promise<void> {
    const data = await this.client.handler.fetch({
      endpoint: `channels/${channelID}/messages`,
      method: "POST",
      body: JSON.stringify({
        content: `<@${this.author.id}> ${content}`,
        tts: false,
      }),
    });
  }

  public async send(channelID: string, content: any): Promise<void> {
    const data = await this.client.handler.fetch({
      endpoint: `channels/${channelID}/messages`,
      method: "POST",
      body: JSON.stringify({
        content: `${content}`,
        tts: false,
      }),
    });
  }
}
