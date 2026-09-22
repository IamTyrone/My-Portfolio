"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TerminalWindow } from "@/components/terminal-window";
import { PostLogEntry } from "@/components/blog/post-log-entry";
import { getLatestPosts } from "@/lib/blog/posts";

const previewPosts = getLatestPosts(3);

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
        {previewPosts.length > 0 ? (
          <TerminalWindow title="cat /var/log/thoughts.log | head -3">
            <div className="space-y-4">
              {previewPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <PostLogEntry post={post} variant="preview" />
                  {index < previewPosts.length - 1 && (
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

        {previewPosts.length > 0 && (
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
