"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BRAND_CONFIG } from "@/config/brand";
import { Menu, X } from "lucide-react";
import FullScreenMenu from "./FullScreenMenu";
import PillButton from "@/components/ui/PillButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/our-story" },
  { label: "Services", href: "/products" },
  { label: "Delivery Areas", href: "/#delivery-areas" },
  { label: "Customer Portal", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state for backdrop styling
      setScrolled(currentScrollY > 40);

      // Scroll direction for hide/show header
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY.current + 6) {
          // Scrolling down -> hide header
          setVisible(false);
        } else if (currentScrollY < lastScrollY.current - 6) {
          // Scrolling up -> show header
          setVisible(true);
        }
      } else {
        // Near top -> always visible
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When on subpages like /our-story or /contact, if they don't have a dark hero,
  // we may want to adapt or keep consistent. Since this is an editorial site,
  // we default to transparent over hero, then solid on scroll.
  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          visible ? "translate-y-0" : "-translate-y-full",
          scrolled
            ? "py-3.5 bg-canvas/90 backdrop-blur-md shadow-sm border-b border-navy/5 text-navy"
            : "py-6 bg-transparent text-white"
        )}
      >
        <div className="section-gutter max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua rounded-md"
            aria-label={`${BRAND_CONFIG.name} — Pure by Nature`}
          >
            <div className="relative w-36 sm:w-44 h-10 sm:h-11 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src={isTransparent ? "/brand/kalash-logo-white.png" : "/brand/kalash-logo-full.png"}
                alt={`${BRAND_CONFIG.name} Logo`}
                fill
                priority
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain object-left transition-opacity duration-300"
              />
            </div>
          </Link>

          {/* Center/Right: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative text-[13px] font-sans font-medium uppercase tracking-caps transition-colors duration-200 py-1",
                    isTransparent
                      ? "text-white/80 hover:text-white"
                      : "text-navy/70 hover:text-navy",
                    isActive && (isTransparent ? "text-white font-semibold" : "text-navy font-semibold")
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full",
                        isTransparent ? "bg-white" : "bg-aqua"
                      )}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Menu Button + Pill CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Editorial "Menu" Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-medium uppercase tracking-caps transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua",
                isTransparent
                  ? "border-white/30 text-white hover:border-white hover:bg-white/10"
                  : "border-navy/20 text-navy hover:border-navy hover:bg-navy/5"
              )}
              aria-label="Open Full Navigation Menu"
            >
              <Menu className="w-3.5 h-3.5" />
              <span>Menu</span>
            </button>

            {/* Pill CTA: Order Now with Text-Swap Hover */}
            <PillButton
              href="/contact"
              variant={isTransparent ? "white" : "navy"}
              size="sm"
              className="hidden sm:inline-flex"
            >
              Order Now
            </PillButton>
          </div>
        </div>
      </header>

      {/* Full-Screen Navigation Overlay */}
      <FullScreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
