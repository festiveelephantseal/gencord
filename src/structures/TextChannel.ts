import {Client} from "../client/Client"
import {Guild} from "./Guild"
import { GuildMember } from "./GuildMember";
import { Message } from "./Message";


export class TextChannel {
public lastMessage?: Message;
public lastMessageID?: string;
public lastPinAt?: Date
public lastPinTimestamp?: number;
public messages: Map<string, Message> = new Map();
public nsfw?: boolean;
public rate_limit_per_user: number;
public topic?: string;
readonly typing?: boolean;
readonly typingCount?: number;
}

//no methods
