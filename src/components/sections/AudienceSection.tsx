"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CONTACT_CONFIG } from "@/config/contact";
import { Home, Briefcase, Coffee, Check, ArrowRight } from "lucide-react";

export default function AudienceSection() {
  const audiences = [
    {
      icon: Home,
      tag: "Sanctuary",
      title: "Homes & Families",
      description:
        "Pure, dependable drinking water for daily cooking, morning hydration routines, and family peace of mind. Delivered quietly to your doorstep with flexible schedules.",
      points: [
        "Consistent morning delivery schedules",
        "Safe food-grade containers for children & elders",
        "Easy jar replacement without heavy lifting hassle",
        "Simple pause when taking vacations",
      ],
      ctaText: "Order for Home",
    },
    {
      icon: Briefcase,
      tag: "Productivity",
      title: "Offices & Workplaces",
      description:
        "High-consumption drinking water routines designed for tech parks, startup studios, co-working spaces, and corporate offices across Pune's business corridors.",
      points: [
        "Bulk daily and alternate-day jar drops",
        "Pantry dispenser integration and maintenance",
        "Consolidated monthly invoicing for accounting",
        "Dedicated corporate account support line",
      ],
      ctaText: "Corporate Plan",
    },
    {
      icon: Coffee,
      tag: "Hospitality",
      title: "Cafes & Dining Venues",
      description:
        "Consistent water quality essential for coffee extraction, fine tea brewing, artisanal cooking, and clean guest hydration in restaurants and hospitality spaces.",
      points: [
        "Neutral mineral balance preserving coffee notes",
        "Packaged 500ml & 1L formats for guest tables",
        "Emergency on-demand weekend top-up dispatch",
        "Sanitized hygienic handling standards",
      ],
      ctaText: "Commercial Supply",
    },
  ];

  return (
    <section className="section-padding bg-surface-ice relative">
      <div className="container-custom">
        <SectionHeading
          overline="Tailored Solutions"
          title="PURITY ENGINEERED FOR EVERY ENVIRONMENT."
          subtitle="Whether nourishing a peaceful household or sustaining high-energy corporate teams, KALASH adapts seamlessly to your volume and schedule."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <div
                key={aud.title}
                className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl hover:border-ocean transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-ocean-tint text-ocean flex items-center justify-center group-hover:bg-ocean group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-widest text-nature-emerald">
                      {aud.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-medium text-ocean mb-3">
                    {aud.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {aud.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {aud.points.map((pt, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-600 flex items-start gap-2.5"
                      >
                        <Check className="w-4 h-4 text-nature shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  href={CONTACT_CONFIG.whatsappMessageTemplate(aud.title)}
                  external
                  variant="outline"
                  size="md"
                  className="w-full justify-center group-hover:bg-ocean group-hover:text-white group-hover:border-ocean transition-all"
                >
                  {aud.ctaText}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

