import "@/app/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joshua Vaughan | Social Media Expert",
  description:
    "Socials by Josh - Social media expert specializing in personal brand development, engaging content creation, and community growth.",
  keywords:
    "social media, brand development, content creation, social media manager, influencer marketing",
  openGraph: {
    title: "Joshua Vaughan | Social Media Expert",
    description:
      "Social media expert specializing in personal brand development, engaging content creation, and community growth.",
    url: "https://socialsbyjosh.com",
    siteName: "Socials by Josh",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
