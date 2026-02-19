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
          <p>
            AI, or <strong>Artificial Intelligence</strong>, is a computer
            program that can learn from information and make decisions, a bit
            like how your brain learns from experience.
          </p>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#FFF8E7" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#8B6914" }}>
            Think of it Like This
          </h2>
          <p className="mb-5">
            Imagine you&apos;ve been cooking for 50 years. You don&apos;t need a
            recipe for most things. You just <em>know</em> what works.
            You&apos;ve learned from thousands of meals.
          </p>
          <p className="mb-5">
            AI works the same way, but with information instead of food. It has
            &quot;read&quot; billions of books, articles, and conversations. So
            when you ask it a question, it draws on all that knowledge to give
            you an answer.
          </p>
          <p>
            It hasn&apos;t <em>understood</em> those books the way you would.
            But it&apos;s very good at finding patterns and giving helpful
            responses.
          </p>
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
                It doesn&apos;t have feelings or opinions (even if it sounds
                like it does)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>
                It can make mistakes, so always double-check important information
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>
                It can&apos;t physically do things. It&apos;s software, not a
                robot
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <span>
                It doesn&apos;t &quot;know&quot; you personally unless you tell
                it about yourself
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
            AI is a very clever assistant. It&apos;s not magic, it&apos;s not
            alive, and it&apos;s not something to be afraid of. It&apos;s just a
            tool, and a very useful one.
          </p>
        </div>
      </div>
    </div>
  );
}
