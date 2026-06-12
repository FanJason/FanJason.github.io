import type { Project } from "@/lib/projects";
import { ArrowUpRight } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  const hasLink = project.href.length > 0;
  const Wrapper = hasLink ? "a" : "div";

  return (
    <Wrapper
      {...(hasLink
        ? { href: project.href, target: "_blank", rel: "noreferrer" }
        : {})}
      className="group flex items-start justify-between gap-4 py-4 transition-colors"
    >
      <div className="min-w-0">
        <h3 className="font-display text-base font-medium tracking-tight transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2 pt-1 text-subtle">
        <span className="text-xs tabular-nums">{project.year}</span>
        {hasLink && (
          <ArrowUpRight className="size-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        )}
      </div>
    </Wrapper>
  );
}
