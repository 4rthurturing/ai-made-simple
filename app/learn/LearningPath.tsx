"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const lessons = [
  { id: 1, title: "What is AI?", href: "/what-is-ai", desc: "Understand the basics in plain English." },
  { id: 2, title: "AI You Already Use", href: "/what-is-ai#everyday-ai", desc: "You probably use AI every day without knowing it." },
  { id: 3, title: "Talking to AI", href: "/try-ai-now", desc: "Have a real conversation with an AI assistant." },
  { id: 4, title: "Practical Uses", href: "/practical-uses", desc: "Useful things AI can do for you right now." },
  { id: 5, title: "Staying Safe", href: "/stay-safe", desc: "Simple rules to keep yourself safe online." },
  { id: 6, title: "Common Fears Answered", href: "/common-fears", desc: "Honest answers to the worries people have." },
  { id: 7, title: "Helping Others Learn", href: "/for-families", desc: "Share what you have learnt with family and friends." },
];

const STORAGE_KEY = "sage-completed-lessons";

export default function LearningPath() {
  const [completed, setCompleted] = useState<number[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setCompleted(JSON.parse(stored));
    } catch { /* ignore */ }
  }, []);

  function markComplete(id: number) {
    const updated = completed.includes(id) ? completed : [...completed, id];
    setCompleted(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  const progress = Math.round((completed.length / lessons.length) * 100);

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between text-base mb-2" style={{ color: "#6B7280" }}>
          <span>{completed.length} of {lessons.length} lessons completed</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full rounded-full h-4" style={{ backgroundColor: "#E8F0E9" }}>
          <div
            className="h-4 rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: "#4A7C59" }}
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-6 top-0 bottom-0 w-1 rounded-full"
          style={{ backgroundColor: "#E8F0E9" }}
        />

        {lessons.map((lesson) => {
          const done = completed.includes(lesson.id);
          return (
            <div key={lesson.id} className="relative flex items-start mb-6 last:mb-0">
              {/* Circle */}
              <div
                className="relative z-10 flex items-center justify-center rounded-full font-bold text-lg shrink-0"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: done ? "#4A7C59" : "white",
                  color: done ? "white" : "#2D5A3D",
                  border: done ? "none" : "3px solid #4A7C59",
                }}
              >
                {done ? "✓" : lesson.id}
              </div>

              {/* Card */}
              <Link
                href={lesson.href}
                onClick={() => markComplete(lesson.id)}
                className="ml-5 flex-1 rounded-card p-6 transition-shadow hover:shadow-lg block"
                style={{
                  backgroundColor: done ? "#E8F0E9" : "white",
                  border: "2px solid #E8F0E9",
                }}
              >
                <h3 className="text-h3 font-semibold mb-1" style={{ color: "#2D5A3D" }}>
                  {lesson.title}
                </h3>
                <p className="text-base" style={{ color: "#6B7280" }}>
                  {lesson.desc}
                </p>
                {done && (
                  <span className="inline-block mt-2 text-sm font-semibold" style={{ color: "#4A7C59" }}>
                    ✓ Completed
                  </span>
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
