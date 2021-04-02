import { GuildChannel } from "./GuildChannel";

export class CategoryChannel extends GuildChannel {
  readonly children = new Map<string, GuildChannel>();
}
//no methods
