"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SkillChip } from "@/lib/tech-icons";
import { ArrowLeft, Calendar, Clock, User, Twitter, Linkedin } from "lucide-react";
import type { BlogPost } from "@/lib/blog/posts";

interface ArticleViewProps {
  post: BlogPost;
  author: string;
  /** pre-rendered on the server, so the markdown never ships to the client */
  html: string;
}

export function ArticleView({ post, author, html }: ArticleViewProps) {
  const shareOn = (network: "twitter" | "linkedin") => {
    const url = encodeURIComponent(window.location.href);
    const target =
      network === "twitter"
        ? `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(
            `Check out this article: ${post.title}`,
          )}`
        : `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(target, "_blank");
  };

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
              <Link href="/blog">
                <ArrowLeft className="mr-2" size={16} />
                Back to Blog
              </Link>
            </Button>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <SkillChip key={tag} name={tag} size="md" />
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime} read</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">Share:</span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => shareOn("twitter")}
                  >
                    <Twitter size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => shareOn("linkedin")}
                  >
                    <Linkedin size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-gray dark:prose-invert max-w-none"
          >
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </motion.article>

          <Separator className="my-12" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-muted/50 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-3">About the Author</h3>
            <p className="text-muted-foreground">
              {author} is a full-stack software engineer with over 8 years of
              experience building scalable web applications. He specializes in
              React, Node.js, and cloud architecture.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
