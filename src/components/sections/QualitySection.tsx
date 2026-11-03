import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ShieldCheck, RefreshCw, Droplets, Truck, Layers, Lock } from "lucide-react";

export default function QualitySection() {
  const qualityPillars = [
    {
      icon: Layers,
      title: "Multi-Stage Processing",
      description:
        "Every batch passes through sequential micro-filtration, sediment clarification, and ultraviolet stabilization to ensure pristine clarity and consistent mineral taste.",
    },
    {
      icon: RefreshCw,
      title: "Automated Jar Cleansing",
      description:
        "Returned 20-litre jars undergo high-pressure multi-cycle internal and external washing with food-grade sanitizing rinses before re-filling.",
    },
    {
      icon: Lock,
      title: "Hermetic Tamper Seal",
      description:
        "Every cap is sealed with a heat-shrink tamper-evident band. You can instantly confirm that your water hasn't been exposed or opened since automated sealing.",
    },
    {
      icon: ShieldCheck,
      title: "Food-Grade Polymer Containers",
      description:
        "We utilize only certified non-leaching, high-grade BPA-free vessels designed specifically to preserve water neutral freshness without taste degradation.",
    },
    {
      icon: Truck,
      title: "Covered Hygienic Logistics",
      description:
        "Jars and crates travel in clean, secured delivery vehicles protected from direct sunlight, roadside exhaust fumes, and environmental dust across Pune.",
    },
    {
      icon: Droplets,
      title: "Batch Lot Traceability",
      description:
        "Structured batch identification ensures complete internal accountability from the filling line directly to your residential or commercial doorstep.",
    },
  ];

  return (
    <section id="approach" className="section-padding bg-surface-ice relative overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          overline="Operational Integrity"
          title="TRUST IS BUILT IN EVERY DETAIL."
          subtitle="True peace of mind does not come from marketing slogans. It comes from disciplined handling, automated sanitization, and dependable execution every single morning."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-ocean transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-ocean-tint text-ocean flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-ocean" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-ocean mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STANDARD #{idx + 1}</span>
                  <span className="text-nature-emerald font-semibold">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

