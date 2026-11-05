"use client";

import React from "react";

const STATS = [
  {
    number: "12,500+",
    label: "Jars Supplied Daily",
    description: "Reliable drinking water routed across residential & corporate Pune.",
  },
  {
    number: "100%",
    label: "Automated Sanitization",
    description: "Multi-stage medical grade purification without manual touch.",
  },
  {
    number: "45 Min",
    label: "Scheduled Route Dispatch",
    description: "Punctual morning deliveries before households start their day.",
  },
  {
    number: "99.8%",
    label: "Customer Retention",
    description: "Long-standing trust with corporate towers and housing societies.",
  },
];

export default function KeyFigures() {
  return (
    <section className="relative w-full bg-white text-navy py-24 sm:py-32 lg:py-36 border-y border-navy/5">
      <div className="container-custom">
        {/* Section Label */}
        <div className="mb-12 sm:mb-16">
          <span className="text-stellar-label text-navy/50 uppercase tracking-[0.2em] font-medium inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
            Performance &amp; Scale
          </span>
        </div>

        {/* 4 Column Figures Grid with Generous Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="flex flex-col justify-between pt-6 border-t border-navy/10 group"
            >
              <div>
                <span className="text-[clamp(44px,5.5vw,72px)] font-sans font-semibold tracking-[-0.03em] leading-none text-navy block group-hover:text-ocean transition-colors duration-300">
                  {stat.number}
                </span>
                <h4 className="mt-4 text-base sm:text-lg font-sans font-medium text-navy tracking-tight">
                  {stat.label}
                </h4>
              </div>

              <p className="mt-3 text-sm text-navy/65 leading-relaxed font-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
