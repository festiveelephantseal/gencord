<p align="center">
  <img src="assets/gencordnew.jpg" />
</p>

## About

**Gencord** is a simple, and easy to use library for interacting with the Discord API, with minimal syntax.

Heres a quick example

## Installation

With npm

```bash
$ npm i gencord
```

With yarn

```bash
$ yarn add gencord
```

```ts
const { Message, Client } = require("gencord");

const client = new Client({
  token: "mysupersecrettoken",
  intents: 513,
  status: "online",
});

client.on("READY", () => {
  console.log("Ready");
});

client.on("MESSAGE_CREATE", (data: Message) => {
  const message = new Message(data, client);

  if (data.content === "!hello") {
    message.reply(data.channel_id, "hello there!");
  }
});
```

### MessageEmbeds

In Gencord, MessageEmbeds are easy to create, and send.

```ts
const { MessageEmbed, colors } = require("gencord");

client.on("MESSAGE_CREATE", (data) => {
  const message = new Message(data, client);

  if (data.content === "!embed") {
    const embed = new MessageEmbed(client);

    embed.send(data.channel_id, {
      title: "Title",
      description: "My description",
      footer: {
        text: "this is the footer",
      },
      color: colors.BLUE,
      url: "https://google.com",
      image: {
        url:
          "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
      },
    });
  }
});
```
