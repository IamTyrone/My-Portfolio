/**
 * Splits prose into paragraphs on blank lines, for content that is plain
 * paragraphs rather than full markdown (see the project write-ups).
 */
export function splitParagraphs(markdown: string): string[] {
  return markdown
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

/**
 * Minimal line-based markdown to HTML renderer used by the article pages.
 * Content is authored in-repo, so it is trusted.
 */
export function renderMarkdown(markdown: string): string {
  return markdown
    .split("\n")
    .map((line) => {
      if (line.startsWith("# ")) {
        return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.substring(2)}</h1>`;
      }
      if (line.startsWith("## ")) {
        return `<h2 class="text-2xl font-bold mt-6 mb-3">${line.substring(3)}</h2>`;
      }
      if (line.startsWith("### ")) {
        return `<h3 class="text-xl font-bold mt-4 mb-2">${line.substring(4)}</h3>`;
      }
      if (line.startsWith("- ") || line.startsWith("* ")) {
        return `<li class="ml-4">${line.substring(2)}</li>`;
      }
      if (line.trim() === "") {
        return "<br />";
      }
      if (line.startsWith("```")) {
        return line.length > 3
          ? `</code></pre>`
          : `<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>`;
      }
      const boldText = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      const codeText = boldText.replace(
        /`(.*?)`/g,
        '<code class="bg-muted px-2 py-1 rounded">$1</code>',
      );
      return `<p class="mb-4 leading-relaxed">${codeText}</p>`;
    })
    .join("");
}
