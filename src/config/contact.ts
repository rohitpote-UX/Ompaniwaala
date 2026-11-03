export const CONTACT_CONFIG = {
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 98220 00000",
  phoneRaw: process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW || "+919822000000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919822000000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "orders@kalashwater.in",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "care@kalashwater.in",
  operatingHours: "Monday to Sunday, 07:00 AM – 08:30 PM",
  hubLocation: "Pune, Maharashtra, India",
  serviceAreas: [
    "Kothrud & Karve Nagar",
    "Baner & Balewadi",
    "Wakad & Hinjawadi",
    "Aundh & Pashan",
    "Kalyani Nagar & Koregaon Park",
    "Viman Nagar & Kharadi",
    "Magarpatta & Hadapsar",
    "Shivaji Nagar & FC Road",
    "Bavdhan & Chandani Chowk",
  ],
  whatsappMessageTemplate: (productName?: string) => {
    const text = productName
      ? `Hello KALASH, I would like to inquire about ordering ${productName} in Pune.`
      : `Hello KALASH, I would like to place an order for drinking water delivery in Pune.`;
    return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },
};

