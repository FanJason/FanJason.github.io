import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { getPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Notes",
};

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function JournalIndex() {
  const posts = getPosts();

  return (
    <>
      <section className="pt-20 pb-4">
        <Reveal>
          <h1 className="font-geist text-3xl font-normal leading-[0.8] tracking-tight sm:text-4xl">
            Notes
          </h1>
          <p className="mt-4 max-w-lg leading-relaxed text-muted">
            A private, unlisted space for notes and deeper thinking.
          </p>
        </Reveal>
      </section>

      <section className="border-border">
        <ul className="divide-y divide-border">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 70}>
              <li>
                <Link
                  href={`${site.blogPath}/${post.slug}`}
                  className="group block py-6"
                >
                  <h2 className="mt-1 font-display text-xl font-medium tracking-tight transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <time className="text-xs tabular-nums text-subtle">
                    {dateFmt.format(new Date(post.date))}
                  </time>
                  <p className="mt-2 leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
