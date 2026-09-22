import { notFound } from "next/navigation";
import { ArticleView } from "@/components/blog/article-view";
import { getPostContent } from "@/lib/blog/content";
import { BLOG_AUTHOR, blogPosts, getPost } from "@/lib/blog/posts";
import { renderMarkdown } from "@/lib/markdown";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  return { title: post.title, description: post.excerpt };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  const markdown = post ? await getPostContent(post.id) : null;

  if (!post || markdown === null) {
    notFound();
  }

  return (
    <ArticleView
      post={post}
      author={BLOG_AUTHOR}
      html={renderMarkdown(markdown)}
    />
  );
}
