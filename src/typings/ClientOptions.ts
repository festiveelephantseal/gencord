export interface ClientOptions {
  token: string;
  intents?: number;
  status?: "online" | "idle" | "dnd" | "invisible";
  activityName?: string;
}
