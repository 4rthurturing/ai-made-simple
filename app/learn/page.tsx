import { Metadata } from "next";
import LearningPath from "./LearningPath";

export const metadata: Metadata = {
  title: "Learn - Sage",
  description: "A step-by-step course to help you understand and use AI with confidence.",
};

export default function LearnPage() {
  return (
    <div>
      <h1 className="text-h1 font-bold mb-4" style={{ color: "#2D5A3D" }}>
        📚 Your AI Learning Path
      </h1>
      <p className="text-body mb-8" style={{ color: "#6B7280" }}>
        Work through these 7 lessons at your own pace. No rush, no tests, no pressure.
        Just clear, friendly explanations to help you feel confident with AI.
      </p>
      <LearningPath />
    </div>
  );
}
