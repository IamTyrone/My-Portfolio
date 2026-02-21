"use client";

import React, { use } from "react";
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
      "A full-stack cybersecurity platform that uses machine learning to detect phishing, malware, and malicious URLs in real time — combining a trained ML model, a production-grade API, a React web dashboard, and a Chrome extension.",
    longDescription: `I built Kraven because the problem was real and the existing solutions were either too slow, too expensive, or too dumb. So I built my own. End to end.

The ML pipeline was the most interesting part. I engineered 14 features from raw URLs — Shannon entropy, digit ratio, special character density, IP-based hostname detection, subdomain count, path depth, URL shortener detection, @ symbol presence, double-slash redirects, domain length, and HTTPS usage. I trained a scikit-learn RandomForest classifier on a merged dataset of ~500K malicious and benign URLs. The model outputs probability-based confidence scores via predict_proba, not just binary labels — giving users a nuanced threat assessment rather than a blunt yes/no.

The FastAPI backend exposes endpoints for URL prediction, community threat reporting, and health checks. It features model hot-reloading — it detects when the .pkl file changes on disk and swaps it in without downtime. There's also a community report lookup that overrides ML predictions with crowd-sourced intelligence, which is a nice touch.

When community report counts cross a configurable threshold, the API dispatches an async Celery task to a dedicated worker process. The worker merges community-reported URLs with the original training data and retrains the model — all without blocking the API. RabbitMQ serves as the message broker between the API and the worker.

The Chrome extension (Manifest V3) has two layers of protection: a content script that automatically scans every page the user visits and redirects to a warning page if the confidence score exceeds 85%, and a popup interface where users can manually scan the current page and see the full threat report inline — without ever leaving the browser.

The whole backend is containerised with Docker Compose running three services: the FastAPI engine, the Celery worker, and RabbitMQ. The engine and worker share a Docker volume for the model file. The React frontend is deployed to Vercel as a static SPA.`,
    image: "/img/projects/kraven/scanner.png",
    tags: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "Celery",
      "RabbitMQ",
      "React",
      "Vite",
      "TailwindCSS",
      "Docker",
      "Vercel",
      "Chrome Extension",
    ],
    category: "Full Stack",
    github: "https://github.com/IamTyrone/Kraven-The-Hunter.git",
    demo: "https://kraven-the-hunter.vercel.app/",
    timeline: "3 months",
    team: "Solo project",
    status: "Completed",
    features: [
      "Real-time malicious URL detection with ML confidence scoring",
      "14-feature URL engineering pipeline (entropy, digit ratio, path depth, etc.)",
      "RandomForest classifier trained on ~500K URLs with predict_proba output",
      "Community threat reporting that overrides ML predictions",
      "Async model retraining via Celery + RabbitMQ without API downtime",
      "Model hot-reloading — swaps updated .pkl file without restart",
      "Chrome Extension (Manifest V3) with auto-scan and manual popup",
      "React web dashboard with detailed threat reports and one-click reporting",
      "Fully containerised backend with Docker Compose (API + worker + broker)",
    ],
    techStack: {
      "ML / Backend": [
        "Python",
        "scikit-learn",
        "FastAPI",
        "SQLAlchemy",
        "SQLite",
      ],
      "Async / Messaging": ["Celery", "RabbitMQ"],
      Frontend: [
        "React 18",
        "Vite",
        "TailwindCSS",
        "Framer Motion",
        "Flowbite",
      ],
      Extension: ["Chrome Extension (Manifest V3)", "JavaScript"],
      Deployment: ["Docker Compose", "Vercel"],
      Tools: ["Git", "Postman", "VS Code"],
    },
    challenges: [
      "Engineering meaningful features from raw URL strings without leaking label information",
      "Chrome Manifest V3 restrictions on content script redirects — required creative workarounds",
      "Wiring async Celery retraining so it never blocks the live API",
      "Keeping the model hot-reloadable on disk without service restarts",
      "Balancing ML prediction confidence thresholds to minimise false positives",
    ],
    learnings: [
      "How to build a production Chrome Extension with Manifest V3 and its many constraints",
      "Feature engineering for URL-based ML — entropy and structural signals are surprisingly powerful",
      "Async task queues with Celery and RabbitMQ for background model retraining",
      "Model hot-reloading patterns in production APIs",
      "How crowd-sourced intelligence can meaningfully improve ML accuracy over time",
    ],
  },
  "3": {
    id: "3",
    title: "ZimTickets",
    description:
      "An all in one event management platform. It Houses the ability to help event organizers post events, sell their tickets and provide means to enable users to validate those tickets.",
    longDescription: `I did mention that I work as a software architect back at Mviyo techonologies right? That means when new products come into the fold, they tend to pass through my hands first, to gather requirements, and design solutions for those requirements alongside the higher-ups. ZimTickets is one of those products.

While designing the architecture for the platform, I had to create what exactly the users will do once on the platform in "Functional Requirements" and make user stories out of those which are eventually used as a unit of work for developers. The technical architecture had to be limited to AWS because that is our primary service provider.

Upon designing the high level architecture, I went deep into the database and designed what it should look like. For that I used pen and paper first because that makes me think quick while retaining lots of context in my head, then I moved it to Eraser to just give me clear schema diagrams to share with the backend developers.

After doing the database design, I did the API design using Smart Bear. This enabled the backend and client side developers to work in parallel. This way, no one has to wait for the other to get their work done. Smart Bear allowed me to create mockable API endpoints that the frontend developers could use to test their code against. This is a great way to ensure that the frontend and backend are in sync and that the API is well documented.`,
    image:
      "https://media.licdn.com/dms/image/v2/D4D2DAQEamLgnmROxgA/profile-treasury-image-shrink_1920_1920/B4DZVy13C3HYAc-/0/1741388480417?e=1751115600&v=beta&t=VwV_vDCdW8zpYHBCcG0_OITR9ZJN5628JA_uKrhlCLE",
    tags: ["Architecture", "OpenAPI", "Eraser.io"],
    category: "backend",
    github: "#",
    demo: "https://zimtickets.com",
    timeline: "1 Year",
    team: "Mviyo Technologies",
    status: "Completed",
    features: [
      "Event Management",
      "Ticket Sales and Validation",
      "Detailed Event Analytics",
      "Secure Payment Processing",
      "Event Promotion Tools",
    ],
    techStack: {
      Frontend: ["React Native", "Next.js", "TypeScript", "Tailwind CSS"],
      Backend: ["Laravel", "PHP"],
      Database: ["MySQL"],
      Payment: ["Stripe", "Innbucks", "Ecocash", "Omari"],
      Deployment: ["Vercel", "AWS"],
      Tools: ["Smart Bear", "Eraser.io", "Postman", "Lucid Charts"],
    },
    challenges: [
      "Cost effective resource utilization.",
      "Consistent API and database design",
      "Mockable API endpoints for testing",
      "User authentication and authorization",
      "User story generation and management",
    ],
    learnings: [
      "Generating user stories and requirements from high-level descriptions",
      "Drafting API specifications and documentation",
      "Designing scalable and maintainable backend architectures",
      "Implementing best practices for API development and testing",
      "Writing Software Requirements Specifications (SRS) documents",
    ],
  },
  "2": {
    id: "2",
    title: "Safi Help",
    description:
      "This is a platform that enables cleaners to find work and regular people to find cleaners, all in  real time.",
    longDescription: `I architected the platform, re-wrote its backend code from Javascript to Python with a few services written in Go on the server side as well. We use lots of event driven architecture, you know, to make sure its snappy on the eye. There's a lot of stuff thats going on in real time too, like the chat between the cleaner and the client, notifications, payments etc.

The client side consists of 2 React Native Apps, one for the cleaners and the  other for the clients. The client app is used  by, well, clients to find cleaners, book them, pay them and manage their bookings. The cleaners app is used by  cleaners to find jobs, manage them and get paid. Well, this is a pretty watered down version of what the apps do but you get the gist. The other client side apps include some Managment interfaces for thhe admin side and cleaners also have their own web dashboard too, similar functionality to the mobile app of course. All web interfaces are built on React.js.

Our Infra is all on AWS. We use a lot of EC2 and RDS. We love Docker over here too. MongoDB, Redis etc, the whole Shabang!`,
    image: "https://www.safihelp.com/images/request4.png",
    tags: [
      "AWS",
      "Docker",
      "Python",
      "Django",
      "React",
      "React Native",
      "Golang",
    ],
    category: "fullstack",
    github: "#",
    demo: "https://www.safihelp.com",
    timeline: "1 Year",
    team: "Mviyo Technologies",
    status: "Completed",
    features: [
      "Real Time Cleaner Discovery",
      "Rating System",
      "Secure Payments",
      "Strict KYC",
      "Smart Discovery Algorithms",
      "Job Rescheduling",
      "Dynamic Service Costing",
      "Streamlined User Interfaces",
    ],
    techStack: {
      Cloud: ["AWS", "RDS", "Redis"],
      IaC: ["Terraform", "AWS CloudFormation"],
      Monitoring: ["Portainer", "Sentry", "CloudWatch"],
      "CI/CD": ["GitHub Actions"],
      Security: ["AWS IAM", "VPC", "Security Groups"],
      Backend: ["Django", "Golang"],
      Frontend: ["React.js", "Redux"],
      Mobile: ["React Native", "Redux"],
    },
    challenges: [
      "Developing with Expo is not for the faint hearted!",
      "Adjusting the discovery Algorithm and real time client server communication",
      "Regulatory compliance with multiple regulatory bodies",
      "Background processes in mobile applications",
      "Efficient media file compression",
      "Short term data persistence",
    ],
    learnings: [
      "Well, I finally got deeper into React Native",
      "My understanding of websockets really went up a notch",
      "Deep linking in mobile apps",
      "To be honest, I already knew quite a lot here, there wasn't too much learning done",
    ],
  },
};

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = projectsData[slug];

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
                    ),
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
                    ),
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
