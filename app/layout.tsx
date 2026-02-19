import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sage - Your Friendly Guide to AI",
  description:
    "AI explained by humans, for humans. A friendly guide to understanding artificial intelligence, designed for everyone.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/try-ai-now", label: "Try AI" },
  { href: "/glossary", label: "Glossary" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen`}
        style={{ backgroundColor: "#FAFAF5", color: "#1a1a1a" }}
      >
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-sage-700 focus:rounded-btn focus:shadow-lg"
        >
          Skip to main content
        </a>

        <nav
          className="px-6 py-5 shadow-md border-b-4"
          style={{ backgroundColor: "#FAFAF5", borderColor: "#4A7C59" }}
        >
          <div className="max-w-content mx-auto flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity"
              style={{ color: "#2D5A3D" }}
            >
              🌿 Sage
            </Link>
            <div className="flex flex-wrap gap-6 text-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold hover:underline underline-offset-4 transition-colors"
                  style={{ color: "#2D5A3D" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <main id="main-content" className="max-w-content mx-auto px-6 py-12">
          {children}
        </main>

        <footer className="text-center py-10 border-t mt-12" style={{ color: "#6B7280" }}>
          <p className="text-lg">
            🌿 <strong>Sage</strong> · AI explained by humans, for humans.
          </p>
          <p className="text-base mt-2">
            Made with ❤️ by David & Arthur · © 2026
          </p>
        </footer>
      </body>
    </html>
  );
}
