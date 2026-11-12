"use client";

import { useCallback, useSyncExternalStore } from "react";
import { trackEvent } from "@/lib/events";
import { getServerTheme, getTheme, setTheme, subscribeTheme } from "@/lib/theme";

export function useTheme() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);

  const toggleTheme = useCallback(() => {
    const next = getTheme() === "dark" ? "light" : "dark";
    setTheme(next);
    trackEvent({ name: "theme_change", properties: { theme: next } });
  }, []);

  return { theme, toggleTheme };
}
