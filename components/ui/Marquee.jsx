"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  items,
  speed = "normal",
  reverse = false,
  className = "",
}) {
  const speedClass = {
    slow: "animate-[marquee_45s_linear_infinite]",
    normal: "animate-[marquee_25s_linear_infinite]",
    fast: "animate-[marquee_15s_linear_infinite]",
  };

  const reverseSpeedClass = {
    slow: "animate-[marquee-reverse_45s_linear_infinite]",
    normal: "animate-[marquee-reverse_25s_linear_infinite]",
    fast: "animate-[marquee-reverse_15s_linear_infinite]",
  };

  const animationClass = reverse
    ? reverseSpeedClass[speed] || reverseSpeedClass.normal
    : speedClass[speed] || speedClass.normal;

  return (
    <div className={cn("relative overflow-hidden w-full select-none py-3", className)}>
      {/* Side gradient masks for smooth edge fade */}
      <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-brand-offwhite dark:from-[#050507] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-brand-offwhite dark:from-[#050507] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max">
        <div className={cn("flex items-center gap-6 shrink-0", animationClass)}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur-md text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-white/60" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className={cn("flex items-center gap-6 shrink-0", animationClass)} aria-hidden="true">
          {items.map((item, idx) => (
            <div
              key={`dup-${idx}`}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur-md text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-white/60" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
