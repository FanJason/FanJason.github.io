/**
 * Site-wide config. Edit your name, links, and the secret blog path here.
 */
export const site = {
  name: "Jason Fan",
  // Short bio used in metadata + the home hero subtext.
  description:
    "Working towards asymmetric outcomes",
  url: "https://fanjason.github.io",

  // Public social / contact links (shown in the footer + hero).
  links: {
    email: "jason.fan017@gmail.com",
    twitter: "https://x.com/ZAUYEF",
    linkedin: "https://linkedin.com/in/fanjason",
  },

  /**
   * The blog is UNLISTED: it's set to noindex, blocked in robots.txt, and not
   * linked from the public nav. Anyone with this URL can read it, so make the
   * slug hard to guess if you want it more private.
   */
  blogPath: "/notes",
} as const;
