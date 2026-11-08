"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef(function Button(
  {
    children,
    className = "",
    variant = "primary",
    size = "md",
    href,
    target,
    rel,
    onClick,
    disabled = false,
    type = "button",
    ...props
  },
  ref
) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group select-none hover:scale-[1.02] active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 font-semibold",
    icon: "p-2.5 text-sm",
  };

  const variantStyles = {
    // Pure Monochrome Luxury Variants
    primary:
      "text-black bg-white hover:bg-zinc-200 border border-white shadow-[0_0_20px_-3px_rgba(255,255,255,0.4)] focus-visible:ring-white dark:text-black dark:bg-white dark:hover:bg-zinc-200 font-semibold",
    secondary:
      "text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-[#14151B] hover:bg-zinc-200 dark:hover:bg-[#1D1E26] border border-zinc-200 dark:border-white/10 shadow-sm backdrop-blur-md",
    outline:
      "border border-zinc-300 dark:border-white/20 hover:border-black dark:hover:border-white text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white bg-transparent",
    ghost:
      "text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5",
    glow:
      "text-white bg-black border border-white/30 hover:border-white shadow-[0_0_25px_-5px_rgba(255,255,255,0.3)]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const innerContent = (
    <>
      {/* Sleek chrome shine hover sweep */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        ref={ref}
        {...props}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {innerContent}
    </button>
  );
});

Button.displayName = "Button";
