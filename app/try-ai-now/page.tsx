import { Metadata } from "next";
import ChatBot from "./ChatBot";
import LessonNav from "../components/LessonNav";

export const metadata: Metadata = {
  title: "Try AI Now - Chat with AI in a Safe Space | Sage",
  description: "Ready to try AI for yourself? Have a conversation with our friendly chatbot in a safe, private space. No sign-up needed.",
};

export default function TryAIPage() {
  return (
    <div>
      <h1 className="text-h1 font-bold mb-4" style={{ color: "#2D5A3D" }}>
        💬 Try AI Now
      </h1>
      <p className="text-body mb-8" style={{ color: "#6B7280" }}>
        Have a conversation with a real AI. Type anything you like and see how it responds.
      </p>
      <ChatBot />

      <LessonNav currentLesson={3} />
    </div>
  );
}
