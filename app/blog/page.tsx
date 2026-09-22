"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { GlitchText } from "@/components/glitch-text";
import { TerminalWindow } from "@/components/terminal-window";
import { PostLogEntry } from "@/components/blog/post-log-entry";
import { allTags, blogPosts } from "@/lib/blog/posts";

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
                    <PostLogEntry post={post} />
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
