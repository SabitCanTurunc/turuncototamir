import { MetadataRoute } from 'next';
import { SITE_CONFIG, HATAY_DISTRICTS, DETAILED_SERVICES } from './constants';
import { MOTOR_MEKANIK_DETAILS } from './data/motor-mekanik-data';
import { PERIYODIK_BAKIM_DETAILS } from './data/periyodik-bakim-data';
import { FREN_DETAILS } from './data/fren-data';
import { ELEKTRONIK_DETAILS } from './data/elektronik-data';
import { SANZIMAN_DETAILS } from './data/sanziman-tamiri-data';
import { ALT_TAKIM_DETAILS } from './data/alt-takim-suspansiyon-data';

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
  const serviceRoutes: MetadataRoute.Sitemap = [];

  for (const district of HATAY_DISTRICTS) {
    const districtSlug = district.toLowerCase();

    // 1. Ana Kategori Sayfaları (Örn: /hizmetler/defne/motor-mekanik)
    for (const service of DETAILED_SERVICES) {
      serviceRoutes.push({
        url: `${baseUrl}/hizmetler/${districtSlug}/${service.slug}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      });
    }

    // 2. Alt Hizmet Detay Sayfaları (Örn: /hizmetler/defne/motor-mekanik/triger-seti-degisimi)

    // Motor Mekanik
    for (const subService of MOTOR_MEKANIK_DETAILS) {
      serviceRoutes.push({
        url: `${baseUrl}/hizmetler/${districtSlug}/motor-mekanik/${subService.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }

    // Periyodik Bakım
    for (const subService of PERIYODIK_BAKIM_DETAILS) {
      serviceRoutes.push({
        url: `${baseUrl}/hizmetler/${districtSlug}/periyodik-bakim/${subService.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }

    // Fren Sistemi
    for (const subService of FREN_DETAILS) {
      serviceRoutes.push({
        url: `${baseUrl}/hizmetler/${districtSlug}/fren/${subService.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }

    // Elektronik
    for (const subService of ELEKTRONIK_DETAILS) {
      serviceRoutes.push({
        url: `${baseUrl}/hizmetler/${districtSlug}/elektronik/${subService.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }

    // Şanzıman
    for (const subService of SANZIMAN_DETAILS) {
      serviceRoutes.push({
        url: `${baseUrl}/hizmetler/${districtSlug}/sanziman-tamiri/${subService.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }

    // Alt Takım
    for (const subService of ALT_TAKIM_DETAILS) {
      serviceRoutes.push({
        url: `${baseUrl}/hizmetler/${districtSlug}/alt-takim-suspansiyon/${subService.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }
  }

  return [...staticRoutes, ...serviceRoutes];
}
