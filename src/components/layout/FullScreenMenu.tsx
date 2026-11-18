"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { BRAND_CONFIG } from "@/config/brand";
import { CONTACT_CONFIG } from "@/config/contact";
import { X, ArrowUpRight, Phone, MapPin } from "lucide-react";
import PillButton from "@/components/ui/PillButton";
import { useLanguage } from "@/context/LanguageContext";

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();

  const menuLinks = [
    { number: "01", label: lang === "mr" ? "आमच्याबद्दल" : "About Us", href: "/our-story", accent: lang === "mr" ? "औंध केंद्र" : "Aundh Hub" },
    { number: "02", label: lang === "mr" ? "२०L वॉटर जार" : "20L Water Jars", href: "/products", accent: lang === "mr" ? "थेट पुरवठा" : "Direct Supply" },
    { number: "03", label: lang === "mr" ? "वितरण क्षेत्रे" : "Delivery Routes", href: "/#delivery-areas", accent: lang === "mr" ? "औंध, बाणेर व खडकी" : "Aundh, Baner & Khadki" },
    { number: "04", label: lang === "mr" ? "कार्यपद्धती" : "Service Workflow", href: "/#capabilities", accent: lang === "mr" ? "स्वच्छ जार व सील" : "Clean Jars & Seals" },
    { number: "05", label: lang === "mr" ? "संपर्क व ऑर्डर्स" : "Contact & Orders", href: "/contact", accent: lang === "mr" ? "थेट समन्वय" : "Direct Dispatch" },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline();
      tl.set(containerRef.current, { display: "flex" });
      tl.fromTo(
        containerRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.8, ease: "power4.inOut" }
      );

      if (linksRef.current) {
        const linkItems = linksRef.current.querySelectorAll(".menu-link-row");
        tl.fromTo(
          linkItems,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.08 },
          "-=0.4"
        );
      }

      if (footerRef.current) {
        tl.fromTo(
          footerRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
      }
    } else {
      document.body.style.overflow = "";

      const tl = gsap.timeline();
      tl.to(containerRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.65,
        ease: "power4.inOut",
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.display = "none";
          }
        },
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 hidden flex-col justify-between bg-navy text-white section-gutter py-8 overflow-y-auto"
      style={{ clipPath: "inset(0 0 100% 0)" }}
    >
      {/* Top Header Bar inside Overlay */}
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between pb-6 border-b border-white/10">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
          aria-label={`${BRAND_CONFIG.name} — 20 Litre Water Jar Supplier Pune`}
        >
          <span className="font-serif text-2xl sm:text-[28px] tracking-tight font-medium text-white transition-opacity group-hover:opacity-90 select-none">
            {t.nav.brandFirst}
          </span>
          <span className="text-white/35 font-light text-lg sm:text-xl select-none" aria-hidden="true">
            |
          </span>
          <span className="font-sans text-[11px] sm:text-[13px] font-normal tracking-[0.18em] uppercase text-white/80 group-hover:text-white transition-colors select-none">
            {t.nav.brandSecond}
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <PillButton
            href={CONTACT_CONFIG.whatsappMessageTemplate()}
            external
            variant="aqua"
            size="sm"
          >
            {t.nav.orderNow}
          </PillButton>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white text-xs font-mono tracking-caps uppercase text-white hover:bg-white/10 transition-all cursor-pointer"
            aria-label="Close Navigation Menu"
          >
            <span>{t.nav.close}</span>
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Large Editorial Stacked Links */}
      <div
        ref={linksRef}
        className="w-full max-w-[1440px] mx-auto py-12 lg:py-16 flex flex-col justify-center space-y-4 lg:space-y-6"
      >
        {menuLinks.map((link) => (
          <div
            key={link.href}
            className="menu-link-row group flex items-baseline justify-between border-b border-white/10 pb-4 lg:pb-6"
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="flex items-baseline gap-4 sm:gap-8 group"
            >
              <span className="font-mono text-xs sm:text-sm text-aqua font-semibold">
                {link.number}
              </span>
              <span className="text-3xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white transition-transform duration-500 group-hover:translate-x-3">
                {link.label}{" "}
                <span className="font-serif italic font-normal text-white/50 group-hover:text-aqua transition-colors text-2xl sm:text-4xl lg:text-5xl">
                  — {link.accent}
                </span>
              </span>
            </Link>

            <ArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-aqua group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 hidden sm:block" />
          </div>
        ))}
      </div>

      {/* Bottom Footer Info Bar */}
      <div
        ref={footerRef}
        className="w-full max-w-[1440px] mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-white/60 font-sans"
      >
        <div className="flex flex-wrap items-center gap-6">
          {CONTACT_CONFIG.phone ? (
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-aqua" />
              <a href={`tel:${CONTACT_CONFIG.phoneRaw}`} className="hover:text-white transition-colors">
                {CONTACT_CONFIG.phone}
              </a>
            </div>
          ) : (
            <a
              href={CONTACT_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-aqua" />
              <span>DP Road, Aundh, Pune 411067</span>
            </a>
          )}
          <div>
            <span>Pune Hub: {CONTACT_CONFIG.operatingHours}</span>
          </div>
        </div>

        <div className="text-[11px] font-mono tracking-caps uppercase text-white/40">
          {BRAND_CONFIG.name} © {new Date().getFullYear()} • Aundh, Pune, India
        </div>
      </div>
    </div>
  );
}
