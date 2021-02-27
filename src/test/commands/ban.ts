export const name: string = "ban";
import { Client } from "../../client/Client";
import { Message } from "../../structures/Message";

export const execute = (client: Client, message: Message, args: string[]) => {
  const userID = args[0];

  if (!userID) return message.channel.send("You need to provide a user ID!");

  message.guild.ban(message.guild_id, userID, {
    delete_message_days: 5,
    reason: "test",
  });

  message.channel.send(`Banned ${userID}`);
};
