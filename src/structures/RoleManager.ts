import { Client } from "../client/Client";
import { RoleOptions } from "../interfaces/RoleOptions";

export class RoleManager {
  private client: Client;

  public constructor(client) {
    this.client = client;
  }

  public async get(guildID: string) {
    return await this.client.handler.fetch({
      endpoint: `guilds/${guildID}/roles`,
      method: "GET",
    });
  }

  public async create(guildID: string, options?: RoleOptions) {
    return await this.client.handler.fetch({
      endpoint: `guilds/${guildID}/roles`,
      method: "POST",
    });
  }
}
