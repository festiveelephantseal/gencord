import { Message } from "../structures/Message";

export interface ClientEvents {
  ready: () => void;
  message: (message: Message) => void;
}
