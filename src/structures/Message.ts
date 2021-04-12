import { Client } from "src/client/Client";
import { Base } from "./Base";

export class Message extends Base {
    public constructor(
         private id: string,
        //private type
        //private channel
        private tts: boolean,
        //private member,
        private content: string,
        private timestamp: Date,
        private editedAt: Date,
        private mentionedEveryone: boolean,
        private nonce: string | number,
    ){
     super();
    }
    public get _client(): Client {
        return this.client;
    }
    public get _id(): string {
        return this.id
    }
    public get _timestamp(): Date {
        return this.timestamp;
    }
    public get _nonce(): string | number {
        return this.nonce
    }
    public get _content(): string {
        return this.content
    }
    public get _tts(): boolean {
        return this.tts;
    }
}
