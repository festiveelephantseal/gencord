import { BaseChannel } from "./BaseChannel";
import { ChannelTypes } from "../typings/ChannelOptions";
import { Collection } from "./Collection";
import { Permissions } from "./Permissions";
import { Client } from "../client/Client";
import { Guild } from "./Guild";
import { GuildMember } from "./GuildMember";

export abstract class GuildChannel extends BaseChannel {
  private _lastMessageID: string;
  private _lastPinAt: Date;
  private _position: number;
  private _parentID: string;
  private _topic: string;
  private _members = new Collection<string, GuildMember>();
  private _guild: Guild;
  private _nsfw: boolean;
  private _rateLimit: number;
  public constructor(data: any, client: Client) {
    super(data);
    this._lastMessageID = data.lastMessageID;
    this._lastPinAt = data.lastPinAt;
    this._position = data.position;
    this._topic = data.topic;
    this._guild = data.guild;
    this._members = data.members;
    this._rateLimit = data.rateLimit;
  }
  public get lastMessageID(): string {
    return this._lastMessageID;
  }

  public get lastPinAt(): Date {
    return this._lastPinAt;
  }

  public get position(): number {
    return this._position;
  }

  public get parentID(): string {
    return this._parentID;
  }

  public get topic(): string {
    return this._topic;
  }

  public get guild(): Guild {
    return this._guild;
  }

  public get members(): Collection<string, GuildMember> {
    return this._members;
  }

  public get rateLimit(): number {
    return this._rateLimit;
  }

  public get nsfw(): boolean {
    return this._nsfw;
  }
}
