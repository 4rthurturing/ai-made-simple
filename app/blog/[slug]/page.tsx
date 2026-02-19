import { articles, getArticleBySlug } from "../articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

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
    title: `${article.title} | Sage`,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: ["Sage"],
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Organization", name: "Sage" },
    datePublished: article.date,
    publisher: {
      "@type": "Organization",
      name: "Sage",
      url: "https://hellosage.co.uk",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Seniors, Older Adults",
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/blog"
        className="text-body font-semibold hover:underline mb-6 inline-block"
        style={{ color: "#4A7C59" }}
      >
        ← Back to Blog
      </Link>

      <article className="prose-sage">
        <h1 className="text-h1 font-bold mb-4" style={{ color: "#2D5A3D" }}>
          {article.title}
        </h1>
        <p className="text-base mb-8" style={{ color: "#6B7280" }}>
          {new Date(article.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div
          className="text-body leading-relaxed space-y-0"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />
      </article>

      <div
        className="mt-12 rounded-card p-8"
        style={{ backgroundColor: "#E8F0E9" }}
      >
        <p className="text-body font-semibold mb-2" style={{ color: "#2D5A3D" }}>
          Want to keep learning?
        </p>
        <p className="text-body">
          Visit our{" "}
          <Link href="/learn" className="underline font-semibold">
            learning path
          </Link>{" "}
          or browse more{" "}
          <Link href="/blog" className="underline font-semibold">
            blog articles
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
