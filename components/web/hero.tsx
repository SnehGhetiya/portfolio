import { FileDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/web/book-call-button";
import { SnehMascot } from "@/components/web/sneh-mascot";
import { EXPERIENCE } from "@/data/experience";
import { RESUME_HREF } from "@/data/resume";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";
import { DecorIcon } from "./decor-icon";
import { FlipSentences } from "./flip-sentence";
import { PronounceMyName } from "./pronounce-my-name";
import { FullWidthDivider } from "./full-width-divider";

/** Whole years since the first role started; the page is static, so this updates on each deploy. */
function yearsOfExperience() {
  const first = EXPERIENCE.at(-1)!;
  const ms = Date.now() - new Date(first.period.start).getTime();
  return Math.floor(ms / (365.25 * 24 * 60 * 60 * 1000));
}

export function HeroSection() {
  return (
    <section>
      <div className="relative *:border-0">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="size-4" position="bottom-left" />
        <DecorIcon className="size-4" position="bottom-right" />

        <FullWidthDivider className="-top-px" />

        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 items-center gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col items-center justify-center gap-5 lg:items-start lg:text-left">
            <div className="flex items-center justify-center gap-3 lg:items-end lg:justify-start">
              <h1
                className={cn(
                  // lg:w-min shrink-wraps the two-line name so the button sits right after "Ghetiya"
                  "max-w-2xl text-balance text-center text-4xl font-semibold text-foreground md:text-5xl lg:w-min lg:text-left lg:text-6xl",
                  "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-100 duration-500 ease-out",
                )}
              >
                {USER.firstName} {USER.lastName}
              </h1>
              <PronounceMyName
                className="lg:mb-5"
                namePronunciationUrl="/assets/sneh-ghetiya.mp3"
              />
            </div>

            <FlipSentences className="h-12.5 py-1 pl-4 sm:h-9 lg:pl-0">
              {USER.flipSentences}
            </FlipSentences>

            <p className="fade-in slide-in-from-bottom-4 max-w-md animate-in fill-mode-backwards text-center text-sm leading-relaxed text-muted-foreground delay-300 duration-500 ease-out text-pretty lg:text-left">
              I build fast, scalable web products with React, Next.js and Node.js, with{" "}
              {yearsOfExperience()}+ years across enterprise SaaS, B2B commerce and healthcare.
              Currently a Senior Software Engineer at{" "}
              <span className="text-foreground">{EXPERIENCE[0].company}</span>, modernizing the
              IDHub identity governance platform.
            </p>

            <div className="fade-in slide-in-from-bottom-4 flex animate-in flex-wrap items-center justify-center gap-2 fill-mode-backwards delay-400 duration-500 ease-out lg:justify-start">
              <BookCallButton source="hero" />
              <Button
                variant="outline"
                render={
                  <a
                    href={RESUME_HREF}
                    download
                    data-track-event="resume_download"
                    data-track-label="hero"
                  />
                }
                nativeButton={false}
              >
                <FileDownIcon aria-hidden data-icon="inline-start" />
                Resume
              </Button>
            </div>
          </div>

          <div className="fade-in zoom-in-95 relative flex w-full animate-in items-center justify-center fill-mode-backwards delay-500 duration-700 ease-out lg:justify-end">
            {/* The mascot takes a fixed pixel size, so it is scaled down on small screens. */}
            <div className="size-55 lg:size-80">
              <div className="origin-top-left scale-[0.6875] lg:scale-100">
                <SnehMascot size={320} />
              </div>
            </div>
          </div>
        </div>

        <FullWidthDivider className="-bottom-px" />
      </div>
    </section>
  );
}
