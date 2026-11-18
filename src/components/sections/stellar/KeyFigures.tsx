"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const BASE_STATS = [
  {
    number: "24/7",
    label: "Operating Availability",
    description: "Listed as open 24 hours on Google Business Profile to support water needs.",
  },
  {
    number: "12",
    label: "Google Business Reviews",
    description: "Verified customer feedback and recommendations from local Pune clients.",
  },
  {
    number: "4.6★",
    label: "Customer Rating",
    description: "Rated on Google Business Profile for clean jars and prompt, courteous service.",
  },
  {
    number: "20L",
    label: "Dedicated Water Jars",
    description: "Specialized in supplying standard hygienic 20-litre drinking water jars.",
  },
];

export default function KeyFigures() {
  const { t } = useLanguage();

  const stats = BASE_STATS.map((stat, idx) => ({
    number: t.keyFigures.stats[idx]?.value || stat.number,
    label: t.keyFigures.stats[idx]?.label || stat.label,
    description: t.keyFigures.stats[idx]?.desc || stat.description,
  }));

  return (
    <section className="relative w-full bg-white text-navy py-24 sm:py-32 lg:py-36 border-y border-navy/5">
      <div className="container-custom">
        {/* Section Label */}
        <div className="mb-12 sm:mb-16">
          <span className="text-stellar-label text-navy/50 uppercase tracking-[0.2em] font-medium inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
            {t.keyFigures.label}
          </span>
        </div>

        {/* 4 Column Figures Grid with Generous Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
          {stats.map((stat, idx) => (
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
