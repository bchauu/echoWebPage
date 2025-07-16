"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4">
      <Image
        src="/echoIcon2.png"
        alt="Echo Logo"
        width={80}
        height={80}
        className="mx-auto mb-6"
      />
      <h1 className="text-4xl font-bold mb-4 text-center">Echo</h1>
      <p className="text-lg text-center max-w-md mb-8">
        Rebuild language through emotion and connection. Echo helps you speak
        again — one feeling at a time.
      </p>
      <a
        href="https://apps.apple.com/us/app/echo-ai-language/id6746782988" // replace with your real App Store link
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
      >
        Download on the App Store
      </a>
    </main>
  );
}
