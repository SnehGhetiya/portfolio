import { SectionHeading } from "@/components/web/section-heading";
import { ArrowUpRightIcon, BriefcaseIcon } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { cn, formatPeriod } from "@/lib/utils";
import type { Project } from "@/types/types";
import { DecorIcon } from "./decor-icon";
import { FullWidthDivider } from "./full-width-divider";

export function ProjectSection() {
  return (
    <section id="projects" className="scroll-mt-14">
      <SectionHeading lead="Featured" emphasis="Work" pet="ashu" side="right" />

      <div className="relative *:border-0">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="size-4" position="bottom-left" />
        <DecorIcon className="size-4" position="bottom-right" />
        <FullWidthDivider className="-top-px" />

        <div className="mx-auto w-full max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <div className="divide-y divide-border">
            {PROJECTS.map((project, index) => (
              <ProjectCard index={index} key={project.id} project={project} />
            ))}
          </div>
        </div>

        <FullWidthDivider className="-bottom-px" />
      </div>
    </section>
  );
}

function ProjectCard({
  className,
  project,
  index,
}: {
  className?: string;
  project: Project;
  index: number;
}) {
  const cardClassName = cn(
    "group flex flex-col gap-4 py-6 transition-colors first:pt-0 last:pb-0 md:flex-row md:items-start md:gap-8",
    project.href && "hover:bg-muted/40 md:-mx-6 md:rounded-lg md:px-6",
    className,
  );

  const content = (
    <>
      <div className="min-w-0 flex-1 space-y-2">
        <div className="flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-0.5 select-none font-mono text-xs leading-5 text-muted-foreground/50"
          >
            {(index + 1).toString().padStart(2, "0")}
          </span>
          <h3 className="flex min-w-0 items-start gap-1.5 font-medium text-foreground">
            <BriefcaseIcon aria-hidden className="mt-1 size-4 shrink-0 text-muted-foreground" />
            <span className="min-w-0 text-balance">{project.title}</span>
            {project.href && (
              <ArrowUpRightIcon
                aria-hidden
                className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              />
            )}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-foreground/85 marker:text-muted-foreground/50">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex shrink-0 flex-col items-start gap-3 md:w-56 md:items-end md:text-right">
        <span className="font-mono text-xs whitespace-nowrap text-muted-foreground">
          {formatPeriod(project.period)}
        </span>

        <ul className="flex flex-wrap gap-1.5 md:justify-end">
          {project.skills.map((skill) => (
            <li key={skill} className="flex">
              <span className="flex h-6 items-center rounded-full border border-border bg-muted px-2 font-mono text-xs text-foreground">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  if (project.href) {
    return (
      <a
        className={cardClassName}
        href={project.href}
        rel="noopener noreferrer"
        target="_blank"
        data-track-event="project_click"
        data-track-label={project.title}
      >
        {content}
      </a>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}
