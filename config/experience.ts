import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "idfier",
    position: "Software Developer focused on React Native ",
    company: "IDFier",
    location: " Remote, Sweden",
    startDate: new Date("2024-08-01"),
    endDate: "Present",
    description: [
      "Developing and maintaining the IDFier app using React Native and TypeScript.",
      "Building a daily FX rate fetcher by integrating Databricks jobs with backend services.",
    ],
    achievements: [
      "Developed and maintained the IDFier app using React Native and TypeScript.",
    ],
    skills: ["Typescript", "React", "React Native", "Node.js", "PostgreSQL"],
    companyUrl: "https://idfier.com",
    logo: "/projects/idfier/logo.svg",
  },
  {
    id: "codeinvention",
    position: "Software Development Intern",
    company: "Code Invention ",
    location: "Prishtina, Kosovo",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    description: [
      "Built backend APIs in .NET to support enterprise chatbot workflows.",
      "Developed integrations (Slack, Google Workspace, HubSpot) with Angular frontends while remaining backend-focused.",
      "Provisioned PostgreSQL and AWS resources, then deployed ML models on SageMaker instead of Replicate.",
    ],
    achievements: [
      "Delivered .NET-based backend services that improved LLM function-call accuracy by 40%.",
      "Led Angular + FastAPI integration work while keeping the core focus on backend reliability.",
      "Migrated persistence to PostgreSQL and deployed ML models on SageMaker, cutting load times by 30%.",
      "Created a Next.js dashboard for user analytics.",
    ],
    skills: [
      "Next.js",
      "React",
      "Angular",
      ".NET",
      "Node.js",
      "AWS",
      "PostgreSQL",
      "MongoDB",
      "Typescript",
    ],
    companyUrl: "https://agentprod.com",
    logo: "/experience/agentprod-logo.png",
  },
];
