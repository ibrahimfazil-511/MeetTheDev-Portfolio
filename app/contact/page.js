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
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageTransition } from "@/components/PageTransition";

const SUBJECT_OPTIONS = [
  "Restaurant Ordering System",
  "Custom SaaS / Web App",
  "Senior Full Stack Role",
  "General Inquiry",
];

const TIMELINE_PREFERENCES = [
  "Immediate (ASAP)",
  "1 - 2 Weeks",
  "2 - 4 Weeks",
  "Flexible",
];

function ContactContent() {
  const searchParams = useSearchParams();

  const prefilledService = searchParams?.get("service") || "";
  const prefilledTimeline = searchParams?.get("timeline") || "";

  const [subject, setSubject] = useState(
    prefilledService ? "Restaurant Ordering System" : "Contract / Project"
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [timeline, setTimeline] = useState(prefilledTimeline || "1 - 2 Weeks");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      if (!message) {
        setMessage(
          `Hi Ibrahim, I'm interested in the "${prefilledService}" package. Expected Timeline: ${prefilledTimeline || "Standard"}. Please review my requirements and connect with me on WhatsApp.`
        );
      }
    }
  }, [prefilledService, prefilledTimeline, message]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("ibrahimfazil511@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText("03342850819");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Please enter your name / organization";
    if (!phone.trim()) {
      newErrors.phone = "Please enter your WhatsApp / Phone number";
    } else if (phone.trim().length < 7) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!message.trim() || message.length < 8) {
      newErrors.message = "Please briefly describe your project requirement";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Prepare structured WhatsApp Brief Payload for 03342850819
    const waText =
      `*New Project Brief - MeetTheDev*%0A%0A` +
      `👤 *Name / Org:* ${encodeURIComponent(name)}%0A` +
      `📱 *Phone / WhatsApp:* ${encodeURIComponent(phone)}%0A` +
      `📧 *Email:* ${encodeURIComponent(email)}%0A` +
      `💼 *Service Scope:* ${encodeURIComponent(prefilledService || subject)}%0A` +
      `⏱️ *Expected Timeline:* ${encodeURIComponent(timeline || prefilledTimeline || "Standard")}%0A%0A` +
      `📋 *Project Requirements Brief:*%0A${encodeURIComponent(message)}%0A%0A` +
      `_Sent via meetthedev-portfolio.vercel.app_`;

    const waUrl = `https://wa.me/923342850819?text=${waText}`;

    // Automatically trigger WhatsApp in new tab
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }

    setTimeout(async () => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Celebration Confetti
      try {
        const confetti = (await import("canvas-confetti")).default;
        confetti({
          particleCount: 110,
          spread: 75,
          origin: { y: 0.6 },
          colors: ["#25D366", "#FFFFFF", "#E4E4E7", "#A1A1AA", "#27272A"],
        });
      } catch (err) {}
    }, 700);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
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

                {/* 2. Name & Phone & Email */}
                <div className="space-y-4">
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
                        placeholder="e.g. Alex Morgan / Royal Spice"
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
                      <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-300 mb-1.5 font-semibold flex items-center justify-between">
                        <span>WhatsApp / Phone Number *</span>
                        <span className="text-[10px] text-emerald-500 font-mono font-bold">Fast Response</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: null });
                        }}
                        placeholder="e.g. 03342850819 or +92 334 2850819"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm bg-white dark:bg-[#0E0F14] text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? "border-rose-500 focus:ring-rose-400"
                            : "border-zinc-300 dark:border-white/10 focus:ring-white/40"
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </span>
                      )}
                    </div>
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

                {/* 3. Expected Delivery Timeline */}
                <div>
                  <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-300 mb-1.5 font-semibold">
                    Desired Delivery Timeline
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TIMELINE_PREFERENCES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTimeline(t)}
                        className={`py-2 px-2 rounded-xl text-[11px] font-mono font-medium border text-center transition-all ${
                          timeline === t
                            ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black font-bold"
                            : "border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Message Area */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-300 font-semibold">
                      Project Requirements Brief *
                    </label>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      {message.length} chars
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="Describe your project requirement (e.g. Restaurant direct WhatsApp ordering system, custom SaaS dashboard, mobile menu customization)..."
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

                {/* Submit to WhatsApp Action */}
                <div className="space-y-3">
                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold border-0 shadow-[0_0_25px_-5px_rgba(37,211,102,0.4)]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Connecting with WhatsApp...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 fill-black" />
                        <span>Transmit Brief to WhatsApp (03342850819)</span>
                      </span>
                    )}
                  </Button>

                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 text-center font-mono">
                    Instant sync: Clicking transmit dispatches your project brief directly to Ibrahim&apos;s WhatsApp hotline.
                  </p>
                </div>
              </form>
            ) : (
              /* Success Card */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-glow-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Brief Dispatched to WhatsApp!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-black dark:text-white">{name}</strong>. Your project brief has been formatted and opened in WhatsApp (0334 2850819). Ibrahim will reply promptly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href="https://wa.me/923342850819"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-xs shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>Open WhatsApp Again</span>
                  </a>
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
          {/* Direct WhatsApp Hotline Card */}
          <Card className="p-6 border-emerald-500/20 bg-gradient-to-b from-emerald-500/[0.04] to-transparent">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Official WhatsApp Channel
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-bold">
                Online
              </span>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 mb-4">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="font-mono text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                  0334 2850819
                </span>
              </div>
              <button
                onClick={copyPhoneToClipboard}
                className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#181920] text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white border border-zinc-200 dark:border-white/10 shadow-sm flex items-center gap-1 transition-colors"
                title="Copy WhatsApp Number"
              >
                {copiedPhone ? (
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

            <a
              href="https://wa.me/923342850819"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold text-xs transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Direct WhatsApp Chat (0334 2850819)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Card>
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
