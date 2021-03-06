export const name: string = "react";
import { Client } from "../../client/Client";
import { Message } from "../../structures/Message";

export const execute = (client: Client, message: Message, args: string[]) => {
  message.reactions.create("👍");
};
