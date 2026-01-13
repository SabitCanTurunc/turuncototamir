'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { Car, Clock, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { IMAGE_PATHS } from '../constants';
import type { ServicesSectionProps } from '../types';

export default function ServicesSection({ openContactModal }: ServicesSectionProps) {
  const services = useMemo(() => [
    { title: "MOTOR MEKANİK", icon: <Car/>, desc: "Komple motor revizyonu, triger, şanzıman ve ağır bakım.", img: IMAGE_PATHS.motorVeMekanik },
    { title: "PERİYODİK BAKIM", icon: <Clock/>, desc: "Yağ değişimi, filtreler, sıvı kontrolleri ve genel check-up.", img: IMAGE_PATHS.periyodikBakim },
    { title: "ELEKTRONİK & YAZILIM", icon: <Zap/>, desc: "EGR iptali, DPF ve bilgisayarlı arıza tespiti.", img: IMAGE_PATHS.elektronikVeYazilim },
    { title: "FREN SİSTEMLERİ", icon: <ShieldCheck/>, desc: "Balata değişimi, disk torna ve ABS sistem onarımları.", img: IMAGE_PATHS.frenBakimi },
  ], []);

  return (
    <section className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 min-h-screen bg-[#020617]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="HİZMETLERİMİZ" subtitle="NELER YAPIYORUZ" />
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {services.map((s, i) => (
            <div key={i} className="group relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[380px] xl:h-[400px] rounded-2xl sm:rounded-[2rem] overflow-hidden cursor-pointer border border-slate-800 shadow-2xl active:scale-[0.98] transition-transform">
               <Image 
                 src={s.img} 
                 alt={`${s.title} - ${s.desc} | Turunç Oto Tamir Hatay`} 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
                 sizes="(max-width: 768px) 100vw, 50vw"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 lg:p-10 w-full">
                  <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg min-w-[48px] min-h-[48px]">{React.cloneElement(s.icon, { className: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" })}</div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-black transition-all min-w-[44px] min-h-[44px]">
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 -rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 md:mb-3">{s.title}</h3>
                  <p className="text-slate-300 font-medium mb-0 text-sm sm:text-base md:text-lg">{s.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
