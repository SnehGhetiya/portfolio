import { SnehMascot } from "@/components/web/sneh-mascot";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";
import { DecorIcon } from "./decor-icon";
import { FlipSentences } from "./flip-sentence";
import { PronounceMyName } from "./pronounce-my-name";
import { FullWidthDivider } from "./full-width-divider";

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
          </div>

          <div className="fade-in zoom-in-95 relative flex w-full animate-in items-center justify-center fill-mode-backwards delay-500 duration-700 ease-out lg:justify-end">
            <SnehMascot size={320} />
          </div>
        </div>

        <FullWidthDivider className="-bottom-px" />
      </div>
    </section>
  );
}
