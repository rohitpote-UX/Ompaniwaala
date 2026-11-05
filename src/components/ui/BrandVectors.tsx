import React from "react";
import { cn } from "@/lib/utils";

/**
 * Luxury Circular Brand Seal / Quality Crest
 */
export function KalashSeal({
  className,
  size = 140,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn("relative inline-flex items-center justify-center select-none", className)}
      style={{ width: size, height: size }}
    >
      {/* Outer Rotating Text Ring */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-[spin_24s_linear_infinite]"
      >
        <path
          id="sealCirclePath"
          d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
          fill="none"
        />
        <text className="text-[11.5px] font-sans font-medium uppercase tracking-[0.24em] fill-navy/70">
          <textPath href="#sealCirclePath" startOffset="0%">
            • KALASH PURE BY NATURE • PUNE HYDRATION • EST. 2018
          </textPath>
        </text>
      </svg>

      {/* Central Emblem & Laurel Leaves */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-navy/10 flex items-center justify-center">
          <svg
            viewBox="0 0 48 48"
            className="w-8 h-8 text-ocean fill-current"
          >
            {/* Elegant Kalash Vessel + Water Droplet Vector */}
            <path d="M24 6 C20 12, 16 16, 16 22 C16 27.5, 19.5 31, 24 31 C28.5 31, 32 27.5, 32 22 C32 16, 28 12, 24 6 Z" fill="currentColor" opacity="0.9" />
            <path d="M12 28 C10 32, 14 38, 24 40 C34 38, 38 32, 36 28 C33 30, 29 32, 24 32 C19 32, 15 30, 12 28 Z" fill="currentColor" opacity="0.35" />
            {/* Leaves */}
            <path d="M18 16 C12 12, 10 6, 10 4 C12 6, 16 10, 18 16 Z" fill="#1FB5D6" />
            <path d="M30 16 C36 12, 38 6, 38 4 C36 6, 32 10, 30 16 Z" fill="#1FB5D6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * Concentric Water Wave Ripples Background Vector
 */
export function WaterRipplesBackground({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute pointer-events-none w-full h-full object-cover opacity-25", className)}
      preserveAspectRatio="none"
    >
      <circle cx="600" cy="400" r="160" stroke="#0A1F33" strokeWidth="0.75" strokeDasharray="3 3" />
      <circle cx="600" cy="400" r="260" stroke="#1FB5D6" strokeWidth="0.75" />
      <circle cx="600" cy="400" r="380" stroke="#0A1F33" strokeWidth="0.5" strokeDasharray="4 4" />
      <circle cx="600" cy="400" r="520" stroke="#1FB5D6" strokeWidth="0.5" />
      <circle cx="600" cy="400" r="680" stroke="#0A1F33" strokeWidth="0.4" strokeDasharray="6 6" />
    </svg>
  );
}

/**
 * Elegant Botanical Leaf Flourish Vector
 */
export function BotanicalFlourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-16 h-6 text-aqua", className)}
    >
      <path
        d="M2 12 C14 12, 22 2, 32 2 C42 2, 50 12, 62 12 C50 12, 42 22, 32 22 C22 22, 14 12, 2 12 Z"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="none"
      />
      <circle cx="32" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}
