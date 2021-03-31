type Channel = "dm" | "text" | "voice" | "category" | "news" | "unknown"
interface OverWrites {
    id: string;
    allow: string;
    deny: string;
    type: number;
}


export class VoiceChannel {
   public id: string;
   public type: Channel;
   public position: number;
   public rawPosition: number;
   public permission_overwrites: Array<OverWrites>;
   public name?: string;
   public bitrate?: number;
   public deletable?: boolean;
   public deleted?: boolean;
   public viewable?: boolean;
   public maxUsers?: number;
   public manageable?: boolean;
   public editable?: boolean;
   public joinable?: boolean;
   public speakable?: boolean;
}
