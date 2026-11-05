"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

// Register ScrollTrigger once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Synchronize Lenis smooth scrolling with GSAP ticker & ScrollTrigger
 */
export function initLenisScrollTriggerSync(lenis: Lenis) {
  lenis.on("scroll", ScrollTrigger.update);

  const updateTicker = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(updateTicker);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(updateTicker);
    lenis.off("scroll", ScrollTrigger.update);
  };
}

/**
 * Masked line text reveal (Split lines simulation without paid Club GSAP dependency)
 */
export function splitReveal(
  elements: string | Element | NodeListOf<Element> | null,
  options?: {
    trigger?: string | Element;
    start?: string;
    delay?: number;
    stagger?: number;
    duration?: number;
  }
) {
  if (typeof window === "undefined" || !elements) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const targetElements =
    typeof elements === "string" ? document.querySelectorAll(elements) : elements;

  const trigger = options?.trigger || targetElements;

  return gsap.fromTo(
    targetElements,
    { y: "100%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration: options?.duration || 1.1,
      ease: "power4.out",
      delay: options?.delay || 0.1,
      stagger: options?.stagger || 0.08,
      scrollTrigger: {
        trigger: trigger as gsap.DOMTarget,
        start: options?.start || "top 85%",
        once: true,
      },
    }
  );
}

/**
 * Image clip-path inset reveal + inner scale parallax
 */
export function imageReveal(
  container: string | Element,
  innerImage?: string | Element
) {
  if (typeof window === "undefined") return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container as gsap.DOMTarget,
      start: "top 80%",
      once: true,
    },
  });

  tl.fromTo(
    container,
    { clipPath: "inset(100% 0% 0% 0%)" },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.25,
      ease: "power4.inOut",
    }
  );

  if (innerImage) {
    tl.fromTo(
      innerImage,
      { scale: 1.2 },
      { scale: 1.0, duration: 1.4, ease: "power3.out" },
      "-=1.1"
    );
  }

  return tl;
}

/**
 * Numeric Counter scrub / trigger
 */
export function counterReveal(
  element: Element,
  endValue: number,
  options?: { prefix?: string; suffix?: string; duration?: number }
) {
  const obj = { val: 0 };
  const suffix = options?.suffix || "";
  const prefix = options?.prefix || "";

  return gsap.to(obj, {
    val: endValue,
    duration: options?.duration || 2.2,
    ease: "power2.out",
    snap: { val: 1 },
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      once: true,
    },
    onUpdate: () => {
      element.textContent = `${prefix}${Math.floor(obj.val).toLocaleString()}${suffix}`;
    },
  });
}

/**
 * Scrub Parallax for background or large visual images
 */
export function parallaxImage(
  image: string | Element,
  trigger: string | Element,
  yPercent: number = 12
) {
  if (typeof window === "undefined") return;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  return gsap.fromTo(
    image,
    { yPercent: -yPercent },
    {
      yPercent: yPercent,
      ease: "none",
      scrollTrigger: {
        trigger: trigger as gsap.DOMTarget,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    }
  );
}
