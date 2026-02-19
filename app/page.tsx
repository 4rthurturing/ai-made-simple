import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sage AI - AI Explained Simply for Older Adults",
  description: "Learn about artificial intelligence in plain English. Sage AI helps over-60s understand AI, stay safe online, and use tools like ChatGPT with confidence.",
};

export default function Home() {
  return (
    <div className="text-center">
      <div className="py-8">
        <p className="text-6xl mb-4">🌿</p>
        <h1 className="text-h1 font-bold mb-4" style={{ color: "#2D5A3D" }}>
          AI Isn&apos;t Scary.
        </h1>
        <h2 className="text-h3 mb-10" style={{ color: "#6B7280" }}>
          Let us show you how it works, in plain English.
        </h2>
      </div>

      <div
        className="rounded-card p-8 mb-12 text-left text-body leading-relaxed"
        style={{ backgroundColor: "#E8F0E9" }}
      >
        <p className="mb-5">
          You&apos;ve probably heard a lot about &quot;AI&quot; lately. It&apos;s
          on the news, your grandchildren are talking about it, and it might
          feel like the world is changing too fast.
        </p>
        <p className="mb-5">
          <strong>Here&apos;s the good news:</strong> AI is just a tool. Like a
          calculator, a washing machine, or the internet. It&apos;s here to
          make your life easier, not harder.
        </p>
        <p>
          This website will explain everything in simple terms. No jargon, no
          tech speak. Just clear, honest answers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <Link
          href="/what-is-ai"
          className="block rounded-card p-8 border-2 hover:shadow-lg transition-all hover:-translate-y-1"
          style={{
            backgroundColor: "#E8F0E9",
            borderColor: "#A3C3A7",
          }}
        >
          <h3
            className="text-h3 font-semibold mb-3"
            style={{ color: "#2D5A3D" }}
          >
            🧠 What is AI?
          </h3>
          <p className="text-body" style={{ color: "#6B7280" }}>
            A simple explanation that anyone can understand. No tech degree
            required.
          </p>
        </Link>

        <Link
          href="/practical-uses"
          className="block rounded-card p-8 border-2 hover:shadow-lg transition-all hover:-translate-y-1"
          style={{
            backgroundColor: "#FFF8E7",
            borderColor: "#E0B84D",
          }}
        >
          <h3
            className="text-h3 font-semibold mb-3"
            style={{ color: "#8B6914" }}
          >
            💡 Practical Uses
          </h3>
          <p className="text-body" style={{ color: "#6B7280" }}>
            17 real ways AI can help you every day, from writing letters to
            keeping up with grandchildren.
          </p>
        </Link>

        <Link
          href="/try-it"
          className="block rounded-card p-8 border-2 hover:shadow-lg transition-all hover:-translate-y-1"
          style={{
            backgroundColor: "#E8F0E9",
            borderColor: "#A3C3A7",
          }}
        >
          <h3
            className="text-h3 font-semibold mb-3"
            style={{ color: "#2D5A3D" }}
          >
            🚀 Try It Yourself
          </h3>
          <p className="text-body" style={{ color: "#6B7280" }}>
            Step-by-step guides to using ChatGPT, Claude, and Google Gemini
            for the first time.
          </p>
        </Link>

        <Link
          href="/common-fears"
          className="block rounded-card p-8 border-2 hover:shadow-lg transition-all hover:-translate-y-1"
          style={{
            backgroundColor: "#EFF6FF",
            borderColor: "#93C5FD",
          }}
        >
          <h3
            className="text-h3 font-semibold mb-3"
            style={{ color: "#1E40AF" }}
          >
            🛡️ Common Fears
          </h3>
          <p className="text-body" style={{ color: "#6B7280" }}>
            Honest answers to the worries you might have. No sugar-coating.
          </p>
        </Link>

        <Link
          href="/stay-safe"
          className="block rounded-card p-8 border-2 hover:shadow-lg transition-all hover:-translate-y-1"
          style={{
            backgroundColor: "#FEF2F2",
            borderColor: "#FCA5A5",
          }}
        >
          <h3
            className="text-h3 font-semibold mb-3"
            style={{ color: "#991B1B" }}
          >
            🔒 Stay Safe
          </h3>
          <p className="text-body" style={{ color: "#6B7280" }}>
            Scams, deepfakes, privacy settings, and what never to share.
            Your complete safety guide.
          </p>
        </Link>

        <Link
          href="/for-families"
          className="block rounded-card p-8 border-2 hover:shadow-lg transition-all hover:-translate-y-1"
          style={{
            backgroundColor: "#FFF8E7",
            borderColor: "#E0B84D",
          }}
        >
          <h3
            className="text-h3 font-semibold mb-3"
            style={{ color: "#8B6914" }}
          >
            👨‍👩‍👧‍👦 For Families
          </h3>
          <p className="text-body" style={{ color: "#6B7280" }}>
            Helping an older relative learn AI? This guide is for you.
          </p>
        </Link>

        <Link
          href="/glossary"
          className="block rounded-card p-8 border-2 hover:shadow-lg transition-all hover:-translate-y-1"
          style={{
            backgroundColor: "#FDF2F8",
            borderColor: "#F9A8D4",
          }}
        >
          <h3
            className="text-h3 font-semibold mb-3"
            style={{ color: "#9D174D" }}
          >
            📖 Glossary
          </h3>
          <p className="text-body" style={{ color: "#6B7280" }}>
            26 AI buzzwords explained simply. Come back here whenever you see
            a word you do not recognise.
          </p>
        </Link>
      </div>

      <div
        className="rounded-card p-8 mt-12 text-body"
        style={{ backgroundColor: "#E8F0E9", color: "#2D5A3D" }}
      >
        <p className="text-h3 font-semibold mb-3">
          Not sure where to start?
        </p>
        <p>
          Begin with{" "}
          <Link
            href="/what-is-ai"
            className="font-semibold underline underline-offset-4"
            style={{ color: "#4A7C59" }}
          >
            &quot;What is AI?&quot;
          </Link>{" "}
          . It takes about 3 minutes to read and covers everything you need
          to know.
        </p>
      </div>
    </div>
  );
}
