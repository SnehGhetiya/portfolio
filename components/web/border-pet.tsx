"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

// Petdex (https://petdex.dev) pet, trimmed to the three animations used here:
// a 6 column x 3 row atlas (rows: wave, jump, sit). Frames are laid out as 192x208
// and scaled down, so the source image can be any resolution.
const FRAME_W = 192;
const FRAME_H = 208;
const COLUMNS = 6;
const ROWS = 3;

const STATES = {
  sit: { row: 2, frames: 6, fps: 5 },
  wave: { row: 0, frames: 4, fps: 6 },
  jump: { row: 1, frames: 5, fps: 8 },
} as const;

type State = keyof typeof STATES;

type BorderPetProps = {
  /** Petdex slug; the atlas lives at /pets/<slug>.webp */
  pet: string;
  /** Which side of the section's top border it sits on. */
  side?: "left" | "right";
  /** Rendered size relative to the 192x208 frame. */
  scale?: number;
  className?: string;
};

/**
 * A Petdex pet sitting on the bottom edge of its positioned ancestor (see SectionHeading).
 * It idles in the seated pose, waves on hover and jumps when clicked.
 */
export function BorderPet({ pet, side = "right", scale = 0.36, className }: BorderPetProps) {
  const reduceMotion = useReducedMotion();
  const [state, setState] = useState<State>("sit");
  const [frame, setFrame] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Four pets tick forever otherwise; only animate the ones on screen.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || !visible) return;
    const { frames, fps } = STATES[state];
    const id = setInterval(() => {
      setFrame((f) => {
        if (f + 1 < frames) return f + 1;
        // one-shot states fall back to sitting once they finish
        if (state !== "sit") setState("sit");
        return 0;
      });
    }, 1000 / fps);
    return () => clearInterval(id);
  }, [state, reduceMotion, visible]);

  const play = (next: State) => {
    if (reduceMotion) return;
    setFrame(0);
    setState(next);
  };

  const { row } = STATES[state];

  return (
    <div
      ref={ref}
      aria-hidden
      onMouseEnter={() => state === "sit" && play("wave")}
      onClick={() => play("jump")}
      className={cn(
        "absolute bottom-0 z-1 cursor-pointer select-none",
        side === "right"
          ? "left-full ml-3 md:right-10 md:left-auto md:ml-0"
          : "right-full mr-3 md:right-auto md:left-10 md:mr-0",
        className,
      )}
      style={{ width: FRAME_W * scale, height: FRAME_H * scale }}
    >
      <div
        style={{
          width: FRAME_W,
          height: FRAME_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundImage: `url(/pets/${pet}.webp)`,
          backgroundSize: `${COLUMNS * 100}% ${ROWS * 100}%`,
          backgroundPosition: `${(frame / (COLUMNS - 1)) * 100}% ${(row / (ROWS - 1)) * 100}%`,
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
