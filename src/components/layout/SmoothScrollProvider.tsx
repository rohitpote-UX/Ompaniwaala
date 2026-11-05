"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { initLenisScrollTriggerSync } from "@/lib/animations";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
    });

    lenisRef.current = lenis;

    // Synchronize Lenis with GSAP ScrollTrigger & Ticker
    const cleanupSync = initLenisScrollTriggerSync(lenis);

    return () => {
      cleanupSync();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
