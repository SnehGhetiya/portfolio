import { SectionHeading } from "@/components/web/section-heading";
import { MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/data/social-links";
import type { SocialLinkName } from "@/types/types";
import { DecorIcon } from "./decor-icon";
import { FullWidthDivider } from "./full-width-divider";
import { GithubMarkIcon, LinkedinMarkIcon } from "./social-icons";

const SOCIAL_ICONS: Record<SocialLinkName, React.ReactNode> = {
  github: <GithubMarkIcon className="size-4" />,
  linkedin: <LinkedinMarkIcon className="size-4" />,
  email: <MailIcon />,
};

export function SocialLinksSection() {
  return (
    <section id="social" className="relative scroll-mt-14">
      <SectionHeading lead="Let's" emphasis="Connect" pet="binbuddy" side="left" />

      <div className="relative *:border-0">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="size-4" position="bottom-left" />
        <DecorIcon className="size-4" position="bottom-right" />
        <FullWidthDivider className="-top-px" />

        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-4 py-10 md:px-6 md:py-12">
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.name}>
                <Button
                  variant="outline"
                  size="icon"
                  render={
                    <a
                      href={item.href}
                      target={item.name === "email" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      data-track-event="social_click"
                      data-track-label={item.name}
                    />
                  }
                  nativeButton={false}
                  aria-label={`${item.title} (${item.handle})`}
                >
                  {SOCIAL_ICONS[item.name]}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <FullWidthDivider className="-bottom-px" />
      </div>
    </section>
  );
}
