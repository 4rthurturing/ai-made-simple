import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Try AI Activities | Sage",
  description: "Simple AI activities and exercises to help you get hands-on experience with artificial intelligence. No technical knowledge needed.",
};

export default function TryIt() {
  return (
    <div>
      <h1 className="text-h1 font-bold mb-4" style={{ color: "#2D5A3D" }}>
        🚀 Try It Yourself
      </h1>
      <p className="text-body-lg mb-10" style={{ color: "#6B7280" }}>
        Ready to have your first conversation with AI? Here are step-by-step
        guides for the three most popular AI assistants. Pick whichever one
        appeals to you. They are all free to start.
      </p>

      <div className="space-y-10 text-body leading-relaxed">
        {/* ChatGPT */}
        <section className="rounded-card p-8 border-2" style={{ backgroundColor: "#E8F0E9", borderColor: "#A3C3A7" }}>
          <h2 className="text-h2 font-semibold mb-2" style={{ color: "#2D5A3D" }}>
            💬 ChatGPT (by OpenAI)
          </h2>
          <p className="mb-5" style={{ color: "#6B7280" }}>
            The most well-known AI assistant. Good all-rounder for writing, questions, and conversation.
          </p>

          <h3 className="text-h3 font-semibold mb-3" style={{ color: "#2D5A3D" }}>
            Getting Started
          </h3>
          <ol className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl" style={{ color: "#4A7C59" }}>1.</span>
              <span>Open your web browser (Safari, Chrome, or whatever you normally use) and go to <strong>chat.openai.com</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl" style={{ color: "#4A7C59" }}>2.</span>
              <span>Click <strong>&quot;Sign up.&quot;</strong> You will need an email address. You can also sign in with your Google or Apple account if you have one.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl" style={{ color: "#4A7C59" }}>3.</span>
              <span>Confirm your email address by clicking the link they send you.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl" style={{ color: "#4A7C59" }}>4.</span>
              <span>You will see a text box at the bottom of the screen. This is where you type your question or message.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl" style={{ color: "#4A7C59" }}>5.</span>
              <span>Type something and press Enter. That is it. You are now using AI.</span>
            </li>
          </ol>

          <h3 className="text-h3 font-semibold mb-3" style={{ color: "#2D5A3D" }}>
            Things to Try First
          </h3>
          <div className="space-y-3">
            <div className="rounded-btn p-4 italic" style={{ backgroundColor: "white", color: "#4A7C59" }}>
              💬 &quot;Explain what AI is in simple terms, as if you were talking to someone who has never used a computer much.&quot;
            </div>
            <div className="rounded-btn p-4 italic" style={{ backgroundColor: "white", color: "#4A7C59" }}>
              💬 &quot;I am planning a birthday party for my 8-year-old granddaughter who loves dinosaurs. Give me some ideas.&quot;
            </div>
            <div className="rounded-btn p-4 italic" style={{ backgroundColor: "white", color: "#4A7C59" }}>
              💬 &quot;Write a short thank you note to my neighbour who looked after my cat while I was in hospital.&quot;
            </div>
          </div>
        </section>

        {/* Claude */}
        <section className="rounded-card p-8 border-2" style={{ backgroundColor: "#EFF6FF", borderColor: "#93C5FD" }}>
          <h2 className="text-h2 font-semibold mb-2" style={{ color: "#1E40AF" }}>
            🤖 Claude (by Anthropic)
          </h2>
          <p className="mb-5" style={{ color: "#6B7280" }}>
            Known for being careful and thoughtful with its answers. Good at long, detailed explanations and being honest about what it does not know.
          </p>

          <h3 className="text-h3 font-semibold mb-3" style={{ color: "#1E40AF" }}>
            Getting Started
          </h3>
          <ol className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl" style={{ color: "#5B9BD5" }}>1.</span>
              <span>Go to <strong>claude.ai</strong> in your web browser.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl" style={{ color: "#5B9BD5" }}>2.</span>
              <span>Click <strong>&quot;Sign up&quot;</strong> and enter your email address. You can also use your Google account.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl" style={{ color: "#5B9BD5" }}>3.</span>
              <span>Check your email and click the confirmation link.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl" style={{ color: "#5B9BD5" }}>4.</span>
              <span>You will see a simple chat screen. Type your question in the box at the bottom.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl" style={{ color: "#5B9BD5" }}>5.</span>
              <span>Press Enter or click the send button. Claude will respond within a few seconds.</span>
            </li>
          </ol>

          <h3 className="text-h3 font-semibold mb-3" style={{ color: "#1E40AF" }}>
            Things to Try First
          </h3>
          <div className="space-y-3">
            <div className="rounded-btn p-4 italic" style={{ backgroundColor: "white", color: "#1E40AF" }}>
              💬 &quot;I got a letter from the hospital about my blood test results. Can you explain what these terms mean?&quot; (then type the terms)
            </div>
            <div className="rounded-btn p-4 italic" style={{ backgroundColor: "white", color: "#1E40AF" }}>
              💬 &quot;Help me write a complaint letter to my energy company. My bill has gone up by £50 and nobody can explain why.&quot;
            </div>
            <div className="rounded-btn p-4 italic" style={{ backgroundColor: "white", color: "#1E40AF" }}>
              💬 &quot;What are some easy exercises I can do at home if I have bad knees?&quot;
            </div>
          </div>
        </section>

        {/* Gemini */}
        <section className="rounded-card p-8 border-2" style={{ backgroundColor: "#FFF8E7", borderColor: "#E0B84D" }}>
          <h2 className="text-h2 font-semibold mb-2" style={{ color: "#8B6914" }}>
            ✨ Google Gemini
          </h2>
          <p className="mb-5" style={{ color: "#6B7280" }}>
            Made by Google. Good at finding information and works well if you already use Google services like Gmail or Google Photos.
          </p>

          <h3 className="text-h3 font-semibold mb-3" style={{ color: "#8B6914" }}>
            Getting Started
          </h3>
          <ol className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl" style={{ color: "#D4A843" }}>1.</span>
              <span>Go to <strong>gemini.google.com</strong> in your web browser.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl" style={{ color: "#D4A843" }}>2.</span>
              <span>Sign in with your Google account. If you have Gmail, you already have one. Use the same email and password.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl" style={{ color: "#D4A843" }}>3.</span>
              <span>You will see a chat screen. Type your question in the box.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl" style={{ color: "#D4A843" }}>4.</span>
              <span>Press Enter. Gemini will respond and sometimes include links to websites where you can read more.</span>
            </li>
          </ol>

          <h3 className="text-h3 font-semibold mb-3" style={{ color: "#8B6914" }}>
            Things to Try First
          </h3>
          <div className="space-y-3">
            <div className="rounded-btn p-4 italic" style={{ backgroundColor: "white", color: "#8B6914" }}>
              💬 &quot;What is the best way to get from London to Edinburgh by train? I am over 60 and want to know about railcard discounts.&quot;
            </div>
            <div className="rounded-btn p-4 italic" style={{ backgroundColor: "white", color: "#8B6914" }}>
              💬 &quot;Summarise the main news stories from today in the UK. Keep it brief and simple.&quot;
            </div>
            <div className="rounded-btn p-4 italic" style={{ backgroundColor: "white", color: "#8B6914" }}>
              💬 &quot;I want to start growing vegetables. What are the easiest ones for a beginner with a small garden?&quot;
            </div>
          </div>
        </section>

        {/* General tips */}
        <section className="rounded-card p-8" style={{ backgroundColor: "#FDF2F8" }}>
          <h2 className="text-h3 font-semibold mb-4" style={{ color: "#9D174D" }}>
            📌 Tips That Work for All AI Assistants
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <span><strong>Talk normally.</strong> You do not need special language or commands. Write as if you are talking to a helpful person.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <span><strong>Ask follow-up questions.</strong> If the answer is too complicated, say &quot;Can you explain that more simply?&quot; If it is too long, say &quot;Make it shorter.&quot;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <span><strong>You cannot break it.</strong> There is nothing you can type that will damage your computer or the AI. Experiment freely.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <span><strong>Start a new conversation</strong> when you want to change the topic. Look for a &quot;New chat&quot; button, usually in the top left corner.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <span><strong>Do not share personal details.</strong> No passwords, bank details, or ID numbers. Treat it like talking to a helpful stranger.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <span><strong>It is okay to be slow.</strong> AI is patient. Take your time typing. There is no rush and no one is watching.</span>
            </li>
          </ul>
        </section>

        {/* Which one to choose */}
        <section className="rounded-card p-8" style={{ backgroundColor: "#E8F0E9" }}>
          <h2 className="text-h3 font-semibold mb-4" style={{ color: "#2D5A3D" }}>
            🤔 Which One Should I Choose?
          </h2>
          <p className="mb-5">
            Honestly, they are all good. Here is a quick guide:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">👉</span>
              <span><strong>ChatGPT</strong> if you want the most popular one with the largest community of users.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">👉</span>
              <span><strong>Claude</strong> if you value careful, thoughtful answers and honesty about limitations.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">👉</span>
              <span><strong>Google Gemini</strong> if you already use Gmail and Google and want something that fits in with what you know.</span>
            </li>
          </ul>
          <p className="mt-5">
            You can try all three for free. Many people use more than one for different tasks.
          </p>
        </section>

        <div
          className="rounded-card p-8 text-center"
          style={{ backgroundColor: "#2D5A3D", color: "white" }}
        >
          <p className="text-h3 font-semibold mb-2">You Have Got This</p>
          <p className="text-body-lg">
            The hardest part is starting. Once you have had your first conversation
            with AI, you will wonder what took you so long. Go on, give it a try.
            And remember, visit our{" "}
            <Link href="/stay-safe" className="underline underline-offset-4" style={{ color: "#A3C3A7" }}>
              Stay Safe
            </Link>{" "}
            page for tips on using AI securely.
          </p>
        </div>
      </div>
    </div>
  );
}
