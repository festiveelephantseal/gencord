import { WebSocketManager } from "../ws/WebSocketManager";
import { ClientOptions } from "../typings/ClientOptions";

export class Client extends WebSocketManager {
  public options: ClientOptions;
  public token: string;

  public constructor(options: ClientOptions) {
    super();

    this.options = options;
    this.token = options.token;
    this.connect();
  }

  public identify() {
    this.socket.send(
      JSON.stringify({
        op: 2,
        d: {
          token: this.options.token,
          intents: this.options.intents,
          properties: {
            $os: "linux",
            $browser: "gencord",
            $device: "gencord",
          },
          presence: {
            status: this.options.status,
            activities: [
              {
                name: this.options.activityName,
                type: this.options.activityType,
              },
            ],
          },
        },
      })
    );
  }
}
