export const name: string = "ban";
import { Client } from "../../client";
import { Message } from "../../structures/Message";

export const execute = (client: Client, message: Message, args: string[]) => {
  const userID = args[0];

  if (!userID)
    return message.channel.send(
      message.channel_id,
      "You need to provide a user ID!"
    );

  message.guild.ban(message.guild_id, userID);

  message.channel.send(message.channel_id, `Banned ${userID}`);
};
