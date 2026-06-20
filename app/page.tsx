import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowUpRight } from "@/components/icons";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import { launches } from "@/lib/launches";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export default function Home() {
  return (
    <>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        {/* Hero */}
        <section className="pt-20 pb-8 sm:pt-28 sm:pb-10">
          <Reveal>
            {/* <p className="mb-4 text-sm font-medium text-accent">{site.role}</p> */}
            <div className="flex items-center gap-4">
              <Image
                src="/v2White.png"
                alt=""
                width={500}
                height={500}
                className="size-12 shrink-0 sm:size-14"
                preload
              />
              <h1 className="font-geist text-3xl font-medium-light tracking-tight leading-[0.8] tracking sm:text-4xl">
                {site.name}
              </h1>
            </div>
            {/* <p className="mt-4 max-w-2xl text-base tracking-tight leading-relaxed text-muted">
              {site.description}
            </p> */}
          </Reveal>
        </section>

        {/* Selected work */}
        <section id="work" className="scroll-mt-20 py-4">
          <Reveal>
            <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-subtle">
              Projects
            </h2>
          </Reveal>
          <div className="flex flex-col divide-y divide-border">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Recent launches */}
        <section
          id="launches"
          className="scroll-mt-20 pt-10 pb-20"
        >
          <Reveal>
            <h2 className="mb-8 font-display text-sm font-semibold uppercase tracking-widest text-subtle">
              Timeline
            </h2>
          </Reveal>
          <ol className="relative ml-2 space-y-12 border-l border-border">
            {launches.map((launch, i) => {
              const inner = (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    className="absolute left-[-8px] top-1.5 size-3.5"
                    aria-hidden="true"
                  >
                    <polygon
                      points="12,2 21,7 21,17 12,22 3,17 3,7"
                      fill="var(--background)"
                      stroke="rgba(255,255,255,0.55)"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <time className="block text-xs tabular-nums text-subtle">
                    {dateFmt.format(new Date(launch.date))}
                  </time>
                  <h3 className="mt-1 flex items-center gap-1 font-medium tracking-tight">
                    {launch.title}
                    {launch.href && (
                      <ArrowUpRight className="size-3.5 text-subtle transition-colors group-hover:text-accent" />
                    )}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {launch.detail}
                  </p>
                </>
              );

              return (
                <Reveal key={launch.title} delay={i * 70}>
                  <li className="relative pl-6">
                    {launch.href ? (
                      <a
                        href={launch.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group block"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="group">{inner}</div>
                    )}
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </section>

        {/* About
        <section className="border-border pt-8 pb-28">
          <Reveal>
            <h2 className="mb-8 font-display text-sm font-semibold uppercase tracking-widest text-subtle">
              About
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <p>
                Previous so-called overachiever. Trying to live a life of purpose.
              </p>
            </div>
          </Reveal>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
