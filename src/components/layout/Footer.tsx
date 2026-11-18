"use client";

import React from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";
import { CONTACT_CONFIG } from "@/config/contact";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang, setLang, t } = useLanguage();

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
                  {BRAND_CONFIG.shortName}
                </span>
              </Link>
              <p className="mt-4 text-sm sm:text-base text-white/70 max-w-sm leading-relaxed font-normal">
                {BRAND_CONFIG.subheading}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-white/50 font-semibold block">
                AUNDH LOGISTICS HUB
              </span>
              <p className="mt-1 text-xs text-white/70">
                {BRAND_CONFIG.market.address}
              </p>
            </div>
          </div>

          {/* Navigation Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-white/50 block">
              {t.footer.companyCol}
            </span>
            <ul className="space-y-3 pt-2">
              {[
                { label: t.nav.company, href: "/our-story" },
                { label: t.nav.capabilities, href: "/#capabilities" },
                { label: t.areas.label, href: "/#delivery-areas" },
                { label: t.nav.portal, href: "/contact" },
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

          {/* Supply Solutions (Col 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-white/50 block">
              {t.footer.servicesCol}
            </span>
            <ul className="space-y-3 pt-2">
              {[
                { label: t.featuredProducts.products[0]?.title || "20-Litre Water Jars", href: "/products" },
                { label: t.featuredProducts.products[1]?.title || "Bulk & Corporate Supply", href: "/products" },
                { label: t.featuredProducts.products[2]?.title || "Custom Supply Schedule", href: "/products" },
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
              {t.footer.hubTitle}
            </span>
            <div className="space-y-3 pt-2 text-sm text-white/75">
              {CONTACT_CONFIG.phone ? (
                <a
                  href={`tel:${CONTACT_CONFIG.phoneRaw}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-aqua shrink-0" />
                  <span>{CONTACT_CONFIG.phone}</span>
                </a>
              ) : null}
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-aqua shrink-0" />
                <span>{CONTACT_CONFIG.operatingHours}</span>
              </div>
              <a
                href={CONTACT_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors group/map"
              >
                <MapPin className="w-4 h-4 text-aqua shrink-0 mt-0.5" />
                <span className="group-hover/map:underline">{CONTACT_CONFIG.shortAddress}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Generous Spacing and Language Selector */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} {BRAND_CONFIG.name}. {t.footer.rights}</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Tri-lingual Language Selector */}
            <div
              role="group"
              aria-label="Language selection"
              className="inline-flex items-center p-0.5 rounded-full border border-white/20 bg-white/5 text-[11px] font-sans"
            >
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  lang === "en" ? "bg-white/20 text-aqua font-semibold" : "text-white/60 hover:text-white"
                }`}
              >
                EN
              </button>
              <span className="text-white/20 text-[9px] mx-0.5">•</span>
              <button
                type="button"
                onClick={() => setLang("mr")}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  lang === "mr" ? "bg-white/20 text-aqua font-semibold" : "text-white/60 hover:text-white"
                }`}
              >
                मराठी
              </button>
              <span className="text-white/20 text-[9px] mx-0.5">•</span>
              <button
                type="button"
                onClick={() => setLang("hi")}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  lang === "hi" ? "bg-white/20 text-aqua font-semibold" : "text-white/60 hover:text-white"
                }`}
              >
                हिंदी
              </button>
            </div>

            <Link href="/privacy" className="hover:text-white transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              {t.footer.terms}
            </Link>
            <a
              href={CONTACT_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>Google Maps</span>
              <ArrowUpRight className="w-3 h-3 text-aqua" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
