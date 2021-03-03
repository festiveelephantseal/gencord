export const name: string = "getchannels";
import { Client } from "../../client/Client";
import { Message } from "../../structures/Message";
import { MessageEmbed } from "../../structures/MessageEmbed";

export const execute = (client: Client, message: Message, args: string[]) => {
  const guild = client.guilds.get(message.guild.id);
  const embed = new MessageEmbed();
  guild.channels.forEach((channel) =>
    embed.addField(
      `Channel name: ${channel.name}`,
      `Channel Topic ${
        channel.topic === null || undefined ? "No Topic" : channel.topic
      }`,
      true
    )
  );
  message.channel.send(embed);
};
