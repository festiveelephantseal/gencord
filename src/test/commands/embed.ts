export const name: string = "embed";

import { Client } from "../../";
import { Message } from "../../";
import { MessageEmbed } from "../../";

export const execute = (client: Client, message: Message, args: string[]) => {
  const embed = new MessageEmbed({
    title: "this is a title",
    description: "like the new format for embeds?",
  }).setColor("#6969");
  message.channel.send(embed);
};
