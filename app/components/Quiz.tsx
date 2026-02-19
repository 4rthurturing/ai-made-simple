"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { lessons } from "./lessons";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions: Question[];
  lessonNumber?: number;
}

const STREAK_KEY = "sage-quiz-streak";

function getStreak(): number {
  try {
    return parseInt(localStorage.getItem(STREAK_KEY) || "0", 10);
  } catch {
    return 0;
  }
}

function incrementStreak(): number {
  const next = getStreak() + 1;
  try {
    localStorage.setItem(STREAK_KEY, String(next));
  } catch { /* ignore */ }
  return next;
}

function Confetti() {
  const [particles, setParticles] = useState<Array<{
    id: number; x: number; delay: number; color: string; size: number;
  }>>([]);

  useEffect(() => {
    const colours = ["#2D5A3D", "#4A7C59", "#E8F0E9", "#FCD34D", "#F97316", "#8B5CF6", "#EC4899"];
    const items = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.6,
      color: colours[Math.floor(Math.random() * colours.length)],
      size: 6 + Math.random() * 8,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: 0,
            width: p.size,
            height: p.size,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            backgroundColor: p.color,
            animation: `confettiFall 2.5s ease-out ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
}

export default function Quiz({ title, questions, lessonNumber }: QuizProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [streak, setStreak] = useState(0);
  const [shakeWrong, setShakeWrong] = useState(false);
  const quizTopRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setStreak(getStreak());
  }, []);

  const q = questions[currentQ];
  const total = questions.length;
  const progress = finished ? 100 : Math.round((currentQ / total) * 100);

  const nextLesson = lessonNumber
    ? lessons.find((l) => l.id === lessonNumber + 1)
    : undefined;

  function selectAnswer(oi: number) {
    if (showFeedback) return;
    setSelected(oi);
    setShowFeedback(true);

    const correct = oi === q.correct;
    if (correct) {
      setScore((s) => s + 1);
    } else {
      setShakeWrong(true);
      setTimeout(() => setShakeWrong(false), 500);
    }
  }

  function nextQuestion() {
    if (currentQ + 1 >= total) {
      const finalScore = score;
      setFinished(true);
      const newStreak = incrementStreak();
      setStreak(newStreak);
      if (finalScore === total) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
      setTimeout(() => {
        quizTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setShowFeedback(false);
      setTimeout(() => {
        quizTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }

  function reset() {
    setCurrentQ(0);
    setSelected(null);
    setShowFeedback(false);
    setScore(0);
    setFinished(false);
    setShowConfetti(false);
  }

  const getMessage = useCallback(() => {
    if (score === total) return "Perfect score! You really know your stuff! 🌟";
    if (score === total - 1) return "Brilliant! Almost perfect! 🎉";
    if (score === total - 2) return "Well done! You're getting there! 👍";
    return "Good effort! Try reading the page again and have another go. 💪";
  }, [score, total]);

  return (
    <section ref={quizTopRef} className="mt-12 pt-10 border-t-2" style={{ borderColor: "#E8F0E9" }}>
      {showConfetti && <Confetti />}

      <h2 className="text-h2 font-bold mb-2" style={{ color: "#2D5A3D" }}>
        🧩 {title}
      </h2>
      <p className="text-base mb-6" style={{ color: "#6B7280" }}>
        No pressure. Just a fun way to check what you have picked up.
      </p>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2" style={{ color: "#6B7280" }}>
          <span>
            {finished
              ? `Finished!`
              : `Question ${currentQ + 1} of ${total}`}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="w-full rounded-full h-3" style={{ backgroundColor: "#E8F0E9" }}>
          <div
            className="h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: "#4A7C59" }}
          />
        </div>
      </div>

      {!finished ? (
        <div
          className="rounded-card p-6"
          style={{ backgroundColor: "white", border: "2px solid #E8F0E9" }}
        >
          <p className="text-body font-semibold mb-6" style={{ color: "#2D5A3D" }}>
            {q.question}
          </p>

          <div className="space-y-3">
            <style>{`
              @keyframes shakeAnim {
                0%, 100% { transform: translateX(0); }
                20% { transform: translateX(-6px); }
                40% { transform: translateX(6px); }
                60% { transform: translateX(-4px); }
                80% { transform: translateX(4px); }
              }
              @keyframes correctPulse {
                0% { box-shadow: 0 0 0 0 rgba(74,124,89,0.4); }
                70% { box-shadow: 0 0 0 10px rgba(74,124,89,0); }
                100% { box-shadow: 0 0 0 0 rgba(74,124,89,0); }
              }
            `}</style>
            {q.options.map((opt, oi) => {
              const isSelected = selected === oi;
              const isCorrect = oi === q.correct;
              const showCorrectHighlight = showFeedback && isCorrect;
              const showWrongHighlight = showFeedback && isSelected && !isCorrect;

              let bg = "#FAFAF5";
              let border = "2px solid transparent";
              let fontWeight = 400;

              if (showCorrectHighlight) {
                bg = "#D1E1D3";
                border = "2px solid #4A7C59";
                fontWeight = 600;
              } else if (showWrongHighlight) {
                bg = "#FDE68A";
                border = "2px solid #F59E0B";
              } else if (isSelected && !showFeedback) {
                bg = "#E8F0E9";
                border = "2px solid #4A7C59";
              }

              return (
                <button
                  key={oi}
                  onClick={() => selectAnswer(oi)}
                  disabled={showFeedback}
                  className="w-full text-left rounded-btn px-5 py-4 text-body transition-all"
                  style={{
                    minHeight: "48px",
                    backgroundColor: bg,
                    border,
                    fontWeight,
                    cursor: showFeedback ? "default" : "pointer",
                    animation: showWrongHighlight && shakeWrong
                      ? "shakeAnim 0.5s ease"
                      : showCorrectHighlight
                        ? "correctPulse 0.6s ease"
                        : "none",
                  }}
                >
                  <span className="font-semibold mr-2" style={{ color: "#4A7C59" }}>
                    {String.fromCharCode(65 + oi)}.
                  </span>
                  {opt}
                  {showCorrectHighlight && " ✓"}
                </button>
              );
            })}
          </div>

          {showFeedback && (
            <div
              className="rounded-btn p-4 mt-4"
              style={{
                backgroundColor: selected === q.correct ? "#E8F0E9" : "#FEF3C7",
                border: `2px solid ${selected === q.correct ? "#4A7C59" : "#F59E0B"}`,
              }}
            >
              <p
                className="font-semibold mb-1"
                style={{ color: selected === q.correct ? "#2D5A3D" : "#92400E" }}
              >
                {selected === q.correct ? "Correct! ✓" : "Not quite."}
              </p>
              <p className="text-base" style={{ color: "#6B7280" }}>
                {q.explanation}
              </p>
            </div>
          )}

          {showFeedback && (
            <button
              onClick={nextQuestion}
              className="mt-6 rounded-btn px-8 py-3 font-semibold text-body transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#2D5A3D",
                color: "white",
                minHeight: "48px",
              }}
            >
              {currentQ + 1 >= total ? "See Results" : "Next Question"}
            </button>
          )}
        </div>
      ) : (
        <div className="rounded-card p-8 text-center" style={{ backgroundColor: "#E8F0E9" }}>
          <p className="text-4xl mb-4">
            {score === total ? "🌟" : score >= total - 1 ? "🎉" : score >= total - 2 ? "👍" : "💪"}
          </p>
          <p className="text-h3 font-bold mb-2" style={{ color: "#2D5A3D" }}>
            {score} out of {total}
          </p>
          <p className="text-body mb-4" style={{ color: "#2D5A3D" }}>
            {getMessage()}
          </p>

          {streak > 0 && (
            <p className="text-sm mb-4" style={{ color: "#4A7C59" }}>
              🔥 You have completed {streak} {streak === 1 ? "quiz" : "quizzes"}!
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <button
              onClick={reset}
              className="rounded-btn px-8 py-3 font-semibold text-body transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "white",
                color: "#2D5A3D",
                border: "2px solid #2D5A3D",
                minHeight: "48px",
              }}
            >
              Try Again
            </button>

            {nextLesson && (
              <Link
                href={nextLesson.href}
                className="rounded-btn px-8 py-3 font-semibold text-body transition-opacity hover:opacity-90 text-center"
                style={{
                  backgroundColor: "#2D5A3D",
                  color: "white",
                  minHeight: "48px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Lesson {nextLesson.id}: {nextLesson.title} &rarr;
              </Link>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
