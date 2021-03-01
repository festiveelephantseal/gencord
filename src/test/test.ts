import {
  Message,
  MessageEmbed,
  Client,
  colors,
  Intents,
  ActivityTypes,
} from "../index";
import { token } from "../../token.json";
import fs from "fs";
import { join } from "path";

export const client: Client = new Client({
  token: token,
  intents: [Intents.GUILDS, Intents.GUILD_MESSAGES],
  status: "dnd",
  activityName: "gencord!",
  activityType: ActivityTypes.Playing,
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

    console.log(`Command ${command.name} loaded!`);
  }
};

client.on("READY", () => {
  console.log("Ready");
  loadCommands();
});

client.on("GUILD_BAN_ADD", () => {
  console.log("banned :o");
});

client.on("INTERACTION_CREATE", () => {});

client.on("message", (message: Message) => {
  const args = message.content.slice("!".length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!commands.has(command)) return;

  try {
    commands.get(command).execute(client, message, args);
  } catch (err) {
    console.log(err);
  }
});

/*client.on("MESSAGE_CREATE", async (messageData: Message) => {
  const message = new Message(messageData, client);
  const args = message.content.slice("!".length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!commands.has(command)) return;

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

  if (command === "channelid") {
    message.reply(message.channel_id, `${message.channel.id}`);
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
    client.slashCommands.registerGlobal("707676569270747197", {
      name: "test",
      description: "just a test command!",
      type: ApplicationCommandOptionType.SUB_COMMAND,
    });
  }
});*/
