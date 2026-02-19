export default function PracticalUses() {
  const uses = [
    {
      emoji: "✉️",
      title: "Writing Emails & Letters",
      description:
        "Tell AI what you want to say, and it will write a polished email or letter for you. Great for formal letters to your bank, council, or doctor.",
      example:
        '"Help me write a letter to my GP asking to change my appointment to next Thursday."',
    },
    {
      emoji: "🍳",
      title: "Meal Planning & Recipes",
      description:
        "Tell it what's in your fridge and it will suggest recipes. It can also plan a week of meals and create a shopping list.",
      example:
        '"I have chicken, potatoes, and carrots. What can I make for dinner?"',
    },
    {
      emoji: "💊",
      title: "Understanding Medical Information",
      description:
        "Got a letter from the hospital full of jargon? AI can explain it in plain English. (Always check with your doctor for medical decisions.)",
      example:
        '"What does it mean when my blood test says my HbA1c is 48?"',
    },
    {
      emoji: "📞",
      title: "Preparing for Phone Calls",
      description:
        "Nervous about calling the bank or a company? AI can help you prepare what to say and what questions to ask.",
      example:
        '"I need to call my energy company about a wrong bill. What should I say?"',
    },
    {
      emoji: "🎁",
      title: "Gift Ideas",
      description:
        "Stuck on what to buy someone? Describe them and AI will suggest thoughtful gift ideas within your budget.",
      example:
        '"My granddaughter is turning 8 and loves horses. Gift ideas under £20?"',
    },
    {
      emoji: "📰",
      title: "Explaining the News",
      description:
        "Confused by something in the news? Ask AI to explain it simply, without the political spin.",
      example:
        '"What is this new AI law everyone is talking about? Explain it simply."',
    },
    {
      emoji: "🗺️",
      title: "Travel Planning",
      description:
        "AI can help plan trips, suggest destinations, find the best routes, and even help with packing lists.",
      example:
        '"I want to visit the Lake District for 3 days. Plan an itinerary for someone who can\'t walk too far."',
    },
    {
      emoji: "📝",
      title: "Remembering Things",
      description:
        "Use AI as a memory aid. It can help you organise appointments, create to-do lists, and set reminders.",
      example:
        '"Help me make a list of everything I need to do before my holiday next month."',
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-purple-700">
        💡 Practical Uses
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Here are real, everyday ways AI can make your life easier. Each one
        includes an example of what you might say to an AI assistant.
      </p>

      <div className="space-y-6">
        {uses.map((use, index) => (
          <div
            key={index}
            className="bg-purple-50 border border-purple-200 rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {use.emoji} {use.title}
            </h2>
            <p className="text-xl mb-3">{use.description}</p>
            <div className="bg-white rounded-lg p-4 text-lg italic text-purple-800">
              {use.example}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-xl p-6 text-center mt-8">
        <p className="text-lg text-gray-600">
          <strong>Remember:</strong> You talk to AI just like you&apos;d talk to a
          helpful friend. No special commands needed — just plain English.
        </p>
      </div>
    </div>
  );
}
