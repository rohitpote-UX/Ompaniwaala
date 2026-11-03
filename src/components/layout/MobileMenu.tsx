"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MAIN_NAV_ITEMS } from "@/config/navigation";
import { CONTACT_CONFIG } from "@/config/contact";
import { X, Phone, MessageSquare, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-ocean text-white transition-opacity duration-300 md:hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link href="/" onClick={onClose} className="flex items-center gap-3">
          <div className="relative w-28 h-10">
            <Image
              src="/brand/kalash-logo-white.png"
              alt="KALASH Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col justify-center px-8 py-10 space-y-6">
        <span className="text-xs font-semibold tracking-[0.25em] text-nature uppercase">
          Navigation
        </span>
        <div className="flex flex-col space-y-4">
          {MAIN_NAV_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="text-2xl font-light tracking-tight hover:text-nature-leaf transition-colors flex items-center justify-between group"
            >
              <span>{item.label}</span>
              <span className="text-xs text-white/40 group-hover:text-nature-leaf font-mono">
                0{index + 1}
              </span>
            </Link>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 space-y-3">
          <Button
            href={CONTACT_CONFIG.whatsappMessageTemplate()}
            external
            variant="nature"
            size="lg"
            className="w-full justify-center"
            icon={MessageSquare}
          >
            Instant WhatsApp Order
          </Button>

          <Button
            href={`tel:${CONTACT_CONFIG.phoneRaw}`}
            external
            variant="white"
            size="lg"
            className="w-full justify-center"
            icon={Phone}
          >
            Call {CONTACT_CONFIG.phone}
          </Button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-8 py-6 border-t border-white/10 bg-ocean-deep text-xs text-white/60 flex flex-col gap-2">
        <p className="font-medium text-white">KALASH Pune Hub</p>
        <p>{CONTACT_CONFIG.operatingHours}</p>
        <p className="text-[11px] text-white/40 pt-2">
          Designed & Developed by{" "}
          <a
            href="https://goldspade.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nature-leaf underline"
          >
            Goldspade
          </a>
        </p>
      </div>
    </div>
  );
}

