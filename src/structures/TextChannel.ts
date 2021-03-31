import {Client} from "../client/Client"
import {Guild} from "./Guild"
import { GuildChannel } from "./GuildChannel";
import { GuildMember } from "./GuildMember";
import { Message } from "./Message";


export class TextChannel extends GuildChannel{
public lastMessage?: Message;
public lastMessageID?: string;
public lastPinAt?: Date
public lastPinTimestamp?: number;
public messages = new Map<string, Message>();
public nsfw?: boolean;
public rate_limit_per_user: number;
public topic?: string;
readonly typing?: boolean;
readonly typingCount?: number;
}

//no methods
