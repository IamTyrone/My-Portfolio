"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search } from "lucide-react";
import { GlitchText } from "@/components/glitch-text";
import { TerminalWindow } from "@/components/terminal-window";

const blogPosts = [
  {
    id: "1",
    title: "Why I moved from session auth to JWT auth on AWS.",
    excerpt:
      "How I migrated from session-based authentication to JWT-based authentication on AWS.",
    date: "2025-10-15",
    readTime: "5 min",
    tags: ["NestJS", "AWS", "JWT", "Authentication"],
    featured: true,
  },
  {
    id: "2",
    title: "Diminishing Returns in Software Development Experience.",
    excerpt:
      "How competence increases at a decreasing rate as you gain more experience.",
    date: "2025-10-10",
    readTime: "8 min",
    tags: ["Experience", "Growth", "Learning"],
    featured: true,
  },
  {
    id: "3",
    title: "'Don't fight like a man. Fight like a girl.'",
    excerpt:
      "How small companies lose their advantage by trying to behave like large ones.",
    date: "2025-10-05",
    readTime: "6 min",
    tags: ["Python", "Opinion", "Development"],
    featured: false,
  },
  {
    id: "4",
    title: "There is a cult amongst Rust developers!",
    excerpt: "Debunking the irrational, blind admiration for Rust.",
    date: "2025-10-01",
    readTime: "7 min",
    tags: ["Rust", "Community", "Development"],
    featured: false,
  },
  {
    id: "5",
    title: "Why not automate the entire division?",
    excerpt:
      "A pissed off me trying to get his documents at the district office flirts with the idea of automation.",
    date: "2025-08-20",
    readTime: "4 min",
    tags: ["Automation", "Opinion", "Development"],
    featured: false,
  },
  {
    id: "6",
    title: "You could be handling file uploads wrong!",
    excerpt: "A scalable way to handle file uploads to AWS S3.",
    date: "2025-09-15",
    readTime: "10 min",
    tags: ["AWS", "S3", "File Upload", "Scalability"],
    featured: true,
  },
];

const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-evil-red font-mono text-sm">
                voldermort@thoughts
              </span>
              <span className="text-muted-foreground font-mono text-sm">
                :~$
              </span>
              <span className="text-terminal-green font-mono text-sm">
                cat /var/log/thoughts.log
              </span>
            </div>
            <GlitchText
              text="DARK THOUGHTS"
              as="h1"
              className="text-3xl md:text-5xl font-bold font-display tracking-wider mb-3"
            />
            <p className="text-muted-foreground text-xs font-mono">
              // interdimensional thoughts, rants, and dark incantations about
              software
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1 max-w-md">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-terminal-green/40"
                  size={14}
                />
                <input
                  placeholder="grep -ri 'search' /var/log/thoughts.log"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-[#050505] border border-terminal-green/15 text-xs font-mono text-terminal-green placeholder:text-muted-foreground/30 outline-none focus:border-terminal-green/40 transition-colors rounded-sm"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1.5 text-[10px] font-mono rounded-sm border transition-all duration-200 ${
                  selectedTag === null
                    ? "border-terminal-green/50 text-terminal-green bg-terminal-green/10"
                    : "border-terminal-green/10 text-muted-foreground hover:text-terminal-green hover:border-terminal-green/30"
                }`}
              >
                --all
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 text-[10px] font-mono rounded-sm border transition-all duration-200 ${
                    selectedTag === tag
                      ? "border-terminal-green/50 text-terminal-green bg-terminal-green/10"
                      : "border-terminal-green/10 text-muted-foreground hover:text-terminal-green hover:border-terminal-green/30"
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Blog Entries */}
          {filteredPosts.length > 0 ? (
            <TerminalWindow title="less /var/log/thoughts.log">
              <div className="space-y-1">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={`/blog/${post.id}`}
                      className="block group hover:bg-terminal-green/5 -mx-4 px-4 py-3 rounded transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        {/* Timestamp */}
                        <span className="text-muted-foreground text-[10px] font-mono whitespace-nowrap mt-0.5 hidden sm:block">
                          [{post.date}]
                        </span>

                        {/* Featured indicator */}
                        {post.featured && (
                          <span className="text-[9px] font-mono px-1 py-0.5 border border-evil-red/30 text-evil-red rounded-sm whitespace-nowrap mt-0.5 hidden md:block">
                            PINNED
                          </span>
                        )}

                        <div className="flex-1 min-w-0">
                          <h3 className="text-terminal-green text-sm font-mono group-hover:text-white transition-colors line-clamp-1">
                            <span className="text-evil-red mr-1">{">"}</span>
                            {post.title}
                          </h3>

                          <p className="text-muted-foreground text-xs font-mono mt-1 line-clamp-1">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center gap-3 mt-1.5">
                            <span className="text-[10px] font-mono text-hack-cyan/60">
                              {post.readTime}
                            </span>
                            <div className="flex gap-1">
                              {post.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[9px] font-mono text-muted-foreground/50"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono text-evil-red/50 group-hover:text-evil-red transition-colors whitespace-nowrap mt-0.5">
                          read →
                        </span>
                      </div>
                    </Link>
                    {index < filteredPosts.length - 1 && (
                      <div className="border-b border-terminal-green/5 mx-0" />
                    )}
                  </motion.div>
                ))}
              </div>
            </TerminalWindow>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-xs font-mono">
                // grep: no matches found. the dark lord&apos;s thoughts remain
                hidden for this query.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
