import { Message } from "src/structures/Message";

export interface ClientEvents {
    ready: () => void;
    message: (message: Message) => void;
}
