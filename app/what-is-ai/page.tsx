import Quiz from "../components/Quiz";
import LessonNav from "../components/LessonNav";
import { whatIsAiQuiz } from "../components/quizzes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is AI? A Simple Explanation for Beginners | Sage",
  description: "Wondering what AI actually is? We explain artificial intelligence in plain English, with everyday examples you already use. No jargon, no tech speak.",
};

export default function WhatIsAI() {
  return (
    <div>
      <h1 className="text-h1 font-bold mb-8" style={{ color: "#2D5A3D" }}>
        🧠 What is AI?
      </h1>

      <div className="space-y-8 text-body leading-relaxed">
        <section className="rounded-card p-8" style={{ backgroundColor: "#E8F0E9" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#2D5A3D" }}>
            The Simple Version
          </h2>
          <p className="mb-5">
            AI stands for <strong>Artificial Intelligence</strong>. It is a computer
            program that can learn from information and make decisions, a bit
            like how your brain learns from experience.
          </p>
          <p>
            You are probably already using AI without knowing it. When your phone
            corrects a spelling mistake, that is AI. When Netflix suggests a film
            you might like, that is AI too. When your email filters out spam, AI
            is doing the work behind the scenes.
          </p>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#FFF8E7" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#8B6914" }}>
            Think of it Like This
          </h2>
          <p className="mb-5">
            Imagine you have been cooking for 50 years. You do not need a
            recipe for most things. You just <em>know</em> what works.
            You have learned from thousands of meals.
          </p>
          <p className="mb-5">
            AI works the same way, but with information instead of food. It has
            studied billions of books, articles, and conversations. So
            when you ask it a question, it draws on all that knowledge to give
            you an answer.
          </p>
          <p>
            It has not <em>understood</em> those books the way you would.
            But it is very good at finding patterns and giving helpful
            responses.
          </p>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#E8F0E9" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#2D5A3D" }}>
            A Very Brief History
          </h2>
          <p className="mb-5">
            People have been working on AI since the 1950s. For decades, it was
            mostly a research project in universities. Computers were not powerful
            enough to do much with it.
          </p>
          <p className="mb-5">
            Things changed around 2010 when computers became fast enough to process
            huge amounts of information. Companies like Google started using AI to
            improve search results, translate languages, and recognise photos.
          </p>
          <p>
            Then in late 2022, a tool called ChatGPT was released to the public.
            For the first time, anyone could have a conversation with AI in plain
            English. That is when most people first heard about it.
          </p>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#FFF8E7" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#8B6914" }}>
            Types of AI You Already Use
          </h2>
          <p className="mb-5">
            You might think AI is something new and unfamiliar. But you have
            been using it for years. Here are some everyday examples:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">📱</span>
              <span><strong>Autocorrect on your phone</strong> learns which words you use most and predicts what you want to type next.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📧</span>
              <span><strong>Spam filters</strong> in your email learn to spot junk mail and keep it out of your inbox.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🎬</span>
              <span><strong>Netflix and BBC iPlayer</strong> suggest programmes based on what you have watched before.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🗺️</span>
              <span><strong>Google Maps and sat navs</strong> use AI to find the fastest route and predict traffic jams.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🗣️</span>
              <span><strong>Siri, Alexa, and Google Assistant</strong> understand your voice and respond to questions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📸</span>
              <span><strong>Your phone camera</strong> uses AI to recognise faces and improve photos automatically.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🏦</span>
              <span><strong>Your bank</strong> uses AI to spot unusual transactions and protect you from fraud.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#E8F0E9" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#2D5A3D" }}>
            How Does AI Actually Learn?
          </h2>
          <p className="mb-5">
            Think about how a child learns what a cat looks like. You show them
            hundreds of cats. Big cats, small cats, ginger cats, black cats.
            Eventually they can spot a cat they have never seen before.
          </p>
          <p className="mb-5">
            AI learns in a similar way. To teach AI to recognise cats in photos,
            engineers show it millions of pictures labelled &quot;cat&quot; and
            &quot;not cat.&quot; The AI finds patterns (pointy ears, whiskers, fur)
            and gets better over time.
          </p>
          <p className="mb-5">
            For AI assistants like ChatGPT, the process is similar but with text.
            The AI studied enormous amounts of writing from books, websites, and
            articles. It learned patterns in language: which words tend to follow
            other words, how sentences are structured, how questions are typically
            answered.
          </p>
          <p>
            This is why AI can write things that sound natural. It is not
            &quot;thinking&quot; the way you do. It is very good at predicting
            what word should come next, based on all the text it has studied.
          </p>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#FFF8E7" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#8B6914" }}>
            Different Kinds of AI
          </h2>
          <p className="mb-5">
            Not all AI is the same. Here are the main types you will hear about:
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#2D5A3D" }}>💬 Chatbots and AI Assistants</p>
              <p>These are tools you can talk to in plain English. ChatGPT, Claude, and Google Gemini are the big ones. You type a question and they respond, like texting a very knowledgeable friend.</p>
            </div>
            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#2D5A3D" }}>🗣️ Voice Assistants</p>
              <p>Siri, Alexa, and Google Assistant respond to your voice. You can ask them to set timers, play music, check the weather, or answer questions. No typing needed.</p>
            </div>
            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#2D5A3D" }}>🎨 Image Generators</p>
              <p>Some AI can create pictures from a description. You type &quot;a watercolour painting of a cottage in the Cotswolds&quot; and it creates one. These are newer and still improving.</p>
            </div>
            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#2D5A3D" }}>🔍 Recommendation Systems</p>
              <p>These work quietly in the background. They are why Amazon suggests products, why Spotify picks songs, and why YouTube recommends videos. They learn what you like and suggest more of it.</p>
            </div>
          </div>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#E8F0E9" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#2D5A3D" }}>
            What AI Can Do
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span>Answer questions in plain English</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span>Help you write letters, emails, or birthday cards</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span>Explain complicated things simply</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span>Translate between languages</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span>Help plan meals, trips, or daily schedules</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span>Read documents and summarise them for you</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span>Help you learn new things at your own pace</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span>Proofread your writing and suggest improvements</span>
            </li>
          </ul>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#FEF2F2" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#991B1B" }}>
            What AI Cannot Do
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>
                It does not have feelings or opinions, even if it sounds
                like it does
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>
                It can make mistakes and sometimes states wrong information
                confidently, so always check important facts
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>
                It cannot physically do things. It is software, not a
                robot
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>
                It does not know you personally unless you tell
                it about yourself
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>
                It cannot access the internet in real time (some newer versions can, but most cannot)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>
                It should not be trusted for medical, legal, or financial decisions without checking with a professional
              </span>
            </li>
          </ul>
        </section>

        <div
          className="rounded-card p-8 text-center"
          style={{ backgroundColor: "#2D5A3D", color: "white" }}
        >
          <p className="text-h3 font-semibold mb-2">Key Takeaway</p>
          <p className="text-body-lg">
            AI is a very clever assistant. It is not magic, it is not
            alive, and it is not something to fear. It is just a
            tool, and a very useful one at that.
          </p>
        </div>

        <Quiz title={whatIsAiQuiz.title} questions={whatIsAiQuiz.questions} lessonNumber={1} />
      </div>

      <LessonNav currentLesson={1} />
    </div>
  );
}
