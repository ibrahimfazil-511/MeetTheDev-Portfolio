"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Triangle,
  HeartPulse,
  Users,
  ExternalLink,
  PenTool,
  UtensilsCrossed,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const DOCK_ITEMS = [
  {
    id: "github",
    title: "GitHub Profile",
    subtitle: "@ibrahimfazil-511",
    href: "https://github.com/ibrahimfazil-511",
    icon: Github,
  },
  {
    id: "restaurant",
    title: "Royal Spice Demo",
    subtitle: "Zero-Commission Restaurant",
    href: "https://demo-restaurant-website-theta.vercel.app/",
    icon: UtensilsCrossed,
  },
  {
    id: "whatsapp",
    title: "WhatsApp Hotline",
    subtitle: "0334 2850819",
    href: "https://wa.me/923342850819",
    icon: MessageCircle,
  },
  {
    id: "hcm",
    title: "HCM Lite Work",
    subtitle: "Enterprise HR SaaS",
    href: "https://hcm-lite-work-alpha.vercel.app/",
    icon: Users,
  },
  {
    id: "medicure",
    title: "Medicure Pharmacy",
    subtitle: "Healthcare E-Commerce",
    href: "https://medicure-pharmacy-two.vercel.app/",
    icon: HeartPulse,
  },
  {
    id: "vercel",
    title: "Vercel Hub",
    subtitle: "All Production Apps",
    href: "https://vercel.com/ibrahimfazil511-9992s-projects",
    icon: Triangle,
  },
  {
    id: "linkedin",
    title: "LinkedIn Profile",
    subtitle: "Ibrahim Aftab",
    href: "https://www.linkedin.com/in/ibrahim-aftab-b47879387/",
    icon: Linkedin,
  },
  {
    id: "signature",
    title: "Developer Signature",
    subtitle: "Verified Frontend Seal",
    href: "/#signature",
    icon: PenTool,
  },
];

function DockIcon({ mouseX, item }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Compute distance from mouse to center of this icon
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Scale icon size smoothly between 38px/44px and 58px/66px based on interaction
  const widthTransform = useTransform(distance, [-140, 0, 140], [38, 58, 38]);
  const heightTransform = useTransform(distance, [-140, 0, 140], [38, 58, 38]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 180,
    damping: 14,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 180,
    damping: 14,
  });

  const IconComponent = item.icon;

  return (
    <div className="relative flex flex-col items-center">
      {/* Tooltip Label */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.92 }}
            animate={{ opacity: 1, y: -8, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.92 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full mb-2 pointer-events-none z-50 flex flex-col items-center"
          >
            <div className="px-3 py-1.5 rounded-xl bg-black/95 dark:bg-[#121319]/95 text-white text-[11px] font-medium shadow-2xl border border-white/15 backdrop-blur-md flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-semibold">{item.title}</span>
              <span className="text-zinc-400 text-[10px]">({item.subtitle})</span>
              <ExternalLink className="w-2.5 h-2.5 text-zinc-300" />
            </div>
            {/* Tooltip Arrow */}
            <div className="w-2 h-2 bg-black/95 dark:bg-[#121319]/95 border-r border-b border-white/15 rotate-45 -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dock Item Button */}
      <a
        ref={ref}
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
        onClick={(e) => {
          if (item.href === "/#signature" && typeof window !== "undefined" && window.location.pathname === "/") {
            e.preventDefault();
            document.getElementById("signature")?.scrollIntoView({ behavior: "smooth" });
          }
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-2xl block"
        aria-label={item.title}
      >
        <motion.div
          style={{ width, height }}
          className={cn(
            "rounded-xl sm:rounded-2xl flex items-center justify-center p-2 sm:p-2.5 shadow-lg transition-all relative overflow-hidden group",
            "bg-gradient-to-b from-[#22232B] to-[#121317] border border-white/15 hover:border-white/40",
            hovered && "shadow-[0_0_20px_-3px_rgba(255,255,255,0.25)]"
          )}
        >
          {/* Subtle gloss overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20 pointer-events-none" />

          {/* Icon */}
          <IconComponent className="w-full h-full text-white drop-shadow-sm transition-transform duration-200 group-hover:scale-110" />

          {/* Bottom indicator dot on hover */}
          {hovered && (
            <motion.div
              layoutId="dockDot"
              className="absolute bottom-1 w-1 h-1 rounded-full bg-white shadow-[0_0_8px_white]"
            />
          )}
        </motion.div>
      </a>
    </div>
  );
}

export function Dock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-3 sm:bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none px-2">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 25, delay: 0.15 }}
        className="pointer-events-auto px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-2xl sm:rounded-3xl glass-dock flex items-end gap-1.5 sm:gap-3 max-w-[calc(100vw-1.5rem)] overflow-x-auto no-scrollbar shadow-2xl"
      >
        {DOCK_ITEMS.map((item) => (
          <DockIcon key={item.id} mouseX={mouseX} item={item} />
        ))}
      </motion.div>
    </div>
  );
}
