import { Client } from "../client/Client";

export class ReactionsManager {
  private client: Client;

  public constructor(client: Client) {
    this.client = client;
  }

  public async create(): Promise<void> {}
  public async get(): Promise<void> {}
  public async deleteOwn(): Promise<void> {}
  public async deleteUser(): Promise<void> {}
  public async deleteAll(): Promise<void> {}
  public async deleteEmoji(): Promise<void> {}
}
