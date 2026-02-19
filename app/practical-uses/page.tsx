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
        "Use AI as a memory aid. It can help you organise appointments, create to-do lists, and keep track of things.",
      example:
        '"Help me make a list of everything I need to do before my holiday next month."',
    },
  ];

  return (
    <div>
      <h1 className="text-h1 font-bold mb-4" style={{ color: "#2D5A3D" }}>
        💡 Practical Uses
      </h1>
      <p className="text-body-lg mb-10" style={{ color: "#6B7280" }}>
        Here are real, everyday ways AI can make your life easier. Each one
        includes an example of what you might say to an AI assistant.
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
        className="rounded-card p-8 text-center mt-10"
        style={{ backgroundColor: "#2D5A3D", color: "white" }}
      >
        <p className="text-h3 font-semibold mb-2">Remember</p>
        <p className="text-body-lg">
          You talk to AI just like you&apos;d talk to a helpful friend. No
          special commands needed. Just plain English.
        </p>
      </div>
    </div>
  );
}
