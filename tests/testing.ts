import { Message } from "src";
import { Client } from "../src/client/Client";
import { token } from "./token";

const client = new Client(token, {
  intents: 513,
  status: "idle",
  activityType: 0,
  activityName: "github.com/Gencord/gencord",
});

client.on("ready", () => {
  console.log("ready");
});

client.on("message", (message: Message) => {
  if (message._content === "!hello") {
    message.reply("Hello!");
  }
});

client.login();
