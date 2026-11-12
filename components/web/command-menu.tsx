"use client";

/*
 * The menu follows the WAI-ARIA combobox pattern: focus stays in the search input, which points at
 * the highlighted `role="option"` via `aria-activedescendant` and handles the arrow and Enter keys.
 * These rules assume each option is focused and keyboard-handled on its own, and that a native
 * <select> would fit, neither of which applies here.
 */
/* oxlint-disable jsx-a11y/prefer-tag-over-role, jsx-a11y/no-noninteractive-element-to-interactive-role, jsx-a11y/click-events-have-key-events */

import { Dialog } from "@base-ui/react/dialog";
import {
  BriefcaseIcon,
  CopyIcon,
  CornerDownLeftIcon,
  FileDownIcon,
  FolderIcon,
  LayersIcon,
  MailIcon,
  MoonIcon,
  SearchIcon,
  SendIcon,
  SunIcon,
} from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { GithubMarkIcon, LinkedinMarkIcon } from "@/components/web/social-icons";
import { RESUME_HREF } from "@/data/resume";
import { SOCIAL_LINKS } from "@/data/social-links";
import { USER } from "@/data/user";
import { useTheme } from "@/hooks/use-theme";
import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

const OPEN_EVENT = "command-menu:open";

/** Opens the command menu from anywhere, e.g. a header button. */
export function openCommandMenu() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

type Command = {
  id: string;
  group: "Navigate" | "Actions" | "Links";
  label: string;
  keywords?: string;
  icon: React.ReactNode;
  run: () => void;
};

const SOCIAL_ICONS = {
  github: <GithubMarkIcon className="size-4" />,
  linkedin: <LinkedinMarkIcon className="size-4" />,
  email: <MailIcon />,
};

function goTo(hash: string) {
  // `/#id` also works from other routes (e.g. the 404 page).
  window.location.assign(`/${hash}`);
}

function downloadResume() {
  const link = document.createElement("a");
  link.href = RESUME_HREF;
  link.download = "";
  link.click();
  trackEvent({ name: "resume_download", properties: { label: "command_menu" } });
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const listId = useId();
  const listRef = useRef<HTMLUListElement>(null);

  useHotkeys(
    "mod+k",
    () => {
      setOpen((value) => !value);
    },
    { preventDefault: true, enableOnFormTags: true },
  );

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (open) trackEvent({ name: "command_menu_open" });
  }, [open]);

  const commands = useMemo<Command[]>(
    () => [
      {
        id: "skills",
        group: "Navigate",
        label: "Skills",
        keywords: "tech stack expertise",
        icon: <LayersIcon />,
        run: () => goTo("#skills"),
      },
      {
        id: "experience",
        group: "Navigate",
        label: "Experience",
        keywords: "work jobs career",
        icon: <BriefcaseIcon />,
        run: () => goTo("#experience"),
      },
      {
        id: "projects",
        group: "Navigate",
        label: "Projects",
        keywords: "featured work",
        icon: <FolderIcon />,
        run: () => goTo("#projects"),
      },
      {
        id: "contact",
        group: "Navigate",
        label: "Contact",
        keywords: "connect social hire",
        icon: <SendIcon />,
        run: () => goTo("#social"),
      },
      {
        id: "theme",
        group: "Actions",
        label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        keywords: "theme dark light appearance",
        icon: theme === "dark" ? <SunIcon /> : <MoonIcon />,
        run: toggleTheme,
      },
      {
        id: "copy-email",
        group: "Actions",
        label: "Copy email address",
        keywords: USER.email,
        icon: <CopyIcon />,
        run: () => {
          void navigator.clipboard?.writeText(USER.email);
          trackEvent({ name: "copy_email" });
        },
      },
      {
        id: "resume",
        group: "Actions",
        label: "Download resume",
        keywords: "cv pdf",
        icon: <FileDownIcon />,
        run: downloadResume,
      },
      ...SOCIAL_LINKS.map<Command>((link) => ({
        id: `link-${link.name}`,
        group: "Links",
        label: link.title,
        keywords: link.handle,
        icon: SOCIAL_ICONS[link.name],
        run: () => {
          trackEvent({ name: "social_click", properties: { label: link.name } });
          if (link.name === "email") window.location.href = link.href;
          else window.open(link.href, "_blank", "noopener,noreferrer");
        },
      })),
    ],
    [theme, toggleTheme],
  );

  const results = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (terms.length === 0) return commands;
    return commands.filter((command) => {
      const haystack = `${command.label} ${command.keywords ?? ""} ${command.group}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
  }, [commands, query]);

  const activeIndex = Math.min(active, Math.max(results.length - 1, 0));

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setQuery("");
      setActive(0);
    }
  }

  function runCommand(command: Command) {
    handleOpenChange(false);
    command.run();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (results.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((activeIndex + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((activeIndex - 1 + results.length) % results.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      runCommand(results[activeIndex]);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup className="fixed top-[12vh] left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-lg outline-none transition-all duration-150 data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0">
          <Dialog.Title className="sr-only">Command menu</Dialog.Title>
          <div className="flex items-center gap-2 border-b border-border px-3">
            <SearchIcon aria-hidden className="size-4 shrink-0 text-muted-foreground" />
            <input
              aria-activedescendant={
                results[activeIndex] ? `${listId}-${results[activeIndex].id}` : undefined
              }
              aria-autocomplete="list"
              aria-controls={listId}
              aria-expanded
              aria-label="Search commands"
              autoComplete="off"
              className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              onChange={(event) => {
                setQuery(event.target.value);
                setActive(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type a command or search…"
              role="combobox"
              spellCheck={false}
              value={query}
            />
            <kbd className="hidden shrink-0 rounded border border-border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground sm:block">
              ESC
            </kbd>
          </div>

          <ul
            aria-label="Commands"
            className="max-h-80 overflow-y-auto overscroll-contain p-2"
            id={listId}
            ref={listRef}
            role="listbox"
          >
            {results.length === 0 && (
              <li className="py-8 text-center text-sm text-muted-foreground" role="presentation">
                No results for “{query}”
              </li>
            )}
            {results.map((command, index) => {
              const showGroup = index === 0 || results[index - 1].group !== command.group;
              return (
                <li key={command.id} role="presentation">
                  {showGroup && (
                    <div
                      aria-hidden
                      className="px-2 pt-2 pb-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {command.group}
                    </div>
                  )}
                  <div
                    aria-selected={index === activeIndex}
                    className={cn(
                      "flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-2 text-sm [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
                      index === activeIndex && "bg-muted text-foreground",
                    )}
                    data-index={index}
                    id={`${listId}-${command.id}`}
                    onClick={() => runCommand(command)}
                    onMouseMove={() => setActive(index)}
                    role="option"
                    tabIndex={-1}
                  >
                    {command.icon}
                    <span className="flex-1">{command.label}</span>
                    {index === activeIndex && (
                      <CornerDownLeftIcon aria-hidden className="size-3.5!" />
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
