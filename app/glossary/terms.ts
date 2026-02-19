export type GlossaryTerm = {
  slug: string;
  term: string;
  simpleDefinition: string;
  example: string;
  analogy: string;
  relatedTerms: string[];
  category: "basics" | "tools" | "safety" | "technical" | "practical";
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "artificial-intelligence",
    term: "Artificial Intelligence (AI)",
    simpleDefinition:
      "Software that can perform tasks that normally require human thinking, like understanding language or spotting patterns.",
    example: "A phone assistant that answers questions and sets reminders.",
    analogy: "Think of it like a very capable helper that learns as it goes.",
    relatedTerms: ["machine-learning", "neural-network", "algorithm"],
    category: "basics",
  },
  {
    slug: "machine-learning",
    term: "Machine Learning",
    simpleDefinition:
      "A way for computers to learn from examples instead of being told every rule.",
    example: "An email service learning which messages are spam.",
    analogy: "Think of it like practicing with lots of flashcards until you get better.",
    relatedTerms: ["training-data", "supervised-learning", "model"],
    category: "basics",
  },
  {
    slug: "neural-network",
    term: "Neural Network",
    simpleDefinition:
      "A computer system built from layers of tiny calculators that work together to recognize patterns.",
    example: "A photo app using a neural network to recognize faces.",
    analogy: "Think of it like a team passing a message forward, each adding a little insight.",
    relatedTerms: ["deep-learning", "model", "parameter"],
    category: "technical",
  },
  {
    slug: "deep-learning",
    term: "Deep Learning",
    simpleDefinition:
      "A type of machine learning that uses very large neural networks with many layers.",
    example: "Speech recognition that improves by learning from millions of recordings.",
    analogy: "Think of it like a tall stack of filters that sharpen a picture step by step.",
    relatedTerms: ["neural-network", "training", "dataset"],
    category: "technical",
  },
  {
    slug: "natural-language-processing",
    term: "Natural Language Processing (NLP)",
    simpleDefinition:
      "Technology that helps computers understand and generate everyday human language.",
    example: "A chatbot understanding a customer support question.",
    analogy: "Think of it like a translator between people and computers.",
    relatedTerms: ["large-language-model", "chatbot", "prompt"],
    category: "technical",
  },
  {
    slug: "large-language-model",
    term: "Large Language Model (LLM)",
    simpleDefinition:
      "A model trained on huge amounts of text so it can generate and understand language.",
    example: "ChatGPT writing a friendly email draft.",
    analogy: "Think of it like a very well-read librarian who can summarize anything quickly.",
    relatedTerms: ["token", "context-window", "transformer"],
    category: "technical",
  },
  {
    slug: "chatgpt",
    term: "ChatGPT",
    simpleDefinition:
      "An AI assistant from OpenAI that answers questions and helps with writing.",
    example: "Asking ChatGPT to explain a letter from the bank.",
    analogy: "Think of it like a chatty helper that can draft responses for you.",
    relatedTerms: ["openai", "large-language-model", "prompt"],
    category: "tools",
  },
  {
    slug: "gpt",
    term: "GPT",
    simpleDefinition:
      "A family of language models made by OpenAI that powers tools like ChatGPT.",
    example: "GPT-4 generating a summary of a long article.",
    analogy: "Think of it like different engine sizes in the same car brand.",
    relatedTerms: ["openai", "model", "transformer"],
    category: "technical",
  },
  {
    slug: "claude",
    term: "Claude",
    simpleDefinition:
      "An AI assistant from Anthropic known for clear, friendly explanations.",
    example: "Using Claude to rewrite a message in a gentler tone.",
    analogy: "Think of it like a helpful editor with a calm voice.",
    relatedTerms: ["anthropic", "chatbot", "large-language-model"],
    category: "tools",
  },
  {
    slug: "gemini",
    term: "Gemini",
    simpleDefinition:
      "Google's AI assistant, integrated into Google services and apps.",
    example: "Gemini suggesting a reply inside Gmail.",
    analogy: "Think of it like a smart helper living inside Google products.",
    relatedTerms: ["google-deepmind", "chatbot", "multimodal"],
    category: "tools",
  },
  {
    slug: "copilot",
    term: "Copilot",
    simpleDefinition:
      "An AI helper from Microsoft that assists with writing, coding, and tasks.",
    example: "Copilot drafting a summary in Microsoft Word.",
    analogy: "Think of it like a co-worker who writes the first draft.",
    relatedTerms: ["microsoft-copilot", "assistant", "prompt"],
    category: "tools",
  },
  {
    slug: "prompt",
    term: "Prompt",
    simpleDefinition:
      "The message or instruction you give an AI.",
    example: "Typing " +
      '"Write a short thank-you note" into a chatbot.',
    analogy: "Think of it like a question you ask a helpful expert.",
    relatedTerms: ["system-prompt", "temperature", "context-window"],
    category: "basics",
  },
  {
    slug: "chatbot",
    term: "Chatbot",
    simpleDefinition:
      "A program you can talk to in text or voice.",
    example: "A website chat bubble that answers store hours.",
    analogy: "Think of it like a receptionist that never sleeps.",
    relatedTerms: ["voice-assistant", "natural-language-processing", "prompt"],
    category: "basics",
  },
  {
    slug: "algorithm",
    term: "Algorithm",
    simpleDefinition:
      "A step-by-step set of rules that tells a computer what to do.",
    example: "A map app choosing the fastest route.",
    analogy: "Think of it like a cooking recipe for computers.",
    relatedTerms: ["model", "optimization", "training"],
    category: "basics",
  },
  {
    slug: "data",
    term: "Data",
    simpleDefinition:
      "Information that a computer can store and use.",
    example: "Photos, emails, and clicks collected by an app.",
    analogy: "Think of it like the ingredients used to cook a meal.",
    relatedTerms: ["dataset", "training-data", "privacy"],
    category: "basics",
  },
  {
    slug: "training-data",
    term: "Training Data",
    simpleDefinition:
      "The examples used to teach an AI model.",
    example: "Millions of labeled photos used to teach image recognition.",
    analogy: "Think of it like practice questions before an exam.",
    relatedTerms: ["dataset", "supervised-learning", "annotation"],
    category: "technical",
  },
  {
    slug: "bias",
    term: "Bias",
    simpleDefinition:
      "Unfair or one-sided results caused by skewed data or design choices.",
    example: "A hiring tool favoring one group over another.",
    analogy: "Think of it like a bent ruler that measures wrong.",
    relatedTerms: ["fairness", "training-data", "safety"],
    category: "safety",
  },
  {
    slug: "hallucination",
    term: "Hallucination",
    simpleDefinition:
      "When an AI confidently makes something up that is not true.",
    example: "An AI inventing a book title that does not exist.",
    analogy: "Think of it like a student guessing and sounding certain.",
    relatedTerms: ["fact-checking", "grounding", "rag"],
    category: "safety",
  },
  {
    slug: "fine-tuning",
    term: "Fine-Tuning",
    simpleDefinition:
      "Training an existing model on a smaller, specific set of data to specialize it.",
    example: "A hospital fine-tuning a model on medical documents.",
    analogy: "Think of it like a general doctor training to become a specialist.",
    relatedTerms: ["training", "model", "transfer-learning"],
    category: "technical",
  },
  {
    slug: "token",
    term: "Token",
    simpleDefinition:
      "A small chunk of text that a language model processes.",
    example: "A sentence might be split into 10 to 15 tokens.",
    analogy: "Think of it like Lego pieces that build a sentence.",
    relatedTerms: ["context-window", "large-language-model", "prompt"],
    category: "technical",
  },
  {
    slug: "api",
    term: "API",
    simpleDefinition:
      "A way for software to talk to other software.",
    example: "A weather app using an API to fetch forecasts.",
    analogy: "Think of it like a waiter taking orders between you and the kitchen.",
    relatedTerms: ["integration", "webhook", "saas"],
    category: "practical",
  },
  {
    slug: "open-source",
    term: "Open Source",
    simpleDefinition:
      "Software with code that anyone can view, use, and improve.",
    example: "A community fixing bugs in an open source AI tool.",
    analogy: "Think of it like a public cookbook anyone can edit.",
    relatedTerms: ["license", "community", "model"],
    category: "practical",
  },
  {
    slug: "model",
    term: "Model",
    simpleDefinition:
      "The trained system that produces AI results.",
    example: "A translation model turning English into Spanish.",
    analogy: "Think of it like a musician who learned from many songs.",
    relatedTerms: ["training", "inference", "parameter"],
    category: "technical",
  },
  {
    slug: "parameter",
    term: "Parameter",
    simpleDefinition:
      "A value inside a model that helps decide its output.",
    example: "A large model can have billions of parameters.",
    analogy: "Think of it like tiny knobs that tune how the model behaves.",
    relatedTerms: ["model", "training", "optimization"],
    category: "technical",
  },
  {
    slug: "transformer",
    term: "Transformer",
    simpleDefinition:
      "A neural network design that is especially good at language tasks.",
    example: "Most modern chatbots are based on transformers.",
    analogy: "Think of it like a very fast reader that keeps track of context.",
    relatedTerms: ["large-language-model", "attention", "token"],
    category: "technical",
  },
  {
    slug: "generative-ai",
    term: "Generative AI",
    simpleDefinition:
      "AI that creates new content like text, images, or audio.",
    example: "An image generator producing a watercolor landscape.",
    analogy: "Think of it like a creative assistant with infinite ideas.",
    relatedTerms: ["image-generation", "text-generation", "video-generation"],
    category: "basics",
  },
  {
    slug: "agi",
    term: "AGI (Artificial General Intelligence)",
    simpleDefinition:
      "A hypothetical AI that could perform any intellectual task a human can.",
    example: "There is no confirmed AGI today; it is still a research goal.",
    analogy: "Think of it like a Swiss Army knife of intelligence.",
    relatedTerms: ["narrow-ai", "safety", "future-of-ai"],
    category: "basics",
  },
  {
    slug: "narrow-ai",
    term: "Narrow AI",
    simpleDefinition:
      "AI built to do one specific task very well.",
    example: "A system that only detects credit card fraud.",
    analogy: "Think of it like a specialist who does one job brilliantly.",
    relatedTerms: ["agi", "automation", "model"],
    category: "basics",
  },
  {
    slug: "computer-vision",
    term: "Computer Vision",
    simpleDefinition:
      "AI that understands images and videos.",
    example: "A phone camera identifying a plant.",
    analogy: "Think of it like giving a computer a pair of eyes.",
    relatedTerms: ["image-recognition", "object-detection", "deep-learning"],
    category: "technical",
  },
  {
    slug: "speech-recognition",
    term: "Speech Recognition",
    simpleDefinition:
      "Technology that turns spoken words into text.",
    example: "Dictating a message on your phone.",
    analogy: "Think of it like a fast typist listening to you.",
    relatedTerms: ["text-to-speech", "voice-assistant", "audio"],
    category: "technical",
  },
  {
    slug: "text-to-speech",
    term: "Text to Speech (TTS)",
    simpleDefinition:
      "Technology that reads written text out loud.",
    example: "A news app reading articles to you.",
    analogy: "Think of it like a narrator for anything you read.",
    relatedTerms: ["speech-recognition", "voice-cloning", "accessibility"],
    category: "practical",
  },
  {
    slug: "voice-assistant",
    term: "Voice Assistant",
    simpleDefinition:
      "An AI you speak to for help with tasks or questions.",
    example: "Asking a smart speaker to set a timer.",
    analogy: "Think of it like a hands-free helper in your home.",
    relatedTerms: ["siri", "alexa", "smart-speaker"],
    category: "practical",
  },
  {
    slug: "siri",
    term: "Siri",
    simpleDefinition:
      "Apple's voice assistant for iPhone, iPad, and Mac.",
    example: "Saying " +
      '"Hey Siri, call my daughter" on an iPhone.',
    analogy: "Think of it like a built-in assistant for Apple devices.",
    relatedTerms: ["apple-intelligence", "voice-assistant", "smartphone"],
    category: "tools",
  },
  {
    slug: "alexa",
    term: "Alexa",
    simpleDefinition:
      "Amazon's voice assistant found in Echo devices.",
    example: "Asking Alexa to play the radio.",
    analogy: "Think of it like a helpful roommate in a speaker.",
    relatedTerms: ["voice-assistant", "smart-speaker", "iot"],
    category: "tools",
  },
  {
    slug: "recommendation-system",
    term: "Recommendation System",
    simpleDefinition:
      "AI that suggests items you might like.",
    example: "Netflix suggesting a new series.",
    analogy: "Think of it like a shop assistant who remembers your taste.",
    relatedTerms: ["personalization", "algorithm", "data"],
    category: "practical",
  },
  {
    slug: "automation",
    term: "Automation",
    simpleDefinition:
      "Using software or machines to do tasks automatically.",
    example: "An app automatically sorting your photos by date.",
    analogy: "Think of it like setting up dominoes so work happens on its own.",
    relatedTerms: ["workflow-automation", "robot", "integration"],
    category: "practical",
  },
  {
    slug: "robot",
    term: "Robot",
    simpleDefinition:
      "A machine that can perform physical tasks on its own or with guidance.",
    example: "A robot vacuum cleaning floors.",
    analogy: "Think of it like a mechanical helper.",
    relatedTerms: ["automation", "autonomous-vehicle", "drone"],
    category: "practical",
  },
  {
    slug: "deepfake",
    term: "Deepfake",
    simpleDefinition:
      "AI-made media that looks real but is actually fake.",
    example: "A fake video of a celebrity saying something they never said.",
    analogy: "Think of it like a very convincing movie special effect.",
    relatedTerms: ["voice-cloning", "misinformation", "phishing"],
    category: "safety",
  },
  {
    slug: "voice-cloning",
    term: "Voice Cloning",
    simpleDefinition:
      "AI that can mimic a person's voice using samples.",
    example: "A scam call that sounds like a family member.",
    analogy: "Think of it like a voice impersonator with perfect memory.",
    relatedTerms: ["deepfake", "text-to-speech", "fraud"],
    category: "safety",
  },
  {
    slug: "phishing",
    term: "Phishing",
    simpleDefinition:
      "A scam that tricks people into giving personal information.",
    example: "A fake bank email asking you to log in.",
    analogy: "Think of it like a fake key that opens your door.",
    relatedTerms: ["malware", "fraud", "privacy"],
    category: "safety",
  },
  {
    slug: "malware",
    term: "Malware",
    simpleDefinition:
      "Harmful software designed to steal data or damage devices.",
    example: "A virus that locks your files until you pay.",
    analogy: "Think of it like germs for computers.",
    relatedTerms: ["phishing", "ransomware", "cybersecurity"],
    category: "safety",
  },
  {
    slug: "encryption",
    term: "Encryption",
    simpleDefinition:
      "Scrambling data so only the right people can read it.",
    example: "A messaging app protecting your chats.",
    analogy: "Think of it like a locked safe for information.",
    relatedTerms: ["privacy", "security", "gdpr"],
    category: "safety",
  },
  {
    slug: "privacy",
    term: "Privacy",
    simpleDefinition:
      "Keeping your personal information under your control.",
    example: "Choosing what a social app can access on your phone.",
    analogy: "Think of it like curtains on your windows.",
    relatedTerms: ["consent", "gdpr", "cookies"],
    category: "safety",
  },
  {
    slug: "cookies",
    term: "Cookies",
    simpleDefinition:
      "Small files that websites store to remember you.",
    example: "A site remembering items in your shopping basket.",
    analogy: "Think of them like sticky notes left by websites.",
    relatedTerms: ["privacy", "consent", "tracking"],
    category: "safety",
  },
  {
    slug: "gdpr",
    term: "GDPR",
    simpleDefinition:
      "A European privacy law that gives people more control over their data.",
    example: "A site asking your permission before tracking you.",
    analogy: "Think of it like rules that protect your personal space online.",
    relatedTerms: ["privacy", "consent", "data"],
    category: "safety",
  },
  {
    slug: "consent",
    term: "Consent",
    simpleDefinition:
      "Clear permission for a company to use your data.",
    example: "Clicking " +
      '"Accept" on a cookie banner.',
    analogy: "Think of it like giving someone a key to your house.",
    relatedTerms: ["privacy", "gdpr", "opt-out"],
    category: "safety",
  },
  {
    slug: "opt-out",
    term: "Opt-Out",
    simpleDefinition:
      "A choice to stop data collection or marketing.",
    example: "Unchecking a box to stop tracking.",
    analogy: "Think of it like saying " +
      '"No, thank you" to a subscription.',
    relatedTerms: ["consent", "privacy", "gdpr"],
    category: "safety",
  },
  {
    slug: "cloud-computing",
    term: "Cloud Computing",
    simpleDefinition:
      "Using remote servers over the internet instead of your own device.",
    example: "Storing photos in Google Photos.",
    analogy: "Think of it like renting a storage unit online.",
    relatedTerms: ["edge-computing", "saas", "data"],
    category: "practical",
  },
  {
    slug: "edge-computing",
    term: "Edge Computing",
    simpleDefinition:
      "Processing data on or near the device instead of in a distant cloud.",
    example: "A smart camera recognizing faces without sending video online.",
    analogy: "Think of it like cooking at home instead of ordering delivery.",
    relatedTerms: ["cloud-computing", "iot", "latency"],
    category: "technical",
  },
  {
    slug: "iot",
    term: "Internet of Things (IoT)",
    simpleDefinition:
      "Everyday devices connected to the internet.",
    example: "A smart thermostat you control from your phone.",
    analogy: "Think of it like your home gadgets joining a group chat.",
    relatedTerms: ["smart-home", "wearable", "edge-computing"],
    category: "practical",
  },
  {
    slug: "smart-home",
    term: "Smart Home",
    simpleDefinition:
      "A home with connected devices you can control digitally.",
    example: "Lights that turn on with a voice command.",
    analogy: "Think of it like a house with a remote control.",
    relatedTerms: ["iot", "voice-assistant", "automation"],
    category: "practical",
  },
  {
    slug: "wearable",
    term: "Wearable",
    simpleDefinition:
      "A device you wear that tracks information or provides features.",
    example: "A smartwatch counting your steps.",
    analogy: "Think of it like a tiny computer you wear.",
    relatedTerms: ["health-tech", "sensor", "smartphone"],
    category: "practical",
  },
  {
    slug: "autonomous-vehicle",
    term: "Autonomous Vehicle",
    simpleDefinition:
      "A car or vehicle that can drive itself using sensors and AI.",
    example: "A shuttle that navigates a set route automatically.",
    analogy: "Think of it like cruise control on steroids.",
    relatedTerms: ["computer-vision", "robot", "safety"],
    category: "practical",
  },
  {
    slug: "drone",
    term: "Drone",
    simpleDefinition:
      "A small flying robot controlled by software or a person.",
    example: "A drone delivering medicine in rural areas.",
    analogy: "Think of it like a remote-controlled helicopter with a camera.",
    relatedTerms: ["robot", "computer-vision", "autonomy"],
    category: "practical",
  },
  {
    slug: "facial-recognition",
    term: "Facial Recognition",
    simpleDefinition:
      "AI that identifies people by their face.",
    example: "Unlocking a phone with Face ID.",
    analogy: "Think of it like a bouncer who recognizes regulars.",
    relatedTerms: ["computer-vision", "privacy", "security"],
    category: "safety",
  },
  {
    slug: "sentiment-analysis",
    term: "Sentiment Analysis",
    simpleDefinition:
      "AI that detects emotion or tone in text.",
    example: "A company measuring if reviews are positive or negative.",
    analogy: "Think of it like mood lighting for words.",
    relatedTerms: ["natural-language-processing", "analytics", "text"],
    category: "technical",
  },
  {
    slug: "predictive-text",
    term: "Predictive Text",
    simpleDefinition:
      "Suggestions that guess what you will type next.",
    example: "Your phone offering the next word in a message.",
    analogy: "Think of it like a friend finishing your sentence.",
    relatedTerms: ["autocomplete", "language-model", "keyboard"],
    category: "practical",
  },
  {
    slug: "autocomplete",
    term: "Autocomplete",
    simpleDefinition:
      "A feature that finishes a word or phrase as you type.",
    example: "Google Search completing your query.",
    analogy: "Think of it like a shortcut for typing.",
    relatedTerms: ["predictive-text", "search", "suggestions"],
    category: "practical",
  },
  {
    slug: "spell-check",
    term: "Spell Check",
    simpleDefinition:
      "Software that finds and fixes spelling mistakes.",
    example: "Red underlines in a word processor.",
    analogy: "Think of it like a proofreader for typos.",
    relatedTerms: ["grammar-check", "writing-tools", "autocorrect"],
    category: "practical",
  },
  {
    slug: "translation",
    term: "Translation",
    simpleDefinition:
      "Converting text or speech from one language to another.",
    example: "A travel app translating a menu.",
    analogy: "Think of it like a bilingual friend on call.",
    relatedTerms: ["natural-language-processing", "speech-recognition", "multilingual"],
    category: "practical",
  },
  {
    slug: "image-generation",
    term: "Image Generation",
    simpleDefinition:
      "AI that creates images from text descriptions.",
    example: "Generating a picture of a " +
      '"sunset over the sea" from a prompt.',
    analogy: "Think of it like a painter who works from your description.",
    relatedTerms: ["generative-ai", "dall-e", "stable-diffusion"],
    category: "tools",
  },
  {
    slug: "dall-e",
    term: "DALL-E",
    simpleDefinition:
      "An OpenAI tool that generates images from text.",
    example: "Making a custom illustration for a birthday card.",
    analogy: "Think of it like a magic sketchpad that follows directions.",
    relatedTerms: ["openai", "image-generation", "prompt"],
    category: "tools",
  },
  {
    slug: "midjourney",
    term: "Midjourney",
    simpleDefinition:
      "A popular AI image generator with a distinct artistic style.",
    example: "Creating a fantasy landscape for a poster.",
    analogy: "Think of it like a digital art studio on demand.",
    relatedTerms: ["image-generation", "prompt", "creative-tools"],
    category: "tools",
  },
  {
    slug: "stable-diffusion",
    term: "Stable Diffusion",
    simpleDefinition:
      "An open source model used for generating images.",
    example: "Running image generation on your own computer.",
    analogy: "Think of it like a recipe anyone can cook at home.",
    relatedTerms: ["open-source", "image-generation", "model"],
    category: "tools",
  },
  {
    slug: "video-generation",
    term: "Video Generation",
    simpleDefinition:
      "AI that creates short videos from text or images.",
    example: "A tool generating an animated clip from a script.",
    analogy: "Think of it like a movie studio in a small box.",
    relatedTerms: ["generative-ai", "sora", "deepfake"],
    category: "tools",
  },
  {
    slug: "sora",
    term: "Sora",
    simpleDefinition:
      "A video generation model from OpenAI.",
    example: "Creating a short video concept from a sentence.",
    analogy: "Think of it like a storyboard artist that also animates.",
    relatedTerms: ["openai", "video-generation", "generative-ai"],
    category: "tools",
  },
  {
    slug: "augmented-reality",
    term: "Augmented Reality (AR)",
    simpleDefinition:
      "Digital content layered on top of the real world.",
    example: "A phone app showing furniture in your room.",
    analogy: "Think of it like adding stickers to the real world.",
    relatedTerms: ["virtual-reality", "mixed-reality", "spatial-computing"],
    category: "practical",
  },
  {
    slug: "virtual-reality",
    term: "Virtual Reality (VR)",
    simpleDefinition:
      "A fully digital environment you can look around in.",
    example: "A headset that puts you inside a museum tour.",
    analogy: "Think of it like stepping into a video game.",
    relatedTerms: ["augmented-reality", "metaverse", "headset"],
    category: "practical",
  },
  {
    slug: "metaverse",
    term: "Metaverse",
    simpleDefinition:
      "A concept for shared online virtual worlds.",
    example: "Meeting friends in a virtual space.",
    analogy: "Think of it like a persistent digital city.",
    relatedTerms: ["virtual-reality", "augmented-reality", "web3"],
    category: "practical",
  },
  {
    slug: "blockchain",
    term: "Blockchain",
    simpleDefinition:
      "A shared digital record that is hard to change.",
    example: "Recording transactions in a public ledger.",
    analogy: "Think of it like a notebook everyone can see but no one can erase.",
    relatedTerms: ["web3", "cryptocurrency", "decentralization"],
    category: "technical",
  },
  {
    slug: "web3",
    term: "Web3",
    simpleDefinition:
      "A vision of the internet built on decentralized technologies.",
    example: "Apps that use blockchain instead of a central server.",
    analogy: "Think of it like a neighborhood owned by its residents.",
    relatedTerms: ["blockchain", "cryptocurrency", "wallet"],
    category: "technical",
  },
  {
    slug: "cryptocurrency",
    term: "Cryptocurrency",
    simpleDefinition:
      "Digital money secured by cryptography and blockchain.",
    example: "Bitcoin being used for online payments.",
    analogy: "Think of it like digital cash in a secure envelope.",
    relatedTerms: ["blockchain", "wallet", "token"],
    category: "practical",
  },
  {
    slug: "digital-assistant",
    term: "Digital Assistant",
    simpleDefinition:
      "Software that helps you with tasks like scheduling or writing.",
    example: "An assistant that drafts replies to emails.",
    analogy: "Think of it like a virtual personal assistant.",
    relatedTerms: ["chatbot", "voice-assistant", "automation"],
    category: "practical",
  },
  {
    slug: "workflow-automation",
    term: "Workflow Automation",
    simpleDefinition:
      "Connecting apps so tasks happen automatically.",
    example: "Saving email attachments to cloud storage.",
    analogy: "Think of it like a row of conveyor belts between apps.",
    relatedTerms: ["automation", "integration", "no-code"],
    category: "practical",
  },
  {
    slug: "no-code",
    term: "No-Code",
    simpleDefinition:
      "Building software with visual tools instead of programming.",
    example: "Creating a simple website using a drag-and-drop builder.",
    analogy: "Think of it like building with blocks instead of tools.",
    relatedTerms: ["low-code", "workflow-automation", "saas"],
    category: "practical",
  },
  {
    slug: "low-code",
    term: "Low-Code",
    simpleDefinition:
      "Building software with minimal hand-written code.",
    example: "Customizing a template with a few scripts.",
    analogy: "Think of it like assembling furniture with a few screws.",
    relatedTerms: ["no-code", "developer-tools", "automation"],
    category: "practical",
  },
  {
    slug: "saas",
    term: "SaaS (Software as a Service)",
    simpleDefinition:
      "Software you use through a browser instead of installing.",
    example: "Using an online email service.",
    analogy: "Think of it like renting software instead of buying it.",
    relatedTerms: ["subscription", "cloud-computing", "freemium"],
    category: "practical",
  },
  {
    slug: "freemium",
    term: "Freemium",
    simpleDefinition:
      "A free version with paid upgrades for extra features.",
    example: "A photo app that is free but charges for exports.",
    analogy: "Think of it like a free sample with a full-size option.",
    relatedTerms: ["subscription", "saas", "pricing"],
    category: "practical",
  },
  {
    slug: "subscription",
    term: "Subscription",
    simpleDefinition:
      "Paying regularly for ongoing access to a service.",
    example: "A monthly fee for a streaming service.",
    analogy: "Think of it like a magazine you receive every month.",
    relatedTerms: ["freemium", "saas", "billing"],
    category: "practical",
  },
  {
    slug: "openai",
    term: "OpenAI",
    simpleDefinition:
      "The company behind ChatGPT and the GPT models.",
    example: "OpenAI releasing a new version of GPT.",
    analogy: "Think of it like a research lab that builds useful tools.",
    relatedTerms: ["chatgpt", "gpt", "sora"],
    category: "tools",
  },
  {
    slug: "anthropic",
    term: "Anthropic",
    simpleDefinition:
      "The company that makes the Claude AI assistant.",
    example: "Anthropic publishing safety research.",
    analogy: "Think of it like a company focused on careful AI.",
    relatedTerms: ["claude", "ai-safety", "large-language-model"],
    category: "tools",
  },
  {
    slug: "google-deepmind",
    term: "Google DeepMind",
    simpleDefinition:
      "Google's AI research lab behind systems like AlphaFold and Gemini.",
    example: "DeepMind advancing medical research with AI.",
    analogy: "Think of it like a big R&D lab for AI.",
    relatedTerms: ["gemini", "research", "model"],
    category: "tools",
  },
  {
    slug: "meta-ai",
    term: "Meta AI",
    simpleDefinition:
      "Meta's AI team and products used across Facebook, Instagram, and more.",
    example: "AI helping recommend posts in your feed.",
    analogy: "Think of it like Meta's AI engine under the hood.",
    relatedTerms: ["recommendation-system", "open-source", "llama"],
    category: "tools",
  },
  {
    slug: "apple-intelligence",
    term: "Apple Intelligence",
    simpleDefinition:
      "Apple's suite of AI features built into its devices.",
    example: "On-device summaries of notifications.",
    analogy: "Think of it like smart features that stay on your iPhone.",
    relatedTerms: ["siri", "privacy", "edge-computing"],
    category: "tools",
  },
  {
    slug: "microsoft-copilot",
    term: "Microsoft Copilot",
    simpleDefinition:
      "Microsoft's AI assistant inside Windows and Office.",
    example: "Copilot creating a PowerPoint outline.",
    analogy: "Think of it like a built-in office assistant.",
    relatedTerms: ["copilot", "saas", "workflow-automation"],
    category: "tools",
  },
  {
    slug: "samsung-galaxy-ai",
    term: "Samsung Galaxy AI",
    simpleDefinition:
      "Samsung's AI features for Galaxy phones.",
    example: "Live translation during phone calls.",
    analogy: "Think of it like a smart toolkit built into your phone.",
    relatedTerms: ["translation", "smartphone", "edge-computing"],
    category: "tools",
  },
  {
    slug: "supervised-learning",
    term: "Supervised Learning",
    simpleDefinition:
      "Training with labeled examples where the right answer is known.",
    example: "Teaching a model to label cats vs dogs using tagged photos.",
    analogy: "Think of it like a teacher marking your homework.",
    relatedTerms: ["training-data", "annotation", "dataset"],
    category: "technical",
  },
  {
    slug: "unsupervised-learning",
    term: "Unsupervised Learning",
    simpleDefinition:
      "Learning patterns from data without labels.",
    example: "Grouping customers by shopping behavior.",
    analogy: "Think of it like sorting a box of buttons by shape.",
    relatedTerms: ["clustering", "dataset", "model"],
    category: "technical",
  },
  {
    slug: "reinforcement-learning",
    term: "Reinforcement Learning",
    simpleDefinition:
      "Learning by trial and error using rewards.",
    example: "An AI learning to play a game by scoring points.",
    analogy: "Think of it like training a pet with treats.",
    relatedTerms: ["reward-model", "agent", "policy"],
    category: "technical",
  },
  {
    slug: "dataset",
    term: "Dataset",
    simpleDefinition:
      "A collection of data used for training or testing.",
    example: "A dataset of labeled customer reviews.",
    analogy: "Think of it like a big binder of examples.",
    relatedTerms: ["training-data", "benchmark", "data"],
    category: "technical",
  },
  {
    slug: "annotation",
    term: "Annotation",
    simpleDefinition:
      "Labels or notes added to data to make it usable for training.",
    example: "Drawing boxes around cars in images.",
    analogy: "Think of it like highlighting answers in a textbook.",
    relatedTerms: ["training-data", "supervised-learning", "dataset"],
    category: "technical",
  },
  {
    slug: "benchmark",
    term: "Benchmark",
    simpleDefinition:
      "A standard test used to compare models.",
    example: "A math exam used to compare student scores.",
    analogy: "Think of it like a race track for AI performance.",
    relatedTerms: ["accuracy", "evaluation", "model"],
    category: "technical",
  },
  {
    slug: "accuracy",
    term: "Accuracy",
    simpleDefinition:
      "How often a model gives the correct answer.",
    example: "An email filter that is correct 95% of the time.",
    analogy: "Think of it like hitting the target in archery.",
    relatedTerms: ["precision", "recall", "evaluation"],
    category: "technical",
  },
  {
    slug: "precision",
    term: "Precision",
    simpleDefinition:
      "How many of the model's positive results are actually correct.",
    example: "A test that labels fewer false alarms.",
    analogy: "Think of it like aiming carefully to avoid false hits.",
    relatedTerms: ["recall", "accuracy", "evaluation"],
    category: "technical",
  },
  {
    slug: "recall",
    term: "Recall",
    simpleDefinition:
      "How many of the real positives the model finds.",
    example: "A scan catching most real issues but also some false alarms.",
    analogy: "Think of it like casting a wide net.",
    relatedTerms: ["precision", "accuracy", "evaluation"],
    category: "technical",
  },
  {
    slug: "inference",
    term: "Inference",
    simpleDefinition:
      "Using a trained model to make predictions or outputs.",
    example: "A model generating a response to your question.",
    analogy: "Think of it like a chef serving a meal after training.",
    relatedTerms: ["model", "latency", "serving"],
    category: "technical",
  },
  {
    slug: "embedding",
    term: "Embedding",
    simpleDefinition:
      "A way to turn text or images into numbers that capture meaning.",
    example: "Searching documents by meaning instead of exact words.",
    analogy: "Think of it like turning words into coordinates on a map.",
    relatedTerms: ["vector", "semantic-search", "rag"],
    category: "technical",
  },
  {
    slug: "vector",
    term: "Vector",
    simpleDefinition:
      "A list of numbers that represents something like a word or image.",
    example: "A word turned into a vector for similarity search.",
    analogy: "Think of it like a fingerprint made of numbers.",
    relatedTerms: ["embedding", "vector-database", "semantic-search"],
    category: "technical",
  },
  {
    slug: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    simpleDefinition:
      "A method where AI retrieves facts from a source before writing an answer.",
    example: "A chatbot that reads your documents before replying.",
    analogy: "Think of it like answering with an open book.",
    relatedTerms: ["retrieval", "knowledge-base", "grounding"],
    category: "technical",
  },
  {
    slug: "retrieval-augmented-generation",
    term: "Retrieval Augmented Generation",
    simpleDefinition:
      "Another name for RAG, where AI pulls facts from sources before writing.",
    example: "Searching a company wiki to answer staff questions.",
    analogy: "Think of it like consulting a handbook while you speak.",
    relatedTerms: ["rag", "semantic-search", "knowledge-base"],
    category: "technical",
  },
  {
    slug: "knowledge-graph",
    term: "Knowledge Graph",
    simpleDefinition:
      "A structured map of facts and how they relate.",
    example: "A search engine connecting people, places, and events.",
    analogy: "Think of it like a spiderweb of facts.",
    relatedTerms: ["semantic-search", "entity", "knowledge-base"],
    category: "technical",
  },
  {
    slug: "semantic-search",
    term: "Semantic Search",
    simpleDefinition:
      "Search that focuses on meaning rather than exact keywords.",
    example: "Searching for " +
      '"heart attack" and also finding "cardiac arrest".',
    analogy: "Think of it like a librarian who understands your intent.",
    relatedTerms: ["embedding", "vector", "rag"],
    category: "technical",
  },
  {
    slug: "zero-shot",
    term: "Zero-Shot",
    simpleDefinition:
      "Doing a task without seeing specific examples first.",
    example: "An AI classifying a new category from a description.",
    analogy: "Think of it like answering a question on a topic you just read.",
    relatedTerms: ["few-shot", "prompt", "generalization"],
    category: "technical",
  },
  {
    slug: "few-shot",
    term: "Few-Shot",
    simpleDefinition:
      "Doing a task after seeing a few examples.",
    example: "Showing a model three examples of the style you want.",
    analogy: "Think of it like learning after a quick demo.",
    relatedTerms: ["zero-shot", "prompt", "context-window"],
    category: "technical",
  },
  {
    slug: "chain-of-thought",
    term: "Chain of Thought",
    simpleDefinition:
      "A step-by-step reasoning process used to solve a problem.",
    example: "An AI showing its steps for a math question.",
    analogy: "Think of it like seeing the working, not just the answer.",
    relatedTerms: ["reasoning", "prompt", "system-prompt"],
    category: "technical",
  },
  {
    slug: "system-prompt",
    term: "System Prompt",
    simpleDefinition:
      "Instructions given to an AI to define its role and behavior.",
    example: "Telling a chatbot to reply like a friendly tutor.",
    analogy: "Think of it like setting the rules for a game.",
    relatedTerms: ["prompt", "guardrails", "policy"],
    category: "technical",
  },
  {
    slug: "temperature",
    term: "Temperature",
    simpleDefinition:
      "A setting that controls how creative or predictable an AI is.",
    example: "Lower temperature for factual answers, higher for creativity.",
    analogy: "Think of it like a creativity dial.",
    relatedTerms: ["sampling", "prompt", "model"],
    category: "technical",
  },
  {
    slug: "context-window",
    term: "Context Window",
    simpleDefinition:
      "How much text a model can consider at once.",
    example: "A long document might not fit in one prompt.",
    analogy: "Think of it like a desk that can hold only so many papers.",
    relatedTerms: ["token", "large-language-model", "memory"],
    category: "technical",
  },
  {
    slug: "multimodal",
    term: "Multimodal",
    simpleDefinition:
      "AI that works with more than one type of data, like text and images.",
    example: "Uploading a photo and asking questions about it.",
    analogy: "Think of it like a helper who can read and see.",
    relatedTerms: ["computer-vision", "speech-recognition", "large-language-model"],
    category: "technical",
  },
  {
    slug: "assistant",
    term: "AI Assistant",
    simpleDefinition:
      "An AI tool that helps with tasks by conversation.",
    example: "A chatbot that drafts a shopping list.",
    analogy: "Think of it like a digital helper by your side.",
    relatedTerms: ["chatbot", "digital-assistant", "prompt"],
    category: "basics",
  },
  {
    slug: "training",
    term: "Training",
    simpleDefinition:
      "The process of teaching an AI by showing it lots of data.",
    example: "Training a model on decades of news articles.",
    analogy: "Think of it like studying for years before a job.",
    relatedTerms: ["training-data", "model", "fine-tuning"],
    category: "technical",
  },
  {
    slug: "dataset-shift",
    term: "Dataset Shift",
    simpleDefinition:
      "When real-world data changes so a model performs worse.",
    example: "A model trained on old slang missing new terms.",
    analogy: "Think of it like a map that is out of date.",
    relatedTerms: ["monitoring", "drift", "evaluation"],
    category: "safety",
  },
  {
    slug: "data-drift",
    term: "Data Drift",
    simpleDefinition:
      "A gradual change in data that can reduce model accuracy.",
    example: "Shopping habits changing after a new product launch.",
    analogy: "Think of it like the weather slowly changing seasons.",
    relatedTerms: ["monitoring", "dataset-shift", "model"],
    category: "safety",
  },
  {
    slug: "monitoring",
    term: "Model Monitoring",
    simpleDefinition:
      "Watching how a model performs over time.",
    example: "Tracking if a chatbot's answers become less helpful.",
    analogy: "Think of it like a regular health checkup.",
    relatedTerms: ["evaluation", "data-drift", "safety"],
    category: "safety",
  },
  {
    slug: "evaluation",
    term: "Evaluation",
    simpleDefinition:
      "Testing an AI to see how well it performs.",
    example: "Comparing a model's answers to a gold standard.",
    analogy: "Think of it like grading a test.",
    relatedTerms: ["benchmark", "accuracy", "monitoring"],
    category: "technical",
  },
  {
    slug: "guardrails",
    term: "Guardrails",
    simpleDefinition:
      "Safety rules that limit what an AI can do.",
    example: "Blocking a chatbot from giving medical advice.",
    analogy: "Think of it like a fence around a playground.",
    relatedTerms: ["safety", "policy", "moderation"],
    category: "safety",
  },
  {
    slug: "moderation",
    term: "Moderation",
    simpleDefinition:
      "Filtering content to reduce harmful or unsafe outputs.",
    example: "Removing abusive replies in a chat system.",
    analogy: "Think of it like a referee keeping the game fair.",
    relatedTerms: ["guardrails", "safety", "policy"],
    category: "safety",
  },
  {
    slug: "safety",
    term: "AI Safety",
    simpleDefinition:
      "Practices that keep AI systems reliable and non-harmful.",
    example: "Testing a model before letting it answer customer questions.",
    analogy: "Think of it like seatbelts and brakes for AI.",
    relatedTerms: ["guardrails", "bias", "monitoring"],
    category: "safety",
  },
  {
    slug: "grounding",
    term: "Grounding",
    simpleDefinition:
      "Linking AI outputs to real sources or evidence.",
    example: "A bot citing a policy document when answering.",
    analogy: "Think of it like showing your sources in a report.",
    relatedTerms: ["rag", "fact-checking", "knowledge-base"],
    category: "technical",
  },
  {
    slug: "fact-checking",
    term: "Fact-Checking",
    simpleDefinition:
      "Verifying AI output against trusted sources.",
    example: "Confirming a date with a government website.",
    analogy: "Think of it like double-checking a receipt.",
    relatedTerms: ["hallucination", "grounding", "safety"],
    category: "safety",
  },
  {
    slug: "retrieval",
    term: "Retrieval",
    simpleDefinition:
      "Finding relevant information before generating an answer.",
    example: "Searching a document database for a policy.",
    analogy: "Think of it like looking up a page in a book before speaking.",
    relatedTerms: ["rag", "semantic-search", "knowledge-base"],
    category: "technical",
  },
  {
    slug: "knowledge-base",
    term: "Knowledge Base",
    simpleDefinition:
      "A collection of documents used to answer questions.",
    example: "A help center with FAQs and guides.",
    analogy: "Think of it like a filing cabinet of answers.",
    relatedTerms: ["retrieval", "rag", "faq"],
    category: "practical",
  },
  {
    slug: "vector-database",
    term: "Vector Database",
    simpleDefinition:
      "A database built to store and search embeddings.",
    example: "Finding similar customer support tickets.",
    analogy: "Think of it like a library organized by meaning.",
    relatedTerms: ["embedding", "vector", "semantic-search"],
    category: "technical",
  },
  {
    slug: "search",
    term: "Search",
    simpleDefinition:
      "Finding information by matching queries to documents.",
    example: "Typing a question into a search engine.",
    analogy: "Think of it like asking a librarian for a book.",
    relatedTerms: ["semantic-search", "autocomplete", "indexing"],
    category: "practical",
  },
  {
    slug: "indexing",
    term: "Indexing",
    simpleDefinition:
      "Organizing content so it can be found quickly.",
    example: "A search engine cataloging web pages.",
    analogy: "Think of it like the index at the back of a book.",
    relatedTerms: ["search", "crawler", "sitemap"],
    category: "technical",
  },
  {
    slug: "crawler",
    term: "Crawler",
    simpleDefinition:
      "A program that scans and collects web pages for search engines.",
    example: "Googlebot visiting your site.",
    analogy: "Think of it like a robot librarian exploring shelves.",
    relatedTerms: ["search", "indexing", "sitemap"],
    category: "technical",
  },
  {
    slug: "sitemap",
    term: "Sitemap",
    simpleDefinition:
      "A file that lists pages on a website for search engines.",
    example: "A sitemap XML file submitted to Google.",
    analogy: "Think of it like a table of contents for a website.",
    relatedTerms: ["crawler", "indexing", "seo"],
    category: "practical",
  },
  {
    slug: "seo",
    term: "SEO (Search Engine Optimization)",
    simpleDefinition:
      "Improving a site so it ranks higher in search results.",
    example: "Writing clear headings and helpful content.",
    analogy: "Think of it like organizing a shop so people can find things.",
    relatedTerms: ["sitemap", "indexing", "keywords"],
    category: "practical",
  },
  {
    slug: "keywords",
    term: "Keywords",
    simpleDefinition:
      "Words or phrases people search for.",
    example: "Someone searching " +
      '"what is machine learning" on Google.',
    analogy: "Think of it like labels on a filing cabinet.",
    relatedTerms: ["seo", "search", "content"],
    category: "practical",
  },
  {
    slug: "content",
    term: "Content",
    simpleDefinition:
      "The text, images, and media on a website or app.",
    example: "A blog post explaining AI safety.",
    analogy: "Think of it like the material inside a magazine.",
    relatedTerms: ["seo", "publishing", "copy"],
    category: "practical",
  },
  {
    slug: "image-recognition",
    term: "Image Recognition",
    simpleDefinition:
      "AI that identifies objects or people in images.",
    example: "A photo app that labels " +
      '"beach" images automatically.',
    analogy: "Think of it like tagging photos by eye.",
    relatedTerms: ["computer-vision", "object-detection", "facial-recognition"],
    category: "technical",
  },
  {
    slug: "object-detection",
    term: "Object Detection",
    simpleDefinition:
      "AI that finds and locates items within an image.",
    example: "A car spotting pedestrians in front of it.",
    analogy: "Think of it like drawing boxes around items in a picture.",
    relatedTerms: ["computer-vision", "image-recognition", "bounding-box"],
    category: "technical",
  },
  {
    slug: "text-generation",
    term: "Text Generation",
    simpleDefinition:
      "AI that writes new text based on a prompt.",
    example: "Creating a birthday card message.",
    analogy: "Think of it like a ghostwriter on demand.",
    relatedTerms: ["generative-ai", "large-language-model", "prompt"],
    category: "tools",
  },
  {
    slug: "image-editing",
    term: "Image Editing",
    simpleDefinition:
      "AI tools that remove, add, or change parts of an image.",
    example: "Erasing a background from a photo.",
    analogy: "Think of it like digital scissors and glue.",
    relatedTerms: ["image-generation", "computer-vision", "creative-tools"],
    category: "tools",
  },
  {
    slug: "summarization",
    term: "Summarization",
    simpleDefinition:
      "AI that shortens long text into key points.",
    example: "Summarizing a long email thread.",
    analogy: "Think of it like a highlight reel.",
    relatedTerms: ["text-generation", "prompt", "context-window"],
    category: "tools",
  },
  {
    slug: "translation-model",
    term: "Translation Model",
    simpleDefinition:
      "A model specialized in translating between languages.",
    example: "Turning French text into English.",
    analogy: "Think of it like a dedicated interpreter.",
    relatedTerms: ["translation", "model", "natural-language-processing"],
    category: "technical",
  },
  {
    slug: "autocorrect",
    term: "Autocorrect",
    simpleDefinition:
      "A feature that fixes typos as you type.",
    example: "Changing " +
      '"teh" to "the" automatically.',
    analogy: "Think of it like a helpful editor working in real time.",
    relatedTerms: ["spell-check", "predictive-text", "keyboard"],
    category: "practical",
  },
  {
    slug: "smart-speaker",
    term: "Smart Speaker",
    simpleDefinition:
      "A speaker with a voice assistant built in.",
    example: "An Amazon Echo responding to music requests.",
    analogy: "Think of it like a radio you can talk to.",
    relatedTerms: ["alexa", "voice-assistant", "smart-home"],
    category: "practical",
  },
  {
    slug: "assistant-app",
    term: "Assistant App",
    simpleDefinition:
      "A mobile or web app that provides AI assistance.",
    example: "A chatbot app on your phone for quick questions.",
    analogy: "Think of it like a pocket helper.",
    relatedTerms: ["chatbot", "digital-assistant", "tools"],
    category: "tools",
  },
  {
    slug: "prompt-engineering",
    term: "Prompt Engineering",
    simpleDefinition:
      "Writing prompts in a way that improves AI outputs.",
    example: "Asking for a summary with bullet points.",
    analogy: "Think of it like giving clearer instructions to get better results.",
    relatedTerms: ["prompt", "system-prompt", "temperature"],
    category: "practical",
  },
  {
    slug: "personalization",
    term: "Personalization",
    simpleDefinition:
      "Customizing experiences based on your preferences or behavior.",
    example: "A music app creating a playlist you might like.",
    analogy: "Think of it like a tailor adjusting a suit for you.",
    relatedTerms: ["recommendation-system", "data", "privacy"],
    category: "practical",
  },
  {
    slug: "analytics",
    term: "Analytics",
    simpleDefinition:
      "Measuring and studying data to understand patterns.",
    example: "Tracking which pages people visit most.",
    analogy: "Think of it like checking the scoreboard after a game.",
    relatedTerms: ["data", "dashboard", "metrics"],
    category: "practical",
  },
  {
    slug: "dashboard",
    term: "Dashboard",
    simpleDefinition:
      "A screen that summarizes key numbers and trends.",
    example: "A marketing dashboard showing weekly signups.",
    analogy: "Think of it like the gauges in a car.",
    relatedTerms: ["analytics", "metrics", "reporting"],
    category: "practical",
  },
  {
    slug: "metrics",
    term: "Metrics",
    simpleDefinition:
      "Numbers used to measure performance.",
    example: "Tracking accuracy or response time.",
    analogy: "Think of it like a scorecard.",
    relatedTerms: ["analytics", "evaluation", "monitoring"],
    category: "technical",
  },
  {
    slug: "latency",
    term: "Latency",
    simpleDefinition:
      "The delay between a request and a response.",
    example: "A chatbot taking two seconds to reply.",
    analogy: "Think of it like the time between dialing and hearing a ring.",
    relatedTerms: ["inference", "edge-computing", "performance"],
    category: "technical",
  },
  {
    slug: "performance",
    term: "Performance",
    simpleDefinition:
      "How fast and reliable a system is.",
    example: "An app that loads quickly and rarely crashes.",
    analogy: "Think of it like a car's speed and smoothness.",
    relatedTerms: ["latency", "scalability", "uptime"],
    category: "technical",
  },
  {
    slug: "scalability",
    term: "Scalability",
    simpleDefinition:
      "How well a system handles growth in users or data.",
    example: "A website staying fast during a traffic spike.",
    analogy: "Think of it like a restaurant adding more tables smoothly.",
    relatedTerms: ["performance", "cloud-computing", "infrastructure"],
    category: "technical",
  },
  {
    slug: "infrastructure",
    term: "Infrastructure",
    simpleDefinition:
      "The underlying hardware and services that run software.",
    example: "Servers, databases, and networks powering an app.",
    analogy: "Think of it like the plumbing and wiring of a building.",
    relatedTerms: ["cloud-computing", "scalability", "hosting"],
    category: "technical",
  },
  {
    slug: "hosting",
    term: "Hosting",
    simpleDefinition:
      "Where a website or app lives on the internet.",
    example: "A site hosted on a cloud platform.",
    analogy: "Think of it like renting space for your shop online.",
    relatedTerms: ["infrastructure", "cloud-computing", "deployment"],
    category: "practical",
  },
  {
    slug: "deployment",
    term: "Deployment",
    simpleDefinition:
      "Putting an app or model into real-world use.",
    example: "Releasing a new version of a website.",
    analogy: "Think of it like opening the doors to the public.",
    relatedTerms: ["hosting", "monitoring", "release"],
    category: "technical",
  },
  {
    slug: "release",
    term: "Release",
    simpleDefinition:
      "A new version of software or a model.",
    example: "Launching a feature update.",
    analogy: "Think of it like publishing a new edition of a book.",
    relatedTerms: ["deployment", "versioning", "changelog"],
    category: "practical",
  },
  {
    slug: "versioning",
    term: "Versioning",
    simpleDefinition:
      "Numbering changes to software over time.",
    example: "Moving from version 1.2 to 1.3.",
    analogy: "Think of it like labeling seasons of a TV show.",
    relatedTerms: ["release", "changelog", "maintenance"],
    category: "technical",
  },
  {
    slug: "changelog",
    term: "Changelog",
    simpleDefinition:
      "A list of changes in a new release.",
    example: "A note that says " +
      '"Added glossary search".',
    analogy: "Think of it like a newsletter for updates.",
    relatedTerms: ["release", "versioning", "documentation"],
    category: "practical",
  },
  {
    slug: "documentation",
    term: "Documentation",
    simpleDefinition:
      "Written guides explaining how to use something.",
    example: "A help page with setup steps.",
    analogy: "Think of it like an instruction manual.",
    relatedTerms: ["api", "knowledge-base", "guides"],
    category: "practical",
  },
  {
    slug: "guides",
    term: "Guides",
    simpleDefinition:
      "Step-by-step instructions for users.",
    example: "A tutorial on safe password setup.",
    analogy: "Think of it like a map for learning.",
    relatedTerms: ["documentation", "content", "learning"],
    category: "practical",
  },
  {
    slug: "learning",
    term: "Learning",
    simpleDefinition:
      "Gaining knowledge through study or practice.",
    example: "Taking a short course on AI basics.",
    analogy: "Think of it like adding tools to your toolbox.",
    relatedTerms: ["training", "guides", "education"],
    category: "practical",
  },
  {
    slug: "education",
    term: "Education",
    simpleDefinition:
      "Structured learning with lessons and practice.",
    example: "An online class explaining AI in simple terms.",
    analogy: "Think of it like a structured journey with milestones.",
    relatedTerms: ["learning", "guides", "curriculum"],
    category: "practical",
  },
  {
    slug: "curriculum",
    term: "Curriculum",
    simpleDefinition:
      "A planned set of lessons.",
    example: "A 6-week AI basics curriculum.",
    analogy: "Think of it like a training plan for a goal.",
    relatedTerms: ["education", "learning", "lessons"],
    category: "practical",
  },
  {
    slug: "lessons",
    term: "Lessons",
    simpleDefinition:
      "Individual learning units within a course.",
    example: "A lesson on spotting AI scams.",
    analogy: "Think of it like chapters in a book.",
    relatedTerms: ["curriculum", "education", "learning"],
    category: "practical",
  },
  {
    slug: "assistant-tools",
    term: "Assistant Tools",
    simpleDefinition:
      "AI features that help with daily tasks.",
    example: "Scheduling help, drafting emails, or summarizing notes.",
    analogy: "Think of it like a set of helpful gadgets.",
    relatedTerms: ["assistant", "automation", "productivity"],
    category: "practical",
  },
  {
    slug: "productivity",
    term: "Productivity",
    simpleDefinition:
      "Getting more done with the same effort.",
    example: "Using AI to draft a first version of a letter.",
    analogy: "Think of it like a faster route to the same destination.",
    relatedTerms: ["assistant-tools", "workflow-automation", "time-saving"],
    category: "practical",
  },
  {
    slug: "time-saving",
    term: "Time Saving",
    simpleDefinition:
      "Reducing the time a task takes.",
    example: "Auto-filling forms instead of typing everything.",
    analogy: "Think of it like taking the express lane.",
    relatedTerms: ["productivity", "automation", "workflow-automation"],
    category: "practical",
  },
  {
    slug: "creative-tools",
    term: "Creative Tools",
    simpleDefinition:
      "AI that helps make art, music, or writing.",
    example: "Generating a poster design quickly.",
    analogy: "Think of it like a creative sidekick.",
    relatedTerms: ["image-generation", "text-generation", "video-generation"],
    category: "tools",
  },
  {
    slug: "fraud",
    term: "Fraud",
    simpleDefinition:
      "Deceiving people to steal money or information.",
    example: "A fake support call asking for bank details.",
    analogy: "Think of it like a con artist in digital form.",
    relatedTerms: ["phishing", "scams", "identity-theft"],
    category: "safety",
  },
  {
    slug: "scams",
    term: "Scams",
    simpleDefinition:
      "Tricks designed to get money or data from you.",
    example: "A message claiming you won a prize.",
    analogy: "Think of it like bait on a hook.",
    relatedTerms: ["fraud", "phishing", "deepfake"],
    category: "safety",
  },
  {
    slug: "identity-theft",
    term: "Identity Theft",
    simpleDefinition:
      "When someone uses your personal details to pretend to be you.",
    example: "Opening a credit account using your name.",
    analogy: "Think of it like someone wearing your ID badge.",
    relatedTerms: ["fraud", "privacy", "security"],
    category: "safety",
  },
  {
    slug: "ransomware",
    term: "Ransomware",
    simpleDefinition:
      "Malware that locks your files until you pay.",
    example: "A computer showing a payment screen to unlock files.",
    analogy: "Think of it like a digital padlock on your documents.",
    relatedTerms: ["malware", "security", "backup"],
    category: "safety",
  },
  {
    slug: "backup",
    term: "Backup",
    simpleDefinition:
      "A copy of your files in case something goes wrong.",
    example: "Saving photos to an external drive.",
    analogy: "Think of it like a spare key.",
    relatedTerms: ["ransomware", "security", "cloud-computing"],
    category: "safety",
  },
  {
    slug: "security",
    term: "Security",
    simpleDefinition:
      "Protecting systems and data from harm.",
    example: "Using strong passwords and two-factor login.",
    analogy: "Think of it like locks on your doors and windows.",
    relatedTerms: ["encryption", "privacy", "cybersecurity"],
    category: "safety",
  },
  {
    slug: "cybersecurity",
    term: "Cybersecurity",
    simpleDefinition:
      "The practice of defending computers and networks.",
    example: "Blocking suspicious login attempts.",
    analogy: "Think of it like a neighborhood watch for the internet.",
    relatedTerms: ["security", "malware", "phishing"],
    category: "safety",
  },
  {
    slug: "accessibility",
    term: "Accessibility",
    simpleDefinition:
      "Designing tech so everyone can use it, including people with disabilities.",
    example: "Screen readers that read web pages aloud.",
    analogy: "Think of it like building ramps alongside stairs.",
    relatedTerms: ["text-to-speech", "inclusive-design", "usability"],
    category: "practical",
  },
  {
    slug: "inclusive-design",
    term: "Inclusive Design",
    simpleDefinition:
      "Designing products that work for people with different needs.",
    example: "Large text options in an app.",
    analogy: "Think of it like offering many sizes of the same item.",
    relatedTerms: ["accessibility", "usability", "design"],
    category: "practical",
  },
  {
    slug: "usability",
    term: "Usability",
    simpleDefinition:
      "How easy a product is to use.",
    example: "An app that is simple and clear.",
    analogy: "Think of it like a door that opens smoothly.",
    relatedTerms: ["inclusive-design", "design", "user-experience"],
    category: "practical",
  },
  {
    slug: "user-experience",
    term: "User Experience (UX)",
    simpleDefinition:
      "How a product feels to use.",
    example: "A website that feels calm and easy to navigate.",
    analogy: "Think of it like the comfort of a well-designed chair.",
    relatedTerms: ["usability", "design", "interface"],
    category: "practical",
  },
  {
    slug: "design",
    term: "Design",
    simpleDefinition:
      "Planning how something looks and works.",
    example: "Choosing colors and layouts for a site.",
    analogy: "Think of it like arranging furniture in a room.",
    relatedTerms: ["user-experience", "usability", "branding"],
    category: "practical",
  },
  {
    slug: "branding",
    term: "Branding",
    simpleDefinition:
      "How a company presents itself visually and emotionally.",
    example: "A consistent logo and tone of voice.",
    analogy: "Think of it like a company's personality.",
    relatedTerms: ["design", "content", "marketing"],
    category: "practical",
  },
  {
    slug: "marketing",
    term: "Marketing",
    simpleDefinition:
      "Sharing information about a product to reach people.",
    example: "A newsletter introducing a new feature.",
    analogy: "Think of it like telling your neighbors about a local shop.",
    relatedTerms: ["seo", "content", "analytics"],
    category: "practical",
  },
  {
    slug: "assistant-memory",
    term: "Assistant Memory",
    simpleDefinition:
      "When an AI remembers information to personalize future chats.",
    example: "A bot remembering your preferred writing style.",
    analogy: "Think of it like a barista who remembers your order.",
    relatedTerms: ["privacy", "context-window", "personalization"],
    category: "safety",
  },
  {
    slug: "prompt-library",
    term: "Prompt Library",
    simpleDefinition:
      "A saved collection of prompts you can reuse.",
    example: "A list of email prompts for common situations.",
    analogy: "Think of it like a recipe book for AI tasks.",
    relatedTerms: ["prompt", "prompt-engineering", "templates"],
    category: "practical",
  },
  {
    slug: "templates",
    term: "Templates",
    simpleDefinition:
      "Pre-made structures you can fill in.",
    example: "A template for a complaint letter.",
    analogy: "Think of it like a coloring book outline.",
    relatedTerms: ["prompt-library", "documentation", "workflow"],
    category: "practical",
  },
  {
    slug: "workflow",
    term: "Workflow",
    simpleDefinition:
      "The steps you take to complete a task.",
    example: "Write, review, and send a newsletter.",
    analogy: "Think of it like a checklist you follow.",
    relatedTerms: ["workflow-automation", "templates", "process"],
    category: "practical",
  },
  {
    slug: "process",
    term: "Process",
    simpleDefinition:
      "A repeatable way of doing something.",
    example: "A process for checking emails safely.",
    analogy: "Think of it like a routine you trust.",
    relatedTerms: ["workflow", "automation", "policy"],
    category: "practical",
  },
  {
    slug: "policy",
    term: "Policy",
    simpleDefinition:
      "Rules that guide how something should be used.",
    example: "A policy that limits what data can be shared.",
    analogy: "Think of it like house rules for a shared space.",
    relatedTerms: ["guardrails", "moderation", "consent"],
    category: "safety",
  },
  {
    slug: "data-minimization",
    term: "Data Minimization",
    simpleDefinition:
      "Collecting only the data you actually need.",
    example: "An app asking for just your email, not your address.",
    analogy: "Think of it like packing light for a trip.",
    relatedTerms: ["privacy", "consent", "gdpr"],
    category: "safety",
  },
  {
    slug: "transparency",
    term: "Transparency",
    simpleDefinition:
      "Being clear about how AI works and how data is used.",
    example: "A company explaining what data trains its model.",
    analogy: "Think of it like clear windows instead of tinted glass.",
    relatedTerms: ["trust", "privacy", "policy"],
    category: "safety",
  },
  {
    slug: "trust",
    term: "Trust",
    simpleDefinition:
      "Confidence that a system is reliable and safe.",
    example: "Relying on a tool because it has been tested.",
    analogy: "Think of it like trusting a mechanic you know.",
    relatedTerms: ["transparency", "safety", "reliability"],
    category: "safety",
  },
  {
    slug: "reliability",
    term: "Reliability",
    simpleDefinition:
      "How consistently a system works as expected.",
    example: "A chatbot giving accurate answers most of the time.",
    analogy: "Think of it like a clock that keeps good time.",
    relatedTerms: ["trust", "performance", "monitoring"],
    category: "technical",
  },
  {
    slug: "risk",
    term: "Risk",
    simpleDefinition:
      "The chance that something could go wrong.",
    example: "Sharing personal data with an untrusted app.",
    analogy: "Think of it like crossing a busy road.",
    relatedTerms: ["safety", "privacy", "security"],
    category: "safety",
  },
  {
    slug: "compliance",
    term: "Compliance",
    simpleDefinition:
      "Following laws and rules.",
    example: "A company complying with GDPR.",
    analogy: "Think of it like following the speed limit.",
    relatedTerms: ["gdpr", "policy", "governance"],
    category: "safety",
  },
  {
    slug: "governance",
    term: "Governance",
    simpleDefinition:
      "How organizations set rules and oversight for AI.",
    example: "An ethics committee reviewing AI projects.",
    analogy: "Think of it like a city council for technology.",
    relatedTerms: ["policy", "compliance", "oversight"],
    category: "safety",
  },
  {
    slug: "oversight",
    term: "Oversight",
    simpleDefinition:
      "Human review of AI decisions and behavior.",
    example: "A person checking AI-generated medical summaries.",
    analogy: "Think of it like a pilot monitoring autopilot.",
    relatedTerms: ["governance", "safety", "human-in-the-loop"],
    category: "safety",
  },
  {
    slug: "human-in-the-loop",
    term: "Human in the Loop",
    simpleDefinition:
      "A person reviews or approves AI outputs.",
    example: "A support agent confirming AI-suggested replies.",
    analogy: "Think of it like a proofreader checking a draft.",
    relatedTerms: ["oversight", "safety", "quality"],
    category: "safety",
  },
  {
    slug: "quality",
    term: "Quality",
    simpleDefinition:
      "How good or useful an output is.",
    example: "A summary that is accurate and easy to read.",
    analogy: "Think of it like the craftsmanship of a product.",
    relatedTerms: ["evaluation", "reliability", "usability"],
    category: "technical",
  },
  {
    slug: "assistant-privacy",
    term: "Assistant Privacy",
    simpleDefinition:
      "How a chatbot or assistant handles your personal information.",
    example: "Turning off chat history to reduce data storage.",
    analogy: "Think of it like choosing what to share in a conversation.",
    relatedTerms: ["privacy", "consent", "assistant-memory"],
    category: "safety",
  },
  {
    slug: "content-policy",
    term: "Content Policy",
    simpleDefinition:
      "Rules that describe what content is allowed.",
    example: "A policy that bans hate speech.",
    analogy: "Think of it like posted rules in a community center.",
    relatedTerms: ["policy", "moderation", "safety"],
    category: "safety",
  },
  {
    slug: "alignment",
    term: "Alignment",
    simpleDefinition:
      "Making sure AI behaves in line with human goals and values.",
    example: "Training a model to refuse harmful requests.",
    analogy: "Think of it like teaching a dog good manners.",
    relatedTerms: ["safety", "guardrails", "policy"],
    category: "safety",
  },
  {
    slug: "ethics",
    term: "AI Ethics",
    simpleDefinition:
      "Thinking carefully about right and wrong uses of AI.",
    example: "Deciding whether facial recognition should be used in public.",
    analogy: "Think of it like a moral compass for technology.",
    relatedTerms: ["bias", "fairness", "governance"],
    category: "safety",
  },
  {
    slug: "fairness",
    term: "Fairness",
    simpleDefinition:
      "Ensuring AI treats people equally and without discrimination.",
    example: "Testing a model to make sure it works for different accents.",
    analogy: "Think of it like using the same rules for everyone.",
    relatedTerms: ["bias", "ethics", "evaluation"],
    category: "safety",
  },
  {
    slug: "explainability",
    term: "Explainability",
    simpleDefinition:
      "How well we can understand why an AI made a decision.",
    example: "A loan system explaining why an application was denied.",
    analogy: "Think of it like showing your working in math class.",
    relatedTerms: ["transparency", "trust", "model"],
    category: "technical",
  },
  {
    slug: "interpretability",
    term: "Interpretability",
    simpleDefinition:
      "How easy it is to understand a model's behavior.",
    example: "A simple model that shows which features mattered most.",
    analogy: "Think of it like a recipe you can read and follow.",
    relatedTerms: ["explainability", "transparency", "model"],
    category: "technical",
  },
  {
    slug: "open-source-model",
    term: "Open Source Model",
    simpleDefinition:
      "An AI model whose code or weights are publicly available.",
    example: "A community-hosted language model you can run locally.",
    analogy: "Think of it like a public blueprint.",
    relatedTerms: ["open-source", "model", "community"],
    category: "technical",
  },
  {
    slug: "llama",
    term: "Llama",
    simpleDefinition:
      "A family of open models released by Meta.",
    example: "Researchers using Llama to build a custom chatbot.",
    analogy: "Think of it like a shared foundation you can build on.",
    relatedTerms: ["meta-ai", "open-source-model", "model"],
    category: "tools",
  },
  {
    slug: "community",
    term: "Community",
    simpleDefinition:
      "People who use and improve a tool together.",
    example: "Developers sharing tips for an open source model.",
    analogy: "Think of it like a neighborhood helping each other.",
    relatedTerms: ["open-source", "support", "forums"],
    category: "practical",
  },
  {
    slug: "support",
    term: "Support",
    simpleDefinition:
      "Help from a company or community when something goes wrong.",
    example: "Contacting support to reset a password.",
    analogy: "Think of it like a help desk at a library.",
    relatedTerms: ["documentation", "community", "customer-service"],
    category: "practical",
  },
  {
    slug: "customer-service",
    term: "Customer Service",
    simpleDefinition:
      "Helping users solve problems or answer questions.",
    example: "A support agent resolving a billing issue.",
    analogy: "Think of it like a friendly front desk.",
    relatedTerms: ["chatbot", "support", "automation"],
    category: "practical",
  },
  {
    slug: "voice-bot",
    term: "Voice Bot",
    simpleDefinition:
      "An automated phone assistant you can speak with.",
    example: "Calling your bank and speaking to an automated menu.",
    analogy: "Think of it like a robotic receptionist.",
    relatedTerms: ["voice-assistant", "speech-recognition", "text-to-speech"],
    category: "tools",
  },
  {
    slug: "smartphone",
    term: "Smartphone",
    simpleDefinition:
      "A phone that runs apps and connects to the internet.",
    example: "Using a maps app to get directions.",
    analogy: "Think of it like a small computer in your pocket.",
    relatedTerms: ["siri", "wearable", "apps"],
    category: "practical",
  },
  {
    slug: "apps",
    term: "Apps",
    simpleDefinition:
      "Programs you install on phones or computers.",
    example: "A banking app or a messaging app.",
    analogy: "Think of them like tools in a toolbox.",
    relatedTerms: ["smartphone", "saas", "software"],
    category: "practical",
  },
  {
    slug: "software",
    term: "Software",
    simpleDefinition:
      "Programs that run on computers or phones.",
    example: "A photo editor or a web browser.",
    analogy: "Think of it like the instructions that make a device useful.",
    relatedTerms: ["apps", "saas", "open-source"],
    category: "practical",
  },
  {
    slug: "hardware",
    term: "Hardware",
    simpleDefinition:
      "The physical parts of a computer or device.",
    example: "The screen, keyboard, and chips inside a laptop.",
    analogy: "Think of it like the body of a machine.",
    relatedTerms: ["software", "device", "infrastructure"],
    category: "technical",
  },
  {
    slug: "device",
    term: "Device",
    simpleDefinition:
      "A piece of hardware you use, like a phone or tablet.",
    example: "A tablet for video calls.",
    analogy: "Think of it like a tool you hold in your hands.",
    relatedTerms: ["hardware", "smartphone", "wearable"],
    category: "practical",
  },
  {
    slug: "ai-tool",
    term: "AI Tool",
    simpleDefinition:
      "A product that uses AI to help you do something.",
    example: "An AI writing assistant in a browser.",
    analogy: "Think of it like a smart gadget for a task.",
    relatedTerms: ["assistant-tools", "automation", "software"],
    category: "tools",
  },
  {
    slug: "model-card",
    term: "Model Card",
    simpleDefinition:
      "A document explaining how a model works and its limits.",
    example: "A model card listing training data and risks.",
    analogy: "Think of it like a product label for AI.",
    relatedTerms: ["transparency", "evaluation", "documentation"],
    category: "safety",
  },
  {
    slug: "watermarking",
    term: "Watermarking",
    simpleDefinition:
      "Adding a hidden mark to AI content to show its source.",
    example: "An image with a detectable AI signature.",
    analogy: "Think of it like a faint stamp on paper.",
    relatedTerms: ["deepfake", "safety", "content-policy"],
    category: "safety",
  },
  {
    slug: "simulation",
    term: "Simulation",
    simpleDefinition:
      "A computer-made model of a real-world system.",
    example: "Testing traffic flows before changing roads.",
    analogy: "Think of it like a flight simulator for ideas.",
    relatedTerms: ["model", "prediction", "scenario"],
    category: "technical",
  },
  {
    slug: "prediction",
    term: "Prediction",
    simpleDefinition:
      "An estimate of what will happen based on data.",
    example: "Predicting tomorrow's weather.",
    analogy: "Think of it like a best guess after looking at clues.",
    relatedTerms: ["model", "inference", "forecast"],
    category: "technical",
  },
  {
    slug: "forecast",
    term: "Forecast",
    simpleDefinition:
      "A prediction about the near future.",
    example: "A weather forecast for the weekend.",
    analogy: "Think of it like looking ahead on a calendar.",
    relatedTerms: ["prediction", "analytics", "planning"],
    category: "practical",
  },
  {
    slug: "planning",
    term: "Planning",
    simpleDefinition:
      "Deciding what steps to take to reach a goal.",
    example: "Planning a trip using a travel assistant.",
    analogy: "Think of it like drawing a route on a map.",
    relatedTerms: ["forecast", "workflow", "decision-making"],
    category: "practical",
  },
  {
    slug: "decision-making",
    term: "Decision Making",
    simpleDefinition:
      "Choosing between options based on information.",
    example: "Picking the best time to travel based on predictions.",
    analogy: "Think of it like comparing prices before buying.",
    relatedTerms: ["planning", "analytics", "risk"],
    category: "practical",
  },
  {
    slug: "assistive-technology",
    term: "Assistive Technology",
    simpleDefinition:
      "Tools that help people with disabilities use tech more easily.",
    example: "Voice control for people who find typing hard.",
    analogy: "Think of it like adding extra handles to make things easier.",
    relatedTerms: ["accessibility", "text-to-speech", "speech-recognition"],
    category: "practical",
  },
  {
    slug: "multilingual",
    term: "Multilingual",
    simpleDefinition:
      "Working in more than one language.",
    example: "A chatbot that answers in English and Spanish.",
    analogy: "Think of it like a guide who speaks multiple languages.",
    relatedTerms: ["translation", "natural-language-processing", "localization"],
    category: "practical",
  },
  {
    slug: "localization",
    term: "Localization",
    simpleDefinition:
      "Adapting content for a specific country or culture.",
    example: "Adjusting spelling and currency for the UK.",
    analogy: "Think of it like tailoring a suit for a new person.",
    relatedTerms: ["translation", "multilingual", "content"],
    category: "practical",
  },
  {
    slug: "assistant-settings",
    term: "Assistant Settings",
    simpleDefinition:
      "Options that control how an AI assistant behaves.",
    example: "Choosing a formal tone for replies.",
    analogy: "Think of it like adjusting the settings on a radio.",
    relatedTerms: ["assistant", "system-prompt", "personalization"],
    category: "practical",
  },
];
