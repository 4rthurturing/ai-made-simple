export default function Glossary() {
  const terms = [
    {
      term: "AI (Artificial Intelligence)",
      definition:
        "A computer program that can learn from information and respond in a human-like way. Think of it as a very knowledgeable assistant that never sleeps.",
    },
    {
      term: "Algorithm",
      definition:
        "A set of instructions that tells a computer what to do. A recipe is an algorithm for cooking. AI uses very complex algorithms to process information and give you answers.",
    },
    {
      term: "Alexa",
      definition:
        "Amazon's voice assistant. It lives inside Amazon Echo speakers and other devices. You talk to it by saying \"Alexa\" followed by your question or command.",
    },
    {
      term: "Bias",
      definition:
        "When AI gives unfair or one-sided results because it learned from information that contained human prejudices. AI companies work to reduce this, but it is still a problem.",
    },
    {
      term: "Chatbot",
      definition:
        "Any computer program you can have a text conversation with. AI assistants like ChatGPT and Claude are very advanced chatbots. The ones on customer service websites are simpler versions.",
    },
    {
      term: "ChatGPT",
      definition:
        "One of the most popular AI assistants, made by a company called OpenAI. You can chat with it by typing questions, and it responds in plain English. It has free and paid versions.",
    },
    {
      term: "Claude",
      definition:
        "An AI assistant made by a company called Anthropic. Similar to ChatGPT but with a different style. Like choosing between different brands of the same product.",
    },
    {
      term: "The Cloud",
      definition:
        "Just someone else's computer. When an app stores things \"in the cloud,\" it means your information is saved on a computer somewhere else, accessible through the internet. You already use the cloud if you have email.",
    },
    {
      term: "Data",
      definition:
        "Information. When people say AI uses \"your data,\" they mean information about you, like what you type, click, or share online.",
    },
    {
      term: "Deepfake",
      definition:
        "A video, image, or audio clip created or changed by AI to look and sound real, but which is actually fake. Used to spread misinformation. Always check surprising videos with trusted news sources.",
    },
    {
      term: "Fine-tuning",
      definition:
        "Teaching an AI model to be better at a specific task. It is like how a general doctor might do extra training to become a specialist. The AI starts with broad knowledge and then learns to focus on a particular area.",
    },
    {
      term: "Gemini",
      definition:
        "Google's AI assistant. It is built into Google Search and is available as a standalone app. Free to use with a Google account.",
    },
    {
      term: "Generative AI",
      definition:
        "AI that can create new content, such as text, images, music, or video. ChatGPT generates text. DALL-E generates images. This is the type of AI that has been in the news most recently.",
    },
    {
      term: "Hallucination",
      definition:
        "When AI makes something up and presents it as fact. It might invent a book that does not exist, or state a wrong date with complete confidence. This is why you should always check important information from AI.",
    },
    {
      term: "LLM (Large Language Model)",
      definition:
        "The technology behind AI assistants like ChatGPT and Claude. It has been trained on enormous amounts of text so it can understand and generate language. You do not need to remember this term.",
    },
    {
      term: "Machine Learning",
      definition:
        "How AI improves by studying lots of examples and finding patterns. Like how you learned to recognise faces as a baby, but with data instead of experience.",
    },
    {
      term: "Model",
      definition:
        "The \"brain\" of an AI system. Different models have different abilities. GPT-4 is a model. Claude is a model. When people talk about which AI is better, they are comparing models.",
    },
    {
      term: "Natural Language",
      definition:
        "Just normal human language, as opposed to computer code. When people say AI understands \"natural language,\" they mean you can talk to it in everyday English rather than using special commands.",
    },
    {
      term: "Neural Network",
      definition:
        "A type of computer system loosely inspired by how the human brain works. It is made up of layers of connected points that process information. You do not need to understand how it works to use AI.",
    },
    {
      term: "Open Source",
      definition:
        "Software that anyone can use, study, and modify for free. Some AI models are open source, meaning their code is publicly available. This is generally considered a good thing for transparency.",
    },
    {
      term: "Prompt",
      definition:
        "Whatever you type or say to an AI. It is just a fancy word for your question or instruction. \"What is the weather like?\" is a prompt. \"Write me a poem about my cat\" is also a prompt.",
    },
    {
      term: "Siri",
      definition:
        "Apple's voice assistant, built into iPhones, iPads, and Macs. You activate it by saying \"Hey Siri\" or pressing a button. It uses AI to understand your voice and respond.",
    },
    {
      term: "Smart Speaker",
      definition:
        "A speaker with a built-in voice assistant, like Amazon Echo (Alexa) or Google Nest. You talk to it to play music, set timers, ask questions, or control smart home devices.",
    },
    {
      term: "Token",
      definition:
        "A small piece of text that AI processes. Roughly speaking, one token is about one word. AI services sometimes have limits on how many tokens you can use, which is why free versions may have restrictions.",
    },
    {
      term: "Training",
      definition:
        "The process of teaching AI by feeding it large amounts of information. An AI is \"trained\" before you ever use it, like a student studying for years before starting work. You cannot change how it was trained.",
    },
    {
      term: "Voice Assistant",
      definition:
        "AI you can talk to out loud, like Siri (Apple), Alexa (Amazon), or Google Assistant. They use AI to understand your speech and respond. Very handy if you find typing difficult.",
    },
  ];

  return (
    <div>
      <h1 className="text-h1 font-bold mb-4" style={{ color: "#2D5A3D" }}>
        📖 Glossary
      </h1>
      <p className="text-body-lg mb-10" style={{ color: "#6B7280" }}>
        All the AI buzzwords explained in plain English. No tech degree required.
        Come back to this page whenever you see a word you do not recognise.
      </p>

      <div className="space-y-4">
        {terms.map((item, index) => (
          <div
            key={index}
            className="rounded-card p-6 border-2"
            style={{ backgroundColor: "#FDF2F8", borderColor: "#F9A8D4" }}
          >
            <h2 className="text-xl font-bold mb-2" style={{ color: "#9D174D" }}>
              {item.term}
            </h2>
            <p className="text-body leading-relaxed">{item.definition}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-card p-8 text-center mt-10"
        style={{ backgroundColor: "#2D5A3D", color: "white" }}
      >
        <p className="text-body-lg">
          <strong>You do not need to memorise these.</strong> Bookmark this page
          and come back whenever you need to. Learning the jargon takes time,
          and that is perfectly fine.
        </p>
      </div>
    </div>
  );
}
