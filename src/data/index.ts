import type { Project, ExperienceItem, WritingItem } from "@/types";

export const PROJECTS: Project[] = [
  {
    num: "01",
    year: "2024",
    title: "Food Ordering & Delivery System",
    kind: "Microservices · Full-stack",
    desc: "Microservices food-ordering platform with Spring Cloud Gateway routing, JWT RBAC, and Eureka service discovery.",
    color: "#c8553d",
  },
  {
    num: "02",
    year: "2025",
    title: "Context Engineering via MCP for LLMs",
    kind: "Final Year Research",
    desc: "An MCP server orchestrating multiple LLMs with PII-aware prompt filtering and a 3-tier memory hierarchy.",
    color: "#1f5d4c",
  },
  {
    num: "03",
    year: "2024",
    title: "SkillSync",
    kind: "Web Application",
    desc: "Multi-role web app with moderator document review, built on MVC + Repository patterns.",
    color: "#2e4a8a",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    when: "May 2025 — Now",
    where: "eChannelling PLC",
    role: "Software Engineer Intern",
    detail:
      "Full-stack features for a production SaaS platform serving 50+ hospitals nationally. Backend REST APIs for the Doctors Application (OOP, MVC, Repository) enabling appointment scheduling and multi-tenant patient data. Frontend for the Patient mobile app in React Native.",
    stack: ["Java", "Spring Boot", "React Native", "Oracle", "PostgreSQL"],
  },
  {
    when: "Jan 2025 — Jan 2026",
    where: "Freelance",
    role: "Mobile Developer / BA",
    detail:
      "Architected and shipped a cross-platform Flutter app from scratch with MVVM and Firebase. Designed end-to-end UI/UX in Figma — 15+ screens. Led requirement gathering, translating client needs into user stories and specs.",
    stack: ["Flutter", "Firebase", "MVVM", "Figma"],
  },
];

export const WRITING: WritingItem[] = [
  {
    date: "— / 01",
    kicker: "Research",
    title: "A small note on context engineering",
    dek: "Why the hardest part of LLM apps isn’t the model — it’s what you feed it.",
  },
  {
    date: "— / 02",
    kicker: "Craft",
    title: "Why I keep rewriting my design system",
    dek: "On the joy of starting over, and the discipline of keeping what worked.",
  },
  {
    date: "— / 03",
    kicker: "Field Notes",
    title: "Notes from shipping my first production API",
    dek: "Three lessons from watching real users hit endpoints you wrote.",
  },
];

export const STACK: string[] = [
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Java / Spring",
  "Flutter",
  "AWS",
  "Docker",
  "PostgreSQL",
  "Tailwind",
  "Figma",
];
