export default function Glossary() {
  const terms = [
    {
      term: "AI (Artificial Intelligence)",
      definition:
        "A computer program that can learn from information and respond in a human-like way. Think of it as a very knowledgeable assistant that never sleeps.",
    },
    {
      term: "ChatGPT",
      definition:
        "One of the most popular AI assistants, made by a company called OpenAI. You can chat with it by typing questions, and it responds in plain English.",
    },
    {
      term: "Claude",
      definition:
        "Another AI assistant, made by a company called Anthropic. Similar to ChatGPT but with a different style. Like choosing between different brands of the same product.",
    },
    {
      term: "Prompt",
      definition:
        "Whatever you type or say to an AI. It's just a fancy word for your question or instruction. \"What's the weather like?\" is a prompt.",
    },
    {
      term: "LLM (Large Language Model)",
      definition:
        "The technology behind AI assistants. It's been trained on enormous amounts of text so it can understand and generate language. You don't need to remember this one.",
    },
    {
      term: "Chatbot",
      definition:
        "Any computer program you can have a text conversation with. AI assistants are very advanced chatbots.",
    },
    {
      term: "Machine Learning",
      definition:
        "How AI improves — by studying lots of examples and finding patterns. Like how you learned to recognise faces as a baby, but with data instead.",
    },
    {
      term: "Algorithm",
      definition:
        "A set of instructions that tells a computer what to do. A recipe is an algorithm for cooking. AI uses very complex algorithms.",
    },
    {
      term: "Voice Assistant",
      definition:
        "AI you can talk to out loud, like Siri (Apple), Alexa (Amazon), or Google Assistant. They use AI to understand your speech.",
    },
    {
      term: "Deepfake",
      definition:
        "A video or image that's been created or altered by AI to look real but isn't. Important to know about so you can spot misinformation.",
    },
    {
      term: "Data",
      definition:
        "Information. When people say AI uses \"your data,\" they mean information about you — what you type, click, or share online.",
    },
    {
      term: "The Cloud",
      definition:
        "Just someone else's computer. When an app stores things \"in the cloud,\" it means your information is saved on a computer somewhere else, accessible via the internet.",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-rose-700">📖 Glossary</h1>
      <p className="text-xl text-gray-600 mb-8">
        All the AI buzzwords explained in plain English. No tech degree required.
      </p>

      <div className="space-y-4">
        {terms.map((item, index) => (
          <div
            key={index}
            className="bg-rose-50 border border-rose-200 rounded-xl p-5"
          >
            <h2 className="text-xl font-bold text-rose-800 mb-1">
              {item.term}
            </h2>
            <p className="text-lg leading-relaxed">{item.definition}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-xl p-6 text-center mt-8">
        <p className="text-lg text-gray-600">
          <strong>Don&apos;t worry about memorising these.</strong> You can always
          come back to this page whenever you see a word you don&apos;t recognise.
        </p>
      </div>
    </div>
  );
}
