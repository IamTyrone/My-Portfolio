// Detail-page data for the projects that have a full write-up. Shared metadata
// (title, tags, links, category) lives in lib/projects/projects.ts; the prose
// bodies live in content/projects/*.md and are read on the server, so they
// never ship to the browser.

export interface ProjectDetail {
  /** hero paragraph under the title */
  intro: string;
  image: string;
  /** `contain` for logos and artwork that should not be cropped */
  imageFit?: "cover" | "contain";
  /** overrides the card tags when the detail page tells a different story */
  tags?: string[];
  timeline: string;
  team: string;
  status: string;
  features: string[];
  techStack: Record<string, string[]>;
  challenges: string[];
  learnings: string[];
  /** markdown file inside content/projects */
  file: string;
}

export const projectDetails: Record<string, ProjectDetail> = {
  "1": {
    intro:
      "A full-stack cybersecurity platform that uses machine learning to detect phishing, malware, and malicious URLs in real time, combining a trained ML model, a production-grade API, a React web dashboard, and a Chrome extension.",
    image: "/img/projects/kraven/scanner.png",
    tags: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "Celery",
      "RabbitMQ",
      "React",
      "Vite",
      "TailwindCSS",
      "Docker",
      "Vercel",
      "Chrome Extension",
    ],
    timeline: "3 months",
    team: "Solo project",
    status: "Completed",
    features: [
      "Real-time malicious URL detection with ML confidence scoring",
      "14-feature URL engineering pipeline (entropy, digit ratio, path depth, etc.)",
      "RandomForest classifier trained on ~500K URLs with predict_proba output",
      "Community threat reporting that overrides ML predictions",
      "Async model retraining via Celery + RabbitMQ without API downtime",
      "Model hot-reloading that swaps the updated .pkl file without a restart",
      "Chrome Extension (Manifest V3) with auto-scan and manual popup",
      "React web dashboard with detailed threat reports and one-click reporting",
      "Fully containerised backend with Docker Compose (API + worker + broker)",
    ],
    techStack: {
      "ML / Backend": [
        "Python",
        "scikit-learn",
        "FastAPI",
        "SQLAlchemy",
        "SQLite",
      ],
      "Async / Messaging": ["Celery", "RabbitMQ"],
      Frontend: [
        "React 18",
        "Vite",
        "TailwindCSS",
        "Framer Motion",
        "Flowbite",
      ],
      Extension: ["Chrome Extension (Manifest V3)", "JavaScript"],
      Deployment: ["Docker Compose", "Vercel"],
      Tools: ["Git", "Postman", "VS Code"],
    },
    challenges: [
      "Engineering meaningful features from raw URL strings without leaking label information",
      "Chrome Manifest V3 restrictions on content script redirects, which required creative workarounds",
      "Wiring async Celery retraining so it never blocks the live API",
      "Keeping the model hot-reloadable on disk without service restarts",
      "Balancing ML prediction confidence thresholds to minimise false positives",
    ],
    learnings: [
      "How to build a production Chrome Extension with Manifest V3 and its many constraints",
      "Feature engineering for URL-based ML, where entropy and structural signals are surprisingly powerful",
      "Async task queues with Celery and RabbitMQ for background model retraining",
      "Model hot-reloading patterns in production APIs",
      "How crowd-sourced intelligence can meaningfully improve ML accuracy over time",
    ],
    file: "kraven-the-hunter.md",
  },
  "2": {
    intro:
      "This is a platform that enables cleaners to find work and regular people to find cleaners, all in  real time.",
    image: "/img/projects/safi/logo.webp",
    imageFit: "contain",
    tags: [
      "AWS",
      "Docker",
      "Python",
      "Django",
      "React",
      "React Native",
      "Golang",
    ],
    timeline: "1 Year",
    team: "Mviyo Technologies",
    status: "Completed",
    features: [
      "Real Time Cleaner Discovery",
      "Rating System",
      "Secure Payments",
      "Strict KYC",
      "Smart Discovery Algorithms",
      "Job Rescheduling",
      "Dynamic Service Costing",
      "Streamlined User Interfaces",
    ],
    techStack: {
      Cloud: ["AWS", "RDS", "Redis"],
      IaC: ["Terraform", "AWS CloudFormation"],
      Monitoring: ["Portainer", "Sentry", "CloudWatch"],
      "CI/CD": ["GitHub Actions"],
      Security: ["AWS IAM", "VPC", "Security Groups"],
      Backend: ["Django", "Golang"],
      Frontend: ["React.js", "Redux"],
      Mobile: ["React Native", "Redux"],
    },
    challenges: [
      "Developing with Expo is not for the faint hearted!",
      "Adjusting the discovery Algorithm and real time client server communication",
      "Regulatory compliance with multiple regulatory bodies",
      "Background processes in mobile applications",
      "Efficient media file compression",
      "Short term data persistence",
    ],
    learnings: [
      "Well, I finally got deeper into React Native",
      "My understanding of websockets really went up a notch",
      "Deep linking in mobile apps",
      "To be honest, I already knew quite a lot here, there wasn't too much learning done",
    ],
    file: "safi-help.md",
  },
  "3": {
    intro:
      "An all in one event management platform. It Houses the ability to help event organizers post events, sell their tickets and provide means to enable users to validate those tickets.",
    image: "/img/projects/zimtickets/explore.webp",
    tags: ["Architecture", "OpenAPI", "Eraser.io"],
    timeline: "1 Year",
    team: "Mviyo Technologies",
    status: "Completed",
    features: [
      "Event Management",
      "Ticket Sales and Validation",
      "Native iOS and Android apps for discovery, checkout and ticket holding",
      "Detailed Event Analytics",
      "Secure Payment Processing",
      "Event Promotion Tools",
    ],
    techStack: {
      Frontend: ["React Native", "Next.js", "TypeScript", "Tailwind CSS"],
      Backend: ["Laravel", "PHP"],
      Database: ["MySQL"],
      Payment: ["Stripe", "Innbucks", "Ecocash", "Omari"],
      Deployment: ["Vercel", "AWS"],
      Tools: ["Smart Bear", "Eraser.io", "Postman", "Lucid Charts"],
    },
    challenges: [
      "Cost effective resource utilization.",
      "Consistent API and database design",
      "Mockable API endpoints for testing",
      "User authentication and authorization",
      "User story generation and management",
    ],
    learnings: [
      "Generating user stories and requirements from high-level descriptions",
      "Drafting API specifications and documentation",
      "Designing scalable and maintainable backend architectures",
      "Implementing best practices for API development and testing",
      "Writing Software Requirements Specifications (SRS) documents",
    ],
    file: "zimtickets.md",
  },
  "4": {
    intro:
      "An idiomatic, dependency free Go SDK for the Paynow Zimbabwe payment gateway. Web redirects, mobile express checkout on EcoCash, OneMoney and InnBucks, status polling and hash verified webhooks, behind an API that feels like the standard library.",
    image: "/img/projects/paynow/repo.webp",
    tags: [
      "Golang",
      "Payments",
      "Cryptography",
      "Ecocash",
      "Innbucks",
      "REST APIs",
      "GitHub Actions",
    ],
    timeline: "6 months, on and off",
    team: "Solo, open source",
    status: "Published, MIT licensed",
    features: [
      "Web payments returning a redirect URL for the customer and a poll URL for you",
      "Mobile express checkout charging EcoCash, OneMoney or InnBucks directly",
      "InnBucks responses carrying the authorization code, deep link and QR code",
      "Payments that behave like a cart, computing their own total as you add items",
      "Functional options for the result URL, return URL and a custom HTTP client",
      "Context on every network call, so payments can be cancelled and timed out",
      "SHA-512 request signing with automatic verification of every response hash",
      "Insertion ordered request building, because Paynow hashes fields in order",
      "Result URL webhook handling that verifies the hash before you trust the update",
      "Transaction status helpers instead of comparing raw gateway strings",
      "Sentinel errors for caller mistakes and a distinct APIError for gateway complaints",
      "A single method HTTP interface, so tests need no mocking framework or live keys",
      "Zero third party dependencies: the go.mod file is three lines long",
      "A complete runnable flow in example/main.go",
    ],
    techStack: {
      Language: ["Golang"],
      Payments: ["Paynow", "Ecocash", "OneMoney", "Innbucks"],
      Security: ["SHA-512", "Cryptography"],
      Testing: ["Go Test", "Race Detector", "Codecov"],
      CI: ["GitHub Actions", "staticcheck", "golangci-lint"],
      Distribution: ["Go Modules", "MIT License"],
    },
    challenges: [
      "Go's form encoder sorts map keys, which silently breaks a hash that depends on field order",
      "Porting from the official Node.js and Python SDKs without importing their dynamic habits into Go",
      "Deciding what belongs in an internal package so callers cannot misuse the hashing",
      "Modelling InnBucks, which answers with a code, a deep link and a QR code instead of a USSD prompt",
      "Separating caller mistakes from gateway errors so both are matchable rather than stringly typed",
      "Keeping the dependency list empty while still being pleasant to test against",
    ],
    learnings: [
      "Insertion order is part of the contract with any gateway that hashes concatenated fields",
      "Accepting a single method interface instead of *http.Client makes a library trivially mockable",
      "Functional options age far better than a config struct that keeps growing",
      "Verification you have to remember to call is verification nobody calls, so do it before handing the value back",
      "Sentinel errors plus errors.Is give callers branching they can actually rely on",
      "A CI matrix across three Go versions catches more than it costs on a library other people import",
    ],
    file: "paynow-go.md",
  },
  "19": {
    intro:
      "The full platform behind a pan-African patient safety summit convened by Medicines for Africa with the African Medicines Agency. A thirteen page public site, a multi step delegate registration flow priced entirely on the server, Stripe checkout with idempotent webhooks, and an admin back office for RSVPs, payments, exports and AI drafted bulk email.",
    image: "/img/projects/mfa/summit-home.webp",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "shadcn",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "OpenAI",
      "Golang",
      "SES",
      "Vercel",
      "Security",
    ],
    timeline: "2 months",
    team: "Solo build for Medicines for Africa",
    status: "Live",
    features: [
      "Thirteen page public site with the entire programme, themes, speakers and committee driven by typed content modules",
      "Multi step delegate registration with a registrant step, unlimited guests, and a review step before payment",
      "Twelve live prices from three delegate categories across four time windows, resolved in Africa/Kigali",
      "Server authoritative pricing that rebuilds the basket from scratch and never trusts the client",
      "Stripe Checkout with an idempotent webhook keyed on the payment intent, and retry-friendly failures",
      "Expired checkout sessions that release a pending place without ever touching a paid one",
      "Duplicate registration detection, bot honeypot, and a mandatory terms gate before checkout opens",
      "Confirmation, pending reservation and admin notification emails through a self hosted Golang SES service",
      "Full email audit log capturing subject, rendered body, status and error for every send",
      "Admin dashboard with revenue and registration stats, filterable RSVPs and individual RSVP drilldowns",
      "Manual RSVP creation, complimentary places, and offline payment recording for bank transfers",
      "CSV export of RSVPs and payments straight out of streaming API routes",
      "Bulk email with a state driven recipient picker, a send confirmation dialog, and gpt-4o-mini drafting",
      "Superuser and standard admin roles with account activation toggles",
      "Registration kill switch: one environment variable flips the whole site between paid checkout and interest capture",
    ],
    techStack: {
      Frontend: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn"],
      "Data / Auth": ["Supabase", "PostgreSQL", "Row Level Security"],
      Payments: ["Stripe", "Stripe Webhooks"],
      Email: ["Email Lambda (Golang)", "AWS SES"],
      AI: ["OpenAI"],
      Validation: ["Zod", "React Hook Form"],
      Deployment: ["Vercel", "GitHub Actions"],
    },
    challenges: [
      "Keeping pricing authoritative on the server across twelve category and window combinations without a single client side price",
      "Date boundaries that respect the Summit's own timezone instead of whichever region the deployment happens to land in",
      "Stripe idempotency against a partial unique index, which Postgres will not accept as an ON CONFLICT arbiter",
      "Failing loudly in the webhook so Stripe retries, rather than swallowing an error and losing a paid registration",
      "Default deny RLS that serves both a public site and an admin console, without the policies recursing through themselves",
      "Pausing paid registration on a live site with a single environment variable and no code branch",
      "Next 16 moved the goalposts, middleware is proxy.ts now, so the docs in node_modules got read properly instead of guessed at",
    ],
    learnings: [
      "Partial unique indexes and ON CONFLICT do not mix, and the lookup-then-write pattern that replaces them",
      "Next's after() is the cleanest way to fan out email without making a payment provider wait on your SMTP",
      "SECURITY DEFINER helper functions are the trick for RLS policies that need to read the table they protect",
      "An optimistic auth gate plus an authoritative server component check beats trying to do both in one place",
      "Treating conference copy as typed data instead of JSX turns weekly content churn into a one line diff",
      "Feature flagging a whole revenue flow behind one env var is worth the twenty minutes it costs up front",
    ],
    file: "africa-patient-safety-summit.md",
  },
};

export function getProjectDetail(id: string): ProjectDetail | undefined {
  return projectDetails[id];
}
