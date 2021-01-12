import { User } from "./User";
import { GuildMember } from "./GuildMember";

export class Message {
    public id: string;
    public channel_id: string;
    public guild_id?: string;
    public author: User;
    public member?: GuildMember;
    public content: string;
    public timestamp: number;
    public edited_timestamp?: number;
    public tts: boolean;
    public mention_everyone: boolean;
    public mentions: User[];
    public mention_roles: Array<string>;
}