'use client';

import type { SectionHeaderProps } from '../../types';

export const SectionHeader = ({ title, subtitle, align = "center" }: SectionHeaderProps) => (
  <div className={`mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 ${align === "center" ? "text-center" : "text-left"}`}>
    <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider sm:tracking-widest mb-3 sm:mb-4 md:mb-5 ${align === "center" ? "mx-auto" : ""}`}>
      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
      {subtitle}
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white tracking-tighter leading-[1.1] sm:leading-tight">
      {title}
    </h2>
  </div>
);
