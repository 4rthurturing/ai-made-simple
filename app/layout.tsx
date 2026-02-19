import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Made Simple",
  description: "A friendly guide to understanding AI — designed for everyone.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/what-is-ai", label: "What is AI?" },
  { href: "/practical-uses", label: "Practical Uses" },
  { href: "/common-fears", label: "Common Fears" },
  { href: "/glossary", label: "Glossary" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen`}>
        <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              🤖 AI Made Simple
            </Link>
            <div className="flex flex-wrap gap-4 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:underline hover:text-blue-200 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
        <footer className="text-center text-gray-500 text-base py-8 border-t mt-10">
          Made with ❤️ by David & Arthur · © 2026
        </footer>
      </body>
    </html>
  );
}
