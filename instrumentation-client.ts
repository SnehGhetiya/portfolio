import posthog from "posthog-js";
import { trackEvent, type DelegatedEventName } from "@/lib/events";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

// No key (local dev, previews) means no analytics instead of a broken client.
if (key) {
  posthog.init(key, {
    // First-party proxy (see rewrites in next.config.ts) so ad blockers don't drop events.
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    defaults: "2025-05-24",
    // Cookieless: nothing is stored on the visitor's device, so no consent banner is needed.
    persistence: "memory",
    person_profiles: "identified_only",
    capture_exceptions: true,
    // By default PostHog injects its lazy scripts before the first <body> script, which is the
    // JSON-LD tag React is hydrating, causing a hydration mismatch. <head> avoids that.
    external_scripts_inject_target: "head",
  });
}

// Server components mark clickable elements with `data-track-event` / `data-track-label`.
document.addEventListener("click", (event) => {
  const el = (event.target as Element).closest<HTMLElement>("[data-track-event]");
  if (!el) return;
  trackEvent({
    name: el.dataset.trackEvent as DelegatedEventName,
    properties: { label: el.dataset.trackLabel ?? "" },
  });
});
