export const name: string = "get";
import { Client } from "../../client/Client";
import { Message } from "../../structures/Message";
import { MessageEmbed } from "../../structures/MessageEmbed";

export const execute = (client: Client, message: Message, args: string[]) => {
  const guild = client.guilds.get(message.guild.id);
  const embed = new MessageEmbed();
  guild.roles.forEach((role) =>
    embed.addField(
      `Role name: ${role.name}`,
      `Mentionable? ${role.mentionable}`
    )
  );
  message.channel.send(embed);
};
