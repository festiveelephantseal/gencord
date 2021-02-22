export const name: string = "ping";

export const execute = (client, message, args) => {
  const arg1: string = args[0];
  message.channel.send(message.channel_id, arg1);
};
