import { Client } from "../src/index";

const client = new Client({
  token: "ODI5ODIxNTczMzEzNDYyMjcy.YG9tkA.xBiB3MnO_3H8gtY8dIqgFOkeCyQ",
  intents: 513,
});

client.on("ready", () => {
  console.log("asd");
});

client.on("message", (msg) => {
  console.log(msg._content);
});

client.login("ODI5ODIxNTczMzEzNDYyMjcy.YG9tkA.xBiB3MnO_3H8gtY8dIqgFOkeCyQ");
