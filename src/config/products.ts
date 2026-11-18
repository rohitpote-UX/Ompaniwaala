export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  capacity: string;
  category: "residential" | "commercial" | "on-demand";
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "20l-jar",
    name: "20-Litre Drinking Water Jar",
    tagline: "Primary Confirmed Supply for Homes & Workplaces",
    capacity: "20 Litres",
    category: "residential",
    description:
      "Clean, sealed 20-litre water jars for daily domestic and office drinking water needs. Carefully handled, securely capped, and delivered directly to your doorstep in Aundh, Baner, and Khadki.",
    features: [
      "Standard 20-litre food-grade water jar",
      "Thoroughly inspected & clean container",
      "Hygienic tamper-evident cap seal",
      "Doorstep delivery for homes, shops & offices",
    ],
    image: "/images/hero-jar-20l.jpg",
    badge: "Primary Service",
  },
  {
    id: "bulk-supply",
    name: "Bulk & Corporate 20L Supply",
    tagline: "Scheduled Volume Replenishment",
    capacity: "20 Litres (Multi-Jar)",
    category: "commercial",
    description:
      "Regular recurring delivery of 20L water jars for corporate offices, commercial shops, institutions, and workplaces across our Pune delivery areas.",
    features: [
      "Custom jar quantities per delivery",
      "Consistent recurring dispatch schedule",
      "Punctual morning service",
      "Direct coordination for local businesses",
    ],
    image: "/images/card-dispenser.jpg",
    badge: "Commercial Supply",
  },
  {
    id: "custom-schedule",
    name: "Custom Delivery Schedule",
    tagline: "Flexible Delivery Frequency",
    capacity: "Tailored Supply",
    category: "on-demand",
    description:
      "Flexible delivery options including daily morning drops, alternate-day supply, or on-demand replenishment suited to your household or workplace water usage.",
    features: [
      "Daily or alternate-day options",
      "Prompt customer service response",
      "Service routes in Aundh, Baner & Khadki",
      "Contact to confirm specific locality schedules",
    ],
    image: "/images/hero-delivery-supplier.jpg",
    badge: "Flexible Service",
  },
];
