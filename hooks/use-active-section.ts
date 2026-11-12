"use client";

import { useEffect, useState } from "react";

/**
 * Id of the section currently crossing a horizontal line just below the sticky header, or null
 * above the first one.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const sections = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Several can touch the line during fast scrolls; prefer the one lowest on the page.
        const current = sections.findLast((section) => visible.has(section.id));
        setActive(current?.id ?? null);
      },
      // A thin band 30% down the viewport.
      { rootMargin: "-30% 0px -69% 0px" },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, [key]);

  return active;
}
