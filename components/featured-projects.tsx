"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const featuredProjects = [
  {
    id: "1",
    title: "Kraven The Hunter",
    description:
      "An AI-powered Chrome browser extension that parses an active URL link and checks for malicious sites using a machine learning model on the backend.",
    image:
      "https://t4.ftcdn.net/jpg/06/35/25/41/360_F_635254151_lABWzlpgobLmVIijGBNL37x6oQonVFdz.jpg",
    tags: [
      "React",
      "Python",
      "FastAPI",
      "Javascript",
      "Tailwind",
      "TensorFlow",
    ],
    category: "Full Stack",
    github: "https://github.com/IamTyrone/Kraven-The-Hunter.git",
    demo: "#",
  },
  {
    id: "2",
    title: "Safi Help",
    description:
      "Its a really cool platform where people can find cleaners and cleaners can find jobs and get paid instantly. It has a mobile app and a web app.",
    image: "https://www.safihelp.com/images/request4.png",
    tags: [
      "React Native",
      "React",
      "Golang",
      "Django",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Stripe",
    ],
    category: "Full Stack",
    github: "#",
    demo: "https://safihelp.com",
  },
  {
    id: "3",
    title: "ZimTickets",
    description:
      "Scalable cloud infrastructure setup using AWS, Docker, and Kubernetes. Includes CI/CD pipelines and monitoring solutions.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D2DAQEamLgnmROxgA/profile-treasury-image-shrink_1920_1920/B4DZVy13C3HYAc-/0/1741388480417?e=1751115600&v=beta&t=VwV_vDCdW8zpYHBCcG0_OITR9ZJN5628JA_uKrhlCLE",
    tags: [
      "MySQL",
      "SmartBear",
      "Docker",
      "AWS",
      "React Native",
      "Next.js",
      "Tailwind",
      "Laravel",
    ],
    category: "devops",
    github: "#",
    demo: "https://www.zimtickets.com/",
  },
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
            A selection of my recent work showcasing different technologies and
            approaches
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
                      <Link href={`/projects/${project.id}`}>View Details</Link>
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
