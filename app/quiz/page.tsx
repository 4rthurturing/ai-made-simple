"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type ToolKey = "chatgpt" | "claude" | "gemini" | "copilot" | "perplexity";

type Option = {
  label: string;
  scores: Partial<Record<ToolKey, number>>;
  reasons?: Partial<Record<ToolKey, string[]>>;
};

type Question = {
  id: string;
  prompt: string;
  options: Option[];
};

const toolOrder: ToolKey[] = [
  "chatgpt",
  "claude",
  "gemini",
  "copilot",
  "perplexity",
];

const toolMeta: Record<
  ToolKey,
  { name: string; description: string; whyFallback: string[] }
> = {
  chatgpt: {
    name: "ChatGPT",
    description:
      "A friendly all‑rounder that is easy to start with and great for everyday help, writing, and learning.",
    whyFallback: [
      "You want something straightforward and helpful for everyday tasks.",
      "A friendly tone and clear explanations matter to you.",
    ],
  },
  claude: {
    name: "Claude",
    description:
      "Great for thoughtful, detailed writing and clear explanations, with a focus on calm, reliable responses.",
    whyFallback: [
      "You like detailed, well‑structured answers.",
      "You value careful, thoughtful responses.",
    ],
  },
  gemini: {
    name: "Gemini",
    description:
      "A strong choice if you already use Google tools and want AI that fits neatly into that world.",
    whyFallback: [
      "You already use Google services or want a simple, familiar experience.",
      "You want an AI that supports day‑to‑day tasks without fuss.",
    ],
  },
  copilot: {
    name: "Copilot",
    description:
      "Best if you are comfortable with tech and want lots of features, especially inside Microsoft tools.",
    whyFallback: [
      "You are comfortable with technology and like extra features.",
      "You want quick, efficient answers.",
    ],
  },
  perplexity: {
    name: "Perplexity",
    description:
      "Ideal for fast, factual answers and research-style responses with sources.",
    whyFallback: [
      "You prefer short, factual answers and research‑style help.",
      "You want reliable answers you can double‑check.",
    ],
  },
};

const questions: Question[] = [
  {
    id: "purpose",
    prompt: "What do you mainly want to use AI for?",
    options: [
      {
        label: "Writing help",
        scores: { claude: 3, chatgpt: 2 },
        reasons: {
          claude: ["You want strong writing help."],
          chatgpt: ["Writing support is a top priority for you."],
        },
      },
      {
        label: "Research and answers",
        scores: { perplexity: 3, gemini: 2, chatgpt: 1 },
        reasons: {
          perplexity: ["You want research‑style answers."],
          gemini: ["You want quick answers to questions."],
          chatgpt: ["You want a general tool for answers."],
        },
      },
      {
        label: "Creative projects",
        scores: { chatgpt: 3, claude: 2 },
        reasons: {
          chatgpt: ["You want help with creative ideas."],
          claude: ["Creative writing is important to you."],
        },
      },
      {
        label: "Learning something new",
        scores: { chatgpt: 2, perplexity: 2, gemini: 1 },
        reasons: {
          chatgpt: ["You want a friendly learning partner."],
          perplexity: ["You value clear explanations backed by facts."],
          gemini: ["You want straightforward learning support."],
        },
      },
      {
        label: "Everyday tasks",
        scores: { chatgpt: 2, copilot: 2, gemini: 1 },
        reasons: {
          chatgpt: ["You want help with everyday tasks."],
          copilot: ["You want practical, task‑focused help."],
          gemini: ["You want a simple, useful assistant."],
        },
      },
    ],
  },
  {
    id: "comfort",
    prompt: "How comfortable are you with technology?",
    options: [
      {
        label: "Complete beginner",
        scores: { chatgpt: 2, gemini: 2, claude: 1 },
        reasons: {
          chatgpt: ["You want something easy to start with."],
          gemini: ["Simplicity matters to you."],
          claude: ["You want a calm, easy experience."],
        },
      },
      {
        label: "I can use email and the internet",
        scores: { chatgpt: 2, gemini: 1 },
        reasons: {
          chatgpt: ["You want a friendly, familiar experience."],
          gemini: ["You want something straightforward."],
        },
      },
      {
        label: "Fairly comfortable",
        scores: { claude: 2, chatgpt: 1, copilot: 1 },
        reasons: {
          claude: ["You can handle more detailed answers."],
          chatgpt: ["You want a flexible all‑rounder."],
          copilot: ["You are comfortable with extra features."],
        },
      },
      {
        label: "Very comfortable",
        scores: { copilot: 2, perplexity: 1, claude: 1 },
        reasons: {
          copilot: ["You are happy to explore lots of options."],
          perplexity: ["You can handle research‑style tools."],
          claude: ["You like detailed responses."],
        },
      },
    ],
  },
  {
    id: "simplicity",
    prompt: "Do you prefer simplicity or lots of features?",
    options: [
      {
        label: "Keep it simple",
        scores: { chatgpt: 2, gemini: 2 },
        reasons: {
          chatgpt: ["You prefer a simple, easy interface."],
          gemini: ["You want something uncomplicated."],
        },
      },
      {
        label: "A good balance",
        scores: { claude: 2, chatgpt: 1 },
        reasons: {
          claude: ["You like a balanced set of features."],
          chatgpt: ["A flexible tool suits you."],
        },
      },
      {
        label: "I like lots of options",
        scores: { copilot: 2, perplexity: 1, claude: 1 },
        reasons: {
          copilot: ["You want a feature‑rich tool."],
          perplexity: ["You like deeper, research‑style options."],
          claude: ["You can handle more advanced features."],
        },
      },
    ],
  },
  {
    id: "images",
    prompt: "Would you like your AI to understand images too?",
    options: [
      {
        label: "Yes, that sounds useful",
        scores: { chatgpt: 2, gemini: 2, copilot: 1 },
        reasons: {
          chatgpt: ["You want image understanding."],
          gemini: ["Images are useful for you."],
          copilot: ["You want advanced features."],
        },
      },
      {
        label: "Not bothered",
        scores: { claude: 1, perplexity: 1 },
        reasons: {
          claude: ["Images are not essential for you."],
          perplexity: ["You care more about text answers."],
        },
      },
      {
        label: "What does that mean?",
        scores: { chatgpt: 1, gemini: 1 },
        reasons: {
          chatgpt: ["You want simple explanations."],
          gemini: ["You want things kept straightforward."],
        },
      },
    ],
  },
  {
    id: "privacy",
    prompt: "How important is privacy to you?",
    options: [
      {
        label: "Very important",
        scores: { claude: 2, perplexity: 1 },
        reasons: {
          claude: ["Privacy matters a lot to you."],
          perplexity: ["You want answers you can verify."],
        },
      },
      {
        label: "Somewhat important",
        scores: { chatgpt: 1, claude: 1 },
        reasons: {
          chatgpt: ["You want a trusted, mainstream tool."],
          claude: ["You value thoughtful responses."],
        },
      },
      {
        label: "I have not thought about it",
        scores: { chatgpt: 1, gemini: 1 },
        reasons: {
          chatgpt: ["You want a well‑known option."],
          gemini: ["You want a familiar experience."],
        },
      },
    ],
  },
  {
    id: "pay",
    prompt: "Would you pay for a better AI experience?",
    options: [
      {
        label: "I want free only",
        scores: { gemini: 2, perplexity: 1 },
        reasons: {
          gemini: ["Free access is important to you."],
          perplexity: ["You want useful answers without paying."],
        },
      },
      {
        label: "I might pay if it is worth it",
        scores: { chatgpt: 1, claude: 1 },
        reasons: {
          chatgpt: ["You are open to paid upgrades."],
          claude: ["You might pay for quality."],
        },
      },
      {
        label: "Happy to pay for quality",
        scores: { claude: 2, chatgpt: 1 },
        reasons: {
          claude: ["You are happy to pay for quality."],
          chatgpt: ["You want a premium experience."],
        },
      },
    ],
  },
  {
    id: "google",
    prompt: "Do you already use Google products (Gmail, Google Docs)?",
    options: [
      {
        label: "Yes, all the time",
        scores: { gemini: 3 },
        reasons: {
          gemini: ["You already live in the Google ecosystem."],
        },
      },
      {
        label: "Sometimes",
        scores: { chatgpt: 1, gemini: 1 },
        reasons: {
          chatgpt: ["You want a flexible option beyond one brand."],
          gemini: ["You use Google often enough to benefit."],
        },
      },
      {
        label: "Not really",
        scores: { chatgpt: 1, claude: 1 },
        reasons: {
          chatgpt: ["You want a general‑purpose tool."],
          claude: ["You are open to alternatives outside Google."],
        },
      },
    ],
  },
  {
    id: "style",
    prompt: "What kind of answers do you prefer?",
    options: [
      {
        label: "Short and to the point",
        scores: { perplexity: 2, copilot: 1 },
        reasons: {
          perplexity: ["You prefer short, factual answers."],
          copilot: ["You like concise responses."],
        },
      },
      {
        label: "Detailed and thorough",
        scores: { claude: 2, chatgpt: 1 },
        reasons: {
          claude: ["You value detailed, thorough answers."],
          chatgpt: ["You like clear explanations."],
        },
      },
      {
        label: "Friendly and conversational",
        scores: { chatgpt: 2, gemini: 1 },
        reasons: {
          chatgpt: ["You want a friendly, conversational tone."],
          gemini: ["A warm, simple style appeals to you."],
        },
      },
    ],
  },
];

const articleLinks = [
  { href: "/blog/what-is-chatgpt-simple", label: "What is ChatGPT?" },
  { href: "/blog/what-is-claude-ai", label: "What is Claude AI?" },
  { href: "/blog/what-is-gemini-google", label: "What is Gemini (Google)?" },
  { href: "/blog/free-ai-tools-2026", label: "Free AI tools for 2026" },
];

const totalQuestions = questions.length;

function dedupe(items: string[]) {
  return Array.from(new Set(items));
}

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [copied, setCopied] = useState(false);

  const progress =
    currentIndex < totalQuestions
      ? ((currentIndex + 1) / totalQuestions) * 100
      : 100;

  const { topTool, runnerUp, reasons } = useMemo(() => {
    const totals = toolOrder.reduce(
      (acc, key) => {
        acc[key] = 0;
        return acc;
      },
      {} as Record<ToolKey, number>
    );

    const reasonMap = toolOrder.reduce(
      (acc, key) => {
        acc[key] = [] as string[];
        return acc;
      },
      {} as Record<ToolKey, string[]>
    );

    answers.forEach((optionIndex, questionIndex) => {
      const option = questions[questionIndex]?.options[optionIndex];
      if (!option) return;
      Object.entries(option.scores).forEach(([key, value]) => {
        if (!value) return;
        totals[key as ToolKey] += value;
      });
      if (option.reasons) {
        Object.entries(option.reasons).forEach(([key, value]) => {
          if (!value) return;
          reasonMap[key as ToolKey].push(...value);
        });
      }
    });

    const ranked = toolOrder
      .map((key) => ({ key, score: totals[key] }))
      .sort(
        (a, b) =>
          b.score - a.score || toolOrder.indexOf(a.key) - toolOrder.indexOf(b.key)
      );

    const top = ranked[0]?.key ?? "chatgpt";
    const second = ranked[1]?.key ?? "claude";

    const topReasons = dedupe(reasonMap[top]);

    return {
      topTool: top,
      runnerUp: second,
      reasons: topReasons.length ? topReasons.slice(0, 3) : toolMeta[top].whyFallback,
    };
  }, [answers]);

  const handleOption = (optionIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
    window.setTimeout(() => {
      setCurrentIndex((prev) => Math.min(prev + 1, totalQuestions));
      setIsTransitioning(false);
    }, 220);
  };

  const handleRetake = () => {
    setAnswers([]);
    setCurrentIndex(0);
    setCopied(false);
  };

  const handleShare = async () => {
    const text = `My Sage AI quiz result: ${toolMeta[topTool].name} (runner‑up: ${toolMeta[runnerUp].name}). Try the quiz at hellosage.co.uk/quiz.`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="space-y-10">
      <section
        className="rounded-card px-6 py-10 md:px-10 md:py-14 text-white shadow-xl"
        style={{
          background: "linear-gradient(135deg, #1E3D29 0%, #2D5A3D 100%)",
        }}
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">
            Sage AI Quiz
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Which AI Tool is Right for You?
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Answer a few quick questions and we will recommend the best AI for
            your needs.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm md:text-base">
          <p className="font-semibold text-[#1E3D29]">
            {currentIndex < totalQuestions
              ? `Question ${currentIndex + 1} of ${totalQuestions}`
              : `Results`}
          </p>
          <p className="text-[#2D5A3D]">{Math.round(progress)}% complete</p>
        </div>
        <div className="h-3 w-full rounded-full bg-white/70 border border-white/60 shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#1E3D29] to-[#2D5A3D] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </section>

      {currentIndex < totalQuestions ? (
        <section
          className={`glass-card rounded-card p-6 md:p-10 shadow-xl border border-white/40 transition-all duration-300 ${
            isTransitioning ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1E3D29]">
              {currentQuestion.prompt}
            </h2>
            <div className="grid gap-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => handleOption(index)}
                  className="min-h-[56px] rounded-btn px-5 py-4 text-left text-lg font-semibold bg-white/80 border border-white/60 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-[#1E3D29]"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="space-y-6">
          <div className="glass-card rounded-card p-6 md:p-10 shadow-xl border border-white/40">
            <p className="text-sm uppercase tracking-[0.2em] text-[#2D5A3D]">
              Your Recommendation
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1E3D29]">
              {toolMeta[topTool].name}
            </h2>
            <p className="mt-4 text-lg text-[#1E3D29]">
              {toolMeta[topTool].description}
            </p>
            <div className="mt-6 space-y-3">
              <p className="font-semibold text-[#1E3D29]">Why this suits you</p>
              <ul className="space-y-2 text-[#2D5A3D]">
                {reasons.map((reason) => (
                  <li key={reason}>• {reason}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-card p-6 md:p-8 bg-white/70 border border-white/60 shadow-lg">
            <p className="text-sm uppercase tracking-[0.2em] text-[#2D5A3D]">
              Runner‑Up
            </p>
            <p className="mt-2 text-2xl font-semibold text-[#1E3D29]">
              {toolMeta[runnerUp].name}
            </p>
            <p className="mt-3 text-[#1E3D29]">
              {toolMeta[runnerUp].description}
            </p>
          </div>

          <div className="rounded-card p-6 md:p-8 bg-white/70 border border-white/60 shadow-lg">
            <p className="text-sm uppercase tracking-[0.2em] text-[#2D5A3D]">
              Helpful Articles
            </p>
            <div className="mt-4 grid gap-3">
              {articleLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="min-h-[56px] rounded-btn px-5 py-4 text-lg font-semibold bg-white/80 border border-white/60 shadow-sm hover:shadow-md transition-all text-[#1E3D29]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={handleRetake}
              className="min-h-[56px] rounded-btn px-6 py-4 text-lg font-semibold bg-[#1E3D29] text-white shadow-md hover:bg-[#173021] transition-colors"
            >
              Retake Quiz
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="min-h-[56px] rounded-btn px-6 py-4 text-lg font-semibold bg-white/80 border border-white/60 shadow-md hover:shadow-lg transition-all text-[#1E3D29]"
            >
              {copied ? "Result copied" : "Share result"}
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
