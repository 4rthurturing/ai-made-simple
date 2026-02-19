import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  try {
    // Convert messages to Anthropic format
    const userMessages = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: m.content,
    }));

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-3-20250219",
        max_tokens: 200,
        system: "You are Sage, a friendly AI assistant helping older adults learn about artificial intelligence. Be warm, patient, use simple language, and give short helpful answers. Use British English. Never use em dashes. Keep answers under 3 sentences where possible.",
        messages: userMessages,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return NextResponse.json(
        { error: "API error", details: err },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text ?? "Sorry, I could not generate a response.";
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
