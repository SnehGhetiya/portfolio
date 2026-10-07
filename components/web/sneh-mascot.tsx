"use client";

import { Mascot } from "page-mascot";

import { useSound } from "@/hooks/soundcn/use-sound";
import { notificationPopSound } from "@/lib/notification-pop";

export function SnehMascot({ className, size = 160 }: { className?: string; size?: number }) {
  const [play] = useSound(notificationPopSound, { volume: 0.4, interrupt: true });

  return (
    <div role="presentation" onClick={() => play()} className="w-fit">
      <Mascot
        directions="/mascots/sneh-directions.webp"
        reactions="/mascots/sneh-reactions.webp"
        size={size}
        label="Cartoon avatar of Sneh that follows your cursor; click it to see a reaction"
        className={className}
      />
    </div>
  );
}
