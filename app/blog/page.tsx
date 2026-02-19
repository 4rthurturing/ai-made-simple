import Link from "next/link";
import { articles } from "./articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - AI Tips, Guides & Safety Advice | Sage",
  description:
    "Practical articles about AI for older adults. Learn how to use ChatGPT, spot scams, stay safe online, and make the most of artificial intelligence.",
};

export default function BlogIndex() {
  return (
    <div>
      <h1 className="text-h1 font-bold mb-4" style={{ color: "#2D5A3D" }}>
        📝 Blog
      </h1>
      <p className="text-body mb-10" style={{ color: "#6B7280" }}>
        Practical guides, tips, and honest advice about AI. Written in plain
        English for real people.
      </p>

      <div className="grid gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block rounded-card p-8 hover:shadow-lg transition-shadow"
            style={{ backgroundColor: "#E8F0E9" }}
          >
            <h2
              className="text-h3 font-semibold mb-2"
              style={{ color: "#2D5A3D" }}
            >
              {article.title}
            </h2>
            <p className="text-body mb-3" style={{ color: "#4a4a4a" }}>
              {article.description}
            </p>
            <p className="text-base" style={{ color: "#6B7280" }}>
              {new Date(article.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
