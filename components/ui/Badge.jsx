import React from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, variant = "default", className = "", ...props }) {
  const variants = {
    default:
      "bg-zinc-100 text-zinc-900 border-zinc-300 dark:bg-white/10 dark:text-white dark:border-white/20",
    cyan:
      "bg-zinc-200 text-zinc-900 border-zinc-300 dark:bg-white/15 dark:text-zinc-100 dark:border-white/25",
    purple:
      "bg-zinc-100 text-zinc-800 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700",
    coral:
      "bg-zinc-200 text-zinc-900 border-zinc-300 dark:bg-white/10 dark:text-white dark:border-white/20",
    pink:
      "bg-zinc-100 text-zinc-900 border-zinc-300 dark:bg-white/10 dark:text-white dark:border-white/20",
    gradient:
      "text-black bg-white border border-white shadow-[0_0_15px_-3px_rgba(255,255,255,0.4)] dark:text-black dark:bg-white font-semibold",
    outline:
      "border-zinc-300 dark:border-white/15 text-zinc-700 dark:text-zinc-300 bg-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-colors select-none",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
