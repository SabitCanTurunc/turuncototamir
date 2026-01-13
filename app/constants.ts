// App-wide constants
export const APP_CONFIG = {
  phone: '+90 (539) 247 01 43',
  phoneRaw: '+905392470143',
  whatsapp: '905392470143',
  address: 'Çekmece mh. 189. sok. No: 29/1 Defne / HATAY',
  workingHours: 'Pzt - Cmt: 08:15 - 18:30',
  companyName: 'TURUNÇ OTO',
  companyFullName: 'TURUNÇ OTO TAMİR',
  establishedYear: 2010,
  stats: {
    years: '15+',
    references: '5K+',
    guarantee: '%100',
  },
} as const;

// Animation constants
export const ANIMATION_CONFIG = {
  autoScrollInterval: 3000, // 3 seconds
  scrollAnimationDuration: 60, // seconds
  floatAnimationDuration: 20, // seconds
  pulseGlowDuration: 4, // seconds
  scrollTolerance: 10, // pixels
} as const;

// Image paths
export const IMAGE_PATHS = {
  logo: '/BeyazHeaderLogo.png',
  hero: '/hero.png',
  motorVeMekanik: '/motorVeMekanik.png',
  periyodikBakim: '/periyodikBakım.png',
  elektronikVeYazilim: '/elektronikVeYazılım.png',
  frenBakimi: '/frenBakımı.png',
} as const;

// Site Configuration
export const SITE_CONFIG = {
  // .env.local dosyasında NEXT_PUBLIC_SITE_URL olarak tanımlayın
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  // Google Maps'ten alınan gerçek koordinatlar
  coordinates: {
    latitude: process.env.NEXT_PUBLIC_LATITUDE || '36.1234', // Gerçek koordinatları ekleyin
    longitude: process.env.NEXT_PUBLIC_LONGITUDE || '36.5678', // Gerçek koordinatları ekleyin
  },
} as const;

// External URLs
export const EXTERNAL_URLS = {
  whatsapp: `https://wa.me/${APP_CONFIG.whatsapp}`,
  phone: `tel:${APP_CONFIG.phoneRaw}`,
  googleMaps: 'https://maps.google.com/maps?q=Turun%C3%A7%20Oto%20Tamir%20Defne%20Hatay&t=&z=15&ie=UTF8&iwloc=&output=embed',
  noiseTexture: 'https://grainy-gradients.vercel.app/noise.svg',
  workshopImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000',
} as const;

// Service types
export const SERVICE_TYPES = [
  'Periyodik Bakım',
  'Arıza Tespiti',
  'Motor Mekanik',
  'Diğer',
] as const;

// Car brands
export const CAR_BRANDS = [
  'Seçiniz',
  'Audi',
  'BMW',
  'Citroen',
  'Dacia',
  'Fiat',
  'Ford',
  'Honda',
  'Hyundai',
  'Kia',
  'Mercedes',
  'Nissan',
  'Opel',
  'Peugeot',
  'Renault',
  'Seat',
  'Skoda',
  'Toyota',
  'Volkswagen',
  'Diğer',
] as const;

// Navigation items
export const NAV_ITEMS = [
  { label: 'Ana Sayfa', key: 'home' },
  { label: 'Hizmetler', key: 'services' },
  { label: 'Kurumsal', key: 'corporate' },
  { label: 'İletişim', key: 'contact' },
] as const;
