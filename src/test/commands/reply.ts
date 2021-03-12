export const name: string = "reply";
import { Client } from "../../client/Client";
import { Message } from "../../structures/Message";

export const execute = (client: Client, message: Message, args: string[]) => {
  message.reply("hello there reply");
};
