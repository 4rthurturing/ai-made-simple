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
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputBarRef = useRef<HTMLDivElement>(null);
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

  // On iOS, the keyboard doesn't shrink the layout viewport.
  // We detect it via visualViewport and fix-position the input bar.
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    function onResize() {
      const bar = inputBarRef.current;
      if (!bar) return;

      // If visual viewport is significantly smaller than window, keyboard is open
      const heightDiff = window.innerHeight - vv!.height;
      if (heightDiff > 150) {
        setKeyboardOpen(true);
        bar.style.position = "fixed";
        bar.style.bottom = `${heightDiff}px`;
        bar.style.left = "0";
        bar.style.right = "0";
        bar.style.zIndex = "9999";
        bar.style.padding = "8px 16px";
        bar.style.backgroundColor = "#FAFAF5";
        bar.style.borderTop = "1px solid rgba(74,124,89,0.2)";
      } else {
        setKeyboardOpen(false);
        bar.style.position = "";
        bar.style.bottom = "";
        bar.style.left = "";
        bar.style.right = "";
        bar.style.zIndex = "";
        bar.style.padding = "";
        bar.style.backgroundColor = "";
        bar.style.borderTop = "";
      }
    }

    vv.addEventListener("resize", onResize);
    vv.addEventListener("scroll", onResize);
    return () => {
      vv.removeEventListener("resize", onResize);
      vv.removeEventListener("scroll", onResize);
    };
  }, []);

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
    <div className="flex flex-col" style={{ minHeight: "min(70vh, 600px)" }}>
      {/* Disclaimer */}
      <div
        className="rounded-btn p-4 mb-4 text-base shrink-0"
        style={{ backgroundColor: "#FEF3C7", color: "#92400E" }}
      >
        ⚠️ This is a live AI assistant. It may occasionally make mistakes. Don&apos;t share personal
        information like passwords or bank details.
      </div>

      {/* Chat area - grows to fill space */}
      <div
        ref={chatContainerRef}
        className="rounded-card p-6 mb-4 overflow-y-auto grow"
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

      {/* Spacer when keyboard is open to prevent content jump */}
      {keyboardOpen && <div style={{ height: "60px" }} />}

      {/* Input - always at bottom of chat section */}
      <div ref={inputBarRef} className="flex gap-3 shrink-0">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type your message here..."
          className="flex-1 rounded-btn px-5 text-body border-2 focus:outline-none focus:ring-2"
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
          className="rounded-btn px-8 font-semibold text-body transition-opacity hover:opacity-90 disabled:opacity-50"
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
