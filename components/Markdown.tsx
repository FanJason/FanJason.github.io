import { Fragment, type ReactNode } from "react";

/**
 * Tiny markdown renderer for personal posts — no dependencies.
 * Supports: ## headings, > blockquotes, "- " bullet lists, and paragraphs
 * (blank line separates blocks). Inline **bold** and *italic* are handled too.
 *
 * Style: clean Swiss-minimal — Inter throughout, generous whitespace, quiet
 * section headings, and a comfortable reading measure.
 */
function inline(text: string): ReactNode {
  // Split on **bold** and *italic* while keeping the delimiters' content.
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function Markdown({ content }: { content: string }) {
  const blocks = content.trim().split(/\n{2,}/);

  return (
    <div className="text-[15px] leading-7 text-muted">
      {blocks.map((block, i) => {
        const lines = block.split("\n");

        if (block === "---") {
          return <hr key={i} className="mt-7 border-border" />;
        }

        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-7 mb-3 text-base font-medium tracking-tight text-foreground first:mt-0"
            >
              {inline(block.slice(3))}
            </h2>
          );
        }

        if (block.startsWith("> ")) {
          return (
            <blockquote
              key={i}
              className="mt-7 space-y-1 border-l border-border pl-5 text-foreground"
            >
              {lines.map((l, j) => (
                <span key={j} className="block">
                  {inline(l.replace(/^> ?/, ""))}
                </span>
              ))}
            </blockquote>
          );
        }

        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i} className="mt-3 space-y-2">
              {lines.map((l, j) => (
                <li key={j}>{inline(l.slice(2))}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="mt-4 first:mt-0">
            {lines.map((l, j) => (
              <Fragment key={j}>
                {j > 0 && <br />}
                {inline(l)}
              </Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
