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
    id: "6",
    title: "Vantagepoint ERP",
    summary:
      "The coolest AI native ERP you will ever see. Ey, I was a finance major after all, so I know a thing or 2 about business software. Point of sale, inventory, accounting, payroll and ZIMRA fiscalisation, with every business on its own isolated stack provisioned in minutes. Around 609,000 lines of Go behind it.",
    tags: [
      "Golang",
      "Fiber",
      "React",
      "TypeScript",
      "PostgreSQL",
      "OpenAI",
      "Textract",
      "Docker Swarm",
      "React Native",
      "AWS",
    ],
    category: "fullstack",
    github: "#",
    demo: "https://vantagepoint.drybacktechnology.com/",
    featured: true,
  },
  {
    id: "7",
    title: "The ZFA ERP",
    summary:
      "The lifeblood of the largest Forex Trading institution in Zimbabwe. A public site, a client portal, a twenty seven section admin console, a learning platform with its own video and transcription pipeline, a bill payments service wired into ZB Bank, and an iOS signals app.",
    tags: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "React Native",
      "PostgreSQL",
      "Redis",
      "OpenAI",
      "MediaConvert",
      "CloudFront",
      "AWS",
    ],
    category: "fullstack",
    github: "#",
    demo: "https://www.zhouforexacademy.com/",
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
      "React Native",
      "Expo",
    ],
    category: "fullstack",
    github: "#",
    demo: "#",
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
  {
    id: "8",
    title: "Melo",
    summary:
      "A mobile app housing your AI savings buddy called Melo. It breaks a savings goal into a weekly number, coaches you through it, and runs community challenges across ten African countries. It holds none of your money, on purpose.",
    tags: [
      "React Native",
      "Expo",
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "OpenAI",
      "Paystack",
      "Docker",
      "Hetzner",
    ],
    category: "fullstack",
    github: "#",
    demo: "https://www.melomoney.co.za/",
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
    id: "23",
    title: "PPC Zimbabwe Chatbot",
    summary:
      "A WhatsApp self service bot for the cement manufacturer. The brief asked for keyword matching, which breaks the moment somebody phrases a question the way people actually phrase questions, so free text goes to GPT-4o-mini through an MCP server that can only answer out of PPC's own database. Anything it cannot ground gets filed for an admin to turn into an FAQ in one click. Menus stay deterministic and never touch the model.",
    tags: [
      "Golang",
      "WhatsApp API",
      "OpenAI",
      "MCP",
      "PostgreSQL",
      "Redis",
      "React",
      "Docker Swarm",
      "Nginx",
      "Vercel",
    ],
    category: "fullstack",
    github: "#",
    demo: "https://wa.me/263779043935",
    featured: false,
  },
  {
    id: "24",
    title: "Fika Delivery",
    summary:
      "A delivery platform in four parts: a Go backend split by domain into orders, drivers, fleet, merchants and a ledger, one Expo app that boots into either the customer side or the driver side, a merchant dashboard that hands out API keys with docs next to them, and an admin console for settlements, pricing and currency rates.",
    tags: [
      "Golang",
      "Fiber",
      "GORM",
      "React Native",
      "Expo",
      "Tamagui",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
    category: "fullstack",
    github: "#",
    demo: "#",
    featured: false,
  },
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
    id: "25",
    title: "She Trades FX",
    summary:
      "The storefront for ZFA's sister organisation. A Next.js shop selling courses, trading journals and merchandise, a NestJS backend holding carts, orders and payments, and a dashboard where the team reprices the journal and watches orders arrive. Paynow and SmilePay both take money at checkout, and web push tells the team about it before they refresh anything.",
    tags: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "TypeORM",
      "PostgreSQL",
      "Paynow",
      "React",
      "Vite",
      "S3",
      "Vercel",
    ],
    category: "fullstack",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: "21",
    title: "Asset Management System",
    summary:
      "A fixed asset register for finance teams. Capture an asset, stick a QR code on it, and Django handles the depreciation runs, revaluations, repairs, movements between locations and eventual disposal. Two clients talk to it: a full dashboard, and a phone sized scanner app you point at the sticker to pull the asset up.",
    tags: [
      "Django",
      "Python",
      "Celery",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Vite",
      "IFRS",
      "Docker",
    ],
    category: "fullstack",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: "22",
    title: "AcrePoint Housing System",
    summary:
      "The sales side of a property development. Projects hold stands, stands get reserved and sold, instalment sales accrue interest overnight on a Celery schedule, and the miscellaneous bills nobody remembers to raise get raised by a signal instead. A CRM tracks the clients chasing a stand, and everything above it comes out as Excel or PDF.",
    tags: [
      "Django",
      "Python",
      "Celery",
      "PostgreSQL",
      "React",
      "TypeScript",
      "TanStack Query",
      "Redux",
      "shadcn",
      "Docker",
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
    id: "30",
    title: "Dabane Trust",
    summary:
      "Field operations for a water and food security NGO. Wards, lead farmers, members, workshops and attendance registers in Django, bulk SMS campaigns on Celery Beat, and a WhatsApp chatbot so a lead farmer can file a report without installing anything. React dashboard on top of all of it.",
    tags: [
      "Django",
      "Python",
      "Celery",
      "PostgreSQL",
      "React",
      "Redux",
      "WhatsApp API",
      "Docker",
    ],
    category: "fullstack",
    github: "#",
    demo: "#",
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
    id: "4",
    title: "Paynow-GO",
    summary:
      "The Go SDK for the Paynow Zimbabwe payment gateway, written because Paynow shipped official libraries for Node and Python and left Go developers copying the same HTTP client between projects. Zero dependencies, MIT licensed.",
    tags: [
      "Golang",
      "Payments",
      "Cryptography",
      "Ecocash",
      "Innbucks",
      "GitHub Actions",
    ],
    category: "backend",
    github: "https://github.com/IamTyrone/paynow-go",
    demo: "#",
    featured: false,
  },
  {
    id: "18",
    title: "Fund Admin",
    summary:
      "An accounting and reporting system for a venture firm's funds. Every action posts a journal entry, so the capital accounts and the seven statements come off the ledger rather than out of a spreadsheet sitting next to it.",
    tags: ["React", "Typescript", "Supabase", "Vercel"],
    category: "fullstack",
    github: "#",
    demo: "https://www.fifeavenuepartners.vc/",
    featured: false,
  },
  {
    id: "20",
    title: "Probable Dribble",
    summary:
      "A readability rating tool for people with low vision, built across three repos in 2022. A Chrome extension notices you are on a site we index, offers you a six step survey, and the institution that owns the site reads the scores and suggestions off a dashboard.",
    tags: [
      "React",
      "TypeScript",
      "Redux",
      "Ant Design",
      "Chrome Extension",
      "Django",
      "JWT",
      "Netlify",
      "Heroku",
    ],
    category: "fullstack",
    github: "https://github.com/IamTyrone/probable-trible-frontend",
    demo: "https://probable-dribble-survery.netlify.app",
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
    id: "26",
    title: "Hyperion",
    summary:
      "An LSTM that reads thirty days of returns and puts a probability on tomorrow being a jump day, served behind one FastAPI endpoint. Pointed at thin African exchanges, where the standard diffusion models quietly assume a liquidity that is not there. It trains on synthetic returns with jumps injected at random, which is the honest caveat: the shape is right, the market is not real yet.",
    tags: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "Neural Network",
      "Quantitative Finance",
      "Algorithmic Trading",
    ],
    category: "backend",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: "27",
    title: "Cyber Nations HIBP Proxy",
    summary:
      "A small Go service that sits between the Unbreaks site and Have I Been Pwned so the API key never reaches a browser. Nginx in front, Docker underneath, and an Ansible playbook that takes a bare server to a configured host with a certificate on it.",
    tags: ["Golang", "Docker", "Nginx", "Ansible", "Security", "API Keys"],
    category: "devops",
    github: "#",
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
    github: "https://github.com/IamTyrone/Email-Lamba-Golang",
    demo: "#",
    featured: false,
  },
  {
    id: "35",
    title: "Thumeya",
    summary:
      "A money remittance proof of concept. Users, transactions, the charge taken off each one, and a reports app that aggregates the net so you can see what the business earns rather than what it moves. The React dashboard draws it with ApexCharts and PrimeReact tables.",
    tags: ["Django", "Python", "React", "JavaScript", "PostgreSQL", "REST APIs"],
    category: "fullstack",
    github: "#",
    demo: "#",
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
    id: "31",
    title: "Poultry Management System",
    summary:
      "Books for a chicken farm. Batches of birds, feed, medication, expenses and sales, with signals that keep the running balances honest when somebody edits an adjustment three weeks after the fact. Django REST on a Heroku dyno, 2022.",
    tags: ["Django", "Python", "PostgreSQL", "Heroku", "REST APIs"],
    category: "backend",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: "32",
    title: "DreamLeague",
    summary:
      "A property classifieds platform. Merchants post listings for sale, residential rent, student accommodation or commercial rent across Harare, Bulawayo and Gweru, eight photo slots each, with a blog bolted on the side for search traffic. Django underneath, React in front, hosted on Firebase.",
    tags: ["Django", "Python", "React", "JavaScript", "Firebase"],
    category: "fullstack",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: "34",
    title: "Bambinoe",
    summary:
      "A school management system for Millennium Technologies. Teachers upload an assignment with instructions, material and a due date against a subject, performance is tracked per pupil, and the profile ties the two together for whoever is asking. Django, 2020.",
    tags: ["Django", "Python", "SQLite", "JavaScript"],
    category: "fullstack",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: "33",
    title: "Vermillion Logistics",
    summary:
      "A quote engine for a moving company, which sounds like one form until you write it. Deliveries want weight and a loading time, removals want rooms, beds and how many large appliances, and both land in a dashboard the office works through as a callback list. Django templates, 2020, and the first thing I ever pushed to Heroku.",
    tags: ["Django", "Python", "Heroku", "JavaScript", "SQLite"],
    category: "fullstack",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: "29",
    title: "AI DeCongester",
    summary:
      "A traffic decongestion prototype from May 2023. The React side collects how people actually move around a city across five tabs of questions, and the Flask service behind it, at the point I stopped, answered every request with the string \"Just data\". The plan was to feed the answers to a model that reroutes people before the jam forms.",
    tags: ["React", "TypeScript", "Redux", "Flask", "Python"],
    category: "fullstack",
    github: "https://github.com/IamTyrone/AI-DeCongester",
    demo: "#",
    featured: false,
  },
  {
    id: "28",
    title: "ChitChat",
    summary:
      "A Python social network somebody else was building the API for. I took the frontend from nothing to a Vite and React shell with Tailwind, Flowbite, routing and a login form that logged nobody in yet, across five commits in September 2023.",
    tags: ["React", "Vite", "Tailwind", "Flowbite", "Django", "Open Source"],
    category: "frontend",
    github: "https://github.com/IamTyrone/ChitChat-front",
    demo: "#",
    featured: false,
  },
  {
    id: "36",
    title: "Golf Club Management System",
    summary:
      "The skeleton of a club system from 2020. Bookings, tournaments, maintenance, member profiles and a blog, each its own Django app with the templates and the URL map in place and the models still empty. I keep it because it is a clean picture of how I cut a domain up before writing a line of logic.",
    tags: ["Django", "Python", "JavaScript", "Architecture"],
    category: "architecture",
    github: "#",
    demo: "#",
    featured: false,
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
