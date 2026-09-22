import { readFile } from "fs/promises";
import path from "path";

import { getProjectDetail } from "./details";
import { splitParagraphs } from "@/lib/markdown";

const CONTENT_DIR = path.join(process.cwd(), "content", "projects");

/** Server-only: reads a project write-up from content/projects. */
export async function getProjectContent(id: string): Promise<string | null> {
  const detail = getProjectDetail(id);
  if (!detail) return null;

  try {
    return await readFile(path.join(CONTENT_DIR, detail.file), "utf8");
  } catch {
    return null;
  }
}

/** Server-only: a project's write-up as paragraphs, ready to render. */
export async function getProjectParagraphs(
  id: string,
): Promise<string[] | null> {
  const markdown = await getProjectContent(id);
  return markdown === null ? null : splitParagraphs(markdown);
}
