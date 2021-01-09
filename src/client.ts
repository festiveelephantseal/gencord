import { EventEmitter } from "events";
import ws from "ws";
import chalk from "chalk";

interface ClientOptions {
    token: string,
    intents?: number,
    status?: "online" | "idle" | "dnd" | "invisible"
}

export default class Client extends EventEmitter {
    private socket: ws;
    public options: ClientOptions;

    public constructor(options: ClientOptions) {
        super()
        this.options = options;
    }

    async login(): Promise<void> {

        this.socket = await new ws("wss://gateway.discord.gg/?v=8&encoding=json");

        this.socket.on("open", () => {
            this.identify();
            console.log("socket open")
        })

        this.socket.on("message", async (message) => {
            const payload = JSON.parse(message.toString());
            console.log(payload);
            const { t, s, op, d } = payload; 
            if (payload.op === 10) {
                const { heartbeat_interval } = d;
                this.heartbeat(heartbeat_interval);
                console.log(op)
            }
        })

        this.socket.on("error", (error: string) => {
            console.log(`${chalk.red("Error")}, ${chalk.red(error)}`)
        })

        this.socket.on("close", (error: any) => {
            if (error === 4004) throw new Error(`${chalk.red("Invalid token")}`)

            this.login()
        })
    }

    heartbeat(ms: number) {
        setInterval(() => {
            this.socket.send(JSON.stringify({op: 1, d: null}))
        }, ms)
    }

    destroy(reason?: string) {
        this.socket.close();
        console.log(`The socket was closed, ${reason || "No reason provided"}`)
    }

    identify() {
        this.socket.send(JSON.stringify({
            op: 2,
            d:{
                token: this.options.token,
                intents: this.options.intents,
                properties: {
                    $os: 'linux',
                    $browser: 'gencord', 
                    $device: 'gencord'
                },
                presence: {
                    status: this.options.status
                }
            },
        }))
    }
}