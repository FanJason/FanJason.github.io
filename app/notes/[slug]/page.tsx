import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Markdown } from "@/components/Markdown";
import { ArrowLeft } from "@/components/icons";
import { getPost, getPosts } from "@/lib/posts";
import { site } from "@/lib/site";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    robots: { index: false, follow: false },
  };
}

export default async function JournalPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="py-16">
      <Reveal>
        <Link
          href={site.blogPath}
          className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
          All entries
        </Link>

        <header className="mt-8">
          <time className="text-sm tabular-nums text-subtle">
            {dateFmt.format(new Date(post.date))}
          </time>
          <h1 className="mt-2 font-geist text-3xl font-normal leading-[0.9] tracking-tight sm:text-4xl">
            {post.title}
          </h1>
        </header>

        <div className="mt-10">
          <Markdown content={post.content} />
        </div>
      </Reveal>
    </article>
  );
}
