import { MetadataRoute } from 'next';
import { SITE_CONFIG, HATAY_DISTRICTS, DETAILED_SERVICES } from './constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const lastModified = new Date();
  
  // Ana sayfa
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
  ];

  // Dinamik Hizmet Sayfaları (İlçe x Hizmet kombinasyonları)
  const serviceRoutes = [];

  for (const district of HATAY_DISTRICTS) {
    for (const service of DETAILED_SERVICES) {
      serviceRoutes.push({
        url: `${baseUrl}/hizmetler/${district.toLowerCase()}/${service.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }
  }

  return [...staticRoutes, ...serviceRoutes];
}
