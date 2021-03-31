import { GuildChannel } from "./GuildChannel";

export class CategoryChannel extends GuildChannel {
    readonly children: Map<string, GuildChannel> = new Map();
}
//no methods