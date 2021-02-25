export const name: string = "ping";
import { Client } from "../../client/Client";
import { Message } from "../../structures/Message";

export const execute = (client: Client, message: Message, args: string[]) => {
  const arg1: string = args[0];
  message.channel.send(message.channel_id, `Pong! ${client.ping()}ms`);
};
