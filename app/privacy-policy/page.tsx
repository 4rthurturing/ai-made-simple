import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Sage AI",
  description: "How Sage AI collects, uses, and protects your personal data. Written in plain English.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="prose max-w-content mx-auto">
      <h1 className="text-h1 font-bold mb-2" style={{ color: "#2D5A3D" }}>
        Privacy Policy
      </h1>
      <p className="text-base mb-8" style={{ color: "#6B7280" }}>Last updated: 19 February 2026</p>

      <p className="text-body mb-6">
        This privacy policy explains what information we collect when you use hellosage.co.uk (&quot;Sage&quot;), why we collect it, and how we keep it safe. We have written it in plain language so it is easy to understand.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Who we are</h2>
      <p className="text-body mb-6">
        Sage AI is a free educational website that helps older adults understand artificial intelligence. It is operated by David. If you need to contact us about your data, you can email{" "}
        <a href="mailto:hello@hellosage.co.uk" className="font-semibold underline" style={{ color: "#2D5A3D" }}>hello@hellosage.co.uk</a>.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>What data we collect</h2>

      <h3 className="text-h3 font-bold mt-6 mb-3" style={{ color: "#2D5A3D" }}>Website analytics</h3>
      <p className="text-body mb-6">
        If you accept cookies, we use Google Analytics to understand how people use the site. This collects anonymous information such as which pages you visit, how long you stay, and what type of device you are using. It does not identify you personally. If you decline cookies, Google Analytics does not load at all.
      </p>

      <h3 className="text-h3 font-bold mt-6 mb-3" style={{ color: "#2D5A3D" }}>AI chatbot conversations</h3>
      <p className="text-body mb-6">
        When you use our &quot;Try AI&quot; chatbot, your messages are sent to OpenAI to generate a response. OpenAI processes this data on our behalf. We do not store your chatbot conversations on our servers. OpenAI&apos;s data handling is governed by their own policies, but we use their API in a way that does not train their models on your conversations.
      </p>

      <h3 className="text-h3 font-bold mt-6 mb-3" style={{ color: "#2D5A3D" }}>Quiz progress</h3>
      <p className="text-body mb-6">
        If you take any quizzes on the site, your progress is saved in your browser&apos;s local storage. This stays on your device. We never see it or collect it.
      </p>

      <h3 className="text-h3 font-bold mt-6 mb-3" style={{ color: "#2D5A3D" }}>Cookie preferences</h3>
      <p className="text-body mb-6">
        When you accept or decline cookies, your choice is saved in your browser&apos;s local storage so we do not ask you again. This stays on your device.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Why we collect data</h2>
      <p className="text-body mb-6">
        We collect analytics data to understand which pages are helpful and how we can improve the site. That is the only reason. We do not use your data for advertising or marketing, and we never sell your data to anyone.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Third parties who handle data</h2>
      <ul className="text-body mb-6 list-disc pl-6 space-y-3">
        <li><strong>Vercel</strong> hosts our website. When you visit the site, Vercel&apos;s servers process your request. <a href="https://vercel.com/legal/privacy-policy" className="underline" style={{ color: "#2D5A3D" }}>Vercel&apos;s privacy policy</a>.</li>
        <li><strong>Google Analytics</strong> collects anonymous usage data, but only if you accept cookies. <a href="https://policies.google.com/privacy" className="underline" style={{ color: "#2D5A3D" }}>Google&apos;s privacy policy</a>.</li>
        <li><strong>OpenAI</strong> processes messages you send to our AI chatbot. <a href="https://openai.com/policies/privacy-policy" className="underline" style={{ color: "#2D5A3D" }}>OpenAI&apos;s privacy policy</a>.</li>
      </ul>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>How long we keep data</h2>
      <p className="text-body mb-6">
        Google Analytics data is retained for 14 months before it is automatically deleted. Chatbot conversations are not stored by us. Local storage data on your device stays until you clear your browser data.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Your rights under UK data protection law</h2>
      <p className="text-body mb-4">
        Under the UK General Data Protection Regulation (UK GDPR), you have the right to:
      </p>
      <ul className="text-body mb-6 list-disc pl-6 space-y-3">
        <li>Know what data we hold about you</li>
        <li>Ask us to correct or delete your data</li>
        <li>Object to how we use your data</li>
        <li>Withdraw your consent at any time (for example, by declining cookies)</li>
        <li>Lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" className="underline" style={{ color: "#2D5A3D" }}>ico.org.uk</a></li>
      </ul>
      <p className="text-body mb-6">
        To exercise any of these rights, email us at <a href="mailto:hello@hellosage.co.uk" className="font-semibold underline" style={{ color: "#2D5A3D" }}>hello@hellosage.co.uk</a>.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Data security</h2>
      <p className="text-body mb-6">
        The site is served over HTTPS, which means your connection is encrypted. We do not collect passwords or payment details because Sage AI is a completely free service with no accounts.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Children</h2>
      <p className="text-body mb-6">
        Sage AI is designed for adults. We do not knowingly collect data from children under 13.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Changes to this policy</h2>
      <p className="text-body mb-6">
        If we make changes to this policy, we will update the date at the top of this page. We recommend checking back from time to time.
      </p>
    </article>
  );
}
