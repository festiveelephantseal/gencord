<p align="center">
  <img src="assets/gencordnew.jpg" />
</p>

## About

Gencord is a new and exciting discord library!

Heres a quick example

```ts
import Client from "../client";
import { Message } from "../structures/Message";

const client: Client = new Client({
  token: "mysupersecrettoken",
  intents: 513,
  status: "dnd",
});

client.on("READY", () => {
  console.log("Ready");
});

client.on("MESSAGE_CREATE", (data: Message) => {
  if (msg.content === "!hello") {
    const message = new Message(data, client);
    message.reply(data.channel_id, "hello world!");
  }
});

client.login();
```
