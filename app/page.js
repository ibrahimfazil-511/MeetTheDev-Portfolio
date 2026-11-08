"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Zap,
  Github,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Terminal as TerminalIcon,
  Globe,
  Sliders,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";
import { Spotlight } from "@/components/ui/Spotlight";
import { PageTransition } from "@/components/PageTransition";
import { Terminal } from "@/components/ui/Terminal";
import { Marquee } from "@/components/ui/Marquee";
import { DeveloperSignature } from "@/components/ui/DeveloperSignature";
import { SignatureCertificateModal } from "@/components/ui/SignatureCertificateModal";
import { InteractiveSignaturePad } from "@/components/ui/InteractiveSignaturePad";

const TECH_PILLS = [
  "Full-Stack Next.js 14",
  "React 18 & Server Actions",
  "Node.js & Express",
  "PostgreSQL & Prisma ORM",
  "MongoDB & Redis",
  "RESTful APIs & WebSockets",
  "Tailwind CSS & Shadcn UI",
  "Framer Motion Physics",
  "Docker & Vercel Edge",
];

const METRICS = [
  { value: "100%", label: "Edge Production Uptime", desc: "Vercel Global Anycast & Cloud" },
  { value: "< 0.6s", label: "Sub-Second FCP", desc: "Optimized Core Web Vitals" },
  { value: "99.9%", label: "API SLA & Reliability", desc: "Predictable, resilient endpoints" },
  { value: "1440x900", label: "Real Desktop Views", desc: "Pixel-perfect fluid responsiveness" },
];

const MARQUEE_ITEMS = [
  "Next.js 14 App Router & Server Actions",
  "Node.js & Express RESTful APIs",
  "PostgreSQL & Prisma ORM Schemas",
  "Sub-Second Core Web Vitals",
  "MongoDB & Redis In-Memory Caching",
  "Fluid Framer Motion Animations",
  "Shadcn UI Design Systems",
  "Docker Containerization & CI/CD",
  "Vercel Edge Global Compute",
  "End-to-End Scalable SaaS Architecture",
];

export default function HomePage() {
  const [certOpen, setCertOpen] = useState(false);
  const [padOpen, setPadOpen] = useState(false);

  return (
    <PageTransition>
      <div className="relative overflow-hidden">
        {/* Ambient Studio Monochrome Spotlights */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#FFFFFF" />
        <Spotlight className="top-1/2 right-0 md:right-40" fill="#E4E4E7" />

        {/* HERO SECTION */}
        <section className="relative pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Senior Status Pill */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-300 dark:border-white/15 shadow-sm backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse" />
                  <span className="text-xs sm:text-sm font-mono font-semibold tracking-wide text-zinc-900 dark:text-zinc-200">
                    Senior Full Stack Engineer & Web Architect
                  </span>
                </div>
              </motion.div>

              {/* Main Headline in Luxury Monochrome Titanium */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-zinc-950 dark:text-white break-words"
              >
                Engineering Scalable, High-Impact Full-Stack Systems for{" "}
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-400 dark:from-white dark:via-zinc-200 dark:to-zinc-500">
                  MeetTheDev
                </span>
                .
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-8 px-1 sm:px-0"
              >
                Hi, I&apos;m <strong className="text-zinc-900 dark:text-white font-semibold">Ibrahim Aftab</strong>.
                I specialize in end-to-end web engineering: high-performance React &amp; Next.js 14 architectures,
                scalable Node.js / REST APIs, relational &amp; document databases (PostgreSQL, MongoDB, Prisma), custom Shadcn UI systems, and fluid Framer Motion micro-interactions.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-12"
              >
                <Button
                  size="lg"
                  variant="primary"
                  href="/projects"
                  className="w-full sm:w-auto"
                >
                  <span>Explore Full-Stack Deployments</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  href="/services"
                  className="w-full sm:w-auto"
                >
                  <span>Services & Timeline Estimator</span>
                </Button>
              </motion.div>

              {/* Floating Tech Stack Pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-2xl px-1 sm:px-0"
              >
                {TECH_PILLS.map((pill) => (
                  <span
                    key={pill}
                    className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 backdrop-blur-sm hover:border-black dark:hover:border-white/30 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {pill}
                  </span>
                ))}
              </motion.div>

              {/* Developer Signature & Authentic Quality Seal Showcase */}
              <motion.div
                id="signature"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full max-w-2xl mx-auto mt-10 text-left scroll-mt-24"
              >
                <DeveloperSignature
                  variant="hero"
                  onOpenCertificate={() => setCertOpen(true)}
                  onOpenPad={() => setPadOpen(true)}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* INFINITE SMOOTH MARQUEE TICKER */}
        <section className="border-y border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/70 dark:bg-[#08090C]/80">
          <Marquee items={MARQUEE_ITEMS} speed="normal" />
        </section>

        {/* SENIOR DEV INTERACTIVE TERMINAL SHOWCASE */}
        <section className="py-16 md:py-20 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <Badge variant="outline" className="mb-2">
                <TerminalIcon className="w-3.5 h-3.5 mr-1" /> Full-Stack Engineering Session
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Inspect End-to-End Architecture
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                Interact with the live developer terminal below to query full-stack specs, backend/frontend architectural choices, and system audits.
              </p>
            </div>

            <Terminal />
          </div>
        </section>

        {/* SENIOR PRODUCTION METRICS STRIP */}
        <section className="py-8 sm:py-10 border-y border-zinc-200/80 dark:border-white/[0.08] bg-white/40 dark:bg-[#0A0B0F]/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              {METRICS.map((item, idx) => (
                <div key={idx} className="space-y-1 p-2 sm:p-0">
                  <div className="text-xl sm:text-3xl font-black font-mono text-zinc-900 dark:text-white">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                    {item.label}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FLAGSHIP WORK PREVIEW SECTION */}
        <section className="py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <Badge variant="outline" className="mb-3">
                  <Cpu className="w-3.5 h-3.5 mr-1" /> Production Deployments
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                  Flagship SaaS & Applications
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
                  Live Vercel applications captured in high-definition 1440x900 desktop resolution with in-place interactive iframe preview.
                </p>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-900 dark:text-white hover:underline"
              >
                <span>View Full Projects Showcase</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Flagship Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Project 1: HCM Lite Work */}
              <Card className="p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 text-xs font-mono font-semibold">
                      Full-Stack SaaS • Workforce Operations
                    </span>
                    <span className="text-xs text-zinc-900 dark:text-white font-mono font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      Live on Vercel
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                    HCM Lite Work Platform
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-5 leading-relaxed">
                    A comprehensive, high-throughput Human Capital Management SaaS engineered with full-stack capabilities:
                    automated payroll calculations, role-based auth, dynamic workforce data mutations, real-time analytics, and sub-second Next.js architecture.
                  </p>

                  {/* Browser Mockup with Real Desktop Screenshot + Fallback */}
                  <div className="mb-5">
                    <ProjectThumbnail
                      title="HCM Lite Work"
                      liveUrl="https://hcm-lite-work-alpha.vercel.app/"
                      primaryScreenshot="https://api.microlink.io/?url=https%3A%2F%2Fhcm-lite-work-alpha.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440&viewport.height=900&waitForTimeout=3000"
                      fallbackScreenshot="https://s0.wp.com/mshots/v1/https%3A%2F%2Fhcm-lite-work-alpha.vercel.app%2F?w=1280&h=800"
                    />
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["Full Stack", "Next.js 14", "React 18", "Node APIs", "PostgreSQL", "Tailwind CSS", "Enterprise Auth"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[11px] font-mono text-zinc-700 dark:text-zinc-300"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-white/10">
                  <a
                    href="https://hcm-lite-work-alpha.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-900 dark:text-white hover:underline transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/ibrahimfazil-511"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </Card>

              {/* Project 2: Medicure Pharmacy */}
              <Card className="p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 text-xs font-mono font-semibold">
                      Full-Stack Healthcare • E-Commerce
                    </span>
                    <span className="text-xs text-zinc-900 dark:text-white font-mono font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      Live on Vercel
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                    Medicure Pharmacy
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-5 leading-relaxed">
                    A modern patient-centric pharmaceutical platform combining dynamic medicine cataloging,
                    prescription verification workflows, server-side cart calculations, and secure digital health order pipelines.
                  </p>

                  {/* Browser Mockup with Real Desktop Screenshot + Fallback */}
                  <div className="mb-5">
                    <ProjectThumbnail
                      title="Medicure Pharmacy"
                      liveUrl="https://medicure-pharmacy-two.vercel.app/"
                      primaryScreenshot="https://api.microlink.io/?url=https%3A%2F%2Fmedicure-pharmacy-two.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440&viewport.height=900&waitForTimeout=3000"
                      fallbackScreenshot="https://s0.wp.com/mshots/v1/https%3A%2F%2Fmedicure-pharmacy-two.vercel.app%2F?w=1280&h=800"
                    />
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["Full Stack", "Next.js 14", "React 18", "REST APIs", "Tailwind CSS", "Dynamic Cart", "Healthcare API"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[11px] font-mono text-zinc-700 dark:text-zinc-300"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-white/10">
                  <a
                    href="https://medicure-pharmacy-two.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-900 dark:text-white hover:underline transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/ibrahimfazil-511"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* SENIOR ENGINEERING PILLARS */}
        <section className="py-16 md:py-24 bg-zinc-50/50 dark:bg-[#090A0E]/60 border-t border-zinc-200/80 dark:border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Badge variant="outline" className="mb-3">
                <Layers className="w-3.5 h-3.5 mr-1" /> Core Architectural Tenets
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Architectural Principles
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
                Every application is engineered with strict attention to sub-second latency, modular API design, normalized database schemas, and friction-free user journeys.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-white/10 flex items-center justify-center text-zinc-900 dark:text-white mb-5 border border-zinc-200 dark:border-white/10 shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  Full-Stack Sub-Second Speed
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Sub-second loading times with Next.js 14 App Router optimizations, edge caching, server actions, and optimized database queries.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-white/10 flex items-center justify-center text-zinc-900 dark:text-white mb-5 border border-zinc-200 dark:border-white/10 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  Fluid Micro-Interactions &amp; UI
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Tailored Framer Motion layout transitions, spring physics, and accessible Shadcn UI primitives that create seamless user delight.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-white/10 flex items-center justify-center text-zinc-900 dark:text-white mb-5 border border-zinc-200 dark:border-white/10 shadow-sm">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  Resilient APIs &amp; Robust Schemas
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Scalable Node.js / Next.js RESTful endpoints, relational PostgreSQL / Prisma models, and secure role-based authentication protocols.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* BOTTOM HERO CTA BANNER */}
        <section className="py-16 sm:py-20 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-14 overflow-hidden border border-zinc-300 dark:border-white/15 bg-gradient-to-b from-[#14151B] to-[#08090C] text-center shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono font-semibold mb-4 border border-white/20">
                  Ready to Architect Your Next Production Platform?
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
                  Let&apos;s Transform Your Vision Into a Production Reality.
                </h2>
                <p className="text-xs sm:text-base text-zinc-300 mb-8 leading-relaxed px-1 sm:px-0">
                  Whether you need a high-converting web application, a full-stack SaaS platform, scalable REST APIs, or database architecture, I&apos;m ready to engineer it.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    variant="primary"
                    href="/contact"
                    className="w-full sm:w-auto"
                  >
                    <span>Start a Project With Ibrahim</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    href="/about"
                    className="w-full sm:w-auto"
                  >
                    <span>Read Architect Story</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
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
