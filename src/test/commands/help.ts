export const name: string = "help";
import { Client } from "../../client/Client";
import { Message } from "../../structures/Message";
import { MessageEmbed, Colors } from "../../index";
import { commands } from "../test";

export const execute = (client: Client, message: Message, args: string[]) => {
  const embed = new MessageEmbed({
    title: "Commands",
    color: Colors.BLUE,
  });

  commands.forEach((command) => {
    embed.addField(command.name, command.description, false);
  });

  message.channel.send(embed);
};
