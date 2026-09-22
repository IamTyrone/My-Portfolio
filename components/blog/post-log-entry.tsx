"use client";

import Link from "next/link";
import { SkillChip } from "@/lib/tech-icons";
import type { BlogPost } from "@/lib/blog/posts";

interface PostLogEntryProps {
  post: BlogPost;
  /** "list" adds the pinned badge and the read call to action. */
  variant?: "list" | "preview";
}

export function PostLogEntry({ post, variant = "list" }: PostLogEntryProps) {
  const isList = variant === "list";
  const tags = isList ? post.tags : post.tags.slice(0, 3);

  return (
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
        {isList && post.featured && (
          <span className="text-[9px] font-mono px-1 py-0.5 border border-evil-red/30 text-evil-red rounded-sm whitespace-nowrap mt-0.5 hidden md:block">
            PINNED
          </span>
        )}

        <div className="flex-1 min-w-0">
          <h3
            className={`text-terminal-green text-sm font-mono group-hover:text-white transition-colors line-clamp-1 ${
              isList ? "" : "group-hover:text-glow-green"
            }`}
          >
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
              {tags.map((tag) => (
                <SkillChip key={tag} name={tag} />
              ))}
            </div>
          </div>
        </div>

        {isList && (
          <span className="text-[10px] font-mono text-evil-red/50 group-hover:text-evil-red transition-colors whitespace-nowrap mt-0.5">
            read →
          </span>
        )}
      </div>
    </Link>
  );
}
