"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
  icon,
  className = "",
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300 overflow-hidden",
        "bg-white/80 dark:bg-[#0D0E13]/90 backdrop-blur-md",
        "border-zinc-200 dark:border-white/[0.08]",
        isOpen
          ? "border-black/50 dark:border-white/30 shadow-md"
          : "hover:border-zinc-300 dark:hover:border-white/20",
        className
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left transition-colors select-none group"
      >
        <div className="flex items-center gap-3">
          {icon && (
            <span className="p-2 rounded-xl bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white">
              {icon}
            </span>
          )}
          <span className="font-semibold text-base text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
            {title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="p-1.5 rounded-lg text-zinc-400 group-hover:text-black dark:group-hover:text-white"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 pt-1 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-100 dark:border-white/[0.06]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({ items, className = "" }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={cn("space-y-3.5", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          icon={item.icon}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
