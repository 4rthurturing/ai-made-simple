import { articles } from "./articles";
import type { Metadata } from "next";
import BlogIndexClient from "./components/BlogIndexClient";

export const metadata: Metadata = {
  title: "Blog - AI Tips, Guides & Safety Advice | Sage AI",
  description:
    "Practical articles about AI for older adults. Learn how to use ChatGPT, spot scams, stay safe online, and make the most of artificial intelligence.",
};

export default function BlogIndex() {
  return (
    <div className="space-y-14">
      <section className="relative overflow-hidden rounded-card bg-gradient-to-br from-[#1E3D29] to-[#2D5A3D] px-6 py-16 text-white shadow-[0_30px_70px_rgba(15,31,21,0.35)] sm:px-10">
        <div className="hero-blobs" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            Sage AI Journal
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">Blog</h1>
          <p className="text-lg text-white/80 md:text-xl">
            Practical guides, tips, and honest advice about AI. Written in plain
            English for real people.
          </p>
        </div>
      </section>

      <BlogIndexClient articles={articles} />
    </div>
  );
}
