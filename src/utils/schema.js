// Schema markup generator utilities for SEO

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zillion International",
  "description": "Global BPO & IT Solutions provider serving USA, UK, and UAE markets with customer support, technical support, and back office outsourcing services.",
  "url": "https://www.zillioninternational.com",
  "logo": "https://www.zillioninternational.com/logo.png",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "sales",
      "areaServed": ["US", "GB", "AE"],
      "availableLanguage": ["English"]
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/zillion-international",
    "https://twitter.com/zillionintl"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  }
});

export const generateBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "Zillion International"
  },
  "areaServed": ["US", "GB", "AE"],
  "serviceType": service.type
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Zillion International",
  "image": "https://www.zillioninternational.com/logo.png",
  "description": "BPO & IT Solutions provider offering customer support, technical support, and back office outsourcing services.",
  "address": [
    {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "USA"
    },
    {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "UK"
    },
    {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressRegion": "UAE"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128",
    "longitude": "-74.0060"
  },
  "url": "https://www.zillioninternational.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }
});

export const generateArticleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.headline,
  "description": article.description,
  "author": {
    "@type": "Organization",
    "name": "Zillion International"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zillion International",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.zillioninternational.com/logo.png"
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished
});
