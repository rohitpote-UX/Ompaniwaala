"use client";

import React from "react";
import PillButton from "@/components/ui/PillButton";
import { CONTACT_CONFIG } from "@/config/contact";
import { Phone, MessageSquare } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative w-full bg-navy text-white py-28 sm:py-36 lg:py-44 overflow-hidden">
      {/* Subtle ambient water illumination glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-aqua/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-sky/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
        {/* Top Label */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-sans uppercase tracking-[0.16em]">
          <span className="w-1.5 h-1.5 rounded-full bg-aqua animate-pulse" />
          <span>Immediate Route Activation</span>
        </div>

        {/* Master CTA Heading with Italic Accent */}
        <h2 className="text-[clamp(38px,5.8vw,80px)] font-sans font-medium text-white tracking-tight leading-[1.05] text-balance">
          Pure water for your family &amp; workplace. Delivered{" "}
          <span className="font-accent-italic font-normal italic text-sky inline-block">
            fresh.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-8 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-normal text-balance">
          Experience punctual recurring supply, sanitised food-grade 20L jars, and responsive customer service across Pune with zero delivery charges.
        </p>

        {/* Action Buttons with Text-Swap */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <PillButton
            href="/contact"
            variant="white"
            size="lg"
            showArrow
          >
            Order water now
          </PillButton>

          <a
            href={CONTACT_CONFIG.whatsappMessageTemplate()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white text-sm font-sans font-medium uppercase tracking-caps hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 text-aqua" />
            <span>WhatsApp Quick Order</span>
          </a>
        </div>
      </div>
    </section>
  );
}
