import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Public top nav. The blog is intentionally NOT linked here — it's unlisted.
 */
export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight transition-colors hover:text-accent"
        >
          {site.name}
        </Link>
        <div className="flex items-center gap-6 text-sm text-muted">
          <Link href="/#work" className="transition-colors hover:text-foreground">
            Work
          </Link>
          <Link
            href="/#launches"
            className="transition-colors hover:text-foreground"
          >
            Launches
          </Link>
        </div>
      </nav>
    </header>
  );
}
