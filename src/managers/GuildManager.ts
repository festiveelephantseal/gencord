import { Client } from "../client/Client";
import { RoleManager } from "./RoleManager";
import { BanOptions } from "../interfaces/BanOptions";
import { ChannelCreateOptions } from "../interfaces/ChannelCreateOptions";
import { ChannelManager } from "./ChannelManager";

export class GuildManager {
  private client: Client;
  public id: string;
  public name: string;
  public icon: string;
  public icon_hash: string;
  public splash: string;
  public discovery_splash: string;
  public owner: boolean;
  public owner_id: string;
  public permissions: string;
  public region: string;
  public channels: ChannelManager;
  public roles: RoleManager;

  public constructor(client: Client, data) {
    this.client = client;
    this._set(data);
  }

  private _set(data) {
    this.id = data;
  }

  public async get(guildID: string): Promise<void> {
    return await this.client.handler.fetch({
      endpoint: `guilds/${guildID}`,
      method: "GET",
    });
  }

  public async getChannels(guildID: string): Promise<void> {
    return await this.client.handler.fetch({
      endpoint: `guilds/${guildID}/channels`,
      method: "GET",
    });
  }

  public async getPreview(guildID: string): Promise<void> {
    return await this.client.handler.fetch({
      endpoint: `guilds/${guildID}/preview`,
      method: "GET",
    });
  }

  public async delete(guildID: string): Promise<void> {
    return await this.client.handler.fetch({
      endpoint: `guilds/${guildID}`,
      method: "DELETE",
    });
  }

  public async getBans(guildID: string): Promise<void> {
    return await this.client.handler.fetch({
      endpoint: `guilds/${guildID}/bans`,
      method: "GET",
    });
  }

  public async create(
    guildID: string,
    options: ChannelCreateOptions
  ): Promise<void> {
    return await this.client.handler.fetch({
      endpoint: `guilds/${guildID}/channels`,
      method: "POST",
    });
  }

  public async ban(guildID: string, userID: string, options: BanOptions) {
    const body = {
      delete_message_days: options.delete_message_days,
      reason: options.reason,
    };
    return await this.client.handler.fetch({
      endpoint: `guilds/${guildID}/bans/${userID}`,
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  public async getBan(guildID: string, userID: string) {
    return await this.client.handler.fetch({
      endpoint: `guilds/${guildID}/bans/${userID}`,
      method: "GET",
    });
  }

  public async removeBan(guildID: string, userID: string) {
    return await this.client.handler.fetch({
      endpoint: `guilds/${guildID}/bans/${userID}`,
      method: "DELETE",
    });
  }

  //message.guild.createRole()
  //message.guild.roles.create();
}
