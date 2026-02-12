"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "@/components/terminal-window";

const technologies = [
  {
    category: "Frontend",
    dir: "/usr/lib/frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "Ant Design",
    ],
  },
  {
    category: "Backend",
    dir: "/usr/lib/backend",
    skills: [
      "Node.js",
      "Python",
      "Django",
      "FastAPI",
      "Express.js",
      "Go",
      "Rust",
      "Java",
      "Spring Boot",
      "Flask",
    ],
  },
  {
    category: "Database",
    dir: "/var/db",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Supabase",
      "MySQL",
      "Elasticsearch",
      "SQLite",
      "Firebase",
    ],
  },
  {
    category: "DevOps",
    dir: "/etc/devops",
    skills: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Terraform",
      "Ansible",
      "Jenkins",
      "GitHub Actions",
      "Vercel",
      "Netlify",
      "Sentry",
      "Prometheus",
      "Grafana",
      "Nginx",
      "Apache",
      "Bash",
    ],
  },
  {
    category: "Mobile",
    dir: "/opt/mobile",
    skills: ["React Native", "Flutter", "iOS", "Android", "Expo"],
  },
  {
    category: "Tools",
    dir: "/usr/bin",
    skills: [
      "Git",
      "VS Code",
      "Figma",
      "Postman",
      "Linux",
      "Claude",
      "ChatGPT",
      "Jira",
      "Slack",
      "Confluence",
      "ClickUp",
      "Monday",
    ],
  },
];

export function TechStack() {
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
              voldermort@arsenal
            </span>
            <span className="text-muted-foreground font-mono text-sm">:~$</span>
            <span className="text-terminal-green font-mono text-sm">
              cat /etc/voldermort/skills.json
            </span>
          </div>
          <p className="text-muted-foreground text-xs font-mono ml-2">
            // weapons of mass construction
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((tech, index) => (
            <TerminalWindow
              key={tech.category}
              title={`ls ${tech.dir}/`}
              delay={index * 0.08}
              className="h-full"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-hack-cyan text-xs font-mono">
                    [{tech.category.toUpperCase()}]
                  </span>
                  <span className="text-muted-foreground text-[10px]">
                    {tech.skills.length} modules loaded
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {tech.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.08 + i * 0.03 }}
                      viewport={{ once: true }}
                      className="px-2 py-0.5 text-[11px] font-mono border border-terminal-green/20 text-terminal-green/80 hover:text-terminal-green hover:border-terminal-green/50 hover:bg-terminal-green/5 transition-all duration-200 cursor-default rounded-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
