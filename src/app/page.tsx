import React from "react";
import StellarHero from "@/components/sections/stellar/StellarHero";
import WhatWeDoStatement from "@/components/sections/stellar/WhatWeDoStatement";
import ExploreAreas from "@/components/sections/stellar/ExploreAreas";
import KeyFigures from "@/components/sections/stellar/KeyFigures";
import FeaturedProducts from "@/components/sections/stellar/FeaturedProducts";
import AboutEditorial from "@/components/sections/stellar/AboutEditorial";
import CapabilitiesSection from "@/components/sections/stellar/CapabilitiesSection";
import CtaBanner from "@/components/sections/stellar/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 01 & 02. Master Editorial Hero (100vh Full-Bleed with Looping Video) */}
      <StellarHero />

      {/* 03. "What We Do" Editorial Statement with Scrubbing Inline Images */}
      <WhatWeDoStatement />

      {/* 04. "Explore Our Delivery Areas" (5 Interactive Expanding Panels) */}
      <ExploreAreas />

      {/* 05. Key Figures & Scale Metrics */}
      <KeyFigures />

      {/* 06. Featured Products (20L Jar, Floor Dispenser, Packaged Mineral Bottles) */}
      <FeaturedProducts />

      {/* 07. About Us & Pune Operational Commitment */}
      <AboutEditorial />

      {/* 08. Our Capabilities (Multi-Stage Purity Workflow) */}
      <CapabilitiesSection />

      {/* 09. Full-Width Deep Navy Editorial CTA Banner */}
      <CtaBanner />
    </>
  );
}
