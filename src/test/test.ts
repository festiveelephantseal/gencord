import Client from "../client";
import { token } from "../../token.json";

const client: Client = new Client({token: token})

client.login()