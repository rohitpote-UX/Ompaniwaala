"use client";

import React from "react";
import Image from "next/image";
import PillButton from "@/components/ui/PillButton";
import { BRAND_CONFIG } from "@/config/brand";

export default function AboutEditorial() {
  return (
    <section className="relative w-full bg-white text-navy py-28 sm:py-36 lg:py-44 border-t border-navy/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Large Image Left */}
          <div className="lg:col-span-6 relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-delivery-supplier.jpg"
              alt="KALASH Water Distribution Operations Pune"
              fill
              sizes="(max-width: 1024px) 100vw, 650px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Small corner badge */}
            <div className="absolute bottom-6 left-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg max-w-xs">
              <span className="text-[11px] font-sans uppercase tracking-[0.16em] text-navy/60 font-semibold block">
                PUNE LOGISTICS HEADQUARTERS
              </span>
              <p className="mt-1 text-xs text-navy/80 font-medium leading-relaxed">
                Over 12,500 families and corporate teams depend on our disciplined morning supply routes.
              </p>
            </div>
          </div>

          {/* Editorial Text Right with Generous White Spacing */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-stellar-label text-navy/50 uppercase tracking-[0.2em] font-medium inline-flex items-center gap-2 mb-4 block">
              <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
              Our Commitment
            </span>

            <h2 className="text-stellar-h2 font-sans font-medium text-navy tracking-tight leading-[1.08]">
              A standard Pune families rely on every{" "}
              <span className="font-accent-italic font-normal italic text-ocean">
                morning
              </span>
            </h2>

            <div className="mt-8 space-y-6 text-base sm:text-lg text-navy/75 leading-relaxed font-normal">
              <p>
                Founded in {BRAND_CONFIG.foundedYear}, KALASH was conceived with a single non-negotiable philosophy: drinking water is the foundation of daily vitality, and no home or business should ever compromise on purity or dependability.
              </p>
              <p>
                Unlike generic water suppliers, every single KALASH jar undergoes hospital-grade automated sanitization, multi-barrier purification, and touchless hermetic cap sealing before being dispatched on dedicated GPS-routed vehicles across Pune.
              </p>
            </div>

            {/* Signature Metrics Row */}
            <div className="mt-10 pt-8 border-t border-navy/10 grid grid-cols-2 gap-8">
              <div>
                <span className="text-3xl sm:text-4xl font-sans font-semibold text-navy block">
                  100%
                </span>
                <span className="mt-1 text-xs sm:text-sm text-navy/60 uppercase tracking-wider block font-medium">
                  Food-Grade BPA-Free Jars
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-sans font-semibold text-navy block">
                  6:00 AM
                </span>
                <span className="mt-1 text-xs sm:text-sm text-navy/60 uppercase tracking-wider block font-medium">
                  Guaranteed Daily Delivery
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <PillButton
                href="/our-story"
                variant="navy"
                size="lg"
                showArrow
              >
                Discover our heritage
              </PillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
