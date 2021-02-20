import Client from "../client";
import { Message, MessageEmbed } from "../index";
//import { token } from "../../token.json";
import chalk from "chalk";

const client: Client = new Client({
  token: "ODEyMDIxMTQ0OTExNDc4ODQ1.YC6rnw.0WD6pbcf8rfmvrS5r8LSrCyyaj0",
  intents: 513,
  status: "dnd",
});

client.on("READY", () => {
  console.log(chalk.red("Ready"));
});

client.on("MESSAGE_CREATE", (data: Message) => {
  const message = new Message(data, client);

  if (data.content === "!hello") {
    message.reply(data.channel_id, "hello!");
  }

  if (data.content === "!hi") {
    message.send(data.channel_id, "hi!");
  }

  if (data.content === "!embed") {
    const embed = new MessageEmbed(client);

    embed.send(data.channel_id, {
      title: "Title",
      description: "My description",
      footer: {
        text: "this is the footer",
      },
      url: "https://google.com",
      image: {
        url:
          "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
      },
    });
  }
});
