import { ExperienceSection } from "@/components/web/experience-section";
import { Header } from "@/components/web/header";
import { HeroSection } from "@/components/web/hero";
import { ProjectSection } from "@/components/web/project-section";
import { TechStackSection } from "@/components/web/tech-stack-section";
import { SocialLinksSection } from "@/components/web/social-links-section";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden px-4 supports-[overflow:clip]:overflow-clip">
      <Header />
      <main
        id="main"
        className={cn(
          "relative mx-auto w-full max-w-4xl grow",
          // X Borders
          "before:absolute before:-inset-y-14 before:-left-px before:w-px before:bg-border",
          "after:absolute after:-inset-y-14 after:-right-px after:w-px after:bg-border",
        )}
      >
        <HeroSection />
        <TechStackSection />
        <ExperienceSection />
        <ProjectSection />
        <SocialLinksSection />
      </main>
    </div>
  );
}
