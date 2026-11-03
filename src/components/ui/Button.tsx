"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white" | "nature";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: LucideIcon;
  showArrow?: boolean;
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon: Icon,
  showArrow = false,
  external = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const sizeStyles = {
    sm: "px-5 py-2 text-xs tracking-wider uppercase gap-2",
    md: "px-7 py-3.5 text-sm tracking-wider uppercase gap-2.5",
    lg: "px-9 py-4 text-base tracking-wider uppercase gap-3 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-ocean text-white hover:bg-ocean-deep hover:shadow-lg hover:shadow-ocean/20 focus-visible:ring-ocean active:scale-[0.98]",
    secondary:
      "bg-ocean-light text-ocean hover:bg-ocean hover:text-white transition-colors focus-visible:ring-ocean active:scale-[0.98]",
    outline:
      "border border-ocean/30 text-ocean hover:border-ocean hover:bg-ocean hover:text-white transition-all focus-visible:ring-ocean active:scale-[0.98]",
    white:
      "bg-white text-ocean hover:bg-slate-100 hover:shadow-xl hover:shadow-black/10 focus-visible:ring-white active:scale-[0.98]",
    nature:
      "bg-nature text-white hover:bg-nature-emerald hover:shadow-lg hover:shadow-nature/25 focus-visible:ring-nature active:scale-[0.98]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
          className={cn(combinedClasses, "group")}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(combinedClasses, "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(combinedClasses, "group")} {...props}>
      {content}
    </button>
  );
}

