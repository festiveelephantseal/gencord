<p align="center">
  <img src="assets/logo.png" />
</p>

https://img.shields.io/npm/dt/gencord.svg?maxAge=3600
## About
[Support Server](https://discord.gg/Bh9cGjum)

**A beginner friendly Discord API wrapper.**

**Gencord** is a simple, beginner friendly, and easy to use library for interacting with the Discord API, with minimal syntax.

Why **Gencord?**

- Extremely fast, and efficient (2 dependencies)
- Beginner friendly
- Slash Commands + Inline Replies support
- JavaScript + TypeScript Support

For the full documentation, visit our website at [gencord.js.org](https://gencord.js.org)

## Installation

With npm

```bash
$ npm i gencord
```

With yarn

```bash
$ yarn add gencord
```

Here's a quick example of a ping pong bot

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

client.on("message", (msg) => {
  if (msg.content === "!ping") {
    message.channel.send(`Pong! ${client.ws.ping()}ms`);
  }
});
```

### MessageEmbeds

In Gencord, MessageEmbeds are easy to create, and send.

```ts
const { MessageEmbed, colors } = require("gencord");

client.on("message", (msg) => {
  if (msg.content === "!embed") {
    const embed = new MessageEmbed(client);

    embed.send(msg.channel.id, {
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

### Gencord at the current state

Gencord is at the pre-alpha state right now, which means there is no NPM package currently published. If you would like to test out the library, please use the following instructions.

1. Download the code by running the command `git clone https://github.com/Gencord/gencord`, in your desired directory.
2. Run the command `npm install`, or `yarn install`, to install all of the dependencies of Gencord locally. The library only has 2 dependencies, so it should take no time.
3. All testing changes should be made in the test directory, as this is where the testing of the project is done. Next, create a `token.json` file in the root dir, with 1 key called token, and paste your bot's token there. To start the current example, run the command `npm run test-dev`, in the terminal. Your bot should start, and to look at the example's commands, check out `src/test/test.ts`.
