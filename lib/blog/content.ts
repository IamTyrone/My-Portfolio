import { readFile } from "fs/promises";
import path from "path";

import { getPost } from "./posts";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

/** Server-only: reads an article body from content/blog. */
export async function getPostContent(id: string): Promise<string | null> {
  const post = getPost(id);
  if (!post) return null;

  try {
    return await readFile(path.join(CONTENT_DIR, post.file), "utf8");
  } catch {
    return null;
  }
}
