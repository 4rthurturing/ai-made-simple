"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME =
  "Hello! I'm Sage AI, your friendly AI assistant. Try asking me anything. For example: 'What can AI help me with?' or 'Is AI safe to use?'";

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply ?? "Sorry, something went wrong." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I could not connect. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {/* Disclaimer */}
      <div
        className="rounded-btn p-4 mb-4 text-base"
        style={{ backgroundColor: "#FEF3C7", color: "#92400E" }}
      >
        ⚠️ This is a live AI assistant. It may occasionally make mistakes. Don&apos;t share personal
        information like passwords or bank details.
      </div>

      {/* Chat area */}
      <div
        ref={chatContainerRef}
        className="rounded-card p-6 mb-4 overflow-y-auto"
        style={{ backgroundColor: "#E8F0E9", maxHeight: "480px", minHeight: "200px" }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className="rounded-card px-5 py-3 text-body"
              style={{
                maxWidth: "80%",
                backgroundColor: msg.role === "user" ? "#2D5A3D" : "white",
                color: msg.role === "user" ? "white" : "#1a1a1a",
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start mb-4">
            <div
              className="rounded-card px-5 py-3 text-body"
              style={{ backgroundColor: "white", color: "#6B7280" }}
            >
              Sage AI is thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2 pb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type your message here..."
          className="flex-1 min-w-0 rounded-btn px-4 text-body border-2 focus:outline-none focus:ring-2"
          style={{
            minHeight: "52px",
            borderColor: "#4A7C59",
            backgroundColor: "white",
          }}
          disabled={loading}
        />
        <button
          onClick={send}
          disabled={loading || !input.trim()}
          className="rounded-btn px-5 shrink-0 font-semibold text-body transition-opacity hover:opacity-90 disabled:opacity-50"
          style={{
            minHeight: "52px",
            backgroundColor: "#2D5A3D",
            color: "white",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
