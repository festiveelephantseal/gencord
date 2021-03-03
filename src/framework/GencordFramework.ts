import { Client, ClientOptions } from "../";

export interface Directories {
  commands: string;
  events: string;
}

export interface Options extends ClientOptions {
  directories: Directories;
}
export class Framework extends Client {
  public directories: Directories;
  public options: Options;

  public constructor(options: Options) {
    super({
      token: options.token,
      intents: options.intents || 513,
    });
    this.options = options;
    this.directories = options.directories;
  }
}
