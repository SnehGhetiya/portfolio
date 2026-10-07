import { BorderPet } from "@/components/web/border-pet";
import { DecorIcon } from "@/components/web/decor-icon";
import { FullWidthDivider } from "@/components/web/full-width-divider";
import { TechStackList } from "@/components/web/tech-stack-list";

export function TechStackSection() {
  return (
    <section id="skills" className="scroll-mt-14">
      <h2 className="py-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-xl">
        My <span className="text-foreground">Expertise</span>
      </h2>
      <div className="relative *:border-0">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="size-4" position="bottom-left" />
        <DecorIcon className="size-4" position="bottom-right" />

        <BorderPet pet="pixel-coder" side="right" />
        <FullWidthDivider className="-top-px" />
        <TechStackList />
        <FullWidthDivider className="-bottom-px" />
      </div>
    </section>
  );
}
