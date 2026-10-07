"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import type { Project } from "@/lib/projects/projects";

interface FeaturedProjectsProps {
  /** selected on the server, so the full project list stays off the client */
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
            <span className="text-evil-red font-mono text-sm">
              voldermort@projects
            </span>
            <span className="text-muted-foreground font-mono text-sm">:~$</span>
            <span className="text-terminal-green font-mono text-sm [overflow-wrap:anywhere]">
              ls -la ./projects/ --featured
            </span>
          </div>
          <p className="text-muted-foreground text-xs font-mono ml-2">
            // horcruxes of code, each one exists in a different dimension
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(index, 8) * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/projects"
            className="inline-block px-6 py-2.5 text-xs font-mono border border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green/60 transition-colors duration-200 rounded-sm tracking-wider"
          >
            $ find ./projects -type f --all
          </Link>
        </motion.div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
