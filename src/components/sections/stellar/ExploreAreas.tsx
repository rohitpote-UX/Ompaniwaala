"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const DELIVERY_AREAS = [
  {
    id: "baner",
    name: "Baner & Kothrud",
    tagline: "Residential towers & residential societies",
    image: "/images/delivery-van-route.jpg",
    pincodes: "411045, 411038",
    timing: "Daily 6:30 AM – 11:00 AM",
  },
  {
    id: "hinjawadi",
    name: "Hinjawadi IT Park",
    tagline: "Corporate campuses & tech hubs",
    image: "/images/card-corporate.jpg",
    pincodes: "411057",
    timing: "Mon – Sat 7:00 AM – 2:00 PM",
  },
  {
    id: "kharadi",
    name: "Kharadi & Viman Nagar",
    tagline: "Commercial complexes & apartments",
    image: "/images/city-delivery-dusk.jpg",
    pincodes: "411014",
    timing: "Daily 6:00 AM – 10:30 AM",
  },
  {
    id: "koregaon",
    name: "Koregaon Park & Kalyani",
    tagline: "Cafes, boutiques & private estates",
    image: "/images/card-process.jpg",
    pincodes: "411001, 411006",
    timing: "Daily 7:00 AM – 12:00 PM",
  },
  {
    id: "magarpatta",
    name: "Magarpatta City & Hadapsar",
    tagline: "Integrated townships & enterprises",
    image: "/images/card-dispenser.jpg",
    pincodes: "411028",
    timing: "Daily 6:30 AM – 11:30 AM",
  },
];

export default function ExploreAreas() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="delivery-areas"
      className="relative w-full bg-canvas text-navy py-28 sm:py-36 lg:py-44"
    >
      <div className="container-custom">
        {/* Section Header with Generous White Spacing */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <span className="text-stellar-label text-navy/50 uppercase tracking-[0.2em] font-medium inline-flex items-center gap-2 mb-4 block">
              <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
              Service Coverage
            </span>
            <h2 className="text-stellar-h2 font-sans font-medium text-navy tracking-tight leading-[1.08]">
              Explore our{" "}
              <span className="font-accent-italic font-normal italic text-ocean">
                delivery routes
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-navy/70 max-w-md leading-relaxed font-normal">
            Disciplined daily supply across Pune’s major residential societies, gated communities, and corporate IT corridors.
          </p>
        </div>

        {/* 5 Tall Interactive Image Panels (Expanding on Hover) */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 h-[640px] md:h-[580px] lg:h-[640px] w-full">
          {DELIVERY_AREAS.map((area, index) => {
            const isHovered = activeIndex === index;

            return (
              <div
                key={area.id}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(index)}
                className={cn(
                  "relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end p-6 sm:p-8",
                  isHovered
                    ? "md:flex-[3] flex-[2]"
                    : "md:flex-[1] flex-[1]"
                )}
              >
                {/* Background Image with Zoom */}
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className={cn(
                    "object-cover object-center transition-transform duration-700 ease-out",
                    isHovered ? "scale-105" : "scale-100"
                  )}
                />

                {/* Gradient Vignette for Legibility */}
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    isHovered
                      ? "bg-gradient-to-t from-navy/95 via-navy/50 to-navy/10"
                      : "bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"
                  )}
                />

                {/* Content Overlay */}
                <div className="relative z-10 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-white/70 font-semibold block">
                      {area.pincodes}
                    </span>
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300",
                        isHovered
                          ? "opacity-100 translate-y-0 bg-white text-navy"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-sans font-medium tracking-tight text-white">
                    {area.name}
                  </h3>

                  {/* Expanded details visible on hover */}
                  <div
                    className={cn(
                      "transition-all duration-500 overflow-hidden",
                      isHovered
                        ? "max-h-24 opacity-100 mt-3"
                        : "max-h-0 opacity-0 mt-0"
                    )}
                  >
                    <p className="text-sm text-white/80 leading-relaxed">
                      {area.tagline}
                    </p>
                    <span className="inline-block mt-2 text-xs text-aqua font-medium">
                      {area.timing}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
