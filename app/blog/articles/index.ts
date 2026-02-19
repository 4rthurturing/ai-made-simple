import { article as howToUseChatgpt } from "./how-to-use-chatgpt";
import { article as thingsToAskChatgpt } from "./things-to-ask-chatgpt";
import { article as aiVoiceScams } from "./ai-voice-scams";
import { article as whatIsAChatbot } from "./what-is-a-chatbot";
import { article as aiNhs } from "./ai-nhs";
import { article as howToSpotDeepfake } from "./how-to-spot-deepfake";
import { article as aiHobbies } from "./ai-hobbies";
import { article as whatNotToTellChatgpt } from "./what-not-to-tell-chatgpt";
import { article as aiLoneliness } from "./ai-loneliness";
import { article as freeAiCoursesUk } from "./free-ai-courses-uk";
import { article as grandparentsGuideAi } from "./grandparents-guide-ai";
import { article as aiJargonBuster } from "./ai-jargon-buster";
import { article as aiForWritingLetters } from "./ai-for-writing-letters";
import { article as aiForRecipes } from "./ai-for-recipes";
import { article as chatgptVsClaudeVsGemini } from "./chatgpt-vs-claude-vs-gemini";
import { article as isAiSafeForBanking } from "./is-ai-safe-for-banking";
import { article as aiForTravelPlanning } from "./ai-for-travel-planning";
import { article as aiForHealthQuestions } from "./ai-for-health-questions";
import { article as whatIsChatgptSimple } from "./what-is-chatgpt-simple";
import { article as aiForLearningNewSkills } from "./ai-for-learning-new-skills";
import { article as aiMistakesToAvoid } from "./ai-mistakes-to-avoid";
import { article as isAiListeningToMe } from "./is-ai-listening-to-me";
import { article as aiForGardening } from "./ai-for-gardening";
import { article as howToTalkToAi } from "./how-to-talk-to-ai";
import { article as aiForFamilyHistory } from "./ai-for-family-history";
import { article as freeAiTools2026 } from "./free-ai-tools-2026";
import { article as aiAndPhotos } from "./ai-and-photos";
import { article as whatIsGeminiGoogle } from "./what-is-gemini-google";
import { article as whatIsClaudeAi } from "./what-is-claude-ai";
import { article as aiForCrosswordsPuzzles } from "./ai-for-crosswords-puzzles";
import { article as aiScamPhoneCalls } from "./ai-scam-phone-calls";
import { article as aiForGrandchildren } from "./ai-for-grandchildren";

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string[];
  body: string;
};

export const articles: Article[] = [
  howToUseChatgpt,
  thingsToAskChatgpt,
  aiVoiceScams,
  whatIsAChatbot,
  aiNhs,
  howToSpotDeepfake,
  aiHobbies,
  whatNotToTellChatgpt,
  aiLoneliness,
  freeAiCoursesUk,
  grandparentsGuideAi,
  aiJargonBuster,
  aiForWritingLetters,
  aiForRecipes,
  chatgptVsClaudeVsGemini,
  isAiSafeForBanking,
  aiForTravelPlanning,
  aiForHealthQuestions,
  whatIsChatgptSimple,
  aiForLearningNewSkills,
  aiMistakesToAvoid,
  isAiListeningToMe,
  aiForGardening,
  howToTalkToAi,
  aiForFamilyHistory,
  freeAiTools2026,
  aiAndPhotos,
  whatIsGeminiGoogle,
  whatIsClaudeAi,
  aiForCrosswordsPuzzles,
  aiScamPhoneCalls,
  aiForGrandchildren,
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
