import { User } from "../structures/User";
import { Message } from "../structures/Message";
import {
  ImageOptions,
  FooterOptions,
  MessageEmbedOptions,
} from "../structures/MessageEmbed";
import { Manager } from "../Manager";
import { RestHandler } from "../APIHandler";
import { Client, ClientOptions } from "../client";

declare module "gencord" {
  //Client
  export class Client {
    public socket: WebSocket;
    public options: ClientOptions;
    public handler: RestHandler;
    public manager: Manager;

    public constructor(options: ClientOptions);

    public login(): Promise<void>;
    public heartbeat(ms: number);
    public destroy(reason?: string);
    public identify();
  }

  //Structures
  export class User {
    public id: string;
    public username: string;
    public discriminator: string;
    public avatar?: string;
    public bot?: boolean;
    public system?: boolean;
    public mfa_enabled?: boolean;
    public locale?: string;
    public verified?: string;
    public email?: string;
    public flags?: number;
    public premium_type?: 0 | 1 | 2;
    public public_flags?: number;

    public constructor(data);
    public _set(data);
  }

  export class Message {
    private client: Client;
    public id: string;
    public channel_id: string;
    public guild_id?: string;
    public author;
    public member?;
    public content: string;
    public timestamp: number;
    public edited_timestamp?: number;
    public tts: boolean;
    public mention_everyone: boolean;
    public mentions: User[];
    public mention_roles: Array<string>;

    public constructor(data, client);

    public _set();
    public reply(channelID: string, content: string): Promise<void>;
    public send(channelID: string, content: any): Promise<void>;
    public deleteChannel(channelID: string): Promise<void>;
  }

  //GuildMember
  export class GuildMember {
    public user?: User;
    public nick?: string;
    public roles: string[];
    public joined_at: number;
    public premium_since?: number;
    public deaf: boolean;
    public mute: boolean;
    public pending?: boolean;

    public constructor(data);

    public _set(data);
  }

  //MessageEmbed
  export class MessageEbed {
    private client: Client;
    public constructor(client: Client);

    public send(channelID: string, embed: MessageEmbedOptions): Promise<void>;
  }
}
