/**
 * Single source of truth for the /education page. The page is a client
 * component like /about, so keep this list flat: no imports, no icons, just
 * data the page maps over.
 */

export type Institution = {
  id: string;
  school: string;
  qualification: string;
  field: string;
  period: string;
  location: string;
  /** Short line under the title, in Tyrone's voice. */
  note: string;
  /** Concrete things the qualification left behind. */
  highlights: string[];
  /** Tags rendered through SkillChip, so check lib/tech-icons.tsx first. */
  tags: string[];
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  /** Omit when the date is not on record. The card drops the date, not the card. */
  issued?: string;
  /** What the exam actually covers, not what the badge implies. */
  note: string;
  tags: string[];
};

export const institutions: Institution[] = [
  {
    id: "nust",
    school: "National University of Science and Technology",
    qualification: "Bachelor of Commerce",
    field: "Finance",
    period: "Sept 2016 - May 2020",
    location: "Bulawayo, Zimbabwe",
    note: "Four years of balance sheets, discount rates and risk models. Not one lecture on pointers.",
    highlights: [
      "Corporate finance, valuation and financial modelling, which is why I read an AWS bill the way other engineers read a stack trace.",
      "Statistics and econometrics. Same maths as half of machine learning, worse notation.",
      "I started taking paid software contracts at Dryback in February 2019, so the last stretch of the degree ran alongside real clients.",
    ],
    tags: ["Python", "PostgreSQL"],
  },
];

export const certifications: Certification[] = [
  {
    id: "aws-saa",
    name: "AWS Solutions Architect, Associate",
    issuer: "Amazon Web Services",
    issued: "May 2025",
    note: "Sat it after years of already running production on EC2, RDS and S3. Most of the studying was learning the names AWS gives to things I had been wiring up by hand.",
    tags: ["AWS", "EC2", "S3", "RDS", "VPC", "IAM", "CloudWatch"],
  },
  {
    id: "cfa-investment-foundations",
    name: "Investment Foundations Certificate",
    issuer: "CFA Institute",
    note: "The other half of the CV. Ethics, portfolio management, securities and how the industry plumbing actually fits together. Useful every single time I build something that touches money.",
    tags: ["Finance", "Portfolio Management", "Risk Management", "Ethics"],
  },
];

/**
 * Why a finance degree and a CFA certificate sit on an engineer's site. This
 * is the thread that connects them, and it is the work he wants more of.
 */
export const financeTrack = {
  title: "where the two halves meet",
  body: "I did not pick finance and then abandon it. The interesting problems, to me, are the ones where the code has a balance sheet behind it. Quantitative finance and algorithmic trading in particular: pricing models, backtests, execution logic, the kind of system where a latency budget and a risk limit are the same conversation. I have built payment gateways, an ERP with a real general ledger, and claims processing for medical aid. I would like the next one to have a strategy attached.",
  interests: [
    "Quantitative Finance",
    "Algorithmic Trading",
    "Financial Modelling",
    "Risk Management",
    "Backtesting",
    "Market Data",
    "Python",
    "Go",
    "Rust",
    "PostgreSQL",
  ],
};

export type PlannedCertification = {
  id: string;
  /** Short form, used as the card title. */
  abbr: string;
  name: string;
  issuer: string;
  /** Tag passed to getTechIcon, so it must exist in lib/tech-icons.tsx. */
  icon: string;
  /** `next` gets the highlighted card. Everything else is `queued`. */
  status: "next" | "queued";
  note: string;
};

/**
 * Studying, not earned. Order matters: the page renders this list as written,
 * and the single `next` entry is the one being sat first.
 */
export const plannedCertifications: PlannedCertification[] = [
  {
    id: "aws-dva",
    abbr: "AWS DVA-C02",
    name: "AWS Developer, Associate",
    issuer: "Amazon Web Services",
    icon: "AWS",
    status: "next",
    note: "Next one up. The architect associate covered the drawing, this one covers the code that has to run inside the boxes.",
  },
  {
    id: "kcna",
    abbr: "KCNA",
    name: "Kubernetes and Cloud Native Associate",
    issuer: "The Linux Foundation",
    icon: "Kubernetes",
    status: "queued",
    note: "The entry point to the CNCF set.",
  },
  {
    id: "kcsa",
    abbr: "KCSA",
    name: "Kubernetes and Cloud Native Security Associate",
    issuer: "The Linux Foundation",
    icon: "Kubernetes",
    status: "queued",
    note: "Threat modelling a cluster instead of just running one.",
  },
  {
    id: "cka",
    abbr: "CKA",
    name: "Certified Kubernetes Administrator",
    issuer: "The Linux Foundation",
    icon: "Kubernetes",
    status: "queued",
    note: "Two hours in a terminal with no Stack Overflow. I have been running production clusters since 2022, so this is mostly about speed.",
  },
  {
    id: "ckad",
    abbr: "CKAD",
    name: "Certified Kubernetes Application Developer",
    issuer: "The Linux Foundation",
    icon: "Kubernetes",
    status: "queued",
    note: "The same exam format from the other side of the deployment.",
  },
  {
    id: "cks",
    abbr: "CKS",
    name: "Certified Kubernetes Security Specialist",
    issuer: "The Linux Foundation",
    icon: "Kubernetes",
    status: "queued",
    note: "Needs a live CKA to sit, so it lands last by design.",
  },
  {
    id: "hashicorp-associate",
    abbr: "HashiCorp Associate",
    name: "HashiCorp Certified Associate",
    issuer: "HashiCorp",
    icon: "HashiCorp",
    status: "queued",
    note: "Terraform has been provisioning my infrastructure for years without asking me to prove it. Time to make it official.",
  },
];

/**
 * The degree is in finance. Everything in the day job was learned elsewhere,
 * and pretending otherwise would be odd on a page about education.
 */
export const selfTaught = {
  title: "Everything else",
  body: "The honest version: the degree says finance, the job says backend. Go, Kubernetes, Django, Terraform, the whole stack I actually get paid for came from documentation, other people's source code, and breaking things in environments that deserved better. Eight years of that is its own curriculum. It just doesn't come with a certificate.",
  subjects: [
    "Go",
    "Python",
    "TypeScript",
    "Rust",
    "Django",
    "Kubernetes",
    "Docker",
    "Terraform",
    "PostgreSQL",
    "RabbitMQ",
    "Linux",
    "Redis",
  ],
};

export const educationStats = [
  { label: "degrees", value: "1" },
  { label: "certifications earned", value: String(certifications.length) },
  { label: "in the exam queue", value: String(plannedCertifications.length) },
  { label: "field of study", value: "finance" },
];
