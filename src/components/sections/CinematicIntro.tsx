"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { sound } from "@/lib/audio";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CinematicIntro() {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleEnter = () => {
    sound.playWhoosh();
    sound.playRipple();
    setFading(true);
    setTimeout(() => setHidden(true), 800);
  };

  useEffect(() => {
    // Automatic smooth fade after 2.4 seconds if not clicked
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 2200);

    const timer2 = setTimeout(() => {
      setHidden(true);
    }, 2900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-8 bg-gradient-to-b from-ocean-deep via-ocean to-ocean-abyss text-white transition-opacity duration-700 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Top Movie Crediting */}
      <div className="w-full max-w-5xl flex items-center justify-between text-[11px] font-mono tracking-[0.3em] uppercase text-white/50">
        <span>GOLDSPADE PRESENTS</span>
        <span className="text-nature-leaf">EDITION 2026 // PUNE</span>
      </div>

      {/* Center Cinematic Emblem & Shockwave */}
      <div className="flex flex-col items-center justify-center space-y-6 text-center my-auto">
        <div className="relative w-44 sm:w-56 h-32 sm:h-40 cursor-pointer group" onClick={handleEnter}>
          {/* Animated Glowing Shockwave Rings */}
          <div className="absolute inset-0 rounded-full border border-nature/30 animate-ping opacity-40" />
          <div className="absolute -inset-6 rounded-full border border-ocean-bright/20 animate-pulse-subtle" />
          <div className="absolute inset-0 bg-gradient-to-tr from-ocean-bright/30 to-nature/20 rounded-full blur-2xl" />

          <Image
            src="/brand/kalash-logo-white.png"
            alt="KALASH Cinematic Reveal"
            fill
            priority
            className="object-contain drop-shadow-[0_0_25px_rgba(21,108,212,0.6)] transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-3">
          <p className="text-[11px] font-mono tracking-[0.4em] uppercase text-nature-leaf">
            BEYOND THE DROP
          </p>
          <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            The Purest Element, <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-nature-leaf">Re-Imagined.</span>
          </h2>
        </div>

        {/* Enter Button for Immediate Cinematic Immersion */}
        <button
          onClick={handleEnter}
          className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-ocean border border-white/20 hover:border-white transition-all text-xs font-mono font-semibold tracking-widest uppercase flex items-center gap-2 shadow-lg group cursor-pointer"
        >
          <span>ENTER EXPERIENCE</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Bottom Status */}
      <div className="text-[10px] font-mono tracking-widest uppercase text-white/40">
        INITIALIZING IMMERSIVE 3D WATER ENGINE • AUDIO READY
      </div>
    </div>
  );
}
