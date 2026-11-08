"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function MeetTheDevLogo({
  size = 38,
  showText = true,
  href = "/",
  className = "",
  animated = true,
}) {
  const content = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Monochrome SVG Emblem with Enhanced Micro-Animations */}
      <motion.div
        className="relative flex items-center justify-center cursor-pointer"
        whileHover={
          animated
            ? {
                scale: 1.08,
                rotate: [0, -1.5, 1.5, 0],
                transition: { duration: 0.35, ease: "easeOut" },
              }
            : {}
        }
        whileTap={animated ? { scale: 0.94 } : {}}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 160 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm transition-all duration-300"
        >
          <defs>
            {/* Luxury Monochrome Titanium Gradient for the 'D' */}
            <linearGradient id="monochromeDGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#E4E4E7" />
              <stop offset="70%" stopColor="#A1A1AA" />
              <stop offset="100%" stopColor="#52525B" />
            </linearGradient>

            {/* Left vertical bar titanium gradient */}
            <linearGradient id="monochromeLeftGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#D4D4D8" />
              <stop offset="100%" stopColor="#71717A" />
            </linearGradient>

            {/* Arrow gradient (pure silver to deep charcoal) */}
            <linearGradient id="monochromeArrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#A1A1AA" />
              <stop offset="100%" stopColor="#27272A" />
            </linearGradient>

            {/* Bracket gradient */}
            <linearGradient id="monochromeBracketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E4E4E7" />
              <stop offset="100%" stopColor="#71717A" />
            </linearGradient>

            {/* Subtle Silver Glow */}
            <filter id="monochromeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#FFFFFF" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Letter 'D' Outer & Inner Path with gap at bottom-right */}
          <g filter="url(#monochromeGlow)">
            {/* Top + Left + Bottom loop of 'D' */}
            <motion.path
              d="M 28 20 
                 L 64 20 
                 C 86 20, 102 36, 102 58 
                 C 102 74, 93 87, 80 94 
                 L 70 82 
                 C 78 77, 84 69, 84 58 
                 C 84 46, 75 37, 63 37 
                 L 46 37 
                 L 46 95 
                 L 62 95 
                 C 64 95, 66 95.5, 68 96.5 
                 L 68 112 
                 L 28 112 
                 C 22.4 112, 18 107.6, 18 102 
                 L 18 30 
                 C 18 24.4, 22.4 20, 28 20 Z"
              fill="url(#monochromeDGradient)"
              initial={animated ? { opacity: 0.7, scale: 0.98 } : {}}
              animate={animated ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            />

            {/* Bottom-right arc segment of 'D' */}
            <motion.path
              d="M 68 112
                 C 74 112, 80 110, 85 106
                 C 91 101, 95 95, 98 88
                 L 83 80
                 C 81 84, 78 88, 74 91
                 C 71 93, 67 94, 63 94
                 L 63 112
                 Z"
              fill="url(#monochromeDGradient)"
              opacity="0.9"
            />
          </g>

          {/* Mouse Cursor Arrow pointing up-left with interactive bounce */}
          <motion.g
            animate={
              animated
                ? {
                    x: [0, -1.5, 0],
                    y: [0, -1.5, 0],
                  }
                : {}
            }
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <path
              d="M 88 107 
                 L 76 82 
                 L 86 78 
                 L 50 48 
                 L 60 92 
                 L 69 83 
                 L 81 108 
                 Z"
              fill="url(#monochromeArrowGradient)"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Closing Code Bracket ']' on the right */}
          <motion.path
            d="M 116 26 
               C 116 23, 118.5 21, 122 21 
               L 132 26 
               C 137 28.5, 140 33.5, 140 39 
               L 140 93 
               C 140 98.5, 137 103.5, 132 106 
               L 122 111 
               C 118.5 111, 116 109, 116 106 
               L 116 97 
               L 126 92 
               L 126 40 
               L 116 35 
               Z"
            fill="url(#monochromeBracketGradient)"
            animate={
              animated
                ? {
                    x: [0, 1.5, 0],
                  }
                : {}
            }
            transition={{
              repeat: Infinity,
              duration: 3.2,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
        </svg>
      </motion.div>

      {/* Brand Name Typography */}
      {showText && (
        <span className="font-bold tracking-tight text-base sm:text-xl font-sans flex items-center">
          <span className="text-zinc-900 dark:text-white transition-colors duration-200">MeetThe</span>
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400">
            Dev
          </span>
          <span className="ml-1.5 sm:ml-2 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded bg-zinc-200/80 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-white/10">
            SR
          </span>
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={() => {
          if (href === "/" && typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg"
      >
        {content}
      </Link>
    );
  }

  return content;
}