"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND_CONFIG } from "@/config/brand";
import { CONTACT_CONFIG } from "@/config/contact";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import FullScreenMenu from "./FullScreenMenu";
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

const NAV_ITEMS: NavItem[] = [
  {
    label: "Company",
    href: "/our-story",
    dropdown: [
      { title: "Our Story & Heritage", desc: "Crafting Pune's purest water since 2014", href: "/our-story" },
      { title: "Purity Standards", desc: "100% certified 8-stage RO & UV filtration", href: "/#capabilities" },
      { title: "Quality Assurance", desc: "BIS & FSSAI certified lab reports", href: "/our-story#certifications" },
    ],
  },
  {
    label: "Capabilities",
    href: "/#capabilities",
    dropdown: [
      { title: "8-Stage Multi-Barrier Purity", desc: "Reverse osmosis & ozonation line", href: "/#capabilities" },
      { title: "Touchless 5-Cycle Sanitization", desc: "Hygienic jar wash & hermetic sealing", href: "/#capabilities" },
      { title: "Smart Pune Logistics", desc: "GPS-optimized timed delivery routes", href: "/#delivery-areas" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { title: "20L Commercial & Home Jar", desc: "BPA-free food-grade returnable jar", href: "/products" },
      { title: "Hot & Cold Dispenser Rental", desc: "Commercial floor-standing units", href: "/products" },
      { title: "500ml & 1L Case Packs", desc: "Event & boardroom mineral bottles", href: "/products" },
    ],
  },
  {
    label: "Portal",
    href: "/contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
          {/* Left: Brand Logo + Wordmark ("Kalash | Om paaniwaala") */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            aria-label="Kalash | Om paaniwaala — Pure by Nature"
          >
            {/* Elegant Serif Kalash Brand */}
            <span className="font-serif text-2xl sm:text-[28px] tracking-tight font-medium text-white transition-opacity group-hover:opacity-90 select-none">
              Kalash
            </span>

            {/* Separator Pipe */}
            <span className="text-white/35 font-light text-lg sm:text-xl select-none" aria-hidden="true">
              |
            </span>

            {/* Om Paaniwaala Subtitle */}
            <span className="font-sans text-[11px] sm:text-[13px] font-normal tracking-[0.18em] uppercase text-white/80 group-hover:text-white transition-colors select-none">
              Om paaniwaala
            </span>
          </Link>

          {/* Center & Right Navigation Area */}
          <div className="flex items-center gap-6 sm:gap-8 lg:gap-10">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {NAV_ITEMS.map((item) => (
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

            {/* Actions: Order Now Button (Awwwards Style) + Stylish 3-line Menu Icon */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Stylish Awwwards-style "Order Now" Pill Button */}
              <Link
                href={CONTACT_CONFIG.whatsappMessageTemplate()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full border border-white/25 hover:border-white bg-white/10 hover:bg-white text-white hover:text-navy backdrop-blur-md transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:shadow-[0_0_24px_rgba(31,181,214,0.35)] focus:outline-none"
                aria-label="Order Pure Water Now"
              >
                {/* Live Pulse Dot */}
                <span className="w-2 h-2 rounded-full bg-aqua group-hover:bg-navy transition-colors shrink-0 mr-2 animate-pulse" />

                {/* Vertical Text-Swap Animation */}
                <span className="relative block h-[18px] sm:h-[20px] overflow-hidden leading-[18px] sm:leading-[20px] text-[12px] sm:text-[13px] font-sans font-semibold uppercase tracking-wider select-none">
                  <span className="block transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    Order Now
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-full left-0 block w-full transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full font-serif italic normal-case tracking-normal text-[13px] sm:text-[14px] text-navy"
                  >
                    Order Now
                  </span>
                </span>
              </Link>

              {/* Stylish 3-lines Menu Icon Button */}
              <button
                onClick={() => setMenuOpen(true)}
                className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 hover:border-white bg-white/5 hover:bg-white/15 backdrop-blur-md transition-all duration-300 focus:outline-none cursor-pointer"
                aria-label="Open Navigation Menu"
                title="Open Menu"
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
