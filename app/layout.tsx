import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: [
      { url: "/v2.png", media: "(prefers-color-scheme: light)", type: "image/png" },
      { url: "/v2White.png", media: "(prefers-color-scheme: dark)", type: "image/png" },
    ],
  },
  openGraph: {
    title: `${site.name}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geist.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
