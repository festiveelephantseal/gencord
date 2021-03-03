import { colors } from "../constants/colors";

export interface ImageOptions {
  url?: string;
  proxy_url?: string;
  height?: number;
  width?: number;
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

export interface FieldOptions {
  name: string;
  value: string;
  inline?: boolean;
}

export class MessageEmbed {
  private title?: string;
  private description?: string;
  private url?: string;
  private color?: colors;
  private image?: ImageOptions;
  private footer?: FooterOptions;
  private fields?: Array<FieldOptions>;

  constructor(
    title?: string,
    description?: string,
    url?: string,
    color?: colors,
    image?: ImageOptions,
    footer?: FooterOptions,
    fields: Array<FieldOptions> = []
  ) {
    this.title = title;
    this.description = description;
    this.url = url;
    this.color = color;
    this.image = image;
    this.footer = footer;
    this.fields = fields;
  }

  setColor(color: colors) {
    this.color = color;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setDescription(description: string) {
    this.description = description;
  }

  setURl(url: string) {
    this.url = url;
  }

  addField(name: string, value: string, inline?: boolean) {
    this.fields.push({ name, value, inline });
  }

  setImage(url?: string, proxy_url?: string, height?: number, width?: number) {
    this.image = { url, proxy_url, height, width };
  }
}

/*public async send(channelID: string, embed: MessageEmbedOptions) {
    return await this.client.handler.fetch({
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
  }*/
