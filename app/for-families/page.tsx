import Link from "next/link";
import Quiz from "../components/Quiz";
import LessonNav from "../components/LessonNav";
import { forFamiliesQuiz } from "../components/quizzes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helping Your Parents Understand AI | Sage",
  description: "Want to help an older relative understand AI? Our guide for families offers tips on explaining technology with patience and clarity.",
};

export default function ForFamilies() {
  return (
    <div>
      <h1 className="text-h1 font-bold mb-4" style={{ color: "#2D5A3D" }}>
        👨‍👩‍👧‍👦 For Families
      </h1>
      <p className="text-body-lg mb-10" style={{ color: "#6B7280" }}>
        A guide for anyone helping an older parent, grandparent, or relative
        learn about AI. Written with love, patience, and practical advice.
      </p>

      <div className="space-y-8 text-body leading-relaxed">
        {/* Why it matters */}
        <section className="rounded-card p-8" style={{ backgroundColor: "#E8F0E9" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#2D5A3D" }}>
            Why This Matters
          </h2>
          <p className="mb-5">
            AI can be genuinely life-improving for older people. It can help with
            loneliness by providing conversation. It can help with independence by
            answering questions they might otherwise need to wait for someone else
            to help with. It can explain confusing letters, help write emails, and
            make technology feel less intimidating.
          </p>
          <p>
            But getting started can feel overwhelming, especially if someone is not
            confident with technology. That is where you come in.
          </p>
        </section>

        {/* The right mindset */}
        <section className="rounded-card p-8 border-2" style={{ backgroundColor: "#FFF8E7", borderColor: "#E0B84D" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#8B6914" }}>
            🧠 The Right Mindset
          </h2>
          <p className="mb-5">
            Before you start teaching, here are some things to keep in mind:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">💛</span>
              <span><strong>Be patient. Then be more patient.</strong> What feels obvious to you is brand new to them. Remember how you felt learning something unfamiliar.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💛</span>
              <span><strong>Do not take over.</strong> Sit beside them, not in front of the screen. Let them do the typing and clicking, even if it is slower.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💛</span>
              <span><strong>Use their device.</strong> Show them on the phone, tablet, or computer they actually use. Do not demonstrate on yours.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💛</span>
              <span><strong>Start with their interests.</strong> If they love gardening, show them how AI can help with gardening. If they love cooking, start there. Make it relevant to their life.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💛</span>
              <span><strong>Do not use jargon.</strong> Say &quot;the website where you type questions&quot; not &quot;the LLM interface.&quot; Match their language.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💛</span>
              <span><strong>Celebrate small wins.</strong> Their first successful AI conversation is a big deal. Treat it that way.</span>
            </li>
          </ul>
        </section>

        {/* Step by step */}
        <section className="rounded-card p-8 border-2" style={{ backgroundColor: "#E8F0E9", borderColor: "#A3C3A7" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#2D5A3D" }}>
            📋 A Step-by-Step Plan
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#2D5A3D" }}>Step 1: Set Up an Account Together</p>
              <p>Pick one AI service to start with. We recommend ChatGPT or Google Gemini because they are free and straightforward. Sit with them and create an account. Write down the login details somewhere safe (a notebook, not a sticky note on the screen).</p>
            </div>

            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#2D5A3D" }}>Step 2: Bookmark It</p>
              <p>Add the AI website to their bookmarks or home screen. Make it easy to find. If they use a tablet, you could add a shortcut icon to their home screen so it feels like an app.</p>
            </div>

            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#2D5A3D" }}>Step 3: Do the First Conversation Together</p>
              <p>Let them type the first question. Pick something fun and relevant. &quot;What is a good recipe for scones?&quot; or &quot;Tell me about the history of [their town].&quot; When the answer appears, read it together and talk about it.</p>
            </div>

            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#2D5A3D" }}>Step 4: Show Them Follow-up Questions</p>
              <p>The magic of AI is that you can keep the conversation going. Show them they can say &quot;Tell me more&quot; or &quot;Make that simpler&quot; or &quot;What about this instead?&quot; This is usually the moment it clicks.</p>
            </div>

            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#2D5A3D" }}>Step 5: Cover the Safety Basics</p>
              <p>Gently explain what not to share (passwords, bank details, personal ID numbers). Do not scare them. Frame it as common sense: &quot;Just like you would not give your bank details to a stranger, do not type them here.&quot;</p>
            </div>

            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#2D5A3D" }}>Step 6: Give Them Homework (Really)</p>
              <p>Before you leave, suggest three things they could try asking AI during the week. Write them down on paper. &quot;Ask it for a recipe using what is in your fridge.&quot; &quot;Ask it to explain something from the news.&quot; &quot;Ask it to help write a birthday card.&quot;</p>
            </div>

            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#2D5A3D" }}>Step 7: Check In</p>
              <p>Call or visit a few days later and ask how it went. Answer any questions. Celebrate whatever they tried, even if it did not go perfectly.</p>
            </div>
          </div>
        </section>

        {/* Common problems */}
        <section className="rounded-card p-8 border-2" style={{ backgroundColor: "#EFF6FF", borderColor: "#93C5FD" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#1E40AF" }}>
            🔧 Common Problems and Solutions
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#1E40AF" }}>&quot;They forgot how to get back to it&quot;</p>
              <p>Bookmark it. Add a shortcut to the home screen. Write the website address on a card they keep by the computer. Make it impossible to lose.</p>
            </div>

            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#1E40AF" }}>&quot;They forgot their password&quot;</p>
              <p>Help them set up a simple, memorable password. Write it in a small notebook they keep in a drawer (not on a sticky note on the screen). Consider using their email login (Google or Apple) to sign in, which avoids a separate password.</p>
            </div>

            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#1E40AF" }}>&quot;They are afraid of breaking something&quot;</p>
              <p>Reassure them: there is nothing they can type that will break their computer, the internet, or the AI. It is like a conversation. If it goes wrong, you just start a new one.</p>
            </div>

            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#1E40AF" }}>&quot;They do not see the point&quot;</p>
              <p>Find a real problem AI can solve for them. Maybe they struggle with formal letters. Maybe they want gift ideas. Maybe they are curious about a health condition. When AI solves a real problem, the value becomes clear.</p>
            </div>

            <div className="bg-white rounded-btn p-5">
              <p className="font-semibold mb-2" style={{ color: "#1E40AF" }}>&quot;The text is too small&quot;</p>
              <p>Show them how to zoom in on their browser. On a computer, hold Ctrl (or Cmd on a Mac) and press the plus key. On a tablet or phone, pinch to zoom. You can also increase the default text size in their device settings.</p>
            </div>
          </div>
        </section>

        {/* Things to avoid */}
        <section className="rounded-card p-8" style={{ backgroundColor: "#FEF2F2" }}>
          <h2 className="text-h2 font-semibold mb-4" style={{ color: "#991B1B" }}>
            ⚠️ Things to Avoid
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🚫</span>
              <span><strong>Do not sigh or show frustration.</strong> If they see you getting impatient, they will stop asking for help.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🚫</span>
              <span><strong>Do not grab the keyboard or phone.</strong> Guide with words, not by taking over.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🚫</span>
              <span><strong>Do not teach too much at once.</strong> One thing per session is better than five things that get forgotten.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🚫</span>
              <span><strong>Do not dismiss their concerns.</strong> If they are worried about privacy or safety, take it seriously. Show them the{" "}
                <Link href="/stay-safe" className="underline underline-offset-4" style={{ color: "#991B1B" }}>Stay Safe</Link> page.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🚫</span>
              <span><strong>Do not compare them to others.</strong> &quot;Even my kids can do it&quot; is not motivating. It is crushing.</span>
            </li>
          </ul>
        </section>

        {/* Gift idea */}
        <section className="rounded-card p-8" style={{ backgroundColor: "#FDF2F8" }}>
          <h2 className="text-h3 font-semibold mb-4" style={{ color: "#9D174D" }}>
            🎁 A Lovely Thing You Can Do
          </h2>
          <p className="mb-5">
            Write down five or ten questions or prompts your relative could try,
            personalised to them. Put them on a card or a piece of paper.
            For example:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span>📝</span>
              <span>&quot;What can I plant in my garden this month?&quot;</span>
            </li>
            <li className="flex items-start gap-3">
              <span>📝</span>
              <span>&quot;Help me write a birthday message for [grandchild&apos;s name].&quot;</span>
            </li>
            <li className="flex items-start gap-3">
              <span>📝</span>
              <span>&quot;What films from the 1960s would you recommend?&quot;</span>
            </li>
            <li className="flex items-start gap-3">
              <span>📝</span>
              <span>&quot;Explain what [medical term from a recent letter] means in simple words.&quot;</span>
            </li>
            <li className="flex items-start gap-3">
              <span>📝</span>
              <span>&quot;I have lamb mince and peppers. What can I cook tonight?&quot;</span>
            </li>
          </ul>
          <p className="mt-5">
            This gives them a starting point so they never have to stare at a
            blank screen wondering what to type.
          </p>
        </section>

        <div
          className="rounded-card p-8 text-center"
          style={{ backgroundColor: "#2D5A3D", color: "white" }}
        >
          <p className="text-h3 font-semibold mb-2">Thank You for Helping</p>
          <p className="text-body-lg">
            The fact that you are reading this means you care. Your patience and
            time will make a real difference. Share this whole website with your
            relative. It was built for them.
          </p>
        </div>
        <Quiz title={forFamiliesQuiz.title} questions={forFamiliesQuiz.questions} lessonNumber={7} />
      </div>

      <LessonNav currentLesson={7} />
    </div>
  );
}
