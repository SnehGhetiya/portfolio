"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/events";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      trackEvent({ name: "copy_email" });
    } catch {
      // Clipboard blocked: the address is visible and selectable next to the button.
    }
  }

  return (
    <Button
      aria-label={copied ? "Email address copied" : "Copy email address"}
      onClick={handleCopy}
      size="icon-sm"
      variant="ghost"
    >
      {copied ? <CheckIcon aria-hidden /> : <CopyIcon aria-hidden />}
      <span aria-live="polite" className="sr-only">
        {copied ? "Copied" : ""}
      </span>
    </Button>
  );
}
