"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  FileText,
  Layers3,
  Sparkles,
} from "lucide-react";

const ahemHref =
  "mailto:hello@glasswake.com?subject=AHEM%20Starter%20Pass%20request";
const productSessionsHref = "#ai-product-sessions";
const bookingHref =
  "https://app.squareup.com/appointments/book/32fjune8r2bjdv/LVHNAWGE4GYV5/start";
const resumeHref = bookingHref;

const ahemFeatures = [
  "Adaptive story conversations",
  "Phrase reveals",
  "Saved phrase review",
  "Text-to-speech listening",
  "Smart phrase suggestions",
  "Support for up to 4 languages",
];

const ahemAssetCards = [
  {
    title: "Adaptive Story Conversation",
    src: "/ahem-adaptive-story-conversation.png",
    alt: "AHEM adaptive story conversation screen showing a Shanghai convenience store dialogue.",
  },
  {
    title: "Phrase Creation",
    src: "/ahem-phrase-creation.png",
    alt: "AHEM phrase creation screen for turning a user request into a natural phrase.",
  },
  {
    title: "Real Situation Practice",
    src: "/ahem-real-situation-practice.png",
    alt: "AHEM real situation practice screen showing a restaurant story conversation.",
  },
  {
    title: "Saved Phrase Review",
    src: "/ahem-saved-phrase-review.png",
    alt: "AHEM saved phrase review screen showing phrase breakdowns and audio review.",
  },
];

const memoryLoop = [
  "Choose",
  "Respond",
  "Make a mistake",
  "Reveal",
  "Save",
  "Remember",
];

const buildChips = [
  "Live iOS + Android app",
  "Multi-step LLM pipeline",
  "Prompt orchestration",
  "Subscription systems",
  "AI-generated scenes",
  "Text-to-speech listening",
  "Cost guardrails",
  "Full-stack product build",
];

const serviceCards = [
  {
    id: "ai-product",
    title: "AI Product Planning & Builder Workflow",
    headline: "Build with AI tools without turning your product into a mess.",
    audience:
      "For indie builders, vibe coders, founders, and small teams using tools like Codex, Cursor, Lovable, Replit, Base44, Bolt, or Claude Code.",
    body: [
      "This service helps you plan the product before prompting the build. We map the user flow, break features into smaller steps, decide what should be AI-driven versus normal code, and turn vague ideas into clearer instructions your AI coding tools can actually follow.",
      'The goal is not to replace your AI tools or fix your whole app for you. The goal is to help you use them better: cleaner prompts, better feature breakdowns, clearer data flow, stronger modularization, and fewer "why did it change everything?" moments.',
    ],
    badge: "Three session options",
    href: productSessionsHref,
    cta: "View Session Options",
    support:
      "This is the umbrella service. Pick one of the three focused AI product sessions below.",
    icon: Code2,
    visualSrc: "/glasswake-ai-product-workflow.png",
    visualAlt:
      "Diagram showing input, logic, and AI tools turning an idea into a working product flow.",
  },
  {
    id: "career-review",
    title: "Tech Resume & AI Career Positioning Rewrite - 1 Page",
    headline: "Make your technical work easier to understand.",
    audience:
      "For software engineers, AI builders, product engineers, full-stack developers, and project-based candidates whose resume does not clearly show what they can do.",
    body: [
      "This is an async email-based rewrite for one resume page. You send your resume, target roles, and relevant project context; Glasswake rewrites the page so your technical work is clearer and easier to scan.",
      "This is not just grammar cleanup. The goal is to help you explain what you built, why it mattered, what decisions you made, and why recruiters, founders, or hiring teams should care.",
    ],
    price: "$299",
    serviceType: "Async email-based rewrite",
    listLabel: "What this can include",
    bullets: [
      "Resume structure",
      "Project storytelling",
      "AI/product positioning",
      "Technical credibility",
      "Portfolio explanation",
      "Interview narrative",
      "Role targeting",
      "Builder-style experience",
    ],
    href: resumeHref,
    cta: "Start Resume Rewrite",
    support:
      "Best for software, AI product, full-stack, startup, or applied-AI roles. Delivery is async by email.",
    icon: BriefcaseBusiness,
    visualSrc: "/glasswake-resume-rewrite.png",
    visualAlt:
      "Before and after resume rewrite visual showing a clearer technical resume.",
  },
];

const productSessionTypes = [
  {
    title: "AI Product Planning Session - 60 Minutes",
    subtitle: "Turn a rough idea into a clear product plan.",
    price: "$249",
    serviceType: "Live remote session",
    forText:
      "Early-stage ideas, messy concepts, or builders who know they want to make something with AI but do not know where to start.",
    description:
      "We clarify what the product is, who it is for, what the core user loop should be, where AI actually belongs, and what the first usable version should include.",
    goodFor: [
      "I have an AI app idea but do not know how to plan it.",
      "I know the feature I want, but not the product flow.",
      "I need help deciding what the MVP should be.",
      "I want to avoid building too many random features.",
    ],
    cover: [
      "Target user",
      "Core product loop",
      "MVP scope",
      "AI feature planning",
      "User flow mapping",
      "What to build first",
      "What to leave out",
    ],
    href: bookingHref,
    cta: "Plan My AI Product",
  },
  {
    title: "AI Integration Review - 60 Minutes",
    subtitle: "Figure out how AI should fit into your app.",
    price: "$299",
    serviceType: "Live remote session",
    forText:
      "Existing apps, prototypes, or products where the builder wants to add AI or clean up an AI feature.",
    description:
      "We review how AI fits into the product and look for cleaner ways to structure prompts, responses, backend flow, memory/context, retries, cost, and reusable logic.",
    goodFor: [
      "I already built something, but the AI flow feels messy.",
      "I do not know what should be prompt-based versus normal code.",
      "My AI feature works, but it feels fragile.",
      "I need a better structure before adding more features.",
    ],
    cover: [
      "Prompt and response structure",
      "Backend/API flow",
      "Memory and context handling",
      "Reusable AI workflows",
      "Caching, retries, and fallbacks",
      "Cost guardrails",
      "Premium feature planning",
      "Product UX around AI responses",
    ],
    href: bookingHref,
    cta: "Review My AI Integration",
  },
  {
    title: "AI Builder Workflow Session - 60 Minutes",
    subtitle: "Use AI coding tools with clearer instructions.",
    price: "$199",
    serviceType: "Live remote session",
    forText:
      "Vibe coders and indie builders using tools like Codex, Cursor, Lovable, Replit, Base44, Bolt, Claude Code, or similar AI coding tools.",
    description:
      "This session focuses on how you are asking AI tools to build. We break your feature into smaller instructions, clarify the expected data flow, define what files/modules should change, and create better prompts so the tool is less likely to break unrelated parts of the app.",
    goodFor: [
      "Codex/Cursor keeps changing too much.",
      "My prompts are too vague.",
      "I do not know how to split this feature into safe steps.",
      "My app is getting messy because I keep asking AI for big changes.",
      "I want fewer errors when using AI coding tools.",
    ],
    cover: [
      "Prompting strategy for AI coding tools",
      "Feature breakdown",
      "Data flow clarification",
      "Component/module planning",
      "Safer implementation steps",
      "What files should change",
      "What to ask the tool next",
      "How to review AI-generated changes",
    ],
    href: bookingHref,
    cta: "Improve My Build Prompts",
  },
];

const finalPaths = [
  {
    title: "I am building with AI.",
    copy: "Plan the product loop, structure the AI integration, or improve how you prompt AI coding tools.",
    href: productSessionsHref,
    cta: "Choose AI Product Session",
  },
  {
    title: "I need to explain my technical work better.",
    copy: "Rewrite one resume page so your projects and technical story are clearer.",
    href: resumeHref,
    cta: "Start Resume Rewrite",
  },
  {
    title: "I want to try AHEM.",
    copy: "Practice real phrases through adaptive language stories.",
    href: ahemHref,
    cta: "Try AHEM Starter Pass",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0F0D0B] text-[#FFF4DF]">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AhemShowcase />
      <WhyItWorks />
      <BuiltByGlasswakeSection />
      <FinalCta />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#FFF4DF]/10 bg-[#0F0D0B]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#FFF4DF] text-sm font-black tracking-tight text-[#1A120D] shadow-[0_0_28px_rgba(244,183,64,0.22)]">
            GW
          </span>
          <span>
            <span className="block text-base font-semibold text-[#FFF4DF]">
              Glasswake LLC
            </span>
            <span className="block text-xs text-[#B8AA9A]">
              Applied-AI product studio
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[#B8AA9A] md:flex">
          <a href="#ai-product" className="transition hover:text-[#FFF4DF]">
            AI Product
          </a>
          <a href="#career-review" className="transition hover:text-[#FFF4DF]">
            Resume Rewrite
          </a>
          <a href="#ahem" className="transition hover:text-[#FFF4DF]">
            AHEM
          </a>
          <a
            href="#built-by-glasswake"
            className="transition hover:text-[#FFF4DF]"
          >
            Built by Glasswake
          </a>
          <a
            href={productSessionsHref}
            className="rounded-full bg-[#F4B740] px-4 py-2 font-black text-[#1A120D] shadow-[0_0_28px_rgba(244,183,64,0.24)] transition hover:-translate-y-0.5 hover:bg-[#FFD25A] hover:shadow-[0_0_38px_rgba(244,183,64,0.36)]"
          >
            Book a Session
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate bg-[radial-gradient(circle_at_80%_20%,rgba(244,183,64,0.18),transparent_34%),radial-gradient(circle_at_18%_12%,rgba(183,140,255,0.08),transparent_30%),linear-gradient(180deg,#1A120D_0%,#0F0D0B_100%)]"
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F4B740]/35 to-transparent" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F4B740]/20 bg-[#2A211F]/80 px-4 py-2 text-sm font-semibold text-[#FFD25A] shadow-[0_0_38px_rgba(244,183,64,0.12)]">
            <Sparkles className="h-4 w-4" />
            BUILT AROUND A REAL SHIPPED APP
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.96] tracking-tight text-[#FFF4DF] sm:text-6xl lg:text-7xl">
            Plan better AI products.{" "}
            <span className="text-[#F4B740]">
              Explain technical work clearly.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#E8DED0]">
            Glasswake LLC helps indie builders, founders, and technical people
            plan AI products, use AI coding tools more effectively, and explain
            their technical work more clearly. It is also the studio behind
            AHEM, a live interactive language-learning app.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={productSessionsHref}>
              Choose AI Product Session
            </PrimaryButton>
            <SecondaryButton href={resumeHref}>
              Start Resume Rewrite
            </SecondaryButton>
          </div>

          <a
            href={ahemHref}
            className="mt-4 inline-flex text-sm font-bold text-[#FFD25A] underline decoration-[#F4B740]/40 underline-offset-4 transition hover:text-[#FFF4DF]"
          >
            Try AHEM Starter Pass
          </a>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              "AI product planning",
              "Builder workflow",
              "Tech resume & career positioning",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#FFF4DF]/10 bg-[#211815]/70 px-4 py-3 text-sm font-semibold text-[#E8DED0] shadow-[0_12px_50px_rgba(0,0,0,0.18)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <StudioHeroVisual />
      </div>
    </section>
  );
}

function StudioHeroVisual() {
  return (
    <div className="relative min-h-[520px]">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4B740]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[460px] gap-4">
        <div className="grid gap-4">
          <StudioCard
            eyebrow="Main Service"
            title="AI Product Planning & Builder Workflow"
            copy="Plan the product loop, structure AI integration, and guide AI coding tools with clearer instructions."
            icon={Layers3}
          />
          <StudioCard
            eyebrow="Main Service"
            title="Tech Resume & AI Career Positioning"
            copy="Turn projects, experience, and technical work into a clearer professional story."
            icon={FileText}
          />
          <StudioCard
            eyebrow="Built by Glasswake"
            title="AHEM Language App"
            copy="A live interactive language-learning app built around adaptive story conversations."
            icon={BookOpen}
          />
        </div>

        <div className="rounded-[24px] border border-[#FFF4DF]/10 bg-[#2A211F]/85 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
          <p className="text-sm font-semibold text-[#FFD25A]">
            AI can build fast, but it still needs a human who knows how to
            structure the request.
          </p>
          <p className="mt-2 text-sm leading-6 text-[#B8AA9A]">
            Glasswake helps builders become that human.
          </p>
        </div>
      </div>
    </div>
  );
}

function AhemShowcase() {
  return (
    <section
      id="ahem"
      className="relative isolate bg-[radial-gradient(circle_at_50%_0%,rgba(244,183,64,0.2),transparent_30%),linear-gradient(180deg,#120C08_0%,#1A120D_42%,#0F0D0B_100%)] px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD25A]/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_top,rgba(244,183,64,0.16),transparent_68%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl border-y border-[#F4B740]/25 py-12 text-center">
          <SectionEyebrow>02 / FLAGSHIP PRODUCT</SectionEyebrow>
          <h2 className="mt-4 text-5xl font-black leading-[0.98] tracking-tight text-[#FFF4DF] sm:text-6xl">
            AHEM is the language-learning app built by Glasswake.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#E8DED0] sm:text-lg">
            A live product for practicing what you actually want to say through
            adaptive story conversations.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-[#FFD25A]/25 bg-[#3A2A18]/70 px-4 py-2 text-sm font-bold text-[#FFD25A]">
              Practice phrases inside moments, not drills.
            </p>
            <p className="mt-5 text-base leading-8 text-[#E8DED0]">
              AHEM is an interactive language-learning app for people who do not
              want another fixed lesson path. Instead of memorizing canned
              phrases, users choose what they want to express and practice
              through adaptive story conversations.
            </p>
            <p className="mt-4 text-base leading-8 text-[#E8DED0]">
              Characters respond to the user. Useful phrases appear in context.
              Learners can reveal, save, listen to, and review the language that
              matters to their situation.
            </p>
            <p className="mt-4 text-base leading-8 text-[#E8DED0]">
              AHEM is built for the moments where normal language apps fall
              short: when someone knows a few words, but still freezes when they
              need to say something real.
            </p>
            <p className="mt-4 text-base leading-8 text-[#B8AA9A]">
              AHEM reflects the way Glasswake approaches AI products: start with
              the human loop, then design the system around it. The app combines
              adaptive story generation, multi-step LLM flows, text-to-speech
              listening, phrase review, subscription logic, and app-store
              deployment into a product people can actually use.
            </p>
          </div>

          <AhemScreenGallery />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {ahemFeatures.map((feature) => (
            <div
              key={feature}
              className="rounded-[22px] border border-[#FFF4DF]/10 bg-[#2A211F] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
            >
              <CheckCircle2 className="h-5 w-5 text-[#F4B740]" />
              <p className="mt-4 text-sm font-semibold leading-6 text-[#FFF4DF]">
                {feature}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-[#F4B740]/30 bg-[linear-gradient(135deg,#3A2A18_0%,#2A211F_58%,#1A120D_100%)] p-6 shadow-[0_0_70px_rgba(244,183,64,0.12)]">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.52fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFD25A]">
                AHEM Starter Pass
              </p>
              <h3 className="mt-3 text-3xl font-black text-[#FFF4DF]">
                Try AHEM Premium for 1 week.
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#E8DED0]">
                Use the starter pass to experience the core loop: choose a
                phrase or situation, enter an adaptive story, respond in
                context, reveal useful phrases, and save what matters.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#FFD25A]/25 bg-[#FFF4DF] p-5 text-[#1A120D] shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
              <p className="text-sm font-bold text-[#C9822B]">
                1-Week AHEM Premium Starter Pass
              </p>
              <div className="mt-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#5a4632]">
                    Starter pass
                  </p>
                  <p className="text-4xl font-black">$9.99</p>
                </div>
                <PrimaryButton href={ahemHref} compact>
                  Get Starter Pass
                </PrimaryButton>
              </div>
              <p className="mt-4 text-xs leading-5 text-[#6f5943]">
                New users only. Valid for one AHEM account. iOS or Android
                device and internet connection required. Redemption uses a
                unique App Store or Google Play offer code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItWorks() {
  return (
    <section className="bg-[#0F0D0B] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <SectionEyebrow>WHY AHEM WORKS</SectionEyebrow>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-[#FFF4DF] sm:text-5xl">
              People remember language better when it is tied to a moment.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#E8DED0]">
              A phrase is easier to remember when it helped someone answer,
              recover from a mistake, or say something they actually meant. AHEM
              turns language from random information to memorize into something
              connected to context, emotion, and use.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#FFF4DF]/10 bg-[#211815] p-5 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-6">
              {memoryLoop.map((step, index) => (
                <div key={step} className="relative">
                  <div className="rounded-[20px] border border-[#FFF4DF]/10 bg-[#2A211F] p-4 text-center">
                    <span className="mx-auto grid h-8 w-8 place-items-center rounded-full bg-[#F4B740] text-sm font-black text-[#1A120D]">
                      {index + 1}
                    </span>
                    <p className="mt-3 text-sm font-bold text-[#FFF4DF]">
                      {step}
                    </p>
                  </div>
                  {index < memoryLoop.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[#F4B740] sm:block" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-[#B8AA9A]">
              The goal is not to memorize more phrases. The goal is to practice
              language in a situation long enough for it to stick.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#211815] px-4 py-20 pb-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionEyebrow>01 / SERVICES</SectionEyebrow>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-[#FFF4DF] sm:text-5xl">
            Two main ways Glasswake can help.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#E8DED0]">
            Plan an AI product more clearly, or explain your technical work more
            effectively.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {serviceCards.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <ProductSessionTypes />
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article
      id={service.id}
      className="group scroll-mt-28 rounded-[28px] border border-[#FFF4DF]/10 bg-[#2A211F] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[#F4B740]/35 hover:shadow-[0_28px_90px_rgba(244,183,64,0.1)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#342A27] text-[#F4B740]">
          <Icon className="h-6 w-6" />
        </div>
        <span className="rounded-full border border-[#FFF4DF]/10 bg-[#211815] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#B8AA9A]">
          {service.badge || "Book a Session"}
        </span>
      </div>

      <div className="mt-6">
        <p className="text-sm font-bold text-[#FFD25A]">{service.title}</p>
        {(service.price || service.serviceType) && (
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {service.price && (
              <span className="text-4xl font-black leading-none text-[#FFF4DF]">
                {service.price}
              </span>
            )}
            {service.serviceType && (
              <span className="rounded-full border border-[#F4B740]/30 bg-[#3A2A18] px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#FFD25A]">
                {service.serviceType}
              </span>
            )}
          </div>
        )}
        <h3 className="mt-2 text-3xl font-black leading-tight text-[#FFF4DF]">
          {service.headline}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[#E8DED0]">
          {service.audience}
        </p>
        {service.body.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-sm leading-7 text-[#B8AA9A]">
            {paragraph}
          </p>
        ))}
      </div>

      <ServiceVisual src={service.visualSrc} alt={service.visualAlt} />

      {service.bullets && (
        <>
          <ExpandablePillList
            title={service.listLabel}
            items={service.bullets}
          />
        </>
      )}

      <div className="mt-7">
        <SecondaryButton href={service.href}>{service.cta}</SecondaryButton>
      </div>
      <p className="mt-4 text-xs leading-5 text-[#B8AA9A]">{service.support}</p>
    </article>
  );
}

function ProductSessionTypes() {
  return (
    <div
      id="ai-product-sessions"
      className="mt-6 scroll-mt-28 rounded-[28px] border border-[#F4B740]/20 bg-[#1A120D] p-5 sm:p-6"
    >
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFD25A]">
          AI Product Planning & Builder Workflow sessions
        </p>
        <h3 className="mt-3 text-2xl font-black text-[#FFF4DF]">
          Choose the AI product session that fits the problem.
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#B8AA9A]">
          These sessions are not full debugging, full code review, or
          done-for-you development. Glasswake does not promise to fix an entire
          broken codebase in one session. The focus is planning, workflow,
          prompting strategy, product structure, and clearer next steps.
        </p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {productSessionTypes.map((session) => (
          <article
            key={session.title}
            className="rounded-[24px] border border-[#FFF4DF]/10 bg-[#2A211F] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <p className="max-w-[14rem] text-sm font-bold leading-6 text-[#FFD25A]">
                {session.title}
              </p>
              <span className="rounded-full border border-[#F4B740]/30 bg-[#3A2A18] px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#FFD25A]">
                {session.serviceType}
              </span>
            </div>
            <p className="mt-4 text-4xl font-black leading-none text-[#FFF4DF]">
              {session.price}
            </p>
            <h4 className="mt-2 text-xl font-black leading-tight text-[#FFF4DF]">
              {session.subtitle}
            </h4>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[#8F8174]">
              For
            </p>
            <p className="mt-2 text-sm leading-6 text-[#E8DED0]">
              {session.forText}
            </p>
            <p className="mt-4 text-sm leading-6 text-[#B8AA9A]">
              {session.description}
            </p>

            <SessionList title="Good for" items={session.goodFor} />
            <SessionList
              title="What we can cover"
              items={session.cover}
              collapsible
            />

            <div className="mt-6">
              <SecondaryButton href={session.href}>
                {session.cta}
              </SecondaryButton>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ExpandablePillList({ title, items }) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, 4);
  const hiddenCount = items.length - visibleItems.length;

  return (
    <div className="mt-6">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FFD25A]">
        {title}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {visibleItems.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#FFF4DF]/10 bg-[#211815] px-3 py-2 text-xs font-semibold text-[#E8DED0]"
          >
            {item}
          </span>
        ))}
      </div>
      {items.length > 4 && (
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="mt-3 text-xs font-black text-[#FFD25A] underline decoration-[#F4B740]/40 underline-offset-4 transition hover:text-[#FFF4DF]"
        >
          {expanded ? "Show less" : `See ${hiddenCount} more`}
        </button>
      )}
    </div>
  );
}

function SessionList({ title, items, collapsible = false }) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = collapsible && !expanded ? items.slice(0, 4) : items;
  const hiddenCount = items.length - visibleItems.length;

  return (
    <div className="mt-5">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FFD25A]">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {visibleItems.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-sm leading-6 text-[#E8DED0]"
          >
            <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#F4B740]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {collapsible && items.length > 4 && (
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="mt-3 text-xs font-black text-[#FFD25A] underline decoration-[#F4B740]/40 underline-offset-4 transition hover:text-[#FFF4DF]"
        >
          {expanded ? "Show less" : `See ${hiddenCount} more`}
        </button>
      )}
    </div>
  );
}

function ServiceVisual({ src, alt }) {
  return (
    <div className="mt-6 overflow-hidden rounded-[24px] border border-[#F4B740]/20 bg-[#211815] p-2 shadow-[0_20px_70px_rgba(0,0,0,0.24)]">
      <Image
        src={src}
        alt={alt}
        width={1536}
        height={1024}
        className="block w-full rounded-[18px] object-contain"
        sizes="(min-width: 1024px) 520px, 100vw"
      />
    </div>
  );
}

function BuiltByGlasswakeSection() {
  return (
    <section
      id="built-by-glasswake"
      className="bg-[#0F0D0B] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionEyebrow>BUILT BY GLASSWAKE</SectionEyebrow>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-[#FFF4DF] sm:text-5xl">
            A real product, not a theoretical AI demo.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#E8DED0]">
            AHEM was built as a live iOS and Android app with adaptive story
            generation, multi-step LLM flows, subscriptions, text-to-speech
            listening, image-driven scenes, cost controls, and app-store
            deployment.
          </p>
          <p className="mt-4 text-base leading-8 text-[#B8AA9A]">
            That matters because useful AI products are not just prompts. They
            need product judgment, fallback logic, cost awareness, backend
            structure, user experience, and a clear reason for AI to exist in
            the first place.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {buildChips.map((chip) => (
            <div
              key={chip}
              className="rounded-[20px] border border-[#FFF4DF]/10 bg-[#211815] p-4 text-sm font-bold leading-6 text-[#FFF4DF]"
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative bg-[#1A120D] px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4B740]/35 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4B740]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <SectionEyebrow>CHOOSE THE PATH</SectionEyebrow>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-[#FFF4DF] sm:text-5xl">
            What do you need help with?
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {finalPaths.map((path) => {
            const external = isExternalHref(path.href);

            return (
              <a
                key={path.title}
                href={path.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group rounded-[28px] border border-[#FFF4DF]/10 bg-[#2A211F]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[#F4B740]/45"
              >
                <p className="min-h-20 text-xl font-black leading-snug text-[#FFF4DF]">
                  {path.title}
                </p>
                <p className="mt-3 min-h-14 text-sm leading-6 text-[#B8AA9A]">
                  {path.copy}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F4B740] px-4 py-3 text-sm font-black text-[#1A120D] shadow-[0_0_32px_rgba(244,183,64,0.2)]">
                  {path.cta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#FFF4DF]/10 bg-[#0F0D0B] px-4 py-8 text-center text-sm text-[#8F8174] sm:px-6 lg:px-8">
      <p>
        &copy; {new Date().getFullYear()} Glasswake LLC. Applied-AI product
        studio for language learning, AI product planning, and technical career
        positioning.
      </p>
      <p className="mt-2">
        Built around AHEM, a live interactive language-learning app.
      </p>
    </footer>
  );
}

function StudioCard({ eyebrow, title, copy, icon: Icon }) {
  return (
    <div className="rounded-[24px] border border-[#FFF4DF]/10 bg-[#2A211F]/90 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#342A27] text-[#F4B740]">
          <Icon className="h-5 w-5" />
        </span>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFD25A]">
          {eyebrow}
        </p>
      </div>
      <h3 className="mt-5 text-xl font-black leading-tight text-[#FFF4DF]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#B8AA9A]">{copy}</p>
    </div>
  );
}

function AhemScreenGallery() {
  return (
    <div className="min-w-0 rounded-[32px] border border-[#F4B740]/20 bg-[radial-gradient(circle_at_50%_0%,rgba(244,183,64,0.14),transparent_42%),#211815] p-4 shadow-[0_36px_110px_rgba(244,183,64,0.14)] sm:p-5">
      <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:thin] [scrollbar-color:#F4B74033_transparent]">
        {ahemAssetCards.map((asset) => (
          <figure
            key={asset.title}
            className="w-[230px] flex-none overflow-hidden rounded-[28px] border border-[#F4B740]/22 bg-[#120C08] shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:w-[250px] lg:w-[31%] xl:w-[30%]"
          >
            <Image
              src={asset.src}
              alt={asset.alt}
              width={384}
              height={1024}
              className="block h-auto w-full"
              sizes="(min-width: 1280px) 300px, (min-width: 1024px) 260px, 250px"
            />
          </figure>
        ))}
      </div>
      <p className="mt-3 text-center text-xs font-semibold leading-5 text-[#B8AA9A]">
        Swipe or scroll to see the full AHEM product flow.
      </p>
    </div>
  );
}

function SectionEyebrow({ children }) {
  return (
    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#F4B740]">
      {children}
    </p>
  );
}

function isExternalHref(href) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function PrimaryButton({ href, children, compact = false }) {
  const external = isExternalHref(href);

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B740] font-black text-[#1A120D] shadow-[0_0_44px_rgba(244,183,64,0.34)] ring-1 ring-[#FFD25A]/25 transition hover:-translate-y-0.5 hover:bg-[#FFD25A] hover:shadow-[0_0_56px_rgba(244,183,64,0.44)] ${
        compact ? "px-4 py-3 text-sm" : "px-6 py-4 text-sm"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function SecondaryButton({ href, children }) {
  const external = isExternalHref(href);

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F4B740]/45 bg-[#3A2A18] px-6 py-4 text-sm font-black text-[#FFD25A] shadow-[0_0_28px_rgba(244,183,64,0.14)] transition hover:-translate-y-0.5 hover:border-[#FFD25A]/80 hover:bg-[#F4B740] hover:text-[#1A120D] hover:shadow-[0_0_44px_rgba(244,183,64,0.26)]"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
