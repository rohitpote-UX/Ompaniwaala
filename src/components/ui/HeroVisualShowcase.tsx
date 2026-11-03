"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { sound } from "@/lib/audio";
import {
  Droplets,
  ShieldCheck,
  Truck,
  Sparkles,
  CheckCircle2,
  Layers,
  ArrowRight,
  Play,
  RotateCw,
} from "lucide-react";

export interface VisualSlide {
  id: string;
  category: string;
  title: string;
  badge: string;
  image: string;
  subtitle: string;
  highlight: string;
}

const VISUAL_SLIDES: VisualSlide[] = [
  {
    id: "jar",
    category: "20L WATER JAR",
    title: "Flagship 20-Litre Pure Water Jar",
    badge: "Most Ordered in Pune",
    image: "/images/hero-jar-20l.jpg",
    subtitle: "BPA-Free Food-Grade Container • Hermetically Sealed Cap",
    highlight: "Tamper-Evident Freshness",
  },
  {
    id: "bottles",
    category: "PACKAGED WATER",
    title: "Crystalline Water Bottles & Splash",
    badge: "Active Hydration",
    image: "/images/hero-bottles-splash.jpg",
    subtitle: "Convenient 500ml & 1000ml Portions • Dynamic Purity",
    highlight: "Multi-Stage Purified",
  },
  {
    id: "supplier",
    category: "DOORSTEP DELIVERY",
    title: "Trusted Delivery Specialists",
    badge: "Scheduled Mornings",
    image: "/images/hero-delivery-supplier.jpg",
    subtitle: "Courteous, Safe Jar Placement • No Heavy Lifting Hassle",
    highlight: "Daily Pune Routes",
  },
  {
    id: "facility",
    category: "HYGIENIC PURIFICATION",
    title: "Automated Cleansing & UV Plant",
    badge: "Medical-Grade Hygiene",
    image: "/images/hero-hygiene-plant.jpg",
    subtitle: "High-Pressure Multi-Cycle Jar Wash & Ultraviolet Clarification",
    highlight: "Automated Quality Control",
  },
];

export default function HeroVisualShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance every 5 seconds if not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % VISUAL_SLIDES.length);
    }, 5200);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeSlide = VISUAL_SLIDES[activeIndex];

  const handleSelect = (idx: number) => {
    sound.playDrop();
    setActiveIndex(idx);
  };

  return (
    <div
      className="relative w-full h-full min-h-[500px] lg:min-h-[620px] flex flex-col justify-center items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Organic Fluid Background Caustic Halos (Zero Sharp Rectangles) */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-ocean-bright/20 via-nature/15 to-sky-300/20 blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-ocean-tint/50 blur-2xl pointer-events-none" />

      {/* 2. Main Centerpiece: Organic Curved Floating Stage (No Sharp Corners) */}
      <div className="relative w-full max-w-[500px] aspect-[4/3.8] rounded-[3.2rem] p-3 sm:p-4 bg-gradient-to-b from-white/90 via-white/80 to-ocean-tint/80 backdrop-blur-xl border border-white/60 shadow-[0_20px_60px_-15px_rgba(7,59,120,0.18)] flex flex-col justify-between overflow-hidden group">
        {/* Animated Ambient Ring */}
        <div className="absolute inset-0 rounded-[3.2rem] border border-ocean-bright/20 pointer-events-none" />
        
        {/* Image Container with Organic Deep-Curved Cutout */}
        <div className="relative w-full flex-1 rounded-[2.6rem] overflow-hidden shadow-inner">
          <Image
            src={activeSlide.image}
            alt={activeSlide.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Gentle Gradient Scrim for Editorial Typography */}
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/85 via-ocean-deep/20 to-transparent pointer-events-none" />

          {/* Top Pill: Category & Badge (No sharp borders) */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-mono font-bold tracking-wider uppercase text-ocean shadow-md">
              {activeSlide.category}
            </span>

            <span className="px-3.5 py-1.5 rounded-full bg-nature text-white text-[11px] font-medium tracking-wide shadow-md flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              {activeSlide.badge}
            </span>
          </div>

          {/* Bottom Card Copy */}
          <div className="absolute bottom-4 left-5 right-5 text-white pointer-events-none">
            <div className="flex items-center gap-2 text-nature-leaf text-xs font-mono font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-nature-leaf" />
              <span>{activeSlide.highlight}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-white leading-tight">
              {activeSlide.title}
            </h3>
            <p className="text-xs text-white/80 mt-1 line-clamp-1">
              {activeSlide.subtitle}
            </p>
          </div>
        </div>

        {/* 3. Floating Thumbnail Navigation Pills (Organic Rounded-Full) */}
        <div className="pt-3 pb-1 px-2 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          {VISUAL_SLIDES.map((slide, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={slide.id}
                onClick={() => handleSelect(idx)}
                className={`relative flex items-center gap-2 px-3.5 py-2 rounded-full transition-all duration-300 text-xs font-medium cursor-pointer ${
                  isSelected
                    ? "bg-ocean text-white shadow-md scale-105"
                    : "bg-white/80 hover:bg-white text-slate-700 hover:text-ocean border border-slate-200/60"
                }`}
              >
                <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 border border-white/40">
                  <Image
                    src={slide.image}
                    alt={slide.category}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="hidden sm:inline font-mono text-[11px] tracking-wider uppercase">
                  {slide.id === "jar" ? "20L Jar" : slide.id === "bottles" ? "Bottles" : slide.id === "supplier" ? "Delivery" : "Hygiene"}
                </span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-nature animate-pulse-subtle" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Satellite Floating Organic Orbit Badges (No sharp rectangles) */}
      <div className="hidden sm:flex absolute -top-3 -right-3 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg items-center gap-2 text-xs font-semibold text-ocean animate-float-gentle">
        <ShieldCheck className="w-4 h-4 text-nature shrink-0" />
        <span>100% Sealed Tamper Cap</span>
      </div>

      <div className="hidden sm:flex absolute -bottom-3 -left-3 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg items-center gap-2 text-xs font-semibold text-ocean animate-float-gentle" style={{ animationDelay: "1.5s" }}>
        <Truck className="w-4 h-4 text-ocean-bright shrink-0" />
        <span>Pune Route Morning Dispatch</span>
      </div>
    </div>
  );
}

