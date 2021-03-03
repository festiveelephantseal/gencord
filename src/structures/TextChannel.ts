interface OverWrites {
  id: string;
  type: number;
  allow: string;
  deny: string;
}

export class TextChannel {
  id: string;
  /*  
    GUILD_TEXT	0	a text channel within a server
    DM	        1	a direct message between users
    GUILD_VOICE	2	a voice channel within a server
    GROUP_DM	3	a direct message between multiple users
    GUILD_CATEGORY	4	an organizational category that contains up to 50 channels
    GUILD_NEWS	5	a channel that users can follow and crosspost into their own server
    GUILD_STORE	6	a
    */
  type: number = 0;
  guild_id: string;
  position: number;
  permission_overwrites: Array<OverWrites>;
  name?: string;
  topic?: string;
  nsfw?: boolean;
  last_message_id?: string;
}
