import { Message } from "src";
import { Client } from "../src/client/Client";

const client = new Client({
  token: "",
  intents: 513,
});

client.login();

client.on("ready", () => {
  console.log("asd");
});

client.on("message", (msg) => {
  console.log(msg._content);
  if (msg._author._bot) return;
  if (msg._content === "asd") {
    msg.reply("HGI");
  }
});
