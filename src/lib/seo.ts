import { Metadata } from "next";
import { BRAND_CONFIG } from "@/config/brand";
import { CONTACT_CONFIG } from "@/config/contact";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ranjeetenterprises.in";

export const PRIMARY_KEYWORDS = [
  "20 Litre Water Jar Supplier in Aundh Pune",
  "Water Jar Delivery in Aundh",
  "Drinking Water Supplier in Pune",
  "20 Litre Water Can Delivery Pune",
  "Water Jar Supplier Near Baner",
  "Water Jar Supplier Near Khadki",
  "Ranjeet Enterprises Pune",
  "20 Litre Water Jar Supplier Pune",
];

export function generateSiteMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title
    ? `${title} | ${BRAND_CONFIG.name} — 20 Litre Water Jar Supplier in Aundh Pune`
    : `${BRAND_CONFIG.name} — 20 Litre Water Jar Supplier in Aundh Pune | Drinking Water Delivery`;

  const metaDesc =
    description ||
    "Ranjeet Enterprises: 20 Litre drinking water jar supplier in Aundh, Pune. Reliable water jar delivery for homes, offices & commercial businesses across Aundh, Baner & Khadki. Open 24 hours.";

  const canonicalUrl = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description: metaDesc,
    keywords: PRIMARY_KEYWORDS,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: metaDesc,
      url: canonicalUrl,
      siteName: BRAND_CONFIG.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${siteUrl}/images/hero-jar-20l.jpg`,
          width: 1200,
          height: 630,
          alt: `${BRAND_CONFIG.name} — 20 Litre Water Jar Supplier in Aundh Pune`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDesc,
      images: [`${siteUrl}/images/hero-jar-20l.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export function getStructuredData() {
  const orgData: Record<string, any> = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: BRAND_CONFIG.name,
    url: siteUrl,
    slogan: BRAND_CONFIG.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: "DP Road, Near Omkar Complex, Opposite Persona Furnishing, Shambhu Vihar Society",
      addressLocality: "Aundh, Pune",
      addressRegion: "Maharashtra",
      postalCode: "411067",
      addressCountry: "IN",
    },
    sameAs: [CONTACT_CONFIG.googleMapsUrl],
  };

  if (CONTACT_CONFIG.phoneRaw) {
    orgData.contactPoint = {
      "@type": "ContactPoint",
      telephone: CONTACT_CONFIG.phoneRaw,
      contactType: "customer service",
      areaServed: "IN-MH",
      availableLanguage: ["English", "Hindi", "Marathi"],
    };
  }

  const localBusinessData: Record<string, any> = {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Ranjeet Enterprises (20 ltr. water jar supplier pune)",
    description:
      "Bottled Drinking Water Supplier / 20 Litre Water Jar Delivery service located on DP Road, Aundh, Pune.",
    image: `${siteUrl}/images/hero-jar-20l.jpg`,
    hasMap: CONTACT_CONFIG.googleMapsUrl,
    url: siteUrl,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "DP Road, Near Omkar Complex, Opposite Persona Furnishing, Shambhu Vihar Society",
      addressLocality: "Aundh, Pune",
      addressRegion: "Maharashtra",
      postalCode: "411067",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.558,
      longitude: 73.807,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: ["Aundh", "Baner", "Khadki"],
  };

  if (CONTACT_CONFIG.phoneRaw) {
    localBusinessData.telephone = CONTACT_CONFIG.phoneRaw;
  }
  if (CONTACT_CONFIG.email) {
    localBusinessData.email = CONTACT_CONFIG.email;
  }

  return {
    "@context": "https://schema.org",
    "@graph": [orgData, localBusinessData],
  };
}
