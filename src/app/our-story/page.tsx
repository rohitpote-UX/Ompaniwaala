import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { generateSiteMetadata } from "@/lib/seo";
import { BRAND_CONFIG } from "@/config/brand";
import { CONTACT_CONFIG } from "@/config/contact";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { Droplet, Clock, Shield, Truck, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = generateSiteMetadata({
  title: "About Us — Ranjeet Enterprises | 20L Water Jar Supplier Pune",
  description:
    "Learn about Ranjeet Enterprises, trusted 20 litre drinking water jar supplier in Aundh, Pune. Dedicated to clean jars, timely delivery, and dependable customer service across Aundh, Baner & Khadki.",
  path: "/our-story",
});

export default function OurStoryPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Editorial Page Header */}
      <div className="container-custom pt-8 pb-16 border-b border-slate-100">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-tint border border-ocean-light">
            <span className="w-2 h-2 rounded-full bg-nature animate-pulse-subtle" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ocean">
              Business Profile &amp; Service
            </span>
          </div>

          <h1 className="text-hero font-light text-ocean tracking-tight leading-[0.96]">
            ABOUT <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-ocean-deep via-ocean-medium to-nature-emerald">
              RANJEET ENTERPRISES.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed pt-2">
            Dedicated 20-litre drinking water jar supplier based in Aundh, Pune. Providing clean containers, dependable delivery, and attentive customer service across Aundh, Baner, and Khadki.
          </p>
        </div>
      </div>

      {/* Narrative Section 01: Service Foundation */}
      <section className="section-padding bg-surface-ice">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative flex items-center justify-center p-8 bg-white rounded-3xl border border-slate-200/80 shadow-md">
            <div className="relative w-72 sm:w-88 h-72 sm:h-88">
              <Image
                src="/images/hero-jar-20l.jpg"
                alt="Ranjeet Enterprises 20L Water Jar Supplier Aundh"
                fill
                priority
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-ocean-tint/90 backdrop-blur-sm border border-ocean-light text-xs text-ocean font-medium text-center">
              DP Road, Aundh, Pune • 20 Litre Water Jar Supplier
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              overline="Local Presence"
              title="DEPENDABLE WATER SUPPLY IN PUNE."
              subtitle="Located on DP Road in Aundh, Ranjeet Enterprises operates with a straightforward commitment: ensuring your home or business never faces a drinking water shortfall."
              className="mb-6"
            />
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Serving residential societies, gated communities, corporate offices, and local shops, we specialize in delivering clean, hygienic, and securely sealed 20-litre drinking water jars with dependable punctuality.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              With confirmed delivery routes across Aundh, Baner, and Khadki, our focus remains on clean containers, prompt customer service, and flexible delivery schedules tailored to your household or workplace water usage.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section 02: Four Pillars */}
      <section className="section-padding bg-white" id="commitment">
        <div className="container-custom">
          <SectionHeading
            overline="Core Principles"
            title="FOUR PILLARS OF OUR SERVICE."
            subtitle="The operational standards that define Ranjeet Enterprises in daily water distribution across Pune."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-surface-ice border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ocean text-white flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium text-ocean mb-2">
                  Clean Water Jars
                </h3>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                  Hygienic Containers
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Dedicated supply of thoroughly inspected, clean, and securely sealed 20-litre water jars for daily consumption.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface-ice border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ocean-medium text-white flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium text-ocean mb-2">
                  Timely Delivery
                </h3>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                  Punctual Service
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Consistent delivery schedules ensuring your household, store, or office receives timely replenishment across active routes.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface-ice border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-nature text-white flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium text-ocean mb-2">
                  24-Hour Availability
                </h3>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                  Listed Schedule
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Listed as open 24 hours on Google Business Profile to support residences and commercial establishments with flexible supply.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface-ice border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ocean-deep text-white flex items-center justify-center mb-6">
                  <Droplet className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium text-ocean mb-2">
                  Prompt Service
                </h3>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                  Customer Support
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Attentive local support with 12 Google reviews and a 4.6 customer rating reflecting our dedication to dependable service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 03: Service Promise */}
      <section className="section-padding bg-ocean text-white relative">
        <div className="container-custom max-w-4xl text-center space-y-8">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-nature-leaf">
            Aundh, Baner &amp; Khadki Supply
          </span>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
            PROMPT LOCAL SERVICE. <br />
            <span className="font-semibold text-nature-leaf">DEPENDABLE WATER SUPPLY.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Connect with Ranjeet Enterprises for reliable 20-litre water jar delivery for your home, residential society, or commercial office.
          </p>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white" size="lg">
              Inquire for Delivery
            </Button>
            <Button
              href={CONTACT_CONFIG.googleMapsUrl}
              external
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-ocean"
            >
              View on Google Maps
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
