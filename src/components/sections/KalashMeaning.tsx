"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { BRAND_CONFIG } from "@/config/brand";
import { Droplet, Sprout, Waves, Shield, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function KalashMeaning() {
  const [activeElement, setActiveElement] = useState<"vessel" | "droplet" | "leaves" | "flow">("vessel");

  const elements = [
    {
      id: "vessel" as const,
      title: BRAND_CONFIG.meaning.vessel.title,
      subtitle: BRAND_CONFIG.meaning.vessel.subtitle,
      description: BRAND_CONFIG.meaning.vessel.description,
      icon: Shield,
      accent: "from-blue-600 to-ocean",
    },
    {
      id: "droplet" as const,
      title: BRAND_CONFIG.meaning.droplet.title,
      subtitle: BRAND_CONFIG.meaning.droplet.subtitle,
      description: BRAND_CONFIG.meaning.droplet.description,
      icon: Droplet,
      accent: "from-cyan-500 to-blue-600",
    },
    {
      id: "leaves" as const,
      title: BRAND_CONFIG.meaning.leaves.title,
      subtitle: BRAND_CONFIG.meaning.leaves.subtitle,
      description: BRAND_CONFIG.meaning.leaves.description,
      icon: Sprout,
      accent: "from-nature-leaf to-nature",
    },
    {
      id: "flow" as const,
      title: BRAND_CONFIG.meaning.flow.title,
      subtitle: BRAND_CONFIG.meaning.flow.subtitle,
      description: BRAND_CONFIG.meaning.flow.description,
      icon: Waves,
      accent: "from-ocean-bright to-ocean-deep",
    },
  ];

  return (
    <section id="meaning" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          overline="Symbolic Heritage"
          title="THE MEANING OF KALASH."
          subtitle="The identity draws timeless inspiration from the Indian Kalash — a sacred vessel associated with water, life, abundance, and domestic wellness, re-imagined for modern everyday hydration."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: The High-Fidelity Emblem in an Art-Directed Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square p-8 rounded-3xl bg-gradient-to-b from-ocean-tint to-white border border-ocean-light/80 shadow-lg flex items-center justify-center group">
              {/* Concentric subtle rings */}
              <div className="absolute inset-4 rounded-full border border-ocean/10 animate-pulse-subtle" />
              <div className="absolute inset-12 rounded-full border border-nature/15" />

              <div className="relative w-56 h-56 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/brand/kalash-emblem.png"
                  alt="KALASH Emblem Geometry"
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>

              {/* Caption pill */}
              <div className="absolute -bottom-4 px-5 py-2 rounded-full bg-white shadow-md border border-slate-100 flex items-center gap-2 text-xs font-semibold text-ocean">
                <CheckCircle2 className="w-4 h-4 text-nature" />
                <span>Authoritative Brand Emblem</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive 4-Pillar Breakdown */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {elements.map((el) => {
              const Icon = el.icon;
              const isSelected = activeElement === el.id;

              return (
                <div
                  key={el.id}
                  onClick={() => setActiveElement(el.id)}
                  className={cn(
                    "p-6 rounded-2xl cursor-pointer transition-all duration-300 border text-left",
                    isSelected
                      ? "bg-ocean-tint/80 border-ocean shadow-md"
                      : "bg-white border-slate-100 hover:border-ocean-light hover:bg-slate-50/50"
                  )}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                        isSelected
                          ? "bg-ocean text-white shadow-sm"
                          : "bg-slate-100 text-ocean"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-slate-400">
                      {el.subtitle}
                    </span>
                  </div>

                  <h4 className="text-xl font-display font-medium text-ocean mb-2">
                    {el.title}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {el.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

