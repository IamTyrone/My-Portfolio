import { FeaturedProjects } from "@/components/featured-projects";
import { TechStack } from "@/components/tech-stack";
import { BlogPreview } from "@/components/blog-preview";
import HeroSection from "@/components/hero-section";
import { getFeaturedProjects } from "@/lib/projects/projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TechStack />
      <FeaturedProjects projects={getFeaturedProjects(3)} />
      <BlogPreview />
    </div>
  );
}
