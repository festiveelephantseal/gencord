import Client from "./client";

export class Manager {
  public constructor(private client: Client) {}

  public async getUser(userID: string) {
    return await this.client.handler.fetch({
      endpoint: `users/${userID}`,
      method: "GET",
    });
  }

  public async getMember(guildID: string, userID: string) {
    return await this.client.handler.fetch({
      endpoint: `/guilds/${guildID}/members/${userID}`,
      method: "GET",
    });
  }
}
