import { Base } from "./Base";
import { DMChannel } from "./DMChannel";
import { Message } from "./Message";
import { UserTypes } from "../constants/UserTypes";

export class User extends Base {
  readonly createdAt: Date;
  readonly createdTimestamp: number;
  readonly defaultAvatar: string;
  readonly dmChannel?: DMChannel;
  readonly lastMessage?: Message;
  readonly partial: boolean;
  readonly tag?: string;
  //add this later once presence is complete
  //readonly presence
  public lastMessageChannelID?: string;
  public lastMessageID?: string;
  public id: string;
  public username?: string;
  public discriminator?: string;
  public avatar?: string;
  public bot?: boolean;
  public system?: boolean;
  public mfa_enabled?: boolean;
  public locale?: string;
  public verified?: boolean;
  public email?: string;
  public flags?: number;
  public premium_type?: 0 | 1 | 2;
  public public_flags?: number;

  public constructor(data) {
    super();
    this._set(data);
  }

  _set(data: UserTypes) {
    this.id = data.id;
    this.username = data.username;
    this.discriminator = data.discriminator;
    this.avatar = data.avatar ?? undefined;
    this.bot = data.bot ?? false;
    this.system = data.system ?? false;
    this.mfa_enabled = data.mfa_enbaled ?? false;
    this.locale = data.locale;
    this.verified = data.verified ?? false;
    this.email = data.email ?? undefined;
    this.flags = data.flags;
    this.premium_type = data.premium_type ?? 0;
    this.public_flags = data.public_flags;
  }
}
