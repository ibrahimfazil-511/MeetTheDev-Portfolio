"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Sparkles, Check, CornerDownLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const COMMANDS = {
  help: {
    desc: "List available CLI commands",
    output: [
      "Available commands:",
      "  • stack        - View core frontend engineering stack & tools",
      "  • architecture - Review senior frontend architectural principles",
      "  • metrics      - Inspect production Core Web Vitals & performance",
      "  • projects     - List flagship live production applications",
      "  • contact      - Fetch direct developer communication channels",
      "  • clear        - Wipe terminal history",
    ],
  },
  stack: {
    desc: "View core frontend engineering stack",
    output: [
      "MeetTheDev Senior Frontend Engineering Stack:",
      "  [Language]   Modern JavaScript (ES6+ Closures, Async/Await, Pure DOM APIs)",
      "  [Framework]  React 18 & 19 (Component Hierarchies, Custom Hooks, State Machines)",
      "  [SSR/SSG]    Next.js 14 (App Router, Server & Client Components, Route Handlers)",
      "  [Semantics]  Semantic HTML5 (Accessible WCAG 2.1 Trees, SEO Microdata)",
      "  [Styling]    Modern CSS3 & Tailwind CSS (Flexbox, Grid, Custom Design Tokens)",
      "  [BaaS / DB]  Supabase (Realtime Subscriptions, Postgres Client, Auth & Storage)",
      "  [UI System]  Shadcn UI & Radix Primitives (Accessible Dialogs, Drawers & Tabs)",
      "  [Animation]  Framer Motion (Layout Transitions, Spring Physics, Gestures)",
      "  [Cloud/Ops]  Vercel Edge Network (Sub-Second FCP, Global CDN, CI/CD)",
    ],
  },
  architecture: {
    desc: "Review frontend architectural principles",
    output: [
      "Frontend Architectural Principles for Modern Web:",
      "  1. Sub-Second Speed: <0.5s First Contentful Paint with Next.js code splitting & lazy hydration.",
      "  2. Semantic & Accessible: 100% WCAG 2.1 compliant HTML5 structure with ARIA landmark navigation.",
      "  3. Fluid Styling & Design Tokens: Atomic Tailwind CSS and modern CSS3 Grid/Flexbox layouts.",
      "  4. Reactive Cloud Data: Supabase realtime table subscriptions and optimistic UI state updates.",
      "  5. Micro-Interactions: Physics-based Framer Motion spring curves for fluid tactile feedback.",
    ],
  },
  metrics: {
    desc: "Inspect production Web Vitals",
    output: [
      "Production Audit Scores (Lighthouse Mobile & Desktop):",
      "  • Performance:  100 / 100",
      "  • Accessibility: 100 / 100",
      "  • Best Practices: 100 / 100",
      "  • SEO Score:    100 / 100",
      "  • First Contentful Paint (FCP): < 0.5s",
      "  • Interaction to Next Paint (INP): < 35ms",
      "  • Cumulative Layout Shift (CLS): 0.000 (Zero layout jump)",
    ],
  },
  projects: {
    desc: "List flagship applications",
    output: [
      "Flagship Frontend Deployments:",
      "  1. Royal Spice Restaurant: Zero-commission direct WhatsApp ordering UI",
      "     URL -> https://demo-restaurant-website-theta.vercel.app/",
      "  2. HCM Lite Work: Enterprise Human Capital & Workforce Management frontend SaaS",
      "     URL -> https://hcm-lite-work-alpha.vercel.app/",
      "  3. Medicure Pharmacy: High-speed e-pharmacy & prescription checkout platform",
      "     URL -> https://medicure-pharmacy-two.vercel.app/",
    ],
  },
  contact: {
    desc: "Fetch direct communication channels",
    output: [
      "Developer Coordinates:",
      "  • Email:    ibrahimfazil511@gmail.com",
      "  • WhatsApp: +92 334 2850819",
      "  • GitHub:   https://github.com/ibrahimfazil-511",
      "  • LinkedIn: https://www.linkedin.com/in/ibrahim-aftab-b47879387/",
      "  • Location: Available for global remote frontend roles & projects",
    ],
  },
};

export function Terminal({ className = "" }) {
  const [history, setHistory] = useState([
    { command: "init", output: ["MeetTheDev CLI v2.4.0 [Senior Frontend Engineer & UI Specialist Session]", "Type 'help' or click any pill below to explore frontend architecture."] },
  ]);
  const [input, setInput] = useState("");
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Prevent any window scrolling on initial mount so page remains at top hero section
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    // Only scroll the internal terminal body container, NEVER the window!
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const commandResult = COMMANDS[trimmed];
    const newEntry = {
      command: trimmed,
      output: commandResult
        ? commandResult.output
        : [`Command not recognized: '${trimmed}'. Type 'help' for available commands.`],
    };

    setHistory((prev) => [...prev, newEntry]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-[#090A0E] shadow-2xl overflow-hidden font-mono text-xs",
        className
      )}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-100 dark:bg-[#121319] border-b border-zinc-200 dark:border-white/10 select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600 inline-block" />
          <span className="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600 inline-block" />
          <span className="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600 inline-block" />
          <span className="ml-2 text-zinc-600 dark:text-zinc-400 font-semibold flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>ibrahim@meetthedev: ~</span>
          </span>
        </div>
        <div className="text-[10px] text-zinc-500 font-mono hidden sm:inline">
          node v20.x • Next.js 14
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalBodyRef}
        className="p-4 sm:p-6 max-h-[360px] overflow-y-auto space-y-4 text-zinc-800 dark:text-zinc-200"
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
      >
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
              <span className="text-zinc-900 dark:text-white font-bold">meetthedev:~$</span>
              <span className="text-zinc-900 dark:text-white font-semibold">{entry.command}</span>
            </div>
            {entry.output && (
              <div className="pl-3 sm:pl-4 space-y-0.5 text-zinc-600 dark:text-zinc-300">
                {entry.output.map((line, lineIdx) => (
                  <div key={lineIdx} className="leading-relaxed break-words">
                    {line}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Live Input Line */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-zinc-900 dark:text-white font-bold select-none text-[11px] sm:text-xs">meetthedev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help', 'stack', 'architecture'..."
            className="flex-1 bg-transparent border-0 outline-none text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 font-mono text-[11px] sm:text-xs focus:ring-0 min-w-0"
          />
          <button
            onClick={() => handleCommand(input)}
            className="p-1 text-zinc-400 hover:text-white transition-colors flex-shrink-0"
            title="Execute Command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick Action Command Chips */}
      <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-zinc-50 dark:bg-[#0D0E13] border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center gap-1.5 sm:gap-2 select-none">
        <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider hidden xs:inline">
          Quick Commands:
        </span>
        {Object.keys(COMMANDS).map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/30 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white text-[10px] sm:text-[11px] font-mono transition-colors"
          >
            {cmd}
          </button>
        ))}
        <button
          onClick={() => handleCommand("clear")}
          className="px-2 py-0.5 sm:py-1 rounded-md text-[10px] text-zinc-400 hover:text-rose-400 font-mono transition-colors ml-auto"
        >
          clear
        </button>
      </div>
    </div>
  );
}
