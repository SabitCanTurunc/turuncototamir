import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocalBusinessSchema } from "./components/StructuredData";
import { SITE_CONFIG, APP_CONFIG } from "./constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const siteUrl = SITE_CONFIG.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Turunç Oto Tamir | Hatay'da Profesyonel Otomotiv Bakım",
    template: "%s | Turunç Oto Tamir"
  },
  description: "Hatay'ın 1 numaralı oto tamir servisi. 15+ yıl tecrübe, dijital diyagnostik, garantili işçilik. Hemen randevu alın: 0539 247 01 43",
  keywords: [
    "oto tamir",
    "araba bakım",
    "Hatay oto tamir",
    "Defne oto tamir",
    "motor bakım",
    "periyodik bakım",
    "fren bakımı",
    "elektronik arıza tespiti",
    "otomotiv servis",
    "araç bakım",
    "oto servis Hatay"
  ],
  authors: [{ name: "Turunç Oto Tamir" }],
  creator: "Turunç Oto Tamir",
  publisher: "Turunç Oto Tamir",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Turunç Oto Tamir",
    title: "Turunç Oto Tamir | Hatay'da Profesyonel Otomotiv Bakım",
    description: "2010'dan beri Hatay'da otomotiv bakım hizmetleri. Dijital diyagnostik, garantili işçilik ve uzman kadro ile aracınızın performansını zirveye taşıyoruz.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`, // 1200x630px görsel oluşturun
        width: 1200,
        height: 630,
        alt: "Turunç Oto Tamir - Hatay Oto Tamir Servisi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turunç Oto Tamir | Hatay'da Profesyonel Otomotiv Bakım",
    description: "2010'dan beri Hatay'da otomotiv bakım hizmetleri. Dijital diyagnostik, garantili işçilik ve uzman kadro.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Google Search Console verification code'unuzu .env.local'de NEXT_PUBLIC_GOOGLE_VERIFICATION olarak ekleyin
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
  },
  icons: {
    icon: [
      { url: '/BeyazHeaderLogo.png', sizes: 'any', type: 'image/png' },
    ],
    apple: [
      { url: '/BeyazHeaderLogo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
