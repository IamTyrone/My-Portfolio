"use client";

import React from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code2,
} from "lucide-react";

// Mock project data - in a real app, this would come from a CMS or API
const projectsData: Record<string, any> = {
  "1": {
    id: "1",
    title: "Kraven The Hunter",
    description:
      "An ML powered chrome extension that parses the url and sends it to the an ML endine and database to check if the it is malicious or not.",
    longDescription: `So Tyrone, why did you decide to do this project? I plead the 5th. What  I will say, is that the idea to do it was pretty cool, am I right? LOL. This is essentially a browser extension that parses the URL the browser is currently on and sends it somehwere..

Send it where? Well, I have a FastAPI server on the backend exposing a machine learning model trained on a databases of known malicious URL. First I had to decide what are my features. Well, for starters, malicious URLs tend to be werid, right? What do I mean by that? They are long and have lots of special characters. Well, So I used the length of the URL and the number of special characters and as well as a host of other stuff you know.

On the other hand, if we have a filter feature enabled on the server, we can direct traffic to check whether the URL is a shopping site or an adult entertainment site and all. Why would someone want to filter those out? Psshhhh, I don't know, maybe you have kids and you don't want them to see that stuff. So I added a filter for that too.

The page we eventually direct the user to is built off of React and Tailwind and it shows a minimal report on whether the URL is malicious or not and our degree of accuracy. If the URL is good, no redirects.`,
    image:
      "https://t4.ftcdn.net/jpg/06/35/25/41/360_F_635254151_lABWzlpgobLmVIijGBNL37x6oQonVFdz.jpg",
    tags: ["React", "Python", "FastAPI", "Javascript", "Tailwind", "ML"],
    category: "Full Stack",
    github: "https://github.com/IamTyrone/Kraven-The-Hunter.git",
    demo: "#",
    timeline: "3 months",
    team: "Solo project",
    status: "Completed(But Imperfect)",
    features: [
      "Auto URL parsing.",
      "Typo-squatting and phishing detection.",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order management and tracking",
      "Responsive design for all devices",
    ],
    techStack: {
      Frontend: ["React", "TypeScript", "Tailwind CSS", "Javascript"],
      Backend: ["Python", "FastAPI", "JWT Authentication"],
      Database: ["N/A"],
      Payment: ["N/A"],
      Deployment: ["N/A"],
      Tools: ["Git", "GitHub Actions", "Postman", "VS Code"],
    },
    challenges: [
      "Implementing ML without using an established ML library like tensorflow.",
      "Capturing the URL and redirecting to a warning page if malicious. Chrome doesn't like that.",
      "Creating a responsive design that works across all device sizes",
      "Setting up automated deployment pipelines",
    ],
    learnings: [
      "Definitely how to build a browser extension and browser APIs.",
      "Not to forget how to develop ML models without using an established ML library.",
      "To be honest, I already knew how to code pretty well with everything else.",
    ],
  },
  "2": {
    id: "2",
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool using OpenAI API, designed to help content creators and marketers generate high-quality content efficiently.",
    longDescription: `The AI Content Generator is a sophisticated web application that leverages the power of OpenAI's GPT models to assist users in creating various types of content. From blog posts and social media content to product descriptions and email campaigns, this tool streamlines the content creation process.

Built with Next.js and TypeScript, the application features a clean, intuitive interface that makes AI-powered content generation accessible to users of all technical levels. The tool includes customizable templates, tone adjustment, and content optimization features.

The backend integrates seamlessly with OpenAI's API while implementing proper rate limiting, cost tracking, and user management. Real-time collaboration features allow teams to work together on content projects, with version control and approval workflows built-in.`,
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Next.js", "OpenAI", "TypeScript", "Prisma"],
    category: "backend",
    github: "https://github.com/tyronemguni/ai-content",
    demo: "https://ai-content-gen.vercel.app",
    timeline: "2 months",
    team: "Solo project",
    status: "Completed",
    features: [
      "Multiple content generation templates",
      "Customizable tone and style settings",
      "Real-time content preview",
      "Export to various formats (PDF, DOCX, HTML)",
      "Usage tracking and analytics",
      "Team collaboration features",
      "Version history and rollback",
      "API rate limiting and cost optimization",
    ],
    techStack: {
      Frontend: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form"],
      Backend: ["Next.js API Routes", "Prisma ORM", "NextAuth.js"],
      Database: ["PostgreSQL", "PlanetScale"],
      AI: ["OpenAI GPT-4", "Prompt engineering"],
      Deployment: ["Vercel", "Edge Functions"],
      Tools: ["ESLint", "Prettier", "Husky"],
    },
    challenges: [
      "Optimizing API costs while maintaining quality",
      "Implementing proper rate limiting and user quotas",
      "Designing intuitive UX for complex AI interactions",
      "Handling large text outputs efficiently",
    ],
    learnings: [
      "AI integration and prompt engineering",
      "Advanced Next.js features and optimization",
      "Database design for content management",
      "User experience design for AI tools",
    ],
  },
  "3": {
    id: "3",
    title: "Cloud Infrastructure",
    description:
      "A scalable cloud infrastructure setup using AWS, Docker, and Kubernetes, designed for high-availability applications with comprehensive monitoring and CI/CD.",
    longDescription: `This project demonstrates a production-ready cloud infrastructure built on AWS, showcasing modern DevOps practices and container orchestration. The infrastructure is designed to handle high-traffic applications with automatic scaling, fault tolerance, and comprehensive monitoring.

The setup includes a multi-tier architecture with load balancers, auto-scaling groups, and managed databases. Container orchestration is handled through Amazon EKS (Kubernetes), providing efficient resource utilization and simplified deployment processes.

Infrastructure as Code (IaC) principles are implemented using Terraform, ensuring reproducible and version-controlled infrastructure deployments. The CI/CD pipeline integrates with GitHub Actions for automated testing, building, and deployment processes.`,
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    category: "devops",
    github: "https://github.com/tyronemguni/cloud-infra",
    demo: null,
    timeline: "4 months",
    team: "Solo project",
    status: "Completed",
    features: [
      "Auto-scaling Kubernetes clusters",
      "Multi-zone deployment for high availability",
      "Automated CI/CD pipelines",
      "Infrastructure monitoring and alerting",
      "Centralized logging with ELK stack",
      "Security best practices and compliance",
      "Cost optimization and resource management",
      "Disaster recovery and backup strategies",
    ],
    techStack: {
      Cloud: ["AWS EKS", "EC2", "RDS", "ElastiCache", "CloudFront"],
      Containers: ["Docker", "Kubernetes", "Helm Charts"],
      IaC: ["Terraform", "AWS CloudFormation"],
      Monitoring: ["Prometheus", "Grafana", "CloudWatch"],
      "CI/CD": ["GitHub Actions", "ArgoCD"],
      Security: ["AWS IAM", "VPC", "Security Groups"],
    },
    challenges: [
      "Designing fault-tolerant multi-zone architecture",
      "Implementing proper security and access controls",
      "Optimizing costs while maintaining performance",
      "Setting up comprehensive monitoring and alerting",
    ],
    learnings: [
      "Advanced Kubernetes concepts and best practices",
      "Cloud architecture design patterns",
      "Infrastructure as Code with Terraform",
      "DevOps culture and continuous deployment",
    ],
  },
};

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData[params.slug];

  if (!project) {
    notFound();
  }

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
              <Link href="/projects">
                <ArrowLeft className="mr-2" size={16} />
                Back to Projects
              </Link>
            </Button>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2" size={16} />
                  View Code
                </Link>
              </Button>
              {project.demo && (
                <Button asChild variant="outline">
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-xl overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {project.longDescription
                    .split("\n\n")
                    .map((paragraph: string, index: number) => (
                      <p
                        key={index}
                        className="mb-4 text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </motion.div>

              <Separator className="my-8" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <Separator className="my-8" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Challenges & Solutions
                </h3>
                <div className="space-y-4">
                  {project.challenges.map(
                    (challenge: string, index: number) => (
                      <div key={index} className="bg-muted/50 rounded-lg p-4">
                        <p className="text-muted-foreground">{challenge}</p>
                      </div>
                    )
                  )}
                </div>
              </motion.div>

              <Separator className="my-8" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4">Key Learnings</h3>
                <div className="space-y-2">
                  {project.learnings.map((learning: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{learning}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card border rounded-xl p-6 sticky top-24"
              >
                <h3 className="text-lg font-semibold mb-4">Project Info</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Timeline</p>
                      <p className="font-medium">{project.timeline}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users size={16} className="text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Team</p>
                      <p className="font-medium">{project.team}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Code2 size={16} className="text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <Badge variant="outline" className="mt-1">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <h4 className="font-semibold mb-4">Tech Stack</h4>
                <div className="space-y-4">
                  {Object.entries(project.techStack).map(
                    ([category, technologies]) => (
                      <div key={category}>
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                          {category}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {(technologies as string[]).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
