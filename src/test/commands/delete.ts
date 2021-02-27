export const name: string = "delete";

import { Client } from "../../client/Client";
import { Message } from "../../structures/Message";

export const execute = (client: Client, message: Message, args: string[]) => {
  message.delete();
};
