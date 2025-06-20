import { HeroSection } from '@/components/hero-section';
import { FeaturedProjects } from '@/components/featured-projects';
import { TechStack } from '@/components/tech-stack';
import { BlogPreview } from '@/components/blog-preview';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TechStack />
      <FeaturedProjects />
      <BlogPreview />
    </div>
  );
}