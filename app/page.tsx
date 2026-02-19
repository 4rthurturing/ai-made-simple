import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sage AI - AI Explained Simply for Older Adults",
  description: "Learn about artificial intelligence in plain English. Sage AI helps over-60s understand AI, stay safe online, and use tools like ChatGPT with confidence.",
};

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <section className="relative text-center py-14 md:py-24 overflow-hidden rounded-[28px] mb-12 bg-gradient-to-br from-[#1E3D29] to-[#2D5A3D]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(212,168,67,0.4),transparent_70%)]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(74,124,89,0.5),transparent_70%)]" />
        </div>
        <div className="relative z-10 px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#D4A843] mb-4">
            For over 60s &amp; their families
          </p>
          <h1 className="text-[38px] md:text-[56px] font-bold tracking-tight mb-5 text-white leading-[1.1]">
            Learn AI Your Way
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-md mx-auto">
            Plain English guides. No jargon, no pressure, no tech skills needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/what-is-ai"
              className="w-full sm:w-auto px-8 py-4 rounded-btn text-lg font-bold text-[#1E3D29] bg-white hover:bg-[#F0F5F1] transition-colors shadow-lg text-center"
            >
              Start with the basics →
            </Link>
            <Link
              href="/learn"
              className="w-full sm:w-auto px-8 py-4 rounded-btn text-lg font-semibold text-white border-2 border-white/50 hover:border-white hover:bg-white/10 transition-colors text-center"
            >
              See the learning path
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {[
          { icon: "📘", label: "10+ Lessons", text: "Short, friendly guides" },
          { icon: "💛", label: "100% Free", text: "No paywalls or upsells" },
          { icon: "🗣️", label: "Plain English", text: "No jargon, ever" },
          { icon: "✅", label: "No Tech Required", text: "Start from zero" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="glass-card rounded-card p-5 text-center reveal-on-scroll"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <p className="text-lg font-semibold text-[#2D5A3D] tracking-tight">
              {stat.label}
            </p>
            <p className="text-base text-[#6B7280]">{stat.text}</p>
          </div>
        ))}
      </section>

      <section className="relative glass-card rounded-card p-8 md:p-10 mb-12 text-left text-body leading-relaxed reveal-on-scroll">
        <div className="soft-blob blob-1 -left-10 -top-10" />
        <div className="soft-blob blob-2 -right-8 -bottom-10" />
        <div className="relative">
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
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 text-left mb-12">
        {[
          {
            href: "/what-is-ai",
            title: "What is AI?",
            icon: "🧠",
            text: "A simple explanation that anyone can understand. No tech degree required.",
          },
          {
            href: "/practical-uses",
            title: "Practical Uses",
            icon: "💡",
            text: "17 real ways AI can help you every day, from writing letters to keeping up with grandchildren.",
          },
          {
            href: "/try-it",
            title: "Try It Yourself",
            icon: "🚀",
            text: "Step-by-step guides to using ChatGPT, Claude, and Google Gemini for the first time.",
          },
          {
            href: "/common-fears",
            title: "Common Fears",
            icon: "🛡️",
            text: "Honest answers to the worries you might have. No sugar-coating.",
          },
          {
            href: "/stay-safe",
            title: "Stay Safe",
            icon: "🔒",
            text: "Scams, deepfakes, privacy settings, and what never to share. Your complete safety guide.",
          },
          {
            href: "/for-families",
            title: "For Families",
            icon: "👨‍👩‍👧‍👦",
            text: "Helping an older relative learn AI? This guide is for you.",
          },
          {
            href: "/glossary",
            title: "Glossary",
            icon: "📖",
            text: "26 AI buzzwords explained simply. Come back here whenever you see a word you do not recognise.",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group glass-card shimmer-border rounded-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,31,21,0.15)] reveal-on-scroll"
          >
            <div className="text-6xl mb-4">{item.icon}</div>
            <h3 className="text-h3 font-semibold mb-3 text-[#2D5A3D] tracking-tight">
              {item.title}
            </h3>
            <p className="text-body text-[#6B7280]">{item.text}</p>
          </Link>
        ))}
      </section>

      <section className="relative overflow-hidden rounded-[28px] p-8 md:p-12 text-left bg-[linear-gradient(135deg,#2D5A3D_0%,#4A7C59_50%,#D4A843_100%)] text-white">
        <div className="soft-blob blob-2 -left-8 -top-10" />
        <div className="soft-blob blob-1 -right-10 -bottom-10" />
        <div className="relative">
          <p className="text-2xl md:text-3xl font-semibold mb-4">
            Not sure where to start?
          </p>
          <p className="text-lg md:text-xl mb-6 text-white/90">
            Begin with &quot;What is AI?&quot; It takes about 3 minutes to read and
            covers everything you need to know.
          </p>
          <Link
            href="/what-is-ai"
            className="inline-flex items-center justify-center px-6 py-3 rounded-btn text-lg font-semibold bg-white text-[#2D5A3D] hover:bg-[#FAFAF5] transition-colors shadow-lg"
          >
            Read the first lesson
          </Link>
        </div>
      </section>
    </div>
  );
}
