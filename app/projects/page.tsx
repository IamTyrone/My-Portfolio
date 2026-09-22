"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { GlitchText } from "@/components/glitch-text";
import { ProjectCard } from "@/components/projects/project-card";
import { projectCategories, projects } from "@/lib/projects/projects";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
              {projectCategories.map((category) => (
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
                <ProjectCard project={project} showFeaturedBadge />
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
