import { Client } from "../client";
import { colors } from "../constants/colors";

export interface ImageOptions {
  url?: string;
  proxy_url?: string;
  height?: string;
  width?: string;
}

export interface FooterOptions {
  text: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

export interface MessageEmbedOptions {
  title: string;
  description?: string;
  url?: string;
  color?: colors;
  image?: ImageOptions;
  footer?: FooterOptions;
}

export class MessageEmbed {
  private client: Client;

  public constructor(client: Client) {
    this.client = client;
  }

  public async send(channelID: string, embed: MessageEmbedOptions) {
    const data = await this.client.handler.fetch({
      endpoint: `channels/${channelID}/messages`,
      method: "POST",
      body: JSON.stringify({
        tts: false,
        embed: {
          title: embed.title,
          description: embed.description,
          url: embed.url,
          color: embed.color,
          footer: embed.footer,
          image: {
            url: embed.image.url,
            proxy_url: embed.image.proxy_url,
            height: embed.image.height,
            width: embed.image.width,
          },
        },
      }),
    });
  }
}
