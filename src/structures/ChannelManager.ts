import Client from "../client";

export class ChannelManager {
  public id: string;
  public name: string;
  public type: number;
  public position: number;
  public topic: string;
  public nsfw: boolean;
  public rate_limit_per_user: number;
  public bitrate: number;
  public user_limit: number;
  private client: Client;

  public constructor(client: Client) {
    this.client = client;
  }

  public async getChannel() {
    return await this.client.handler.fetch({
      endpoint: `channels/${this.id}`,
      method: "GET",
    });
  }

  public async updateChannel() {
    return await this.client.handler.fetch({
      endpoint: `channels/${this.id}`,
      method: "PATCH",
    });
  }

  public async deleteChannel() {
    return await this.client.handler.fetch({
      endpoint: `/channels/${this.id}`,
      method: "DELETE",
    });
  }
}
