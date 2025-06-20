"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Search, User } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'The Evolution of JavaScript Frameworks: A Developer\'s Journey',
    excerpt: 'My thoughts on how JavaScript frameworks have evolved over the years and what this means for developers in 2024. From jQuery to React, Vue, and beyond.',
    content: 'Full blog post content would go here...',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['JavaScript', 'React', 'Vue', 'Opinion'],
    author: 'Tyrone Mguni',
    featured: true
  },
  {
    id: '2',
    title: 'Building Scalable APIs: Lessons from Production',
    excerpt: 'Hard-learned lessons about API design, performance optimization, and scaling strategies from real-world projects that handle millions of requests.',
    content: 'Full blog post content would go here...',
    date: '2024-01-10',
    readTime: '8 min read',
    tags: ['API', 'Backend', 'Performance', 'Architecture'],
    author: 'Tyrone Mguni',
    featured: true
  },
  {
    id: '3',
    title: 'Why I Still Love Python in 2024',
    excerpt: 'A love letter to Python and why it remains my go-to language for certain types of projects despite the JavaScript ecosystem dominance.',
    content: 'Full blog post content would go here...',
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['Python', 'Opinion', 'Development'],
    author: 'Tyrone Mguni',
    featured: false
  },
  {
    id: '4',
    title: 'Docker in Development: Beyond the Basics',
    excerpt: 'Advanced Docker techniques that have transformed my development workflow. Multi-stage builds, development containers, and orchestration tips.',
    content: 'Full blog post content would go here...',
    date: '2024-01-01',
    readTime: '7 min read',
    tags: ['Docker', 'DevOps', 'Development', 'Tutorial'],
    author: 'Tyrone Mguni',
    featured: false
  },
  {
    id: '5',
    title: 'The State of TypeScript in 2024',
    excerpt: 'TypeScript has become essential for modern web development. Here\'s my take on its current state and where it\'s heading.',
    content: 'Full blog post content would go here...',
    date: '2023-12-28',
    readTime: '4 min read',
    tags: ['TypeScript', 'JavaScript', 'Opinion'],
    author: 'Tyrone Mguni',
    featured: false
  },
  {
    id: '6',
    title: 'Microservices: When and When Not To',
    excerpt: 'A pragmatic approach to microservices architecture. When it makes sense, when it doesn\'t, and how to avoid common pitfalls.',
    content: 'Full blog post content would go here...',
    date: '2023-12-20',
    readTime: '10 min read',
    tags: ['Architecture', 'Microservices', 'Backend', 'Opinion'],
    author: 'Tyrone Mguni',
    featured: true
  }
];

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and rants about software development, technology, and the developer experience
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedTag === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTag(null)}
              >
                All Topics
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="bg-card border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600">
                            Featured
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User size={14} />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          )}

          {/* Regular Posts */}
          {regularPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-8">All Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="bg-card border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User size={14} />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          )}

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">
                No articles found matching your search criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}