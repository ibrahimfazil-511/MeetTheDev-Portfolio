"use client";

import React from "react";
import Link from "next/link";
import { MeetTheDevLogo } from "@/components/MeetTheDevLogo";
import { DeveloperSignature } from "@/components/ui/DeveloperSignature";
import { Github, Linkedin, ExternalLink, ArrowUp, Terminal, ShieldCheck } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-[#070709]/90 backdrop-blur-xl pt-16 pb-32 sm:pb-24">
      {/* Background ambient subtle silver glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-white/[0.03] blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-200/80 dark:border-white/[0.08]">
          {/* Brand Info & Mission */}
          <div className="md:col-span-5 space-y-4">
            <MeetTheDevLogo size={36} showText={true} />
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Senior Frontend Engineer &amp; UI Specialist portfolio for Ibrahim Aftab. Engineering high-performance web applications with JavaScript (ES6+), React 18, Next.js 14, semantic HTML5, modern CSS3 &amp; Tailwind, Supabase realtime data, and fluid Framer Motion animations. Built for sub-second Core Web Vitals.
            </p>

            {/* Live Availability Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              <span>Available for Senior Frontend Roles &amp; Web Projects</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">
              Architecture Index
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Overview & Senior Metrics
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Frontend Journey &amp; Principles
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Services & Timeline Estimator
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Flagship Showcase & Live Iframes
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Direct Contact & Sync
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Live Platforms */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">
              Production Applications
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="https://demo-restaurant-website-theta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-white/5 border border-transparent hover:border-zinc-200 dark:border-white/10 transition-all"
              >
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-300 transition-colors">
                    Royal Spice Restaurant
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                    Zero-Commission WhatsApp Direct Ordering
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://hcm-lite-work-alpha.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-white/5 border border-transparent hover:border-zinc-200 dark:hover:border-white/10 transition-all"
              >
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-300 transition-colors">
                    HCM Lite Work SaaS
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                    Enterprise Workforce & Payroll Platform
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://medicure-pharmacy-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-white/5 border border-transparent hover:border-zinc-200 dark:hover:border-white/10 transition-all"
              >
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-300 transition-colors">
                    Medicure Pharmacy
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                    Digital Healthcare & E-Commerce Platform
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Architect Signature Sign-off Bar */}
        <div className="py-8 my-2 border-b border-zinc-200/80 dark:border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold mb-1">
              Architect Sign-off & Authenticity
            </span>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">
              Handcrafted with architectural precision & deployed to Vercel Edge.
            </div>
            <div className="text-xs text-zinc-500 font-mono mt-0.5">
              Codebase audited for sub-second Core Web Vitals & clean modular ES6+.
            </div>
          </div>

          <div className="w-full md:w-auto flex items-center justify-center">
            <DeveloperSignature
              variant="compact"
              showControls={true}
              showSeal={true}
              className="w-full max-w-sm"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
            <span>© {new Date().getFullYear()} MeetTheDev by</span>
            <span className="font-bold text-zinc-900 dark:text-white">Ibrahim Aftab</span>
            <span>• Senior Full Stack Engineer &amp; Web Architect.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ibrahimfazil-511"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahim-aftab-b47879387/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
