"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Sparkles, Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { MeetTheDevLogo } from "@/components/MeetTheDevLogo";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Overview", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Showcase", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "py-3 bg-white/80 dark:bg-[#070709]/85 backdrop-blur-xl border-b border-zinc-200/80 dark:border-white/[0.08] shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <MeetTheDevLogo size={36} showText={true} />

          {/* Desktop Navigation Links with Framer Motion Active Indicator */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-zinc-100/80 dark:bg-[#111217]/80 border border-zinc-200/80 dark:border-white/10 backdrop-blur-lg shadow-sm">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    if (link.href === "/" && pathname === "/") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={cn(
                    "relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 z-10",
                    isActive
                      ? "text-black dark:text-black font-semibold"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-full bg-white shadow-sm dark:bg-white -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: 180 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/80 dark:bg-[#121319] border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white/30 transition-colors backdrop-blur-md shadow-sm"
              aria-label="Toggle Dark/Light Mode"
              title={mounted && theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-4 h-4 text-white" />
              ) : (
                <Moon className="w-4 h-4 text-black" />
              )}
            </motion.button>

            {/* Glowing "Hire Architect" CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-black bg-white hover:bg-zinc-200 shadow-[0_0_20px_-3px_rgba(255,255,255,0.4)] transition-all duration-300 group border border-white"
            >
              <Terminal className="w-3.5 h-3.5 text-zinc-800" />
              <span>Hire Ibrahim</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-[#070709]/95 backdrop-blur-2xl border-b border-zinc-200 dark:border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => {
                        if (link.href === "/" && pathname === "/") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
                        isActive
                          ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                          : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5"
                      )}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-white dark:bg-black animate-pulse" />}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="pt-2"
              >
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-black bg-white shadow-[0_0_20px_-3px_rgba(255,255,255,0.4)]"
                >
                  <Terminal className="w-4 h-4 text-black" />
                  Hire Ibrahim Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
