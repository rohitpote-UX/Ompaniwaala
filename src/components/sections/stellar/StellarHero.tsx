"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { BRAND_CONFIG } from "@/config/brand";
import { ArrowUpRight } from "lucide-react";
import PillButton from "@/components/ui/PillButton";

const HERO_FEATURE_CARDS = [
  {
    title: "Our Process",
    subtitle: "Automated multi-stage purification & sealed hygiene.",
    image: "/images/card-process.jpg",
    href: "/#capabilities",
  },
  {
    title: "Bulk & Corporate Supply",
    subtitle: "Scheduled daily hydration for IT hubs & workplaces.",
    image: "/images/card-corporate.jpg",
    href: "/products",
  },
  {
    title: "New: Dispenser Rental",
    subtitle: "Hot & cold dispensers with complimentary monthly servicing.",
    image: "/images/card-dispenser.jpg",
    href: "/products#accessories",
  },
];

export default function StellarHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const accentWordRef = useRef<HTMLSpanElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      return;
    }

    const ctx = gsap.context(() => {
      // Hero entry timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Background image subtle cinematic scale down
      if (bgImageRef.current) {
        tl.fromTo(
          bgImageRef.current,
          { scale: 1.12, opacity: 0.6 },
          { scale: 1, opacity: 1, duration: 2.2, ease: "power2.out" },
          0
        );
      }

      // 2. Small Founded label
      if (labelRef.current) {
        tl.fromTo(
          labelRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.3
        );
      }

      // 3. Masked H1 lines
      if (line1Ref.current && line2Ref.current) {
        tl.fromTo(
          [line1Ref.current, line2Ref.current],
          { y: "115%" },
          { y: "0%", duration: 1.1, stagger: 0.12 },
          0.45
        );
      }

      // 4. Accent italic word flourish
      if (accentWordRef.current) {
        tl.fromTo(
          accentWordRef.current,
          { opacity: 0, scale: 0.92, rotate: -2 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.9, ease: "back.out(1.4)" },
          0.9
        );
      }

      // 5. Subline & CTA button
      if (sublineRef.current) {
        tl.fromTo(
          sublineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.95
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          1.05
        );
      }

      // 6. Bottom 3 feature cards slide up with stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        tl.fromTo(
          cards,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.14, ease: "power3.out" },
          1.15
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen h-[100dvh] flex flex-col justify-between overflow-hidden bg-navy text-white"
    >
      {/* Background Media with Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div ref={bgImageRef} className="relative w-full h-full">
          <Image
            src="/images/hero-video-poster.jpg"
            alt="Pure Water Jar Supply Kalash Pune"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Sophisticated Editorial Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/30 to-transparent pointer-events-none" />
      </div>

      {/* Top Spacer to account for fixed header */}
      <div className="h-28 sm:h-32 shrink-0 pointer-events-none" />

      {/* Hero Center Editorial Copy */}
      <div className="relative z-10 section-gutter max-w-[1440px] w-full mx-auto my-auto py-4 sm:py-6">
        {/* Small Capsule Label */}
        <div
          ref={labelRef}
          className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-[11px] sm:text-xs font-sans uppercase tracking-[0.15em]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-aqua animate-pulse" />
          <span>Since {BRAND_CONFIG.foundedYear} • {BRAND_CONFIG.market.city}, India</span>
        </div>

        {/* Master H1 with Masked Lines & Italic Accent Word */}
        <h1 className="text-stellar-hero font-sans font-semibold tracking-[-0.03em] leading-[1.04] text-white max-w-4xl text-balance">
          <span className="block overflow-hidden py-1">
            <span ref={line1Ref} className="block will-change-transform">
              Pure water,
            </span>
          </span>
          <span className="block overflow-hidden py-1">
            <span ref={line2Ref} className="block will-change-transform">
              delivered{" "}
              <span
                ref={accentWordRef}
                className="font-accent-italic font-normal italic text-sky inline-block"
              >
                fresh
              </span>
            </span>
          </span>
        </h1>

        {/* Subline */}
        <p
          ref={sublineRef}
          className="mt-6 sm:mt-8 text-white/80 text-stellar-body max-w-xl font-normal leading-relaxed text-balance"
        >
          Dependable 20-litre water jar supply and tailored hydration solutions
          for homes and corporate workspaces across Pune.
        </p>

        {/* Hero Pill CTA */}
        <div ref={ctaRef} className="mt-8 sm:mt-10 flex items-center gap-4">
          <PillButton href="/contact" variant="white" size="lg" showArrow>
            Order now
          </PillButton>
          <PillButton
            href="/our-story"
            variant="outline-white"
            size="lg"
            className="hidden sm:inline-flex"
          >
            Our Story
          </PillButton>
        </div>
      </div>

      {/* Bottom Feature Cards (3 horizontal cards matching Stellar Management) */}
      <div className="relative z-10 section-gutter max-w-[1440px] w-full mx-auto pb-6 sm:pb-8">
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
        >
          {HERO_FEATURE_CARDS.map((card, idx) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative flex items-center gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all duration-300 shadow-lg"
            >
              {/* Thumbnail Image with Zoom */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg sm:rounded-xl overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              {/* Card Text */}
              <div className="flex-1 min-w-0 pr-2">
                <div className="flex items-center justify-between gap-1">
                  <h3 className="text-sm sm:text-base font-sans font-medium text-white group-hover:text-sky transition-colors truncate">
                    {card.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>
                <p className="mt-1 text-xs text-white/70 line-clamp-2 leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
