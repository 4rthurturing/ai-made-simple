"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Article } from "../articles";
import {
  formatDate,
  getCategoryList,
  normalizeKeyword,
  pickTopKeywords,
  readingTimeFromBody,
} from "../utils";

type Props = {
  articles: Article[];
};

export default function BlogIndexClient({ articles }: Props) {
  const CATEGORIES: Record<string, string[]> = {
    "Getting Started": ["chatgpt", "beginners", "simple", "what is", "how to use"],
    "AI Tools": ["claude", "gemini", "copilot", "perplexity", "free ai", "tools"],
    "Practical Uses": ["recipe", "travel", "letter", "writing", "gardening", "photos", "family history", "crossword", "hobbi", "cooking", "learn"],
    "Safety & Privacy": ["safe", "scam", "privacy", "listening", "banking", "deepfake", "voice clon", "what not to tell"],
    "Tips & Guides": ["mistakes", "prompt", "talk to ai", "tips"],
  };

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All") return articles;
    const patterns = CATEGORIES[activeCategory] || [];
    return articles.filter((article) => {
      const text = [...article.keywords, article.title, article.slug].join(" ").toLowerCase();
      return patterns.some((p) => text.includes(p));
    });
  }, [activeCategory, articles]);

  const featured = filteredArticles[0];
  const rest = filteredArticles.slice(1);

  return (
    <div className="space-y-10">
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
        {["All", ...Object.keys(CATEGORIES)].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
              activeCategory === category
                ? "border-transparent bg-[#1E3D29] text-white shadow-[0_10px_25px_rgba(15,31,21,0.25)]"
                : "border-[#C9D8CC] bg-white/70 text-[#2D5A3D] hover:border-[#4A7C59] hover:text-[#1E3D29]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {featured ? (
        <Link
          href={`/blog/${featured.slug}`}
          className="group shimmer-border glass-card block rounded-card p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,31,21,0.18)]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4A7C59]">
            Featured Article
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#1E3D29] md:text-4xl">
            {featured.title}
          </h2>
          <p className="mt-3 text-lg text-[#3D4A44]">
            {featured.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#6B7280]">
            <span>{formatDate(featured.date)}</span>
            <span>•</span>
            <span>{readingTimeFromBody(featured.body)} min read</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {pickTopKeywords(featured.keywords, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#C9D8CC] bg-white/70 px-3 py-1 text-xs font-semibold text-[#2D5A3D]"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>
      ) : (
        <div className="glass-card rounded-card p-10 text-center text-[#4A7C59]">
          No articles match this category yet. Check back soon.
        </div>
      )}

      {rest.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group shimmer-border glass-card block rounded-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,31,21,0.16)]"
            >
              <h3 className="text-2xl font-semibold text-[#1E3D29]">
                {article.title}
              </h3>
              <p className="mt-2 text-base text-[#3D4A44]">
                {article.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[#6B7280]">
                <span>{formatDate(article.date)}</span>
                <span>•</span>
                <span>{readingTimeFromBody(article.body)} min read</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {pickTopKeywords(article.keywords).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#C9D8CC] bg-white/70 px-3 py-1 text-xs font-semibold text-[#2D5A3D]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
