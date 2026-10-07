export type User = {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  flipSentences: string[];
};

export type Period = {
  start: string;
  end?: string;
};

export type Experience = {
  id: string;
  company: string;
  companyWebsite?: string;
  logo?: string;
  role: string;
  location: string;
  period: Period;
  isCurrent?: boolean;
  paragraphs: string[];
  skills: string[];
};

export type Project = {
  id: string;
  title: string;
  href?: string;
  period: Period;
  description: string;
  skills: string[];
};

export type SocialLinkName = "github" | "linkedin" | "email";

export type SocialLink = {
  name: SocialLinkName;
  title: string;
  handle: string;
  href: string;
};

export type TechStackCategory =
  | "Languages"
  | "Frameworks"
  | "Databases & Cloud"
  | "Libraries & Tools";

export type TechStackItem = {
  key: string;
  title: string;
  category: TechStackCategory;
};
