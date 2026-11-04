import React from "react";
import Image from "next/image";
import { BRAND_CONFIG } from "@/config/brand";
import { Droplet } from "lucide-react";

export default function BrandStatement() {
  return (
    <section className="relative py-28 md:py-36 bg-ocean text-white overflow-hidden">
      {/* Background Banner with Water Surface and Subtle Caustics */}
      <div className="absolute inset-0 opacity-25 mix-blend-overlay">
        <Image
          src="/brand/kalash-hero-banner.jpg"
          alt="Water Ripple Reflections"
          fill
          className="object-cover"
        />
      </div>

      {/* Atmospheric Radial Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean via-transparent to-ocean pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ocean-bright/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <Droplet className="w-3.5 h-3.5 text-nature-leaf" />
          <span className="text-[11px] font-mono font-semibold tracking-[0.25em] uppercase text-white">
            Brand Signature
          </span>
        </div>

        <h2 className="text-hero font-light tracking-tight text-white leading-[0.95]">
          PURE BY NATURE. <br />
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-nature-leaf">
            TRUSTED FOR YOU.
          </span>
        </h2>

        <p className="text-subhead text-white/80 max-w-2xl mx-auto leading-relaxed">
          From the sacred geometry of the ancient Kalash to the modern urban home in Pune, our commitment remains unyielding: bringing clarity, vitality, and dependability to every glass you pour.
        </p>

        <div className="pt-4 flex items-center justify-center gap-3 text-xs tracking-widest uppercase text-white/60">
          <span>{BRAND_CONFIG.name}</span>
          <span>•</span>
          <span>{BRAND_CONFIG.concept}</span>
          <span>•</span>
          <span>{BRAND_CONFIG.market.city}</span>
        </div>
      </div>
    </section>
  );
}

