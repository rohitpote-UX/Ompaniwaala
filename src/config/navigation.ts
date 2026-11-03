export interface NavItem {
  label: string;
  href: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Products", href: "/products" },
  { label: "Approach", href: "/#approach" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV_ITEMS = {
  narrative: [
    { label: "The Kalash Story", href: "/our-story" },
    { label: "Beyond The Drop", href: "/#story-of-drop" },
    { label: "Symbol Anatomy", href: "/#meaning" },
    { label: "Brand Philosophy", href: "/#philosophy" },
  ],
  offerings: [
    { label: "20-Litre Jar Hydration", href: "/products#20l-jar" },
    { label: "Pure Packaged Formats", href: "/products#packaged" },
    { label: "Enterprise & Office Plans", href: "/products#workplaces" },
    { label: "Custom Dispenser Systems", href: "/products#accessories" },
  ],
  logistics: [
    { label: "Pune Service Hubs", href: "/contact#coverage" },
    { label: "Delivery Schedules", href: "/contact#timing" },
    { label: "Order Verification", href: "/contact#verify" },
    { label: "Direct WhatsApp Line", href: "/contact#whatsapp" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Supply", href: "/terms" },
  ],
};

