"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PillButton from "@/components/ui/PillButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhatWeDoStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const img1Ref = useRef<HTMLSpanElement>(null);
  const img2Ref = useRef<HTMLSpanElement>(null);
  const img3Ref = useRef<HTMLSpanElement>(null);
  const subcopyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      return;
    }

    const ctx = gsap.context(() => {
      if (!containerRef.current || !textRef.current) return;

      const words = textRef.current.querySelectorAll(".scrub-word");
      const inlineImages = [img1Ref.current, img2Ref.current, img3Ref.current].filter(Boolean);

      // Set initial states
      gsap.set(words, { opacity: 0.15 });
      gsap.set(inlineImages, { scale: 0.2, opacity: 0 });

      // Scroll scrub timeline
      const scrubTl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          end: "bottom 35%",
          scrub: 0.75,
        },
      });

      // Words light up progressively
      scrubTl.to(
        words,
        {
          opacity: 1,
          stagger: 0.04,
          ease: "none",
        },
        0
      );

      // Inline images expand as scroll reaches them
      if (img1Ref.current) {
        scrubTl.to(
          img1Ref.current,
          {
            scale: 1,
            opacity: 1,
            ease: "back.out(1.6)",
            duration: 0.2,
          },
          0.1
        );
      }

      if (img2Ref.current) {
        scrubTl.to(
          img2Ref.current,
          {
            scale: 1,
            opacity: 1,
            ease: "back.out(1.6)",
            duration: 0.2,
          },
          0.28
        );
      }

      if (img3Ref.current) {
        scrubTl.to(
          img3Ref.current,
          {
            scale: 1,
            opacity: 1,
            ease: "back.out(1.6)",
            duration: 0.2,
          },
          0.52
        );
      }

      // Supporting subcopy reveals on entry
      if (subcopyRef.current) {
        gsap.fromTo(
          subcopyRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: subcopyRef.current,
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
      className="relative w-full bg-canvas text-navy py-24 sm:py-32 lg:py-40 transition-colors"
    >
      <div className="section-gutter max-w-[1440px] mx-auto">
        {/* Editorial Section Label */}
        <div className="mb-8 sm:mb-14">
          <span className="text-stellar-label text-navy/55 uppercase font-medium tracking-[0.2em] inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
            What we do
          </span>
        </div>

        {/* Master Large Paragraph Heading with Inline Images */}
        <h2
          ref={textRef}
          className="text-stellar-h2 font-sans font-medium text-navy leading-[1.28] sm:leading-[1.22] tracking-tight max-w-6xl selection:bg-aqua/20"
        >
          {/* "From purified [img1] source to sealed [img2] jars, we deliver the water where families live, work [img3] & thrive." */}
          <span className="scrub-word inline-block mr-2 sm:mr-3">From</span>
          <span className="scrub-word inline-block mr-2 sm:mr-3 font-accent-italic font-normal italic text-ocean">
            purified
          </span>

          {/* Inline Image 1: Water Source */}
          <span
            ref={img1Ref}
            className="inline-block relative overflow-hidden align-middle rounded-full mx-1.5 sm:mx-2.5 shadow-md border border-navy/10 w-[2.2em] sm:w-[2.5em] h-[1.32em] sm:h-[1.4em] -rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105"
          >
            <Image
              src="/images/inline-source.jpg"
              alt="Purified Source Water"
              fill
              sizes="120px"
              className="object-cover"
            />
          </span>

          <span className="scrub-word inline-block mr-2 sm:mr-3">source</span>
          <span className="scrub-word inline-block mr-2 sm:mr-3">to</span>
          <span className="scrub-word inline-block mr-2 sm:mr-3 font-accent-italic font-normal italic text-ocean">
            sealed
          </span>

          {/* Inline Image 2: Sealed Jar */}
          <span
            ref={img2Ref}
            className="inline-block relative overflow-hidden align-middle rounded-full mx-1.5 sm:mx-2.5 shadow-md border border-navy/10 w-[2.2em] sm:w-[2.5em] h-[1.32em] sm:h-[1.4em] rotate-2 transition-transform duration-300 hover:rotate-0 hover:scale-105"
          >
            <Image
              src="/images/inline-jar.jpg"
              alt="Sealed Water Jar"
              fill
              sizes="120px"
              className="object-cover"
            />
          </span>

          <span className="scrub-word inline-block mr-2 sm:mr-3">jars,</span>
          <span className="scrub-word inline-block mr-2 sm:mr-3">we</span>
          <span className="scrub-word inline-block mr-2 sm:mr-3">deliver</span>
          <span className="scrub-word inline-block mr-2 sm:mr-3">the</span>
          <span className="scrub-word inline-block mr-2 sm:mr-3">water</span>
          <span className="scrub-word inline-block mr-2 sm:mr-3">where</span>
          <span className="scrub-word inline-block mr-2 sm:mr-3">families</span>
          <span className="scrub-word inline-block mr-2 sm:mr-3">live,</span>
          <span className="scrub-word inline-block mr-2 sm:mr-3">work</span>

          {/* Inline Image 3: Thriving Family / Workplace */}
          <span
            ref={img3Ref}
            className="inline-block relative overflow-hidden align-middle rounded-full mx-1.5 sm:mx-2.5 shadow-md border border-navy/10 w-[2.2em] sm:w-[2.5em] h-[1.32em] sm:h-[1.4em] -rotate-2 transition-transform duration-300 hover:rotate-0 hover:scale-105"
          >
            <Image
              src="/images/inline-family.jpg"
              alt="Families and Workplaces"
              fill
              sizes="120px"
              className="object-cover"
            />
          </span>

          <span className="scrub-word inline-block mr-2 sm:mr-3 font-accent-italic font-normal italic text-ocean">
            &amp;
          </span>
          <span className="scrub-word inline-block">thrive.</span>
        </h2>

        {/* Supporting Editorial Column */}
        <div
          ref={subcopyRef}
          className="mt-14 sm:mt-20 pt-10 sm:pt-14 border-t border-navy/10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline"
        >
          <div className="lg:col-span-4">
            <span className="text-xs uppercase font-sans tracking-[0.16em] text-navy/50 font-semibold block">
              PUNE LOGISTICS &amp; PURITY ASSURANCE
            </span>
            <p className="mt-2 text-sm text-navy/70">
              Serving residential societies, IT hubs, and commercial offices across Pune.
            </p>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-navy/80 leading-relaxed font-normal">
              KALASH redefines everyday drinking water with medical-grade multi-stage purification,
              automated touchless bottling, and disciplined route delivery. No delays, no hygiene compromises.
            </p>
          </div>

          <div className="lg:col-span-3 lg:text-right">
            <PillButton
              href="/our-story"
              variant="outline-navy"
              size="md"
              showArrow
            >
              Explore our story
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
