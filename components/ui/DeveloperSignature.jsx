"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  ShieldCheck,
  Award,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Code2,
  PenTool,
  Lock,
} from "lucide-react";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";

// Cryptographic Mock Fingerprint for Ibrahim Aftab's Developer Signature
const SIGNATURE_FINGERPRINT = "SIG-2026-IA // SHA256: 8f4a1c90b2e37d54";

export function DeveloperSignature({
  variant = "hero", // "hero" | "compact" | "badge" | "footer" | "seal-only"
  className = "",
  showControls = true,
  showSeal = true,
  autoPlay = true,
  onOpenCertificate,
  onOpenPad,
}) {
  const [animationKey, setAnimationKey] = useState(0);
  const [isDrawing, setIsDrawing] = useState(true);
  const [hasDrawnOnce, setHasDrawnOnce] = useState(false);
  const [copied, setCopied] = useState(false);

  // Trigger stroke replay
  const handleReplay = (e) => {
    e?.stopPropagation?.();
    setIsDrawing(true);
    setAnimationKey((prev) => prev + 1);
  };

  // Trigger celebration micro-confetti
  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 28,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#FFFFFF", "#E4E4E7", "#A1A1AA", "#71717A"],
        disableForReducedMotion: true,
      });
    } catch (err) {
      // safe fallback
    }
  };

  useEffect(() => {
    setIsDrawing(true);
    const timer = setTimeout(() => {
      setIsDrawing(false);
      setHasDrawnOnce(true);
      if (variant === "hero") {
        triggerCelebration();
      }
    }, 2400);

    return () => clearTimeout(timer);
  }, [animationKey]);

  const copyFingerprint = (e) => {
    e?.stopPropagation?.();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(SIGNATURE_FINGERPRINT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Stroke timing configurations for ultra-smooth realistic handwriting
  const strokeTransition = (delay = 0, duration = 1.1) => ({
    pathLength: {
      delay,
      duration,
      ease: [0.25, 0.1, 0.25, 1],
    },
    opacity: {
      delay,
      duration: 0.2,
      ease: "easeInOut",
    },
  });

  return (
    <div
      className={cn(
        "relative group transition-all duration-300",
        variant === "hero" &&
          "p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-[#0B0C10]/75 border border-zinc-200/90 dark:border-white/10 backdrop-blur-xl shadow-xl hover:border-black/20 dark:hover:border-white/20",
        variant === "compact" &&
          "p-4 rounded-xl bg-white/50 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/10 backdrop-blur-md",
        variant === "footer" && "inline-flex flex-col items-center",
        variant === "badge" &&
          "inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10",
        className
      )}
    >
      {/* Background ambient titanium glow */}
      {variant === "hero" && (
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-zinc-200/50 via-zinc-400/20 to-zinc-200/50 dark:from-white/10 dark:via-zinc-500/10 dark:to-white/10 opacity-40 blur-xl pointer-events-none group-hover:opacity-75 transition-opacity" />
      )}

      {/* Hero Header Strip */}
      {variant === "hero" && (
        <div className="relative z-10 flex items-center justify-between pb-3.5 mb-2 border-b border-zinc-200/70 dark:border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span
                className={cn(
                  "absolute inline-flex h-full w-full rounded-full opacity-75",
                  isDrawing ? "animate-ping bg-blue-500" : "bg-emerald-500"
                )}
              />
              <span
                className={cn(
                  "relative inline-flex rounded-full h-2 w-2",
                  isDrawing ? "bg-blue-500" : "bg-emerald-500"
                )}
              />
            </span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 flex items-center gap-1.5">
              <PenTool className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
              Developer Signature & Seal
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Live Status Badge */}
            <span
              className={cn(
                "text-[10px] font-mono px-2 py-0.5 rounded-full border transition-colors",
                isDrawing
                  ? "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400"
                  : "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
              )}
            >
              {isDrawing ? "Writing Ink..." : "Verified & Audited"}
            </span>

            {/* Replay Button */}
            {showControls && (
              <button
                onClick={handleReplay}
                disabled={isDrawing}
                title="Replay Signature Animation"
                className="p-1.5 rounded-md text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors disabled:opacity-40"
              >
                <RotateCcw
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-500",
                    isDrawing && "animate-spin"
                  )}
                />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Main SVG Signature Canvas & Verification Stamp */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* The Animated SVG Handwritten Signature */}
        <div className="relative w-full max-w-sm sm:max-w-md overflow-visible py-1">
          <svg
            key={animationKey}
            viewBox="0 0 460 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto drop-shadow-md select-none pointer-events-none"
          >
            <defs>
              {/* Luxury Titanium Liquid Metal Signature Gradient */}
              <linearGradient id="sigGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#18181B" className="dark:stop-color-white" />
                <stop offset="40%" stopColor="#27272A" className="dark:stop-color-zinc-200" />
                <stop offset="80%" stopColor="#52525B" className="dark:stop-color-zinc-300" />
                <stop offset="100%" stopColor="#71717A" className="dark:stop-color-zinc-400" />
              </linearGradient>

              {/* Shimmer Light Filter */}
              <filter id="sigGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="1.5"
                  stdDeviation="2.5"
                  floodColor="#FFFFFF"
                  floodOpacity="0.25"
                />
              </filter>
            </defs>

            {/* STROKE 1: Initial "I" Loop and Elegant Descent */}
            <motion.path
              d="M 38 64 C 28 58 22 46 28 34 C 34 22 52 18 68 22 C 76 24 82 30 78 38 C 72 46 56 56 46 70 C 34 86 38 100 52 100 C 66 100 80 86 90 74"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-950 dark:text-white"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={strokeTransition(0, 0.45)}
            />

            {/* STROKE 2: Cursive "brahim" connected loops */}
            <motion.path
              d="M 88 76 C 94 66 102 42 106 32 C 108 26 104 25 100 32 C 94 44 90 72 94 80 C 97 85 106 84 112 76 C 118 68 126 62 132 64 C 138 66 138 74 140 80 C 145 72 152 64 160 64 C 168 64 170 72 170 78 C 170 84 165 86 160 86 C 153 86 148 80 148 72 C 148 64 154 60 162 60 C 172 60 174 72 175 80 C 178 72 186 38 190 30 C 193 24 189 25 184 34 C 178 46 176 72 178 80 C 181 86 190 66 196 66 C 202 66 204 74 206 80 C 210 72 216 64 222 64 C 228 64 230 72 232 80 C 236 72 242 64 248 64 C 254 64 256 72 258 80"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-950 dark:text-white"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={strokeTransition(0.35, 0.65)}
            />

            {/* STROKE 3: Dynamic "i" dot */}
            <motion.circle
              cx="223"
              cy="50"
              r="2.5"
              fill="currentColor"
              className="text-zinc-900 dark:text-zinc-200"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.4, 1], opacity: 1 }}
              transition={{ delay: 0.95, duration: 0.2 }}
            />

            {/* STROKE 4: Dramatic Capital "A" of Aftab */}
            <motion.path
              d="M 268 84 C 278 68 294 36 304 22 C 308 16 313 18 312 28 C 310 46 304 74 302 86"
              stroke="currentColor"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-950 dark:text-white"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={strokeTransition(0.9, 0.4)}
            />

            {/* STROKE 5: Capital "A" Crossbar connecting to "f" */}
            <motion.path
              d="M 284 60 C 294 58 310 56 324 58"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              className="text-zinc-950 dark:text-white"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={strokeTransition(1.2, 0.25)}
            />

            {/* STROKE 6: Flourishing "ftab" loop, ascenders & terminal arch */}
            <motion.path
              d="M 322 60 C 326 44 334 26 338 24 C 342 22 338 32 334 48 C 326 74 318 108 316 114 C 314 118 320 114 326 102 C 332 90 338 72 344 68 C 348 54 354 36 356 32 C 358 29 356 38 356 58 C 356 72 360 80 368 78 C 374 72 380 64 386 64 C 394 64 396 72 396 78 C 396 84 390 86 384 86 C 378 86 374 80 374 72 C 374 64 380 60 388 60 C 398 60 400 72 402 80 C 406 70 414 42 418 32 C 420 26 416 28 412 38 C 406 54 404 72 408 80 C 411 86 420 84 426 76"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-950 dark:text-white"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={strokeTransition(1.35, 0.65)}
            />

            {/* STROKE 7: Crossbar of "t" in Aftab */}
            <motion.path
              d="M 348 48 C 356 46 366 46 372 47"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-zinc-950 dark:text-white"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={strokeTransition(1.8, 0.2)}
            />

            {/* STROKE 8: Signature Parabolic Underline Flourish */}
            <motion.path
              d="M 426 78 C 390 94 300 108 190 112 C 100 115 42 108 26 100 C 18 94 24 88 44 88 C 84 88 180 96 300 92 C 360 90 414 84 446 76"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-900 dark:text-zinc-100"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={strokeTransition(1.9, 0.55)}
            />

            {/* STROKE 9: Finishing Calligraphic Spark / Accent Dot */}
            <motion.circle
              cx="448"
              cy="76"
              r="2.8"
              fill="currentColor"
              className="text-zinc-900 dark:text-white"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: 1 }}
              transition={{ delay: 2.35, duration: 0.2 }}
            />
          </svg>

          {/* Subtitle Underneath Signature */}
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mt-1 px-1">
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">
              Ibrahim Aftab
            </span>
            <span>Senior Full Stack Engineer &amp; Architect</span>
          </div>
        </div>

        {/* Authentic Digital Architect Seal / Stamp */}
        {showSeal && (
          <motion.div
            initial={{ scale: 0, rotate: -25, opacity: 0 }}
            animate={
              hasDrawnOnce || !isDrawing
                ? { scale: 1, rotate: -3, opacity: 1 }
                : { scale: 0, rotate: -25, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 18,
              delay: 0.2,
            }}
            className="flex-shrink-0 cursor-pointer select-none"
            onClick={onOpenCertificate}
            title="Inspect Verified Frontend Credentials"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-br from-zinc-200 via-zinc-100 to-zinc-300 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 border-2 border-zinc-400/60 dark:border-white/30 shadow-lg flex items-center justify-center text-center group/seal hover:scale-105 transition-transform">
              {/* Spinning Circular Outer Border Pattern */}
              <div className="absolute inset-1 rounded-full border border-dashed border-zinc-400 dark:border-white/30 animate-[spin_30s_linear_infinite]" />

              {/* Seal Inner Content */}
              <div className="relative z-10 flex flex-col items-center justify-center p-1">
                <Code2 className="w-4 h-4 text-zinc-900 dark:text-white mb-0.5 group-hover/seal:scale-110 transition-transform" />
                <span className="text-[8px] font-mono font-black tracking-widest uppercase text-zinc-900 dark:text-white">
                  VERIFIED
                </span>
                <span className="text-[7px] font-mono text-zinc-600 dark:text-zinc-400 font-bold uppercase leading-tight">
                  FRONTEND ENGINEER
                </span>
                <span className="text-[6.5px] font-mono text-zinc-500 dark:text-zinc-500 mt-0.5">
                  ★ 2026 ★
                </span>
              </div>

              {/* Subtle Red/Gold Wax Stamp Ribbon Embellishment */}
              <div className="absolute -bottom-1.5 px-2 py-0.5 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-black text-[7.5px] font-mono font-bold tracking-tight shadow-sm">
                MEETTHEDEV
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Hero Footer Strip with Fingerprint & Quick Actions */}
      {variant === "hero" && (
        <div className="relative z-10 mt-5 pt-3.5 border-t border-zinc-200/70 dark:border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          {/* Fingerprint Tag */}
          <div
            onClick={copyFingerprint}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[10px] font-mono text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white/30 cursor-pointer transition-colors max-w-full overflow-hidden"
            title="Click to copy cryptographic signature hash"
          >
            <Lock className="w-3 h-3 flex-shrink-0" />
            <span className="truncate max-w-[170px] xs:max-w-[260px] sm:max-w-none">{SIGNATURE_FINGERPRINT}</span>
            {copied ? (
              <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
            ) : (
              <Copy className="w-3 h-3 opacity-60 flex-shrink-0" />
            )}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {onOpenPad && (
              <button
                onClick={onOpenPad}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
              >
                <PenTool className="w-3 h-3" />
                <span>Try Signing Canvas</span>
              </button>
            )}

            {onOpenCertificate && (
              <button
                onClick={onOpenCertificate}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-[11px] font-bold text-black dark:text-white bg-zinc-200/80 dark:bg-white/10 hover:bg-zinc-300 dark:hover:bg-white/20 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>View Certificate</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}