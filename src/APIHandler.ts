import { Client } from "./client";
import axios from "axios";

interface APIOptions {
  endpoint: string;
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  body?: any;
}

export class RestHandler {
  public constructor(private client: Client) {}

  public async fetch(options: APIOptions) {
    axios(`https://discord.com/api/v8/${options.endpoint}`, {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${this.client.token}`,
      },
      data: options.body,
    });
  }
}
