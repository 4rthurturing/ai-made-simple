"use client";

import { useState } from "react";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions: Question[];
}

export default function Quiz({ title, questions }: QuizProps) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  function select(qi: number, oi: number) {
    if (submitted) return;
    const updated = [...answers];
    updated[qi] = oi;
    setAnswers(updated);
  }

  function submit() {
    setSubmitted(true);
  }

  function reset() {
    setAnswers(new Array(questions.length).fill(null));
    setSubmitted(false);
  }

  const score = submitted
    ? answers.reduce<number>((acc, a, i) => acc + (a === questions[i].correct ? 1 : 0), 0)
    : 0;

  const allAnswered = answers.every((a) => a !== null);

  return (
    <section className="mt-12 pt-10 border-t-2" style={{ borderColor: "#E8F0E9" }}>
      <h2 className="text-h2 font-bold mb-2" style={{ color: "#2D5A3D" }}>
        🧩 {title}
      </h2>
      <p className="text-base mb-8" style={{ color: "#6B7280" }}>
        No pressure. Just a fun way to check what you have picked up.
      </p>

      {questions.map((q, qi) => {
        const userAnswer = answers[qi];
        const isCorrect = userAnswer === q.correct;

        return (
          <div
            key={qi}
            className="rounded-card p-6 mb-5"
            style={{
              backgroundColor: submitted
                ? isCorrect
                  ? "#E8F0E9"
                  : "#FEF3C7"
                : "white",
              border: "2px solid #E8F0E9",
            }}
          >
            <p className="text-body font-semibold mb-4" style={{ color: "#2D5A3D" }}>
              {qi + 1}. {q.question}
            </p>
            <div className="space-y-3">
              {q.options.map((opt, oi) => {
                const selected = userAnswer === oi;
                const showCorrect = submitted && oi === q.correct;
                const showWrong = submitted && selected && !isCorrect;

                return (
                  <button
                    key={oi}
                    onClick={() => select(qi, oi)}
                    className="w-full text-left rounded-btn px-5 py-3 text-body transition-colors"
                    style={{
                      minHeight: "48px",
                      backgroundColor: showCorrect
                        ? "#D1E1D3"
                        : showWrong
                        ? "#FDE68A"
                        : selected
                        ? "#E8F0E9"
                        : "#FAFAF5",
                      border: selected && !submitted ? "2px solid #4A7C59" : "2px solid transparent",
                      cursor: submitted ? "default" : "pointer",
                      fontWeight: showCorrect ? 600 : 400,
                    }}
                  >
                    {String.fromCharCode(97 + oi)}) {opt}
                    {showCorrect && " ✓"}
                  </button>
                );
              })}
            </div>
            {submitted && !isCorrect && (
              <p className="mt-3 text-base" style={{ color: "#92400E" }}>
                {q.explanation}
              </p>
            )}
          </div>
        );
      })}

      {submitted ? (
        <div className="rounded-card p-6 text-center" style={{ backgroundColor: "#E8F0E9" }}>
          <p className="text-h3 font-bold mb-2" style={{ color: "#2D5A3D" }}>
            {score === questions.length
              ? `Perfect! You got ${score} out of ${questions.length}! 🎉`
              : `Well done! You got ${score} out of ${questions.length}!`}
          </p>
          <p className="text-base mb-4" style={{ color: "#6B7280" }}>
            {score === questions.length
              ? "You really know your stuff."
              : "Every question you got right is progress. Keep going!"}
          </p>
          <button
            onClick={reset}
            className="rounded-btn px-8 py-3 font-semibold text-body transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#2D5A3D", color: "white", minHeight: "48px" }}
          >
            Try Again
          </button>
        </div>
      ) : (
        <button
          onClick={submit}
          disabled={!allAnswered}
          className="rounded-btn px-8 py-3 font-semibold text-body transition-opacity hover:opacity-90 disabled:opacity-50"
          style={{ backgroundColor: "#2D5A3D", color: "white", minHeight: "48px" }}
        >
          Check My Answers
        </button>
      )}
    </section>
  );
}
