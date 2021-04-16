import { Message } from "../structures/message/Message";

export interface ClientEvents {
  ready: () => void;
  message: (message: Message) => void;
}
