import { Fragment } from "react";
import { site } from "@/lib/site";

const social = [
  { label: "X", href: site.links.twitter },
  { label: "LinkedIn", href: site.links.linkedin },
];

export function Footer({ width = "max-w-5xl" }: { width?: string }) {
  return (
    <footer className="mt-auto border-t border-border">
      <div
        className={`mx-auto flex ${width} flex-col gap-4 px-6 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between`}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {social.map((s, i) => (
            <Fragment key={s.label}>
              {i > 0 && (
                <span aria-hidden className="text-border">
                  |
                </span>
              )}
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
