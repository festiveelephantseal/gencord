import Client from "../client";

interface ImageOptions {
  url?: string;
  proxy_url?: string;
  height?: string;
  width?: string;
}

interface FooterOptions {
  text: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

interface MessageEmbedOptions {
  title: string;
  description?: string;
  url?: string;
  color?: number;
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
