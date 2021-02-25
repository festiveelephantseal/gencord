import { Client } from "../client/Client";

export class ChannelManager {
  private client: Client;
  public id: string;
  public name: string;
  public type: number;
  public position: number;
  public topic: string;
  public nsfw: boolean;
  public rate_limit_per_user: number;
  public bitrate: number;
  public user_limit: number;

  public constructor(client: Client) {
    this.client = client;
  }

  public async get() {
    return await this.client.handler.fetch({
      endpoint: `channels/${this.id}`,
      method: "GET",
    });
  }

  public async update() {
    return await this.client.handler.fetch({
      endpoint: `channels/${this.id}`,
      method: "PATCH",
    });
  }

  public async delete(channelID: string) {
    return await this.client.handler.fetch({
      endpoint: `channels/${channelID}`,
      method: "DELETE",
    });
  }

  public async send(channelID: string, content: any): Promise<void> {
    return await this.client.handler.fetch({
      endpoint: `channels/${channelID}/messages`,
      method: "POST",
      body: JSON.stringify({
        content: `${content}`,
        tts: false,
      }),
    });
  }
}
