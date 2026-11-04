import React from "react";
import { BRAND_CONFIG } from "@/config/brand";
import { Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

export default function BrandPhilosophy() {
  return (
    <section id="philosophy" className="section-padding bg-ocean text-white relative overflow-hidden">
      {/* Editorial backdrop accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-ocean-medium/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-nature/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Overline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <span className="w-2 h-2 rounded-full bg-nature animate-pulse-subtle" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.25em] uppercase text-white">
              Brand Philosophy
            </span>
          </div>

          {/* Master Display Typography */}
          <h2 className="text-section-title font-light tracking-tight leading-[1.04] text-white">
            NOT JUST WATER. <br />
            <span className="font-serif italic font-normal text-nature-leaf">AN EVERYDAY ESSENTIAL.</span>
          </h2>

          {/* Core Manifesto Paragraph */}
          <p className="text-subhead text-white/80 font-normal leading-relaxed max-w-3xl mx-auto">
            KALASH is built around a simple belief: everyday essentials deserve care, consistency and a better experience. Drinking water is the silent catalyst of daily human health, quiet family moments, and productive workplaces.
          </p>

          {/* 3 Core Tenets */}
          <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-6 h-6 text-nature-leaf mb-4" />
              <h4 className="text-lg font-medium text-white mb-2">Uncompromising Hygiene</h4>
              <p className="text-sm text-white/70 leading-relaxed">
                Multi-stage purification with rigorous sanitization protocols applied to every vessel.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <HeartHandshake className="w-6 h-6 text-nature-leaf mb-4" />
              <h4 className="text-lg font-medium text-white mb-2">Dependable Supply</h4>
              <p className="text-sm text-white/70 leading-relaxed">
                Punctual, seamless daily supply routines tailored to Pune homes and commercial offices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-nature-leaf mb-4" />
              <h4 className="text-lg font-medium text-white mb-2">Thoughtful Delivery</h4>
              <p className="text-sm text-white/70 leading-relaxed">
                Professional doorstep handling that respects your schedule, home sanctity, and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

