import type { Experience } from "@/types/types";

export const EXPERIENCE: Experience[] = [
  {
    id: "sath-inc",
    company: "Sath Inc.",
    role: "Senior Software Engineer",
    location: "Schaumburg, USA (Remote)",
    period: { start: "Oct 2024" },
    isCurrent: true,
    paragraphs: [
      "I lead platform work here. The big one was moving search off a creaky Java/Elasticsearch setup onto Node.js and Typesense — latency dropped about 40%, and we finally shed the legacy dependencies nobody wanted to touch.",
      "I also rebuilt the enterprise billing engine on Stripe after finance kept catching proration discrepancies. Corrections happen automatically now instead of by hand, and payment failures fell by 15%. Around the same time I built a modular workflow engine for user entitlements, which took roughly 60% of the manual ops work off the table.",
      "Most of my frontend time went into pulling the app from Angular over to React, with TanStack Query doing the caching. API load dropped 30% and Core Web Vitals improved noticeably.",
    ],
    skills: ["Node.js", "Typesense", "Stripe", "React.js", "TanStack Query"],
  },
  {
    id: "openxcell-technolabs",
    company: "OpenXcell Technolabs",
    role: "Software Engineer",
    location: "Ahmedabad, India",
    period: { start: "Jun 2022", end: "Oct 2024" },
    paragraphs: [
      "Two and a half years of mostly product work. I built the GraphQL APIs behind a B2B consulting platform and layered Redis caching underneath them, which cut session load times by around 40%.",
      "I also led the move of several aging apps onto Next.js, using SSR or static generation depending on which made sense per page — their organic traffic and SEO scores both picked up afterwards. On AJIO's B2B wholesaler platform I put together a reusable component library and the UI patterns around it, mostly because the team kept rebuilding the same pieces slightly differently each time. That roughly halved how long it took to ship a new screen.",
    ],
    skills: ["GraphQL", "Redis", "Next.js", "SSR"],
  },
  {
    id: "gateway-group-of-companies",
    company: "Gateway Group Of Companies",
    role: "Software Engineer",
    location: "Ahmedabad, India",
    period: { start: "Oct 2020", end: "May 2022" },
    paragraphs: [
      "My first engineering role. I built RESTful APIs for client-facing integrations and, more usefully, standardized how we approached them — which turned new third-party integrations from a guessing game into something about 20% quicker to land.",
    ],
    skills: ["REST APIs", "Node.js"],
  },
];
