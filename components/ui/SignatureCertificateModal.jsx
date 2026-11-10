"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShieldCheck,
  Award,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Code2,
  Calendar,
  Lock,
  Sparkles,
} from "lucide-react";
import { MeetTheDevLogo } from "@/components/MeetTheDevLogo";

const VERIFIED_ATTRIBUTES = [
  { label: "Core Specialization", value: "Senior Frontend Engineering & Modern Web Development" },
  { label: "Core Stack", value: "JavaScript (ES6+), React 18, Next.js 14, Semantic HTML5 & CSS3" },
  { label: "BaaS & Realtime Data", value: "Supabase (PostgreSQL, Realtime Subscriptions, Auth & Storage)" },
  { label: "Styling & Motion", value: "Tailwind CSS, Custom Shadcn UI Primitives & Framer Motion" },
  { label: "Performance Benchmark", value: "Sub-Second FCP (< 0.5s) & 100/100 Core Web Vitals" },
  { label: "Deployed Applications", value: "Royal Spice Restaurant, HCM Lite Work SaaS & Medicure Pharmacy" },
];

export function SignatureCertificateModal({ isOpen, onClose }) {
  const [copiedKey, setCopiedKey] = useState(false);
  const certId = "MTD-ARCH-2026-IA-001";
  const signatureHash = "SHA256: 8f4a1c90b2e37d54c129f1b098e4d2a7c5b61e89320af84";

  const handleCopy = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(`${certId} // ${signatureHash}`);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Certificate Card */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#0C0D12] border-2 border-zinc-300 dark:border-white/20 rounded-3xl shadow-2xl p-5 sm:p-10 z-10 max-h-[90vh] overflow-y-auto no-scrollbar"
        >
          {/* Decorative Corner Filigrees / Borders */}
          <div className="absolute top-3 left-3 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-l-2 border-zinc-400 dark:border-white/40" />
          <div className="absolute top-3 right-3 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-r-2 border-zinc-400 dark:border-white/40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-l-2 border-zinc-400 dark:border-white/40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-r-2 border-zinc-400 dark:border-white/40" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200 mb-3 sm:mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Official Verification Certificate
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-2">
              Frontend Engineer Signature &amp; Quality Seal
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono">
              Attestation of High-Impact Frontend Architecture &amp; Clean Web Standards
            </p>
          </div>

          {/* Certificate Body */}
          <div className="space-y-4 py-4 border-y border-zinc-200 dark:border-white/10 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 pb-2 border-b border-zinc-100 dark:border-white/5 gap-1">
              <span>ISSUED TO: <strong className="text-zinc-900 dark:text-white font-bold">IBRAHIM AFTAB</strong></span>
              <span>CERTIFICATE ID: <strong className="text-zinc-900 dark:text-white font-mono">{certId}</strong></span>
            </div>

            <div className="space-y-2.5 my-4">
              {VERIFIED_ATTRIBUTES.map((attr, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1 sm:gap-4">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 dark:text-white flex-shrink-0" />
                    {attr.label}
                  </span>
                  <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-200 sm:text-right">
                    {attr.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Cryptographic Hash Strip */}
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 overflow-hidden text-[10px] sm:text-[11px] font-mono text-zinc-600 dark:text-zinc-300">
                <Lock className="w-3.5 h-3.5 flex-shrink-0 text-zinc-400" />
                <span className="truncate">{signatureHash}</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 self-end sm:self-auto px-2.5 py-1 rounded bg-zinc-200 dark:bg-white/10 hover:bg-zinc-300 dark:hover:bg-white/20 text-xs font-mono font-bold text-zinc-900 dark:text-white flex items-center gap-1 transition-colors"
              >
                {copiedKey ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Footer Sign-off in Modal */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <MeetTheDevLogo size={32} showText={false} />
              <div className="text-left">
                <div className="text-xs font-bold text-zinc-900 dark:text-white">MeetTheDev Verified</div>
                <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">Authenticated via Next.js Architecture</div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-md"
            >
              Done Inspecting
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}