import React from "react";
import { Metadata } from "next";
import { generateSiteMetadata } from "@/lib/seo";
import { BRAND_CONFIG } from "@/config/brand";
import { CONTACT_CONFIG } from "@/config/contact";

export const metadata: Metadata = generateSiteMetadata({
  title: "Terms and Conditions of Supply",
  description: "Terms and conditions of supply for KALASH drinking water deliveries in Pune, Maharashtra.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="container-custom max-w-4xl pt-8 pb-16">
        <span className="text-xs font-mono font-semibold tracking-widest uppercase text-nature-emerald">
          Terms of Service
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-light text-ocean tracking-tight mt-2 mb-8">
          Terms &amp; Conditions of Supply
        </h1>

        <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-600">
          <p>
            Welcome to <strong>{BRAND_CONFIG.name}</strong>. By requesting, ordering, or subscribing to our drinking water delivery services in {BRAND_CONFIG.market.city}, you agree to the operational terms outlined below.
          </p>

          <h2 className="text-xl font-display font-semibold text-ocean mt-8 mb-3">
            1. Ordering &amp; Delivery Logistics
          </h2>
          <p>
            Delivery schedules operate daily between 07:00 AM and 08:30 PM across designated Pune routes. While our team maintains strict timing windows, adverse traffic, seasonal rainfall, or force majeure events may occasionally cause minor dispatch variations.
          </p>

          <h2 className="text-xl font-display font-semibold text-ocean mt-8 mb-3">
            2. 20-Litre Returnable Jar Security
          </h2>
          <p>
            To maintain hygienic closed-loop container integrity:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>20-Litre jars remain the property of KALASH and are provided under a refundable container security deposit.</li>
            <li>Customers agree to use returnable jars solely for KALASH drinking water and must not fill them with tap water, oil, chemicals, or foreign liquids.</li>
            <li>Damaged or unreturned containers will forfeit the associated deposit value.</li>
          </ul>

          <h2 className="text-xl font-display font-semibold text-ocean mt-8 mb-3">
            3. Tamper-Evident Seals &amp; Acceptance
          </h2>
          <p>
            Every KALASH jar and bottle is delivered with an intact, heat-sealed tamper-evident band. Customers are encouraged to inspect this seal upon delivery. If a seal shows evidence of damage or prior opening, the recipient should refuse acceptance immediately and our logistics desk will replace it free of charge.
          </p>

          <h2 className="text-xl font-display font-semibold text-ocean mt-8 mb-3">
            4. Payments &amp; Invoicing
          </h2>
          <p>
            Payments for retail and residential deliveries may be settled via UPI, digital payment, or cash upon delivery. Corporate accounts with recurring subscriptions receive consolidated monthly tax invoices payable within the agreed credit term.
          </p>

          <h2 className="text-xl font-display font-semibold text-ocean mt-8 mb-3">
            5. Jurisdiction
          </h2>
          <p>
            Any disputes arising from drinking water supply contracts or deliveries shall be subject to the exclusive jurisdiction of the civil courts in Pune, Maharashtra, India.
          </p>

          <div className="pt-6 mt-8 border-t border-slate-200 text-xs text-slate-500">
            <p>For service clarification or billing support, contact {CONTACT_CONFIG.email} or call {CONTACT_CONFIG.phone}.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

