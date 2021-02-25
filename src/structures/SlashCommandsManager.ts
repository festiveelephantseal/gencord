import { Client } from "../client";

export enum ApplicationCommandOptionType {
  SUB_COMMAND = 1,
  SUB_COMMAND_GROUP = 2,
  STRING = 3,
  INTEGER = 4,
  BOOLEAN = 5,
  USER = 6,
  CHANNEL = 7,
  ROLE = 8,
}

export interface ApplicationCommandOption {
  type: ApplicationCommandOptionType;
  name: string;
  description: string;
  required?: boolean;
  choices?: Array<Object>;
  options?: ApplicationCommandOptionType;
}
export class SlashCommandsManager {
  private client: Client;

  public constructor(client: Client) {
    this.client = client;
  }

  public async get(applicationID: string): Promise<void> {
    return await this.client.handler.fetch({
      endpoint: `applications/${applicationID}/commands`,
      method: "GET",
    });
  }

  public async registerGlobal(
    applicationID: string,
    options: ApplicationCommandOption
  ): Promise<void> {
    const body = {
      name: options.name,
      description: options.description,
      options: options.options,
    };

    return await this.client.handler.fetch({
      endpoint: `applications/${applicationID}/commands`,
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  public async deleteGlobal(
    applicationID: string,
    commandID: string
  ): Promise<void> {
    return await this.client.handler.fetch({
      endpoint: `applications/${applicationID}/commands/${commandID}`,
      method: "DELETE",
    });
  }

  public async registerGuild(
    applicationID: string,
    guildID: string,
    options: ApplicationCommandOption
  ): Promise<void> {
    const body = {
      name: options.name,
      description: options.description,
      options: options.options,
    };

    return await this.client.handler.fetch({
      endpoint: `applications/${applicationID}/guilds/${guildID}/commands`,
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  public async deleteGuild(
    applicationID: string,
    guildID: string,
    commandID: string
  ): Promise<void> {
    return await this.client.handler.fetch({
      endpoint: `applications/${applicationID}/guids/${guildID}/commands/${commandID}`,
      method: "DELETE",
    });
  }
}
