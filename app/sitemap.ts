import { MetadataRoute } from 'next';
import { SITE_CONFIG } from './constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const lastModified = new Date();
  
  // Tek sayfa uygulaması olduğu için sadece ana sayfayı sitemap'e ekliyoruz
  // Anchor linkler (#services, #corporate vb.) sitemap'te önerilmez
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
