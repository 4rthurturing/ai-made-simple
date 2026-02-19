import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalyticsLoader from "./components/GoogleAnalyticsLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sage AI - AI Explained Simply for Older Adults",
  description:
    "Learn about artificial intelligence in plain English. Sage AI helps over-60s understand AI, stay safe online, and use tools like ChatGPT with confidence.",
  metadataBase: new URL("https://hellosage.co.uk"),
  openGraph: {
    title: "Sage AI - AI Explained Simply for Older Adults",
    description:
      "Learn about artificial intelligence in plain English. Sage AI helps over-60s understand AI, stay safe online, and use tools like ChatGPT with confidence.",
    url: "https://hellosage.co.uk",
    siteName: "Sage AI",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sage AI - AI Explained Simply for Older Adults",
    description:
      "Learn about artificial intelligence in plain English. Sage AI helps over-60s understand AI, stay safe online, and use tools like ChatGPT with confidence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/quiz", label: "Quiz" },
  { href: "/try-ai-now", label: "Try AI" },
  { href: "/glossary", label: "Glossary" },
  { href: "/blog", label: "Blog" },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Sage AI",
      url: "https://hellosage.co.uk",
      description: "AI explained simply for older adults",
    },
    {
      "@type": "WebSite",
      name: "Sage AI",
      description: "AI explained simply for older adults",
      url: "https://hellosage.co.uk",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-[#1a1a1a] overflow-x-hidden flex flex-col`}
        style={{ background: "linear-gradient(135deg, #FAFAF5 0%, #F0F5F1 100%)" }}
      >
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-sage-700 focus:rounded-btn focus:shadow-lg"
        >
          Skip to main content
        </a>

        <nav className="px-6 py-5 glass-nav">
          <div className="max-w-content mx-auto flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity text-[#2D5A3D]"
            >
              🌿 Sage AI
            </Link>
            <MobileNav />
          </div>
        </nav>

        <main id="main-content" className="max-w-content mx-auto px-6 py-12 grow">
          {children}
        </main>

        <Footer />
        <CookieConsent />
        <GoogleAnalyticsLoader />
      </body>
    </html>
  );
}
