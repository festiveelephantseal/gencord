# gencord
A new discord library!

Heres a quick example
```ts
import Client from "../client";

const client: Client = new Client({token: "mysupersecrettoken", intents: 513, status: "dnd"});

client.on("READY", () => {
    console.log("Ready");
})

client.login();