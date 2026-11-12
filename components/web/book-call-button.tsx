"use client";

import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/data/booking";
import { openBooking, preloadBooking } from "@/lib/booking";

type BookCallButtonProps = Omit<React.ComponentProps<typeof Button>, "render" | "onClick"> & {
  /** Where the button sits, for analytics. */
  source: string;
};

/**
 * Opens the Cal.com booking popup. It is a real link to the booking page, so it still works
 * before hydration, with a modifier key (new tab), or if the popup script is blocked.
 */
export function BookCallButton({ source, children, ...props }: BookCallButtonProps) {
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    // Let cmd/ctrl/shift/middle clicks open the page in a new tab as usual.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    void openBooking(source);
  }

  return (
    <Button
      nativeButton={false}
      onClick={handleClick}
      onFocus={preloadBooking}
      onPointerEnter={preloadBooking}
      render={<a href={BOOKING_URL} rel="noopener noreferrer" target="_blank" />}
      {...props}
    >
      {children ?? (
        <>
          <CalendarIcon aria-hidden data-icon="inline-start" />
          Book a call
        </>
      )}
    </Button>
  );
}
