import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { generateSiteMetadata } from "@/lib/seo";
import { BRAND_CONFIG } from "@/config/brand";
import { CONTACT_CONFIG } from "@/config/contact";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { Droplet, Sprout, Shield, Waves, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = generateSiteMetadata({
  title: "Our Story — Heritage, Water & The Meaning of Kalash",
  description:
    "Explore the cultural genesis and philosophical foundation of KALASH. How an ancient emblem of water and life inspires modern, dependable drinking-water delivery in Pune.",
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
              Heritage &amp; Narrative
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-ocean tracking-tight leading-[1.08]">
            THE STORY OF <br />
            <span className="font-semibold text-ocean-deep">KALASH.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed pt-2">
            In Indian tradition, the Kalash is never merely a vessel. It is an emblem of life, abundance, and everyday domestic sanctity. We carry that reverence into every drop delivered across Pune.
          </p>
        </div>
      </div>

      {/* Narrative Section 01: The Cultural Inspiration */}
      <section className="section-padding bg-surface-ice">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative flex items-center justify-center p-8 bg-white rounded-3xl border border-slate-200/80 shadow-md">
            <div className="relative w-72 sm:w-88 h-72 sm:h-88">
              <Image
                src="/brand/kalash-emblem.png"
                alt="KALASH Emblem Heritage"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-ocean-tint/90 backdrop-blur-sm border border-ocean-light text-xs text-ocean font-medium text-center">
              The Sacred Kalash Vessel Re-imagined for Contemporary Life
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              overline="Origins"
              title="A VESSEL OLDER THAN CITIES."
              subtitle="Before taps, pipes, or modern distribution networks existed, Indian homes kept water in carefully tended copper and earthen Kalash vessels at the heart of the dwelling."
              className="mb-6"
            />
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The Kalash signified hospitality, cleanliness, and the fundamental truth that water sustains life. When guests entered a home, water was the first offering. When a new threshold was crossed, the Kalash was present.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              As modern cities like Pune grew rapidly, drinking water delivery often became transactional, utilitarian, and unpredictable. KALASH was founded to restore respect, cleanliness, and dependability to this daily essential.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section 02: Deconstructing the Emblem */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            overline="Visual Identity"
            title="ANATOMY OF THE EMBLEM."
            subtitle="Every curve, droplet, and leaf within our brand identity reflects an intentional principle of human hydration and natural vitality."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-surface-ice border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ocean text-white flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium text-ocean mb-2">
                  The Vessel
                </h3>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                  Sanctity &amp; Protection
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Represents the protective enclosure that shields water from external contamination. In our operations, this translates into rigorous vessel sanitization and tamper-evident sealing.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface-ice border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ocean-medium text-white flex items-center justify-center mb-6">
                  <Droplet className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium text-ocean mb-2">
                  The Droplet
                </h3>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                  Genesis of Purity
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A reminder that large volumes mean nothing if individual drops lack purity. Every single drop is subject to multi-stage filtration and rigorous clarity control.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface-ice border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-nature text-white flex items-center justify-center mb-6">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium text-ocean mb-2">
                  The Living Leaves
                </h3>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                  Vitality &amp; Nature
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Rooted in the traditional mango leaves placed atop an auspicious Kalash, embodying living botanical vitality, organic freshness, and natural equilibrium.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface-ice border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ocean-deep text-white flex items-center justify-center mb-6">
                  <Waves className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium text-ocean mb-2">
                  The Flow
                </h3>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                  Unbroken Daily Supply
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Represents the continuous motion of everyday water supply. Reliable morning routes across Pune ensure your family or office never faces a hydration shortfall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 03: The Modern Brand Promise */}
      <section className="section-padding bg-ocean text-white relative">
        <div className="container-custom max-w-4xl text-center space-y-8">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-nature-leaf">
            The Living Standard
          </span>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
            NOT JUST A TRANSACTION. <br />
            <span className="font-semibold text-nature-leaf">A DAILY RITUAL OF WELLBEING.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            We invite you to experience drinking water with the attention, respect, and punctuality it genuinely deserves.
          </p>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white" size="lg">
              Order Water in Pune
            </Button>
            <Button href="/products" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-ocean">
              Explore Available Formats
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

