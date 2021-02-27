export const name: string = "ping";
import { Client } from "../../client/Client";
import { Message } from "../../structures/Message";

export const execute = (client: Client, message: Message, args: string[]) => {
  message.channel.send(`Pong! ${client.ping()}ms`);
};
