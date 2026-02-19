export default function CommonFears() {
  const fears = [
    {
      question: "Will AI take over the world?",
      answer:
        "No. The AI you can use today is a tool — like a very clever calculator. It doesn't have desires, ambitions, or consciousness. It can't decide to do anything on its own. It only does what people ask it to do.",
    },
    {
      question: "Is it listening to me?",
      answer:
        "AI assistants like ChatGPT or Claude only process what you type or say to them directly. They're not listening through your phone or watching through your camera. They don't do anything until you start a conversation.",
    },
    {
      question: "Will it steal my personal information?",
      answer:
        "Reputable AI services don't want your bank details or passwords. However, as a good rule of thumb: don't share anything with AI that you wouldn't tell a stranger. Keep sensitive information private, just like you would online.",
    },
    {
      question: "Am I too old to learn this?",
      answer:
        "Absolutely not. If you can have a conversation, you can use AI. You don't need to understand how it works — you just talk to it normally. Many people in their 70s, 80s, and beyond are using AI every day and finding it genuinely helpful.",
    },
    {
      question: "Will it replace my doctor / solicitor / accountant?",
      answer:
        "No. AI is great for general information and explanations, but it should never replace professional advice for medical, legal, or financial matters. Think of it as a first step — it can help you understand things and prepare better questions for the professionals.",
    },
    {
      question: "What if it gives me wrong information?",
      answer:
        "AI can and does make mistakes. It's confident even when it's wrong, which can be misleading. Always double-check important facts, especially about health, money, or legal matters. Use it as a helpful starting point, not the final word.",
    },
    {
      question: "Is it expensive?",
      answer:
        "Many AI tools are free to use. ChatGPT has a free version, Google's Gemini is free, and many others offer free tiers. Paid versions exist with extra features, but you can get a lot of value without spending a penny.",
    },
    {
      question: "Will it make people lazy or stupid?",
      answer:
        "Using a washing machine didn't make people lazy — it freed up time for more important things. AI is the same. It handles tedious tasks so you can focus on what matters to you. It's a tool to enhance your life, not replace your thinking.",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-amber-700">
        🛡️ Common Fears
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        It&apos;s completely normal to have concerns about AI. Here are honest,
        straightforward answers to the worries we hear most often.
      </p>

      <div className="space-y-6">
        {fears.map((fear, index) => (
          <div
            key={index}
            className="bg-amber-50 border border-amber-200 rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-3 text-amber-800">
              {fear.question}
            </h2>
            <p className="text-xl leading-relaxed">{fear.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-xl p-6 text-center mt-8">
        <p className="text-lg text-gray-600">
          <strong>The bottom line:</strong> AI is a powerful tool, and like any
          tool, it&apos;s all about how you use it. Stay curious, stay cautious,
          and don&apos;t be afraid to try it out.
        </p>
      </div>
    </div>
  );
}
