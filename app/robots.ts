import { MetadataRoute } from 'next';
import { SITE_CONFIG } from './constants';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.url;
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/.next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
