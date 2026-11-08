"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle,
  Copy,
  Check,
  Linkedin,
  Github,
  Triangle,
  ExternalLink,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock,
  Calendar,
  AlertCircle,
  RefreshCw,
  Terminal,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageTransition } from "@/components/PageTransition";

const SUBJECT_OPTIONS = [
  "Senior Full Stack Role",
  "Architecture Consultation",
  "Contract / Project",
  "General Inquiry",
];

const BUDGET_RANGES = [
  "< $1,500",
  "$1,500 - $3,500",
  "$3,500 - $7,000",
  "$7,000+",
  "Equity / Retainer",
];

function ContactContent() {
  const searchParams = useSearchParams();

  const prefilledService = searchParams?.get("service") || "";
  const prefilledBudget = searchParams?.get("budget") || "";
  const prefilledTimeline = searchParams?.get("timeline") || "";

  const [subject, setSubject] = useState("Contract / Project");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState(prefilledBudget || "$1,500 - $3,500");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setSubject("Contract / Project");
      if (!message) {
        setMessage(
          `Hi Ibrahim, I'm interested in booking the "${prefilledService}" architecture package. Expected Timeline: ${prefilledTimeline}. Estimated Investment: ${prefilledBudget}. Let's schedule an engineering sync!`
        );
      }
    }
  }, [prefilledService, prefilledBudget, prefilledTimeline, message]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("ibrahimfazil511@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Please enter your name";
    if (!email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!message.trim() || message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate transmission
    setTimeout(async () => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Silver/Monochrome Confetti dynamically without SSR issues
      try {
        const confetti = (await import("canvas-confetti")).default;
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FFFFFF", "#E4E4E7", "#A1A1AA", "#71717A", "#27272A"],
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 1100);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* HEADER */}
      <div className="max-w-3xl mb-14">
        <Badge variant="outline" className="mb-3">
          <Terminal className="w-3.5 h-3.5 mr-1" /> Direct Communication Protocol
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Initiate Engineering Collaboration
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
          Looking for a Senior Full Stack Engineer &amp; Architect to design end-to-end resilient systems, scalable APIs, and high-performance React/Next.js interfaces? Send a brief below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* LEFT COLUMN: INTERACTIVE FORM */}
        <div className="lg:col-span-7">
          <Card className="p-5 sm:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Subject Chips */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold mb-3">
                    Inquiry Scope
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SUBJECT_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSubject(opt)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          subject === opt
                            ? "bg-black text-white dark:bg-white dark:text-black shadow-sm ring-1 ring-white/50"
                            : "bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-white/30"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-300 mb-1.5 font-semibold">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      placeholder="e.g. Alex Morgan (Linear Labs)"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm bg-white dark:bg-[#0E0F14] text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? "border-rose-500 focus:ring-rose-400"
                          : "border-zinc-300 dark:border-white/10 focus:ring-white/40"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-300 mb-1.5 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm bg-white dark:bg-[#0E0F14] text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-rose-500 focus:ring-rose-400"
                          : "border-zinc-300 dark:border-white/10 focus:ring-white/40"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* 3. Budget Range Selection */}
                <div>
                  <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-300 mb-1.5 font-semibold">
                    Target Budget Scope
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {BUDGET_RANGES.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`py-2 px-2 rounded-xl text-[11px] font-mono font-medium border text-center transition-all ${
                          budget === b
                            ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black font-bold"
                            : "border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Message Area */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-300 font-semibold">
                      Architecture Requirements / Project Brief *
                    </label>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      {message.length} chars
                    </span>
                  </div>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="Briefly outline your application architecture, performance goals, design requirements, and desired start dates..."
                    className={`w-full p-4 rounded-xl border text-xs sm:text-sm bg-white dark:bg-[#0E0F14] text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? "border-rose-500 focus:ring-rose-400"
                        : "border-zinc-300 dark:border-white/10 focus:ring-white/40"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Transmitting Payload...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Transmit Project Brief</span>
                    </span>
                  )}
                </Button>
              </form>
            ) : (
              /* Success Card */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-3xl bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/20 flex items-center justify-center mx-auto shadow-glow-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Payload Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-black dark:text-white">{name}</strong>. Your inquiry has been logged into my queue. I will review your technical requirements and respond within 24 hours.
                </p>
                <div className="pt-4">
                  <Button size="sm" variant="outline" onClick={resetForm}>
                    Send Another Transmission
                  </Button>
                </div>
              </motion.div>
            )}
          </Card>
        </div>

        {/* RIGHT COLUMN: DIRECT PROFESSIONAL CHANNELS */}
        <div className="lg:col-span-5 space-y-5">
          {/* One-Click Copy Email Card */}
          <Card className="p-6">
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-bold block mb-2">
              Direct Senior Developer Channel
            </span>
            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
              <div className="flex items-center gap-2 overflow-hidden">
                <Mail className="w-4 h-4 text-zinc-900 dark:text-white flex-shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-zinc-900 dark:text-white truncate">
                  ibrahimfazil511@gmail.com
                </span>
              </div>
              <button
                onClick={copyEmailToClipboard}
                className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#181920] text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white border border-zinc-200 dark:border-white/10 shadow-sm flex items-center gap-1.5 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </Card>

          {/* GitHub Direct Card */}
          <a
            href="https://github.com/ibrahimfazil-511"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="p-5 hover:border-white/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-zinc-400 transition-colors">
                      GitHub Engineering Profile
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      @ibrahimfazil-511 • Open-source architectures & repos
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
            </Card>
          </a>

          {/* LinkedIn Direct Card */}
          <a
            href="https://www.linkedin.com/in/ibrahim-aftab-b47879387/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="p-5 hover:border-white/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-zinc-400 transition-colors">
                      LinkedIn Network
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Connect professionally with Ibrahim Aftab
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
            </Card>
          </a>

          {/* Vercel Projects Hub Direct Card */}
          <a
            href="https://vercel.com/ibrahimfazil511-9992s-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="p-5 hover:border-white/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 group-hover:scale-105 transition-transform">
                    <Triangle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-zinc-400 transition-colors">
                      Vercel Cloud Deployments
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      All live edge applications & production preview branches
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
            </Card>
          </a>

          {/* Status Capsule */}
          <Card className="p-5 text-xs text-zinc-600 dark:text-zinc-300 space-y-2.5">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              <span>Global Remote Availability • Distributed Agile Teams</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>Timezone: PKT (UTC+5) • Flexible overlapping working hours</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-medium">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>Current Status: Open for Select Senior Roles & High-End Projects</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageTransition>
      <Suspense
        fallback={
          <div className="py-24 text-center">
            <div className="w-8 h-8 rounded-full border-2 border-white border-t-transparent animate-spin mx-auto" />
            <p className="text-xs text-zinc-400 mt-3 font-mono">Initializing Communication Node...</p>
          </div>
        }
      >
        <ContactContent />
      </Suspense>
    </PageTransition>
  );
}
