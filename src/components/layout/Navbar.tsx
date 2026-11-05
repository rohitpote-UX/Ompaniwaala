"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BRAND_CONFIG } from "@/config/brand";
import { ChevronDown, Menu, ArrowUpRight } from "lucide-react";
import FullScreenMenu from "./FullScreenMenu";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Company", href: "/our-story", hasDropdown: true },
  { label: "Capabilities", href: "/#capabilities", hasDropdown: true },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Portal", href: "/contact", hasDropdown: false },
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
        if (currentScrollY > lastScrollY.current + 8) {
          setVisible(false); // Scrolling down -> hide
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

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          visible ? "translate-y-0" : "-translate-y-full",
          scrolled
            ? "py-4 bg-navy/90 backdrop-blur-md border-b border-white/10 text-white shadow-lg"
            : "py-7 sm:py-8 bg-transparent text-white"
        )}
      >
        <div className="w-full px-8 sm:px-12 lg:px-16 mx-auto flex items-center justify-between">
          {/* Left: Brand Wordmark (matching editorial serif style like 'Stellar') */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label={`${BRAND_CONFIG.name} — Pure by Nature`}
          >
            <span className="font-serif text-2xl sm:text-[28px] tracking-tight font-medium text-white transition-opacity group-hover:opacity-85 select-none">
              Kalash
            </span>
          </Link>

          {/* Right Navigation Links (Matching the photo: Company ↓, Capabilities ↓, Products ↓, Portal) */}
          <nav className="hidden md:flex items-center gap-9 lg:gap-12">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-1.5 text-[14px] lg:text-[15px] font-sans font-normal text-white/90 hover:text-white transition-colors py-1 focus:outline-none"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-white/70 transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-white" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 text-white hover:text-sky transition-colors focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
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
