'use client';

import { BrandLogo } from '../ui/BrandLogo';
import { APP_CONFIG, EXTERNAL_URLS, NAV_ITEMS } from '../../constants';
import { MapPin, Phone } from 'lucide-react';
import type { FooterProps } from '@/app/types';

export const Footer = ({ navigateTo, openContactModal }: FooterProps) => (
  <footer className="bg-[#020617] border-t border-slate-800 w-full snap-start relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-center md:text-left">
        <div className="lg:col-span-5 flex flex-col items-center md:items-start">
          <div className="mb-4 sm:mb-6"><BrandLogo onClick={() => navigateTo('home')} /></div>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm md:max-w-md">
            {APP_CONFIG.establishedYear}'dan beri Hatay'da otomotiv dünyasına yön veriyoruz. En son teknoloji ve uzman kadromuzla aracınızın performansını garanti altına alıyoruz.
          </p>
        </div>
        <div className="lg:col-span-2 hidden md:block">
          <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm md:text-base">Menü</h4>
          <ul className="space-y-2 sm:space-y-3 text-slate-400 text-sm md:text-base">
            {NAV_ITEMS.map(item => (
              <li key={item.key} onClick={() => navigateTo(item.key)} className="hover:text-orange-500 cursor-pointer transition-colors min-h-[44px] flex items-center" role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigateTo(item.key)}>{item.label}</li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm md:text-base">İletişim</h4>
          <div className="space-y-3 sm:space-y-4 text-slate-400 text-xs sm:text-sm md:text-base w-full max-w-sm md:max-w-md">
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-colors min-h-[44px]">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{APP_CONFIG.address}</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer min-h-[44px]" onClick={() => window.open(EXTERNAL_URLS.phone)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && window.open(EXTERNAL_URLS.phone)} aria-label={`Telefon: ${APP_CONFIG.phone}`}>
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0 group-hover:animate-bounce" />
              <span className="font-bold text-white group-hover:text-orange-500 transition-colors text-sm sm:text-base md:text-lg">{APP_CONFIG.phone}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-900 mt-6 sm:mt-8 md:mt-10 lg:mt-12 pt-4 sm:pt-6 md:pt-8 text-center">
        <p className="text-slate-600 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide">
          &copy; <time dateTime={new Date().getFullYear().toString()}>{new Date().getFullYear()}</time> {APP_CONFIG.companyFullName}. Powered by Next Gen Web.
        </p>
      </div>
    </div>
  </footer>
);
