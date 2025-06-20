"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ExternalLink, Github, Search } from 'lucide-react';

const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order tracking.',
    image: 'https://images.pexels.com/photos/6214471/pexels-photo-6214471.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'frontend',
    github: 'https://github.com/tyronemguni/ecommerce',
    demo: 'https://ecommerce-demo.vercel.app',
    featured: true
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool using OpenAI API. Built with Next.js, features real-time content generation and user-friendly interface.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'OpenAI', 'TypeScript', 'Prisma'],
    category: 'backend',
    github: 'https://github.com/tyronemguni/ai-content',
    demo: 'https://ai-content-gen.vercel.app',
    featured: true
  },
  {
    id: '3',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure setup using AWS, Docker, and Kubernetes. Includes CI/CD pipelines and monitoring solutions.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    category: 'devops',
    github: 'https://github.com/tyronemguni/cloud-infra',
    demo: null,
    featured: true
  },
  {
    id: '4',
    title: 'Portfolio Website Template',
    description: 'A modern, responsive portfolio website template built with Next.js and Tailwind CSS. Features dark mode, animations, and SEO optimization.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'static',
    github: 'https://github.com/tyronemguni/portfolio-template',
    demo: 'https://portfolio-template.vercel.app',
    featured: false
  },
  {
    id: '5',
    title: 'Task Management API',
    description: 'RESTful API for task management with user authentication, real-time updates, and comprehensive documentation.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    category: 'backend',
    github: 'https://github.com/tyronemguni/task-api',
    demo: null,
    featured: false
  },
  {
    id: '6',
    title: 'React Component Library',
    description: 'A comprehensive React component library with TypeScript support, Storybook documentation, and npm publishing workflow.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'Storybook', 'Rollup'],
    category: 'frontend',
    github: 'https://github.com/tyronemguni/react-components',
    demo: 'https://components.storybook.io',
    featured: false
  }
];

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'devops', label: 'DevOps' },
  { value: 'static', label: 'Static Sites' }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my skills across different technologies and domains
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className="whitespace-nowrap"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-card border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    {project.featured && (
                      <Badge className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-purple-600">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/projects/${project.id}`}>
                          View Details
                        </Link>
                      </Button>
                      
                      <div className="flex gap-2">
                        <Link
                          href={project.github}
                          className="p-2 hover:bg-muted rounded-full transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                        </Link>
                        {project.demo && (
                          <Link
                            href={project.demo}
                            className="p-2 hover:bg-muted rounded-full transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={16} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">
                No projects found matching your search criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}