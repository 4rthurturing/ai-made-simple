import Link from "next/link";
import { lessons } from "./lessons";

interface LessonNavProps {
  currentLesson: number;
}

export default function LessonNav({ currentLesson }: LessonNavProps) {
  const prev = lessons.find((l) => l.id === currentLesson - 1);
  const next = lessons.find((l) => l.id === currentLesson + 1);

  return (
    <nav
      className="flex justify-between items-center mt-12 pt-8 border-t-2 gap-4"
      style={{ borderColor: "#E8F0E9" }}
    >
      {prev ? (
        <Link
          href={prev.href}
          className="flex-1 rounded-card p-5 transition-shadow hover:shadow-lg text-left"
          style={{
            backgroundColor: "#E8F0E9",
            minHeight: "48px",
          }}
        >
          <span className="text-sm font-semibold" style={{ color: "#6B7280" }}>
            Previous Lesson
          </span>
          <p className="text-body font-semibold mt-1" style={{ color: "#2D5A3D" }}>
            &larr; Lesson {prev.id}: {prev.title}
          </p>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={next.href}
          className="flex-1 rounded-card p-5 transition-shadow hover:shadow-lg text-right"
          style={{
            backgroundColor: "#E8F0E9",
            minHeight: "48px",
          }}
        >
          <span className="text-sm font-semibold" style={{ color: "#6B7280" }}>
            Next Lesson
          </span>
          <p className="text-body font-semibold mt-1" style={{ color: "#2D5A3D" }}>
            Lesson {next.id}: {next.title} &rarr;
          </p>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
