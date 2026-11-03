import React from "react";
import CinematicIntro from "@/components/sections/CinematicIntro";
import Hero from "@/components/sections/Hero";
import DropStory from "@/components/sections/DropStory";
import KalashMeaning from "@/components/sections/KalashMeaning";
import BrandPhilosophy from "@/components/sections/BrandPhilosophy";
import ProductShowcase from "@/components/sections/ProductShowcase";
import QualitySection from "@/components/sections/QualitySection";
import DeliveryExperience from "@/components/sections/DeliveryExperience";
import AudienceSection from "@/components/sections/AudienceSection";
import BrandStatement from "@/components/sections/BrandStatement";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 01. Cinematic Intro */}
      <CinematicIntro />

      {/* 02. The Hero (3D Centrepiece & Master Narrative) */}
      <Hero />

      {/* 03. The Story of a Drop */}
      <DropStory />

      {/* 04. The Meaning of Kalash */}
      <KalashMeaning />

      {/* 05. Brand Philosophy */}
      <BrandPhilosophy />

      {/* 06. The Kalash Product Experience */}
      <ProductShowcase />

      {/* 07. Quality and Trust */}
      <QualitySection />

      {/* 08. The Delivery Experience */}
      <DeliveryExperience />

      {/* 09. Who We Serve */}
      <AudienceSection />

      {/* 10. The Brand Statement */}
      <BrandStatement />

      {/* 11. Order and Contact */}
      <ContactSection />
    </>
  );
}

