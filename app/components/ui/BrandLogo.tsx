'use client';

import Image from 'next/image';
import { IMAGE_PATHS, APP_CONFIG } from '../../constants';
import type { BrandLogoProps } from '../../types';

export const BrandLogo = ({ onClick }: BrandLogoProps) => (
  <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none relative min-h-[44px] min-w-[44px]" onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick()} aria-label="Ana sayfaya dön">
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-orange-500/20 blur-2xl rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
    <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
      <Image src={IMAGE_PATHS.logo} alt="Turunç Oto Logo" width={56} height={56} className="h-full w-full object-contain drop-shadow-xl" priority />
    </div>
    <div className="flex flex-col justify-center relative z-10">
      <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black tracking-tighter text-white leading-none flex items-center">
        {APP_CONFIG.companyName.split(' ')[0]}<span className="text-orange-500 ml-0.5">{APP_CONFIG.companyName.split(' ')[1]}</span>
      </div>
      <span className="text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] text-slate-400 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-0.5 group-hover:text-orange-400 transition-colors hidden sm:block">Tamir & Bakım</span>
    </div>
  </div>
);
