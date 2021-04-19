import { ActivityOptions } from "./ActivityOptions";
export interface ClientOptions {
  intents?: number | string;
  status?: "online" | "idle" | "dnd" | "invisible";
  activityName?: string;
  activityType?: ActivityOptions;
}
