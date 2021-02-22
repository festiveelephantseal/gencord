import {
  Message,
  MessageEmbed,
  Client,
  colors,
  ApplicationCommandOptionType,
  SlashCommand,
} from "../index";
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

client.on("INTERACTION_CREATE", () => {});

client.on("MESSAGE_CREATE", (messageData: Message) => {
  const message = new Message(messageData, client);
  const args = message.content.slice("!".length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "hello") {
    message.reply(message.channel_id, `${args[0]}`);
  }

  if (command === "hi") {
    message.channel.send(message.channel_id, "hi!");
  }

  if (command === "embed") {
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

  if (command === "slash") {
    const cmd = new SlashCommand(client);

    cmd.register("707676569270747197", {
      name: "test",
      description: "just a test command!",
      type: ApplicationCommandOptionType.SUB_COMMAND,
    });
  }
});
