import { getCalApi } from "@calcom/embed-react";
import { BOOKING_URL, CAL_LINK } from "@/data/booking";
import { trackEvent } from "@/lib/events";
import { getTheme } from "@/lib/theme";

const NAMESPACE = "booking";

type CalApi = Awaited<ReturnType<typeof getCalApi>>;

let calApi: Promise<CalApi> | null = null;

/**
 * Loads Cal.com's embed script on first use only, so visitors who never book don't download it.
 * Listeners are registered once, when the script first loads.
 */
function loadCal() {
  calApi ??= getCalApi({ namespace: NAMESPACE }).then((cal) => {
    cal("on", {
      action: "bookingSuccessfulV2",
      callback: () => trackEvent({ name: "call_booked" }),
    });
    return cal;
  });
  // A failed load (blocked script, offline) is retried on the next click.
  calApi.catch(() => {
    calApi = null;
  });
  return calApi;
}

let preloaded = false;

/**
 * Warms Cal.com's assets ahead of a likely click (hover or focus). Runs once, and only fetches
 * assets: a pre-rendered iframe would be thrown away because the popup is opened with the theme
 * that is current at click time.
 */
export function preloadBooking() {
  if (preloaded) return;
  preloaded = true;
  void loadCal()
    .then((cal) => cal("preload", { calLink: CAL_LINK, options: { prerenderIframe: false } }))
    .catch(() => {
      preloaded = false;
    });
}

/** Opens the booking calendar in a popup, or Cal.com's page in a new tab if the popup fails. */
export async function openBooking(source: string) {
  trackEvent({ name: "booking_open", properties: { label: source } });
  try {
    const cal = await loadCal();
    const theme = getTheme();
    cal("ui", { theme, hideEventTypeDetails: false, layout: "month_view" });
    cal("modal", { calLink: CAL_LINK, config: { layout: "month_view", theme } });
  } catch {
    window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
  }
}
