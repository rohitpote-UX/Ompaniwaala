"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PillButton from "@/components/ui/PillButton";
import { KalashSeal, WaterRipplesBackground, BotanicalFlourish } from "@/components/ui/BrandVectors";
import { ShieldCheck, Truck, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhatWeDoStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const img1Ref = useRef<HTMLSpanElement>(null);
  const img2Ref = useRef<HTMLSpanElement>(null);
  const img3Ref = useRef<HTMLSpanElement>(null);
  const subgridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (!containerRef.current || !textRef.current) return;

      const words = textRef.current.querySelectorAll(".scrub-word");
      const inlineImages = [img1Ref.current, img2Ref.current, img3Ref.current].filter(Boolean);

      // Initial state
      gsap.set(words, { opacity: 0.25 });
      gsap.set(inlineImages, { scale: 0.6, opacity: 0.5 });

      // Progressive scrub timeline
      const scrubTl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          end: "bottom 35%",
          scrub: 0.7,
        },
      });

      // Words progressively illuminate to 100%
      scrubTl.to(
        words,
        {
          opacity: 1,
          stagger: 0.04,
          ease: "none",
        },
        0
      );

      // Inline image capsules smoothly scale up
      if (img1Ref.current) {
        scrubTl.to(img1Ref.current, { scale: 1, opacity: 1, duration: 0.2 }, 0.1);
      }
      if (img2Ref.current) {
        scrubTl.to(img2Ref.current, { scale: 1, opacity: 1, duration: 0.2 }, 0.28);
      }
      if (img3Ref.current) {
        scrubTl.to(img3Ref.current, { scale: 1, opacity: 1, duration: 0.2 }, 0.52);
      }

      // Supporting grid reveals
      if (subgridRef.current) {
        gsap.fromTo(
          subgridRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: subgridRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-canvas text-navy py-28 sm:py-36 lg:py-48 overflow-hidden transition-colors"
    >
      {/* Background Concentric Vector Ripples */}
      <WaterRipplesBackground />

      <div className="container-custom relative z-10">
        {/* Top Header Badge & Flourish */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white shadow-sm border border-navy/10 text-navy text-xs font-sans uppercase tracking-[0.2em] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
            <span>WHAT WE DO</span>
          </div>
          <BotanicalFlourish className="opacity-75" />
        </div>

        {/* Master Large Editorial Statement (Balanced & Centered) */}
        <div className="max-w-5xl mx-auto text-center">
          <h2
            ref={textRef}
            className="text-[clamp(32px,4.5vw,68px)] font-sans font-medium text-navy leading-[1.32] sm:leading-[1.24] tracking-[-0.03em] text-balance selection:bg-aqua/20"
          >
            <span className="scrub-word inline-block mr-2 sm:mr-3.5">From</span>
            <span className="scrub-word inline-block mr-2 sm:mr-3.5 font-accent-italic font-normal italic text-ocean">
              purified
            </span>

            {/* Inline Capsule 1: Pure Water Source */}
            <span
              ref={img1Ref}
              className="inline-flex relative overflow-hidden align-middle rounded-full mx-2 sm:mx-3 shadow-md border-2 border-white ring-1 ring-navy/15 w-[2.4em] sm:w-[2.8em] h-[1.36em] sm:h-[1.46em] transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/images/water-ripple-crystal.jpg"
                alt="Purified Water Source"
                fill
                sizes="140px"
                className="object-cover"
              />
            </span>

            <span className="scrub-word inline-block mr-2 sm:mr-3.5">source</span>
            <span className="scrub-word inline-block mr-2 sm:mr-3.5">to</span>
            <span className="scrub-word inline-block mr-2 sm:mr-3.5 font-accent-italic font-normal italic text-ocean">
              sealed
            </span>

            {/* Inline Capsule 2: Sealed 20L Jar */}
            <span
              ref={img2Ref}
              className="inline-flex relative overflow-hidden align-middle rounded-full mx-2 sm:mx-3 shadow-md border-2 border-white ring-1 ring-navy/15 w-[2.4em] sm:w-[2.8em] h-[1.36em] sm:h-[1.46em] transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/images/hero-jar-20l.jpg"
                alt="Sealed Water Jar"
                fill
                sizes="140px"
                className="object-cover"
              />
            </span>

            <span className="scrub-word inline-block mr-2 sm:mr-3.5">jars,</span>
            <span className="scrub-word inline-block mr-2 sm:mr-3.5">we</span>
            <span className="scrub-word inline-block mr-2 sm:mr-3.5">deliver</span>
            <span className="scrub-word inline-block mr-2 sm:mr-3.5">the</span>
            <span className="scrub-word inline-block mr-2 sm:mr-3.5">water</span>
            <span className="scrub-word inline-block mr-2 sm:mr-3.5">where</span>
            <span className="scrub-word inline-block mr-2 sm:mr-3.5">families</span>
            <span className="scrub-word inline-block mr-2 sm:mr-3.5">live,</span>
            <span className="scrub-word inline-block mr-2 sm:mr-3.5">work</span>

            {/* Inline Capsule 3: Thriving Communities */}
            <span
              ref={img3Ref}
              className="inline-flex relative overflow-hidden align-middle rounded-full mx-2 sm:mx-3 shadow-md border-2 border-white ring-1 ring-navy/15 w-[2.4em] sm:w-[2.8em] h-[1.36em] sm:h-[1.46em] transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/images/hero-delivery-supplier.jpg"
                alt="Thriving Families & Workplaces"
                fill
                sizes="140px"
                className="object-cover"
              />
            </span>

            <span className="scrub-word inline-block mr-2 sm:mr-3.5 font-accent-italic font-normal italic text-ocean">
              &amp;
            </span>
            <span className="scrub-word inline-block font-accent-italic font-normal italic text-ocean">
              thrive.
            </span>
          </h2>
        </div>

        {/* Supporting 3-Column Editorial Grid with Custom Brand Vectors & Details */}
        <div
          ref={subgridRef}
          className="mt-20 sm:mt-28 pt-14 sm:pt-18 border-t border-navy/10 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14"
        >
          {/* Col 1 */}
          <div className="p-8 rounded-2xl bg-white shadow-sm border border-navy/5 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-subtle flex items-center justify-center text-ocean mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-sans tracking-[0.18em] text-navy/50 font-semibold block mb-2">
                PURIFICATION STANDARD
              </span>
              <h3 className="text-xl font-sans font-medium text-navy tracking-tight">
                10-Stage Hospital Grade
              </h3>
              <p className="mt-3 text-sm text-navy/70 leading-relaxed">
                Multi-media filtration, molecular Reverse Osmosis, and continuous UV/Ozone sterilization guarantee zero biological contaminants.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-navy/5 text-xs text-aqua font-semibold">
              Certified TDS Balance • ISO Standards
            </div>
          </div>

          {/* Col 2 */}
          <div className="p-8 rounded-2xl bg-white shadow-sm border border-navy/5 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-subtle flex items-center justify-center text-ocean mb-6">
                <Truck className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-sans tracking-[0.18em] text-navy/50 font-semibold block mb-2">
                PUNE LOGISTICS ROUTE
              </span>
              <h3 className="text-xl font-sans font-medium text-navy tracking-tight">
                Scheduled Daily Supply
              </h3>
              <p className="mt-3 text-sm text-navy/70 leading-relaxed">
                Dedicated GPS delivery routes serving residential high-rises, gated communities, and tech campuses across Pune before 9:00 AM.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-navy/5 text-xs text-aqua font-semibold">
              Baner • Hinjawadi • Kharadi • Kothrud
            </div>
          </div>

          {/* Col 3 */}
          <div className="p-8 rounded-2xl bg-white shadow-sm border border-navy/5 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-subtle flex items-center justify-center text-ocean mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-sans tracking-[0.18em] text-navy/50 font-semibold block mb-2">
                HYGIENE GUARANTEE
              </span>
              <h3 className="text-xl font-sans font-medium text-navy tracking-tight">
                Touchless Hermetic Cap
              </h3>
              <p className="mt-3 text-sm text-navy/70 leading-relaxed">
                Food-grade BPA-free polycarbonate jars hermetically sealed with tamper-evident heat seals, washed automatically before every refill.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-navy/5 text-xs text-aqua font-semibold">
              100% Recyclable • Tamper Evident
            </div>
          </div>
        </div>

        {/* Circular Seal & Action Callout */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-8 pt-10 border-t border-navy/10">
          <div className="flex items-center gap-6">
            <KalashSeal size={96} />
            <div>
              <span className="text-sm font-sans font-medium text-navy block">
                KALASH Certified Purity Assurance
              </span>
              <span className="text-xs text-navy/60 block">
                Trusted by 12,500+ households and corporate facilities across Pune.
              </span>
            </div>
          </div>

          <PillButton
            href="/our-story"
            variant="navy"
            size="md"
            showArrow
          >
            Explore our heritage
          </PillButton>
        </div>
      </div>
    </section>
  );
}
