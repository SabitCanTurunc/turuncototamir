'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Car, Clock, Zap, ShieldCheck, ArrowRight, MapPin, ChevronDown, Cog, Activity } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { IMAGE_PATHS, HATAY_DISTRICTS, DETAILED_SERVICES } from '../constants';
import type { ServicesSectionProps } from '../types';

export default function ServicesSection({ openContactModal }: ServicesSectionProps) {
  // Varsayılan ilçe olarak 'Defne' seçili
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Defne');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Servisleri DETAILED_SERVICES'den veya özel listeden alabiliriz.
  // Burada görsel ve ikonları eşleştirmek için hibrit bir yapı kullanıyorum.
  const services = useMemo(() => [
    { 
      title: "MOTOR MEKANİK", 
      slug: "motor-mekanik", // Eşleşen slug
      icon: <Car/>, 
      desc: "Komple motor revizyonu, triger, şanzıman ve ağır bakım.", 
      img: IMAGE_PATHS.motorVeMekanik 
    },
    { 
      title: "PERİYODİK BAKIM (YAĞ BAKIMI)", 
      slug: "periyodik-bakim", 
      icon: <Clock/>, 
      desc: "Motor ömrünü uzatan ve yakıt tasarrufu sağlayan yağ, filtre ve sıvı değişimlerini kapsayan genel kontrol işlemleri.", 
      img: IMAGE_PATHS.periyodikBakim 
    },
    { 
      title: "ELEKTRONİK & YAZILIM", 
      slug: "elektronik", 
      icon: <Zap/>, 
      desc: "EGR iptali, DPF ve bilgisayarlı arıza tespiti.", 
      img: IMAGE_PATHS.elektronikVeYazilim 
    },
    { 
      title: "FREN SİSTEMİ", 
      slug: "fren", 
      icon: <ShieldCheck/>, 
      desc: "Sürüş güvenliğiniz için hayati önem taşıyan balata, disk ve hidrolik sistemlerinin detaylı kontrolü ve değişimi.", 
      img: IMAGE_PATHS.frenBakimi 
    },
    { 
      title: "ŞANZIMAN VE DEBRİYAJ (BASKI BALATA)", 
      slug: "sanziman-tamiri", 
      icon: <Cog/>, 
      desc: "Vites geçişlerinin pürüzsüz olmasını sağlayan baskı balata değişimi, şanzıman yağı ve dişli sistemi onarımları.", 
      img: IMAGE_PATHS.sanziman 
    },
    { 
      title: "ALT TAKIM VE SÜSPANSİYON", 
      slug: "alt-takim-suspansiyon", 
      icon: <Activity/>, 
      desc: "Aracınızın yol tutuşunu ve sürüş konforunu sağlayan parçaların bakımı ve değişimi.", 
      img: IMAGE_PATHS.altTakim 
    },
  ], []);

  // Dropdown dışına tıklandığında kapanması için basit bir yöntem eklenebilir
  // veya sadece tıklama ile toggle yapılabilir.

  return (
    <section className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 min-h-screen bg-[#020617]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="HİZMETLERİMİZ" subtitle="SİZE NASIL YARDIMCI OLABİLİRİZ?" />
        
        {/* District Selector */}
        <div className="max-w-md mx-auto mb-10 sm:mb-12 relative z-30">
          <label className="block text-slate-400 text-sm font-bold mb-2 text-center uppercase tracking-wide">
            Hangi İlçedesiniz?
          </label>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-slate-900 border border-slate-700 text-white py-4 px-6 rounded-xl flex items-center justify-between hover:border-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/50 group"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-500 group-hover:animate-bounce" />
                <span className="font-bold text-lg">{selectedDistrict}</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 origin-top z-40 ${
                isDropdownOpen ? 'opacity-100 scale-y-100 max-h-[300px] overflow-y-auto' : 'opacity-0 scale-y-0 max-h-0 pointer-events-none'
              }`}
            >
              {HATAY_DISTRICTS.map((district) => (
                <button
                  key={district}
                  onClick={() => {
                    setSelectedDistrict(district);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-6 py-3 hover:bg-orange-500/10 hover:text-orange-500 transition-colors flex items-center justify-between ${
                    selectedDistrict === district ? 'text-orange-500 bg-orange-500/5 font-bold' : 'text-slate-300'
                  }`}
                >
                  {district}
                  {selectedDistrict === district && <div className="w-2 h-2 rounded-full bg-orange-500"></div>}
                </button>
              ))}
            </div>
          </div>
          {isDropdownOpen && (
            <div className="fixed inset-0 z-20" onClick={() => setIsDropdownOpen(false)}></div>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {services.map((s, i) => (
            <Link 
              key={i} 
              href={`/hizmetler/${selectedDistrict.toLowerCase()}/${s.slug}`}
              className="group relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[380px] xl:h-[400px] rounded-2xl sm:rounded-[2rem] overflow-hidden cursor-pointer border border-slate-800 shadow-2xl active:scale-[0.98] transition-transform block"
            >
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
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 md:mb-3">
                    {s.title.includes('(') ? (
                      <>
                        {s.title.split('(')[0]}
                        <span className="block text-sm sm:text-base md:text-lg text-slate-400 font-bold mt-1 opacity-80">
                          ({s.title.split('(')[1]}
                        </span>
                      </>
                    ) : (
                      s.title
                    )}
                  </h3>
                  <p className="text-slate-300 font-medium mb-0 text-sm sm:text-base md:text-lg">{s.desc}</p>
                  <div className="mt-4 inline-block px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs text-orange-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 transform">
                    {selectedDistrict} bölgesi için detaylar
                  </div>
               </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
