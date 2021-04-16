import { Client } from "../../client/Client";
import { Base } from "../Base";
import { MessageTypes } from "../../typings/MessageOptions";
import {
  MessageDeleteOptions,
  MessagePinOptions,
} from "../../typings/MessageOptions";
//import { TextChannel } from "../TextChannel";
import { DMChannel } from "../DMChannel";
import { NewsChannel } from "../NewsChannel";
import { GuildMember } from "../GuildMember";
import { GuildChannel } from "../GuildChannel";
import { ChannelTypes } from "src/typings/ChannelOptions";
import { StoreChannel } from "../StoreChannel";
import { User } from "../User";

export class Message {
  private client: Client;
  private id: string;
  private channel_id: string;
  private type: ChannelTypes;
  //private _channel: TextChannel | NewsChannel | StoreChannel;
  private tts: boolean;
  private member: GuildMember;
  private author: User;
  private content: string;
  private timestamp: Date;
  private editedAt: Date;
  private mentionedEveryone: boolean;
  private nonce: string | number;
  public constructor(data: any, client: Client) {
    this.client = client;
    this.id = data.id;
    this.type = data.type;
    //this.channel = data.channel;
    this.tts = data.tts;
    this.channel_id = data.channel_id;
    this.content = data.content;
    this.timestamp = data.timestamp;
    this.editedAt = data.editedAt;
    this.mentionedEveryone = data.mentionedEveryone;
    this.nonce = data.nonce;
    this.type = data.type;
    this.author = data.author;
  }

  public get _type(): ChannelTypes {
    return this.type;
  }

  public get _author(): User {
    return this.author;
  }

  public get _id(): string {
    return this.id;
  }

  public get _timestamp(): Date {
    return this.timestamp;
  }

  public get _channel_id(): string {
    return this.channel_id;
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

  public get _editedAt(): Date {
    return this.editedAt;
  }

  public get _mentionedEveryone(): boolean {
    return this.mentionedEveryone;
  }

  public get _member(): GuildMember {
    return this.member;
  }

  /*public get channel(): TextChannel | NewsChannel | StoreChannel {
    return this.channel;
  }*/

  public async delete(options: MessageDeleteOptions): Promise<Message> {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        await this.client
          .request({
            method: "DELETE",
            endpoint: `channels/${this.channel_id}/messages/${this.id}`,
          })
          .catch((err) => {
            err ? reject(this) : false;
            throw new Error(err);
          });

        resolve(this);
      }, options.timeout);
    });
  }

  public async pin(options: MessagePinOptions): Promise<Message> {
    return new Promise((resolve, reject) => {
      this.client
        .request({
          method: "PUT",
          endpoint: `/channels/${this.channel_id}/pins/${this.id}`,
          body: options,
        })
        .catch((err) => {
          err ? reject(this) : false;
          throw new Error(err);
        });

      resolve(this);
    });
  }

  public async reply(content: string): Promise<Message> {
    console.log("asd");
    return new Promise(async (resolve, reject) => {
      await this.client
        .request({
          method: "POST",
          endpoint: `channels/${this.channel_id}/messages`,
          body: JSON.stringify({
            content: content,
            tts: false,
            message_reference: {
              message_id: this.id,
              channel_id: this.channel_id,
            },
          }),
        })
        .catch((err) => {
          err ? reject(this) : false;
          throw new Error(err);
        });
      resolve(this);
    });
  }

  public async unpin(options: MessagePinOptions): Promise<Message> {
    return new Promise((resolve, reject) => {
      this.client
        .request({
          method: "DELETE",
          endpoint: `/channels/channelID}/pins/${this.id}`,
          body: options,
        })
        .catch((err) => {
          err ? reject(this) : false;
          throw new Error(err);
        });
      resolve(this);
    });
  }
}
