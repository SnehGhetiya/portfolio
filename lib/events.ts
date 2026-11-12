import posthog from "posthog-js";

export type DelegatedEventName = "project_click" | "social_click" | "resume_download";

export type Event =
  | { name: "play_name_pronunciation" }
  | { name: "copy_email" }
  | { name: "command_menu_open" }
  | { name: "theme_change"; properties: { theme: "light" | "dark" } }
  | { name: DelegatedEventName; properties: { label: string } };

export function trackEvent({ name, ...rest }: Event) {
  // Not initialised when there is no key (local dev, previews).
  if (!posthog.__loaded) return;
  posthog.capture(name, "properties" in rest ? rest.properties : undefined);
}
