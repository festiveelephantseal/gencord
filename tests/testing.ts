import { Client } from "../src/client/Client";

const client = new Client({
  token: "ODI5ODIxNTczMzEzNDYyMjcy.YG9tkA.N03TbKDogNFN02Pdb6zoGFNrxKc",
  intents: 513,
});

client.on("ready", () => {
  console.log("ready");
});

client.login("ODI5ODIxNTczMzEzNDYyMjcy.YG9tkA.N03TbKDogNFN02Pdb6zoGFNrxKc");
