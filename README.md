# Personal website

A sleek, minimal personal site: a public home page featuring projects and
launches, plus an **unlisted** journal for personal "life charter" posts.

Built with **Next.js 16** (App Router) + **Tailwind CSS v4** + **TypeScript**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

- Home: `/`
- Journal (unlisted): `/journal` — change the path in `lib/site.ts`

## Editing content

Everything you'll touch lives in `lib/`:

| File              | What it controls                                              |
| ----------------- | ------------------------------------------------------------- |
| `lib/site.ts`     | Your name, role, bio, social links, and the secret blog path  |
| `lib/projects.ts` | "Selected Work" cards on the home page                        |
| `lib/launches.ts` | "Recent Launches" timeline                                    |
| `lib/posts.ts`    | Journal entries (light markdown — see the comment at the top) |

## Design

- **Color:** monochrome zinc + one accent. Change `--accent` / `--accent-hover`
  in `app/globals.css` to re-skin the entire site in one line.
- **Fonts:** Space Grotesk (headings) + Inter (body), loaded via `next/font`.
- **Motion:** subtle scroll-reveal (`components/Reveal.tsx`), automatically
  disabled for visitors who prefer reduced motion.

## Privacy of the journal

The journal is **unlisted**, not password-protected — anyone with the URL can
read it. It's kept out of public view three ways:

1. `robots: noindex` on every `/journal` page (`app/journal/layout.tsx`)
2. Disallowed in `app/robots.ts`
3. Excluded from the sitemap and never linked from the public nav

To make it harder to find, set a hard-to-guess `blogPath` in `lib/site.ts`
(e.g. `/journal-7f3a`). If you later want a real password, the simplest route on
Vercel is to gate the path with middleware or Vercel's deployment
Password Protection.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — it auto-detects
   Next.js, no config needed.
3. Set your real domain, then update `url` in `lib/site.ts` so metadata,
   `robots.txt`, and the sitemap point at it.
