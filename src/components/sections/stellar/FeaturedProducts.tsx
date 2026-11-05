"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import PillButton from "@/components/ui/PillButton";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const PRODUCTS = [
  {
    title: "20-Litre Returnable Jar",
    accent: "Purity Sealed",
    category: "Homes & Workplaces",
    description:
      "BPA-free food-grade polycarbonate jar featuring hermetically sealed tamper-evident caps and multi-stage automated wash cycles.",
    image: "/images/hero-jar-20l.jpg",
    specs: ["10-Stage Purification", "Ozonated Cap Seal", "Daily Morning Delivery"],
    href: "/contact",
  },
  {
    title: "Smart Floor Dispenser",
    accent: "Thermal Control",
    category: "Corporate & Estates",
    description:
      "Heavy-duty stainless steel cooling and instant heating dispenser with integrated UV sanitization and complimentary monthly service.",
    image: "/images/card-dispenser.jpg",
    specs: ["Hot, Cold & Ambient", "Child Safety Lock", "Free Maintenance"],
    href: "/contact",
  },
  {
    title: "Packaged Natural Formats",
    accent: "On-the-Go",
    category: "Events & Boardrooms",
    description:
      "Eco-conscious 500ml and 1L packaged mineral bottles for corporate events, board meetings, and daily conference hydration.",
    image: "/images/hero-bottles-splash.jpg",
    specs: ["Balanced Minerals", "Recyclable PET", "Bulk Carton Supply"],
    href: "/contact",
  },
];

export default function FeaturedProducts() {
  return (
    <section
      id="products"
      className="relative w-full bg-canvas text-navy py-28 sm:py-36 lg:py-44"
    >
      <div className="container-custom">
        {/* Section Header with Generous White Spacing */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <span className="text-stellar-label text-navy/50 uppercase tracking-[0.2em] font-medium inline-flex items-center gap-2 mb-4 block">
              <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
              Product Catalog
            </span>
            <h2 className="text-stellar-h2 font-sans font-medium text-navy tracking-tight leading-[1.08]">
              Crafted for everyday{" "}
              <span className="font-accent-italic font-normal italic text-ocean">
                purity
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-navy/70 max-w-md leading-relaxed font-normal">
            Every format is engineered for absolute hygiene, dependable supply, and effortless setup for residential societies and corporate offices.
          </p>
        </div>

        {/* 3 Editorial Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {PRODUCTS.map((product) => (
            <div
              key={product.title}
              className="group flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-8 border border-navy/10 hover:border-navy/20 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Product Image Container with Generous Aspect Ratio & Hover Zoom */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-8 bg-sky-subtle">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-sans uppercase tracking-[0.14em] text-navy font-semibold">
                    {product.accent}
                  </div>
                </div>

                {/* Category & Title */}
                <span className="text-xs uppercase font-sans tracking-[0.16em] text-navy/50 font-semibold block mb-2">
                  {product.category}
                </span>
                <h3 className="text-2xl font-sans font-medium text-navy tracking-tight group-hover:text-ocean transition-colors">
                  {product.title}
                </h3>
                <p className="mt-3 text-sm text-navy/70 leading-relaxed font-normal">
                  {product.description}
                </p>

                {/* Specs List */}
                <div className="mt-6 pt-6 border-t border-navy/10 space-y-2.5">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs text-navy/80 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-aqua shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-navy/10">
                <PillButton
                  href={product.href}
                  variant="outline-navy"
                  size="md"
                  showArrow
                  className="w-full justify-center"
                >
                  Order / Inquire
                </PillButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
