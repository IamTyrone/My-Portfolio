// Single source of truth for blog post metadata.
// The article bodies live in content/blog/*.md and are read on the server
// (see lib/blog/content.ts), so they never ship to the browser.

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  /** markdown file inside content/blog */
  file: string;
}

export const BLOG_AUTHOR = "Tyrone Mguni";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Why I moved from session auth to JWT auth on AWS.",
    excerpt:
      "How I migrated from session-based authentication to JWT-based authentication on AWS.",
    date: "2025-10-15",
    readTime: "5 min",
    tags: ["NestJS", "AWS", "JWT", "Authentication"],
    featured: true,
    file: "session-auth-to-jwt-on-aws.md",
  },
  {
    id: "2",
    title: "Diminishing Returns in Software Development Experience.",
    excerpt:
      "How competence increases at a decreasing rate as you gain more experience.",
    date: "2025-10-10",
    readTime: "8 min",
    tags: ["Experience", "Growth", "Learning"],
    featured: true,
    file: "diminishing-returns-in-experience.md",
  },
  {
    id: "3",
    title: "'Don't fight like a man. Fight like a girl.'",
    excerpt:
      "How small companies lose their advantage by trying to behave like large ones.",
    date: "2025-10-05",
    readTime: "6 min",
    tags: ["Python", "Opinion", "Development"],
    featured: false,
    file: "fight-like-a-girl.md",
  },
  {
    id: "4",
    title: "There is a cult amongst Rust developers!",
    excerpt: "Debunking the irrational, blind admiration for Rust.",
    date: "2025-10-01",
    readTime: "7 min",
    tags: ["Rust", "Community", "Development"],
    featured: false,
    file: "the-rust-cult.md",
  },
  {
    id: "5",
    title: "Why not automate the entire division?",
    excerpt:
      "A pissed off me trying to get his documents at the district office flirts with the idea of automation.",
    date: "2025-08-20",
    readTime: "4 min",
    tags: ["Automation", "Opinion", "Development"],
    featured: false,
    file: "automate-the-entire-division.md",
  },
  {
    id: "6",
    title: "You could be handling file uploads wrong!",
    excerpt: "A scalable way to handle file uploads to AWS S3.",
    date: "2025-09-15",
    readTime: "10 min",
    tags: ["AWS", "S3", "File Upload", "Scalability"],
    featured: true,
    file: "handling-file-uploads-wrong.md",
  },
];

export const allTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags)),
);

export function getPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

/** Most recent posts first, for the home page preview. */
export function getLatestPosts(count: number): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}
