import Client from "../client";
import { token } from "../../token.json";

const client: Client = new Client({token: token, intents: 513, status: "dnd"})

client.on("READY", () => {
    console.log("ready")
})

client.on("MESSAGE_CREATE", (msg) => {
    console.log(msg.content);
})

client.login()