export default function WhatIsAI() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-blue-700">🧠 What is AI?</h1>

      <div className="space-y-8 text-xl leading-relaxed">
        <section className="bg-blue-50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3">The Simple Version</h2>
          <p>
            AI — or <strong>Artificial Intelligence</strong> — is a computer
            program that can learn from information and make decisions, a bit
            like how your brain learns from experience.
          </p>
        </section>

        <section className="bg-green-50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3">Think of it Like This</h2>
          <p className="mb-4">
            Imagine you&apos;ve been cooking for 50 years. You don&apos;t need a recipe
            for most things — you just <em>know</em> what works. You&apos;ve learned
            from thousands of meals.
          </p>
          <p className="mb-4">
            AI works the same way, but with information instead of food. It has
            &quot;read&quot; billions of books, articles, and conversations. So when you
            ask it a question, it draws on all that knowledge to give you an
            answer.
          </p>
          <p>
            It hasn&apos;t <em>understood</em> those books the way you would. But it&apos;s
            very good at finding patterns and giving helpful responses.
          </p>
        </section>

        <section className="bg-amber-50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3">What AI Can Do</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Answer questions in plain English</li>
            <li>Help you write letters, emails, or birthday cards</li>
            <li>Explain complicated things simply</li>
            <li>Translate between languages</li>
            <li>Help plan meals, trips, or daily schedules</li>
            <li>Read documents and summarise them for you</li>
          </ul>
        </section>

        <section className="bg-rose-50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3">What AI Cannot Do</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>It doesn&apos;t have feelings or opinions (even if it sounds like it does)</li>
            <li>It can make mistakes — always double-check important information</li>
            <li>It can&apos;t physically do things — it&apos;s software, not a robot</li>
            <li>It doesn&apos;t &quot;know&quot; you personally unless you tell it about yourself</li>
          </ul>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <p className="text-lg text-gray-600">
            <strong>Key takeaway:</strong> AI is a very clever assistant. It&apos;s
            not magic, it&apos;s not alive, and it&apos;s not something to be afraid of.
            It&apos;s just a tool — and a very useful one.
          </p>
        </div>
      </div>
    </div>
  );
}
