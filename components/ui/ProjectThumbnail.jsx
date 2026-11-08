"use client";

import React, { useState } from "react";
import { ExternalLink, RefreshCw, Monitor, Globe, Shield, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectThumbnail({
  title,
  liveUrl,
  primaryScreenshot,
  fallbackScreenshot,
  className = "",
  initialShowIframe = false,
  badgeText = "Desktop 1440x900 Real View",
}) {
  const [imageSrc, setImageSrc] = useState(primaryScreenshot);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showIframe, setShowIframe] = useState(initialShowIframe);
  const [iframeKey, setIframeKey] = useState(0);

  const handleImageError = () => {
    if (imageSrc === primaryScreenshot && fallbackScreenshot) {
      setImageSrc(fallbackScreenshot);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const reloadIframe = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-950 shadow-2xl transition-all duration-300 group",
        className
      )}
    >
      {/* macOS Titanium Window Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-zinc-100 dark:bg-[#111218] border-b border-zinc-200 dark:border-white/10 select-none">
        {/* Window controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-400 dark:bg-zinc-600 inline-block shadow-inner" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-400 dark:bg-zinc-600 inline-block shadow-inner" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-400 dark:bg-zinc-600 inline-block shadow-inner" />
          <span className="ml-1 sm:ml-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hidden md:inline truncate max-w-[120px]">
            {title}
          </span>
        </div>

        {/* Browser URL bar */}
        <div className="flex-1 max-w-md mx-1.5 sm:mx-3">
          <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-white dark:bg-[#0A0B0E] border border-zinc-200 dark:border-white/10 text-xs text-zinc-600 dark:text-zinc-300 shadow-inner overflow-hidden">
            <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-zinc-500 flex-shrink-0" />
            <span className="truncate font-mono text-[10px] sm:text-[11px]">{liveUrl}</span>
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Toggle Live Iframe Button */}
          <button
            onClick={() => setShowIframe(!showIframe)}
            className={cn(
              "px-2 sm:px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-medium flex items-center gap-1 sm:gap-1.5 transition-colors",
              showIframe
                ? "bg-black text-white dark:bg-white dark:text-black shadow-sm font-semibold"
                : "bg-zinc-200/80 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-white/20"
            )}
            title={showIframe ? "Switch to Screenshot" : "Switch to Live Interactive Iframe"}
          >
            {showIframe ? (
              <>
                <Monitor className="w-3 h-3" />
                <span className="hidden md:inline">Screenshot</span>
              </>
            ) : (
              <>
                <Globe className="w-3 h-3 animate-pulse" />
                <span className="hidden md:inline">Live Iframe</span>
              </>
            )}
          </button>

          {showIframe && (
            <button
              onClick={reloadIframe}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Reload Frame"
            >
              <RefreshCw className="w-3 h-3" />
            </button>
          )}

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded text-zinc-400 hover:text-black dark:hover:text-white hover:bg-white/10 transition-colors"
            title="Open in New Tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Viewport */}
      <div className="relative aspect-[16/10] w-full bg-[#08090C] overflow-hidden">
        {showIframe ? (
          <div className="w-full h-full relative">
            <iframe
              key={iframeKey}
              src={liveUrl}
              title={`${title} Live Preview`}
              className="w-full h-full border-0"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
            <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md text-[10px] text-white font-mono flex items-center gap-1.5 border border-white/15 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              Live Interactive Session
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            {isLoading && !hasError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/90 text-zinc-400 gap-3 z-10">
                <div className="w-7 h-7 rounded-full border-2 border-white border-t-transparent animate-spin" />
                <span className="text-xs font-mono">Fetching High-Res Desktop Snapshot...</span>
              </div>
            )}

            {!hasError ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageSrc}
                  alt={`${title} Desktop Home Page Screenshot`}
                  className={cn(
                    "w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]",
                    isLoading ? "opacity-0" : "opacity-100"
                  )}
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-white" />
                  {badgeText}
                </div>
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#111218] to-[#08090C] text-white">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-4 shadow-glow-white">
                  <Globe className="w-9 h-9 text-white animate-pulse" />
                </div>
                <h4 className="text-lg font-bold mb-1">{title}</h4>
                <p className="text-xs text-zinc-400 max-w-xs mb-4">
                  Live production application deployed on Vercel Edge. Load interactive mode below.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowIframe(true)}
                    className="px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all shadow-md"
                  >
                    Load Live Iframe Preview
                  </button>
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl border border-white/20 text-xs font-semibold hover:bg-white/10 transition-all flex items-center gap-1.5"
                  >
                    Open Live App ↗
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
