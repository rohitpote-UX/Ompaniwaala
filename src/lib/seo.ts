import { Metadata } from "next";
import { BRAND_CONFIG } from "@/config/brand";
import { CONTACT_CONFIG } from "@/config/contact";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kalashwater.in";

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
    ? `${title} | ${BRAND_CONFIG.name} — ${BRAND_CONFIG.tagline}`
    : `${BRAND_CONFIG.name} — ${BRAND_CONFIG.tagline} | Premium Drinking Water in Pune`;

  const metaDesc =
    description ||
    "Experience KALASH: Premium, dependable drinking-water delivery in Pune, Maharashtra. Built on the sacred heritage of pure water, thoughtful handling, and everyday convenience.";

  const canonicalUrl = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description: metaDesc,
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
          url: `${siteUrl}/brand/kalash-hero-banner.jpg`,
          width: 1200,
          height: 630,
          alt: "KALASH — Pure by Nature",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDesc,
      images: [`${siteUrl}/brand/kalash-hero-banner.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/brand/favicon-64.png",
      apple: "/brand/favicon-192.png",
    },
  };
}

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: BRAND_CONFIG.name,
        url: siteUrl,
        logo: `${siteUrl}/brand/kalash-logo-full.png`,
        slogan: BRAND_CONFIG.tagline,
        address: {
          "@type": "PostalAddress",
          addressLocality: BRAND_CONFIG.market.city,
          addressRegion: BRAND_CONFIG.market.state,
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: CONTACT_CONFIG.phoneRaw,
          contactType: "customer service",
          areaServed: "IN-MH",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: `${BRAND_CONFIG.name} Drinking Water`,
        image: `${siteUrl}/brand/kalash-hero-banner.jpg`,
        telephone: CONTACT_CONFIG.phoneRaw,
        email: CONTACT_CONFIG.email,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          postalCode: "411038",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.5204,
          longitude: 73.8567,
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
          opens: "07:00",
          closes: "20:30",
        },
        areaServed: CONTACT_CONFIG.serviceAreas,
      },
    ],
  };
}

