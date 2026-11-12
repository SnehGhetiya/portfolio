import { ArrowUpIcon } from "lucide-react";
import { USER } from "@/data/user";

// Read once at build time; the page is statically rendered, so it updates on each deploy.
const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-4xl">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between gap-3 px-4 py-8 text-xs text-muted-foreground sm:flex-row md:px-6">
        <p>
          © {YEAR} {USER.displayName}
        </p>
        <div className="flex items-center gap-4">
          <p className="hidden sm:block">
            Press{" "}
            <kbd className="rounded border border-border bg-muted px-1 font-mono text-[10px]">
              ⌘K
            </kbd>{" "}
            to navigate
          </p>
          <a
            className="inline-flex items-center gap-1 underline-offset-4 hover:text-foreground hover:underline"
            href="#main"
          >
            Back to top
            <ArrowUpIcon aria-hidden className="size-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
