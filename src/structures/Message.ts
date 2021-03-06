import { User } from "./User";
import { Client } from "../client/Client";
import { GuildManager } from "../managers/GuildManager";
import { ChannelManager } from "../managers/ChannelManager";
import { ReactionsManager } from "../managers/ReactionsManager";

export class Message {
  private client: Client;
  public id: string;
  public channel_id: string;
  public guild_id?: string;
  public guild: GuildManager;
  public channel: ChannelManager;
  public reactions: ReactionsManager;
  public author;
  public member?;
  public content: string;
  public timestamp: number;
  public edited_timestamp?: number;
  public tts: boolean;
  public mention_everyone: boolean;
  public mentions: User[];
  public mention_roles: Array<string>;

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
    this.channel = new ChannelManager(this.channel_id, this.client);
    this.guild = new GuildManager(this.client, this.guild_id);
  }

  async _set() {
    this.member = await this.getMember(this.guild_id, this.author.id);

    this.author = await this.getUser(this.author.id);
  }

  private async getUser(userID: string) {
    return await this.client.handler.fetch({
      endpoint: `users/${userID}`,
      method: "GET",
    });
  }

  private async getMember(guildID: string, userID: string) {
    return await this.client.handler.fetch({
      endpoint: `guilds/${guildID}/members/${userID}`,
      method: "GET",
    });
  }

  public async reply(content: string): Promise<void> {
    return await this.client.handler.fetch({
      endpoint: `channels/${this.channel_id}/messages`,
      method: "POST",
      body: JSON.stringify({
        content: `<@${this.author.id}> ${content}`,
        tts: false,
      }),
    });
  }

  public async delete(): Promise<void> {
    return await this.client.handler.fetch({
      endpoint: `channels/${this.channel_id}/messages/${this.id}`,
      method: "DELETE",
    });
  }
}
