import type { Project } from "@/types/types";

export const PROJECTS: Project[] = [
  {
    id: "idhub",
    title: "IDHub (Identity Governance Platform)",
    period: { start: "2024" },
    description:
      "Sath Inc.'s identity governance platform, where I lead frontend modernization, search infrastructure, and workflow automation, alongside the sath.com corporate website.",
    highlights: [
      "Migrated the IDHub web app from AngularJS to React.js with TanStack Query caching, cutting API load by 30% and improving Core Web Vitals, and redesigned the entire UI with shadcn/ui as a mobile-first, responsive experience.",
      "Re-architected search by migrating from Elasticsearch to Typesense, reducing search latency by 40% and enabling typo-tolerant, faceted search with simpler index management.",
      "Led the migration of the sath.com corporate website from Strapi to Payload CMS, enabling flexible, component-driven page design.",
      "Built CI/CD pipelines for every sath.com environment, with automatic builds on each pull request and automated Cloudflare deployments that eliminated manual migration steps and failed releases.",
      "Designed a modular workflow engine on IDHub's Node.js workflow runner, supporting dynamically configurable nodes and workflows and reducing manual role-assignment effort by 60%.",
    ],
    skills: ["React.js", "shadcn/ui", "Typesense", "Payload CMS", "Cloudflare", "Node.js"],
  },
  {
    id: "ajio-wholesaler-application",
    title: "AJIO Wholesaler Application",
    period: { start: "2022", end: "2024" },
    description:
      "Engineered an end-to-end product return flow with a real-time tracking timeline using React and Material-UI (MUI), reducing customer support inquiries by 35%.",
    skills: ["React", "Material UI"],
  },
  {
    id: "reachlink",
    title: "ReachLink (Healthcare Platform)",
    period: { start: "2024", end: "2024" },
    description:
      "Designed a HIPAA-compliant therapist onboarding ecosystem integrated with Cronofy for automated scheduling, reducing administrative booking time by 40%.",
    skills: ["HIPAA Compliance", "Cronofy", "Scheduling"],
  },
];
