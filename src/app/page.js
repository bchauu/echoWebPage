// "use client";

// import Image from "next/image";

// import { useState } from "react";

// const faqs = [
//   {
//     question: "Is Echo like Duolingo?",
//     answer:
//       "Not really. Echo doesn't follow a forced curriculum — you choose what you want to say, and Echo builds from there.",
//   },
//   {
//     question: "Do I need to know the language already?",
//     answer:
//       "Nope. Echo adapts to your level and helps you learn naturally through immersive, voice-led stories.",
//   },
//   {
//     question: "Is it free?",
//     answer:
//       "Yes. You can get started for free. There are optional upgrades for deeper practice and advanced story modes.",
//   },
//   {
//     question: "Will my progress transfer to Android?",
//     answer:
//       "Yep — as long as you create an account, your phrases and story progress will sync when Android launches.",
//   },
// ];

// export default function Home() {
//   const [openIndex, setOpenIndex] = useState(null);
//   return (
//     <main className="min-h-screen bg-[#1a1a1a] text-white">
//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-12">
//         <div className="max-w-xl text-center md:text-left">
//           <h1 className="text-5xl font-bold mb-4 leading-tight">
//             What do you want to say?
//           </h1>
//           <p className="text-lg text-gray-300 mb-8">
//             Echo lets you choose your own phrases — then learn them through real
//             conversation.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <a
//               href="https://apps.apple.com/us/app/echo-ai-language/id1674678298"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white text-black font-semibold px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition"
//             >
//                Download on iOS
//             </a>
//             <a
//               href="#waitlist"
//               className="border border-white text-white font-semibold px-6 py-3 rounded-full text-lg hover:bg-white hover:text-black transition"
//             >
//               Join Android Waitlist
//             </a>
//           </div>
//         </div>

//         <div className="w-[280px] md:w-[320px]">
//           <Image
//             src="/heroscreenshot.png"
//             alt="Echo Hero Screenshot"
//             width={320}
//             height={640}
//             className="rounded-xl shadow-lg"
//           />
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="bg-[#121212] text-white py-16 px-4 text-center">
//         <h2 className="text-2xl font-bold mb-6">How Echo Works</h2>
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
//           <div>
//             <h3 className="font-semibold text-lg mb-2">
//               1. Choose what you want to say
//             </h3>
//             <p className="text-gray-300">
//               No forced lessons. You type what matters to you — Echo starts from
//               there.
//             </p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg mb-2">
//               2. Practice through story
//             </h3>
//             <p className="text-gray-300">
//               Echo builds a fictional scene around your phrase. You speak,
//               react, and feel it.
//             </p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg mb-2">3. Grow your voice</h3>
//             <p className="text-gray-300">
//               Get feedback. Unlock better versions. Learn the tone, not just the
//               words.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mystery Reward Section */}
//       <section className="bg-[#0f0f0f] text-white py-20 px-6 text-center">
//         <h2 className="text-3xl font-bold mb-4">
//           The more you express, the louder the Echo responds.
//         </h2>
//         <p className="text-gray-300 text-lg max-w-xl mx-auto mb-6">
//           Some voices unlock hidden paths. Others awaken… something rare.
//         </p>
//         <p className="text-sm text-gray-500 italic">
//           Echo doesn’t forget. Keep going.
//         </p>
//       </section>

//       {/* Screenshots Section */}
//       <section className="py-16 px-4 bg-[#1a1a1a] text-center text-white">
//         <h2 className="text-2xl font-bold mb-6">See Echo in Action</h2>
//         <div className="flex flex-col md:flex-row justify-center items-center gap-6">
//           <Image
//             src="/images/echo-screen-1.png"
//             alt="Echo Story Screenshot"
//             width={280}
//             height={600}
//             className="rounded-xl shadow-lg"
//           />
//           <Image
//             src="/images/echo-screen-2.png"
//             alt="Echo Phrase Screenshot"
//             width={280}
//             height={600}
//             className="rounded-xl shadow-lg"
//           />
//         </div>
//       </section>

//       {/* Android Waitlist Section */}
//       <section
//         id="waitlist"
//         className="bg-[#121212] py-16 px-4 text-center text-white"
//       >
//         <h2 className="text-2xl font-bold mb-4">No Android yet?</h2>
//         <p className="text-gray-300 mb-6">
//           We're starting with iOS first. Android is coming soon — sign up to be
//           notified when it's ready.
//         </p>
//         <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-2 border border-gray-600 rounded-md w-full bg-[#1a1a1a] text-white placeholder-gray-400"
//           />
//           <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition">
//             Notify Me
//           </button>
//         </form>
//       </section>

//       {/* Testimonials Section */}
//       <section className="bg-[#1a1a1a] text-white py-16 px-4 text-center">
//         <h2 className="text-2xl font-bold mb-10">What Learners Are Saying</h2>
//         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
//           <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
//             <p className="italic mb-4">
//               “I used to memorize phrases I’d never say in real life. Echo let
//               me say what I <strong>actually</strong> wanted — and I finally
//               felt heard in another language.”
//             </p>
//             <p className="font-semibold text-sm text-gray-400">
//               — Melina R., Seoul
//             </p>
//           </div>
//           <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
//             <p className="italic mb-4">
//               “I’ve tried Duolingo, Anki, and ChatGPT. Echo’s the first one that
//               actually <strong>feels</strong> like a conversation. I’m speaking
//               more, not just studying.”
//             </p>
//             <p className="font-semibold text-sm text-gray-400">
//               — Jared T., Toronto
//             </p>
//           </div>
//           <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
//             <p className="italic mb-4">
//               “I didn’t think I could learn Japanese. But Echo made it feel like
//               a story I was part of… not a test I had to pass.”
//             </p>
//             <p className="font-semibold text-sm text-gray-400">
//               — Nara K., Singapore
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#1a1a1a] text-white py-16 px-6">
//         <h2 className="text-2xl font-bold mb-6 text-center">FAQ</h2>
//         <div className="max-w-2xl mx-auto space-y-4">
//           {faqs.map((faq, i) => (
//             <div key={i} className="border-b border-gray-700 pb-4">
//               <button
//                 onClick={() => setOpenIndex(openIndex === i ? null : i)}
//                 className="flex justify-between w-full items-center text-left font-semibold text-lg"
//               >
//                 <span>{faq.question}</span>
//                 <span className="text-xl">{openIndex === i ? "−" : "+"}</span>
//               </button>
//               {openIndex === i && (
//                 <p className="text-gray-400 mt-2">{faq.answer}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Roadmap Section */}
//       <section className="bg-[#121212] text-white py-16 px-6">
//         <h2 className="text-2xl font-bold mb-8 text-center">What's Ahead</h2>
//         <div className="max-w-3xl mx-auto space-y-10 border-l border-gray-700 pl-6">
//           <div>
//             <h3 className="text-lg font-semibold mb-1">✅ iOS Launch</h3>
//             <p className="text-gray-400">
//               The first public version of Echo is live on the App Store — start
//               learning your voice now.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-1">🧪 Story Evolution</h3>
//             <p className="text-gray-400">
//               More characters. Deeper emotional arcs. Dynamic turns that
//               remember your choices.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-1">🟡 Android Release</h3>
//             <p className="text-gray-400">
//               Coming soon. Join the waitlist to be notified the moment it drops.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-1">🔒 Private Echolets</h3>
//             <p className="text-gray-400">
//               Some users may begin to receive hidden Echolets. These are
//               symbolic — and possibly more.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-1">🎁 Community Rewards</h3>
//             <p className="text-gray-400">
//               The more you express, the more Echo responds. Power users may
//               unlock something... surprising.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="bg-[#1a1a1a] text-white py-20 px-6 text-center">
//         <h2 className="text-3xl font-bold mb-4">Your voice matters.</h2>
//         <p className="text-lg text-gray-300 mb-8">
//           Echo isn't a course — it's a chance to say what you've always wanted
//           to. In your voice. In another language.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="https://apps.apple.com/us/app/echo-ai-language/id1674678298"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white text-black font-semibold px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition"
//           >
//              Download on iOS
//           </a>
//           <a
//             href="#waitlist"
//             className="border border-white text-white font-semibold px-6 py-3 rounded-full text-lg hover:bg-white hover:text-black transition"
//           >
//             Join Android Waitlist
//           </a>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#1a1a1a] py-8 text-center text-gray-400 text-sm">
//         <p>&copy; {new Date().getFullYear()} Echo. All rights reserved.</p>
//         <p>Made with ❤️ for language learners who want to say what matters.</p>
//       </footer>
//     </main>
//   );
// }

"use client";

import Image from "next/image";

import { useState } from "react";

const faqs = [
  {
    question: "Is Echo like Duolingo?",
    answer:
      "Not really. Echo doesn't follow a forced curriculum — you choose what you want to say, and Echo builds from there.",
  },
  {
    question: "Do I need to know the language already?",
    answer:
      "Nope. Echo adapts to your level and helps you learn naturally through immersive, voice-led stories.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes. You can get started for free. There are optional upgrades for deeper practice and advanced story modes.",
  },
  {
    question: "Will my progress transfer to Android?",
    answer:
      "Yep — as long as you create an account, your phrases and story progress will sync when Android launches.",
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      {/* <header className="absolute top-6 left-6 z-50">
        <Image
          src="/EchoIcon2.png"
          alt="Echo Logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />
      </header> */}
      <header className="flex justify-between items-center px-6 py-4 bg-black text-white">
        <div className="flex items-center space-x-2">
          <img src="/echoIcon2.png" alt="Echo Logo" className="h-6 w-6" />
          <span className="text-xl font-semibold">Echo</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#features" className="hover:text-gray-300">
            Features
          </a>
          <a href="#faq" className="hover:text-gray-300">
            FAQ
          </a>
          {/* <a
            href="#download"
            className="px-4 py-2 bg-yellow-500 rounded text-black font-medium hover:bg-yellow-400"
          >
            Get the App
          </a> */}
        </nav>
      </header>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-12">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            What do you want to say?
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Echo lets you choose your own phrases — then learn them through real
            conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <div className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-full text-lg opacity-70 cursor-default">
               iOS & Android — Coming Soon
            </div>
          </div>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://apps.apple.com/us/app/echo-ai-language/id1674678298"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-semibold px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition"
            >
               Download on iOS
            </a>
            <a
              href="#waitlist"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full text-lg hover:bg-white hover:text-black transition"
            >
              Join Android Waitlist
            </a>
          </div> */}
        </div>

        <div className="w-[280px] md:w-[320px]">
          <Image
            src="/heroImage.png"
            alt="Echo Hero Screenshot"
            width={320}
            height={640}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#121212] text-white py-16 px-4 text-center">
        <h2 id="features" className="text-2xl font-bold mb-6">
          How Echo Works
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              1. Choose what you want to say
            </h3>
            <p className="text-gray-300">
              No forced lessons. You type what matters to you — Echo starts from
              there.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">
              2. Practice through story
            </h3>
            <p className="text-gray-300">
              Echo builds a fictional scene around your phrase. You speak,
              react, and feel it.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">3. Grow your voice</h3>
            <p className="text-gray-300">
              Get feedback. Unlock better versions. Learn the tone, not just the
              words.
            </p>
          </div>
        </div>
      </section>

      {/* Mystery Reward Section */}
      <section className="bg-[#0f0f0f] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          The more you express, the louder the Echo responds.
        </h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-6">
          Some voices unlock hidden paths. Others awaken… something rare.
        </p>
        <p className="text-sm text-gray-500 italic">
          Echo doesn’t forget. Keep going.
        </p>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 px-4 bg-[#1a1a1a] text-center text-white">
        <h2 className="text-2xl font-bold mb-6">See Echo in Action</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Image
            src="/howitworks1.png"
            alt="Echo Story Screenshot"
            width={280}
            height={600}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/howitworks2.png"
            alt="Echo Phrase Screenshot"
            width={280}
            height={600}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Android Waitlist Section */}
      {/* <section
        id="waitlist"
        className="bg-[#121212] py-16 px-4 text-center text-white"
      >
        <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
        <p className="text-gray-300 mb-6">
          We're preparing for our launch soon — sign up to be notified when it's
          ready.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-600 rounded-md w-full bg-[#1a1a1a] text-white placeholder-gray-400"
          />
          <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition">
            Notify Me
          </button>
        </form>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="bg-[#1a1a1a] text-white py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-10">What Learners Are Saying</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
            <p className="italic mb-4">
              “I used to memorize phrases I’d never say in real life. Echo let
              me say what I <strong>actually</strong> wanted — and I finally
              felt heard in another language.”
            </p>
            <p className="font-semibold text-sm text-gray-400">
              — Melina R., Seoul
            </p>
          </div>
          <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
            <p className="italic mb-4">
              “I’ve tried Duolingo, Anki, and ChatGPT. Echo’s the first one that
              actually <strong>feels</strong> like a conversation. I’m speaking
              more, not just studying.”
            </p>
            <p className="font-semibold text-sm text-gray-400">
              — Jared T., Toronto
            </p>
          </div>
          <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
            <p className="italic mb-4">
              “I didn’t think I could learn Japanese. But Echo made it feel like
              a story I was part of… not a test I had to pass.”
            </p>
            <p className="font-semibold text-sm text-gray-400">
              — Nara K., Singapore
            </p>
          </div>
        </div>
      </section> */}

      <section className="bg-[#1a1a1a] text-white py-16 px-6">
        <h2 id="faq" className="text-2xl font-bold mb-6 text-center">
          FAQ
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-700 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex justify-between w-full items-center text-left font-semibold text-lg"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <p className="text-gray-400 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-[#121212] text-white py-16 px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">What's Ahead</h2>
        <div className="max-w-3xl mx-auto space-y-10 border-l border-gray-700 pl-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">✅ iOS Launch</h3>
            <p className="text-gray-400">
              The first public version of Echo is live on the App Store — start
              learning your voice now.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">🧪 Story Evolution</h3>
            <p className="text-gray-400">
              More characters. Deeper emotional arcs. Dynamic turns that
              remember your choices.
            </p>
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold mb-1">🟡 App Release Soon</h3>
            <p className="text-gray-400">
              Coming soon. Join the waitlist to be notified the moment it drops.
            </p>
          </div> */}
          <div>
            <h3 className="text-lg font-semibold mb-1">🔒 Private Echolets</h3>
            <p className="text-gray-400">
              Some users may begin to receive hidden Echolets. These are
              symbolic — and possibly more.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">🎁 Community Rewards</h3>
            <p className="text-gray-400">
              The more you express, the more Echo responds. Power users may
              unlock something... surprising.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#1a1a1a] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Your voice matters.</h2>
        <p className="text-lg text-gray-300 mb-8">
          Echo isn't a course — it's a chance to say what you've always wanted
          to. In your voice. In another language.
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com/us/app/echo-ai-language/id1674678298"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-semibold px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition"
          >
             Join iOS Waitlist
          </a>
          <a
            href="#waitlist"
            className="border border-white text-white font-semibold px-6 py-3 rounded-full text-lg hover:bg-white hover:text-black transition"
          >
            Join Android Waitlist
          </a>
        </div> */}
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Echo. All rights reserved.</p>
        <p>Made with ❤️ for language learners who want to say what matters.</p>
      </footer>
    </main>
  );
}
