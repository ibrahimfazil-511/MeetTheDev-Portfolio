"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Sparkles,
  GitBranch,
  Github,
  Linkedin,
  Triangle,
  Award,
  Terminal,
  Cpu,
  Layers,
  CheckCircle,
  ExternalLink,
  Laptop,
  Flame,
  UserCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { PageTransition } from "@/components/PageTransition";
import { MeetTheDevLogo } from "@/components/MeetTheDevLogo";
import { DeveloperSignature } from "@/components/ui/DeveloperSignature";
import { SignatureCertificateModal } from "@/components/ui/SignatureCertificateModal";
import { InteractiveSignaturePad } from "@/components/ui/InteractiveSignaturePad";

// Skill Definitions
const SKILLS_DATA = [
  // Core Frontend
  { name: "JavaScript (ES6+)", category: "frontend", level: 98, exp: "Async/Await, Closures, DOM APIs & ES Modules", icon: "⚡" },
  { name: "React 18", category: "frontend", level: 97, exp: "Components, Custom Hooks, State Machines & Context", icon: "⚛️" },
  { name: "Next.js 14 (App Router)", category: "frontend", level: 96, exp: "Server & Client Components, SSR & Routing", icon: "▲" },

  // HTML & CSS Styling
  { name: "Semantic HTML5", category: "styling", level: 98, exp: "WCAG Accessibility, Clean Semantic Trees & SEO", icon: "🌐" },
  { name: "Modern CSS3", category: "styling", level: 97, exp: "Flexbox, CSS Grid, Custom Properties & Transitions", icon: "🎨" },
  { name: "Tailwind CSS", category: "styling", level: 98, exp: "Atomic Tokens, Custom Themes & Responsive Variants", icon: "💨" },

  // Supabase & Data
  { name: "Supabase Realtime DB", category: "supabase", level: 94, exp: "Postgres Client, Realtime Subscriptions & RLS", icon: "⚡" },
  { name: "Supabase Auth & Storage", category: "supabase", level: 93, exp: "User Sessions, OAuth & Protected Client Routes", icon: "🔒" },
  { name: "RESTful APIs & Fetch", category: "supabase", level: 96, exp: "Asynchronous Data Fetching & Error Handling", icon: "🔌" },
  { name: "PostgreSQL Queries", category: "supabase", level: 90, exp: "Relational Tables, Supabase Studio & Filters", icon: "🐘" },

  // Motion & UI Systems
  { name: "Framer Motion", category: "motion", level: 96, exp: "Spring Physics, Layout FX & Micro-Interactions", icon: "✨" },
  { name: "Shadcn UI & Radix", category: "motion", level: 95, exp: "Headless Accessible Primitives & Modals", icon: "🧩" },
  { name: "Responsive & Mobile UX", category: "motion", level: 98, exp: "Pixel-Perfect Layouts & Touch Optimization", icon: "📱" },

  // Performance & Tools
  { name: "Core Web Vitals", category: "tools", level: 97, exp: "Sub-Second FCP, INP & 99+ Lighthouse Optimization", icon: "🚀" },
  { name: "Git & GitHub CI/CD", category: "tools", level: 95, exp: "Version Control, Pull Requests & Trunk Workflow", icon: "🌿" },
  { name: "Vercel Edge Platform", category: "tools", level: 96, exp: "Instant Global CDN & Edge Deployment", icon: "▲" },
];

const TIMELINE_EVENTS = [
  {
    year: "Present",
    title: "MeetTheDev — Senior Frontend Engineering & UI Specialist",
    subtitle: "Lead Frontend Developer & Founder",
    description:
      "Spearheading the MeetTheDev frontend engineering vision. Crafting ultra-fast web experiences with JavaScript (ES6+), React 18, Next.js 14, semantic HTML5, modern CSS3 & Tailwind, Supabase realtime database integrations, and zero-commission direct WhatsApp ordering platforms for local dining & retail businesses.",
    badge: "Active",
    links: [
      { label: "Royal Spice Live Demo", href: "https://demo-restaurant-website-theta.vercel.app/" },
      { label: "HCM Lite Work Live", href: "https://hcm-lite-work-alpha.vercel.app/" },
    ],
  },
  {
    year: "2024",
    title: "Production Frontend Deployments on Vercel Edge",
    subtitle: "HCM Lite Work SaaS & Medicure Pharmacy",
    description:
      "Engineered and launched two production frontend applications: HCM Lite Work (Human Capital Management SaaS with instant workforce filtering, responsive data tables, and dynamic payroll calculation widgets) and Medicure Pharmacy (accessible digital healthcare e-commerce with reactive cart state management and mobile-optimized checkout).",
    badge: "Milestone",
    links: [
      { label: "HCM Lite Work Live", href: "https://hcm-lite-work-alpha.vercel.app/" },
      { label: "Medicure Pharmacy Live", href: "https://medicure-pharmacy-two.vercel.app/" },
    ],
  },
  {
    year: "2023",
    title: "Frontend Foundations & Modern Web Standards",
    subtitle: "Pure JavaScript (ES6+), React & CSS Architecture",
    description:
      "Deeply mastered core JavaScript algorithms, DOM manipulation, component hierarchies, state management machines, modern CSS Grid/Flexbox, WCAG 2.1 accessibility, and fluid Framer Motion animations.",
    badge: "Foundation",
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [certOpen, setCertOpen] = useState(false);
  const [padOpen, setPadOpen] = useState(false);

  const filterTabs = [
    { id: "all", label: "All Skills", count: SKILLS_DATA.length },
    { id: "frontend", label: "JavaScript & React", count: SKILLS_DATA.filter((s) => s.category === "frontend").length },
    { id: "styling", label: "HTML5 & CSS3", count: SKILLS_DATA.filter((s) => s.category === "styling").length },
    { id: "supabase", label: "Supabase & Data", count: SKILLS_DATA.filter((s) => s.category === "supabase").length },
    { id: "motion", label: "Motion & UI", count: SKILLS_DATA.filter((s) => s.category === "motion").length },
    { id: "tools", label: "Performance & Tools", count: SKILLS_DATA.filter((s) => s.category === "tools").length },
  ];

  const filteredSkills =
    activeTab === "all"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === activeTab);

  return (
    <PageTransition>
      <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-3">
            <UserCheck className="w-3.5 h-3.5 mr-1" /> Frontend Profile
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Ibrahim Aftab
          </h1>
          <p className="text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-400 dark:from-white dark:via-zinc-200 dark:to-zinc-400 mt-2">
            Senior Frontend Engineer &amp; UI Specialist
          </p>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-4 leading-relaxed">
            I craft modern, accessible, sub-second web applications.
            Specializing in pure JavaScript (ES6+), React 18, Next.js 14, semantic HTML5, modern CSS3 &amp; Tailwind, and reactive Supabase cloud integrations,
            my mission is to build engaging digital products that combine aesthetic beauty with peak frontend performance and clean code.
          </p>
        </div>

        {/* BENTO GRID: STORY & CODE VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          {/* Main Story Card */}
          <Card className="md:col-span-8 p-5 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    The MeetTheDev Frontend Doctrine
                  </h3>
                  <span className="text-xs text-zinc-500 font-mono">
                    Pixel Precision • Sub-Second Speed • Frictionless Reactive UI
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  As a Senior Frontend Engineer &amp; UI Specialist, I believe exceptional web applications are born at the intersection of aesthetic refinement and technical speed. What distinguishes my work
                  is the relentless commitment to eliminating client-side friction: from semantic HTML5 foundations and accessible modern CSS3/Tailwind architectures to instant React state updates and sub-second Core Web Vitals.
                </p>
                <p>
                  Through **MeetTheDev**, I craft responsive web applications like{" "}
                  <strong className="text-zinc-900 dark:text-white">Royal Spice Restaurant</strong> (zero-commission ordering),
                  enterprise dashboards like{" "}
                  <strong className="text-zinc-900 dark:text-white">HCM Lite Work</strong>, and
                  e-commerce solutions like{" "}
                  <strong className="text-zinc-900 dark:text-white">Medicure Pharmacy</strong>,
                  leveraging React 18, Next.js 14 App Router, Supabase real-time cloud data, and fluid Framer Motion micro-interactions.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-white/10 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                <CheckCircle className="w-4 h-4 text-zinc-900 dark:text-white" />
                Pure JavaScript &amp; React 18
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                <CheckCircle className="w-4 h-4 text-zinc-900 dark:text-white" />
                Semantic HTML5 &amp; Modern CSS3
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                <CheckCircle className="w-4 h-4 text-zinc-900 dark:text-white" />
                Supabase Realtime &amp; Auth
              </div>
            </div>
          </Card>

          {/* Logo Brand Card in Luxury Monochrome */}
          <Card className="md:col-span-4 p-8 flex flex-col items-center text-center justify-center bg-gradient-to-b from-[#14151B] to-[#0A0B0E]">
            <div className="p-4 rounded-3xl bg-white/5 border border-white/10 shadow-glow-white mb-4">
              <MeetTheDevLogo size={70} showText={false} />
            </div>
            <h4 className="text-lg font-bold text-white">
              MeetTheDev Identity
            </h4>
            <p className="text-xs text-zinc-400 mt-2 max-w-xs leading-relaxed font-mono">
              Geometric &apos;D&apos; integrated with a diagonal cursor arrow and closing code bracket `]`.
              Symbolizing precision, interaction, and modern developer artistry.
            </p>
            <div className="mt-5 w-full flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white shadow-sm" title="Titanium White" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 shadow-sm" title="Platinum" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-500 shadow-sm" title="Graphite" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 shadow-sm" title="Obsidian" />
            </div>
          </Card>
        </div>

        {/* SKILLS SECTION WITH INTERACTIVE TABS */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <Badge variant="outline" className="mb-2">
                <Cpu className="w-3.5 h-3.5 mr-1" /> Technical Mastery
              </Badge>
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Engineering Stack & Proficiencies
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                Filter by domain to explore proficiencies and implementation scopes.
              </p>
            </div>

            {/* Filter Tabs */}
            <Tabs tabs={filterTabs} activeTab={activeTab} onChange={setActiveTab} />
          </div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-4 hover:border-black/40 dark:hover:border-white/30 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{skill.icon}</span>
                      <h4 className="font-bold text-sm text-zinc-900 dark:text-white">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-900 dark:text-white">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full bg-zinc-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden mb-2.5">
                    <motion.div
                      className="h-full bg-black dark:bg-white rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>

                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 flex items-center justify-between font-mono">
                    <span>{skill.exp}</span>
                    <span className="capitalize text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                      {skill.category}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* TIMELINE */}
        <section className="mb-24">
          <div className="max-w-3xl mb-12">
            <Badge variant="outline" className="mb-2">
              <GitBranch className="w-3.5 h-3.5 mr-1" /> Career Milestones
            </Badge>
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Engineering Timeline
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              A track record of continuous learning, architectural design, and production deployments.
            </p>
          </div>

          <div className="relative border-l-2 border-zinc-300 dark:border-white/20 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
            {TIMELINE_EVENTS.map((event, index) => (
              <div key={index} className="relative group">
                {/* Glowing Monochrome Marker */}
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-black border-4 border-black dark:border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                <div className="p-6 rounded-2xl bg-white/80 dark:bg-[#0E0F14]/80 border border-zinc-200 dark:border-white/10 backdrop-blur-md hover:border-black/40 dark:hover:border-white/30 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 text-xs font-mono font-bold">
                      {event.year}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 font-medium">
                      {event.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {event.title}
                  </h3>
                  <h4 className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-3">
                    {event.subtitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {event.links && (
                    <div className="flex flex-wrap gap-3 pt-3 border-t border-zinc-100 dark:border-white/10">
                      {event.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 dark:text-white hover:underline"
                        >
                          <span>{link.label}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECT'S SEAL & SIGNED QUALITY GUARANTEE */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <Badge variant="outline" className="mb-2">
              <Award className="w-3.5 h-3.5 mr-1" /> Frontend Authenticity
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Developer Signature &amp; Frontend Guarantee
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-mono">
              Every user interface engineered by Ibrahim Aftab is sealed with 100/100 Core Web Vitals audits, semantic HTML5 markup, and responsive elegance.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <DeveloperSignature
              variant="hero"
              onOpenCertificate={() => setCertOpen(true)}
              onOpenPad={() => setPadOpen(true)}
            />
          </div>
        </section>

        {/* GITHUB & VERCEL DIRECT ACCESS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  @ibrahimfazil-511
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                Open-Source & Repositories
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                Explore the public repositories, modular architectures, and components that power MeetTheDev.
              </p>
            </div>
            <a
              href="https://github.com/ibrahimfazil-511"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-black dark:hover:bg-zinc-200 text-xs font-semibold transition-colors shadow-sm"
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>

          <Card className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10">
                  <Triangle className="w-6 h-6 fill-current" />
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  Production Edge Hub
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                Vercel Deployments Hub
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                Inspect every active production deployment, edge compute performance, and preview branches directly on Vercel.
              </p>
            </div>
            <a
              href="https://vercel.com/ibrahimfazil511-9992s-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-black dark:hover:bg-zinc-200 text-xs font-semibold transition-colors shadow-sm"
            >
              <span>Explore Vercel Projects Hub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>
        </section>

        {/* Developer Signature & Certificate Modals */}
        <SignatureCertificateModal
          isOpen={certOpen}
          onClose={() => setCertOpen(false)}
        />
        <InteractiveSignaturePad
          isOpen={padOpen}
          onClose={() => setPadOpen(false)}
        />
      </div>
    </PageTransition>
  );
}
