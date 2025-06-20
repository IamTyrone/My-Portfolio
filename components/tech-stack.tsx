"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Server,
  Globe,
  GitBranch,
  Terminal,
} from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: Code,
    color: "from-blue-400 to-blue-600",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shard.cn",
      "Ant Design",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-green-400 to-green-600",
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
    icon: Database,
    color: "from-purple-400 to-purple-600",
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
    icon: Cloud,
    color: "from-orange-400 to-orange-600",
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
    icon: Smartphone,
    color: "from-pink-400 to-pink-600",
    skills: ["React Native", "Flutter", "iOS", "Android", "Expo"],
  },
  {
    category: "Tools",
    icon: Terminal,
    color: "from-cyan-400 to-cyan-600",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Yeah, my weapons of choice!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-card border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${tech.color} mb-4`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {tech.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
