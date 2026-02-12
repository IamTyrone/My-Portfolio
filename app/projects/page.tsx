"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, Search } from "lucide-react";
import { GlitchText } from "@/components/glitch-text";

const projects = [
  {
    id: "1",
    title: "Kraven The Hunter",
    description:
      "An AI-powered Chrome browser extension that parses an active URL link and checks for malicious sites using a machine learning model on the backend.",
    tags: [
      "React",
      "Python",
      "FastAPI",
      "Javascript",
      "Tailwind",
      "TensorFlow",
    ],
    category: "fullstack",
    github: "https://github.com/IamTyrone/Kraven-The-Hunter.git",
    demo: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Safi Help",
    description:
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
    description:
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
    description:
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
    description:
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
    description:
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
    description:
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
    description: "A mobile app housing your AI savings buddy called Melo.",
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
    description:
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
    description:
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
    description:
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
    description:
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
    description:
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
    description:
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
    description:
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
    description:
      "An app for regular Joe's to request laundry services, have it collected and delivered back, all from their WhatsApp.",
    tags: ["React", "Typescript", "Golang", "Digital Ocean", "Redis"],
    category: "fullstack",
    github: "#",
    demo: "#",
    featured: false,
  },
];

const categories = [
  { value: "all", label: "--all" },
  { value: "fullstack", label: "--fullstack" },
  { value: "backend", label: "--backend" },
  { value: "frontend", label: "--frontend" },
  { value: "devops", label: "--devops" },
  { value: "architecture", label: "--architecture" },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-evil-red font-mono text-sm">
                voldermort@projects
              </span>
              <span className="text-muted-foreground font-mono text-sm">
                :~$
              </span>
              <span className="text-terminal-green font-mono text-sm">
                find /projects -type f
              </span>
            </div>
            <GlitchText
              text="PROJECTS"
              as="h1"
              className="text-3xl md:text-5xl font-bold font-display tracking-wider mb-3"
            />
            <p className="text-muted-foreground text-xs font-mono">
              // horcruxes of code scattered across infinite dimensions
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 mb-10"
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-terminal-green/40"
                size={14}
              />
              <input
                placeholder="grep -i 'search' ./projects/*"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#050505] border border-terminal-green/15 text-xs font-mono text-terminal-green placeholder:text-muted-foreground/30 outline-none focus:border-terminal-green/40 transition-colors rounded-sm"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-3 py-1.5 text-[10px] font-mono rounded-sm border transition-all duration-200 ${
                    selectedCategory === category.value
                      ? "border-terminal-green/50 text-terminal-green bg-terminal-green/10"
                      : "border-terminal-green/10 text-muted-foreground hover:text-terminal-green hover:border-terminal-green/30"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="terminal-window h-full flex flex-col">
                  <div className="terminal-titlebar">
                    <div className="flex gap-1.5 mr-3">
                      <span className="terminal-dot terminal-dot-red" />
                      <span className="terminal-dot terminal-dot-yellow" />
                      <span className="terminal-dot terminal-dot-green" />
                    </div>
                    <span className="truncate">
                      ~/projects/
                      {project.title.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                  </div>

                  <div className="terminal-body flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-terminal-green text-glow-green text-base font-display tracking-wider group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 border border-evil-red/30 text-evil-red rounded-sm">
                          FEATURED
                        </span>
                      )}
                    </div>

                    <div className="mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 border border-hack-cyan/30 text-hack-cyan rounded-sm">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-xs font-mono leading-relaxed mb-4 line-clamp-3 flex-1">
                      <span className="text-terminal-green/50">// </span>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-1.5 py-0.5 bg-terminal-green/5 border border-terminal-green/10 text-terminal-green/60 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-terminal-green/10">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground hover:text-terminal-green transition-colors"
                      >
                        <Github size={12} />
                        <span>source</span>
                      </Link>
                      {project.demo && project.demo !== "#" && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground hover:text-hack-cyan transition-colors"
                        >
                          <ExternalLink size={12} />
                          <span>demo</span>
                        </Link>
                      )}
                      <Link
                        href={`/projects/${project.id}`}
                        className="ml-auto text-[10px] font-mono text-evil-red/70 hover:text-evil-red transition-colors"
                      >
                        $ cat README.md →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-xs font-mono">
                // find: no matches found. the dark lord&apos;s archives are
                empty for this query.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
