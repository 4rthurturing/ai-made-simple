import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sage - AI Explained Simply",
  description: "Sage helps older adults understand artificial intelligence with clear, friendly guidance. No jargon, no pressure.",
};

export default function AboutPage() {
  return (
    <article className="prose max-w-content mx-auto">
      <h1 className="text-h1 font-bold mb-6" style={{ color: "#2D5A3D" }}>
        About Sage
      </h1>

      <p className="text-body mb-6">
        Sage exists because everyone deserves to understand the technology shaping the world around them.
      </p>

      <p className="text-body mb-6">
        Artificial intelligence is everywhere now. It is in your phone, your TV, your bank, and your doctor&apos;s surgery. But most of the information about AI is written for people who already work in technology. It is full of jargon, assumes you know the basics, and often feels more confusing than helpful.
      </p>

      <p className="text-body mb-6">
        We think that is not good enough.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>
        What Sage does
      </h2>

      <p className="text-body mb-6">
        Sage explains artificial intelligence in plain English. We break down what AI is, how it works, where you are already using it, and how to stay safe. Every page is written for people who did not grow up with computers and smartphones. We keep things clear, honest, and practical.
      </p>

      <p className="text-body mb-6">
        You can read at your own pace. There are no tests you have to pass, no deadlines, and no pressure. If something does not make sense, our friendly AI chatbot is there to answer your questions in a patient, straightforward way.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>
        Why we built this
      </h2>

      <p className="text-body mb-6">
        Sage was created by David because he saw a gap. Older adults were being left out of the conversation about AI, even though they are affected by it every day. He wanted to build something that treated people with respect and gave them the knowledge to feel confident, not overwhelmed.
      </p>

      <p className="text-body mb-6">
        This is a free resource. We do not sell anything, and we do not sell your data. Sage is here to help, plain and simple.
      </p>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>
        Our values
      </h2>

      <ul className="text-body mb-6 list-disc pl-6 space-y-3">
        <li><strong>Clarity over cleverness.</strong> We would rather be understood than sound impressive.</li>
        <li><strong>Honesty.</strong> We tell you what AI can do and what it cannot. We flag the risks alongside the benefits.</li>
        <li><strong>Patience.</strong> There is no such thing as a silly question here.</li>
        <li><strong>Respect.</strong> You have a lifetime of experience. We are just adding one more topic to it.</li>
      </ul>

      <h2 className="text-h2 font-bold mt-10 mb-4" style={{ color: "#2D5A3D" }}>
        Get in touch
      </h2>

      <p className="text-body mb-6">
        We would love to hear from you. Whether you have a question, a suggestion, or just want to say hello, you can reach us at{" "}
        <a href="mailto:hello@hellosage.co.uk" className="font-semibold underline" style={{ color: "#2D5A3D" }}>
          hello@hellosage.co.uk
        </a>.
      </p>
    </article>
  );
}
