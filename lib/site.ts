import { SOCIAL_LINKS } from "@/data/social-links";
import { USER } from "@/data/user";

// Resolution order: explicit override (custom domain later) -> Vercel's production
// hostname (set automatically on deploys, e.g. my-app.vercel.app) -> local dev.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")
).replace(/\/$/, "");

export const SITE_NAME = USER.displayName;
export const SITE_TITLE = `${USER.displayName} | ${USER.flipSentences[0]}`;
export const SITE_DESCRIPTION =
  "Explore the portfolio of Sneh Ghetiya. Showcasing high-performance web applications, scalable APIs, and modernized system architectures.";

/** Profile URLs, excluding mailto links, for `sameAs` in structured data. */
export const PROFILE_URLS = SOCIAL_LINKS.filter((link) => link.href.startsWith("http")).map(
  (link) => link.href,
);
