"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mail, Calendar, Download, GraduationCap } from "lucide-react";
import { TerminalWindow } from "@/components/terminal-window";
import { GlitchText } from "@/components/glitch-text";
import { getTechIcon } from "@/lib/tech-icons";

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
    title: "Software Architect",
    company: "Mviyo Technologies",
    employment: "Full-time",
    period: "May 2024 – Aug 2025",
    hash: "a3f7c2d",
    description:
      "Came back, this time to own the full technical architecture for the organisation's entire product catalogue, in-house and external: selecting technologies, defining infrastructure patterns on AWS, and establishing engineering standards across all projects.",
    achievements: [
      "Owned the end-to-end software development lifecycle across every engineering team, setting coding standards, review policy, and CI/CD tooling.",
      "Designed CI/CD pipelines (GitHub Actions, Jenkins) and Kubernetes deployment strategies, achieving zero-downtime deployments across all production services.",
      "Authored and enforced organisation-wide engineering standards covering code style, PR structure, code review policy, and testing practices across Go, Python, Django, and Laravel projects.",
      "Built RESTful APIs and a Go-based geo-proximity service powering nearby-provider search on the Safi platform.",
      "Migrated legacy projects onto AWS and designed scaling frameworks to absorb unplanned traffic spikes.",
      "Architected on AWS with scalability balanced against infrastructure cost, and led project scoping, team composition and technology selection for all new initiatives.",
    ],
  },
  {
    title: "Lead DevOps Engineer",
    company: "Great Sun Financial",
    employment: "Part-time contract",
    period: "May 2024 – Nov 2024",
    hash: "c5d9e3b",
    description:
      "When I went back to Mviyo, this role moved to part-time contract rather than ending. Designed CI/CD pipelines using GitHub Actions, built staging/testing/production environments on DigitalOcean and AWS, deployed applications with Docker. Set up metrics reporting and managed infrastructure security.",
    achievements: [
      "Designed and deployed development, test and canary environments.",
      "Implemented CI/CD pipelines to terraform provisioned AWS and Digital Ocean infrastructure.",
      "Prepared Neo4j production, test and canary environments.",
    ],
  },
  {
    title: "Technical Support Specialist",
    company: "MIBV Media",
    employment: "Contract",
    period: "2024",
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
    title: "Senior Software Engineer",
    company: "Great Sun Financial",
    employment: "Full-time",
    period: "March 2024 – May 2024",
    hash: "d2a6b7c",
    description:
      "Led backend development for Credex, a fintech peer to peer digital wallet delivered over WhatsApp. Contributed to system architecture, selected technology stacks, developed backend services using Node.js, TypeScript, Neo4j, and Django.",
    achievements: [
      "Refactored serverless architecture, eliminating cold starts and nearly doubling performance.",
      "Decoupled client/server logic improving load times.",
      "Implemented custom auth system and optimized GraphQL queries.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Mviyo Technologies",
    employment: "Full-time",
    period: "Nov 2023 – March 2024",
    hash: "b7e2f4a",
    description:
      "First run at Mviyo, on the engineering side. I left for a full-time role at Great Sun, then came back two months later as the architect, which is a more flattering way of saying they missed me.",
    achievements: [],
  },
  {
    title: "Senior Software Engineer",
    company: "Healthify Medical Software",
    employment: "Full-time",
    period: "Dec 2021 – Nov 2023",
    hash: "e9f3a1d",
    description:
      "Designed and led development of a large-scale distributed claims and contributions platform for medical aid organisations, built on Django, PostgreSQL, and a microservices architecture.",
    achievements: [
      "Engineered a 5x+ API performance improvement through strategic caching, reducing server load in a high-traffic healthcare environment.",
      "Built a Go-based audit microservice with MongoDB persistence, providing immutable logging of all user actions for compliance.",
      "Created a Node.js PDF generation microservice (Puppeteer / Express.js), decoupling document generation from core business logic.",
      "Designed async inter-service communication using RabbitMQ alongside synchronous HTTP, enabling resilient, decoupled service interactions.",
      "Stood up and managed production Kubernetes clusters with Jenkins and GitHub Actions CI/CD — zero downtime across all releases.",
    ],
  },
  {
    title: "Software Developer",
    company: "Intelli Africa Solutions",
    employment: "Full-time",
    period: "Feb 2021 – Dec 2021",
    hash: "f4b8c2e",
    description:
      "Engineered a full-stack bulk SMS and email dispatch platform integrating with multiple carrier networks, built on Python, Django, Celery, and PostgreSQL — handling high message throughput asynchronously.",
    achievements: [
      "Published and maintained open-source API client SDKs on PyPI (Python) and NPM (Node.js), enabling third-party developer integrations.",
      "Implemented military-grade encryption for payment data at rest and in transit in a React.js merchant dashboard integrated with PayPal and Payfast.",
      "Managed and configured Ubuntu production and test servers for all platform environments.",
    ],
  },
  {
    title: "Founder & Software Developer",
    company: "Dryback Technology",
    employment: "Contract, part-time",
    period: "Feb 2019 – Present",
    hash: "a1c5d9f",
    description:
      "My own company, and the one I contract through. It has run alongside every other role on this list since 2019. Still open, still taking work. I did a lotttttt of freelance projects. A LOOOOT. LOL.",
    achievements: [
      "Delivered the Vantage Point ERP, roughly 609,000 lines of Go covering point of sale, inventory, accounting, payroll and ZIMRA fiscalisation, with a React Native mobile POS beside it.",
      "Built the platform systems for Zimbabwe's largest forex trading institution: a client portal, a twenty seven section admin console, and a video-based learning platform.",
      "Delivered Melo, an AI-driven savings app used across ten African countries, integrating Paystack payments and OpenAI-powered planning.",
      "Developed a Golang-based tenant management system with a React.js frontend and PostgreSQL, including mobile self-service access for tenants.",
      "Built an asset registry system in Django / React tracking real-time asset locations, automating depreciation and revaluation calculations.",
      "Architected the Acrepoint Housing System (Django, Celery, React.js) — a WhatsApp-integrated real estate platform connecting developers with buyers.",
      "Built the Dabane Trust education system for local farmers using Django and React.js.",
      "Designed a text-based WhatsApp chatbot for low-bandwidth rural areas in Zimbabwe.",
    ],
  },
  {
    title: "Intern",
    company: "Integrity Business Solutions",
    employment: "Internship",
    period: "Aug 2019 – Aug 2020",
    hash: "c8d4a6b",
    description:
      "Deployed and configured Linux server infrastructure for Hansaworld Standard ERP installations at multiple client sites.",
    achievements: [
      "Customised the Hansaworld ERP using the proprietary HULL scripting language.",
      "Delivered data migration tooling to transition client data from legacy databases.",
      "Delivered end-user training to client teams across multiple organisations.",
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
                transition={{ delay: 0.5 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <Link
                  href="/resume/Tyrone_Mguni.pdf"
                  target="_blank"
                  className="zap-hover inline-flex items-center gap-2 px-5 py-2 text-xs font-mono border border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green transition-all duration-200 rounded-sm"
                >
                  <Download size={12} />$ wget resume/Tyrone_Mguni.pdf
                </Link>
                <Link
                  href="/education"
                  className="zap-hover inline-flex items-center gap-2 px-5 py-2 text-xs font-mono border border-hack-cyan/30 text-hack-cyan hover:bg-hack-cyan/10 hover:border-hack-cyan transition-all duration-200 rounded-sm"
                >
                  <GraduationCap size={12} />$ cat education.json
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
                  <span>play /home/voldermort/lair.mp4</span>
                </div>
                <div className="relative bg-[#030303]">
                  <video
                    src="/video/voldemort-lair.mp4"
                    poster="/img/voldemort-lair.webp"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="px-3 py-2 space-y-0.5">
                  <p className="text-[9px] font-mono text-muted-foreground">
                    {"//"} the dark lord &amp; nagini, somewhere in the server
                    room
                  </p>
                  <p className="text-[9px] font-mono text-terminal-green/40">
                    {"//"} control is an illusion — but uptime is real
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
              {skills.map((skill, index) => {
                const { icon: Icon, color } = getTechIcon(skill);
                return (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.02 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    style={{ "--brand": color } as React.CSSProperties}
                    className="skill-chip group inline-flex items-center gap-1.5 px-2 py-1 text-[11px] font-mono rounded-sm cursor-default"
                  >
                    <Icon
                      className="h-3.5 w-3.5 shrink-0 grayscale-[0.35] opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                      style={{ color }}
                      aria-hidden="true"
                    />
                    <span className="text-terminal-green/80 transition-colors duration-200 group-hover:text-terminal-green">
                      {skill}
                    </span>
                  </motion.span>
                );
              })}
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
              {"//"} the dark lord&apos;s professional journey
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
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-evil-red text-[10px] font-mono">
                        @{exp.company}
                      </span>
                      <span className="px-1.5 py-0.5 text-[9px] font-mono rounded-sm border border-hack-cyan/25 text-hack-cyan/80 bg-hack-cyan/5">
                        {exp.employment}
                      </span>
                    </div>
                    <p
                      className={`text-muted-foreground text-xs font-mono leading-relaxed ${
                        exp.achievements.length > 0 ? "mb-3" : ""
                      }`}
                    >
                      {exp.description}
                    </p>
                    {exp.achievements.length > 0 && (
                      <div className="space-y-1">
                        {exp.achievements.map((a, i) => (
                          <p
                            key={i}
                            className="text-[10px] font-mono text-terminal-green/60"
                          >
                            <span className="text-terminal-green/30 mr-1">
                              +
                            </span>{" "}
                            {a}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education pointer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Link href="/education" className="block group">
              <div className="terminal-window">
                <div className="terminal-titlebar !py-1.5">
                  <GraduationCap
                    size={11}
                    className="text-hack-cyan mr-2 shrink-0"
                  />
                  <span className="text-terminal-green text-[10px] font-mono">
                    education.json
                  </span>
                  <span className="text-muted-foreground text-[10px] font-mono ml-auto">
                    $ open
                  </span>
                </div>
                <div className="terminal-body !py-3 !px-4">
                  <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                    <span className="text-hack-cyan mr-1">?</span> Curious where
                    any of this came from? The degree is in finance. The rest of
                    it has a longer story, and it lives{" "}
                    <span className="text-terminal-green group-hover:text-glow-green transition-all">
                      on the education page
                    </span>
                    .
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
