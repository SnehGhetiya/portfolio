import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SnehMascot } from "@/components/web/sneh-mascot";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 py-16 text-center"
    >
      <SnehMascot size={160} />
      <div className="space-y-2">
        <p className="font-mono text-sm text-muted-foreground">404</p>
        <h1 className="text-2xl font-semibold text-foreground md:text-3xl">
          This page wandered off
        </h1>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
          The link may be old or mistyped. Head back home
          <span className="hidden sm:inline">
            , or press{" "}
            <kbd className="rounded border border-border bg-muted px-1 font-mono text-[11px]">
              ⌘K
            </kbd>{" "}
            to jump straight to a section
          </span>
          .
        </p>
      </div>
      <Button render={<Link href="/" />} nativeButton={false}>
        <ArrowLeftIcon aria-hidden data-icon="inline-start" />
        Back home
      </Button>
    </main>
  );
}
