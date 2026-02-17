"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mail, Calendar, Download } from "lucide-react";
import { TerminalWindow } from "@/components/terminal-window";
import { GlitchText } from "@/components/glitch-text";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Python",
  "Django",
  "FastAPI",
  "Flask",
  "Golang",
  "Rust",
  "Java",
  "Spring Boot",
  "Laravel",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Supabase",
  "MySQL",
  "Elasticsearch",
  "SQLite",
  "Firebase",
  "AWS",
  "GCP",
  "Docker",
  "Kubernetes",
  "Github Actions",
  "Jenkins",
  "Terraform",
  "Ansible",
  "Vercel",
  "Netlify",
  "Sentry",
  "Prometheus",
  "Grafana",
  "Nginx",
  "Apache",
  "Bash",
  "Linux",
  "CI/CD",
  "React Native",
  "Flutter",
  "iOS",
  "Android",
  "Expo",
  "Git",
  "VSCode",
  "Figma",
  "Postman",
  "REST APIs",
  "WebSockets",
  "Claude",
  "OpenAI",
  "ChatGPT",
  "Jira",
  "Slack",
  "Confluence",
  "Agile Methodologies",
  "Monday",
  "GraphQL",
];

const experience = [
  {
    title: "Software/Systems Architect",
    company: "Mviyo Technologies",
    period: "May 2024 - Present",
    hash: "a3f7c2d",
    description:
      "Design infrastructure for multiple products, define technology stacks, and architect APIs. Build mobile apps with React Native, backend systems with Django, WebSocket services using Golang, and web clients with React and Next.js.",
    achievements: [
      "Designed scalable cost effective architecture for multiple products.",
      "Designed software development processes and workflows.",
      "Prepared technical documentation and architecture diagrams.",
    ],
  },
  {
    title: "Software Developer(Contractual)",
    company: "Mviyo Technologies",
    period: "Nov 2023 - May 2024",
    hash: "b8e1f4a",
    description:
      "Developed React Native mobile clients, built high-availability Django backend, designed CI/CD pipelines using GitHub Actions for AWS. Created web admin interfaces with React.js and a Golang-based geo-proximity tool with WebSockets.",
    achievements: [
      "Refactored and optimized existing codebase, improving code quality and performance.",
      "Oversaw implementation of new features ensuring alignment with product requirements.",
    ],
  },
  {
    title: "Lead DevOps Engineer(Contractual)",
    company: "Great Sun Financial",
    period: "May 2024 - Nov 2024",
    hash: "c5d9e3b",
    description:
      "Designed CI/CD pipelines using GitHub Actions, built staging/testing/production environments on DigitalOcean and AWS, deployed applications with Docker. Set up metrics reporting and managed infrastructure security.",
    achievements: [
      "Designed and deployed development, test and canary environments.",
      "Implemented CI/CD pipelines to terraform provisioned AWS and Digital Ocean infrastructure.",
      "Prepared Neo4j production, test and canary environments.",
    ],
  },
  {
    title: "Senior Software Engineer(Contractual)",
    company: "Great Sun Financial",
    period: "March 2024 - May 2024",
    hash: "d2a6b7c",
    description:
      "Led development team for Credex, a distributed fintech solution leveraging WhatsApp. Contributed to system architecture, selected technology stacks, developed backend services using Node.js, TypeScript, Neo4j, and Django.",
    achievements: [
      "Refactored serverless architecture, eliminating cold starts and nearly doubling performance.",
      "Decoupled client/server logic improving load times.",
      "Implemented custom auth system and optimized GraphQL queries.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Healthify Medical Software",
    period: "Jan 2022 - Nov 2024",
    hash: "e9f3a1d",
    description:
      "Designed and deployed large-scale distributed medical aid claims system. Modernized Django monolith using strangler pattern, reducing downtime by 60%. Implemented RabbitMQ for async microservices. Managed Kubernetes cluster with Grafana/Prometheus monitoring.",
    achievements: [
      "Led recruitment and onboarding of developers.",
      "Designed large-scale distributed medical claims system.",
      "Led data migration from legacy systems ensuring data integrity.",
      "Designed high-availability Kubernetes cluster with automated CI/CD.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Intelli Africa Solutions",
    period: "Jan 2021 - Dec 2021",
    hash: "f4b8c2e",
    description:
      "Built high-availability multitenant SMS/Email gateway in Django. Created installable Python and Node.js packages for PyPI and NPM. Integrated with Telecomms providers and designed deployment pipelines.",
    achievements: [
      "Built multitenant SMS and Email gateway in Python Django.",
      "Developed packages deployed to PyPI and NPM.",
      "Designed deployment pipeline to remote VPS servers.",
    ],
  },
  {
    title: "Software Engineer(Contractual)",
    company: "Dryback Technology",
    period: "Jan 2021 - Dec 2021",
    hash: "a1c5d9f",
    description:
      "Built the Dabane Trust education system for local farmers using Django and React.js. Designed a text-based WhatsApp chatbot for low-bandwidth rural areas in Zimbabwe.",
    achievements: ["I did a lotttttt of freelance projects. A LOOOOT. LOL."],
  },
  {
    title: "Technical Support Specialist",
    company: "MIBV Media",
    period: "2019 - 2020",
    hash: "b3e7f2a",
    description:
      "Tackled complex technical issues requiring scripting, managed servers, designed CI/CD pipelines. Extended website functionality on Framer using React/TypeScript and automated workflows.",
    achievements: [
      "Designed backup methodologies for critical systems.",
      "Deployed automation scripts to streamline workflows.",
      "Integrated third-party APIs to dynamic interfaces in Framer.",
    ],
  },
  {
    title: "Intern",
    company: "Integrity Business Solutions",
    period: "Jan 2021 - Dec 2021",
    hash: "c8d4a6b",
    description:
      "Customized and implemented Hansaworld ERP across the country. Set up networking infrastructures, POS machines, fiscalization, and trained staff on new systems.",
    achievements: [
      "Well, I was an intern. Updating this as I remember more lol.",
    ],
  },
];

const intro =
  "What do I do? I'm the guy who makes sure your company doesn't go bankrupt because of a single bad config. When sh*t hits the fan because of a vibe coded mess, I'm the guy the guy you call calls!";

const expanded =
  "I've built a career helping resource deprived organisations achieve their goals by optimizing architectures, provisioning streamlined infrastructure, writing resource efficient code and hiring extraordinary talent under budget constraints. I wear multiple hats to elite levels, leading overachieving teams through the various stages of the software development lifecycle. I design, develop, secure, deploy and test software, effectively and efficiently reducing time to market to ridiculous levels. I set development standards, mentor developers, design and enforce software development standards.";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-evil-red font-mono text-sm">
                  voldermort@about
                </span>
                <span className="text-muted-foreground font-mono text-sm">
                  :~$
                </span>
                <span className="text-terminal-green font-mono text-sm">
                  cat /etc/voldermort/README.md
                </span>
              </div>

              <GlitchText
                text="WHO AM I?"
                as="h1"
                className="text-3xl md:text-4xl font-bold font-display tracking-wider mb-6"
              />

              <TerminalWindow title="cat README.md" delay={0.2}>
                <p className="text-terminal-green/80 text-sm leading-relaxed mb-4">
                  <span className="text-hack-cyan">## </span>
                  {intro}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {expanded}
                </p>
              </TerminalWindow>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-mono">
                  <MapPin size={12} className="text-evil-red" />
                  <span className="text-muted-foreground">location:</span>
                  <span className="text-terminal-green">
                    Pretoria, South Africa
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <Mail size={12} className="text-hack-cyan" />
                  <span className="text-muted-foreground">email:</span>
                  <span className="text-terminal-green">
                    tyronemguni@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <Calendar size={12} className="text-terminal-green" />
                  <span className="text-muted-foreground">status:</span>
                  <span className="text-evil-red">
                    AVAILABLE — show me what you got!
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6"
              >
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-mono border border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green transition-all duration-200 rounded-sm"
                >
                  <Download size={12} />$ wget resume.pdf
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: F Society Mask */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="terminal-window">
                <div className="terminal-titlebar">
                  <div className="flex gap-1.5 mr-3">
                    <span className="terminal-dot terminal-dot-red" />
                    <span className="terminal-dot terminal-dot-yellow" />
                    <span className="terminal-dot terminal-dot-green" />
                  </div>
                  <span>display /home/voldermort/fsociety.svg</span>
                </div>
                <div className="p-6 flex items-center justify-center bg-[#030303]">
                  <div className="relative w-full max-w-[280px] aspect-square">
                    {/* F Society Mask SVG */}
                    <svg
                      viewBox="0 0 200 200"
                      className="w-full h-full text-terminal-green opacity-90 hover:opacity-100 transition-opacity"
                      fill="currentColor"
                    >
                      {/* Mask outline */}
                      <ellipse
                        cx="100"
                        cy="95"
                        rx="75"
                        ry="85"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.8"
                      />

                      {/* Eyes */}
                      <ellipse
                        cx="65"
                        cy="80"
                        rx="18"
                        ry="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <ellipse
                        cx="135"
                        cy="80"
                        rx="18"
                        ry="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />

                      {/* Eye details */}
                      <circle
                        cx="65"
                        cy="80"
                        r="5"
                        fill="currentColor"
                        opacity="0.6"
                      />
                      <circle
                        cx="135"
                        cy="80"
                        r="5"
                        fill="currentColor"
                        opacity="0.6"
                      />

                      {/* Eyebrows */}
                      <path
                        d="M45 62 L85 58"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M115 58 L155 62"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      {/* Nose */}
                      <path
                        d="M100 85 L95 110 L100 115 L105 110 L100 85"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />

                      {/* Mustache */}
                      <path
                        d="M70 125 Q85 135 100 128 Q115 135 130 125"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M65 128 Q80 140 100 132 Q120 140 135 128"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        opacity="0.6"
                      />

                      {/* Mouth/Smile */}
                      <path
                        d="M75 145 Q100 165 125 145"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />

                      {/* Cheek lines */}
                      <path
                        d="M35 100 Q40 120 50 135"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        opacity="0.4"
                      />
                      <path
                        d="M165 100 Q160 120 150 135"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        opacity="0.4"
                      />

                      {/* Forehead wrinkles */}
                      <path
                        d="M60 45 Q100 40 140 45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        opacity="0.3"
                      />
                      <path
                        d="M65 52 Q100 48 135 52"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        opacity="0.3"
                      />
                    </svg>

                    {/* Glitch effect overlay */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                      <div
                        className="absolute inset-0 bg-terminal-green/10 animate-pulse"
                        style={{ mixBlendMode: "overlay" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 pb-2">
                  <p className="text-[9px] font-mono text-muted-foreground">
                    {"//"} control is an illusion
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-evil-red font-mono text-sm">
                voldermort@skills
              </span>
              <span className="text-muted-foreground font-mono text-sm">
                :~$
              </span>
              <span className="text-terminal-green font-mono text-sm">
                htop --filter=skills
              </span>
            </div>
          </motion.div>

          <TerminalWindow title="htop — voldermort's arsenal">
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                  viewport={{ once: true }}
                  className="px-2 py-0.5 text-[11px] font-mono border border-terminal-green/20 text-terminal-green/70 hover:text-terminal-green hover:border-terminal-green/50 hover:bg-terminal-green/5 transition-all duration-200 cursor-default rounded-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </TerminalWindow>
        </div>
      </section>

      <div className="section-divider" />

      {/* Experience Section — Git Log Style */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-evil-red font-mono text-sm">
                voldermort@career
              </span>
              <span className="text-muted-foreground font-mono text-sm">
                :~$
              </span>
              <span className="text-terminal-green font-mono text-sm">
                git log --oneline --graph
              </span>
            </div>
            <p className="text-muted-foreground text-xs font-mono ml-2">
              // the dark lord&apos;s professional journey
            </p>
          </motion.div>

          <div className="space-y-4">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative pl-6 border-l border-terminal-green/20"
              >
                {/* Git commit dot */}
                <div
                  className="absolute -left-[5px] top-3 w-[9px] h-[9px] rounded-full bg-terminal-green border border-terminal-green/60"
                  style={{ boxShadow: "0 0 6px rgba(0,255,65,0.4)" }}
                />

                <div className="terminal-window">
                  <div className="terminal-titlebar !py-1.5">
                    <span className="text-hack-cyan text-[10px] font-mono mr-2">
                      {exp.hash}
                    </span>
                    <span className="text-terminal-green text-[10px] font-mono">
                      {exp.title}
                    </span>
                    <span className="text-muted-foreground text-[10px] font-mono ml-auto">
                      {exp.period}
                    </span>
                  </div>
                  <div className="terminal-body !py-3 !px-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-evil-red text-[10px] font-mono">
                        @{exp.company}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs font-mono leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="space-y-1">
                      {exp.achievements.map((a, i) => (
                        <p
                          key={i}
                          className="text-[10px] font-mono text-terminal-green/60"
                        >
                          <span className="text-terminal-green/30 mr-1">+</span>{" "}
                          {a}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
