import { Client } from "../client/Client";

export abstract class Base {
  public client: Client;

  public get _client(): Client {
    return this.client;
  }
}
