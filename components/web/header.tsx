"use client";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/web/mobile-nav";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Link from "next/link";
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
    href: "/assets/Sneh_Ghetiya_Resume.pdf",
  },
};

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-4xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out",
        {
          "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow":
            scrolled,
        },
      )}
    >
      <nav
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
          <div>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                size="sm"
                variant="ghost"
                render={<a href={link.href} />}
                nativeButton={false}
              >
                {link.label}
              </Button>
            ))}
          </div>
          <Button
            size="sm"
            variant="outline"
            render={<a href={navActions.contact.href} />}
            nativeButton={false}
          >
            {navActions.contact.label}
          </Button>
          <Button
            size="sm"
            render={<a href={navActions.resume.href} download />}
            nativeButton={false}
          >
            {navActions.resume.label}
          </Button>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
