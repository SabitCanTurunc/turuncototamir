'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Wrench, Settings, Clock, ShieldCheck, ArrowRight, Quote } from 'lucide-react';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Footer } from '../components/layout/Footer';
import { APP_CONFIG, ANIMATION_CONFIG, IMAGE_PATHS, EXTERNAL_URLS } from '../constants';
import type { HomeSectionProps } from '../types';

export function HomeSection({ navigateTo, openContactModal, scrollToTopRef }: HomeSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionIds = ['hero', 'features', 'testimonials', 'cta', 'footer'];

  // Scroll to top fonksiyonunu expose et
  const scrollToTop = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Ref'e scrollToTop fonksiyonunu ata
  useEffect(() => {
    if (scrollToTopRef) {
      scrollToTopRef.current = scrollToTop;
    }
    return () => {
      if (scrollToTopRef) {
        scrollToTopRef.current = null;
      }
    };
  }, [scrollToTopRef, scrollToTop]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const height = scrollRef.current.offsetHeight || window.innerHeight;
      const index = Math.round(scrollRef.current.scrollTop / height);
      if (index >= 0 && index < sectionIds.length) setActiveSection(index);
    };
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [sectionIds.length]);

  const handleFeaturesScroll = () => {
    const container = featuresRef.current;
    if (!container) return;

    const scrollCenter = container.scrollLeft + (container.clientWidth / 2);
    let closest = -1;
    let minDiff = Number.MAX_VALUE;

    Array.from(container.children).forEach((child, index) => {
        const element = child as HTMLElement;
        const childCenter = element.offsetLeft + (element.clientWidth / 2);
        const diff = Math.abs(scrollCenter - childCenter);
        if (diff < minDiff) {
            minDiff = diff;
            closest = index;
        }
    });

    if (closest !== -1 && closest !== activeFeature) {
        setActiveFeature(closest);
    }
  };

  useEffect(() => {
    const slider = featuresRef.current;
    if (!slider) return;

    let interval: NodeJS.Timeout | undefined;
    const startAutoScroll = () => {
      interval = setInterval(() => {
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        
        if (slider.scrollLeft >= maxScrollLeft - ANIMATION_CONFIG.scrollTolerance) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            const cardWidth = slider.firstElementChild?.clientWidth || 0;
            const gap = 24;
            slider.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
      }, ANIMATION_CONFIG.autoScrollInterval);
    };

    if (window.innerWidth < 768) {
        startAutoScroll();
    }

    const stopScroll = () => {
      if (interval) clearInterval(interval);
    };
    
    slider.addEventListener('touchstart', stopScroll, { passive: true });
    slider.addEventListener('touchend', startAutoScroll, { passive: true });
    
    return () => {
      if (interval) clearInterval(interval);
      if (slider) {
        slider.removeEventListener('touchstart', stopScroll);
        slider.removeEventListener('touchend', startAutoScroll);
      }
    };
  }, []);

  const scrollToSection = (index: number) => {
    if (!scrollRef.current) return;
    const height = scrollRef.current.offsetHeight || window.innerHeight;
    scrollRef.current.scrollTo({ top: index * height, behavior: 'smooth' });
  };

  const testimonials = [
    { name: "Ahmet Y.", car: "BMW 3.20i", text: "Yetkili servisin yarı fiyatına, onlardan daha iyi hizmet aldım." },
    { name: "Ömer A.", car: "Ford Focus", text: "Yağ değişimi için onları tercih ettim." },
    { name: "Selin D.", car: "Mercedes A180", text: "Arabamdan hiç anlamam ama bana her şeyi detaylıca anlattılar." },
    { name: "Murat K.", car: "Audi A4", text: "Randevu sistemi kusursuz. Gittiğimde hiç beklemedim." },
    { name: "Caner Ö.", car: "VW Passat", text: "DSG şanzıman sorunum için yardımcı oldular." },
    { name: "Burak Ç.", car: "Honda Civic", text: "Fren disklerini tornalatmak yerine değişim önerdiler." }
  ];

  return (
    <div ref={scrollRef} className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar relative bg-[#020617] overflow-x-hidden">
      {/* Navigation Rail */}
      <div className="hidden md:flex fixed right-3 sm:right-4 lg:right-6 xl:right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center">
        <div className="relative flex flex-col items-center gap-3 lg:gap-4 px-1">
          <div className="absolute inset-y-1 w-px bg-gradient-to-b from-orange-500/0 via-orange-500/30 to-orange-500/0 pointer-events-none" />

          {sectionIds.map((_, idx) => {
            const isActive = activeSection === idx;
            return (
              <button
                key={idx}
                onClick={() => scrollToSection(idx)}
                className="group relative flex flex-col items-center justify-center gap-1 min-h-[40px]"
              >
                <div
                  className={`relative flex items-center justify-center rounded-full border transition-all duration-500 ease-out
                    ${
                      isActive
                        ? 'w-0 h-0 border-transparent bg-transparent shadow-none opacity-0'
                        : 'w-2.5 h-2.5 border-orange-400/40 bg-slate-900/60 group-hover:w-0 group-hover:h-0 group-hover:opacity-0'
                    }
                  `}
                >
                  <span
                    className={`block rounded-full bg-orange-400 transition-all duration-500
                      ${
                        isActive
                          ? 'w-0 h-0 opacity-0'
                          : 'w-1.5 h-1.5 opacity-80 group-hover:w-0 group-hover:h-0 group-hover:opacity-0'
                      }
                    `}
                  />
                </div>

                <span
                  className={`origin-right scale-90 lg:scale-100 rounded-full border px-2.5 py-0.5 text-[10px] md:text-[11px] font-semibold tracking-wide whitespace-nowrap backdrop-blur-sm transition-all duration-300
                    ${
                      isActive
                        ? 'border-orange-400/80 bg-orange-500/15 text-orange-300 shadow-[0_0_16px_rgba(249,115,22,0.45)]'
                        : 'border-slate-700/80 bg-slate-900/70 text-slate-400 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }
                  `}
                >
                  {['Giriş', 'Neden Biz', 'Yorumlar', 'İletişim', 'Alt Bilgi'][idx]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 1: HERO */}
      <section className="h-[100dvh] w-full snap-start relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
           <div className="absolute top-1/4 right-1/4 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-orange-600/20 rounded-full blur-[60px] sm:blur-[80px] md:blur-[120px] animate-float"></div>
           <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[150px]"></div>
           <div className="absolute inset-0 opacity-10 sm:opacity-15 md:opacity-20 mix-blend-overlay" style={{backgroundImage: `url(${EXTERNAL_URLS.noiseTexture})`}}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col md:grid md:grid-cols-2 md:items-center justify-center md:justify-center py-6 sm:py-8 md:py-10 lg:py-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 order-2 md:order-1">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white tracking-tighter leading-[0.92] md:leading-[0.88] lg:leading-[0.85] drop-shadow-2xl px-2 sm:px-0">
              PERFORMANSA <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">YENİDEN</span> <br/>
              MERHABA
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-lg md:max-w-xl font-medium leading-relaxed px-4 sm:px-0">
              Profesyonel ekip, dijital diyagnostik ve garantili işçilik ile aracınızın performansını zirveye taşıyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-center md:justify-start gap-2 sm:gap-3 pt-1 px-4 sm:px-0">
               <button onClick={openContactModal} className="bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white px-5 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm md:text-base transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-600/30 flex items-center justify-center gap-2 group w-full sm:w-auto min-h-[44px]">
                 Randevu Al <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
               </button>
               <button onClick={() => navigateTo('services')} className="bg-slate-800/50 hover:bg-slate-800 active:bg-slate-700 text-white border border-slate-700 px-5 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm md:text-base transition-all backdrop-blur-sm flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px]">
                 <Wrench className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-slate-400" /> <span className="hidden sm:inline">Hizmetleri Gör</span><span className="sm:hidden">Hizmetler</span>
               </button>
            </div>
            
            <div className="pt-2 sm:pt-3 md:pt-4 flex justify-center md:justify-start items-center gap-3 sm:gap-4 md:gap-6 border-t border-white/5 w-full px-4 sm:px-0">
              {[
                { val: APP_CONFIG.stats.years, label: "Yıl" },
                { val: APP_CONFIG.stats.references, label: "Referans" },
                { val: APP_CONFIG.stats.guarantee, label: "Garanti" }
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white">{stat.val}</p>
                  <p className="text-slate-500 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative flex justify-center items-center perspective-1000 w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] order-1 md:order-2">
             <div className="relative w-full h-full max-w-[240px] sm:max-w-[280px] md:max-w-sm lg:max-w-md aspect-square flex items-center justify-center transform transition-transform duration-500 hover:rotate-1">
               <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-[40px] sm:blur-[60px] md:blur-[80px] animate-pulse"></div>
               <Image 
                 src={IMAGE_PATHS.hero} 
                 alt="Turunç Oto Tamir - Hatay'da profesyonel araç bakım ve tamir hizmetleri"
                 width={400}
                 height={400}
                 className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(249,115,22,0.3)]" 
                 priority
               />
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES */}
      <section className="h-[100dvh] w-full snap-start flex flex-col justify-center bg-[#020617] relative overflow-hidden py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="NEDEN BİZ?" subtitle="FARKIMIZ" align="left" />
          
          <div 
            ref={featuresRef}
            onScroll={handleFeaturesScroll}
            className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-3 sm:gap-4 md:gap-5 lg:gap-6 pb-4 md:pb-0 -mx-4 sm:-mx-6 px-[8vw] sm:px-[10vw] md:px-0 md:mx-0 no-scrollbar items-center py-2 sm:py-3 md:py-4"
          >
             {[
               { icon: <Settings className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"/>, title: "DİJİTAL DİYAGNOSTİK", desc: "Aracınızdaki en ufak hatayı bile tespit eden son teknoloji cihazlar." },
               { icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"/>, title: "HIZLI SERVİS", desc: "Zamanınız değerli. Optimize edilmiş iş akışımızla en kısa sürede teslimat." },
               { icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"/>, title: "GARANTİLİ İŞÇİLİK", desc: "Ustalığımıza güveniyoruz. Montaj hatası veya eksik parça gibi sorunlara karşı tam güvence." }
             ].map((f, i) => (
               <div 
                  key={i} 
                  className={`transition-all duration-500 ease-out transform ${
                    i === activeFeature 
                      ? "scale-110 opacity-100 z-10" 
                      : "scale-90 opacity-60 z-0 blur-[1px]"
                  } md:scale-100 md:opacity-100 md:blur-none md:z-auto min-w-[85vw] sm:min-w-[75vw] md:min-w-0 snap-center flex flex-col justify-center group h-full`}
               >
                 <SpotlightCard className="p-4 sm:p-5 md:p-6 lg:p-8 h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px]">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-slate-800 flex items-center justify-center mb-3 sm:mb-4 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:rotate-3">{f.icon}</div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 sm:mb-3 uppercase tracking-tight">{f.title}</h3>
                    <p className="text-slate-400 group-hover:text-slate-200 text-xs sm:text-sm md:text-base font-medium leading-relaxed">{f.desc}</p>
                 </SpotlightCard>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TESTIMONIALS */}
      <section className="h-[100dvh] w-full snap-start flex flex-col justify-center bg-[#020617] border-t border-slate-900 relative overflow-hidden py-4 sm:py-6 md:py-8">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" style={{backgroundImage: `url(${EXTERNAL_URLS.noiseTexture})`}}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-3 sm:mb-4 md:mb-5 relative z-10">
           <SectionHeader title="MUTLU MÜŞTERİLER" subtitle="REFERANSLARIMIZ" />
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-max px-4 sm:px-6 lg:px-8">
            {[...testimonials, ...testimonials].map((t, i) => (
               <article key={i}>
                 <SpotlightCard className="w-[85vw] sm:w-[80vw] md:w-[350px] lg:w-[400px] xl:w-[450px] p-4 sm:p-5 md:p-6 lg:p-7 bg-slate-900/50 backdrop-blur-sm border-slate-800/50 min-h-[160px] sm:min-h-[180px] md:min-h-[200px]">
                    <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 text-slate-700 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 opacity-50" />
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                       <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl shadow-lg flex-shrink-0">{t.name.charAt(0)}</div>
                       <div className="min-w-0">
                          <div className="text-white font-bold text-sm sm:text-base md:text-lg truncate">{t.name}</div>
                          <div className="text-orange-500 text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-wider bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 inline-block mt-1">{t.car}</div>
                       </div>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-slate-300 font-medium leading-relaxed pr-4 sm:pr-6 md:pr-8">"{t.text}"</p>
                 </SpotlightCard>
               </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="h-[100dvh] w-full snap-start flex items-center justify-center bg-[#020617] relative overflow-hidden border-t border-slate-900 py-4 sm:py-6 md:py-8">
         <div className="absolute inset-0 bg-orange-600/5"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-orange-600/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px] pointer-events-none"></div>
         
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-block p-2 sm:p-3 md:p-4 rounded-full bg-slate-900 border border-slate-800 mb-3 sm:mb-4 md:mb-5 shadow-2xl animate-pulse-glow">
              <Wrench className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-orange-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-tighter leading-[1.1] sm:leading-none px-2 sm:px-0">
              BAKIM <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700">ZAMANI MI?</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 font-medium px-4 sm:px-6">
              Beklenmedik sürprizlerle karşılaşmamak için profesyonel ekibimizden destek alın.
            </p>
            <button onClick={openContactModal} className="group bg-white text-slate-950 hover:bg-orange-500 active:bg-orange-600 hover:text-white px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-full font-black text-xs sm:text-sm md:text-base lg:text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] flex items-center justify-center gap-2 sm:gap-3 mx-auto whitespace-nowrap min-h-[44px] sm:min-h-[48px] md:min-h-[52px]">
               HEMEN RANDEVU AL <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </section>

      {/* SECTION 5: FOOTER */}
      <Footer navigateTo={navigateTo} openContactModal={openContactModal} />
    </div>
  );
}
