"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
    id: "4",
    title: "There is a cult amongst Rust developers!",
    excerpt: "Debunking the irrational, blind admiration for Rust.",
    date: "2025-10-01",
    readTime: "7 min",
    tags: ["Rust", "Community", "Development"],
    featured: false,
  },
];

export function BlogPreview() {
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
              voldermort@thoughts
            </span>
            <span className="text-muted-foreground font-mono text-sm">:~$</span>
            <span className="text-terminal-green font-mono text-sm">
              tail -n 3 /var/log/thoughts.log
            </span>
          </div>
          <p className="text-muted-foreground text-xs font-mono ml-2">
            // interdimensional thoughts, rants, and dark incantations
          </p>
        </motion.div>

        {/* Blog Entries */}
        {blogPosts.length > 0 ? (
          <TerminalWindow title="cat /var/log/thoughts.log | head -3">
            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
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

                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <h3 className="text-terminal-green text-sm font-mono group-hover:text-glow-green group-hover:text-white transition-colors line-clamp-1">
                          <span className="text-evil-red mr-1">{">"}</span>
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-muted-foreground text-xs font-mono mt-1 line-clamp-1">
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="text-[10px] font-mono text-hack-cyan/60">
                            {post.readTime}
                          </span>
                          <div className="flex gap-1">
                            {post.tags.slice(0, 3).map((tag) => (
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
                    </div>
                  </Link>
                  {index < blogPosts.length - 1 && (
                    <div className="border-b border-terminal-green/5 mx-0" />
                  )}
                </motion.div>
              ))}
            </div>
          </TerminalWindow>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-xs font-mono">
              // no log entries found. the dark lord&apos;s thoughts remain
              hidden...
            </p>
          </motion.div>
        )}

        {blogPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/blog"
              className="inline-block px-6 py-2.5 text-xs font-mono border border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green/60 transition-all duration-200 rounded-sm tracking-wider"
            >
              $ grep -r &quot;thoughts&quot; /var/log/ --all
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
