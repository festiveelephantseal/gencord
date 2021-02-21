<p align="center">
  <img src="assets/gencordnew.jpg" />
</p>

## About

**A beginner friendly Discord API wrapper.**

**Gencord** is a simple, beginner friendly, and easy to use library for interacting with the Discord API, with minimal syntax.

Why **Gencord?**

- Extremely fast, and efficient (2 dependencies)
- Beginner friendly
- Slash Commands + Inline Replies support
- JavaScript + TypeScript Support

For the full documentation, visit our website at [gencord.org](https://gencord.org)

## Installation

With npm

```bash
$ npm i gencord
```

With yarn

```bash
$ yarn add gencord
```

Here's a quick example

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

client.on("MESSAGE_CREATE", (messageData) => {
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

client.on("MESSAGE_CREATE", (messageData) => {
  const message = new Message(messageData, client);

  if (message.content === "!embed") {
    const embed = new MessageEmbed(client);

    embed.send(message.channel_id, {
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
