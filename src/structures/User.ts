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

  public constructor(data) {
    this._set(data);
  }

  _set(data) {
    this.id = data.id;
    this.username = data.username;
    this.discriminator = data.discriminator;
    this.avatar = data.avatar ?? undefined;
    this.bot = data.bot ?? false;
    this.system = data.system ?? false;
    this.mfa_enabled = data.mfa_enabled ?? false;
    this.locale = data.locale;
    this.verified = data.verified ?? false;
    this.email = data.email ?? undefined;
    this.flags = data.flags;
    this.premium_type = data.premium_type ?? 0;
    this.public_flags = data.public_flags;
  }
}
