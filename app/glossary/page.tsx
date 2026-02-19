import type { Metadata } from "next";
import GlossaryIndexClient from "./components/GlossaryIndexClient";

export const metadata: Metadata = {
  title: "AI Glossary - Technical Terms in Plain English | Sage AI",
  description:
    "Confused by AI jargon? Our glossary explains terms like algorithm, machine learning, and chatbot in everyday language anyone can understand.",
};

export default function GlossaryPage() {
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

      <GlossaryIndexClient />
    </div>
  );
}
