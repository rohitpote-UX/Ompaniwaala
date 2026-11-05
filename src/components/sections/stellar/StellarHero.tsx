"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { BRAND_CONFIG } from "@/config/brand";
import { ArrowUpRight } from "lucide-react";
import PillButton from "@/components/ui/PillButton";
import { cn } from "@/lib/utils";

export default function StellarHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const videoCityRef = useRef<HTMLVideoElement>(null);
  const videoPourRef = useRef<HTMLVideoElement>(null);

  // Dual-video state: alternates between City Architecture and Liquid Pour
  const [activeVideo, setActiveVideo] = useState<"city" | "pour">("city");

  // Auto-cycle between the two videos every 12 seconds with smooth crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev === "city" ? "pour" : "city"));
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  // Sync play states when video changes
  useEffect(() => {
    if (activeVideo === "city") {
      videoCityRef.current?.play().catch(() => {});
    } else {
      videoPourRef.current?.play().catch(() => {});
    }
  }, [activeVideo]);

  // Entrance animations matching Stellar reference
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll(".hero-line");
        tl.fromTo(
          lines,
          { y: "115%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1.1, stagger: 0.12 },
          0.3
        );
      }

      if (sublineRef.current) {
        tl.fromTo(
          sublineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.8
        );
      }

      if (cardRef.current) {
        tl.fromTo(
          cardRef.current,
          { opacity: 0, y: 40, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" },
          0.65
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[100dvh] min-h-[720px] flex flex-col justify-between overflow-hidden bg-navy text-white"
    >
      {/* 1. Dual-Video Ambient Background (City Architecture & Liquid Pour) */}
      <div className="absolute inset-0 z-0">
        {/* Video 1: City Building Architecture */}
        <video
          ref={videoCityRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-city-poster.jpg"
          className={cn(
            "absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out",
            activeVideo === "city" ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <source src="/videos/hero-city.mp4" type="video/mp4" />
        </video>

        {/* Video 2: Refreshing Liquid / Drink Pour */}
        <video
          ref={videoPourRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-pour-poster.jpg"
          className={cn(
            "absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out",
            activeVideo === "pour" ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <source src="/videos/hero-pour.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Gradient Overlays for High Typographic Contrast (Exact reference mood) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 pointer-events-none z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent pointer-events-none z-20" />
      </div>

      {/* 2. Top-Right Video Ambient Switcher */}
      <div className="absolute top-24 sm:top-28 right-8 sm:right-12 lg:right-16 z-30">
        <div className="inline-flex items-center gap-1 p-1 rounded-full bg-black/45 backdrop-blur-md border border-white/15 shadow-lg">
          <button
            onClick={() => setActiveVideo("city")}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-[11px] font-sans uppercase tracking-[0.12em] transition-all duration-300",
              activeVideo === "city"
                ? "bg-white text-navy font-semibold shadow-md"
                : "text-white/70 hover:text-white"
            )}
            aria-label="Switch to City Architecture Video"
          >
            City View
          </button>
          <button
            onClick={() => setActiveVideo("pour")}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-[11px] font-sans uppercase tracking-[0.12em] transition-all duration-300",
              activeVideo === "pour"
                ? "bg-white text-navy font-semibold shadow-md"
                : "text-white/70 hover:text-white"
            )}
            aria-label="Switch to Pure Pour Video"
          >
            Pure Pour
          </button>
        </div>
      </div>

      {/* 3. Expansive Upper White Space (Breathing Room for Skyline & Fixed Nav) */}
      <div className="w-full flex-1 pointer-events-none" />

      {/* 4. Lower Third Hero Content (Exact layout matching the Stellar reference image) */}
      <div className="relative z-30 w-full px-8 sm:px-12 lg:px-16 pb-12 sm:pb-16 max-w-[1560px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16">
          {/* Left Column: Master Editorial H1 & Subline */}
          <div className="max-w-2xl">
            <h1
              ref={headlineRef}
              className="text-[clamp(44px,6.4vw,94px)] font-sans font-medium tracking-[-0.035em] leading-[0.98] text-white text-balance"
            >
              <span className="block overflow-hidden py-0.5">
                <span className="hero-line block will-change-transform">
                  We deliver
                </span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <span className="hero-line block will-change-transform">
                  Pune&apos;s purest
                </span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <span className="hero-line block will-change-transform">
                  drinking{" "}
                  <span className="font-accent-italic font-normal italic text-white/95 inline-block">
                    water
                  </span>
                </span>
              </span>
            </h1>

            {/* Subline directly below H1 */}
            <p
              ref={sublineRef}
              className="mt-6 sm:mt-7 text-white/85 text-[15px] sm:text-[16px] max-w-lg leading-relaxed font-normal"
            >
              Since {BRAND_CONFIG.foundedYear}, purifying, bottling, distributing &amp; living dependable hydration across {BRAND_CONFIG.market.city}.
            </p>
          </div>

          {/* Right Column: Floating Docked Widget Card (Exact match to reference photo) */}
          <div
            ref={cardRef}
            className="w-full sm:w-[340px] shrink-0"
          >
            <div className="p-3.5 sm:p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col gap-3 transition-transform duration-300 hover:border-white/30">
              {/* Thumbnail Image with Top-Right Arrow */}
              <Link
                href="/products"
                className="group relative w-full aspect-[16/10] rounded-xl overflow-hidden block"
              >
                <Image
                  src="/images/card-corporate.jpg"
                  alt="Pune Water Supply Team"
                  fill
                  sizes="340px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/50 backdrop-blur-md text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              {/* Card Meta & Title */}
              <div className="px-1 pt-1">
                <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-white/60 font-medium block">
                  Daily Doorstep Supply
                </span>
                <h3 className="mt-1 text-sm sm:text-[15px] font-medium text-white leading-snug">
                  Hygienic 20L Water Jars Delivered Daily to Your Door
                </h3>
              </div>

              {/* Wide Solid White Pill Button (Matching "Rent now" in reference photo) */}
              <div className="pt-1">
                <PillButton
                  href="/contact"
                  variant="white"
                  size="md"
                  className="w-full text-center py-3.5 justify-center shadow-lg"
                >
                  Order now
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
