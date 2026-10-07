import { SectionHeading } from "@/components/web/section-heading";
import { DecorIcon } from "@/components/web/decor-icon";
import { FullWidthDivider } from "@/components/web/full-width-divider";
import { TechStackList } from "@/components/web/tech-stack-list";

export function TechStackSection() {
  return (
    <section id="skills" className="scroll-mt-14">
      <SectionHeading lead="My" emphasis="Expertise" pet="pixel-coder" side="right" />
      <div className="relative *:border-0">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="size-4" position="bottom-left" />
        <DecorIcon className="size-4" position="bottom-right" />
        <FullWidthDivider className="-top-px" />
        <TechStackList />
        <FullWidthDivider className="-bottom-px" />
      </div>
    </section>
  );
}
