import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { generateSiteMetadata } from "@/lib/seo";
import { PRODUCTS_DATA } from "@/config/products";
import { CONTACT_CONFIG } from "@/config/contact";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { Check, ShieldCheck, Truck, RefreshCw, MessageSquare, Phone } from "lucide-react";

export const metadata: Metadata = generateSiteMetadata({
  title: "Products & Formats — 20L Jars, Packaged Water & Accessories",
  description:
    "Explore KALASH premium drinking-water formats. Food-grade 20L jars, convenient packaged bottles, and ergonomic dispensing accessories delivered across Pune.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header */}
      <div className="container-custom pt-8 pb-16 border-b border-slate-100">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-tint border border-ocean-light">
            <span className="w-2 h-2 rounded-full bg-nature animate-pulse-subtle" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ocean">
              Hydration Solutions
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-ocean tracking-tight leading-[1.08]">
            DRINKING WATER <br />
            <span className="font-semibold text-ocean-deep">PORTFOLIO.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed pt-2">
            Engineered for daily domestic kitchens, corporate workstations, and active urban movement. Hygienically processed, hermetically sealed, and reliably delivered in Pune.
          </p>
        </div>
      </div>

      {/* Main Detailed Product Grid */}
      <div className="container-custom py-16 space-y-16">
        {PRODUCTS_DATA.map((product, index) => (
          <div
            key={product.id}
            id={product.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 rounded-3xl bg-surface-ice border border-slate-200/80 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Visual Column */}
            <div
              className={`lg:col-span-5 flex items-center justify-center p-8 bg-white rounded-2xl border border-slate-200/60 shadow-sm ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <div className="relative w-56 sm:w-64 h-56 sm:h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Details Column */}
            <div
              className={`lg:col-span-7 space-y-6 ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold tracking-widest uppercase text-nature-emerald">
                  {product.capacity} • {product.tagline}
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-medium text-ocean">
                  {product.name}
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed text-base">
                {product.description}
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-ocean">
                  Key Specifications &amp; Handling:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white/70 px-3 py-2 rounded-lg border border-slate-200/50"
                    >
                      <Check className="w-4 h-4 text-nature shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  href={CONTACT_CONFIG.whatsappMessageTemplate(product.name)}
                  external
                  variant="nature"
                  size="md"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Order via WhatsApp
                </Button>

                <Button
                  href={`tel:${CONTACT_CONFIG.phoneRaw}`}
                  external
                  variant="outline"
                  size="md"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Dispatch Desk
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Assurance Bar */}
      <section className="container-custom pt-8 pb-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-ocean text-white grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-nature-leaf shrink-0" />
            <div>
              <h4 className="font-medium text-white text-base">Food-Grade Standard</h4>
              <p className="text-xs text-white/70 mt-1">BPA-free non-leaching containers tested for neutral purity.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <RefreshCw className="w-10 h-10 text-nature-leaf shrink-0" />
            <div>
              <h4 className="font-medium text-white text-base">Hygienic Jar Exchange</h4>
              <p className="text-xs text-white/70 mt-1">Returned jars sanitized across multiple automated wash cycles.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <Truck className="w-10 h-10 text-nature-leaf shrink-0" />
            <div>
              <h4 className="font-medium text-white text-base">Pune Route Consistency</h4>
              <p className="text-xs text-white/70 mt-1">Dedicated delivery vehicles operating daily 07:00 AM – 08:30 PM.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

