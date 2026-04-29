import type { Metadata } from "next";
import { Manrope, Poppins, Source_Serif_4 } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

const siteTitle = "Sparkentech | AI Automation, SaaS, Development & Cyber Security";
const siteDescription =
  "Sparkentech helps ambitious businesses automate operations, launch scalable SaaS products, build modern web and mobile apps, and stay secure from day one.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bhortechnologies.com"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Sparkentech",
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
    siteName: "Sparkentech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sparkentech dark-theme technology brand image",
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
    <html lang="en" className={`${manrope.variable} ${poppins.variable} ${sourceSerif4.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
