import { articles, getArticleBySlug } from "../articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ReadingProgress from "../components/ReadingProgress";
import TableOfContents from "../components/TableOfContents";
import ShareButtons from "../components/ShareButtons";
import {
  extractFaqItems,
  formatDate,
  getKeywordMatches,
  injectHeadingIds,
  pickTopKeywords,
  readingTimeFromBody,
} from "../utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Sage AI`,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: ["Sage AI"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const readingTime = readingTimeFromBody(article.body);
  const { html: articleHtml, headings } = injectHeadingIds(article.body);
  const relatedArticles = getKeywordMatches(article, articles).slice(0, 3);
  const faqItems = extractFaqItems(article.body);
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ai-made-simple-three.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://ai-made-simple-three.vercel.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://ai-made-simple-three.vercel.app/blog/${article.slug}`,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Organization", name: "Sage AI" },
    datePublished: article.date,
    publisher: {
      "@type": "Organization",
      name: "Sage AI",
      url: "https://ai-made-simple-three.vercel.app",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Seniors, Older Adults",
    },
  };

  const faqJsonLd =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const jsonLd = [articleJsonLd, breadcrumbJsonLd, faqJsonLd].filter(Boolean);

  return (
    <div className="relative">
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A7C59] transition hover:text-[#1E3D29]"
        >
          <span aria-hidden>←</span> Back to Blog
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="prose-sage">
            <header className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4A7C59]">
                Sage AI Journal
              </p>
              <h1 className="text-4xl font-semibold text-[#1E3D29] md:text-5xl">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-[#6B7280]">
                <span>{formatDate(article.date)}</span>
                <span>•</span>
                <span>{readingTime} min read</span>
                <span>•</span>
                <span>By Sage AI Team</span>
              </div>
            </header>

            <div
              className="mt-10 text-body leading-relaxed"
              dangerouslySetInnerHTML={{ __html: articleHtml }}
            />

            <div className="mt-12 flex flex-wrap gap-2">
              {pickTopKeywords(article.keywords, 5).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#C9D8CC] bg-white/70 px-3 py-1 text-xs font-semibold text-[#2D5A3D]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <ShareButtons />
            </div>

            <div className="mt-14 glass-card rounded-card p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-lg font-semibold text-[#1E3D29]">
                    Want to keep learning?
                  </p>
                  <p className="mt-2 text-base text-[#3D4A44]">
                    Explore more in-depth guides or start a structured learning
                    path built for beginners.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/blog"
                    className="rounded-full bg-[#1E3D29] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#2D5A3D]"
                  >
                    Browse More Articles
                  </Link>
                  <Link
                    href="/learn"
                    className="rounded-full border border-[#1E3D29] px-5 py-2 text-sm font-semibold text-[#1E3D29] transition hover:border-[#2D5A3D] hover:text-[#2D5A3D]"
                  >
                    Start Learning Path
                  </Link>
                </div>
              </div>

              {relatedArticles.length > 0 ? (
                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4A7C59]">
                    Related Articles
                  </p>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="glass-card shimmer-border rounded-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,31,21,0.15)]"
                      >
                        <p className="text-sm font-semibold text-[#1E3D29]">
                          {related.title}
                        </p>
                        <p className="mt-2 text-sm text-[#3D4A44]">
                          {related.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents headings={headings} />
            <div className="glass-card rounded-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4A7C59]">
                Quick Summary
              </p>
              <p className="mt-3 text-sm text-[#3D4A44]">
                {article.description}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
