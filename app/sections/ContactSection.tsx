'use client';

import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { APP_CONFIG, EXTERNAL_URLS } from '../constants';

export default function ContactSection() {
  return (
    <section className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 bg-[#020617]">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="İLETİŞİM" subtitle="BİZE ULAŞIN" />
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
             <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                {[
                  { icon: <Phone/>, title: "TELEFON", val: APP_CONFIG.phone, href: EXTERNAL_URLS.phone },
                  { icon: <MapPin/>, title: "ADRES", val: APP_CONFIG.address, href: null },
                  { icon: <Clock/>, title: "ÇALIŞMA SAATLERİ", val: APP_CONFIG.workingHours, href: null }
                ].map((item, i) => (
                  <SpotlightCard key={i} className="flex items-center gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 lg:p-8 min-h-[80px] sm:min-h-[100px]">
                     <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center text-orange-500 shadow-inner shrink-0 min-w-[48px] min-h-[48px]">{React.cloneElement(item.icon, { className: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" })}</div>
                     <div className="min-w-0 flex-1">
                        <div className="text-[10px] sm:text-xs md:text-sm font-black text-slate-500 uppercase tracking-wider mb-1 sm:mb-2">{item.title}</div>
                        {item.href ? <a href={item.href} className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white hover:text-orange-500 transition-colors break-words block min-h-[44px] flex items-center">{item.val}</a> : <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white break-words min-h-[44px] flex items-center">{item.val}</div>}
                     </div>
                  </SpotlightCard>
                ))}
             </div>
             <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
                <iframe src={EXTERNAL_URLS.googleMaps} width="100%" height="100%" style={{border:0}} allowFullScreen={true} loading="lazy" title="Turunç Oto Tamir Konum Haritası"></iframe>
                <div className="absolute inset-0 pointer-events-none border-4 sm:border-[6px] md:border-[8px] border-slate-800 rounded-xl sm:rounded-2xl"></div>
             </div>
          </div>
       </div>
    </section>
  );
}
