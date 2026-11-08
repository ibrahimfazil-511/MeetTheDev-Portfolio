"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.08)",
  hoverBorder = true,
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-2xl border transition-all duration-300 overflow-hidden",
        "bg-white dark:bg-[#0E0F14]/90 backdrop-blur-md",
        "border-zinc-200 dark:border-white/[0.08]",
        hoverBorder && "hover:border-zinc-400 dark:hover:border-white/25 hover:shadow-2xl hover:shadow-black/40",
        className
      )}
      {...props}
    >
      {/* Interactive monochrome spotlight follow cursor */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(550px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
