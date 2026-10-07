"use client";

import { Mascot } from "page-mascot";

import { useSound } from "@/hooks/use-sound";

export function SnehMascot({ className, size = 160 }: { className?: string; size?: number }) {
  const [play] = useSound("/assets/notification-pop.mp3", { volume: 0.4, interrupt: true });

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
