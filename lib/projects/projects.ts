// Single source of truth for project metadata, shared by /projects, the home
// page preview and the project detail pages. Detail-only data lives in
// lib/projects/details.ts and the write-ups in content/projects/*.md, so the
// long prose never ships to the browser.

export type ProjectCategory =
  | "fullstack"
  | "backend"
  | "frontend"
  | "devops"
  | "architecture";

export interface Project {
  id: string;
  title: string;
  /** card blurb on /projects and the home page */
  summary: string;
  tags: string[];
  category: ProjectCategory;
  github: string;
  demo: string;
  /** surfaced on the home page and badged on /projects */
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Kraven The Hunter",
    summary:
      "A full-stack cybersecurity platform using ML to detect phishing and malicious URLs in real time. Includes a trained RandomForest model, FastAPI backend with async Celery retraining, a React dashboard, and a Chrome extension with auto-scan and popup threat reports.",
    tags: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "Celery",
      "RabbitMQ",
      "React",
      "Docker",
      "Chrome Extension",
    ],
    category: "fullstack",
    github: "https://github.com/IamTyrone/Kraven-The-Hunter.git",
    demo: "https://kraven-the-hunter.vercel.app/",
    featured: true,
  },
  {
    id: "2",
    title: "Safi Help",
    summary:
      "Its a really cool platform where people can find cleaners and cleaners can find jobs and get paid instantly. It has a mobile app and a web app.",
    tags: [
      "React Native",
      "React",
      "Golang",
      "Django",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Stripe",
    ],
    category: "fullstack",
    github: "#",
    demo: "https://safihelp.com",
    featured: true,
  },
  {
    id: "3",
    title: "ZimTickets",
    summary:
      "I gave this bad boy a detailed high level architecture. Its a ticketing platform that allows users to buy, sell and validate tickets for events.",
    tags: [
      "MySQL",
      "SmartBear",
      "Docker",
      "AWS",
      "React Native",
      "Next.js",
      "Tailwind",
      "Laravel",
    ],
    category: "architecture",
    github: "#",
    demo: "https://www.zimtickets.com/",
    featured: false,
  },
  {
    id: "4",
    title: "Paynow-GO",
    summary:
      "I gave this bad boy a detailed high level architecture. Its a ticketing platform that allows users to buy, sell and validate tickets for events.",
    tags: ["Golang", "Cryptography", "Payments"],
    category: "backend",
    github: "https://github.com/IamTyrone/paynow-go",
    demo: "#",
    featured: false,
  },
  {
    id: "5",
    title: "Email Lambda",
    summary:
      "Mailgun really pissed me off with their support. So what did I do? I made a very easy open-source solution.",
    tags: ["Golang", "Fiber", "AWS", "Lambda", "SES", "IAM"],
    category: "backend",
    github: "https://github.com/IamTyrone/email-lambda",
    demo: "#",
    featured: false,
  },
  {
    id: "6",
    title: "Vantagepoint ERP",
    summary:
      "The coolest AI native ERP you will ever see. Ey, I was a finance major after all, so I know a thing or 2 about business software.",
    tags: [
      "React",
      "Fiber",
      "AWS",
      "OpenAI",
      "Textract",
      "PostgreSQL",
      "Golang",
      "TypeScript",
    ],
    category: "fullstack",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: "7",
    title: "The ZFA ERP",
    summary:
      "The lifeblood of the largest Forex Trading institution in Zimbabwe.",
    tags: [
      "React",
      "NestJS",
      "AWS",
      "ElasticBeanstalk",
      "OpenAI",
      "PostgreSQL",
      "Redis",
      "TypeScript",
      "Next.js",
    ],
    category: "fullstack",
    github: "#",
    demo: "https://www.zhouforexacademy.com/",
    featured: false,
  },
  {
    id: "8",
    title: "Melo",
    summary: "A mobile app housing your AI savings buddy called Melo.",
    tags: [
      "React",
      "NestJS",
      "AWS",
      "Hetnzer",
      "OpenAI",
      "PostgreSQL",
      "Redis",
      "TypeScript",
      "Next.js",
      "Docker",
      "Swarm",
    ],
    category: "fullstack",
    github: "#",
    demo: "https://www.melomoney.co.za/",
    featured: false,
  },
  {
    id: "9",
    title: "Acrepoint Tenant Management System",
    summary:
      "A proper, production ready tenant management system with comprehensive modules for managing multiple rental properties.",
    tags: [
      "React",
      "Fiber",
      "AWS",
      "Hetnzer",
      "OpenAI",
      "PostgreSQL",
      "Redis",
      "TypeScript",
      "Golang",
      "Docker",
      "Swarm",
    ],
    category: "fullstack",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: "10",
    title: "Bin Apetit",
    summary:
      "An AI powered mobile app designed to detect garbage via image recognition.",
    tags: [
      "React",
      "Django",
      "AWS",
      "Neural Network",
      "PostgreSQL",
      "Redis",
      "TypeScript",
      "Python",
    ],
    category: "fullstack",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: "11",
    title: "SmartMed",
    summary:
      "The claims and contributions system by Healthify Medical Software.",
    tags: [
      "React",
      "Django",
      "AWS",
      "SES",
      "PostgreSQL",
      "Redis",
      "TypeScript",
      "Python",
      "Docker",
      "Kubernetes",
      "Microserices",
      "ELK",
      "Grafana",
      "Prometheus",
      "Helm",
      "Digital Ocean",
      "Rabbitmq",
    ],
    category: "fullstack",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: "12",
    title: "Intelligateway",
    summary:
      "A large scale SMS and email gateway used by corparates for intenal communitcation or marketing campaigns.",
    tags: ["Django", "PostgreSQL", "Redis", "Python", "Rabbitmq"],
    category: "fullstack",
    github: "https://pypi.org/project/intelli-gateway/",
    demo: "#",
    featured: false,
  },
  {
    id: "13",
    title: "Credex (VimbisoPay)",
    summary:
      "A distributed digital wallet system for peer-to-peer transactions.",
    tags: ["Django", "Neo4j", "Redis", "Python", "Typescript", "AWS", "EC2"],
    category: "fullstack",
    github: "#",
    demo: "https://vimbisopay.africa/",
    featured: false,
  },
  {
    id: "14",
    title: "Investgen",
    summary:
      "The Investgen Website For A Zimbabwean forex trading institution.",
    tags: ["Next.js", "Typescript", "Vercel"],
    category: "frontend",
    github: "#",
    demo: "https://www.investgen.org/",
    featured: false,
  },
  {
    id: "15",
    title: "Unbreaks",
    summary:
      "A website designed to empower the next generation with knowledge of cybersecurity.",
    tags: [
      "React",
      "Typescript",
      "Framer",
      "GCP",
      "Digital Ocean",
      "Cloudflare",
    ],
    category: "fullstack",
    github: "#",
    demo: "https://unbreaks.com/",
    featured: false,
  },
  {
    id: "16",
    title: "Fluff and Fold",
    summary:
      "An app for regular Joe's to request laundry services, have it collected and delivered back, all from their WhatsApp.",
    tags: ["React", "Typescript", "Golang", "Digital Ocean", "Redis"],
    category: "fullstack",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: "17",
    title: "Offside(Formerly Betmaster)",
    summary:
      "A sports betting platform for football enthusiasts via a whatsapp interface.",
    tags: ["Django", "Python", "Postgres", "Heroku", "WhatsApp API"],
    category: "fullstack",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: "18",
    title: "Fund Admin",
    summary:
      "An accounting system for a fund management companies powered by Five Avenue Partners.",
    tags: ["React", "Typescript", "Supabase", "Vercel"],
    category: "fullstack",
    github: "#",
    demo: "https://www.fifeavenuepartners.vc/",
    featured: false,
  },
  {
    id: "19",
    title: "Africa Patient Safety Summit",
    summary:
      "The platform behind a pan-African patient safety summit convened by Medicines for Africa with the African Medicines Agency. Thirteen public pages, a multi step delegate registration flow priced on the server, Stripe checkout with idempotent webhooks, and a back office that handles RSVPs, payments, CSV exports and AI drafted bulk email.",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Tailwind",
      "OpenAI",
      "Vercel",
    ],
    category: "fullstack",
    github: "#",
    demo: "https://www.africapatientsafetysummit.org/",
    featured: true,
  },
];

export const projectCategories: Array<{
  value: ProjectCategory | "all";
  label: string;
}> = [
  { value: "all", label: "--all" },
  { value: "fullstack", label: "--fullstack" },
  { value: "backend", label: "--backend" },
  { value: "frontend", label: "--frontend" },
  { value: "devops", label: "--devops" },
  { value: "architecture", label: "--architecture" },
];

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

/** Featured projects in list order, for the home page preview. */
export function getFeaturedProjects(count: number): Project[] {
  return projects.filter((project) => project.featured).slice(0, count);
}
