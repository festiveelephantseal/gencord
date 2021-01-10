import Client from "../client";
import { Message } from "../structures/Message";
import { token } from "../../token.json";
import chalk from "chalk";

const client: Client = new Client({token: token, intents: 513, status: "dnd"})

client.on("READY", () => {
    console.log(chalk.red("Ready"))
})

client.on("MESSAGE_CREATE", (msg: Message) => {
    console.log(msg.content);
})

client.login()