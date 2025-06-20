"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const featuredProjects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order tracking.',
    image: 'https://images.pexels.com/photos/6214471/pexels-photo-6214471.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'frontend',
    github: 'https://github.com/tyronemguni/ecommerce',
    demo: 'https://ecommerce-demo.vercel.app'
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool using OpenAI API. Built with Next.js, features real-time content generation and user-friendly interface.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'OpenAI', 'TypeScript', 'Prisma'],
    category: 'backend',
    github: 'https://github.com/tyronemguni/ai-content',
    demo: 'https://ai-content-gen.vercel.app'
  },
  {
    id: '3',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure setup using AWS, Docker, and Kubernetes. Includes CI/CD pipelines and monitoring solutions.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    category: 'devops',
    github: 'https://github.com/tyronemguni/cloud-infra',
    demo: null
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing different technologies and approaches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                      >
                        <Github size={16} />
                      </Link>
                      {project.demo && (
                        <Link
                          href={project.demo}
                          className="p-2 hover:bg-muted rounded-full transition-colors"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}