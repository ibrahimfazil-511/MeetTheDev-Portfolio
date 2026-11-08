"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  RotateCcw,
  Download,
  PenTool,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import confetti from "canvas-confetti";

export function InteractiveSignaturePad({ isOpen, onClose }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [inkColor, setInkColor] = useState("#FFFFFF");

  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set high-DPI canvas dimensions
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 3;
    ctx.strokeStyle = inkColor;
  }, [isOpen, inkColor]);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const clientY = e.clientY || e.touches?.[0]?.clientY;

    if (clientX == null || clientY == null) return;

    setIsDrawing(true);
    setHasDrawn(true);
    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const clientY = e.clientY || e.touches?.[0]?.clientY;

    if (clientX == null || clientY == null) return;

    ctx.strokeStyle = inkColor;
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      confetti({
        particleCount: 30,
        spread: 70,
        origin: { y: 0.6 },
      });
      const link = document.createElement("a");
      link.download = "meetthedev-guest-signature.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {}
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 15 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative w-full max-w-xl bg-white dark:bg-[#0A0B0F] border border-zinc-300 dark:border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-mono text-zinc-800 dark:text-zinc-200 mb-2">
              <PenTool className="w-3.5 h-3.5 text-zinc-500" />
              Interactive Signing Suite
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white">
              Sign The Developer Guestbook
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Test your signature on the digital canvas below using mouse or touch.
            </p>
          </div>

          {/* Interactive Canvas Box */}
          <div className="relative border-2 border-dashed border-zinc-300 dark:border-white/20 rounded-2xl bg-zinc-50 dark:bg-[#121319] p-2 mb-4 touch-none overflow-hidden">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="w-full h-52 cursor-crosshair rounded-xl block"
            />

            {!hasDrawn && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-xs font-mono text-zinc-400 dark:text-zinc-600">
                ✍️ Draw your signature here...
              </div>
            )}

            {/* Subtle baseline line */}
            <div className="absolute bottom-8 inset-x-8 h-px bg-zinc-200 dark:bg-white/10 pointer-events-none" />
          </div>

          {/* Ink color selector & Action buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-500">Ink Color:</span>
              {[
                { name: "White", val: "#FFFFFF" },
                { name: "Titanium", val: "#A1A1AA" },
                { name: "Obsidian", val: "#18181B" },
              ].map((c) => (
                <button
                  key={c.name}
                  onClick={() => setInkColor(c.val)}
                  style={{ backgroundColor: c.val }}
                  className={`w-5 h-5 rounded-full border ${
                    inkColor === c.val
                      ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-black"
                      : "border-zinc-400"
                  }`}
                  title={c.name}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={clearCanvas}
                disabled={!hasDrawn}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/10 disabled:opacity-30 transition-colors flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Clear
              </button>
              <button
                onClick={handleDownload}
                disabled={!hasDrawn}
                className="px-4 py-1.5 rounded-lg text-xs font-mono font-bold bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-30 transition-colors flex items-center gap-1 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" /> Save Sign
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}