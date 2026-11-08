"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Sparkles, Check, CornerDownLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const COMMANDS = {
  help: {
    desc: "List available CLI commands",
    output: [
      "Available commands:",
      "  • stack        - View core full-stack engineering stack & tools",
      "  • architecture - Review senior full-stack architectural principles",
      "  • metrics      - Inspect production Core Web Vitals & performance",
      "  • projects     - List flagship live production applications",
      "  • contact      - Fetch direct developer communication channels",
      "  • clear        - Wipe terminal history",
    ],
  },
  stack: {
    desc: "View core full-stack engineering stack",
    output: [
      "MeetTheDev Senior Full-Stack Engineering Stack:",
      "  [Frontend]   Next.js 14 (App Router, Server Components & Actions), React 18",
      "  [Backend]    Node.js, Express, Next.js Route Handlers, RESTful Endpoints",
      "  [Databases]  PostgreSQL, MongoDB, Prisma ORM, Redis (In-Memory Cache)",
      "  [Language]   Modern ES6+ JavaScript (Clean, Fast Compilation, Zero TS Bloat)",
      "  [Styling]    Tailwind CSS (Atomic Tokens, Fluid Responsive Breakpoints)",
      "  [Design]     Shadcn UI Architecture (Radix Primitives, Accessible ARIA)",
      "  [Animation]  Framer Motion (Layout Animations, Physics Springs, Gestures)",
      "  [Cloud/Ops]  Docker, Vercel Edge Network (Global CDN, Serverless Compute, CI/CD)",
    ],
  },
  architecture: {
    desc: "Review full-stack architectural principles",
    output: [
      "Full-Stack Architectural Principles for Senior Systems:",
      "  1. End-to-End Latency: Sub-second First Contentful Paint (<0.6s) & fast API cycles.",
      "  2. Decoupled & Predictable APIs: RESTful endpoints with resilient state machines.",
      "  3. Database Schema Rigor: Normalized Prisma models, indexing, and transactional safety.",
      "  4. Defense in Depth: JWT/OAuth role-based security, input sanitization & rate limiting.",
      "  5. Atomic UI & Fluid Motion: Accessible Shadcn primitives with Framer Motion spring physics.",
    ],
  },
  metrics: {
    desc: "Inspect production Web Vitals",
    output: [
      "Production Audit Scores (Lighthouse Mobile & Desktop):",
      "  • Performance:  99 / 100",
      "  • Accessibility: 100 / 100",
      "  • Best Practices: 100 / 100",
      "  • SEO Score:    100 / 100",
      "  • First Contentful Paint (FCP): < 0.6s",
      "  • Interaction to Next Paint (INP): < 40ms",
      "  • Cumulative Layout Shift (CLS): 0.000 (Zero layout jump)",
    ],
  },
  projects: {
    desc: "List flagship applications",
    output: [
      "Flagship Full-Stack Deployments:",
      "  1. HCM Lite Work: Enterprise Human Capital & Workforce Management SaaS",
      "     URL -> https://hcm-lite-work-alpha.vercel.app/",
      "  2. Medicure Pharmacy: High-speed e-pharmacy & prescription checkout platform",
      "     URL -> https://medicure-pharmacy-two.vercel.app/",
    ],
  },
  contact: {
    desc: "Fetch direct communication channels",
    output: [
      "Developer Coordinates:",
      "  • Email:    ibrahimfazil511@gmail.com",
      "  • GitHub:   https://github.com/ibrahimfazil-511",
      "  • LinkedIn: https://www.linkedin.com/in/ibrahim-aftab-b47879387/",
      "  • Location: Available for global distributed remote work",
    ],
  },
};

export function Terminal({ className = "" }) {
  const [history, setHistory] = useState([
    { command: "init", output: ["MeetTheDev CLI v2.4.0 [Senior Full-Stack Engineer & Architect Session]", "Type 'help' or click any pill below to explore system architecture."] },
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
