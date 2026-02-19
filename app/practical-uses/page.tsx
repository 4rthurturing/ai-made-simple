import Quiz from "../components/Quiz";
import LessonNav from "../components/LessonNav";
import { practicalUsesQuiz } from "../components/quizzes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practical Uses of AI in Everyday Life | Sage AI",
  description: "Discover how AI can help with everyday tasks like writing letters, planning meals, and finding information. Practical tips for older adults.",
};

export default function PracticalUses() {
  const uses = [
    {
      emoji: "✉️",
      title: "Writing Emails and Letters",
      description:
        "Tell AI what you want to say and it will write a polished email or letter for you. Great for formal letters to your bank, council, or doctor. You can ask it to make the tone more friendly, more formal, or shorter.",
      example:
        '"Help me write a letter to my GP asking to change my appointment to next Thursday. Keep it polite and brief."',
    },
    {
      emoji: "🍳",
      title: "Meal Planning and Recipes",
      description:
        "Tell it what is in your fridge and it will suggest recipes. It can also plan a full week of meals, create a shopping list, and adjust recipes for dietary needs like diabetes or high blood pressure.",
      example:
        '"I have chicken, potatoes, and carrots. What can I make for dinner? I need to keep it low salt."',
    },
    {
      emoji: "💊",
      title: "Understanding Medical Information",
      description:
        "Got a letter from the hospital full of jargon? AI can explain it in plain English. It is also good at explaining what medications do and what side effects to watch for. Always check with your doctor for actual medical decisions.",
      example:
        '"What does it mean when my blood test says my HbA1c is 48? Explain it simply."',
    },
    {
      emoji: "📞",
      title: "Preparing for Phone Calls",
      description:
        "Nervous about calling the bank or a company? AI can help you prepare what to say, what questions to ask, and what information to have ready. It can even help you practise the conversation.",
      example:
        '"I need to call my energy company about a wrong bill. What should I say and what information do I need?"',
    },
    {
      emoji: "🎁",
      title: "Gift Ideas",
      description:
        "Stuck on what to buy someone? Describe the person and AI will suggest thoughtful gift ideas within your budget. It can also suggest where to buy them.",
      example:
        '"My granddaughter is turning 8 and loves horses. Gift ideas under £20?"',
    },
    {
      emoji: "📰",
      title: "Explaining the News",
      description:
        "Confused by something in the news? Ask AI to explain it in simple terms. It can give you background on a story, explain what a new law means, or help you understand a complex situation.",
      example:
        '"What is this new AI law everyone is talking about? Explain it simply."',
    },
    {
      emoji: "🗺️",
      title: "Travel Planning",
      description:
        "AI can help plan trips, suggest destinations, find the best routes, and create packing lists. You can tell it about any mobility needs and it will adjust its suggestions.",
      example:
        '"I want to visit the Lake District for 3 days. Plan an itinerary for someone who cannot walk too far."',
    },
    {
      emoji: "📝",
      title: "Making Lists and Staying Organised",
      description:
        "Use AI as a memory aid. It can help you organise appointments, create to-do lists, and keep track of things you need to do.",
      example:
        '"Help me make a list of everything I need to do before my holiday next month."',
    },
    {
      emoji: "📖",
      title: "Learning New Things",
      description:
        "Want to understand how something works? AI is a patient teacher. It will explain things as many times as you need, in different ways, without ever getting frustrated.",
      example:
        '"Explain how the stock market works. Use simple language and pretend I know nothing about it."',
    },
    {
      emoji: "🌍",
      title: "Translating Languages",
      description:
        "Going on holiday abroad? AI can translate menus, signs, or conversations. It can also help you learn basic phrases in another language before your trip.",
      example:
        '"How do I say these phrases in Italian: Where is the bathroom? How much does this cost? Thank you very much."',
    },
    {
      emoji: "💰",
      title: "Comparing Prices and Products",
      description:
        "Trying to choose between products? Describe what you need and AI can explain the differences, suggest what to look for, and help you make a decision.",
      example:
        '"I need a new tablet for reading books and video calling my family. What should I look for? My budget is around £200."',
    },
    {
      emoji: "🏠",
      title: "Home and Garden Help",
      description:
        "AI can help with DIY questions, gardening advice, and household problems. Describe what is happening and it will suggest solutions step by step.",
      example:
        '"My kitchen tap is dripping. How do I fix it? Explain it step by step for someone who is not handy."',
    },
    {
      emoji: "✍️",
      title: "Writing Personal Things",
      description:
        "AI can help you write birthday cards, thank you notes, eulogies, speeches, or even your memoirs. Tell it what you want to say and it will help you find the right words.",
      example:
        '"Help me write a short speech for my golden wedding anniversary. Keep it warm and a bit funny."',
    },
    {
      emoji: "🐕",
      title: "Pet Care Advice",
      description:
        "Questions about your pet? AI can help with feeding advice, understanding behaviour, and knowing when to see a vet. It is not a replacement for your vet, but it is good for general questions.",
      example:
        '"My dog has started scratching a lot more than usual. What could be causing it and should I see the vet?"',
    },
    {
      emoji: "📋",
      title: "Understanding Forms and Paperwork",
      description:
        "Confused by a form from the council, HMRC, or your pension provider? Type out the question on the form and AI will explain what it is asking and how to answer it.",
      example:
        '"This tax form asks for my \'personal allowance\'. What does that mean and how do I find it?"',
    },
    {
      emoji: "🎵",
      title: "Entertainment and Hobbies",
      description:
        "AI can suggest books, films, music, or TV shows based on what you already enjoy. It can also help with hobbies like crosswords, quiz questions, or creative writing.",
      example:
        '"I loved Downton Abbey. What other TV shows would I enjoy?"',
    },
    {
      emoji: "👨‍👩‍👧‍👦",
      title: "Keeping Up with Grandchildren",
      description:
        "Your grandchildren are talking about things you do not recognise? Ask AI to explain Roblox, TikTok, or whatever the latest thing is. It will help you understand their world.",
      example:
        '"My grandson keeps talking about Minecraft. What is it and is it safe for a 9-year-old?"',
    },
  ];

  return (
    <div>
      <h1 className="text-h1 font-bold mb-4" style={{ color: "#2D5A3D" }}>
        💡 Practical Uses
      </h1>
      <p className="text-body-lg mb-10" style={{ color: "#6B7280" }}>
        Here are real, everyday ways AI can make your life easier. Each one
        includes an example of what you might say to an AI assistant. You talk
        to AI just like you would talk to a helpful friend. No special commands
        needed.
      </p>

      <div className="space-y-6">
        {uses.map((use, index) => (
          <div
            key={index}
            className="rounded-card p-8 border-2"
            style={{ backgroundColor: "#E8F0E9", borderColor: "#A3C3A7" }}
          >
            <h2 className="text-h3 font-semibold mb-3" style={{ color: "#2D5A3D" }}>
              {use.emoji} {use.title}
            </h2>
            <p className="text-body mb-4">{use.description}</p>
            <div
              className="rounded-btn p-5 text-body italic"
              style={{ backgroundColor: "white", color: "#4A7C59" }}
            >
              💬 {use.example}
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-card p-8 mt-10"
        style={{ backgroundColor: "#FFF8E7" }}
      >
        <h2 className="text-h3 font-semibold mb-4" style={{ color: "#8B6914" }}>
          💡 Tips for Getting Better Answers
        </h2>
        <ul className="space-y-3 text-body">
          <li className="flex items-start gap-3">
            <span className="text-2xl">1️⃣</span>
            <span><strong>Be specific.</strong> Instead of &quot;help me cook,&quot; say &quot;suggest a simple chicken dinner for two people using ingredients I can find in Tesco.&quot;</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">2️⃣</span>
            <span><strong>Give context.</strong> Mention your situation. &quot;I am 72 and have arthritis&quot; helps AI give more relevant advice.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">3️⃣</span>
            <span><strong>Ask follow-up questions.</strong> If the answer is not quite right, say &quot;make it simpler&quot; or &quot;give me another option.&quot;</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">4️⃣</span>
            <span><strong>Say what you want the tone to be.</strong> &quot;Make it formal&quot; or &quot;keep it chatty&quot; helps AI match your style.</span>
          </li>
        </ul>
      </div>

      <div
        className="rounded-card p-8 text-center mt-10"
        style={{ backgroundColor: "#2D5A3D", color: "white" }}
      >
        <p className="text-h3 font-semibold mb-2">Remember</p>
        <p className="text-body-lg">
          There is no wrong way to talk to AI. If it does not understand you,
          just rephrase your question. It is endlessly patient and never judges.
        </p>
      </div>

      <Quiz title={practicalUsesQuiz.title} questions={practicalUsesQuiz.questions} lessonNumber={4} />

      <LessonNav currentLesson={4} />
    </div>
  );
}
