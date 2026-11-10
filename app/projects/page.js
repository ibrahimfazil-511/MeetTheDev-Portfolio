"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  Github,
  Monitor,
  Globe,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  Info,
  Triangle,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { Dialog } from "@/components/ui/Dialog";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";
import { PageTransition } from "@/components/PageTransition";

const PROJECTS_DATA = [
  {
    id: "royal-spice-restaurant",
    title: "Royal Spice Restaurant",
    subtitle: "Zero-Commission Direct WhatsApp Ordering System",
    category: "restaurant",
    categoryLabel: "Restaurant & Retail Platform",
    description:
      "A high-conversion turnkey web application built for restaurants to bypass 25-30% food aggregator platform commissions. Features an interactive categorized digital food menu, real-time cart state management, and direct formatted WhatsApp order dispatch.",
    liveUrl: "https://demo-restaurant-website-theta.vercel.app/",
    githubUrl: "https://github.com/ibrahimfazil-511",
    primaryScreenshot:
      "https://api.microlink.io/?url=https%3A%2F%2Fdemo-restaurant-website-theta.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440&viewport.height=900&waitForTimeout=3000",
    fallbackScreenshot:
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fdemo-restaurant-website-theta.vercel.app%2F?w=1280&h=800",
    tags: [
      "JavaScript (ES6+)",
      "React 18",
      "Next.js 14",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Zero Commission",
      "Direct WhatsApp",
      "Vercel Edge",
    ],
    metrics: [
      { label: "Commission", value: "0% Fees" },
      { label: "Order Routing", value: "WhatsApp API" },
      { label: "Lighthouse", value: "99/100 Speed" },
    ],
    architecture: {
      problem:
        "Local restaurants surrender 25% to 30% of every order to third-party delivery aggregators, encounter high customer drop-off on bloated native apps, and lose direct customer relationships.",
      solution:
        "Engineered a lightning-fast, zero-commission web platform that converts mobile visitors into direct paying customers. Features a mobile-first digital food catalog, instant cart drawer with add-ons, and structured receipt generation sent straight to the restaurant's WhatsApp phone number (0334 2850819).",
      techStack: [
        "Next.js 14 App Router for sub-second page transitions & mobile SEO",
        "React 18 state machines for zero-latency item customizations & quantity increments",
        "Semantic HTML5 & modern CSS3/Tailwind responsive styling for smartphones & desktop",
        "Automated WhatsApp URL Encoder generating complete order delivery receipts",
        "Vercel Edge Network for instant worldwide caching and 99.9% uptime",
      ],
      keyFeatures: [
        "Categorized digital food menu with appetizing visual cards & price tags",
        "Real-time slide-out cart drawer with dynamic subtotal recalculation",
        "One-click direct WhatsApp checkout routing full order breakdown to staff",
        "100% direct customer data ownership with zero third-party commission cuts",
      ],
    },
  },
  {
    id: "hcm-lite",
    title: "HCM Lite Work",
    subtitle: "Enterprise Human Capital Management UI Platform",
    category: "saas",
    categoryLabel: "Frontend SaaS & Dashboards",
    description:
      "A high-performance workforce management frontend application engineered with dynamic React components, instant live employee filtering, interactive payroll calculation widgets, Supabase-backed authentication, and sub-second Next.js architecture.",
    liveUrl: "https://hcm-lite-work-alpha.vercel.app/",
    githubUrl: "https://github.com/ibrahimfazil-511",
    primaryScreenshot:
      "https://api.microlink.io/?url=https%3A%2F%2Fhcm-lite-work-alpha.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440&viewport.height=900&waitForTimeout=3000",
    fallbackScreenshot:
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fhcm-lite-work-alpha.vercel.app%2F?w=1280&h=800",
    tags: [
      "JavaScript",
      "React 18",
      "Next.js 14",
      "Supabase",
      "Tailwind CSS",
      "Semantic HTML5",
      "Responsive UI",
      "Vercel Edge",
    ],
    metrics: [
      { label: "Deployment", value: "Vercel Edge" },
      { label: "Frontend", value: "React & Next.js" },
      { label: "Backend & DB", value: "Supabase Realtime" },
    ],
    architecture: {
      problem:
        "Traditional enterprise HR platforms are sluggish, unintuitive, and plagued with high client latency and clumsy multi-step workflows.",
      solution:
        "Engineered HCM Lite Work as a modern, responsive frontend application. Leveraged Next.js App Router for rapid page loads, Supabase client integration for real-time employee data and auth, client-side payroll calculations, and an accessible Shadcn UI interface.",
      techStack: [
        "Next.js 14 App Router & React 18 client state machines for instant UI interactions",
        "Supabase client SDK for realtime database queries and user auth session management",
        "Semantic HTML5 structure & Tailwind CSS atomic design token architecture",
        "Framer Motion for contextual status micro-interactions",
        "Vercel Cloud for zero-configuration continuous deployments",
      ],
      keyFeatures: [
        "End-to-end workforce directory with multi-parameter live search",
        "Supabase-backed authentication flows and protected client routes",
        "Automated payroll tax estimation modules & leave request approvals",
        "Responsive macOS-styled desktop dashboard layout",
      ],
    },
  },
  {
    id: "medicure-pharmacy",
    title: "Medicure Pharmacy",
    subtitle: "Digital Healthcare & Prescription E-Commerce UI",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Healthcare UI",
    description:
      "A patient-centric pharmaceutical web frontend combining dynamic medicine cataloging, prescription verification UI workflows, interactive client-side cart recalculations, and accessible modern CSS styling.",
    liveUrl: "https://medicure-pharmacy-two.vercel.app/",
    githubUrl: "https://github.com/ibrahimfazil-511",
    primaryScreenshot:
      "https://api.microlink.io/?url=https%3A%2F%2Fmedicure-pharmacy-two.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440&viewport.height=900&waitForTimeout=3000",
    fallbackScreenshot:
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fmedicure-pharmacy-two.vercel.app%2F?w=1280&h=800",
    tags: [
      "JavaScript (ES6+)",
      "Next.js 14",
      "React 18",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Dynamic Cart",
      "Accessible UI",
      "Vercel Edge",
    ],
    metrics: [
      { label: "Deployment", value: "Vercel Edge" },
      { label: "Stack", value: "React & Next.js UI" },
      { label: "Lighthouse", value: "99/100 Speed" },
    ],
    architecture: {
      problem:
        "Online healthcare platforms struggle with confusing medicine navigation, poor mobile ergonomics, and cart checkout abandonment caused by slow UI updates.",
      solution:
        "Architected Medicure Pharmacy as an accessible, high-performance web frontend. Implemented instant client-side catalog filtering, optimistic cart state machines, intuitive prescription upload UI handlers, and healthcare-grade accessible interfaces.",
      techStack: [
        "Next.js 14 App Router & React 18 for seamless client-side page transitions",
        "Optimistic React state machines for predictable instantaneous cart actions",
        "Semantic HTML5 & modern CSS3/Tailwind design tokens for high readability",
        "Next.js Image components for optimized medicine imagery",
        "Vercel Edge Network for rapid localized content delivery",
      ],
      keyFeatures: [
        "Dynamic cart drawer with instant subtotal, tax recalculation & quantity controls",
        "Prescription verification pipeline and tracking status modal",
        "Categorized medicine shelf with interactive dosage details & search queries",
        "Mobile & desktop responsive checkout funnel with accessible form validation",
      ],
    },
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProjectForModal, setSelectedProjectForModal] = useState(null);

  const categories = [
    { id: "all", label: "All Deployments", count: PROJECTS_DATA.length },
    {
      id: "restaurant",
      label: "Restaurant & Retail UI",
      count: PROJECTS_DATA.filter((p) => p.category === "restaurant").length,
    },
    {
      id: "saas",
      label: "Frontend SaaS & Dashboards",
      count: PROJECTS_DATA.filter((p) => p.category === "saas").length,
    },
    {
      id: "ecommerce",
      label: "E-Commerce & Healthcare",
      count: PROJECTS_DATA.filter((p) => p.category === "ecommerce").length,
    },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <PageTransition>
      <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-12">
          <Badge variant="outline" className="mb-3">
            <Cpu className="w-3.5 h-3.5 mr-1" /> Production Frontend Deployments
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Frontend Web Applications
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
            Real production frontend applications built with JavaScript (ES6+), React 18, Next.js 14, Semantic HTML5, Modern CSS3/Tailwind, and Supabase.
            Explore high-definition 1440x900 desktop snapshots, test them directly with the in-place Live Iframe toggle, or review detailed frontend architecture breakdowns.
          </p>
        </div>

        {/* SEARCH & CATEGORY FILTER BAR */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <Tabs
            tabs={categories}
            activeTab={activeCategory}
            onChange={setActiveCategory}
          />

          {/* Live Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or stack..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-[#0E0F14] text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-black dark:hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* PROJECTS SHOWCASE LIST */}
        <div className="space-y-16 mb-24">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.25 }}
              >
                <Card className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Details & Tech */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                      <div>
                        {/* Header Badges */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 text-xs font-mono font-bold">
                            {project.categoryLabel}
                          </span>
                          <span className="text-xs text-zinc-900 dark:text-white font-mono font-medium flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse" />
                            Live on Vercel
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mb-1">
                          {project.title}
                        </h2>
                        <h4 className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-4">
                          {project.subtitle}
                        </h4>

                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Metrics Pills */}
                        <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-zinc-100/80 dark:bg-white/5 border border-zinc-200 dark:border-white/10 mb-6 text-center">
                          {project.metrics.map((m, idx) => (
                            <div key={idx}>
                              <span className="text-[10px] font-mono text-zinc-400 block">
                                {m.label}
                              </span>
                              <span className="text-xs font-bold text-zinc-900 dark:text-white font-mono">
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[11px] font-mono text-zinc-700 dark:text-zinc-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 border-t border-zinc-100 dark:border-white/10 flex flex-wrap items-center gap-2.5 sm:gap-3">
                        <Button
                          size="sm"
                          variant="primary"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full xs:w-auto"
                        >
                          <span>Live Preview (Vercel)</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-300 dark:border-white/15 hover:border-black dark:hover:border-white text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors"
                          title="View GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub Repo</span>
                        </a>

                        <button
                          onClick={() => setSelectedProjectForModal(project)}
                          className="flex-1 xs:flex-initial px-3.5 py-2 rounded-xl border border-zinc-300 dark:border-white/10 hover:border-zinc-500 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Info className="w-3.5 h-3.5" />
                          <span>Architecture</span>
                        </button>
                      </div>
                    </div>

                    {/* Right Column: High-Fidelity 1440x900 Mockup & Iframe Switch */}
                    <div className="lg:col-span-7">
                      <ProjectThumbnail
                        title={project.title}
                        liveUrl={project.liveUrl}
                        primaryScreenshot={project.primaryScreenshot}
                        fallbackScreenshot={project.fallbackScreenshot}
                        badgeText="Desktop 1440x900 Real View"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 p-8 rounded-2xl border border-dashed border-zinc-300 dark:border-white/10">
              <p className="text-zinc-500 text-sm font-mono">
                No projects matched your search criteria. Try clearing the search query or selecting &quot;All Flagships&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* VERCEL PRODUCTION HUB DIRECT PORTAL CARD */}
        <section className="mb-16">
          <Card className="p-8 sm:p-10 bg-gradient-to-b from-[#14151B] to-[#0A0B0E] border-white/15 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-zinc-300">
                  <Triangle className="w-3.5 h-3.5 fill-current" />
                  <span>Vercel Global Edge Hub</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Explore Ibrahim&apos;s Full Vercel Hub
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Discover all active web applications, ongoing UI experiments, edge middleware implementations,
                  and sub-second production deployments directly on Vercel.
                </p>
              </div>

              <a
                href="https://vercel.com/ibrahimfazil511-9992s-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-zinc-200 shadow-xl transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <span>Open Vercel Projects Hub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Card>
        </section>

        {/* ARCHITECTURE BREAKDOWN MODAL */}
        <Dialog
          isOpen={!!selectedProjectForModal}
          onClose={() => setSelectedProjectForModal(null)}
          title={selectedProjectForModal?.title || "Architecture"}
          subtitle={selectedProjectForModal?.subtitle}
        >
          {selectedProjectForModal && (
            <div className="space-y-6 text-sm">
              {/* Problem Statement */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-2">
                  The Problem Solved
                </h4>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {selectedProjectForModal.architecture.problem}
                </p>
              </div>

              {/* Engineering Solution */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-2">
                  Engineering Architecture
                </h4>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {selectedProjectForModal.architecture.solution}
                </p>
              </div>

              {/* Technical Stack Highlights */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-2">
                  Technical Stack Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProjectForModal.architecture.techStack.map((tech, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300 font-mono"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-zinc-900 dark:text-white flex-shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-2">
                  Core Functional Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProjectForModal.architecture.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 font-mono"
                    >
                      • {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-zinc-200 dark:border-white/10 flex justify-end gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSelectedProjectForModal(null)}
                >
                  Close
                </Button>
                <Button
                  size="sm"
                  variant="primary"
                  href={selectedProjectForModal.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          )}
        </Dialog>
      </div>
    </PageTransition>
  );
}
