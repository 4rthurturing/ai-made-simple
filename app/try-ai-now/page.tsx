import { Metadata } from "next";
import ChatBot from "./ChatBot";

export const metadata: Metadata = {
  title: "Try AI Now - Sage",
  description: "Chat with a friendly AI assistant and see how AI works first-hand.",
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
    </div>
  );
}
