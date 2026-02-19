"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/try-ai-now", label: "Try AI" },
  { href: "/glossary", label: "Glossary" },
  { href: "/blog", label: "Blog" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <div className="hidden md:flex flex-wrap gap-6 text-xl">
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

      {/* Mobile hamburger button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-12 h-12 rounded-lg"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        style={{ color: "#2D5A3D" }}
      >
        {open ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden w-full pt-4 pb-2 border-t mt-4" style={{ borderColor: "#E8F0E9" }}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-semibold text-xl py-2 hover:underline underline-offset-4 transition-colors"
                style={{ color: "#2D5A3D" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
