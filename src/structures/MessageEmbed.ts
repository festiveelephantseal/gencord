import { Colors } from "../constants/Colors";

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
  title?: string;
  description?: string;
  url?: string;
  color?: Colors;
  image?: ImageOptions;
  footer?: FooterOptions;
  fields?: Array<FieldOptions>;
}

export interface FieldOptions {
  name: string;
  value: string;
  inline?: boolean;
}

export class MessageEmbed {
  public title?: string;
  public description?: string;
  public url?: string;
  public color?: string | Colors;
  public image?: ImageOptions;
  public footer?: FooterOptions;
  public fields?: Array<FieldOptions>;

  constructor(options?: MessageEmbedOptions) {
    this.title = options.title;
    this.description = options.description;
    this.url = options.url;
    this.color = options.color;
    this.image = options.image;
    this.footer = options.footer;
    this.fields = options.fields;
  }

  setColor(color: string | Colors): MessageEmbed {
    this.color =
      Colors[color] || color.toString().startsWith("#")
        ? color.toString().slice(1)
        : color.toString();
    return this;
  }

  setTitle(title: string): MessageEmbed {
    this.title = title;
    return this;
  }

  setDescription(description: string): MessageEmbed {
    this.description = description;
    return this;
  }

  setURl(url: string): MessageEmbed {
    this.url = url;
    return this;
  }

  addField(name: string, value: string, inline: boolean): MessageEmbed {
    this.fields.push({ name, value, inline });
    return this;
  }

  setImage(
    url?: string,
    proxy_url?: string,
    height?: number,
    width?: number
  ): MessageEmbed {
    this.image = { url, proxy_url, height, width };
    return this;
  }
}
