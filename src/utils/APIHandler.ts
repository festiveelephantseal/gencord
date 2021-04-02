import fetch from "node-fetch";
import { Client } from "../client/Client";

interface APIOptions {
  endpoint: string;
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  body?: any;
}

export class APIHandler {
  public constructor(private client: Client) {}

  public async fetch(options: APIOptions) {
    const fetched = await fetch(
      `https://discord.com/api/v8/${options.endpoint}`,
      {
        method: options.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bot ${this.client.token}`,
        },
        body: options.body,
      }
    );
    if (fetched.status === 429) {
      const json = await fetched.json();
      throw new Error(
        `You have been ratelimited, Request will be retried after ${json.retry_after}`
      );
    }
  }
}
