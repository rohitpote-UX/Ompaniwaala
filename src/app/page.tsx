import React from "react";
import StellarHero from "@/components/sections/stellar/StellarHero";
import WhatWeDoStatement from "@/components/sections/stellar/WhatWeDoStatement";
import ProductShowcase from "@/components/sections/ProductShowcase";
import QualitySection from "@/components/sections/QualitySection";
import DeliveryExperience from "@/components/sections/DeliveryExperience";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 01 & 02. Master Editorial Hero (100vh) */}
      <StellarHero />

      {/* 03. "What We Do" Editorial Statement with Inline Images */}
      <WhatWeDoStatement />

      {/* Existing Sections Below (To be replaced in Sections 4-11) */}
      <div id="products">
        <ProductShowcase />
      </div>
      <div id="capabilities">
        <QualitySection />
      </div>
      <div id="delivery-areas">
        <DeliveryExperience />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}
