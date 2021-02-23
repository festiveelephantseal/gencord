import { Client } from "../client";

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

  public constructor(client: Client) {
    this.client = client;
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
}
