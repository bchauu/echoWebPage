"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// const faqs = [
//   {
//     question: "Is Ahem a Duolingo alternative?",
//     answer:
//       "Yes, it’s an alternative to Duolingo, but we take it a mile further. Ahem puts the power in your hands, letting you forge your own journey of what to learn — as if you’re dropped in a foreign country, mastering it through real interactions.",
//   },
//   {
//     question: "Do I need to know the language already?",
//     answer:
//       "No. Simply jump-in, shape your language—Ahem adapts to keep it real.",
//   },
//   {
//     question: "Is it free?",
//     answer:
//       "Yes, starts free. Unlock extras and more advanced modes with premium (no $AHEM tie).", // Fixed typo
//   },
//   {
//     question: "Is there a token?",
//     answer: "$AHEM fuels a movement—it’s apart from Ahem’s core.",
//   },
//   {
//     question: "What are Ahems?",
//     answer: "Ahems are your points you earn throughout in-app interactions.",
//   },
//   {
//     question: "What's agentic story mode?",
//     answer:
//       "Our standout feature: AI characters adapt to your words, driving dynamic stories and guiding your language mastery as you unlock their true agendas - just like in real life.",
//   },
//   {
//     question: "What sets Ahem apart from traditional learning?",
//     answer:
//       "Traditional systems demand grades and tests — we ditch that. Ahem lets you forge your path, mastering language through stories and stakes, not checklists.",
//   },
// ];

const faqs = [
  {
    question: "Is Echo a Duolingo alternative?",
    answer:
      "Yes, it’s an alternative to Duolingo, but we take it a mile further. Echo puts the power in your hands, letting you forge your own journey of what to learn — as if you’re dropped in a foreign country, mastering it through real interactions.",
  },
  {
    question: "Do I need to know the language already?",
    answer:
      "No. Simply jump in, shape your language — Echo adapts to keep it real.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes, starts free. Unlock extras and more advanced modes with premium (no $ECHO tie).",
  },
  {
    question: "Is there a token?",
    answer: "$ECHO fuels a movement — it’s apart from Echo’s core.",
  },
  {
    question: "What are Echolets?",
    answer: "Echolets are the points you earn throughout in-app interactions.",
  },
  {
    question: "What's agentic story mode?",
    answer:
      "Our standout feature: AI characters adapt to your words, driving dynamic stories and guiding your language mastery as you unlock their true agendas — just like in real life.",
  },
  {
    question: "What sets Echo apart from traditional learning?",
    answer:
      "Traditional systems demand grades and tests — we ditch that. Echo lets you forge your path, mastering language through stories and stakes, not checklists.",
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [countdown, setCountdown] = useState({
    days: Math.floor(Math.random() * 24) + 7,
    hours: Math.floor(Math.random() * 24),
    minutes: Math.floor(Math.random() * 60),
    seconds: Math.floor(Math.random() * 60),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }
        if (days < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#1B1411] text-[#F6EDE6]">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-4 bg-[#1B1411]">
        <div className="flex items-center space-x-2">
          <Image
            src="/echoIcon2.png"
            alt="Ahem Logo"
            width={450}
            height={450}
            className="h-6 w-6"
          />
          {/* <span className="text-xl font-semibold">Ahem</span> */}
          <span className="text-xl font-semibold">Echo</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm text-[#CBB6A7]">
          <a href="#features" className="hover:text-[#F6EDE6]">
            Features
          </a>
          <a href="#faq" className="hover:text-[#F6EDE6]">
            FAQ
          </a>
          <a
            href="https://pump.fun"
            target="_blank"
            className="hover:text-[#F6EDE6]"
          >
            Back to Pump.fun
          </a>
          <a
            href="https://x.com"
            target="_blank"
            className="hover:text-[#F6EDE6]"
          >
            X
          </a>
        </nav>
      </header>

      {/* Hero */}

      <section className="flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 lg:px-24 py-28 gap-16 max-w-6xl mx-auto">
        {/* LEFT TEXT BLOCK */}
        <div className="flex-1 text-center md:text-left">
          {/* COUNTDOWN */}
          <div className="mb-4">
            <div
              className="text-[#FFC44D] font-semibold animate-pulse"
              style={{ animation: "pulse 2s infinite" }}
            >
              {countdown.days}d {countdown.hours}h {countdown.minutes}m{" "}
              {countdown.seconds}s
            </div>
            <style jsx>{`
              @keyframes pulse {
                0% {
                  opacity: 1;
                }
                50% {
                  opacity: 0.6;
                }
                100% {
                  opacity: 1;
                }
              }
            `}</style>
          </div>

          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Shape Your Words, Own the Story.
          </h1>
          <p className="text-lg text-[#CBB6A7] mb-10 max-w-md mx-auto md:mx-0">
            Pick your words, spark agentic AI stories. Characters react and
            adapt in the language you’re mastering, making every choice
            urgent—and every lesson stick.
          </p>

          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-[#3A2620] text-[#F6EDE6] font-semibold px-6 py-3 rounded-full text-lg opacity-80 cursor-default">
              iOS and Android Coming Soon
            </div>
            <div className="text-sm text-[#CBB6A7]">
              Be Among the first subscribers for a Future Founders NFT!
            </div>
          </div>
        </div>

        {/* RIGHT VIDEO BLOCK */}
        <div className="flex-1 flex justify-center">
          <div className="relative group cursor-pointer w-full max-w-[320px]">
            {isPlaying ? (
              <video
                src="/heroVideo.mp4"
                autoPlay
                controls
                onEnded={() => setIsPlaying(false)} // 👈 Return to image when video ends
                className="rounded-xl shadow-xl w-full"
              />
            ) : (
              <>
                <Image
                  src="/heroImage.png"
                  alt="Ahem Hero Screenshot"
                  width={320}
                  height={640}
                  className="rounded-xl shadow-lg w-full"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() => setIsPlaying(true)}
                >
                  <div className="bg-white bg-opacity-75 p-3 rounded-full group-hover:scale-105 transition text-2xl">
                    ▶
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#3A2620] text-[#F6EDE6] py-16 px-8 text-center">
        {/* <h2 id="features" className="text-2xl font-bold mb-6">
          How Ahem Works
        </h2> */}
        <h2 id="features" className="text-2xl font-bold mb-6">
          How Echo Works
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              1. Choose your words and path
            </h3>
            {/* <p className="text-[#CBB6A7]">
              Choose the words you need — no forced lessons. Ahem transforms
              them into natural, modern phrases, ready for your story.
            </p> */}
            <p className="text-[#CBB6A7]">
              Choose the words you need — no forced lessons. Echo transforms
              them into natural, modern phrases, ready for your story.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">
              2. Reinforce with Quizzes
            </h3>
            <p className="text-[#CBB6A7]">
              Save 5 phrases, unlock a custom quiz. Test yourself, sharpen your
              skills, and feel the rush to get it right.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">
              3. Shape Stories, Build Connections
            </h3>
            <p className="text-[#CBB6A7]">
              Jump into stories with AI characters who use your words—or push
              you to. Bond through quests, earn points, and uncover their world
              as you master the language.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">
              4. Review and Rank Up
            </h3>
            <p className="text-[#CBB6A7]">
              Revisit saved phrases anytime, quiz at will, and climb the ranks
              with every win.
            </p>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="bg-[#2B1E19] text-[#F6EDE6] py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-[#583428]/30 rounded-lg p-5">
            <div className="text-[#FFC44D] font-semibold">
              Your Words Unleash Stories
            </div>
            <div className="text-sm text-[#CBB6A7] mt-2">
              Immersive tales coming soon. Your words shape the adventure.
            </div>
          </div>
          <div className="border border-[#583428]/30 rounded-lg p-5">
            <div className="text-[#FFC44D] font-semibold">Forge Your Path</div>
            <div className="text-sm text-[#CBB6A7] mt-2">
              Carve your own path.
            </div>
          </div>
          <div className="border border-[#583428]/30 rounded-lg p-5">
            {/* <div className="text-[#FFC44D] font-semibold">
              $AHEM - Ignite the Movement
            </div> */}
            <div className="text-[#FFC44D] font-semibold">
              $ECHO - Ignite the Movement
            </div>
            <div className="text-sm text-[#CBB6A7] mt-2">
              Reject old systems. Shape a new learning era.
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 px-4 bg-[#1B1411] text-center">
        <h2 className="text-2xl font-bold mb-6">See Echo in action</h2>
        {/* <h2 className="text-2xl font-bold mb-6">See Ahem in action</h2> */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div>
            <Image
              src="/howitworks1.png"
              alt="Story scene with adaptive AI"
              width={280}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <Image
              src="/howitworks2.png"
              alt="Phrase tools with AI characters shaping stories"
              width={280}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#1B1411] py-16 px-4">
        <h2 id="faq" className="text-2xl font-bold mb-6 text-center">
          FAQ
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#583428]/40 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex justify-between w-full items-center text-left font-semibold text-lg"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <p className="text-[#CBB6A7] mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-[#3A2620] py-16 px-2">
        <h2 className="text-2xl font-bold mb-8 text-center">What’s Ahead</h2>
        <div className="max-w-3xl mx-auto space-y-10 border-l border-[#583428]/40 pl-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">✅ iOS live</h3>
            <p className="text-[#CBB6A7]">
              First public build on the App Store.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">🧪 Story evolution</h3>
            <p className="text-[#CBB6A7]">
              Continued stories with more characters for each language, deeper
              arcs, and scenes that remember your choices.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">
              🛠️ Community-voted features
            </h3>
            <p className="text-[#CBB6A7]">
              New languages and quest-like stories based on your feedback from X
              and pump.fun.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">📜 Season milestones</h3>
            <p className="text-[#CBB6A7]">
              Unlock new ranks and story chapters with seasonal goals, shaped by
              your input and leaderboard progress.
            </p>
          </div>
        </div>
      </section>

      {/* Final */}
      <section className="bg-[#1B1411] py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Words, Your World.</h2>
        <p className="text-lg text-[#CBB6A7] mb-8">
          Ditch fixed curriculums for AI-powered quests in your language
          journey. Learn language through what motivates you.
        </p>
        <div className="text-sm text-[#CBB6A7]">
          <a
            href="https://pump.fun"
            target="_blank"
            className="underline underline-offset-4 hover:text-[#F6EDE6]"
          >
            Dive deeper on Pump.fun
          </a>{" "}
          ·{" "}
          {/* <a
            href="https://x.com"
            target="_blank"
            className="underline underline-offset-4 hover:text-[#F6EDE6]"
          >
            Follow our $AHEM community on X
          </a> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B1411] py-8 px-4 text-center text-[#CBB6A7] text-sm">
        {/* <p>&copy; {new Date().getFullYear()} Ahem. All rights reserved.</p> */}
        <p>&copy; {new Date().getFullYear()} Echo. All rights reserved.</p>
        <p>Made for people who want to say what matters.</p>
      </footer>
    </main>
  );
}
