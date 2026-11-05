"use client";

import React from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";
import { CONTACT_CONFIG } from "@/config/contact";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-navy text-white pt-28 pb-16 border-t border-white/10 overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Main 4-Column Editorial Footer Grid with Generous White Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/10">
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block focus:outline-none">
                <span className="font-serif text-3xl sm:text-4xl tracking-tight font-medium text-white select-none">
                  Kalash
                </span>
              </Link>
              <p className="mt-4 text-sm sm:text-base text-white/70 max-w-sm leading-relaxed font-normal">
                {BRAND_CONFIG.subheading}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-white/50 font-semibold block">
                PUNE OPERATIONAL HUB
              </span>
              <p className="mt-1 text-xs text-white/70">
                {BRAND_CONFIG.market.address} • Pincodes: {BRAND_CONFIG.market.primaryPincodes}
              </p>
            </div>
          </div>

          {/* Navigation Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-white/50 block">
              Company
            </span>
            <ul className="space-y-3 pt-2">
              {[
                { label: "Our Story", href: "/our-story" },
                { label: "Capabilities", href: "/#capabilities" },
                { label: "Delivery Routes", href: "/#delivery-areas" },
                { label: "Customer Portal", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hydration Solutions (Col 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-white/50 block">
              Solutions
            </span>
            <ul className="space-y-3 pt-2">
              {[
                { label: "20-Litre Returnable Jars", href: "/products" },
                { label: "Smart Floor Dispensers", href: "/products" },
                { label: "Corporate Daily Hydration", href: "/products" },
                { label: "Packaged Mineral Bottles", href: "/products" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-white/50 block">
              Direct Contact
            </span>
            <div className="space-y-3 pt-2 text-sm text-white/75">
              <a
                href={`tel:${CONTACT_CONFIG.phoneRaw}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-aqua shrink-0" />
                <span>{CONTACT_CONFIG.phone}</span>
              </a>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-aqua shrink-0" />
                <span>{CONTACT_CONFIG.operatingHours}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-aqua shrink-0 mt-0.5" />
                <span>{CONTACT_CONFIG.hubLocation}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Generous Spacing */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} {BRAND_CONFIG.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Supply
            </Link>
            <span>{BRAND_CONFIG.agency.name} — {BRAND_CONFIG.agency.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
