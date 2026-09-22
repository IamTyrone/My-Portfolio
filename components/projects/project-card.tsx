"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { SkillChip } from "@/lib/tech-icons";
import { hasProjectApps } from "@/lib/projects/app-links";
import { AppsCardLink } from "@/components/projects/apps-card-link";
import type { Project } from "@/lib/projects/projects";

/** Terminal-style path shown in a card's title bar. */
function projectPath(project: Project): string {
  return `~/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`;
}

interface ProjectCardProps {
  project: Project;
  /** the /projects grid badges its featured entries; the home page does not */
  showFeaturedBadge?: boolean;
}

/** Terminal-window card used by the /projects grid and the home page preview. */
export function ProjectCard({
  project,
  showFeaturedBadge = false,
}: ProjectCardProps) {
  return (
    <div className="terminal-window h-full flex flex-col">
      <div className="terminal-titlebar">
        <div className="flex gap-1.5 mr-3">
          <span className="terminal-dot terminal-dot-red" />
          <span className="terminal-dot terminal-dot-yellow" />
          <span className="terminal-dot terminal-dot-green" />
        </div>
        <span className="truncate">{projectPath(project)}</span>
      </div>

      <div className="terminal-body flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-terminal-green text-glow-green text-base font-display tracking-wider group-hover:text-white transition-colors">
            {project.title}
          </h3>
          {showFeaturedBadge && project.featured && (
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
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag) => (
            <SkillChip key={tag} name={tag} />
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
          {hasProjectApps(project.id) && (
            <AppsCardLink projectId={project.id} />
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
  );
}
