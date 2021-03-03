export const name: string = "guildinfo";
import { Client, Message, MessageEmbed, colors } from "../../index";

export const execute = (client: Client, message: Message, args: string[]) => {
  const guild = client.guilds.get(message.guild.id);
  let rolesSize = 0;
  let channelsSize = 0;
  let membersSize = 0;
  guild.roles.forEach((_) => rolesSize++);
  guild.channels.forEach((_) => channelsSize++);
  guild.members.forEach((_) => membersSize++);
  const embed = new MessageEmbed();
  embed.setTitle(`Information about ${guild.name}`);
  embed.addField("Server Owner", `<@${guild.owner_id}>`, true);
  embed.addField("Number of roles", rolesSize.toString(), true);
  embed.addField("Number of channels", channelsSize.toString(), true);
  embed.addField("Number of members", membersSize.toString(), true);
  embed.setImage(
    `https://cdn.discordapp.com/icons/${message.guild.id}/${guild.icon}.png`
  );
  embed.setColor(colors.AQUA);
  message.channel.send(embed);
};
