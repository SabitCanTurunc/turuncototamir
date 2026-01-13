import { APP_CONFIG, SITE_CONFIG, IMAGE_PATHS } from '../constants';

export function LocalBusinessSchema() {
  const siteUrl = SITE_CONFIG.url;
  const logoUrl = `${siteUrl}${IMAGE_PATHS.logo}`;
  
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveRepair",
    "name": APP_CONFIG.companyFullName,
    "alternateName": APP_CONFIG.companyName,
    "image": logoUrl,
    "logo": logoUrl,
    "url": siteUrl,
    "telephone": APP_CONFIG.phoneRaw,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Çekmece mh. 189. sok. No: 29/1",
      "addressLocality": "Defne",
      "addressRegion": "Hatay",
      "postalCode": "31160",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE_CONFIG.coordinates.latitude,
      "longitude": SITE_CONFIG.coordinates.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:15",
        "closes": "18:30"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Hatay"
    },
    "serviceType": [
      "Motor Mekanik",
      "Periyodik Bakım",
      "Elektronik & Yazılım",
      "Fren Sistemleri"
    ],
    // Rating bilgileri gerçek verilerle değiştirilmeli veya kaldırılmalı
    // Google Business Profile'dan dinamik olarak çekilebilir
    // Şu an için kaldırıldı - gerçek rating'ler eklendiğinde tekrar eklenebilir
    "sameAs": [] as string[]
  };

  // Sosyal medya hesaplarınız varsa ekleyin
  // businessSchema.sameAs.push("https://www.facebook.com/turuncototamir");
  // businessSchema.sameAs.push("https://www.instagram.com/turuncototamir");

  // Breadcrumb Schema - Navigasyon için
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": siteUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema, null, 2) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema, null, 2) }}
      />
    </>
  );
}
