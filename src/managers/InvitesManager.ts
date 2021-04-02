import { User } from '../structures/User'
import { Guild } from "../structures/Guild";
import { GuildChannel } from "../structures/GuildChannel";

interface InviteObject {
    code: string,
    channel: GuildChannel,
    guild?: Guild,
    inviter?: User,
    target_user?: User,
    target_user_type?: number,
    approximate_presence_count?: number,
    approximate_member_count?: number
}
  
interface InviteMetaData {
    uses: number,
    max_uses: number,
    max_age: number,
    temporary: boolean,
    createdAt: Date 
}


export class InvitesManager extends GuildChannel {
    public constructor() {
        super();
    }
    
    public async getAll() {
        return await this.client.handler.fetch({
          method: "GET",
          endpoint: `/channels/${this.id}/invites`
        })
      }
    
      public async get(code: string) {
        return await this.client.handler.fetch({
          method: "GET",
          endpoint: `/invites/${code}`
        })
      }
    
      public async delete(code: string) {
        return await this.client.handler.fetch({
          method: "DELETE",
          endpoint: `/invites/${code}`
        })
      }
    
      public async create(params: InviteObject) {

      }
}