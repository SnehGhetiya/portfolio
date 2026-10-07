import { op } from "./openpanel";

export type Event = {
  name: "play_name_pronunciation";
  properties?: Record<string, string | number | boolean | null>;
};

export function trackEvent({ name, properties }: Event) {
  op?.track(name, properties);
}
