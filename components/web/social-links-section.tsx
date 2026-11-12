import { SectionHeading } from "@/components/web/section-heading";
import { MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/data/social-links";
import { USER } from "@/data/user";
import { BOOKING_DURATION_LABEL } from "@/data/booking";
import { BookCallButton } from "./book-call-button";
import { CopyEmailButton } from "./copy-email-button";
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

        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-4 py-10 text-center md:px-6 md:py-12">
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
            Have a role, a project or a question about something I&apos;ve built? Grab a{" "}
            {BOOKING_DURATION_LABEL} slot on my calendar, or drop me an email.
          </p>

          <BookCallButton source="contact" size="lg" />

          <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/40 py-1 pr-1 pl-3">
            <a
              className="font-mono text-sm text-foreground underline-offset-4 hover:underline"
              data-track-event="social_click"
              data-track-label="email_address"
              href={`mailto:${USER.email}`}
            >
              {USER.email}
            </a>
            <CopyEmailButton email={USER.email} />
          </div>

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
