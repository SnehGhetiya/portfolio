"use client";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { openCommandMenu } from "@/components/web/command-menu";
import { MobileNav } from "@/components/web/mobile-nav";
import { ThemeToggle } from "@/components/web/theme-toggle";
import { RESUME_HREF } from "@/data/resume";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { SGMark } from "./sg-mark";

export const navLinks = [
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
];

export const navActions = {
  contact: { label: "Contact", href: "#social" },
  resume: {
    label: "Download Resume",
    href: RESUME_HREF,
  },
};

const SECTION_IDS = [...navLinks, navActions.contact].map((link) => link.href.slice(1));

export function Header() {
  const scrolled = useScroll(10);
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-4xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out",
        {
          "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/80 md:top-2 md:max-w-3xl md:shadow":
            scrolled,
        },
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
          {
            "md:px-2": scrolled,
          },
        )}
      >
        <Link href="#main" aria-label="Sneh Ghetiya, back to top">
          <SGMark className="h-8 shrink-0" />
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <Button
                  aria-current={isActive ? "location" : undefined}
                  className={cn("text-muted-foreground", isActive && "bg-muted text-foreground")}
                  key={link.label}
                  size="sm"
                  variant="ghost"
                  render={<a href={link.href} />}
                  nativeButton={false}
                >
                  {link.label}
                </Button>
              );
            })}
          </div>
          <Button
            aria-label="Open command menu"
            className="gap-1.5 text-muted-foreground"
            onClick={openCommandMenu}
            size="sm"
            variant="ghost"
          >
            <SearchIcon aria-hidden />
            <kbd className="font-mono text-[11px]">⌘K</kbd>
          </Button>
          <ThemeToggle />
          <Button
            aria-current={activeSection === "social" ? "location" : undefined}
            size="sm"
            variant="outline"
            render={<a href={navActions.contact.href} />}
            nativeButton={false}
          >
            {navActions.contact.label}
          </Button>
          <Button
            size="sm"
            render={
              <a
                href={navActions.resume.href}
                download
                data-track-event="resume_download"
                data-track-label="header"
              />
            }
            nativeButton={false}
          >
            {navActions.resume.label}
          </Button>
        </div>
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle className="size-8" />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
