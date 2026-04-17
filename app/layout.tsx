import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteTitle = "Bhor Technologies | AI Automation, SaaS, Development & Cyber Security";
const siteDescription =
  "Bhor Technologies helps ambitious businesses automate operations, launch scalable SaaS products, build modern web and mobile apps, and stay secure from day one.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bhortechnologies.com"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Bhor Technologies",
    "AI Automation",
    "SaaS Development",
    "Web Development",
    "App Development",
    "Cyber Security",
    "Next.js agency",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://www.bhortechnologies.com",
    siteName: "Bhor Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bhor Technologies sunrise-inspired technology brand image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
