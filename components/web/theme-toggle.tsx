"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle({ className }: { className?: string }) {
  const { toggleTheme } = useTheme();

  // Both icons render and CSS picks one, so the server HTML is correct before hydration.
  return (
    <Button
      aria-label="Toggle dark mode"
      className={className}
      onClick={toggleTheme}
      size="icon-sm"
      variant="ghost"
    >
      <SunIcon aria-hidden className="hidden dark:block" />
      <MoonIcon aria-hidden className="dark:hidden" />
    </Button>
  );
}
