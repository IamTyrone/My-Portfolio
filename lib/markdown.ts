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
  let inCode = false;
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
        // "```ts" opens a block too, so track state instead of reading the length
        inCode = !inCode;
        return inCode
          ? `<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>`
          : `</code></pre>`;
      }
      if (inCode) {
        return `${line.replace(/&/g, "&amp;").replace(/</g, "&lt;")}\n`;
      }
      if (/^-{3,}$/.test(line.trim())) {
        return `<hr class="my-8 border-muted" />`;
      }
      const linked = line.replace(
        /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-terminal-green underline underline-offset-2">$1</a>',
      );
      const boldText = linked.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      const italicText = boldText.replace(
        /(^|[^*\w])\*(?!\s)([^*]+?)\*(?!\w)/g,
        "$1<em>$2</em>",
      );
      const codeText = italicText.replace(
        /`(.*?)`/g,
        '<code class="bg-muted px-2 py-1 rounded">$1</code>',
      );
      return `<p class="mb-4 leading-relaxed">${codeText}</p>`;
    })
    .join("");
}
