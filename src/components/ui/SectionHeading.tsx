import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  overline?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  overline,
  title,
  subtitle,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 md:mb-16",
        alignmentClasses[align],
        className
      )}
    >
      {overline && (
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-2 h-2 rounded-full bg-nature animate-pulse-subtle" />
          <span
            className={cn(
              "text-xs md:text-sm font-semibold tracking-[0.2em] uppercase",
              dark ? "text-nature-leaf" : "text-nature-emerald"
            )}
          >
            {overline}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6",
          dark ? "text-white" : "text-ocean"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl",
            dark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

