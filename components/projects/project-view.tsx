"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Code2,
  ExternalLink,
  Github,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SkillChip } from "@/lib/tech-icons";
import { AppStoreSection } from "@/components/projects/app-store-links";
import type { MobileApp } from "@/lib/projects/app-links";
import type { ProjectDetail } from "@/lib/projects/details";
import type { Project } from "@/lib/projects/projects";

interface ProjectViewProps {
  project: Project;
  detail: ProjectDetail;
  /** split on the server, so the write-up never ships as component source */
  paragraphs: string[];
  apps: MobileApp[];
}

export function ProjectView({
  project,
  detail,
  paragraphs,
  apps,
}: ProjectViewProps) {
  const tags = detail.tags ?? project.tags;
  const containImage = detail.imageFit === "contain";

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/projects">
                <ArrowLeft className="mr-2" size={16} />
                Back to Projects
              </Link>
            </Button>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <SkillChip key={tag} name={tag} size="md" />
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">{detail.intro}</p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2" size={16} />
                  View Code
                </Link>
              </Button>
              {project.demo && (
                <Button asChild variant="outline">
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`relative aspect-video rounded-xl overflow-hidden ${
              containImage ? "bg-muted/40 border border-terminal-green/10" : ""
            }`}
          >
            <Image
              src={detail.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className={containImage ? "object-contain p-10" : "object-cover"}
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="mb-4 text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              <Separator className="my-8" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {detail.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {apps.length > 0 && (
                <>
                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                  >
                    <AppStoreSection apps={apps} />
                  </motion.div>
                </>
              )}

              <Separator className="my-8" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4">Challenges & Solutions</h3>
                <div className="space-y-4">
                  {detail.challenges.map((challenge, index) => (
                    <div key={index} className="bg-muted/50 rounded-lg p-4">
                      <p className="text-muted-foreground">{challenge}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <Separator className="my-8" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4">Key Learnings</h3>
                <div className="space-y-2">
                  {detail.learnings.map((learning, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{learning}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card border rounded-xl p-6 sticky top-24"
              >
                <h3 className="text-lg font-semibold mb-4">Project Info</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Timeline</p>
                      <p className="font-medium">{detail.timeline}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users size={16} className="text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Team</p>
                      <p className="font-medium">{detail.team}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Code2 size={16} className="text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <Badge variant="outline" className="mt-1">
                        {detail.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <h4 className="font-semibold mb-4">Tech Stack</h4>
                <div className="space-y-4">
                  {Object.entries(detail.techStack).map(
                    ([category, technologies]) => (
                      <div key={category}>
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                          {category}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {technologies.map((tech) => (
                            <SkillChip key={tech} name={tech} />
                          ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
