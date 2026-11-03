"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAV_ITEMS } from "@/config/navigation";
import { CONTACT_CONFIG } from "@/config/contact";
import { BRAND_CONFIG } from "@/config/brand";
import { Menu, MessageSquare, PhoneCall } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "py-6 bg-transparent"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean rounded-md"
            aria-label={`${BRAND_CONFIG.name} — ${BRAND_CONFIG.tagline}`}
          >
            <div className="relative w-36 sm:w-44 h-11 sm:h-12 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/brand/kalash-logo-full.png"
                alt="KALASH Pure by Nature Logo"
                fill
                priority
                sizes="(max-width: 640px) 150px, 180px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-xs xl:text-sm font-medium tracking-[0.15em] uppercase transition-colors py-1",
                    isActive
                      ? "text-ocean font-semibold"
                      : "text-slate-600 hover:text-ocean"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-ocean rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_CONFIG.phoneRaw}`}
              className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-ocean hover:text-nature-emerald transition-colors px-3 py-2"
              title="Call KALASH Water Pune"
            >
              <PhoneCall className="w-3.5 h-3.5 text-nature" />
              <span>{CONTACT_CONFIG.phone}</span>
            </a>

            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="text-xs font-semibold"
            >
              Order Water
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2.5 rounded-full text-ocean hover:bg-slate-100 transition-colors lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

