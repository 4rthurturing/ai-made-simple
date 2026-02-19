import type { Article } from "./articles";

const WORDS_PER_MINUTE = 200;

export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export function readingTimeFromBody(body: string): number {
  const wordCount = stripHtml(body).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function normalizeKeyword(keyword: string): string {
  return keyword
    .trim()
    .toLowerCase()
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ");
}

export function formatKeyword(keyword: string): string {
  return keyword
    .trim()
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getCategoryList(articles: Article[]): string[] {
  const seen = new Map<string, string>();
  articles.forEach((article) => {
    article.keywords.forEach((keyword) => {
      const normalized = normalizeKeyword(keyword);
      if (!seen.has(normalized)) {
        seen.set(normalized, formatKeyword(keyword));
      }
    });
  });

  return Array.from(seen.values());
}

export function getKeywordMatches(target: Article, list: Article[]): Article[] {
  const targetSet = new Set(target.keywords.map(normalizeKeyword));
  return list
    .filter((article) => article.slug !== target.slug)
    .map((article) => {
      const score = article.keywords.reduce((acc, keyword) => {
        if (targetSet.has(normalizeKeyword(keyword))) return acc + 1;
        return acc;
      }, 0);
      return { article, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.article);
}

export function pickTopKeywords(keywords: string[], limit = 3): string[] {
  return keywords.slice(0, limit).map(formatKeyword);
}

export function extractH2Headings(body: string): Array<{ id: string; text: string }> {
  const headings: Array<{ id: string; text: string }> = [];
  const seen = new Map<string, number>();
  const regex = /<h2([^>]*)>([\s\S]*?)<\/h2>/gi;

  body.replace(regex, (_, attrs: string, inner: string) => {
    const text = stripHtml(inner);
    if (!text) return "";
    const base = slugify(text);
    const count = (seen.get(base) ?? 0) + 1;
    seen.set(base, count);
    const id = count === 1 ? base : `${base}-${count}`;
    headings.push({ id, text });
    return "";
  });

  return headings;
}

export function injectHeadingIds(body: string): { html: string; headings: Array<{ id: string; text: string }> } {
  const headings: Array<{ id: string; text: string }> = [];
  const seen = new Map<string, number>();
  const regex = /<h2([^>]*)>([\s\S]*?)<\/h2>/gi;

  const html = body.replace(regex, (match, attrs: string, inner: string) => {
    const text = stripHtml(inner);
    if (!text) return match;
    const base = slugify(text);
    const count = (seen.get(base) ?? 0) + 1;
    seen.set(base, count);
    const id = count === 1 ? base : `${base}-${count}`;
    headings.push({ id, text });
    if (/\sid=/.test(attrs)) {
      return `<h2${attrs}>${inner}</h2>`;
    }
    return `<h2${attrs} id="${id}">${inner}</h2>`;
  });

  return { html, headings };
}

export function extractFaqItems(body: string): Array<{ question: string; answer: string }> {
  const items: Array<{ question: string; answer: string }> = [];
  const sectionRegex = /<div[^>]*class=["'][^"']*faq-section[^"']*["'][^>]*>([\s\S]*?)<\/div>/gi;

  let sectionMatch: RegExpExecArray | null;
  while ((sectionMatch = sectionRegex.exec(body)) !== null) {
    const section = sectionMatch[1];
    const questionRegex = /<(h3|h4)[^>]*>([\s\S]*?)<\/\1>/gi;
    let questionMatch: RegExpExecArray | null;
    while ((questionMatch = questionRegex.exec(section)) !== null) {
      const questionText = stripHtml(questionMatch[2]);
      if (!questionText) continue;
      const remaining = section.slice(questionMatch.index + questionMatch[0].length);
      const answerMatch = /<p[^>]*>([\s\S]*?)<\/p>/i.exec(remaining);
      const answerText = answerMatch ? stripHtml(answerMatch[1]) : "";
      if (answerText) {
        items.push({ question: questionText, answer: answerText });
      }
    }
  }

  return items;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
