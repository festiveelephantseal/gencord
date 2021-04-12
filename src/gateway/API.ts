import { Base } from "../structures/Base";
import { APIOptions } from "../typings/APIOptions";
import fetch from "node-fetch";
import { BaseConstants } from "../typings/Constants";

export class API extends Base {
  public async request(options: APIOptions) {
    const fetched = await fetch(`${BaseConstants.API}${options.endpoint}`, {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${this.client.token}`,
      },
      body: options.body,
    });
    if (fetched.status === 429) {
      const json = await fetched.json();
      throw new Error(
        `You have been ratelimited, Request will be retried after ${json.retry_after}`
      );
    }
  }
}
