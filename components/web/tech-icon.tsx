import Image from "next/image";
import { CodeXmlIcon } from "lucide-react";

/**
 * Logo asset per tech-stack key, under /public/assets. Keys without an entry
 * fall back to a generic icon below — drop in a matching SVG under
 * /public/assets and add it here to replace the fallback.
 */
const TECH_LOGOS: Record<string, string> = {
  typescript: "/assets/typescript.svg",
  javascript: "/assets/javascript.svg",
  go: "/assets/golang.svg",
  "html-css": "/assets/html.svg",
  reactjs: "/assets/react.svg",
  nextjs: "/assets/nextjs.svg",
  nodejs: "/assets/nodejs.svg",
  nestjs: "/assets/nestjs.svg",
  expressjs: "/assets/expressjs.svg",
  "redux-toolkit": "/assets/redux.svg",
  aws: "/assets/aws.svg",
  postgresql: "/assets/postgresql.svg",
  mongodb: "/assets/mongodb.svg",
  docker: "/assets/docker.svg",
  cloudflare: "/assets/cloudflare.svg",
  typesense: "/assets/typesense.svg",
  graphql: "/assets/graphql.svg",
  tailwindcss: "/assets/tailwindcss.svg",
  "material-ui": "/assets/materialui.svg",
  "shadcn-ui": "/assets/shadcn-ui.svg",
  stripe: "/assets/stripe.svg",
  git: "/assets/git.svg",
};

export function TechIcon({ techKey }: { techKey: string }) {
  const src = TECH_LOGOS[techKey];

  if (src) {
    return (
      <Image
        alt=""
        aria-hidden
        className="size-3.5 shrink-0 dark:brightness-0 dark:invert"
        height={14}
        width={14}
        src={src}
      />
    );
  }

  return <CodeXmlIcon aria-hidden />;
}
