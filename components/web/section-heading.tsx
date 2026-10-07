import { BorderPet } from "@/components/web/border-pet";

type SectionHeadingProps = {
  /** Muted lead-in, e.g. "My". */
  lead: string;
  /** Emphasised word, e.g. "Expertise". */
  emphasis: string;
  /** Petdex slug of the pet resting on the section's top border. */
  pet: string;
  side: "left" | "right";
};

/**
 * Section title with its pet. The pet's bottom edge sits on the border below the heading.
 * On mobile it is anchored to the heading itself, so the gap is the same whatever the
 * heading's width; from md up it moves out to the edge of the row.
 */
export function SectionHeading({ lead, emphasis, pet, side }: SectionHeadingProps) {
  return (
    <div className="relative flex justify-center">
      <div className="relative md:static">
        <h2 className="py-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-xl">
          {lead} <span className="text-foreground">{emphasis}</span>
        </h2>
        <BorderPet pet={pet} side={side} />
      </div>
    </div>
  );
}
