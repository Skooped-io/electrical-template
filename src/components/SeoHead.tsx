import { useEffect } from "react";
import { siteConfig } from "@/lib/config";

interface SeoHeadProps {
  page: keyof typeof siteConfig.seo;
}

export default function SeoHead({ page }: SeoHeadProps) {
  const seo = siteConfig.seo[page];

  useEffect(() => {
    if (seo?.title) document.title = seo.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && seo?.description) {
      metaDesc.setAttribute("content", seo.description);
    }
  }, [seo]);

  return null;
}

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
    },
    areaServed: siteConfig.serviceArea,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
