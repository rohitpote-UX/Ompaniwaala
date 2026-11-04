"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { BRAND_CONFIG } from "@/config/brand";
import { CONTACT_CONFIG } from "@/config/contact";
import { sound } from "@/lib/audio";
import HeroVisualShowcase from "@/components/ui/HeroVisualShowcase";
import {
  Volume2,
  VolumeX,
  MessageSquare,
  ShieldCheck,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const [selectedArea, setSelectedArea] = useState<string>("Baner & Balewadi");
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.enabled = nextState;
    if (nextState) sound.playDrop();
  };

  const handleAreaSelect = (area: string) => {
    setSelectedArea(area);
    sound.playDrop();
  };

  return (
    <section className="relative min-h-screen pt-24 lg:pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-white via-surface-ice/50 to-white">
      {/* 1. Cinematic Background Grid & Light Caustics */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#073b7808_1px,transparent_1px),linear-gradient(to_bottom,#073b7808_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      
      {/* Atmospheric Luminous Orbs */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-gradient-to-bl from-ocean-bright/15 via-nature/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-ocean/10 via-cyan-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 2. Top HUD Status Bar */}
      <div className="container-custom pt-3 pb-6 relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/60 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-nature-soft border border-nature/30 text-nature-emerald font-mono font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-nature animate-ping" />
            <span>PUNE FLEET LIVE // DISPATCH ACTIVE</span>
          </div>
          <span className="hidden md:inline text-slate-400 font-mono text-[11px] tracking-wider">
            07:00 AM – 08:30 PM
          </span>
        </div>

        {/* Audio Toggle & Quick Status */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 hover:border-ocean text-ocean transition-all shadow-sm"
            title="Toggle Sound Effects"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-nature" />
                <span className="font-mono text-[11px] font-semibold tracking-widest uppercase">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-mono text-[11px] text-slate-500 tracking-widest uppercase">MUTED</span>
              </>
            )}
          </button>

          <div className="hidden sm:flex items-center gap-2 text-slate-500 font-mono text-[11px] tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-nature" />
            <span>HERMETIC SEAL: 100%</span>
          </div>
        </div>
      </div>

      {/* 3. Main Hero Dual Stage */}
      <div className="container-custom flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 my-auto py-6">
        {/* Left Column: Bold Cinematic Typography & Interactive Route Terminal */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:space-y-7">
          {/* Overline Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-ocean-tint border border-ocean-light w-fit shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-nature" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.25em] uppercase text-ocean">
              {BRAND_CONFIG.name} PUNE // {BRAND_CONFIG.tagline}
            </span>
          </div>

          {/* Master Display Headline */}
          <h1 className="text-hero font-light tracking-tight text-ocean leading-[0.93]">
            EVERY DROP <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-ocean-deep via-ocean-medium to-nature-emerald pr-2">
              MATTERS<span className="text-nature font-sans not-italic font-bold">.</span>
            </span>
          </h1>

          {/* Subhead Typography */}
          <p className="text-subhead text-slate-600 font-normal leading-relaxed max-w-xl">
            Bringing Pune&apos;s most dependable, hermetically sealed drinking-water experience to everyday households and thriving workplaces.
          </p>

          {/* Interactive Pune Area Availability Checker */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-3.5 max-w-xl">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-semibold uppercase tracking-wider text-ocean flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-nature" />
                Select Your Pune Locality:
              </span>
              <span className="text-nature-emerald font-semibold tracking-wider">● Live Coverage</span>
            </div>

            {/* Quick Area Chips */}
            <div className="flex flex-wrap gap-2">
              {[
                "Baner & Balewadi",
                "Kothrud",
                "Wakad & Hinjawadi",
                "Aundh",
                "Kalyani Nagar",
                "Viman Nagar",
                "Hadapsar",
              ].map((area) => (
                <button
                  key={area}
                  onClick={() => handleAreaSelect(area)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    selectedArea === area
                      ? "bg-ocean text-white shadow-sm font-semibold"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>

            {/* Live Route Slot Confirmation */}
            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="text-slate-600">
                Next scheduled slot for <span className="font-semibold text-ocean">{selectedArea}</span>:
              </div>
              <div className="font-mono font-semibold text-nature-emerald bg-nature-soft px-3 py-1 rounded-full text-[11px] tracking-wider">
                Tomorrow 07:30 AM
              </div>
            </div>
          </div>

          {/* High-Impact CTAs */}
          <div className="pt-1 flex flex-wrap items-center gap-4">
            <Button
              href={CONTACT_CONFIG.whatsappMessageTemplate(`20L Pure Water Jar for ${selectedArea}`)}
              external
              variant="nature"
              size="lg"
              className="text-xs sm:text-sm font-bold shadow-xl shadow-nature/20 tracking-wider uppercase"
              icon={MessageSquare}
            >
              Order on WhatsApp Now
            </Button>

            <Button
              href="#products"
              variant="outline"
              size="lg"
              className="text-xs sm:text-sm font-semibold tracking-wider uppercase"
              showArrow
            >
              Explore 20L Jar &amp; Formats
            </Button>
          </div>
        </div>

        {/* Right Column: Multiple Organic Images Showcase */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center">
          <HeroVisualShowcase />
        </div>
      </div>

      {/* 4. Bottom Metrics Banner */}
      <div className="container-custom pt-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm text-center">
          <div>
            <p className="text-2xl lg:text-3xl font-display font-semibold text-ocean tracking-tight">100%</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mt-1 font-mono font-medium">Hermetically Sealed</p>
          </div>
          <div>
            <p className="text-2xl lg:text-3xl font-display font-semibold text-nature-emerald tracking-tight">07:00 AM</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mt-1 font-mono font-medium">Morning Dispatch</p>
          </div>
          <div>
            <p className="text-2xl lg:text-3xl font-display font-semibold text-ocean tracking-tight">11+ Hubs</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mt-1 font-mono font-medium">Pune Corridors</p>
          </div>
          <div>
            <p className="text-2xl lg:text-3xl font-display font-semibold text-nature-emerald tracking-tight">BPA-Free</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mt-1 font-mono font-medium">Food-Grade Polymer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
