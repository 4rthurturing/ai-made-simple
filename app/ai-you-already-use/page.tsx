import { Metadata } from "next";
import Quiz from "../components/Quiz";
import LessonNav from "../components/LessonNav";
import { aiYouAlreadyUseQuiz } from "../components/quizzes";

export const metadata: Metadata = {
  title: "AI You Already Use - Sage",
  description: "You probably use AI every day without knowing it. Here are the everyday examples.",
};

export default function AIYouAlreadyUse() {
  return (
    <div>
      <h1 className="text-h1 font-bold mb-8" style={{ color: "#2D5A3D" }}>
        📱 AI You Already Use
      </h1>

      <div className="space-y-8 text-body leading-relaxed">
        <section className="rounded-card p-8" style={{ backgroundColor: "#E8F0E9" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#2D5A3D" }}>
            You Have Been Using AI for Years
          </h2>
          <p className="mb-5">
            Most people think AI is something brand new. But you have
            probably been using it for years without realising. Every time
            your phone finishes a word for you, or your email catches a
            spam message, or Netflix suggests something to watch, that is
            AI working quietly in the background.
          </p>
          <p>
            This page will show you all the places AI is already part of
            your daily life. By the end, you will see that AI is not
            something strange or scary. It is something familiar.
          </p>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#FFF8E7" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#8B6914" }}>
            On Your Phone
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">⌨️</span>
              <span><strong>Autocorrect and predictive text.</strong> When your phone suggests the next word or fixes a spelling mistake, that is AI learning how you write.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📸</span>
              <span><strong>Your camera.</strong> Modern phone cameras use AI to recognise faces, improve lighting, and make your photos look better automatically.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🗣️</span>
              <span><strong>Voice assistants.</strong> Siri on iPhones and Google Assistant on Android phones use AI to understand what you say and respond helpfully.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🔍</span>
              <span><strong>Photo search.</strong> You can search your photos by typing "beach" or "dog" and your phone finds matching pictures. AI makes this possible.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#E8F0E9" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#2D5A3D" }}>
            In Your Inbox
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">📧</span>
              <span><strong>Spam filters.</strong> Your email automatically sorts junk mail into a spam folder. AI learns which messages are genuine and which are rubbish.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📩</span>
              <span><strong>Smart replies.</strong> Gmail and other email services suggest short replies like "Thanks!" or "Sounds good." That is AI reading the message and guessing what you might want to say.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#FFF8E7" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#8B6914" }}>
            Entertainment
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🎬</span>
              <span><strong>Netflix and BBC iPlayer.</strong> When these services suggest programmes you might enjoy, AI is studying what you have watched before and finding similar things.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🎵</span>
              <span><strong>Spotify and music apps.</strong> Your "Discover Weekly" playlist or personalised radio station is built by AI that learns your taste in music.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📺</span>
              <span><strong>YouTube.</strong> The videos suggested on your home page are chosen by AI based on what you have watched and liked before.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#E8F0E9" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#2D5A3D" }}>
            Shopping and Banking
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🛒</span>
              <span><strong>Online shopping suggestions.</strong> When Amazon or Tesco shows "customers also bought" or "you might like," that is AI spotting patterns in what people buy.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🏦</span>
              <span><strong>Fraud detection.</strong> Your bank uses AI to spot unusual transactions. If someone tries to use your card in a strange way, AI flags it and may block the payment to protect you.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💳</span>
              <span><strong>Contactless payment.</strong> The security checks that happen in milliseconds when you tap your card involve AI checking whether the transaction looks normal.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#FFF8E7" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#8B6914" }}>
            Around the House
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🔊</span>
              <span><strong>Smart speakers.</strong> Amazon Echo (Alexa) and Google Home use AI to understand your voice commands, play music, answer questions, and control smart home devices.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🌡️</span>
              <span><strong>Smart thermostats.</strong> Devices like Nest learn your heating preferences and adjust automatically to save energy and keep you comfortable.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🤖</span>
              <span><strong>Robot vacuum cleaners.</strong> If you have a Roomba or similar, it uses AI to map your home and clean efficiently without bumping into furniture.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#E8F0E9" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#2D5A3D" }}>
            Getting About
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🗺️</span>
              <span><strong>Sat navs and Google Maps.</strong> AI calculates the fastest route, predicts traffic jams, and suggests when to leave to arrive on time.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🚗</span>
              <span><strong>Parking assist and lane warnings.</strong> Many modern cars use AI to help with parking, warn you if you drift out of your lane, and even brake in emergencies.</span>
            </li>
          </ul>
        </section>

        <section className="rounded-card p-8" style={{ backgroundColor: "#FFF8E7" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#8B6914" }}>
            Health
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">⌚</span>
              <span><strong>Fitness trackers and smartwatches.</strong> Devices like Fitbit and Apple Watch use AI to track your steps, monitor your heart rate, and spot unusual patterns that might need attention.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🏥</span>
              <span><strong>NHS services.</strong> The NHS uses AI to help read X-rays, spot early signs of disease, and manage appointment systems more efficiently.</span>
            </li>
          </ul>
        </section>

        <div
          className="rounded-card p-8 text-center"
          style={{ backgroundColor: "#2D5A3D", color: "white" }}
        >
          <p className="text-h3 font-semibold mb-2">Key Takeaway</p>
          <p className="text-body-lg">
            AI is not some futuristic technology arriving soon. It is already
            here, and you have been using it comfortably for years. The new
            AI tools like ChatGPT are just the latest step in something you
            are already familiar with.
          </p>
        </div>

        <Quiz title={aiYouAlreadyUseQuiz.title} questions={aiYouAlreadyUseQuiz.questions} lessonNumber={2} />
      </div>

      <LessonNav currentLesson={2} />
    </div>
  );
}
