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
  // Frontend
  { name: "React 18", category: "frontend", level: 96, exp: "Concurrent Features / SSR / Hooks", icon: "⚛️" },
  { name: "Next.js 14 (App Router)", category: "frontend", level: 95, exp: "Server Components & Server Actions", icon: "▲" },
  { name: "JavaScript (ES6+)", category: "frontend", level: 98, exp: "Pure Core Modern Language", icon: "⚡" },
  { name: "Tailwind CSS", category: "frontend", level: 96, exp: "Design Systems & Atomic Tokens", icon: "🎨" },
  { name: "Shadcn UI", category: "frontend", level: 94, exp: "Radix Primitives & Accessible ARIA", icon: "🧩" },
  { name: "Semantic HTML5 / CSS3", category: "frontend", level: 97, exp: "WCAG Accessibility & Modern Layouts", icon: "🌐" },

  // Backend
  { name: "Node.js & Express", category: "backend", level: 94, exp: "Asynchronous APIs & Middleware", icon: "🟢" },
  { name: "Next.js Route Handlers", category: "backend", level: 95, exp: "Edge & Serverless API Endpoints", icon: "▲" },
  { name: "RESTful Architecture", category: "backend", level: 96, exp: "Scalable CRUD & API Contracts", icon: "🔌" },
  { name: "WebSockets & Events", category: "backend", level: 90, exp: "Real-Time Bidirectional Streams", icon: "📡" },
  { name: "JWT & OAuth Security", category: "backend", level: 93, exp: "RBAC & Protected Route Guards", icon: "🔒" },

  // Database
  { name: "PostgreSQL", category: "database", level: 92, exp: "Relational Schemas & Indexing", icon: "🐘" },
  { name: "Prisma ORM", category: "database", level: 94, exp: "Type-Safe Migrations & Relations", icon: "💎" },
  { name: "MongoDB & Mongoose", category: "database", level: 91, exp: "Document Stores & Aggregations", icon: "🍃" },
  { name: "Redis Caching", category: "database", level: 89, exp: "In-Memory Store & Rate Limiting", icon: "⚡" },

  // Cloud & DevOps
  { name: "Docker", category: "cloud", level: 88, exp: "Containerized Microservices", icon: "🐳" },
  { name: "Vercel Edge Platform", category: "cloud", level: 96, exp: "Anycast Deploy & Serverless Edge", icon: "▲" },
  { name: "Git & GitHub CI/CD", category: "cloud", level: 95, exp: "Trunk-Based / Release Pipelines", icon: "🌿" },
  { name: "Core Web Vitals", category: "cloud", level: 96, exp: "99+ Lighthouse & Speed Audits", icon: "🔍" },

  // Animations
  { name: "Framer Motion", category: "animations", level: 95, exp: "Layout FX & Spring Physics", icon: "✨" },
  { name: "Micro-Interactions", category: "animations", level: 92, exp: "Haptic Feel & Gestures", icon: "🪄" },
  { name: "Studio Lighting FX", category: "animations", level: 93, exp: "Dynamic Spotlights", icon: "🌌" },
];

const TIMELINE_EVENTS = [
  {
    year: "Present",
    title: "MeetTheDev — Senior Full Stack Engineering & Web Architecture",
    subtitle: "Principal Full Stack Architect & Founder",
    description:
      "Spearheading the MeetTheDev vision. Engineering high-throughput full-stack applications with Next.js 14, Node.js REST APIs, PostgreSQL, Prisma ORM, bespoke Shadcn UI components, and sub-second Core Web Vitals.",
    badge: "Active",
  },
  {
    year: "2024",
    title: "Flagship Full-Stack Deployments on Vercel Edge",
    subtitle: "HCM Lite Work SaaS & Medicure Pharmacy",
    description:
      "Engineered and launched two production applications: HCM Lite Work (Human Capital Management SaaS with live workforce filtering, database models, and automated payroll calculations) and Medicure Pharmacy (dynamic healthcare e-commerce with server-side inventory and prescription workflows).",
    badge: "Milestone",
    links: [
      { label: "HCM Lite Work Live", href: "https://hcm-lite-work-alpha.vercel.app/" },
      { label: "Medicure Pharmacy Live", href: "https://medicure-pharmacy-two.vercel.app/" },
    ],
  },
  {
    year: "2023",
    title: "Full-Stack Foundations & Distributed Systems",
    subtitle: "Advanced Web & Backend Engineering",
    description:
      "Mastered API design, relational schema normalization, Framer Motion animations, headless UI paradigms, state management, and edge compute performance.",
    badge: "Foundation",
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [certOpen, setCertOpen] = useState(false);
  const [padOpen, setPadOpen] = useState(false);

  const filterTabs = [
    { id: "all", label: "All Skills", count: SKILLS_DATA.length },
    { id: "frontend", label: "Frontend", count: SKILLS_DATA.filter((s) => s.category === "frontend").length },
    { id: "backend", label: "Backend & APIs", count: SKILLS_DATA.filter((s) => s.category === "backend").length },
    { id: "database", label: "Databases", count: SKILLS_DATA.filter((s) => s.category === "database").length },
    { id: "cloud", label: "DevOps & Cloud", count: SKILLS_DATA.filter((s) => s.category === "cloud").length },
    { id: "animations", label: "Motion", count: SKILLS_DATA.filter((s) => s.category === "animations").length },
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
            <UserCheck className="w-3.5 h-3.5 mr-1" /> Architect Profile
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Ibrahim Aftab
          </h1>
          <p className="text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-400 dark:from-white dark:via-zinc-200 dark:to-zinc-400 mt-2">
            Senior Full Stack Engineer &amp; Web Architect
          </p>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-4 leading-relaxed">
            I architect modern, resilient, end-to-end web applications.
            Spanning high-throughput backend APIs, database schema modeling (PostgreSQL, MongoDB, Prisma), and polished React/Next.js 14 interfaces,
            my mission is to deliver complete digital products that balance aesthetic refinement with scalable engineering rigor.
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
                    The MeetTheDev Architectural Doctrine
                  </h3>
                  <span className="text-xs text-zinc-500 font-mono">
                    End-to-End Resilience • Sub-Second Latency • Frictionless Interactions
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  As a Senior Full Stack Engineer &amp; Architect, I believe software is most effective when backend performance and frontend elegance work in unison. What distinguishes my work
                  is the relentless commitment to eliminating latency across the entire stack: from optimized SQL queries and edge caching to instantaneous client-side UI updates.
                </p>
                <p>
                  Through **MeetTheDev**, I construct enterprise platforms like{" "}
                  <strong className="text-zinc-900 dark:text-white">HCM Lite Work</strong> and
                  e-commerce solutions like{" "}
                  <strong className="text-zinc-900 dark:text-white">Medicure Pharmacy</strong>,
                  combining robust backend APIs with React Server Components, Next.js App Router, and Framer Motion micro-interactions.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-white/10 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                <CheckCircle className="w-4 h-4 text-zinc-900 dark:text-white" />
                End-to-End Scalability
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                <CheckCircle className="w-4 h-4 text-zinc-900 dark:text-white" />
                Modern Node &amp; Next.js 14
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                <CheckCircle className="w-4 h-4 text-zinc-900 dark:text-white" />
                Fluid Framer Motion Physics
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
              <Award className="w-3.5 h-3.5 mr-1" /> Architect Authenticity
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Developer Signature & Code Guarantee
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-mono">
              Every production system engineered by Ibrahim Aftab is sealed with rigorous Core Web Vitals audits and modular maintainability.
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
