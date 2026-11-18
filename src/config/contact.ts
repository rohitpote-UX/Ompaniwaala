export const CONTACT_CONFIG = {
  // Configurable contact values (leave empty or set via .env.local)
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  phoneRaw: process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW || "",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "",

  // Verified Business Address & Profile
  address:
    "DP Road, Near Omkar Complex, Opposite Persona Furnishing, Shambhu Vihar Society, Aundh, Pune, Maharashtra 411067, India",
  shortAddress: "DP Road, Aundh, Pune 411067",
  operatingHours: "Open 24 Hours (As listed on Google Business Profile)",
  hubLocation: "Aundh, Pune, Maharashtra",
  googleMapsUrl:
    "https://www.google.com/maps/place/Ranjeet+enterprises+(20+ltr.+water+jar+supplier+pune)/",
  googleReviewsCount: 12,
  googleRating: 4.6,

  // Confirmed & Inquire-to-Confirm Service Areas
  serviceAreas: [
    "Aundh",
    "Baner",
    "Khadki",
    "Pashan & University Area (Contact to confirm)",
    "Greater Pune (Corporate & Bulk Orders - Contact to confirm)",
  ],

  // WhatsApp order link generator with graceful fallback when number is not yet supplied
  whatsappMessageTemplate: (productName?: string) => {
    const rawNumber =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || CONTACT_CONFIG.whatsappNumber;
    const text = productName
      ? `Hello Ranjeet Enterprises, I would like to inquire about 20L water jar delivery for ${productName} in Pune.`
      : `Hello Ranjeet Enterprises, I would like to inquire about 20L drinking water jar delivery in Pune.`;

    if (rawNumber && rawNumber.trim().length > 0) {
      return `https://wa.me/${rawNumber.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
    }

    // Graceful fallback to verified Google Business Profile to prevent broken links
    return CONTACT_CONFIG.googleMapsUrl;
  },
};
