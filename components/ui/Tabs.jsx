"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Tabs({ tabs, activeTab, onChange, className = "" }) {
  return (
    <div
      className={cn(
        "inline-flex items-center p-1 sm:p-1.5 rounded-2xl bg-zinc-100/90 dark:bg-[#111217]/90 border border-zinc-200 dark:border-white/10 backdrop-blur-md overflow-x-auto no-scrollbar max-w-full select-none touch-pan-x",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap z-10 flex items-center gap-1.5 sm:gap-2",
              isActive
                ? "text-black dark:text-black font-semibold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 rounded-xl bg-white shadow-sm dark:bg-white -z-10"
                transition={{ type: "spring", stiffness: 450, damping: 30 }}
              />
            )}
            {tab.icon && <span className="text-sm">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-mono",
                  isActive
                    ? "bg-black/10 text-black dark:bg-black/10 dark:text-black font-bold"
                    : "bg-zinc-200 dark:bg-white/10 text-zinc-700 dark:text-zinc-300"
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
