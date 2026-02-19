import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Sage AI",
  description: "Terms and conditions for using the Sage website, hellosage.co.uk.",
};

export default function TermsPage() {
  return (
    <article className="prose max-w-content mx-auto">
      <h1 className="text-h1 font-bold mb-2" style={{ color: "#2D5A3D" }}>
        Terms of Use
      </h1>
      <p className="text-base mb-8" style={{ color: "#6B7280" }}>Last updated: 19 February 2026</p>

      <p className="text-body mb-6">
        These terms explain the rules for using hellosage.co.uk (&quot;Sage&quot;). By using the site, you agree to these terms. If you do not agree, please do not use the site.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>What Sage AI is</h2>
      <p className="text-body mb-6">
        Sage is a free educational website that helps older adults learn about artificial intelligence. We provide articles, guides, a glossary, and an AI chatbot you can practise with. Everything on Sage AI is provided free of charge.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>The AI chatbot</h2>
      <p className="text-body mb-6">
        Our chatbot uses artificial intelligence to answer your questions. While we have designed it to be helpful and accurate, AI can sometimes produce incorrect, incomplete, or outdated information. Please do not rely on the chatbot as your only source of truth. Always double-check important information from other reliable sources.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Not professional advice</h2>
      <p className="text-body mb-6">
        Nothing on Sage AI should be taken as medical, legal, financial, or other professional advice. Our content is educational and general in nature. If you need professional advice, please speak to a qualified professional.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Accuracy of information</h2>
      <p className="text-body mb-6">
        We do our best to keep everything on Sage AI accurate and up to date. However, the world of technology changes quickly, and we cannot guarantee that every piece of information is current at all times. If you spot something that looks wrong, please let us know at{" "}
        <a href="mailto:hello@hellosage.co.uk" className="font-semibold underline" style={{ color: "#2D5A3D" }}>hello@hellosage.co.uk</a>.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Intellectual property</h2>
      <p className="text-body mb-6">
        All content on Sage AI, including text, images, and design, belongs to us unless stated otherwise. You are welcome to share links to our pages and quote small sections with credit. Please do not copy entire pages or republish our content without permission.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>How you use the site</h2>
      <p className="text-body mb-4">
        When using Sage AI, please do not:
      </p>
      <ul className="text-body mb-6 list-disc pl-6 space-y-3">
        <li>Use the chatbot to generate harmful, abusive, or illegal content</li>
        <li>Attempt to overload or disrupt the site</li>
        <li>Scrape or automatically download large amounts of content</li>
        <li>Pretend to be someone else or misrepresent yourself</li>
      </ul>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Limitation of liability</h2>
      <p className="text-body mb-6">
        Sage is provided &quot;as is&quot; without any warranties. To the fullest extent permitted by law, we are not liable for any loss or damage arising from your use of the site. This includes, but is not limited to, any decisions you make based on information found on Sage AI or responses from the AI chatbot.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>External links</h2>
      <p className="text-body mb-6">
        Sage AI sometimes links to other websites. We do not control those sites and are not responsible for their content or privacy practices. We recommend checking their own terms and policies.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Changes to these terms</h2>
      <p className="text-body mb-6">
        We may update these terms from time to time. When we do, we will change the date at the top of this page. By continuing to use the site after changes are made, you agree to the updated terms.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Governing law</h2>
      <p className="text-body mb-6">
        These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Contact</h2>
      <p className="text-body mb-6">
        If you have any questions about these terms, email us at{" "}
        <a href="mailto:hello@hellosage.co.uk" className="font-semibold underline" style={{ color: "#2D5A3D" }}>hello@hellosage.co.uk</a>.
      </p>
    </article>
  );
}
