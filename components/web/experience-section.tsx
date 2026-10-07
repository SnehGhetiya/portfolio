"use client";

import { BorderPet } from "@/components/web/border-pet";
import { ChevronDownIcon, CodeXmlIcon } from "lucide-react";
import { useState } from "react";
import { Tag } from "@/components/ui/tag";
import { EXPERIENCE } from "@/data/experience";
import { cn, formatDuration, formatPeriod } from "@/lib/utils";
import type { Experience } from "@/types/types";
import { CompanyIcon } from "./company-icon";
import { DecorIcon } from "./decor-icon";
import { FullWidthDivider } from "./full-width-divider";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-14">
      <h2 className="py-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-xl">
        Work <span className="text-foreground">Experience</span>
      </h2>

      <div className="relative *:border-0">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="size-4" position="bottom-left" />
        <DecorIcon className="size-4" position="bottom-right" />

        <BorderPet pet="shtam" side="left" />
        <FullWidthDivider className="-top-px" />

        <div className="mx-auto w-full max-w-3xl divide-y divide-border px-4 md:px-6 py-12">
          {EXPERIENCE.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>

        <FullWidthDivider className="-bottom-px" />
      </div>
    </section>
  );
}

function ExperienceItem({ experience }: { experience: Experience }) {
  const [open, setOpen] = useState(Boolean(experience.isCurrent));

  return (
    <div className="py-6">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <div className="flex items-center gap-2.5">
          <CompanyIcon companyName={experience.company} logo={experience.logo} />
          <h3 className="text-base font-medium text-foreground">{experience.company}</h3>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <span>{experience.location}</span>
          {experience.isCurrent && (
            <span aria-hidden className="size-1.5 rounded-full bg-primary" />
          )}
        </div>
      </div>

      <button
        aria-expanded={open}
        className="mt-3 flex w-full items-start gap-2.5 text-left"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground">
          <CodeXmlIcon aria-hidden className="size-3.5" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex items-center justify-between gap-3">
            <span className="font-medium text-foreground">{experience.role}</span>
            <ChevronDownIcon
              aria-hidden
              className={cn(
                "size-4 shrink-0 text-muted-foreground transition-transform",
                open && "rotate-180",
              )}
            />
          </span>
          <span className="mt-0.5 block text-sm text-muted-foreground">
            {formatPeriod(experience.period)} · {formatDuration(experience.period)}
          </span>
        </span>
      </button>

      {open && (
        <div className="mt-3 pl-[34px]">
          <div className="space-y-3 text-sm leading-relaxed text-foreground/90">
            {experience.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-3 flex flex-wrap gap-1.5">
            {experience.skills.map((skill) => (
              <li key={skill} className="flex">
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
