export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/** Browser-chrome colours, matching `--background` in globals.css. */
export const THEME_COLORS: Record<Theme, string> = {
  light: "#ffffff",
  dark: "#0a0a0a",
};

/**
 * Runs in <head> before first paint: applies the saved theme, or the OS preference when none is
 * saved, so the page never flashes the wrong colours. Kept in sync with `applyTheme` below.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",d?${JSON.stringify(THEME_COLORS.dark)}:${JSON.stringify(THEME_COLORS.light)})}catch(e){}})()`;

const listeners = new Set<() => void>();

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
  for (const listener of listeners) listener();
}

export function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/** Server snapshot: the page is rendered light; the init script corrects it before paint. */
export function getServerTheme(): Theme {
  return "light";
}

export function setTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage blocked (private mode): the theme still applies for this visit.
  }
  applyTheme(theme);
}

/** Subscribes to theme changes, including OS changes while the visitor has no saved choice. */
export function subscribeTheme(listener: () => void) {
  listeners.add(listener);
  const media = matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = (event: MediaQueryListEvent) => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {}
    if (!saved) applyTheme(event.matches ? "dark" : "light");
  };
  media.addEventListener("change", onSystemChange);
  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", onSystemChange);
  };
}
