import React from "react";
import { Metadata } from "next";
import { generateSiteMetadata } from "@/lib/seo";
import { BRAND_CONFIG } from "@/config/brand";
import { CONTACT_CONFIG } from "@/config/contact";

export const metadata: Metadata = generateSiteMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy and customer data protection principles for KALASH drinking water services in Pune.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="container-custom max-w-4xl pt-8 pb-16">
        <span className="text-xs font-mono font-semibold tracking-widest uppercase text-nature-emerald">
          Legal &amp; Trust
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-light text-ocean tracking-tight mt-2 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-600">
          <p>
            Last Updated: November 2026. This Privacy Policy outlines how{" "}
            <strong>{BRAND_CONFIG.name}</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operating in{" "}
            {BRAND_CONFIG.market.city}, {BRAND_CONFIG.market.state}, handles customer contact information and order coordination.
          </p>

          <h2 className="text-xl font-display font-semibold text-ocean mt-8 mb-3">
            1. Information We Collect
          </h2>
          <p>
            When you inquire about or order drinking water services, we collect only the necessary operational details required to coordinate deliveries:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your name and contact phone number.</li>
            <li>Your residential or commercial delivery address in Pune.</li>
            <li>Your preferred delivery slot, recurring schedule, and jar volume requirements.</li>
            <li>Records of delivery confirmations, returnable jar exchanges, and billing invoices.</li>
          </ul>

          <h2 className="text-xl font-display font-semibold text-ocean mt-8 mb-3">
            2. How We Use Your Information
          </h2>
          <p>
            Your details are used strictly for:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Routing our delivery vehicles to your address efficiently.</li>
            <li>Sending delivery slot reminders, dispatch notifications, or emergency schedule changes.</li>
            <li>Responding to customer support queries and subscription adjustments.</li>
            <li>Accounting and invoicing for commercial accounts.</li>
          </ul>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal data to any third-party advertisers or marketing brokers.
          </p>

          <h2 className="text-xl font-display font-semibold text-ocean mt-8 mb-3">
            3. Communication Channels
          </h2>
          <p>
            We use direct telephone calls, SMS, and WhatsApp messaging to confirm orders and communicate with you. You may adjust or pause communication preferences at any time by messaging our care desk at{" "}
            <a href={`mailto:${CONTACT_CONFIG.email}`} className="text-ocean underline">
              {CONTACT_CONFIG.email}
            </a>.
          </p>

          <h2 className="text-xl font-display font-semibold text-ocean mt-8 mb-3">
            4. Data Retention &amp; Security
          </h2>
          <p>
            We implement sensible administrative and technical precautions to safeguard customer records against unauthorized disclosure or loss. Contact records are retained only for as long as needed to fulfill ongoing supply arrangements and fulfill statutory accounting compliance in India.
          </p>

          <h2 className="text-xl font-display font-semibold text-ocean mt-8 mb-3">
            5. Contact Us
          </h2>
          <p>
            If you have questions regarding this policy or wish to review your delivery account data, please reach out to our Pune coordination desk:
          </p>
          <div className="p-4 rounded-xl bg-surface-ice border border-slate-200 text-xs sm:text-sm text-ocean space-y-1">
            <p><strong>{BRAND_CONFIG.name} Drinking Water Hub</strong></p>
            <p>Location: {BRAND_CONFIG.market.city}, {BRAND_CONFIG.market.state}, India</p>
            <p>Email: {CONTACT_CONFIG.email}</p>
            <p>Phone: {CONTACT_CONFIG.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

