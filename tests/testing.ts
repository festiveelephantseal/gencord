import { Message } from "src";
import { Client } from "../src/client/Client";

const client = new Client("asd", {
  intents: 513,
});

client.login();

client.on("ready", () => {
  console.log("asd");
});
