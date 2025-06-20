// import { HeroSection } from "@/components/hero-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { TechStack } from "@/components/tech-stack";
import { BlogPreview } from "@/components/blog-preview";
import HeroSectionClient from "@/components/hero-section-clinet";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSectionClient />
      <TechStack />
      <FeaturedProjects />
      <BlogPreview />
    </div>
  );
}
