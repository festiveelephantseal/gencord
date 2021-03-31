import { Channel } from "./Channel";
import { Message } from "./Message";
import { TextChannel } from "./TextChannel";
import { User } from "./User";


export class DMChannel extends Channel {
    public lastMessage?: Message;
    public lastMessageID?: string;
    public lastPinAt?: Date
    public lastPinTimestamp?: number;
    public messages= new Map<string, Message>();
    public recipient: User;
    readonly partial?: boolean;
    readonly typing?: boolean;
    readonly typingCount?: number;
}