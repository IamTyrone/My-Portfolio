import { notFound } from "next/navigation";
import { ProjectView } from "@/components/projects/project-view";
import { getProjectApps } from "@/lib/projects/app-links";
import { getProjectParagraphs } from "@/lib/projects/content";
import { getProjectDetail, projectDetails } from "@/lib/projects/details";
import { getProject } from "@/lib/projects/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(projectDetails).map((id) => ({ slug: id }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const detail = getProjectDetail(slug);

  if (!project || !detail) return {};

  return { title: project.title, description: detail.intro };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const detail = getProjectDetail(slug);
  const paragraphs = detail ? await getProjectParagraphs(slug) : null;

  if (!project || !detail || paragraphs === null) {
    notFound();
  }

  return (
    <ProjectView
      project={project}
      detail={detail}
      paragraphs={paragraphs}
      apps={getProjectApps(slug)}
    />
  );
}
