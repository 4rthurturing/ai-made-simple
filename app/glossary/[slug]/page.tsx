import Link from "next/link";
import { notFound } from "next/navigation";
import { glossaryTerms } from "../terms";

const BASE_URL = "https://hellosage.co.uk";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }));
}

export default async function GlossaryTermPage({ params }: PageProps) {
  const { slug } = await params;
  const term = glossaryTerms.find((item) => item.slug === slug);

  if (!term) {
    notFound();
  }

  const related = term.relatedTerms
    .map((slug) => glossaryTerms.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const pageUrl = `${BASE_URL}/glossary/${term.slug}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${term.term}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: term.simpleDefinition,
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: term.term,
    description: term.simpleDefinition,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: "Sage AI",
    },
    publisher: {
      "@type": "Organization",
      name: "Sage AI",
    },
    datePublished: "2026-02-19",
    dateModified: "2026-02-19",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Glossary",
        item: `${BASE_URL}/glossary`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: term.term,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, articleSchema, breadcrumbSchema]),
        }}
      />

      <nav className="text-sm text-[#6B7280]">
        <Link href="/" className="hover:text-[#1E3D29]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/glossary" className="hover:text-[#1E3D29]">
          Glossary
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#1E3D29]">{term.term}</span>
      </nav>

      <header className="glass-card rounded-card p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C59]">
          Glossary Term
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-[#1E3D29] md:text-5xl">
          {term.term}
        </h1>
        <p className="mt-3 text-base text-[#3D4A44]">
          Category: <span className="capitalize">{term.category}</span>
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="glass-card rounded-card p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-[#1E3D29]">
            In Simple Terms
          </h2>
          <p className="mt-3 text-base text-[#3D4A44]">
            {term.simpleDefinition}
          </p>
        </div>
        <div className="glass-card rounded-card p-6">
          <h2 className="text-2xl font-semibold text-[#1E3D29]">
            Think of It Like...
          </h2>
          <p className="mt-3 text-base text-[#3D4A44]">{term.analogy}</p>
        </div>
        <div className="glass-card rounded-card p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-[#1E3D29]">
            Real World Example
          </h2>
          <p className="mt-3 text-base text-[#3D4A44]">{term.example}</p>
        </div>
        <div className="glass-card rounded-card p-6">
          <h2 className="text-2xl font-semibold text-[#1E3D29]">
            Related Terms
          </h2>
          {related.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/glossary/${item.slug}`}
                  className="rounded-full border border-[#C9D8CC] bg-white/70 px-3 py-1 text-xs font-semibold text-[#2D5A3D] transition-all hover:border-[#4A7C59] hover:text-[#1E3D29]"
                >
                  {item.term}
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-[#6B7280]">
              More related terms coming soon.
            </p>
          )}
        </div>
      </section>

      <div className="glass-card rounded-card p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-[#1E3D29]">
              Keep exploring
            </h3>
            <p className="mt-2 text-base text-[#3D4A44]">
              Ready for more? Try a lesson or read the latest guides.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/learn"
              className="rounded-full bg-[#1E3D29] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,31,21,0.2)]"
            >
              Explore lessons
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-[#C9D8CC] bg-white/70 px-5 py-2 text-sm font-semibold text-[#2D5A3D] transition-all hover:border-[#4A7C59] hover:text-[#1E3D29]"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </div>

      {/* Prev / Next navigation */}
      {(() => {
        const currentIndex = glossaryTerms.findIndex((t) => t.slug === slug);
        const prev = currentIndex > 0 ? glossaryTerms[currentIndex - 1] : null;
        const next = currentIndex < glossaryTerms.length - 1 ? glossaryTerms[currentIndex + 1] : null;
        return (
          <nav className="flex justify-between items-center pt-8 border-t-2 gap-4" style={{ borderColor: "#E8F0E9" }}>
            {prev ? (
              <Link href={`/glossary/${prev.slug}`} scroll={true} className="flex-1 glass-card rounded-card p-5 transition-shadow hover:shadow-lg text-left">
                <p className="text-sm text-[#6B7280]">← Previous Term</p>
                <p className="text-lg font-semibold text-[#2D5A3D] mt-1">{prev.term}</p>
              </Link>
            ) : <div className="flex-1" />}
            <Link href="/glossary" className="shrink-0 px-5 py-3 rounded-full border border-[#C9D8CC] bg-white/70 text-sm font-semibold text-[#2D5A3D] hover:border-[#4A7C59] hover:text-[#1E3D29] transition-all text-center">
              All Terms
            </Link>
            {next ? (
              <Link href={`/glossary/${next.slug}`} scroll={true} className="flex-1 glass-card rounded-card p-5 transition-shadow hover:shadow-lg text-right">
                <p className="text-sm text-[#6B7280]">Next Term →</p>
                <p className="text-lg font-semibold text-[#2D5A3D] mt-1">{next.term}</p>
              </Link>
            ) : <div className="flex-1" />}
          </nav>
        );
      })()}
    </div>
  );
}
