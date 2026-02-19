import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility - Sage",
  description: "Our commitment to making Sage accessible to everyone.",
};

export default function AccessibilityPage() {
  return (
    <article className="prose max-w-content mx-auto">
      <h1 className="text-h1 font-bold mb-6" style={{ color: "#2D5A3D" }}>
        Accessibility
      </h1>

      <p className="text-body mb-6">
        We want Sage to be usable by everyone, regardless of ability or how you access the internet. Accessibility is not an afterthought for us. It is part of how we build the site.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>What we do</h2>
      <ul className="text-body mb-6 list-disc pl-6 space-y-3">
        <li><strong>Large, readable text.</strong> Body text is at least 20 pixels, with generous line spacing.</li>
        <li><strong>Clear colours.</strong> We use high-contrast colour combinations so text is easy to read.</li>
        <li><strong>Keyboard navigation.</strong> You can use the site with a keyboard alone. We include a &quot;Skip to main content&quot; link for screen reader users.</li>
        <li><strong>Simple language.</strong> We write in plain English and avoid jargon wherever possible.</li>
        <li><strong>Responsive design.</strong> The site works on screens of all sizes, from large monitors to mobile phones.</li>
        <li><strong>Accessible buttons.</strong> All interactive elements are large enough to tap or click easily (at least 48 pixels).</li>
      </ul>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Standards we aim for</h2>
      <p className="text-body mb-6">
        We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. This is the widely accepted standard for web accessibility.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Known limitations</h2>
      <p className="text-body mb-6">
        We are a small team and we are always working to improve. If you find something on the site that is difficult to use, please let us know and we will do our best to fix it.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>Feedback</h2>
      <p className="text-body mb-6">
        Your feedback helps us improve. If you have trouble using any part of Sage, or if you have suggestions for how we can do better, please email us at{" "}
        <a href="mailto:hello@hellosage.co.uk" className="font-semibold underline" style={{ color: "#2D5A3D" }}>hello@hellosage.co.uk</a>.
      </p>
    </article>
  );
}
