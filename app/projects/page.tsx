"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Github, Search } from "lucide-react";

const projects = [
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
    category: "fullstack",
    github: "https://github.com/IamTyrone/Kraven-The-Hunter.git",
    demo: "#",
    featured: true,
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
    category: "fullstack",
    github: "#",
    demo: "https://safihelp.com",
    featured: true,
  },
  {
    id: "3",
    title: "ZimTickets",
    description:
      "I gave this bad boy a detailed high level architecture. Its a ticketing platform that allows users to buy, sell and validate tickets for events. It's got a couple of mobile and web apps.",
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
    category: "architecture",
    github: "#",
    demo: "https://www.zimtickets.com/",
    featured: false,
  },
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "devops", label: "DevOps" },
  { value: "static", label: "Static Sites" },
  { value: "fullstack", label: "Full Stack" },
  { value: "architecture", label: "Architecture" },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
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
              A collection of projects showcasing my skills across different
              technologies and domains
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
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={16}
              />
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
                  variant={
                    selectedCategory === category.value ? "default" : "outline"
                  }
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
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
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
