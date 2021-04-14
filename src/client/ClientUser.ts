export class ClientUser {
  constructor(
    private username: string,
    private discriminator: string,
    private verified: boolean,
    private id: string,
    private flags: number,
    private email: string | null,
    private bot: boolean,
    private avatar: string
  ) {}
  public get _username(): string {
    return this.username;
  }
  public get _discriminator(): string {
    return this.discriminator;
  }
  public get _verified(): boolean {
    return this.verified;
  }
  public get _id(): string {
    return this.id;
  }
  public get _flags(): number {
    return this.flags;
  }
  public get _email(): string | null {
    return this.email;
  }
  public get _bot(): boolean {
    return this.bot;
  }
  public get _avatar(): string {
    return this.avatar;
  }
}
