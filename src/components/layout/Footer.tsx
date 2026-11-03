import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_NAV_ITEMS } from "@/config/navigation";
import { BRAND_CONFIG } from "@/config/brand";
import { CONTACT_CONFIG } from "@/config/contact";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean text-white pt-20 pb-12 border-t border-ocean-deep/50 relative overflow-hidden">
      {/* Decorative ambient water gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-ocean-medium/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-nature/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-14">
                <Image
                  src="/brand/kalash-logo-white.png"
                  alt="KALASH Pure by Nature"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              {BRAND_CONFIG.subheading}
            </p>
            <div className="flex items-center gap-2 text-xs text-nature-leaf font-medium">
              <ShieldCheck className="w-4 h-4 text-nature" />
              <span>Hygienic multi-stage sanitization & automated packaging</span>
            </div>
            <div className="pt-2 text-xs text-white/50">
              <p>Primary Hub: {BRAND_CONFIG.market.city}, {BRAND_CONFIG.market.state}</p>
              <p>Pincode Range: {BRAND_CONFIG.market.primaryPincodes}</p>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-nature-leaf">
              Brand Story
            </h4>
            <ul className="space-y-3">
              {FOOTER_NAV_ITEMS.narrative.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offerings Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-nature-leaf">
              Hydration Solutions
            </h4>
            <ul className="space-y-3">
              {FOOTER_NAV_ITEMS.offerings.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-nature-leaf">
              Pune Delivery Hub
            </h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-nature shrink-0 mt-1" />
                <span>{CONTACT_CONFIG.hubLocation}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-nature shrink-0" />
                <span>{CONTACT_CONFIG.operatingHours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-nature shrink-0" />
                <a
                  href={`tel:${CONTACT_CONFIG.phoneRaw}`}
                  className="hover:text-white transition-colors underline decoration-white/30"
                >
                  {CONTACT_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-nature shrink-0" />
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="hover:text-white transition-colors underline decoration-white/30"
                >
                  {CONTACT_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pune Service Areas Banner */}
        <div className="py-8 border-b border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/60">
          <span className="font-semibold text-white uppercase tracking-wider">
            Active Pune Routes:
          </span>
          {CONTACT_CONFIG.serviceAreas.map((area, idx) => (
            <span key={area} className="inline-flex items-center gap-2">
              <span className="hover:text-white transition-colors">{area}</span>
              {idx < CONTACT_CONFIG.serviceAreas.length - 1 && (
                <span className="text-white/20">•</span>
              )}
            </span>
          ))}
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-wrap items-center gap-6">
            <p>
              © {currentYear} {BRAND_CONFIG.name} Drinking Water. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-white/50">
              {FOOTER_NAV_ITEMS.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Agency Credit */}
          <div className="flex items-center gap-2">
            <span>Designed &amp; Developed by</span>
            <a
              href={BRAND_CONFIG.agency.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-nature-leaf transition-colors inline-flex items-center gap-1 group"
            >
              <span>{BRAND_CONFIG.agency.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

