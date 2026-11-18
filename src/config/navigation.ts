export interface NavItem {
  label: string;
  href: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Service", href: "/our-story" },
  { label: "Products", href: "/products" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV_ITEMS = {
  narrative: [
    { label: "About Ranjeet Enterprises", href: "/our-story" },
    { label: "Purity & Quality Standards", href: "/#capabilities" },
    { label: "Delivery Workflow", href: "/#capabilities" },
    { label: "Service Commitment", href: "/our-story#commitment" },
  ],
  offerings: [
    { label: "20-Litre Drinking Water Jars", href: "/products" },
    { label: "Bulk & Corporate Supply", href: "/products" },
    { label: "Residential Doorstep Delivery", href: "/products" },
    { label: "Custom Supply Schedule", href: "/products" },
  ],
  logistics: [
    { label: "Aundh Service Hub", href: "/contact#coverage" },
    { label: "Baner Delivery Route", href: "/contact#coverage" },
    { label: "Khadki Service Route", href: "/contact#coverage" },
    { label: "Google Business Profile", href: "https://www.google.com/maps/place/Ranjeet+enterprises+(20+ltr.+water+jar+supplier+pune)/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Supply", href: "/terms" },
  ],
};
