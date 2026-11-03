"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import WaterDropScene from "@/components/three/WaterDropScene";
import { Droplet, Waves, Sparkles, Home } from "lucide-react";

export default function DropStory() {
  const narrativeSteps = [
    {
      icon: Droplet,
      stage: "01. Genesis",
      title: "It begins with a drop.",
      description:
        "Every single drop carries the quiet wonder of pure hydration. Before it fills glasses, sustains families, or energizes productive workdays, it is simple, pure, and vital.",
    },
    {
      icon: Waves,
      stage: "02. Progression",
      title: "A drop becomes a flow.",
      description:
        "When consistency meets care, isolated drops become an unbroken, dependable flow. Drinking water transitions from a daily chore into an effortless, trusted rhythm.",
    },
    {
      icon: Home,
      stage: "03. Living",
      title: "Water is part of every moment.",
      description:
        "In morning tea, children's water bottles, dinner tables, and office desks across Pune — water is the silent foundation of living well.",
    },
  ];

  return (
    <section id="story-of-drop" className="section-padding bg-surface-ice relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <SectionHeading
          overline="The Narrative"
          title="BEYOND THE DROP."
          subtitle="Something essential. Something we often take for granted. Understanding the journey from a single pristine droplet to everyday dependable hydration."
          align="left"
        />

        {/* Interactive Physics & Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Canvas: Interactive Water Fluid Simulation */}
          <div className="lg:col-span-7">
            <WaterDropScene />
          </div>

          {/* Right Narrative Breakdown */}
          <div className="lg:col-span-5 space-y-8">
            {narrativeSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-ocean-light transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold tracking-widest uppercase text-nature-emerald">
                      {step.stage}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-ocean-tint flex items-center justify-center text-ocean group-hover:bg-ocean group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-medium text-ocean mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
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

