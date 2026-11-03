"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CONTACT_CONFIG } from "@/config/contact";
import { CalendarCheck, MessageSquare, Clock, MapPin, CheckCircle2 } from "lucide-react";

export default function DeliveryExperience() {
  const steps = [
    {
      step: "01",
      title: "Direct WhatsApp or Phone Request",
      desc: "No clumsy portals or complicated registrations. Message our dedicated line with your address and quantity.",
    },
    {
      step: "02",
      title: "Scheduled Morning Dispatch",
      desc: "Our Pune route vehicles operate on fixed daily schedules, ensuring prompt arrival before your day gets busy.",
    },
    {
      step: "03",
      title: "Doorstep Exchange & Setup",
      desc: "Hygienic jar handling right to your kitchen or pantry station, with clean empty vessel return collection.",
    },
    {
      step: "04",
      title: "Flexible Subscriptions",
      desc: "Set up alternate-day or weekly recurring replenishments with one-click pause whenever you travel.",
    },
  ];

  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & Process */}
          <div className="lg:col-span-6 space-y-8">
            <SectionHeading
              overline="Convenience & Logistics"
              title="GOOD WATER. WITHOUT THE HASSLE."
              subtitle="An easier, more dependable way to arrange your everyday drinking-water supply in Pune. No delays, no guesswork, no lifted burdens."
              className="mb-8"
            />

            <div className="space-y-6">
              {steps.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-ocean text-white font-mono text-sm font-semibold flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-ocean mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                href={CONTACT_CONFIG.whatsappMessageTemplate()}
                external
                variant="nature"
                size="md"
                icon={MessageSquare}
              >
                Schedule Delivery on WhatsApp
              </Button>
              <Button href="/contact" variant="outline" size="md">
                View Pune Hub Details
              </Button>
            </div>
          </div>

          {/* Right Card: Pune Coverage Box */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-ocean-tint border border-ocean-light p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-nature" />
                <span className="text-xs font-semibold uppercase tracking-widest text-ocean">
                  Operational Route Network
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-display font-medium text-ocean mb-4">
                Serving Key Pune Neighbourhoods
              </h3>
              <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                Dedicated daily delivery vehicles serving residential complexes, independent homes, and business parks across Pune:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {CONTACT_CONFIG.serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2.5 text-xs text-ocean font-medium bg-white/80 px-3.5 py-2.5 rounded-xl border border-slate-200/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-nature shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-ocean" />
                  <span>{CONTACT_CONFIG.operatingHours}</span>
                </div>
                <span className="text-nature-emerald font-semibold">Live Routes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

