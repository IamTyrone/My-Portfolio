"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { TerminalWindow } from "@/components/terminal-window";

const featuredProjects = [
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
  },
  {
    id: "3",
    title: "ZimTickets",
    description:
      "Scalable cloud infrastructure setup using AWS, Docker, and Kubernetes. Includes CI/CD pipelines and monitoring solutions.",
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
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-evil-red font-mono text-sm">
              voldermort@projects
            </span>
            <span className="text-muted-foreground font-mono text-sm">:~$</span>
            <span className="text-terminal-green font-mono text-sm">
              ls -la ./projects/ --featured
            </span>
          </div>
          <p className="text-muted-foreground text-xs font-mono ml-2">
            // horcruxes of code — each one contains a piece of my soul
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="terminal-window h-full flex flex-col">
                {/* Title Bar */}
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

                {/* Body */}
                <div className="terminal-body flex-1 flex flex-col">
                  {/* Project name */}
                  <h3 className="text-terminal-green text-glow-green text-base font-display tracking-wider mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {/* Category badge */}
                  <div className="mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-hack-cyan/30 text-hack-cyan rounded-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs font-mono leading-relaxed mb-4 line-clamp-3 flex-1">
                    <span className="text-terminal-green/50">// </span>
                    {project.description}
                  </p>

                  {/* Tags */}
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

                  {/* Links */}
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

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/projects"
            className="inline-block px-6 py-2.5 text-xs font-mono border border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green/60 transition-all duration-200 rounded-sm tracking-wider"
          >
            $ find ./projects -type f --all
          </Link>
        </motion.div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
