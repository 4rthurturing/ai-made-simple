"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { glossaryTerms } from "./terms";

const categories = ["basics", "tools", "safety", "technical", "practical"] as const;

export default function GlossaryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  const filteredTerms = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matchesCategory = (category: string) =>
      activeCategory === "All" || category === activeCategory;

    return glossaryTerms
      .filter((term) => matchesCategory(term.category))
      .filter((term) => {
        if (!normalizedQuery) return true;
        return (
          term.term.toLowerCase().includes(normalizedQuery) ||
          term.simpleDefinition.toLowerCase().includes(normalizedQuery)
        );
      })
      .slice()
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [activeCategory, query]);

  return (
    <div className="space-y-14">
      <section className="relative overflow-hidden rounded-card bg-gradient-to-br from-[#1E3D29] to-[#2D5A3D] px-6 py-16 text-white shadow-[0_30px_70px_rgba(15,31,21,0.35)] sm:px-10">
        <div className="hero-blobs" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            Sage AI Glossary
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Plain-English AI Glossary
          </h1>
          <p className="text-lg text-white/80 md:text-xl">
            Simple explanations for the AI terms you hear every day. Search,
            filter, and explore at your own pace.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {["All", ...categories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all capitalize ${
                  activeCategory === category
                    ? "border-transparent bg-[#1E3D29] text-white shadow-[0_10px_25px_rgba(15,31,21,0.25)]"
                    : "border-[#C9D8CC] bg-white/70 text-[#2D5A3D] hover:border-[#4A7C59] hover:text-[#1E3D29]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <label className="flex w-full max-w-md items-center gap-3 rounded-full border border-[#C9D8CC] bg-white/80 px-4 py-2 text-sm text-[#2D5A3D] shadow-[0_12px_30px_rgba(15,31,21,0.08)]">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A7C59]">
              Search
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find a term or definition"
              className="w-full bg-transparent text-sm text-[#1E3D29] placeholder:text-[#6B7280] focus:outline-none"
            />
          </label>
        </div>

        {filteredTerms.length === 0 ? (
          <div className="glass-card rounded-card p-10 text-center text-[#4A7C59]">
            No terms match your search yet. Try a different word.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredTerms.map((term) => (
              <Link
                key={term.slug}
                href={`/glossary/${term.slug}`}
                className="group shimmer-border glass-card block rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,31,21,0.16)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-[#1E3D29]">
                    {term.term}
                  </h2>
                  <span className="rounded-full border border-[#C9D8CC] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#4A7C59]">
                    {term.category}
                  </span>
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-[#3D4A44]">
                  {term.simpleDefinition}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#4A7C59]">
                  View term
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
