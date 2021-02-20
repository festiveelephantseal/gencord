import { User } from "./User";

export class GuildMember {
  public user?: User;
  public nick?: string;
  public roles: string[];
  public joined_at: number;
  public premium_since?: number;
  public deaf: boolean;
  public mute: boolean;
  public pending?: boolean;

  public constructor(data) {
    this._set(data);
  }

  _set(data) {
    this.user = data.user;
    this.nick = data.nick ?? undefined;
    this.roles = data.roles;
    this.joined_at = data.joined_at;
    this.premium_since = data.premium_since;
    this.deaf = data.deaf;
    this.mute = data.mute;
    this.pending = data.pending ?? false;
  }
}
