"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: "white" | "navy" | "aqua" | "outline-white" | "outline-navy";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  showArrow?: boolean;
  className?: string;
}

export default function PillButton({
  children,
  variant = "white",
  size = "md",
  href,
  external = false,
  showArrow = false,
  className,
  ...props
}: PillButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center rounded-full font-sans font-medium uppercase tracking-caps select-none cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-xs gap-2",
    md: "px-7 py-3.5 text-xs sm:text-[13px] gap-2.5",
    lg: "px-9 py-4 text-sm gap-3",
  };

  const variantStyles = {
    white:
      "bg-white text-navy hover:bg-sky-subtle shadow-sm hover:shadow-md focus-visible:ring-white",
    navy:
      "bg-navy text-white hover:bg-navy-light shadow-md hover:shadow-lg focus-visible:ring-navy",
    aqua:
      "bg-aqua text-white hover:bg-aqua-dark shadow-md hover:shadow-aqua/20 focus-visible:ring-aqua",
    "outline-white":
      "border border-white/30 text-white hover:border-white hover:bg-white/10 focus-visible:ring-white",
    "outline-navy":
      "border border-navy/20 text-navy hover:border-navy hover:bg-navy/5 focus-visible:ring-navy",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {/* Signature Text-Swap Container */}
      <span className="relative block h-[1.3em] overflow-hidden leading-[1.3em]">
        <span className="block transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="absolute top-full left-0 block w-full transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full font-serif italic normal-case tracking-normal"
        >
          {children}
        </span>
      </span>

      {showArrow && (
        <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
