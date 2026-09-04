"use client";

import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import { CalendarDays, Infinity as InfinityIcon } from "lucide-react";
import { FaAws, FaRobot, FaSlack } from "react-icons/fa";
import { TerminalWindow } from "@/components/terminal-window";
import { VscCode } from "react-icons/vsc";
import {
  SiAndroid,
  SiAnsible,
  SiAntdesign,
  SiApache,
  SiApple,
  SiClaude,
  SiConfluence,
  SiClickup,
  SiDjango,
  SiDocker,
  SiElasticsearch,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGit,
  SiGithubactions,
  SiGnubash,
  SiGo,
  SiGooglecloud,
  SiGrafana,
  SiJira,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiPrometheus,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiSentry,
  SiShadcnui,
  SiSpringboot,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: IconType;
  /** Brand color, used for the glyph and the hover glow. */
  color: string;
};

type TechGroup = {
  category: string;
  dir: string;
  skills: Skill[];
};

const technologies: TechGroup[] = [
  {
    category: "Frontend",
    dir: "/usr/lib/frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Shadcn", icon: SiShadcnui, color: "#FFFFFF" },
      { name: "Ant Design", icon: SiAntdesign, color: "#1677FF" },
    ],
  },
  {
    category: "Backend",
    dir: "/usr/lib/backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#0C9D58" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "Rust", icon: SiRust, color: "#F74C00" },
      { name: "Java", icon: SiOpenjdk, color: "#F89820" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
    ],
  },
  {
    category: "Database",
    dir: "/var/db",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Elasticsearch", icon: SiElasticsearch, color: "#FEC514" },
      { name: "SQLite", icon: SiSqlite, color: "#5DA9DD" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    category: "DevOps",
    dir: "/etc/devops",
    skills: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "CI/CD", icon: InfinityIcon, color: "#00E5A0" },
      { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
      { name: "Ansible", icon: SiAnsible, color: "#FFFFFF" },
      { name: "Jenkins", icon: SiJenkins, color: "#D33833" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Sentry", icon: SiSentry, color: "#9E5CF7" },
      { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
      { name: "Grafana", icon: SiGrafana, color: "#F46800" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "Apache", icon: SiApache, color: "#D22128" },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
    ],
  },
  {
    category: "Mobile",
    dir: "/opt/mobile",
    skills: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "iOS", icon: SiApple, color: "#FFFFFF" },
      { name: "Android", icon: SiAndroid, color: "#3DDC84" },
      { name: "Expo", icon: SiExpo, color: "#FFFFFF" },
    ],
  },
  {
    category: "Tools",
    dir: "/usr/bin",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Claude", icon: SiClaude, color: "#D97757" },
      { name: "ChatGPT", icon: FaRobot, color: "#10A37F" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "Slack", icon: FaSlack, color: "#E01E5A" },
      { name: "Confluence", icon: SiConfluence, color: "#2684FF" },
      { name: "ClickUp", icon: SiClickup, color: "#7B68EE" },
      { name: "Monday", icon: CalendarDays, color: "#FF3D57" },
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

                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.08 + i * 0.03 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                        style={
                          { "--brand": skill.color } as React.CSSProperties
                        }
                        className="skill-chip group inline-flex items-center gap-1.5 px-2 py-1 text-[11px] font-mono rounded-sm cursor-default"
                      >
                        <Icon
                          className="h-3.5 w-3.5 shrink-0 grayscale-[0.35] opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                          style={{ color: skill.color }}
                          aria-hidden="true"
                        />
                        <span className="text-terminal-green/80 transition-colors duration-200 group-hover:text-terminal-green">
                          {skill.name}
                        </span>
                      </motion.span>
                    );
                  })}
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
