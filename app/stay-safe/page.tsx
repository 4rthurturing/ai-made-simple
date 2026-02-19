import Link from "next/link";
import Quiz from "../components/Quiz";
import LessonNav from "../components/LessonNav";
import { staySafeQuiz } from "../components/quizzes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is AI Safe? How to Protect Yourself Online | Sage AI",
  description: "Worried about AI safety and privacy? Learn how to use AI tools safely, spot scams, and protect your personal information. Written for over-60s.",
};

export default function StaySafe() {
  return (
    <div>
      <h1 className="text-h1 font-bold mb-4" style={{ color: "#2D5A3D" }}>
        🔒 Stay Safe with AI
      </h1>
      <p className="text-body-lg mb-10" style={{ color: "#6B7280" }}>
        AI is a helpful tool, but like any tool, it pays to use it wisely.
        This page covers everything you need to know to stay safe.
      </p>

      <div className="space-y-8 text-body leading-relaxed">
        {/* What not to share */}
        <section className="rounded-card p-8 border-2" style={{ backgroundColor: "#FEF2F2", borderColor: "#FCA5A5" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#991B1B" }}>
            🚫 What Not to Share with AI
          </h2>
          <p className="mb-5">
            AI assistants are not private diaries. Treat them like a helpful stranger.
            Be friendly, but keep sensitive things to yourself.
          </p>
          <p className="font-semibold mb-3">Never type these into an AI chat:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Passwords or PINs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Bank account numbers or card details</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Your National Insurance number</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>NHS number or detailed medical records</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Your full address or date of birth together</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>Photos of identity documents (passport, driving licence)</span>
            </li>
          </ul>
          <div className="rounded-btn p-4 mt-5" style={{ backgroundColor: "white" }}>
            <p><strong>The rule of thumb:</strong> If you would not read it out loud on a bus, do not type it into AI.</p>
          </div>
        </section>

        {/* Verifying information */}
        <section className="rounded-card p-8 border-2" style={{ backgroundColor: "#EFF6FF", borderColor: "#93C5FD" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#1E40AF" }}>
            🔍 How to Check What AI Tells You
          </h2>
          <p className="mb-5">
            AI can be wrong. It sometimes makes up facts, names, dates, and even
            entire books that do not exist. This is called &quot;hallucination.&quot;
            The problem is that AI sounds confident even when it is wrong.
          </p>
          <p className="font-semibold mb-3">How to verify important information:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span><strong>Search for it.</strong> Copy a key fact and search for it on Google. If you cannot find it from a trusted source, be suspicious.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span><strong>Check official sources.</strong> For health, check the NHS website. For money, check GOV.UK or your bank. For law, check Citizens Advice.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span><strong>Ask a real person.</strong> If AI gives you medical, legal, or financial advice, always run it past a professional.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span><strong>Ask AI to show its sources.</strong> You can type &quot;Where did you get that information?&quot; It may not always have a source, and that is a warning sign.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span><strong>Be extra careful with numbers.</strong> AI often gets statistics, dates, and phone numbers wrong.</span>
            </li>
          </ul>
        </section>

        {/* Scams */}
        <section className="rounded-card p-8 border-2" style={{ backgroundColor: "#FFF8E7", borderColor: "#E0B84D" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#8B6914" }}>
            🎣 AI-Powered Scams to Watch For
          </h2>
          <p className="mb-5">
            Scammers are using AI to make their tricks more convincing. Here
            are the main ones to watch for:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#8B6914" }}>📧 Better fake emails</p>
              <p>Scam emails used to be easy to spot because of poor grammar. Now scammers use AI to write perfect English. Look for other warning signs: unexpected requests for money, urgency (&quot;act now!&quot;), or emails from addresses that do not match the company they claim to be from.</p>
            </div>

            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#8B6914" }}>🗣️ Fake voice calls</p>
              <p>AI can now clone someone&apos;s voice from just a short recording. Scammers have used this to call people pretending to be a grandchild or family member in trouble, asking for money. If you get a distressing call asking for money, hang up and call the person back on their real number.</p>
            </div>

            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#8B6914" }}>🖼️ Fake images and videos</p>
              <p>AI can create realistic photos of people who do not exist or put real people into fake situations. Be wary of surprising images or videos on social media, especially if they are trying to make you feel angry or scared.</p>
            </div>

            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#8B6914" }}>🌐 Fake AI websites</p>
              <p>Some websites pretend to be AI tools but are really designed to steal your information. Stick to the well-known ones: ChatGPT (chat.openai.com), Claude (claude.ai), and Google Gemini (gemini.google.com). Be careful with AI tools you find through ads or pop-ups.</p>
            </div>

            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#8B6914" }}>💰 &quot;AI investment&quot; schemes</p>
              <p>Be very wary of anyone promising guaranteed returns from &quot;AI trading&quot; or &quot;AI investments.&quot; These are almost always scams. No legitimate investment is risk-free.</p>
            </div>
          </div>
        </section>

        {/* Spotting deepfakes */}
        <section className="rounded-card p-8 border-2" style={{ backgroundColor: "#E8F0E9", borderColor: "#A3C3A7" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#2D5A3D" }}>
            🎭 How to Spot a Deepfake
          </h2>
          <p className="mb-5">
            Deepfakes are getting more realistic, but there are still signs to look for:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">👀</span>
              <span><strong>Watch the eyes.</strong> In many deepfakes, the blinking looks unnatural or the eyes do not quite focus properly.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">👄</span>
              <span><strong>Check the mouth.</strong> The lip movements may not perfectly match the words being spoken.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <span><strong>Look at lighting.</strong> The lighting on the face may not match the lighting in the rest of the scene.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🖼️</span>
              <span><strong>Check the edges.</strong> Hair and the edges of the face sometimes look blurry or strange.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🤔</span>
              <span><strong>Ask yourself: is this surprising?</strong> If a video shows a politician or celebrity saying something shocking, check if trusted news outlets are reporting it too. If only social media has it, be very sceptical.</span>
            </li>
          </ul>
        </section>

        {/* Privacy settings */}
        <section className="rounded-card p-8 border-2" style={{ backgroundColor: "#FDF2F8", borderColor: "#F9A8D4" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#9D174D" }}>
            ⚙️ Privacy Settings Worth Checking
          </h2>
          <p className="mb-5">
            Most AI services let you control how your data is used. Here are
            some settings worth checking:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🔧</span>
              <span><strong>ChatGPT:</strong> Go to Settings, then Data Controls. You can turn off &quot;Chat history &amp; training&quot; so your conversations are not used to improve the AI.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🔧</span>
              <span><strong>Claude:</strong> By default, Claude does not use your conversations for training on the free tier in most regions. Check their privacy page if you want to be sure.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🔧</span>
              <span><strong>Google Gemini:</strong> Go to your Google Activity settings. You can turn off Gemini Apps Activity to stop Google saving your conversations.</span>
            </li>
          </ul>
        </section>

        {/* Quick reference card */}
        <section className="rounded-card p-8" style={{ backgroundColor: "#FFF8E7" }}>
          <h2 className="text-h3 font-semibold mb-4" style={{ color: "#8B6914" }}>
            📋 Quick Safety Checklist
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">☑️</span>
              <span>I will not share passwords or bank details with AI</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">☑️</span>
              <span>I will double-check important facts from AI with trusted sources</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">☑️</span>
              <span>I will not click links in unexpected emails, even if they look professional</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">☑️</span>
              <span>If a family member calls asking for money urgently, I will hang up and call them back on their real number</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">☑️</span>
              <span>I will stick to well-known AI services and avoid unknown ones</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">☑️</span>
              <span>I will be sceptical of shocking videos or images on social media</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">☑️</span>
              <span>I will check my privacy settings on any AI service I use</span>
            </li>
          </ul>
        </section>

        <div
          className="rounded-card p-8 text-center"
          style={{ backgroundColor: "#2D5A3D", color: "white" }}
        >
          <p className="text-h3 font-semibold mb-2">Stay Smart, Stay Safe</p>
          <p className="text-body-lg">
            The same common sense that keeps you safe in everyday life works with AI too.
            Be curious, be cautious, and do not be afraid to ask for help. If you are
            ready to get started, visit our{" "}
            <Link href="/try-it" className="underline underline-offset-4" style={{ color: "#A3C3A7" }}>
              Try It Yourself
            </Link>{" "}
            page.
          </p>
        </div>
      </div>

      <Quiz title={staySafeQuiz.title} questions={staySafeQuiz.questions} lessonNumber={5} />

      <LessonNav currentLesson={5} />
    </div>
  );
}
