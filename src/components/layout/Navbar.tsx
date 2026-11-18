"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND_CONFIG } from "@/config/brand";
import { CONTACT_CONFIG } from "@/config/contact";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import FullScreenMenu from "./FullScreenMenu";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface DropdownItem {
  title: string;
  desc: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { lang, toggleLang, t } = useLanguage();

  const navItems: NavItem[] = [
    {
      label: t.nav.company,
      href: "/our-story",
      dropdown: [
        { title: t.nav.dropdowns.storyTitle, desc: t.nav.dropdowns.storyDesc, href: "/our-story" },
        { title: t.nav.dropdowns.purityTitle, desc: t.nav.dropdowns.purityDesc, href: "/#capabilities" },
        { title: t.nav.dropdowns.qaTitle, desc: t.nav.dropdowns.qaDesc, href: "/our-story#certifications" },
      ],
    },
    {
      label: t.nav.capabilities,
      href: "/#capabilities",
      dropdown: [
        { title: t.nav.dropdowns.roTitle, desc: t.nav.dropdowns.roDesc, href: "/#capabilities" },
        { title: t.nav.dropdowns.washTitle, desc: t.nav.dropdowns.washDesc, href: "/#capabilities" },
        { title: t.nav.dropdowns.logisticsTitle, desc: t.nav.dropdowns.logisticsDesc, href: "/#delivery-areas" },
      ],
    },
    {
      label: t.nav.products,
      href: "/products",
      dropdown: [
        { title: t.nav.dropdowns.jarTitle, desc: t.nav.dropdowns.jarDesc, href: "/products" },
        { title: t.nav.dropdowns.dispenserTitle, desc: t.nav.dropdowns.dispenserDesc, href: "/products" },
        { title: t.nav.dropdowns.bottleTitle, desc: t.nav.dropdowns.bottleDesc, href: "/products" },
      ],
    },
    {
      label: t.nav.portal,
      href: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state for backdrop styling
      setScrolled(currentScrollY > 40);

      // Scroll direction for hide/show header
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY.current + 8) {
          setVisible(false); // Scrolling down -> hide
          setActiveDropdown(null);
        } else if (currentScrollY < lastScrollY.current - 8) {
          setVisible(true); // Scrolling up -> show
        }
      } else {
        setVisible(true); // Near top -> visible
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          visible ? "translate-y-0" : "-translate-y-full",
          scrolled
            ? "py-3 sm:py-4 bg-navy/95 backdrop-blur-md border-b border-white/10 text-white shadow-xl shadow-navy/30"
            : "py-6 sm:py-7 bg-gradient-to-b from-navy/60 via-navy/20 to-transparent text-white"
        )}
      >
        <div className="w-full px-6 sm:px-10 lg:px-16 mx-auto flex items-center justify-between">
          {/* Left: Brand Logo + Wordmark ("Ranjeet | Enterprises") */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            aria-label={`${BRAND_CONFIG.name} — 20 Litre Water Jar Supplier Pune`}
          >
            {/* Elegant Serif Brand Word */}
            <span className="font-serif text-2xl sm:text-[28px] tracking-tight font-medium text-white transition-opacity group-hover:opacity-90 select-none">
              {t.nav.brandFirst}
            </span>

            {/* Separator Pipe */}
            <span className="text-white/35 font-light text-lg sm:text-xl select-none" aria-hidden="true">
              |
            </span>

            {/* Enterprises Subtitle */}
            <span className="font-sans text-[11px] sm:text-[13px] font-normal tracking-[0.18em] uppercase text-white/80 group-hover:text-white transition-colors select-none">
              {t.nav.brandSecond}
            </span>
          </Link>

          {/* Center & Right Navigation Area */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center gap-1.5 text-[14px] xl:text-[15px] font-sans font-normal text-white/90 hover:text-white transition-colors py-1.5 focus:outline-none"
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 text-white/60 transition-transform duration-200 group-hover:text-white",
                          activeDropdown === item.label ? "rotate-180 text-white" : ""
                        )}
                      />
                    )}
                  </Link>

                  {/* Frosted Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-navy/95 backdrop-blur-xl border border-white/15 p-3 shadow-2xl shadow-navy/60 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="flex flex-col gap-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="group/item p-3 rounded-xl hover:bg-white/10 transition-colors flex flex-col gap-0.5"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-white group-hover/item:text-aqua transition-colors">
                                {subItem.title}
                              </span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover/item:text-aqua group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform" />
                            </div>
                            <span className="text-[12px] text-white/60 font-light">
                              {subItem.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions: Language Toggle + Order Now Button + Stylish 3-line Menu Icon */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              {/* Bilingual Language Switcher Toggle (EN | मराठी) */}
              <button
                onClick={toggleLang}
                className="group/lang relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/15 backdrop-blur-md text-[11px] font-sans font-medium tracking-wider uppercase transition-all duration-300 focus:outline-none cursor-pointer"
                aria-label={`Switch language to ${lang === "en" ? "Marathi (मराठी)" : "English"}`}
                title={`Switch to ${lang === "en" ? "मराठी" : "English"}`}
              >
                <span className={cn("transition-colors duration-200", lang === "en" ? "text-aqua font-semibold" : "text-white/60")}>
                  EN
                </span>
                <span className="text-white/30 text-[10px]">|</span>
                <span className={cn("transition-colors duration-200 font-medium", lang === "mr" ? "text-aqua font-semibold" : "text-white/60")}>
                  मराठी
                </span>
              </button>

              {/* Stylish Awwwards-style "Order Now" Pill Button */}
              <Link
                href={CONTACT_CONFIG.whatsappMessageTemplate()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-3.5 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full border border-white/25 hover:border-white bg-white/10 hover:bg-white text-white hover:text-navy backdrop-blur-md transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:shadow-[0_0_24px_rgba(31,181,214,0.35)] focus:outline-none"
                aria-label="Order Pure Water Now"
              >
                {/* Live Pulse Dot */}
                <span className="w-2 h-2 rounded-full bg-aqua group-hover:bg-navy transition-colors shrink-0 mr-1.5 sm:mr-2 animate-pulse" />

                {/* Vertical Text-Swap Animation */}
                <span className="relative block h-[18px] sm:h-[20px] overflow-hidden leading-[18px] sm:leading-[20px] text-[12px] sm:text-[13px] font-sans font-semibold uppercase tracking-wider select-none">
                  <span className="block transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    {t.nav.orderNow}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-full left-0 block w-full transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full font-serif italic normal-case tracking-normal text-[13px] sm:text-[14px] text-navy"
                  >
                    {t.nav.orderNow}
                  </span>
                </span>
              </Link>

              {/* Stylish 3-lines Menu Icon Button */}
              <button
                onClick={() => setMenuOpen(true)}
                className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 hover:border-white bg-white/5 hover:bg-white/15 backdrop-blur-md transition-all duration-300 focus:outline-none cursor-pointer"
                aria-label={t.nav.menu}
                title={t.nav.menu}
              >
                <div className="flex flex-col justify-center items-end gap-[4.5px] w-5">
                  <span className="h-[1.5px] bg-white rounded-full transition-all duration-300 w-5 group-hover:w-5 group-hover:bg-aqua" />
                  <span className="h-[1.5px] bg-white rounded-full transition-all duration-300 w-3 group-hover:w-5 group-hover:bg-white" />
                  <span className="h-[1.5px] bg-white rounded-full transition-all duration-300 w-4.5 group-hover:w-5 group-hover:bg-aqua" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Navigation Drawer */}
      <FullScreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
