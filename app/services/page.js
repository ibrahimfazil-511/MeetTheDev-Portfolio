"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Layout,
  ShoppingBag,
  Zap,
  Clock,
  Calculator,
  ArrowRight,
  HelpCircle,
  Check,
  CheckCircle2,
  Sparkles,
  Layers,
  Rocket,
  ShieldCheck,
  Sliders,
  Database,
  Server,
  UtensilsCrossed,
  MessageCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { PageTransition } from "@/components/PageTransition";

const SERVICES_LIST = [
  {
    id: "frontend-react-nextjs",
    title: "React 18 & Next.js 14 Frontend Applications",
    description:
      "Bespoke interactive web applications built with Next.js 14 App Router, React 18 hooks, and modern JavaScript (ES6+). Zero bloat, responsive layouts, modular component design, and sub-second performance.",
    icon: Code,
    features: [
      "Next.js 14 App Router & Server Components",
      "React 18 Custom Hooks & State Machines",
      "Modern JavaScript (ES6+) Clean Architecture",
      "Sub-Second Page Loads & Lazy Hydration",
    ],
    highlight: "Core Specialty",
  },
  {
    id: "html-css-design-systems",
    title: "Semantic HTML5 & Modern CSS3 / Tailwind Systems",
    description:
      "Pixel-perfect UI design systems crafted with semantic HTML5, modern CSS3 (Flexbox/Grid), and Tailwind CSS. Complete with dark mode, fluid micro-interactions, WCAG 2.1 accessibility, and custom Shadcn UI primitives.",
    icon: Layout,
    features: [
      "Semantic HTML5 & WCAG Accessible Standards",
      "Tailwind CSS & Modern CSS3 Design Tokens",
      "Fluid Framer Motion Spring Animations",
      "Pixel-Perfect Mobile-First Responsive UI",
    ],
    highlight: "Design & UX",
  },
  {
    id: "supabase-realtime",
    title: "Supabase Integration & Real-time Web Apps",
    description:
      "Seamless frontend-to-cloud integration powered by Supabase. Connect your React/Next.js frontend to real-time PostgreSQL databases, authentication providers, media storage, and secure row-level security policies.",
    icon: Database,
    features: [
      "Supabase Realtime Subscriptions & Client Sync",
      "Supabase User Auth & Protected Client Routes",
      "PostgreSQL Database Queries & Row Level Security",
      "RESTful Fetch Pipelines & Error Boundaries",
    ],
    highlight: "BaaS & Realtime",
  },
  {
    id: "frontend-performance",
    title: "Frontend Performance & Core Web Vitals Optimization",
    description:
      "Transform sluggish web apps into lightning-fast experiences with 99-100 Google Lighthouse scores, sub-second First Contentful Paint (<0.5s), zero layout shifts (CLS: 0.000), and search engine visibility.",
    icon: Zap,
    features: [
      "Core Web Vitals Audit & Remediation (<0.5s FCP)",
      "Code Splitting, Lazy Hydration & Image Optimization",
      "SEO Semantics, Microdata & OpenGraph Cards",
      "Vercel Edge Network & Production CI/CD",
    ],
    highlight: "Sub-Second Speed",
  },
];

const FAQ_ITEMS = [
  {
    title: "Why do you develop exclusively in pure JavaScript (ES6+) without TypeScript?",
    content:
      "Pure modern JavaScript (ES6+) provides lightning-fast compilation, zero build overhead, rapid iteration, and direct browser alignment. With disciplined code architecture, clean modular separation, and strict linting, you receive production-grade, bug-free applications without TypeScript compilation bloat or dependency friction.",
  },
  {
    title: "How does the project delivery workflow operate with MeetTheDev?",
    content:
      "We begin with a detailed scoping and architectural session to outline exact features and milestones. You receive regular interactive preview links deployed directly to staging on Vercel so you can test features on real devices throughout development.",
  },
  {
    title: "Do I receive full source code ownership upon project completion?",
    content:
      "Yes, 100%. All source code, design assets, configurations, and repository rights are transferred to you with zero vendor lock-in or proprietary licensing restrictions.",
  },
  {
    title: "Can you optimize and refactor my existing React or Next.js app?",
    content:
      "Absolutely. I routinely audit existing web applications for performance bottlenecks, accessibility issues, outdated dependencies, and UI inconsistencies, migrating them to modern Next.js and Shadcn architectures.",
  },
  {
    title: "What ongoing maintenance and support do you provide post-launch?",
    content:
      "Every project includes 30 days of complimentary post-launch warranty support covering bug fixes, browser updates, and deployment checks. Monthly maintenance retainers are also available.",
  },
];

export default function ServicesPage() {
  const [projectType, setProjectType] = useState("restaurant");
  const [animationLevel, setAnimationLevel] = useState("advanced");
  const [hasAuth, setHasAuth] = useState(true);
  const [hasDatabase, setHasDatabase] = useState(true);
  const [hasSEO, setHasSEO] = useState(true);
  const [urgency, setUrgency] = useState("standard");

  const PROJECT_TYPES = [
    {
      id: "restaurant",
      name: "Zero-Commission Restaurant & Retail Ordering",
      baseDays: 5,
      desc: "Direct WhatsApp checkout, QR digital menu, cart drawer, sub-second routing, 0% platform fee.",
    },
    {
      id: "saas",
      name: "SaaS Application & Dashboard",
      baseDays: 14,
      desc: "Full dashboard, charts, table filtering, auth layout, and user settings.",
    },
    {
      id: "ecommerce",
      name: "E-Commerce / Digital Pharmacy",
      baseDays: 16,
      desc: "Catalog, prescription/product modals, cart, checkout, and inventory views.",
    },
    {
      id: "landing",
      name: "High-Converting Product Experience",
      baseDays: 4,
      desc: "Hero section, interactive demo showcases, FAQ, CTA, and contact integration.",
    },
    {
      id: "custom",
      name: "Custom Multi-Page Web Platform",
      baseDays: 18,
      desc: "Bespoke architectural logic, dynamic routing, CMS, and multi-step workflows.",
    },
  ];

  const calculation = useMemo(() => {
    const selectedType = PROJECT_TYPES.find((t) => t.id === projectType) || PROJECT_TYPES[0];

    let days = selectedType.baseDays;

    if (animationLevel === "subtle") {
      days += 1;
    } else if (animationLevel === "advanced") {
      days += 2;
    } else if (animationLevel === "ultra") {
      days += 4;
    }

    if (hasAuth) days += 2;
    if (hasDatabase) days += 3;
    if (hasSEO) days += 1;

    if (urgency === "fast") {
      days = Math.max(3, Math.round(days * 0.65));
    }

    return {
      days,
      selectedType,
    };
  }, [projectType, animationLevel, hasAuth, hasDatabase, hasSEO, urgency]);

  return (
    <PageTransition>
      <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-3">
            <Rocket className="w-3.5 h-3.5 mr-1" /> Frontend Solutions
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Frontend Engineering Services
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
            From modern responsive React &amp; Next.js interfaces to semantic HTML5, modern CSS3/Tailwind styling, Supabase real-time cloud data, and sub-second Core Web Vitals.
            Delivered on time and deployed on Vercel.
          </p>
        </div>

        {/* 4 CORE SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {SERVICES_LIST.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
                      {service.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 font-mono"
                      >
                        <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-white flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-100 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500">
                    Production Grade • Next.js
                  </span>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-zinc-900 dark:text-white hover:underline"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* DYNAMIC INTERACTIVE ESTIMATOR */}
        <section id="estimator" className="mb-24 scroll-mt-24">
          <div className="max-w-3xl mb-10">
            <Badge variant="outline" className="mb-2">
              <Calculator className="w-3.5 h-3.5 mr-1" /> Dynamic Specification Engine
            </Badge>
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Interactive Scope & Timeline Estimator
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Select your project requirements and architecture options to generate a customized technical roadmap and delivery timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Controls Column */}
            <Card className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              {/* Step 1: Project Type Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold mb-3">
                  1. Select Project Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        projectType === type.id
                          ? "border-black bg-zinc-100 dark:border-white dark:bg-white/10 text-zinc-900 dark:text-white shadow-sm ring-1 ring-black dark:ring-white"
                          : "border-zinc-200 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/20 text-zinc-700 dark:text-zinc-300 bg-white/40 dark:bg-white/5"
                      }`}
                    >
                      <div className="font-bold text-sm mb-1">{type.name}</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">
                        {type.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Motion & Animation Level */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold mb-3">
                  2. Motion &amp; Animation Level
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { id: "subtle", label: "Subtle & Clean", desc: "Basic fades" },
                    { id: "advanced", label: "Framer Motion", desc: "Micro-interactions" },
                    { id: "ultra", label: "Ultra 3D & Studio", desc: "Spotlights & physics" },
                  ].map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setAnimationLevel(level.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        animationLevel === level.id
                          ? "border-black bg-zinc-100 dark:border-white dark:bg-white/10 text-zinc-900 dark:text-white shadow-sm ring-1 ring-black dark:ring-white"
                          : "border-zinc-200 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/20 text-zinc-700 dark:text-zinc-300 bg-white/40 dark:bg-white/5"
                      }`}
                    >
                      <div className="text-xs font-bold">{level.label}</div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {level.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Architecture Addons */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold mb-3">
                  3. Key Architectural Features
                </label>
                <div className="space-y-2.5">
                  {[
                    {
                      label: "Supabase Authentication & Protected Routes",
                      state: hasAuth,
                      setter: setHasAuth,
                      desc: "User sessions, OAuth sign-in, and protected client-side dashboard guards",
                    },
                    {
                      label: "Supabase Realtime Database & API Integration",
                      state: hasDatabase,
                      setter: setHasDatabase,
                      desc: "Instant live table subscriptions, client queries, and optimistic state updates",
                    },
                    {
                      label: "Semantic HTML5, SEO & 100/100 Core Web Vitals",
                      state: hasSEO,
                      setter: setHasSEO,
                      desc: "Accessible markup, microdata, sub-second FCP, and zero layout shift",
                    },
                  ].map((addon, idx) => (
                    <div
                      key={idx}
                      onClick={() => addon.setter(!addon.state)}
                      className="flex items-center justify-between p-3 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/30 dark:bg-white/5 cursor-pointer hover:border-zinc-400 dark:hover:border-white/25 transition-all select-none"
                    >
                      <div>
                        <div className="text-xs font-semibold text-zinc-900 dark:text-white">
                          {addon.label}
                        </div>
                        <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                          {addon.desc}
                        </div>
                      </div>
                      <div
                        className={`w-9 h-5 flex items-center rounded-full p-1 transition-colors ${
                          addon.state ? "bg-black dark:bg-white" : "bg-zinc-300 dark:bg-zinc-700"
                        }`}
                      >
                        <div
                          className={`w-3.5 h-3.5 rounded-full shadow-md transform transition-transform ${
                            addon.state
                              ? "translate-x-4 bg-white dark:bg-black"
                              : "translate-x-0 bg-white dark:bg-zinc-400"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 4: Urgency Mode */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold mb-2">
                  4. Delivery Priority
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setUrgency("standard")}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      urgency === "standard"
                        ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                        : "border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    Standard Pace
                  </button>
                  <button
                    onClick={() => setUrgency("fast")}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      urgency === "fast"
                        ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                        : "border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    ⚡ Fast-Track Priority (Accelerated)
                  </button>
                </div>
              </div>
            </Card>

            {/* Right Summary Column */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 p-6 sm:p-8 rounded-2xl border border-zinc-300 dark:border-white/15 bg-gradient-to-b from-[#14151B] to-[#08090C] text-white shadow-2xl space-y-6">
                <div>
                  <span className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                    Dynamic Scope Specification
                  </span>
                  <h3 className="text-2xl font-extrabold mt-1">
                    {calculation.selectedType.name}
                  </h3>
                </div>

                {/* Scope Status & Timeline (NO DOLLAR PRICING) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                      Scope Status
                    </span>
                    <span className="text-sm sm:text-base font-bold text-emerald-400 font-mono flex items-center gap-1.5 pt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Ready to Build
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono block mt-1">
                      Direct WhatsApp Brief
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                      Estimated Timeline
                    </span>
                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white flex items-center gap-1.5 font-mono">
                      <Clock className="w-5 h-5 text-zinc-300 flex-shrink-0" />
                      ~{calculation.days} Days
                    </span>
                  </div>
                </div>

                {/* Scope Breakdown */}
                <div className="space-y-2 text-xs">
                  <div className="font-semibold text-zinc-300 font-mono text-[11px]">
                    Package Inclusions:
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Pure JavaScript (ES6+) Next.js 14 Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Motion: {animationLevel.toUpperCase()}</span>
                  </div>
                  {hasAuth && (
                    <div className="flex items-center gap-2 text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Protected Routes & Authentication</span>
                    </div>
                  )}
                  {hasDatabase && (
                    <div className="flex items-center gap-2 text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Database & Dynamic API Endpoints</span>
                    </div>
                  )}
                  {hasSEO && (
                    <div className="flex items-center gap-2 text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>99+ Lighthouse Score & Complete SEO Setup</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Direct Vercel Deployment & SSL</span>
                  </div>
                </div>

                {/* Book Package / Lock In Package Actions */}
                <div className="space-y-2.5 pt-2">
                  <Link
                    href={`/contact?service=${encodeURIComponent(
                      calculation.selectedType.name
                    )}&timeline=${encodeURIComponent(`~${calculation.days} Days`)}`}
                    className="w-full py-3.5 px-6 rounded-xl text-center font-bold text-sm text-black bg-white hover:bg-zinc-200 shadow-[0_0_20px_-3px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-black" />
                    <span>Lock In This Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://wa.me/923342850819?text=${encodeURIComponent(
                      `Hi Ibrahim, I'd like to consult on the "${calculation.selectedType.name}" package (~${calculation.days} Days timeline). Here are my requirements:`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl text-center font-bold text-xs text-black bg-[#25D366] hover:bg-[#1EBE5D] shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>Instant WhatsApp Consultation (0334 2850819)</span>
                  </a>
                </div>

                <p className="text-[11px] text-zinc-400 text-center font-mono">
                  Opens contact briefing form to submit your phone number and project requirements directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-2">
              <HelpCircle className="w-3.5 h-3.5 mr-1" /> Clear Answers
            </Badge>
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Everything you need to know about partnering with MeetTheDev.
            </p>
          </div>

          <Accordion items={FAQ_ITEMS} />
        </section>
      </div>
    </PageTransition>
  );
}
