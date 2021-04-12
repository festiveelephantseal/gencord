export default class ClientUser {
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
  get _username(): string {
    return this.username;
  }
  get _discriminator(): string {
    return this.discriminator;
  }
  get _verified(): boolean {
    return this.verified;
  }
  get _id(): string {
    return this.id;
  }
  get _flags(): number {
    return this.flags;
  }
  get _email(): string | null {
    return this.email;
  }
  get _bot(): boolean {
    return this.bot;
  }
  get _avatar(): string {
    return this.avatar;
  }
}
