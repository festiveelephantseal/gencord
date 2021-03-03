import { Client, ClientOptions } from '../';

export interface Directories {
    commands: string;
    events: string;
};

export interface Options extends ClientOptions {
    directories: Directories;
}
export class Framework {
    public client: Client;
    public directories: Directories;
    public options: Options;

    public constructor(options: Options) {
        this.options = options;
        this.directories = options.directories;
        this.client = new Client({
            token: options.token,
            intents: options.intents || 513,
            
        })
    };
}