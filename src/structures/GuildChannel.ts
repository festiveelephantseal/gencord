import { BaseChannel } from "./BaseChannel";
import { ChannelTypes } from "../typings/ChannelOptions";
import { Collection } from "./Collection";
import { Permissions } from "./Permissions";
import { Client } from "../client/Client";
import { Guild } from "./Guild";
import { GuildMember } from "./GuildMember";

export abstract class GuildChannel extends BaseChannel {
  private lastMessageID: string;
  private lastPinAt: Date;
  private position: number;
  private parentID: string;
  private topic: string;
  private members: Collection<string, GuildMember>;
  private guild: Guild;
  private permissins: Collection<string, Permissions>;
  private nsfw: boolean;
  private rateLimit: number;
  public constructor(
    id: string,
    client: Client,
    lastMessageID: string,
    lastPinAt: Date,
    type: ChannelTypes,
    name: string,
    position: number,
    parentID: string | null,
    topic: string,
    guild: Guild,
    members: Collection<string, GuildMember>,
    permissions: Collection<string, Permissions>,
    nsfw: boolean,
    rateLimit: number
  ) {
    super();
    this.lastMessageID = lastMessageID;
    this.lastPinAt = lastPinAt;
    this.position = position;
    this.topic = topic;
    this.guild = guild;
    this.members = members;
    this.rateLimit = rateLimit;
  }
  public get _lastMessageID(): string {
    return this.lastMessageID;
  }

  public get _lastPinAt(): Date {
    return this.lastPinAt;
  }

  public get _position(): number {
    return this.position;
  }

  public get _parentID(): string {
    return this.parentID;
  }

  public get _topic(): string {
    return this.topic;
  }

  public get _guild(): Guild {
    return this.guild;
  }

  public get _members(): Collection<string, GuildMember> {
    return this.members;
  }

  public get _rateLimit(): number {
    return this.rateLimit;
  }

  public get _nsfw(): boolean {
    return this.nsfw;
  }

  public async send(content: string) {
    console.log("asd");
    return new Promise(async (resolve, reject) => {
      await this.client
        .request({
          method: "POST",
          endpoint: `channels/829821374440669250/messages`,
          body: JSON.stringify(content),
        })
        .catch((err) => {
          err ? reject(this) : false;
          throw new Error(err);
        });
      resolve(this);
    });
  }
}
