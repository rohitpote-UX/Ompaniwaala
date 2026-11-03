"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CONTACT_CONFIG } from "@/config/contact";
import { PRODUCTS_DATA, type ProductItem } from "@/config/products";
import { Check, Shield, Droplets, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Section Heading & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <SectionHeading
            overline="The Product Portfolio"
            title="PURITY IN EVERY FORMAT."
            subtitle="Thoughtfully designed drinking-water formats for residential sanctuaries, bustling corporate desks, and active urban movement."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Solutions" },
              { id: "residential", label: "Residential Jars" },
              { id: "on-the-go", label: "Bottled Formats" },
              { id: "commercial", label: "Dispensers" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300",
                  activeCategory === tab.id
                    ? "bg-ocean text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-3xl bg-surface-ice border border-slate-200/80 p-8 lg:p-10 flex flex-col justify-between hover:border-ocean-medium hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              {/* Card Header & Badge */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  {product.badge && (
                    <span className="inline-block px-3 py-1 rounded-full bg-nature-soft text-nature-emerald text-[11px] font-semibold tracking-wider uppercase mb-2">
                      {product.badge}
                    </span>
                  )}
                  <h3 className="text-2xl lg:text-3xl font-display font-medium text-ocean">
                    {product.name}
                  </h3>
                  <p className="text-xs font-mono font-medium text-slate-400 uppercase tracking-widest mt-1">
                    {product.capacity} • {product.tagline}
                  </p>
                </div>
              </div>

              {/* Product Visual Container */}
              <div className="relative w-full h-52 sm:h-64 my-4 flex items-center justify-center rounded-2xl bg-white/70 border border-slate-100 p-6 group-hover:bg-white transition-colors">
                <div className="relative w-44 h-44 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Factual Description & Feature List */}
              <div className="space-y-4 pt-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-slate-200/60">
                  {product.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-xs text-slate-600 flex items-center gap-2.5"
                    >
                      <Check className="w-3.5 h-3.5 text-nature shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Direct Action */}
                <div className="pt-6 flex items-center justify-between gap-4">
                  <Button
                    href={CONTACT_CONFIG.whatsappMessageTemplate(product.name)}
                    external
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                    showArrow
                  >
                    Inquire On WhatsApp
                  </Button>

                  <Button
                    href="/contact"
                    variant="outline"
                    size="md"
                    className="hidden sm:inline-flex"
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

