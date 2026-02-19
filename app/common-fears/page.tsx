export default function CommonFears() {
  const fears = [
    {
      question: "Will AI take over the world?",
      answer:
        "No. The AI you can use today is a tool, like a very clever calculator. It does not have desires, ambitions, or consciousness. It cannot decide to do anything on its own. It only does what people ask it to do. The science fiction version of AI is very different from what actually exists.",
    },
    {
      question: "Is it listening to me through my phone?",
      answer:
        "AI assistants like ChatGPT or Claude only process what you type or say to them directly. They are not listening through your phone or watching through your camera. They do not do anything until you start a conversation. Voice assistants like Siri and Alexa do listen for their wake word (\"Hey Siri\" or \"Alexa\"), but they are not recording and storing everything you say.",
    },
    {
      question: "Will it steal my personal information?",
      answer:
        "Reputable AI services do not want your bank details or passwords. As a good rule: do not share anything with AI that you would not tell a stranger on a bus. Keep passwords, bank details, NHS numbers, and other sensitive information private. The big AI companies have privacy policies, but it is always best to be cautious.",
    },
    {
      question: "Am I too old to learn this?",
      answer:
        "Not at all. If you can have a conversation, you can use AI. You do not need to understand how it works, just like you do not need to understand how a car engine works to drive. Many people in their 70s, 80s, and beyond use AI every day. You already use AI when your phone corrects your spelling or your email filters spam.",
    },
    {
      question: "Will it replace my doctor, solicitor, or accountant?",
      answer:
        "No. AI is great for general information and explanations, but it should never replace professional advice for medical, legal, or financial matters. Think of it as a first step. It can help you understand things and prepare better questions for the professionals. Always check important information with a real person.",
    },
    {
      question: "What if it gives me wrong information?",
      answer:
        "AI can and does make mistakes. It sometimes \"hallucinates,\" which means it states something completely made up as if it were a fact. It sounds confident even when it is wrong. Always double-check important facts, especially about health, money, or legal matters. Use it as a helpful starting point, not the final word.",
    },
    {
      question: "Is it expensive?",
      answer:
        "Many AI tools are completely free. ChatGPT has a free version, Google Gemini is free, and Claude has a free tier. Paid versions exist with extra features, but you can get plenty of value without spending anything. You do not need to pay to try AI out.",
    },
    {
      question: "Will it make people lazy or stupid?",
      answer:
        "Using a washing machine did not make people lazy. It freed up time for more important things. AI is similar. It handles tedious tasks so you can focus on what matters to you. It is a tool to help you, not replace your thinking. You still make the decisions.",
    },
    {
      question: "What about deepfakes? Can AI put words in my mouth?",
      answer:
        "Deepfakes are videos, images, or audio clips created by AI that look and sound real but are not. Someone could use AI to make it look like a person said something they never said. This is a real concern. The best defence is to be sceptical of surprising videos or audio clips, especially if they come from social media. Check trusted news sources before believing or sharing anything shocking.",
    },
    {
      question: "Will AI take away jobs?",
      answer:
        "AI will change some jobs, just as computers, the internet, and machines did before. Some routine tasks will be done by AI. But AI also creates new types of work and helps people do their existing jobs better. If you are retired, this may not affect you directly, but it is natural to worry about younger family members. The honest answer is that nobody knows exactly how it will play out.",
    },
    {
      question: "Is AI biased?",
      answer:
        "Sometimes, yes. AI learns from information written by humans, and humans have biases. This means AI can sometimes give answers that are unfair or one-sided. AI companies are working to reduce this, but it is not perfect. It is one more reason to think critically about what AI tells you, just as you would with any single source of information.",
    },
    {
      question: "Can scammers use AI to trick me?",
      answer:
        "Unfortunately, yes. Scammers can use AI to write more convincing fake emails, create fake voice messages that sound like a family member, or build fake websites. The good news is that the same rules for avoiding scams still apply: never give out personal details to unexpected callers, do not click suspicious links, and if something seems too good to be true, it probably is. We have a full page on staying safe.",
    },
    {
      question: "What happens to the things I type into AI?",
      answer:
        "This depends on the service. Most AI companies say they may use your conversations to improve their systems, unless you opt out. Some services offer private modes where your data is not stored. Read the privacy settings when you sign up. As a general rule, do not type anything into AI that you would not want a stranger to read.",
    },
  ];

  return (
    <div>
      <h1 className="text-h1 font-bold mb-4" style={{ color: "#2D5A3D" }}>
        🛡️ Common Fears
      </h1>
      <p className="text-body-lg mb-10" style={{ color: "#6B7280" }}>
        It is completely normal to have concerns about AI. Here are honest,
        straightforward answers to the worries we hear most often. No
        sugar-coating.
      </p>

      <div className="space-y-6">
        {fears.map((fear, index) => (
          <div
            key={index}
            className="rounded-card p-8 border-2"
            style={{ backgroundColor: "#EFF6FF", borderColor: "#93C5FD" }}
          >
            <h2
              className="text-h3 font-semibold mb-4"
              style={{ color: "#1E40AF" }}
            >
              {fear.question}
            </h2>
            <p className="text-body leading-relaxed">{fear.answer}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-card p-8 mt-10"
        style={{ backgroundColor: "#FFF8E7" }}
      >
        <h2 className="text-h3 font-semibold mb-4" style={{ color: "#8B6914" }}>
          🔒 How to Stay Safe: Quick Rules
        </h2>
        <ul className="space-y-3 text-body">
          <li className="flex items-start gap-3">
            <span className="text-2xl">1️⃣</span>
            <span>Never share passwords, bank details, or personal ID numbers with AI.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">2️⃣</span>
            <span>Always double-check important facts, especially about health or money.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">3️⃣</span>
            <span>Be sceptical of surprising videos or voice messages, even if they seem real.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">4️⃣</span>
            <span>Use well-known AI services (ChatGPT, Claude, Google Gemini) rather than unknown ones.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">5️⃣</span>
            <span>If an AI-generated message asks you to send money or click a link, stop and check with someone you trust.</span>
          </li>
        </ul>
      </div>

      <div
        className="rounded-card p-8 text-center mt-10"
        style={{ backgroundColor: "#2D5A3D", color: "white" }}
      >
        <p className="text-h3 font-semibold mb-2">The Bottom Line</p>
        <p className="text-body-lg">
          AI is a powerful tool, and like any tool, it is all about how you
          use it. Stay curious, stay cautious, and do not be afraid to try
          it out. For more detailed safety advice, visit our{" "}
          <a href="/stay-safe" className="underline underline-offset-4" style={{ color: "#A3C3A7" }}>
            Stay Safe
          </a>{" "}
          page.
        </p>
      </div>
    </div>
  );
}
