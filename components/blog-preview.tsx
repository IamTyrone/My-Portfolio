"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  // {
  //   id: "1",
  //   title: "The Evolution of JavaScript Frameworks: A Developer's Journey",
  //   excerpt:
  //     "My thoughts on how JavaScript frameworks have evolved over the years and what this means for developers in 2024.",
  //   date: "2024-01-15",
  //   readTime: "5 min read",
  //   tags: ["JavaScript", "React", "Vue", "Opinion"],
  // },
  // {
  //   id: "2",
  //   title: "Building Scalable APIs: Lessons from Production",
  //   excerpt:
  //     "Hard-learned lessons about API design, performance optimization, and scaling strategies from real-world projects.",
  //   date: "2024-01-10",
  //   readTime: "8 min read",
  //   tags: ["API", "Backend", "Performance", "Architecture"],
  // },
  // {
  //   id: "3",
  //   title: "Why I Still Love Python in 2024",
  //   excerpt:
  //     "A love letter to Python and why it remains my go-to language for certain types of projects despite the JS ecosystem dominance.",
  //   date: "2024-01-05",
  //   readTime: "6 min read",
  //   tags: ["Python", "Opinion", "Development"],
  // },
];

export function BlogPreview() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My unhinged, thoughts, rants, and tutorials about software
            development and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-card border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {blogPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">Read More Articles</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
