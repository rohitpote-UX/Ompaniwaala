"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Droplets, Sparkles, Truck } from "lucide-react";

const CAPABILITIES = [
  {
    step: "01",
    title: "Multi-Media Sand & Carbon",
    subtitle: "Origin Clarification",
    description: "Eliminates physical suspended particulates, chlorine residue, and organic turbidity to render origin water crystal clear.",
    icon: Droplets,
  },
  {
    step: "02",
    title: "High-Pressure Reverse Osmosis",
    subtitle: "Mineral Balance",
    description: "Multi-stage membrane filtration removing heavy dissolved solids, excess fluorides, and micro-contaminants at the molecular scale.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Dual UV & Ozonation",
    subtitle: "Zero-Chemical Sterilization",
    description: "Intense ultraviolet radiation followed by pure oxygen-rich ozone infusion guarantees zero microbiological pathogens.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Touchless Hermetic Bottling",
    subtitle: "Sealed Integrity",
    description: "High-speed automated washing, steam sanitizing, filling, and tamper-proof thermal cap sealing without human intervention.",
    icon: Truck,
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative w-full bg-canvas text-navy py-28 sm:py-36 lg:py-44"
    >
      <div className="container-custom">
        {/* Section Header with Generous White Spacing */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <span className="text-stellar-label text-navy/50 uppercase tracking-[0.2em] font-medium inline-flex items-center gap-2 mb-4 block">
              <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
              Engineering &amp; Standards
            </span>
            <h2 className="text-stellar-h2 font-sans font-medium text-navy tracking-tight leading-[1.08]">
              Our multi-stage{" "}
              <span className="font-accent-italic font-normal italic text-ocean">
                purity standard
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-navy/70 max-w-md leading-relaxed font-normal">
            Precision engineering at every checkpoint ensures certified mineral balance, zero contaminants, and pristine taste in every sip.
          </p>
        </div>

        {/* 4-Step Grid with Generous Padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.step}
                className="group flex flex-col justify-between bg-white rounded-2xl p-8 border border-navy/10 hover:border-navy/20 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-navy/10">
                    <span className="text-xs font-mono font-semibold text-aqua tracking-widest uppercase">
                      STEP {cap.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-sky-subtle flex items-center justify-center text-navy group-hover:bg-aqua group-hover:text-white transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-sans font-medium text-navy tracking-tight group-hover:text-ocean transition-colors">
                    {cap.title}
                  </h3>
                  <span className="text-xs uppercase font-sans tracking-[0.14em] text-navy/50 font-semibold block mt-1">
                    {cap.subtitle}
                  </span>

                  <p className="mt-4 text-sm text-navy/70 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
