import { TECH_STACK } from "@/data/tech-stack";
import type { TechStackCategory } from "@/types/types";
import { TechIcon } from "./tech-icon";

const CATEGORY_ORDER: TechStackCategory[] = [
  "Languages",
  "Frameworks",
  "Databases & Cloud",
  "Libraries & Tools",
];

export function TechStackList() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 md:px-6 md:py-16">
      {CATEGORY_ORDER.map((category, index) => {
        const items = TECH_STACK.filter((item) => item.category === category);

        return (
          <div
            key={category}
            className="grid items-start gap-y-2 border-b border-border py-4 last:border-none sm:grid-cols-[10rem_1fr]"
          >
            <div className="text-sm text-muted-foreground">
              <span className="mr-1.5 font-mono text-muted-foreground/50 select-none" aria-hidden>
                {(index + 1).toString().padStart(2, "0")}
              </span>
              {category}
            </div>

            <ul className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <li key={item.key} className="flex">
                  <span className="flex h-6 items-center gap-1.5 rounded-full border border-border bg-muted px-2 font-mono text-xs text-foreground [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80">
                    <TechIcon techKey={item.key} />
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
