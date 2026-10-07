import type { Project } from "@/types/types";

export const PROJECTS: Project[] = [
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
    period: { start: "2024" },
    description:
      "Designed a HIPAA-compliant therapist onboarding ecosystem integrated with Cronofy for automated scheduling, reducing administrative booking time by 40%.",
    skills: ["HIPAA Compliance", "Cronofy", "Scheduling"],
  },
];
