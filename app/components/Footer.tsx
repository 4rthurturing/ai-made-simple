import Link from "next/link";

const learnLinks = [
  { href: "/what-is-ai", label: "What is AI?" },
  { href: "/ai-you-already-use", label: "AI You Already Use" },
  { href: "/practical-uses", label: "Practical Uses" },
  { href: "/common-fears", label: "Common Fears" },
  { href: "/glossary", label: "Glossary" },
];

const resourceLinks = [
  { href: "/try-ai-now", label: "Try AI" },
  { href: "/blog", label: "Blog" },
  { href: "/stay-safe", label: "Stay Safe" },
  { href: "/for-families", label: "For Families" },
  { href: "/learn", label: "Learning Path" },
];

const aboutLinks = [
  { href: "/about", label: "About Sage" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/accessibility", label: "Accessibility" },
];

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4" style={{ color: "#E0B84D" }}>{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-base hover:underline transition-colors"
              style={{ color: "#D1E1D3" }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2D5A3D", color: "#FFFFFF" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* About section */}
        <div className="mb-10">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            🌿 Sage
          </Link>
          <p className="text-base mt-2" style={{ color: "#D1E1D3" }}>
            AI explained simply for older adults. No jargon, no pressure, just friendly guidance.
          </p>
        </div>

        {/* Navigation columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
          <FooterColumn title="Learn" links={learnLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="About" links={aboutLinks} />
        </div>

        {/* Divider */}
        <div className="border-t pt-6" style={{ borderColor: "#4A7C59" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{ color: "#A3C3A7" }}>
              &copy; 2026 Sage. All rights reserved.
            </p>
            {/* Social links placeholder */}
            <div className="flex gap-4">
              {/* Add social links here when ready */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
