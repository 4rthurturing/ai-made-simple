import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-6 text-blue-700">
        AI Isn&apos;t Scary.
      </h1>
      <h2 className="text-2xl text-gray-600 mb-10">
        Let us show you how it works — in plain English.
      </h2>

      <div className="bg-blue-50 rounded-2xl p-8 mb-10 text-left text-xl leading-relaxed">
        <p className="mb-4">
          You&apos;ve probably heard a lot about &quot;AI&quot; lately. It&apos;s on the news,
          your grandchildren are talking about it, and it might feel like the
          world is changing too fast.
        </p>
        <p className="mb-4">
          <strong>Here&apos;s the good news:</strong> AI is just a tool. Like a
          calculator, a washing machine, or the internet — it&apos;s here to make
          your life easier, not harder.
        </p>
        <p>
          This website will explain everything in simple terms. No jargon, no
          tech speak. Just clear, honest answers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <Link
          href="/what-is-ai"
          className="block bg-green-50 border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-2xl font-semibold text-green-700 mb-2">
            🧠 What is AI?
          </h3>
          <p className="text-lg text-gray-600">
            A simple explanation anyone can understand.
          </p>
        </Link>

        <Link
          href="/practical-uses"
          className="block bg-purple-50 border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">
            💡 Practical Uses
          </h3>
          <p className="text-lg text-gray-600">
            Real ways AI can help you every day.
          </p>
        </Link>

        <Link
          href="/common-fears"
          className="block bg-amber-50 border-2 border-amber-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-2xl font-semibold text-amber-700 mb-2">
            🛡️ Common Fears
          </h3>
          <p className="text-lg text-gray-600">
            Honest answers to the worries you might have.
          </p>
        </Link>

        <Link
          href="/glossary"
          className="block bg-rose-50 border-2 border-rose-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-2xl font-semibold text-rose-700 mb-2">
            📖 Glossary
          </h3>
          <p className="text-lg text-gray-600">
            All the buzzwords explained simply.
          </p>
        </Link>
      </div>
    </div>
  );
}
