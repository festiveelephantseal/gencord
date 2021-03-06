import { Client } from "../client/Client";
import { ChannelManager } from "./ChannelManager";
import { Message } from "../structures/Message";

export class ReactionsManager {
  private client: Client;
  private channel: ChannelManager;
  private message: Message;

  public constructor(client: Client) {
    this.client = client;
  }

  public async create(emoji: string): Promise<void> {
    return await this.client.handler.fetch({
      method: "PUT",
      endpoint: `/channels/${this.channel.id}/messages/${this.message.id}/reactions/${emoji}/@me`,
    });
  }

  public async get(): Promise<void> {}
  public async deleteOwn(): Promise<void> {}
  public async deleteUser(): Promise<void> {}
  public async deleteAll(): Promise<void> {}
  public async deleteEmoji(): Promise<void> {}
}
