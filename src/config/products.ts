export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  capacity: string;
  category: "residential" | "commercial" | "on-the-go";
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "20l-jar",
    name: "KALASH 20-Litre Pure Water Jar",
    tagline: "The Flagship Household & Office Vessel",
    capacity: "20 Litres",
    category: "residential",
    description:
      "Engineered for daily drinking water needs. Hermetically sealed with tamper-evident caps following multi-stage hygienic sanitization protocols.",
    features: [
      "BPA-free food-grade polymer container",
      "Multi-stage automated interior & exterior wash",
      "Tamper-proof safety seal on every cap",
      "Scheduled doorstep replenishment in Pune",
    ],
    image: "/brand/kalash-emblem.png",
    badge: "Most Requested",
  },
  {
    id: "1l-bottle",
    name: "KALASH 1000ml Packaged Water",
    tagline: "Balanced Everyday Hydration",
    capacity: "1000 ml",
    category: "on-the-go",
    description:
      "Crisp, refreshing drinking water packaged for daily commutes, conferences, dining setups, and guest hospitality.",
    features: [
      "Ergonomic structural bottle design",
      "Recyclable food-grade PET format",
      "Clean neutral mineral balance",
      "Bulk carton dispatch available for events",
    ],
    image: "/brand/kalash-logo-full.png",
    badge: "Packaged Format",
  },
  {
    id: "500ml-bottle",
    name: "KALASH 500ml Compact Bottle",
    tagline: "Active & Meeting Room Convenience",
    capacity: "500 ml",
    category: "on-the-go",
    description:
      "Compact format ideal for boardroom meetings, sports, travel kits, and corporate gatherings requiring individual hygienic portions.",
    features: [
      "Compact, pocket-friendly silhouette",
      "Rigid grip with tamper-evident band",
      "Optimal single-serving volume",
      "Dispatched in sealed corrugated trays",
    ],
    image: "/brand/kalash-emblem.png",
  },
  {
    id: "dispenser-station",
    name: "KALASH Hygienic Tap Cradle",
    tagline: "Effortless Countertop Dispensing",
    capacity: "Compatible with 20L Jars",
    category: "commercial",
    description:
      "Robust food-grade countertop stand with non-drip valve for smooth, zero-spill dispensing in modern kitchens and pantry areas.",
    features: [
      "Rust-resistant stainless frame / food-grade stand",
      "Precision flow fast-pour valve",
      "Zero electricity required",
      "Easy to detach, clean, and sanitize",
    ],
    image: "/brand/kalash-logo-full.png",
    badge: "Accessory",
  },
];

