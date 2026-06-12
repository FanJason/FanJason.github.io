/**
 * Personal blog posts ("Life Charter"). This page is unlisted (noindex).
 *
 * To add a post: copy a block below and edit it. `content` is light markdown —
 * the renderer understands:
 *   ## Heading        → section heading
 *   > quote           → blockquote
 *   - item            → bullet list
 *   plain lines       → paragraphs (blank line separates them)
 */
export type Post = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  content: string;
};

const posts: Post[] = [
  {
    slug: "my-life-charter",
    title: "Life Charter",
    date: "2026-06-11",
    excerpt:
      "The principles for how I live and operate.",
    content: `## Tell Your Story

- Know your legacy and brand and command it in everything you do. Career, family, friends, relationships, travel, ambition, leisure.
- Live a life to build the plot that's truly you.

## Invest in yourself

- Health is priority #1. Spend what you need to take care of the one thing you can't replace.
- Allocate time and money into personal growth just like you would in your stocks, 401k, and other assets.

## Responsibility is a privilege

- Be honoured that you and your community give you the respect to protect and lead.
- Operate grateful for the knowledge and ambition bestowed upon you.

## Be a maximalist

- Never brag about how little you need to do. Always seek opportunities to experience life to the fullest.
- Build the life you're excited to wake up to.

## Be mentally strong

- You become what you think about. Train your brain to envision the life you want. You have the power to change the traits that define you.
- Prepare your mind for stress through intentional discomfort (cold plunge, sauna, weight training) so that life's most difficult moments can be handled with grace.
- Hold a powerful narrative of yourself.

## Obsession beats talent

- Know that things take time and won't be perfect on the first swing. Experiment and iterate aggressively.
- Limit the friction between thought and reality to be more godlike.
- One day or day one.

---

Make a unique contribution.
Live a life of purpose.
Do something that nobody else in the world would do or can do.`,
  },
];

export const getPosts = (): Post[] =>
  [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);
