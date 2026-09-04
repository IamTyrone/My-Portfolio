import type { IconType } from "react-icons";
import {
  Blocks,
  Bot,
  Brain,
  CalendarDays,
  Cloud,
  CodeXml,
  Component,
  CreditCard,
  Database,
  GraduationCap,
  Infinity as InfinityIcon,
  KeyRound,
  Layers,
  MessageSquare,
  Network,
  PenTool,
  PiggyBank,
  Rocket,
  ScrollText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Upload,
  Users,
  Waypoints,
  Workflow,
} from "lucide-react";
import { DiHeroku } from "react-icons/di";
import { FaAws, FaSlack } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import {
  SiAndroid,
  SiAnsible,
  SiAntdesign,
  SiApache,
  SiApple,
  SiCelery,
  SiClaude,
  SiClickup,
  SiCloudflare,
  SiConfluence,
  SiDigitalocean,
  SiDjango,
  SiDocker,
  SiElastic,
  SiElasticsearch,
  SiElasticstack,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiFramer,
  SiGit,
  SiGithubactions,
  SiGnubash,
  SiGo,
  SiGooglechrome,
  SiGooglecloud,
  SiGrafana,
  SiGraphql,
  SiHelm,
  SiHetzner,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiJsonwebtokens,
  SiKubernetes,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiOpenjdk,
  SiPhp,
  SiPortainer,
  SiPostgresql,
  SiPostman,
  SiPrometheus,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiRedux,
  SiRust,
  SiScikitlearn,
  SiSentry,
  SiShadcnui,
  SiSocketdotio,
  SiSpringboot,
  SiSqlalchemy,
  SiSqlite,
  SiStripe,
  SiSupabase,
  SiSwagger,
  SiTailwindcss,
  SiTensorflow,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWhatsapp,
} from "react-icons/si";

export type TechIcon = {
  icon: IconType;
  /** Brand color — drives the glyph and the chip's hover glow. */
  color: string;
};

const AWS_ORANGE = "#FF9900";
/** AWS services have no individual Simple Icons marks, so they share the AWS logo. */
const aws = (): TechIcon => ({ icon: FaAws, color: AWS_ORANGE });

/**
 * Canonical lookup. Keys are normalized (see `normalize`), so "Next.js",
 * "nextjs" and "NEXT JS" all resolve to the same entry.
 */
const registry: Record<string, TechIcon> = {
  // ── Frontend ──────────────────────────────────────────────────────
  react: { icon: SiReact, color: "#61DAFB" },
  react18: { icon: SiReact, color: "#61DAFB" },
  reactjs: { icon: SiReact, color: "#61DAFB" },
  reactnative: { icon: SiReact, color: "#61DAFB" },
  nextjs: { icon: SiNextdotjs, color: "#FFFFFF" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  javascript: { icon: SiJavascript, color: "#F7DF1E" },
  tailwindcss: { icon: SiTailwindcss, color: "#38BDF8" },
  tailwind: { icon: SiTailwindcss, color: "#38BDF8" },
  shadcn: { icon: SiShadcnui, color: "#FFFFFF" },
  antdesign: { icon: SiAntdesign, color: "#1677FF" },
  redux: { icon: SiRedux, color: "#764ABC" },
  vite: { icon: SiVite, color: "#A259FF" },
  framer: { icon: SiFramer, color: "#0055FF" },
  framermotion: { icon: SiFramer, color: "#0055FF" },
  flowbite: { icon: Component, color: "#38BDF8" },

  // ── Backend ───────────────────────────────────────────────────────
  nodejs: { icon: SiNodedotjs, color: "#5FA04E" },
  python: { icon: SiPython, color: "#3776AB" },
  django: { icon: SiDjango, color: "#0C9D58" },
  fastapi: { icon: SiFastapi, color: "#009688" },
  expressjs: { icon: SiExpress, color: "#FFFFFF" },
  go: { icon: SiGo, color: "#00ADD8" },
  golang: { icon: SiGo, color: "#00ADD8" },
  fiber: { icon: SiGo, color: "#00ADD8" },
  rust: { icon: SiRust, color: "#F74C00" },
  java: { icon: SiOpenjdk, color: "#F89820" },
  springboot: { icon: SiSpringboot, color: "#6DB33F" },
  flask: { icon: SiFlask, color: "#FFFFFF" },
  nestjs: { icon: SiNestjs, color: "#E0234E" },
  php: { icon: SiPhp, color: "#777BB4" },
  laravel: { icon: SiLaravel, color: "#FF2D20" },
  celery: { icon: SiCelery, color: "#37814A" },
  sqlalchemy: { icon: SiSqlalchemy, color: "#D71F00" },

  // ── Data ──────────────────────────────────────────────────────────
  postgresql: { icon: SiPostgresql, color: "#4169E1" },
  postgres: { icon: SiPostgresql, color: "#4169E1" },
  mongodb: { icon: SiMongodb, color: "#47A248" },
  redis: { icon: SiRedis, color: "#FF4438" },
  supabase: { icon: SiSupabase, color: "#3FCF8E" },
  mysql: { icon: SiMysql, color: "#4479A1" },
  elasticsearch: { icon: SiElasticsearch, color: "#FEC514" },
  elk: { icon: SiElasticstack, color: "#FEC514" },
  elastic: { icon: SiElastic, color: "#FEC514" },
  sqlite: { icon: SiSqlite, color: "#5DA9DD" },
  firebase: { icon: SiFirebase, color: "#FFCA28" },
  neo4j: { icon: Database, color: "#4581C3" },
  rabbitmq: { icon: SiRabbitmq, color: "#FF6600" },

  // ── Cloud & DevOps ────────────────────────────────────────────────
  aws: aws(),
  awsiam: aws(),
  iam: aws(),
  awscloudformation: aws(),
  cloudwatch: aws(),
  ec2: aws(),
  s3: aws(),
  rds: aws(),
  ses: aws(),
  vpc: aws(),
  securitygroups: aws(),
  lambda: aws(),
  elasticbeanstalk: aws(),
  textract: aws(),
  gcp: { icon: SiGooglecloud, color: "#4285F4" },
  digitalocean: { icon: SiDigitalocean, color: "#0080FF" },
  hetzner: { icon: SiHetzner, color: "#D50C2D" },
  hetnzer: { icon: SiHetzner, color: "#D50C2D" },
  heroku: { icon: DiHeroku, color: "#7B61FF" },
  cloudflare: { icon: SiCloudflare, color: "#F38020" },
  docker: { icon: SiDocker, color: "#2496ED" },
  dockercompose: { icon: SiDocker, color: "#2496ED" },
  swarm: { icon: SiDocker, color: "#2496ED" },
  portainer: { icon: SiPortainer, color: "#13BEF9" },
  kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  helm: { icon: SiHelm, color: "#0F1689" },
  cicd: { icon: InfinityIcon, color: "#00E5A0" },
  terraform: { icon: SiTerraform, color: "#844FBA" },
  ansible: { icon: SiAnsible, color: "#FFFFFF" },
  jenkins: { icon: SiJenkins, color: "#D33833" },
  githubactions: { icon: SiGithubactions, color: "#2088FF" },
  vercel: { icon: SiVercel, color: "#FFFFFF" },
  netlify: { icon: SiNetlify, color: "#00C7B7" },
  sentry: { icon: SiSentry, color: "#9E5CF7" },
  prometheus: { icon: SiPrometheus, color: "#E6522C" },
  grafana: { icon: SiGrafana, color: "#F46800" },
  nginx: { icon: SiNginx, color: "#009639" },
  apache: { icon: SiApache, color: "#D22128" },
  bash: { icon: SiGnubash, color: "#4EAA25" },

  // ── Mobile ────────────────────────────────────────────────────────
  flutter: { icon: SiFlutter, color: "#02569B" },
  ios: { icon: SiApple, color: "#FFFFFF" },
  android: { icon: SiAndroid, color: "#3DDC84" },
  expo: { icon: SiExpo, color: "#FFFFFF" },

  // ── ML ────────────────────────────────────────────────────────────
  tensorflow: { icon: SiTensorflow, color: "#FF6F00" },
  scikitlearn: { icon: SiScikitlearn, color: "#F7931E" },
  neuralnetwork: { icon: Brain, color: "#C77DFF" },
  mlbackend: { icon: Brain, color: "#C77DFF" },

  // ── Tools & services ──────────────────────────────────────────────
  git: { icon: SiGit, color: "#F05032" },
  vscode: { icon: VscCode, color: "#007ACC" },
  figma: { icon: SiFigma, color: "#F24E1E" },
  postman: { icon: SiPostman, color: "#FF6C37" },
  linux: { icon: SiLinux, color: "#FCC624" },
  claude: { icon: SiClaude, color: "#D97757" },
  chatgpt: { icon: TbBrandOpenai, color: "#10A37F" },
  openai: { icon: TbBrandOpenai, color: "#10A37F" },
  jira: { icon: SiJira, color: "#0052CC" },
  slack: { icon: FaSlack, color: "#E01E5A" },
  confluence: { icon: SiConfluence, color: "#2684FF" },
  clickup: { icon: SiClickup, color: "#7B68EE" },
  monday: { icon: CalendarDays, color: "#FF3D57" },
  stripe: { icon: SiStripe, color: "#635BFF" },
  whatsappapi: { icon: SiWhatsapp, color: "#25D366" },
  chromeextension: { icon: SiGooglechrome, color: "#4285F4" },
  chromeextensionmanifestv3: { icon: SiGooglechrome, color: "#4285F4" },
  graphql: { icon: SiGraphql, color: "#E10098" },
  restapis: { icon: SiOpenapiinitiative, color: "#6BA539" },
  websockets: { icon: SiSocketdotio, color: "#00D9FF" },
  openapi: { icon: SiOpenapiinitiative, color: "#6BA539" },
  swagger: { icon: SiSwagger, color: "#85EA2D" },
  smartbear: { icon: SiSwagger, color: "#85EA2D" },
  jwt: { icon: SiJsonwebtokens, color: "#FB015B" },
  eraserio: { icon: PenTool, color: "#5B5BD6" },
  lucidcharts: { icon: PenTool, color: "#F26B21" },

  // ── Domain / concept tags ─────────────────────────────────────────
  architecture: { icon: Blocks, color: "#00E5A0" },
  microserices: { icon: Network, color: "#00E5A0" },
  microservices: { icon: Network, color: "#00E5A0" },
  asyncmessaging: { icon: Waypoints, color: "#00D9FF" },
  authentication: { icon: KeyRound, color: "#FFB454" },
  security: { icon: ShieldCheck, color: "#00E5A0" },
  cryptography: { icon: ShieldCheck, color: "#00E5A0" },
  payments: { icon: CreditCard, color: "#635BFF" },
  ecocash: { icon: CreditCard, color: "#00A651" },
  innbucks: { icon: CreditCard, color: "#F5A623" },
  omari: { icon: CreditCard, color: "#00B5E2" },
  automation: { icon: Workflow, color: "#00D9FF" },
  scalability: { icon: TrendingUp, color: "#00E5A0" },
  fileupload: { icon: Upload, color: "#00D9FF" },
  development: { icon: Layers, color: "#00E5A0" },
  opinion: { icon: MessageSquare, color: "#FF6B6B" },
  experience: { icon: ScrollText, color: "#FFB454" },
  growth: { icon: TrendingUp, color: "#00E5A0" },
  learning: { icon: GraduationCap, color: "#00D9FF" },
  community: { icon: Users, color: "#C77DFF" },
  cloud: { icon: Cloud, color: "#00D9FF" },
  costoptimization: { icon: PiggyBank, color: "#00E5A0" },
  agility: { icon: Rocket, color: "#FFB454" },
  agilemethodologies: { icon: Rocket, color: "#FFB454" },
  startups: { icon: Rocket, color: "#FF6B6B" },
  softwaredevelopment: { icon: CodeXml, color: "#00E5A0" },
};

/** Strips punctuation and spacing so tag spellings collapse onto one key. */
function normalize(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** Fallbacks for tags with no registry entry, keyed by a substring match. */
const fallbacks: Array<[RegExp, TechIcon]> = [
  [/aws|amazon/, { icon: FaAws, color: AWS_ORANGE }],
  [/\b(db|sql|database)\b/, { icon: Database, color: "#00D9FF" }],
  [/ai|gpt|llm|ml\b/, { icon: Bot, color: "#C77DFF" }],
];

/**
 * Resolves a tag to a logo. Returns a neutral spark for anything unknown so
 * chips stay visually uniform rather than half-iconed.
 */
export function getTechIcon(name: string): TechIcon {
  const key = normalize(name);
  const hit = registry[key];
  if (hit) return hit;

  const lower = name.toLowerCase();
  for (const [pattern, icon] of fallbacks) {
    if (pattern.test(lower)) return icon;
  }

  return { icon: Sparkles, color: "#00E5A0" };
}

/** True when the tag has a real, deliberate icon (not the generic fallback). */
export function hasTechIcon(name: string): boolean {
  return normalize(name) in registry;
}

type SkillChipProps = {
  name: string;
  /** `sm` for dense project cards, `md` for the skills grid. */
  size?: "sm" | "md";
  className?: string;
};

/**
 * A tag rendered as `logo + name`, tinted with the tool's brand color.
 * The color is passed down as `--brand`; `.skill-chip` in globals.css turns
 * it into the border, fill, and hover glow.
 */
export function SkillChip({ name, size = "sm", className = "" }: SkillChipProps) {
  const { icon: Icon, color } = getTechIcon(name);
  const dense = size === "sm";

  return (
    <span
      style={{ "--brand": color } as React.CSSProperties}
      className={`skill-chip group inline-flex items-center rounded-sm font-mono cursor-default ${
        dense
          ? "gap-1 px-1.5 py-0.5 text-[10px]"
          : "gap-1.5 px-2 py-1 text-[11px]"
      } ${className}`}
    >
      <Icon
        className={`shrink-0 grayscale-[0.35] opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 ${
          dense ? "h-3 w-3" : "h-3.5 w-3.5"
        }`}
        style={{ color }}
        aria-hidden="true"
      />
      <span className="text-terminal-green/80 transition-colors duration-200 group-hover:text-terminal-green">
        {name}
      </span>
    </span>
  );
}
