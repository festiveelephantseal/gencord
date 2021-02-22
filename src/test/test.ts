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
import fs from "fs";
import { join } from "path";

const client: Client = new Client({
  token: token,
  intents: 513,
  status: "dnd",
});

interface Command {
  name: string;
  description: string;
  execute(client: Client, message: Message, args: Array<string>);
}

const commands = new Map();

const loadCommands = async () => {
  const filePath = join(__dirname, "commands");
  for (const file of fs.readdirSync(filePath)) {
    const command: Command = await import(`${filePath}/${file}`);
    commands.set(command.name, command);
  }
};

client.on("READY", () => {
  console.log(chalk.red("Ready"));
  loadCommands();
});

client.on("INTERACTION_CREATE", () => {});

client.on("MESSAGE_CREATE", (messageData: Message) => {
  const message = new Message(messageData, client);
  const args = message.content.slice("!".length).split(/ +/);
  const command = args.shift().toLowerCase();

  try {
    commands.get(command).execute(client, message, args);
  } catch (err) {
    console.log(err);
  }

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
