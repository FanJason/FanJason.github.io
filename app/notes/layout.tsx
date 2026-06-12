import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

/**
 * Applies to every page under /journal. `robots: noindex` keeps the blog out
 * of search results; robots.txt (app/robots.ts) reinforces it. The page is
 * unlisted — reachable only by knowing the URL.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-border/70">
        <nav className="mx-auto flex h-16 max-w-3xl items-center px-6">
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ← {site.name}
          </Link>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">{children}</main>
      <Footer width="max-w-3xl" />
    </>
  );
}
