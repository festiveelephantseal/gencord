import { Client } from "../client/Client";
import { Base } from "./Base";
import {
  MessageDeleteOptions,
  MessagePinOptions,
} from "../typings/MessageOptions";

export class Message extends Base {
  public constructor(
    private id: string,
    //private type
    //private channel
    private tts: boolean,
    //private member,
    private content: string,
    private timestamp: Date,
    private editedAt: Date,
    private mentionedEveryone: boolean,
    private nonce: string | number
  ) {
    super();
  }
  public get _client(): Client {
    return this.client;
  }
  public get _id(): string {
    return this.id;
  }
  public get _timestamp(): Date {
    return this.timestamp;
  }
  public get _nonce(): string | number {
    return this.nonce;
  }
  public get _content(): string {
    return this.content;
  }
  public get _tts(): boolean {
    return this.tts;
  }

  public async delete(options: MessageDeleteOptions): Promise<Message> {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        await this.client.api.request({
          method: "DELETE",
          endpoint: `channels/channelID/messages/${this.id}`,
        });
        resolve(this);
      }, options.timeout);
    });
  }

  public async pin(options: MessagePinOptions): Promise<Message> {
    return new Promise((resolve, reject) => {
      this.client.api.request({
        method: "PUT",
        endpoint: `/channels/channelID}/pins/${this.id}`,
        body: options,
      });

      resolve(this);
    });
  }
}
