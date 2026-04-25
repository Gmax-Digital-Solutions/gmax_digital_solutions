import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import { PostHogProvider } from "@/components/providers/PostHogProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gmax Digital | Small Businesses. Big Solutions.",
  description: "Official website of Gmax Digital",

  openGraph: {
    title: "Gmax Digital solutions",
    description: "We architect scalable growth systems.",
    url: "https://gmaxdigitals.com",
    images: [
      {
        url: "https://gmaxdigitals.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gmax Digital Solutions",
    description: "We architect scalable growth systems.",
    images: ["https://gmaxdigitals.com/og-image.png"],
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
      className={`scroll-smooth ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />

        {/* <!-- Primary --> */}
        <title>Gmax Digital — Strategic Growth Systems</title>
        <meta name="title" content="Gmax Digital — Strategic Growth Systems" />
        <meta
          name="description"
          content="We don’t just market — we architect scalable growth systems for modern businesses."
        />

        {/* <!-- Open Graph (ALL platforms use this) --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gmaxdigitals.com/" />
        <meta
          property="og:title"
          content="Gmax Digital — Strategic Growth Systems"
        />
        <meta
          property="og:description"
          content="We don’t just market — we architect scalable growth systems for modern businesses."
        />
        <meta
          property="og:image"
          content="https://gmaxdigitals.com/og-image.png"
        />

        {/* Extra OG (improves reliability) */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter (used by X but also fallback for others) --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://gmaxdigitals.com/" />
        <meta
          name="twitter:title"
          content="Gmax Digital — Strategic Growth Systems"
        />
        <meta
          name="twitter:description"
          content="We don’t just market — we architect scalable growth systems."
        />
        <meta
          name="twitter:image"
          content="https://gmaxdigitals.com/og-image.png"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body selection:bg-primary-container selection:text-white max-w-[100vw] mx-auto">
        <PostHogProvider>
          {children}
          <CookieBanner />
        </PostHogProvider>
      </body>
    </html>
  );
}
