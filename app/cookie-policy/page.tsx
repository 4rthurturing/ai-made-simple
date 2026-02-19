import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Sage AI",
  description: "How Sage AI uses cookies and how you can manage them.",
};

export default function CookiePolicyPage() {
  return (
    <article className="prose max-w-content mx-auto">
      <h1 className="text-h1 font-bold mb-2" style={{ color: "#2D5A3D" }}>
        Cookie Policy
      </h1>
      <p className="text-base mb-8" style={{ color: "#6B7280" }}>Last updated: 19 February 2026</p>

      <p className="text-body mb-6">
        This page explains what cookies are, which ones Sage AI uses, and how you can manage them. We have kept it as straightforward as possible.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>What are cookies?</h2>
      <p className="text-body mb-6">
        Cookies are small text files that websites save on your device (computer, tablet, or phone). They help websites remember things about your visit, like your preferences. Not all cookies are the same. Some are necessary for a site to work, while others are used for things like analytics.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>What Sage AI uses</h2>

      <h3 className="text-h3 font-bold mt-6 mb-3" style={{ color: "#2D5A3D" }}>Google Analytics (optional)</h3>
      <p className="text-body mb-4">
        If you click &quot;Accept&quot; on our cookie banner, we load Google Analytics. This helps us understand how people use the site so we can make it better. Google Analytics uses cookies to collect anonymous information such as:
      </p>
      <ul className="text-body mb-6 list-disc pl-6 space-y-2">
        <li>Which pages you visit</li>
        <li>How long you spend on each page</li>
        <li>What device and browser you are using</li>
        <li>Which country you are visiting from</li>
      </ul>
      <p className="text-body mb-6">
        This data is anonymous. It does not tell us who you are. If you click &quot;Decline&quot;, Google Analytics does not load and no analytics cookies are set.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-body border-collapse">
          <thead>
            <tr style={{ backgroundColor: "#E8F0E9" }}>
              <th className="text-left p-3 font-bold border" style={{ borderColor: "#A3C3A7" }}>Cookie name</th>
              <th className="text-left p-3 font-bold border" style={{ borderColor: "#A3C3A7" }}>Purpose</th>
              <th className="text-left p-3 font-bold border" style={{ borderColor: "#A3C3A7" }}>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border" style={{ borderColor: "#A3C3A7" }}>_ga</td>
              <td className="p-3 border" style={{ borderColor: "#A3C3A7" }}>Distinguishes visitors for analytics</td>
              <td className="p-3 border" style={{ borderColor: "#A3C3A7" }}>2 years</td>
            </tr>
            <tr>
              <td className="p-3 border" style={{ borderColor: "#A3C3A7" }}>_ga_*</td>
              <td className="p-3 border" style={{ borderColor: "#A3C3A7" }}>Maintains session state for Google Analytics</td>
              <td className="p-3 border" style={{ borderColor: "#A3C3A7" }}>2 years</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-h3 font-bold mt-6 mb-3" style={{ color: "#2D5A3D" }}>Local storage (not cookies, but similar)</h3>
      <p className="text-body mb-4">
        Sage AI also uses your browser&apos;s local storage to save a few things on your device. Local storage is similar to cookies but the data never gets sent to our servers. It stays entirely on your device.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-body border-collapse">
          <thead>
            <tr style={{ backgroundColor: "#E8F0E9" }}>
              <th className="text-left p-3 font-bold border" style={{ borderColor: "#A3C3A7" }}>Item</th>
              <th className="text-left p-3 font-bold border" style={{ borderColor: "#A3C3A7" }}>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border" style={{ borderColor: "#A3C3A7" }}>cookie-consent</td>
              <td className="p-3 border" style={{ borderColor: "#A3C3A7" }}>Remembers whether you accepted or declined cookies</td>
            </tr>
            <tr>
              <td className="p-3 border" style={{ borderColor: "#A3C3A7" }}>quiz progress</td>
              <td className="p-3 border" style={{ borderColor: "#A3C3A7" }}>Saves your progress in any quizzes so you do not lose it</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Third-party cookies</h2>
      <p className="text-body mb-6">
        The only third-party cookies on Sage AI come from Google Analytics, and only if you accept them. We do not use advertising cookies, social media tracking pixels, or any other third-party trackers.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>How to manage cookies</h2>
      <p className="text-body mb-4">
        You have several options:
      </p>
      <ul className="text-body mb-6 list-disc pl-6 space-y-3">
        <li><strong>Our cookie banner:</strong> When you first visit Sage AI, you can choose to accept or decline cookies. If you declined and want to change your mind (or the other way round), clear your browser&apos;s local storage for this site and refresh the page. The banner will appear again.</li>
        <li><strong>Browser settings:</strong> Most browsers let you block or delete cookies. Look in your browser&apos;s settings or preferences, usually under &quot;Privacy&quot; or &quot;Security&quot;.</li>
        <li><strong>Google&apos;s opt-out:</strong> You can install the <a href="https://tools.google.com/dlpage/gaoptout" className="underline" style={{ color: "#2D5A3D" }}>Google Analytics opt-out browser add-on</a> to prevent Google Analytics from collecting data on any website.</li>
      </ul>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>UK regulations</h2>
      <p className="text-body mb-6">
        We comply with the Privacy and Electronic Communications Regulations (PECR) and the UK GDPR. Non-essential cookies (like Google Analytics) are only set with your consent.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Questions?</h2>
      <p className="text-body mb-6">
        If you have questions about cookies on Sage AI, email us at{" "}
        <a href="mailto:hello@hellosage.co.uk" className="font-semibold underline" style={{ color: "#2D5A3D" }}>hello@hellosage.co.uk</a>.
      </p>
    </article>
  );
}
