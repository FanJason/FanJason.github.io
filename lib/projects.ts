/**
 * Featured projects shown on the home page. Newest first.
 * `href` can be a live URL, a repo, or a writeup. Set to "" to disable the link.
 */
export type Project = {
  title: string;
  description: string;
  year: string;
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "More coming..",
    description: "",
    year: "",
    href: "",
    featured: true,
  },
  {
    title: "Aries",
    description:
      "A fitness tracker for the mind. Track and train your mind just like your body through an AI-powered mental wellness app.",
    year: "2025",
    href: "https://tryaries.com",
  },
  {
    title: "How Language Affects Token Cost in LLMs",
    description:
      "Research paper on how human language affects token cost in LLMs.",
    year: "2026",
    href: "https://lang-token-evaluator.vercel.app/research",
  },
  {  
    title: "Claude Code Overlays",
    description:
      "Shareable social overlays for your Claude Code sessions.",
    year: "2026",
    href: "https://claude-overlay.vercel.app/",
  },
  {
    title: "Height Verification App",
    description:
      "Justice for the NYC dating scene.",
    year: "2026",
    href: "https://height-verification.vercel.app/",
    featured: true,
  },
  {
    title: "How DoorDash Standardized and Improved Microservices Caching",
    description:
      "Co-authored a tech article on a custom 3-layer caching library built at DoorDash.",
    year: "2023",
    href: "https://careersatdoordash.com/blog/how-doordash-standardized-and-improved-microservices-caching/",
    featured: true,
  },
];
