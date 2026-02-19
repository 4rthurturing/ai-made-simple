import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Which AI Tool Should I Use? Free Quiz | Sage AI",
  description:
    "Take our free quiz to find out which AI tool is best for you. We recommend ChatGPT, Claude, Gemini or another tool based on your needs.",
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
