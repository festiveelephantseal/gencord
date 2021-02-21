import { Client } from "../index";
import { Message, MessageEmbed, Client, colors } from "../index";
import { token } from "../../token.json";
import chalk from "chalk";

const client: Client = new Client({
  token: token,
  intents: 513,
  status: "dnd",
});

client.on("READY", () => {
  console.log(chalk.red("Ready"));
});

client.on("MESSAGE_CREATE", (messageData: Message) => {
  const message = new Message(messageData, client);

  if (message.content === "!hello") {
    message.reply(message.channel_id, "hello!");
  }

  if (message.content === "!hi") {
    message.send(message.channel_id, "hi!");
  }

  if (message.content === "!delete") {
    message.deleteChannel(message.channel_id);
  }

  if (message.content === "!embed") {
    const embed = new MessageEmbed(client);

    embed.send(message.channel_id, {
      title: "Title",
      description: "My description",
      footer: {
        text: "this is the footer",
      },
      color: colors.DARK_GREEN,
      url: "https://google.com",
      image: {
        url:
          "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
      },
    });
  }
});
