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
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
