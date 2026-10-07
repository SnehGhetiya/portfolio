import posthog from "posthog-js";

export type DelegatedEventName = "project_click" | "social_click";

export type Event =
  | { name: "play_name_pronunciation" }
  | { name: DelegatedEventName; properties: { label: string } };

export function trackEvent({ name, ...rest }: Event) {
  // Not initialised when there is no key (local dev, previews).
  if (!posthog.__loaded) return;
  posthog.capture(name, "properties" in rest ? rest.properties : undefined);
}
