/**
 * Recent launches / milestones — rendered as a timeline on the home page.
 * Newest first.
 */
export type Launch = {
  date: string; // ISO yyyy-mm-dd, used for sorting + display
  title: string;
  detail: string;
  href?: string;
};

export const launches: Launch[] = [
  {
    date: "2026-01-21",
    title: "Aries Dissolved",
    detail: "Just wasn't sticky enough.",
  },
  {
    date: "2025-12-19",
    title: "Aries hits the App Store",
    detail: "First iOS release of Aries.",
    href: "https://tryaries.com",
  },
  {
    date: "2025-05-15",
    title: "Starting building Aries",
    detail: "A fitness tracker for the mind. Track and train your mind just like your body.",
    href: "https://tryaries.com",
  },
  {
    date: "2025-03-24",
    title: "Prompt Builder AI",
    detail: "Helping users craft the perfect prompt.",
  },
  {
    date: "2025-02-28",
    title: "ODF Accelerator",
    detail: "1 week accelerator program for -1 to 0 founders.",
    href: "https://joinodf.com",
  },
  {
    date: "2024-05-02",
    title: "Shipped IG Trial Reels",
    detail: "The largest driver of content production at IG. 3M WAU, +1M reels created per day.",
    href: "https://creators.instagram.com/blog/instagram-trial-reels",
  },
  {
    date: "2024-03-25",
    title: "Joined Meta",
    detail: "As a software engineer on the Instagram Public Sharing Labs team.",
  },
  {
    date: "2021-06-21",
    title: "Engineering At DoorDash",
    detail: "Helped scaled DashPass from 6M to 15M users.",
  },
  {
    date: "2020-09-17",
    title: "Founded VOLTA",
    detail: "A physiotherapy ecosystem that enhances the path to recovery through EMG integrated apparel.",
  },
  {
    date: "2017-05-02",
    title: "First Job",
    detail: "Bank Teller at TD Canada Trust",
  },
];
