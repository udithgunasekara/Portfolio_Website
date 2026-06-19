import type { Project, ExperienceItem, WritingItem } from "@/types";

export const PROJECTS: Project[] = [
  {
    num: "01",
    year: "2024",
    title: "Food Ordering & Delivery System",
    kind: "Microservices · Full-stack",
    desc: "A delivery platform broken into independent services so ordering, auth, and dispatch can scale and fail on their own. Spring Cloud Gateway out front, Eureka for discovery, and JWT role-based access keeping customers, restaurants, and admins in their own lanes.",
    color: "#c8553d",
  },
  {
    num: "02",
    year: "2025",
    title: "Context Engineering via MCP for LLMs",
    kind: "Final Year Research",
    desc: "My final-year research: an MCP server that coordinates several LLMs behind one interface, scrubs PII out of prompts before they ever leave, and holds context across a three-tier memory hierarchy instead of cramming everything into one window.",
    color: "#1f5d4c",
  },
  {
    num: "03",
    year: "2024",
    title: "SkillSync",
    kind: "Web Application",
    desc: "A skills platform where uploaded documents pass through a moderator before they go live. Built on MVC and a repository layer, which is what let me add the moderator role later without disturbing everything around it.",
    color: "#2e4a8a",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    when: "Nov 2025 to Now",
    where: "eChannelling PLC",
    role: "Associate Software Engineer",
    detail:
      "I lead feature development across the Hospital Client and Hospital Admin modules, coordinating other developers and running release planning through to production. I built the WebXPay payment-gateway integration that now processes around 500,000 appointment payments a month, and added an OTP verification step, since adopted by stakeholders as a key control, that protects refund and cancellation flows from fraud. I also spend a fair bit of time tuning web API performance so the app stays quick under load.",
    stack: ["Java", "Spring Boot", "JavaScript", "Oracle", "PostgreSQL"],
  },
  {
    when: "May 2025 to Nov 2025",
    where: "eChannelling PLC",
    role: "Software Engineer Intern",
    detail:
      "Built and shipped full-stack features for the production SaaS platform that 50+ hospitals run on, working in Java, Spring Boot, and React Native on an Agile-Scrum team. Wrote the backend REST APIs for the Doctors application using MVC and Repository patterns to drive appointment scheduling on a multi-tenant platform, and built the patient-facing booking and queue-visibility features in the React Native mobile app.",
    stack: ["Java", "Spring Boot", "React Native", "MVC"],
  },
  {
    when: "Jan 2025 to Jan 2026",
    where: "Freelance",
    role: "Mobile Developer / BA",
    detail:
      "Built and shipped a cross-platform Flutter app from scratch on MVVM and Firebase. Designed the whole thing in Figma first, around 15 screens, then ran requirement gathering too: sitting with the client and turning what they wanted into user stories and specs.",
    stack: ["Flutter", "Firebase", "MVVM", "Figma"],
  },
];

export const WRITING: WritingItem[] = [
  {
    date: "№ 01",
    kicker: "Fundamentals",
    title: "Understanding OOP: Foundation Every Software Engineering Intern Should Know",
    dek: "Going into my internship, I realized OOP wasn’t just another checkbox on the requirements list. It’s how modern software actually gets built, and the difference between stumbling through your first weeks and contributing from day one.",
    href: "https://medium.com/@udithgunasekara7",
  },
  {
    date: "№ 02",
    kicker: "Research",
    title: "A small note on context engineering",
    dek: "The model is rarely the thing holding you back. What you put in front of it usually is.",
    href: "https://medium.com/@udithgunasekara7",
  },
  {
    date: "№ 03",
    kicker: "Craft",
    title: "Why I keep rewriting my design system",
    dek: "I’ve rebuilt it more times than I’d like to admit. Each pass shows me what was actually worth keeping.",
    href: "https://medium.com/@udithgunasekara7",
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
