'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Wrench, 
  Car, 
  Settings, 
  Phone, 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  Menu, 
  X,
  MessageCircle,
  Quote,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

// --- AYARLAR ---
const CUSTOM_LOGO_URL = "BeyazHeaderLogo.png"; 

// --- CSS & GLOBAL STYLES ---
const styles = `
  /* Temel Ayarlar */
  ::-webkit-scrollbar { display: none; width: 0 !important; }
  * { -ms-overflow-style: none; scrollbar-width: none; }
  body { background-color: #020617; color: #f8fafc; margin: 0; }

  /* Animasyonlar */
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll { animation: scroll 60s linear infinite; }
  
  @keyframes float {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-float { animation: float 20s ease-in-out infinite; }

  @keyframes pulse-glow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }
  .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
`;

// --- UI COMPONENTS ---

// Spotlight Card: Mouse takipli ışık efekti olan kart
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/50 text-slate-200 shadow-2xl transition-all duration-300 hover:border-slate-700 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(clamp(300px, 40vw, 600px) circle at ${position.x}px ${position.y}px, rgba(249, 115, 22, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// Section Header Component
const SectionHeader = ({ title, subtitle, align = "center" }) => (
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

// --- HEADER & FOOTER LOGO BİLEŞENİ ---
const BrandLogo = ({ onClick }) => (
  <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none relative min-h-[44px] min-w-[44px]" onClick={onClick}>
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-orange-500/20 blur-2xl rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
    <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
      <img src={CUSTOM_LOGO_URL} alt="Turunç Oto Logo" className="h-full w-full object-contain drop-shadow-xl" />
    </div>
    <div className="flex flex-col justify-center relative z-10">
      <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black tracking-tighter text-white leading-none flex items-center">
        TURUNÇ<span className="text-orange-500 ml-0.5">OTO</span>
      </h1>
      <span className="text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] text-slate-400 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-0.5 group-hover:text-orange-400 transition-colors hidden sm:block">Tamir & Bakım</span>
    </div>
  </div>
);

// --- FOOTER ---
const Footer = ({ navigateTo, openContactModal }) => (
  <footer className="bg-[#020617] border-t border-slate-800 w-full snap-start relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-center md:text-left">
        <div className="lg:col-span-5 flex flex-col items-center md:items-start">
          <div className="mb-4 sm:mb-6"><BrandLogo onClick={() => navigateTo('home')} /></div>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm md:max-w-md">
            2010'dan beri Hatay'da otomotiv dünyasına yön veriyoruz. En son teknoloji ve uzman kadromuzla aracınızın performansını garanti altına alıyoruz.
          </p>
        </div>
        <div className="lg:col-span-2 hidden md:block">
          <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm md:text-base">Menü</h4>
          <ul className="space-y-2 sm:space-y-3 text-slate-400 text-sm md:text-base">
            {['Ana Sayfa', 'Hizmetler', 'Kurumsal', 'İletişim'].map(item => (
              <li key={item} onClick={() => navigateTo(item === 'Ana Sayfa' ? 'home' : item === 'Hizmetler' ? 'services' : item === 'Kurumsal' ? 'corporate' : 'contact')} className="hover:text-orange-500 cursor-pointer transition-colors min-h-[44px] flex items-center">{item}</li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm md:text-base">İletişim</h4>
          <div className="space-y-3 sm:space-y-4 text-slate-400 text-xs sm:text-sm md:text-base w-full max-w-sm md:max-w-md">
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-colors min-h-[44px]">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">Çekmece mh. 189. sok. No: 29/1<br />Defne / HATAY</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer min-h-[44px]" onClick={() => window.open('tel:+905392470143')}>
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0 group-hover:animate-bounce" />
              <span className="font-bold text-white group-hover:text-orange-500 transition-colors text-sm sm:text-base md:text-lg">+90 (539) 247 01 43</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-900 mt-6 sm:mt-8 md:mt-10 lg:mt-12 pt-4 sm:pt-6 md:pt-8 text-center">
        <p className="text-slate-600 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide">&copy; 2024 TURUNÇ OTO TAMİR. Powered by Next Gen Web.</p>
      </div>
    </div>
  </footer>
);

// --- HOME SECTION (Main Page) ---
function HomeSection({ navigateTo, openContactModal }) {
  const scrollRef = useRef(null);
  const featuresRef = useRef(null); // Ref for auto-scrolling features
  const [activeSection, setActiveSection] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0); // State to track active card
  const sectionIds = ['hero', 'features', 'testimonials', 'cta', 'footer'];

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      // Use offsetHeight instead of innerHeight for better compatibility
      const height = scrollRef.current.offsetHeight || window.innerHeight;
      const index = Math.round(scrollRef.current.scrollTop / height);
      if (index >= 0 && index < sectionIds.length) setActiveSection(index);
    };
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // --- Handle Features Scroll for Scale Effect ---
  const handleFeaturesScroll = () => {
    const container = featuresRef.current;
    if (!container) return;

    const scrollCenter = container.scrollLeft + (container.clientWidth / 2);
    let closest = -1;
    let minDiff = Number.MAX_VALUE;

    Array.from(container.children).forEach((child, index) => {
        const childCenter = child.offsetLeft + (child.clientWidth / 2);
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

  // --- Auto-Scroll Logic for Features (Mobile) ---
  useEffect(() => {
    const slider = featuresRef.current;
    if (!slider) return;

    let interval;
    const startAutoScroll = () => {
      interval = setInterval(() => {
        // Check if we are at the end
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        
        // Tolerance of 10px
        if (slider.scrollLeft >= maxScrollLeft - 10) {
            // Reset to start
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Scroll by one card width (approx 80vw) + gap
            const cardWidth = slider.firstElementChild?.clientWidth || 0;
            const gap = 24; // 1.5rem = 24px (gap-6)
            slider.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
      }, 3000); // 3 seconds interval
    };

    // Initial start
    // Only auto-scroll on mobile views where overflow exists
    if (window.innerWidth < 768) {
        startAutoScroll();
    }

    // Stop on user interaction
    const stopScroll = () => clearInterval(interval);
    
    // Add listeners
    slider.addEventListener('touchstart', stopScroll, { passive: true });
    slider.addEventListener('touchend', startAutoScroll, { passive: true });
    
    return () => {
      clearInterval(interval);
      if (slider) {
        slider.removeEventListener('touchstart', stopScroll);
        slider.removeEventListener('touchend', startAutoScroll);
      }
    };
  }, []);

  const scrollToSection = (index) => {
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
      {/* Navigation Rail (Scroll Snap Indicator) */}
      <div className="hidden md:flex fixed right-3 sm:right-4 lg:right-6 xl:right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center">
        {/* Rail */}
        <div className="relative flex flex-col items-center gap-3 lg:gap-4 px-1">
          {/* Line */}
          <div className="absolute inset-y-1 w-px bg-gradient-to-b from-orange-500/0 via-orange-500/30 to-orange-500/0 pointer-events-none" />

          {sectionIds.map((_, idx) => {
            const isActive = activeSection === idx;
            return (
              <button
                key={idx}
                onClick={() => scrollToSection(idx)}
                className="group relative flex flex-col items-center justify-center gap-1 min-h-[40px]"
              >
                {/* Node */}
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

                {/* Label chip */}
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
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 sm:opacity-15 md:opacity-20 mix-blend-overlay"></div>
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
                { val: "15+", label: "Yıl" },
                { val: "5K+", label: "Referans" },
                { val: "%100", label: "Garanti" }
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
               <img 
                 src="hero.png" 
                 alt="Car Repair" 
                 className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(249,115,22,0.3)]" 
               />
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES (BENTO GRID STYLE) */}
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
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-3 sm:mb-4 md:mb-5 relative z-10">
           <SectionHeader title="MUTLU MÜŞTERİLER" subtitle="REFERANSLARIMIZ" />
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-max px-4 sm:px-6 lg:px-8">
            {[...testimonials, ...testimonials].map((t, i) => (
               <SpotlightCard key={i} className="w-[85vw] sm:w-[80vw] md:w-[350px] lg:w-[400px] xl:w-[450px] p-4 sm:p-5 md:p-6 lg:p-7 bg-slate-900/50 backdrop-blur-sm border-slate-800/50 min-h-[160px] sm:min-h-[180px] md:min-h-[200px]">
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

function ServicesSection({ openContactModal }) {
  const services = [
    { title: "MOTOR MEKANİK", icon: <Car/>, desc: "Komple motor revizyonu, triger, şanzıman ve ağır bakım.", img: "motorVeMekanik.png" },
    { title: "PERİYODİK BAKIM", icon: <Clock/>, desc: "Yağ değişimi, filtreler, sıvı kontrolleri ve genel check-up.", img: "periyodikBAkım.png" },
    { title: "ELEKTRONİK & YAZILIM", icon: <Zap/>, desc: "EGR iptali, DPF ve bilgisayarlı arıza tespiti.", img: "elektronikVeYazılım.png" },
    { title: "FREN SİSTEMLERİ", icon: <ShieldCheck/>, desc: "Balata değişimi, disk torna ve ABS sistem onarımları.", img: "frenBakımı.png" },
  ];

  return (
    <section className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 min-h-screen bg-[#020617]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="HİZMETLERİMİZ" subtitle="NELER YAPIYORUZ" />
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {services.map((s, i) => (
            <div key={i} className="group relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[380px] xl:h-[400px] rounded-2xl sm:rounded-[2rem] overflow-hidden cursor-pointer border border-slate-800 shadow-2xl active:scale-[0.98] transition-transform">
               <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
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

function CorporateSection() {
    return (
      <section className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 min-h-screen bg-[#020617]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           {/* Başlık */}
           <SectionHeader title="HAKKIMIZDA" subtitle="BİZ KİMİZ?" align="left" />

           {/* Fotoğraf başlığın hemen altında, ardından metinler */}
           <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-start">
             {/* Fotoğraf */}
             <div className="relative group order-1">
               <img
                 src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000"
                 alt="Workshop"
                 className="relative rounded-xl sm:rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover border border-slate-700"
               />
             </div>

             {/* Metin ve maddeler */}
             <div className="order-2">
               <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 font-medium leading-relaxed">
                 2010 yılından bu yana Hatay'da otomotiv bakım sektöründe standartları belirliyoruz. Geleneksel ustalığı modern teknolojiyle birleştirerek, aracınız için en güvenilir çözümleri üretiyoruz.
               </p>
               <div className="space-y-3 sm:space-y-4 md:space-y-5">
                 {[
                   "15 Yıllık Sektör Tecrübesi",
                   "%100 Müşteri Memnuniyeti Garantisi",
                   "Sertifikalı Uzman Kadro",
                   "Yol Yardım Desteği"
                 ].map((item, i) => (
                   <div
                     key={i}
                     className="flex items-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-200 min-h-[44px]"
                   >
                     <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-500 shrink-0" /> <span>{item}</span>
                   </div>
                 ))}
               </div>
             </div>
           </div>
        </div>
      </section>
    );
  }

function ContactSection() {
  return (
    <section className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 bg-[#020617]">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="İLETİŞİM" subtitle="BİZE ULAŞIN" />
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
             <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                {[
                  { icon: <Phone/>, title: "TELEFON", val: "+90 (539) 247 01 43", href: "tel:+905392470143" },
                  { icon: <MapPin/>, title: "ADRES", val: "Çekmece mh. 189. sok. No: 29/1 Defne / HATAY", href: null },
                  { icon: <Clock/>, title: "ÇALIŞMA SAATLERİ", val: "Pzt - Cmt: 08:15 - 18:30", href: null }
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
                <iframe src="https://maps.google.com/maps?q=Turun%C3%A7%20Oto%20Tamir%20Defne%20Hatay&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                <div className="absolute inset-0 pointer-events-none border-4 sm:border-[6px] md:border-[8px] border-slate-800 rounded-xl sm:rounded-2xl"></div>
             </div>
          </div>
       </div>
    </section>
  );
}

function AppointmentSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ brand: 'Seçiniz', modelYear: '', serviceType: '', name: '', phone: '', date: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleServiceSelect = (service) => setFormData({ ...formData, serviceType: service });
  const submitAppointment = () => {
    const message = `*Yeni Randevu!* 📅%0A%0A*Araç:* ${formData.brand} (${formData.modelYear})%0A*Hizmet:* ${formData.serviceType}%0A*Kişi:* ${formData.name}%0A*Tel:* ${formData.phone}%0A*Tarih:* ${formData.date}`;
    window.open(`https://wa.me/905392470143?text=${message}`, '_blank');
  };
  
  return (
    <section className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 min-h-screen flex items-center bg-[#020617] relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl relative z-10">
        <SpotlightCard className="p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-800"><div className="h-full bg-orange-500 transition-all duration-500" style={{ width: `${(step/2)*100}%` }}></div></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 md:mb-10 text-center uppercase tracking-tight">ONLİNE RANDEVU</h2>
          
          {step === 1 && (
            <div className="space-y-5 sm:space-y-6 md:space-y-8 animate-in slide-in-from-right-8 fade-in">
               <div className="space-y-2 sm:space-y-3">
                 <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Marka</label>
                 <select name="brand" value={formData.brand} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg text-white focus:border-orange-500 outline-none transition-colors font-bold appearance-none min-h-[44px]"><option>Seçiniz</option><option>BMW</option><option>Mercedes</option><option>Audi</option><option>Volkswagen</option><option>Diğer</option></select>
               </div>
               <div className="space-y-2 sm:space-y-3">
                 <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Model Yılı</label>
                 <input type="number" name="modelYear" value={formData.modelYear} onChange={handleChange} placeholder="Örn: 2018" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg text-white focus:border-orange-500 outline-none transition-colors font-bold min-h-[44px]" />
               </div>
               <div className="space-y-2 sm:space-y-3">
                 <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Hizmet Türü</label>
                 <div className="grid grid-cols-2 gap-3 sm:gap-4">
                   {['Periyodik Bakım', 'Arıza Tespiti', 'Motor Mekanik', 'Diğer'].map((type) => (
                     <button key={type} onClick={() => handleServiceSelect(type)} className={`border p-3 sm:p-4 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-bold text-left transition-all min-h-[44px] sm:min-h-[52px] ${formData.serviceType === type ? 'border-orange-500 bg-orange-500/10 text-orange-500' : 'border-slate-700 text-slate-400 hover:border-slate-600 hover:bg-slate-800 active:scale-95'}`}>{type}</button>
                   ))}
                 </div>
               </div>
               <button onClick={() => setStep(2)} className="w-full bg-white text-slate-900 hover:bg-orange-500 active:bg-orange-600 hover:text-white py-3.5 sm:py-4 md:py-5 rounded-xl font-black text-base sm:text-lg md:text-xl transition-all mt-4 shadow-lg min-h-[44px] sm:min-h-[52px]">DEVAM ET</button>
            </div>
          )}

          {step === 2 && (
             <div className="space-y-5 sm:space-y-6 md:space-y-8 animate-in slide-in-from-right-8 fade-in">
               <div className="space-y-2 sm:space-y-3">
                  <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Ad Soyad</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg text-white focus:border-orange-500 outline-none font-bold min-h-[44px]" />
               </div>
               <div className="space-y-2 sm:space-y-3">
                  <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Telefon</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg text-white focus:border-orange-500 outline-none font-bold min-h-[44px]" />
               </div>
               <div className="space-y-2 sm:space-y-3">
                  <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Tarih</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg text-white focus:border-orange-500 outline-none font-bold min-h-[44px]" />
               </div>
               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <button onClick={() => setStep(1)} className="flex-1 bg-slate-800 text-white hover:bg-slate-700 active:bg-slate-600 py-3.5 sm:py-4 md:py-5 rounded-xl font-bold border border-slate-700 text-sm sm:text-base md:text-lg min-h-[44px] sm:min-h-[52px] transition-all">GERİ</button>
                  <button onClick={submitAppointment} className="flex-[2] bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white py-3.5 sm:py-4 md:py-5 rounded-xl font-black shadow-lg shadow-orange-600/20 text-sm sm:text-base md:text-lg min-h-[44px] sm:min-h-[52px] transition-all">RANDEVUYU ONAYLA</button>
               </div>
             </div>
          )}
        </SpotlightCard>
      </div>
    </section>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    if(tab !== 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <style>{styles}</style>

      {/* MODAL */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 backdrop-blur-md bg-black/60 animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={() => setIsContactModalOpen(false)}></div>
          <div className="bg-[#0f172a] border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 max-w-md w-full relative z-10 shadow-2xl ring-1 ring-white/10 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setIsContactModalOpen(false)} className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 text-slate-400 hover:text-white hover:bg-slate-800 active:bg-slate-700 p-2.5 sm:p-3 rounded-full transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"><X className="w-5 h-5 sm:w-6 sm:h-6" /></button>
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-orange-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 ring-1 ring-orange-500/20"><Calendar className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-orange-500" /></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-3">Randevu Oluştur</h3>
              <p className="text-slate-400 text-xs sm:text-sm md:text-base">Hızlıca iletişime geçmek için bir yöntem seçin.</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <a href="https://wa.me/905392470143?text=Merhaba,%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 sm:gap-4 md:gap-5 w-full p-4 sm:p-5 md:p-6 bg-[#25D366]/10 hover:bg-[#25D366] active:bg-[#20ba5a] text-[#25D366] hover:text-white border border-[#25D366]/20 hover:border-[#25D366] rounded-lg sm:rounded-xl transition-all duration-300 min-h-[44px] sm:min-h-[56px]">
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 shrink-0" />
                <div className="text-left flex-1"><div className="text-[10px] sm:text-xs md:text-sm uppercase font-black opacity-80">WhatsApp</div><div className="text-sm sm:text-base md:text-lg font-bold">Mesaj Gönder</div></div>
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 opacity-80 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
              <a href="tel:+905392470143" className="group flex items-center gap-3 sm:gap-4 md:gap-5 w-full p-4 sm:p-5 md:p-6 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white border border-slate-700 hover:border-slate-600 rounded-lg sm:rounded-xl transition-all duration-300 min-h-[44px] sm:min-h-[56px]">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-500 shrink-0" />
                <div className="text-left flex-1"><div className="text-[10px] sm:text-xs md:text-sm uppercase font-black text-slate-500">Telefon</div><div className="text-sm sm:text-base md:text-lg font-bold">Hemen Ara</div></div>
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-slate-500 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
              <button onClick={() => { setIsContactModalOpen(false); navigateTo('appointment'); }} className="w-full py-3.5 sm:py-4 md:py-5 text-slate-400 hover:text-white active:text-slate-300 text-xs sm:text-sm md:text-base font-medium hover:underline decoration-orange-500 underline-offset-4 transition-all min-h-[44px] sm:min-h-[52px]">
                Form Doldurarak Devam Et
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HEADER (ŞEFFAF) */}
      <header className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#020617]/80 backdrop-blur-md border-b border-white/5 py-2 sm:py-2.5 md:py-3' : 'bg-[#020617]/40 backdrop-blur-sm py-3 sm:py-4 md:py-5 lg:py-6'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-[102]">
          <BrandLogo onClick={() => navigateTo('home')} />
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-md">
            {['Ana Sayfa', 'Hizmetler', 'Kurumsal', 'İletişim'].map((item) => {
              const key = item === 'Ana Sayfa' ? 'home' : item === 'Hizmetler' ? 'services' : item === 'Kurumsal' ? 'corporate' : 'contact';
              const isActive = activeTab === key;
              return (
                <button 
                  key={item} 
                  onClick={() => navigateTo(key)} 
                  className={`px-4 xl:px-5 2xl:px-6 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm 2xl:text-base font-bold transition-all duration-300 min-h-[44px] ${isActive ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          <button onClick={() => setIsContactModalOpen(true)} className="hidden lg:flex bg-white text-slate-950 hover:bg-orange-500 active:bg-orange-600 hover:text-white px-4 xl:px-6 2xl:px-8 py-2 xl:py-2.5 2xl:py-3 rounded-full font-black text-xs xl:text-sm 2xl:text-base transition-all hover:scale-105 active:scale-95 shadow-xl items-center gap-2 group whitespace-nowrap min-h-[44px]">
            <span className="relative">Randevu Al</span>
            <ArrowRight className="w-3 h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button 
            className="lg:hidden text-white bg-white/5 border border-white/10 p-2.5 sm:p-3 rounded-lg hover:bg-white/10 active:bg-white/15 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center relative z-[103]" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {isMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
          </button>
        </div>
      </header>
      
      {/* Mobile Menu - Sağdan açılan efektli sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-[98] transition-all duration-300 ${
          isMenuOpen
            ? 'bg-slate-900/20 backdrop-blur-md pointer-events-auto'
            : 'bg-transparent backdrop-blur-none pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-y-0 right-0 w-[78vw] sm:w-[70vw] md:w-[320px] bg-[#020617]/98 backdrop-blur-xl overflow-y-auto border-l border-slate-800 shadow-2xl rounded-l-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-8 flex flex-col gap-2">
            {['Ana Sayfa', 'Hizmetler', 'Kurumsal', 'İletişim'].map((item) => (
              <button 
                key={item} 
                onClick={() => {
                  navigateTo(item === 'Ana Sayfa' ? 'home' : item === 'Hizmetler' ? 'services' : item === 'Kurumsal' ? 'corporate' : 'contact');
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-between text-left py-3 sm:py-4 md:py-5 text-lg sm:text-xl md:text-2xl font-bold text-white border-b border-slate-800/50 last:border-0 hover:text-orange-500 active:text-orange-600 transition-colors group min-h-[52px] sm:min-h-[60px]"
              >
                {item}
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-orange-500" />
              </button>
            ))}
            <button 
              onClick={() => {
                setIsContactModalOpen(true);
                setIsMenuOpen(false);
              }} 
              className="bg-gradient-to-r from-orange-600 to-orange-500 w-full py-3.5 sm:py-4 md:py-5 rounded-xl text-white font-black mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-transform flex items-center justify-center gap-2 min-h-[52px] sm:min-h-[60px]"
            >
              Hemen Randevu Al <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT SWITCHER */}
      <main className="pt-0">
        {activeTab === 'home' && <HomeSection navigateTo={navigateTo} openContactModal={() => setIsContactModalOpen(true)} />}
        {activeTab !== 'home' && (
          <div className="pt-[72px] sm:pt-[80px] md:pt-[88px] lg:pt-[96px] scroll-mt-[72px] sm:scroll-mt-[80px] md:scroll-mt-[88px] lg:scroll-mt-[96px]">
             {activeTab === 'services' && <ServicesSection openContactModal={() => setIsContactModalOpen(true)} />}
             {activeTab === 'corporate' && <CorporateSection />} 
             {activeTab === 'contact' && <ContactSection />}
             {activeTab === 'appointment' && <AppointmentSection />}
             <Footer navigateTo={navigateTo} openContactModal={() => setIsContactModalOpen(true)} />
          </div>
        )}
      </main>
    </div>
  );
}