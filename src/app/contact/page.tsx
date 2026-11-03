import React from "react";
import { Metadata } from "next";
import { generateSiteMetadata } from "@/lib/seo";
import ContactSection from "@/components/sections/ContactSection";
import { CONTACT_CONFIG } from "@/config/contact";
import { MapPin, Phone, MessageSquare, Clock, Mail, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = generateSiteMetadata({
  title: "Contact & Order Drinking Water — Pune Dispatch Desk",
  description:
    "Order KALASH drinking water in Pune. Direct WhatsApp ordering, phone dispatch, and scheduling for homes, apartments, and corporate offices across Pune.",
  path: "/contact",
});

export default function ContactPage() {
  const faqs = [
    {
      q: "What is the typical delivery schedule in Pune?",
      a: "Our delivery fleet operates daily from 07:00 AM to 08:30 PM. Morning delivery slots (07:00 AM – 11:30 AM) are popular for residential households before school and office commutes.",
    },
    {
      q: "How does the 20L empty jar exchange work?",
      a: "On your initial order, a standard refundable security deposit applies for the jar container. On subsequent orders, our delivery coordinator simply replaces your empty KALASH jar with a freshly sanitized, hermetically sealed one.",
    },
    {
      q: "Can we set up automated recurring deliveries?",
      a: "Yes. Many households choose an alternate-day or bi-weekly standing schedule, while corporate clients set fixed daily replenishment quantities based on workplace team sizes.",
    },
    {
      q: "Which areas in Pune do you currently serve?",
      a: `We serve major Pune hubs including ${CONTACT_CONFIG.serviceAreas.join(
        ", "
      )}, and adjacent residential sectors. Contact us if your locality is nearby.`,
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header */}
      <div className="container-custom pt-8 pb-12 border-b border-slate-100">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-tint border border-ocean-light">
            <span className="w-2 h-2 rounded-full bg-nature animate-pulse-subtle" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ocean">
              Pune Logistics Desk
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-ocean tracking-tight leading-[1.08]">
            ORDER WATER &amp; <br />
            <span className="font-semibold text-ocean-deep">CONNECT WITH US.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed pt-2">
            Direct communication, punctual morning dispatches, and respectful customer service for your daily drinking water in Pune.
          </p>
        </div>
      </div>

      {/* Main Interactive Contact Section */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <section className="section-padding bg-surface-ice">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-nature-emerald">
              Clarity &amp; Support
            </span>
            <h2 className="text-3xl font-display font-medium text-ocean mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2"
              >
                <h3 className="text-lg font-medium text-ocean flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-nature shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

