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
      className={`relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 text-slate-200 shadow-2xl transition-all duration-300 hover:border-slate-700 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(249, 115, 22, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// Section Header Component
const SectionHeader = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-12 md:mb-20 ${align === "center" ? "text-center" : "text-left"}`}>
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4 ${align === "center" ? "mx-auto" : ""}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
      {subtitle}
    </div>
    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
      {title}
    </h2>
  </div>
);

// --- HEADER & FOOTER LOGO BİLEŞENİ ---
const BrandLogo = ({ onClick }) => (
  <div className="flex items-center gap-3 cursor-pointer group select-none relative" onClick={onClick}>
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-orange-500/20 blur-2xl rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
    <div className="relative h-12 w-12 md:h-14 md:w-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
      <img src={CUSTOM_LOGO_URL} alt="Turunç Oto Logo" className="h-full w-full object-contain drop-shadow-xl" />
    </div>
    <div className="flex flex-col justify-center relative z-10">
      <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none flex items-center">
        TURUNÇ<span className="text-orange-500 ml-0.5">OTO</span>
      </h1>
      <span className="text-[0.6rem] text-slate-400 font-bold uppercase tracking-[0.2em] mt-0.5 group-hover:text-orange-400 transition-colors">Tamir & Bakım</span>
    </div>
  </div>
);

// --- FOOTER ---
const Footer = ({ navigateTo, openContactModal }) => (
  <footer className="bg-[#020617] border-t border-slate-800 w-full snap-start relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
    <div className="container mx-auto px-6 py-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-center md:text-left">
        <div className="lg:col-span-5 flex flex-col items-center md:items-start">
          <div className="mb-6"><BrandLogo onClick={() => navigateTo('home')} /></div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            2010'dan beri Hatay'da otomotiv dünyasına yön veriyoruz. En son teknoloji ve uzman kadromuzla aracınızın performansını garanti altına alıyoruz.
          </p>
        </div>
        <div className="lg:col-span-2 hidden md:block">
          <h4 className="text-white font-bold mb-6 text-sm">Menü</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            {['Ana Sayfa', 'Hizmetler', 'Kurumsal', 'İletişim'].map(item => (
              <li key={item} onClick={() => navigateTo(item === 'Ana Sayfa' ? 'home' : item === 'Hizmetler' ? 'services' : item === 'Kurumsal' ? 'corporate' : 'contact')} className="hover:text-orange-500 cursor-pointer transition-colors">{item}</li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold mb-6 text-sm">İletişim</h4>
          <div className="space-y-4 text-slate-400 text-sm w-full max-w-sm">
            <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
              <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
              <span>Çekmece mh. 189. sok. No: 29/1<br />Defne / HATAY</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer" onClick={() => window.open('tel:+905392470143')}>
              <Phone className="w-5 h-5 text-orange-500 shrink-0 group-hover:animate-bounce" />
              <span className="font-bold text-white group-hover:text-orange-500 transition-colors">+90 (539) 247 01 43</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-900 mt-12 pt-8 text-center">
        <p className="text-slate-600 text-xs font-medium tracking-wide">&copy; 2024 TURUNÇ OTO TAMİR. Powered by Next Gen Web.</p>
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
      {/* Navigation Dots */}
      <div className="hidden lg:flex fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-4">
        {sectionIds.map((_, idx) => (
          <button key={idx} onClick={() => scrollToSection(idx)} className={`group relative w-3 h-3 rounded-full transition-all duration-500 border border-orange-500/50 ${activeSection === idx ? 'bg-orange-500 h-10 shadow-[0_0_15px_rgba(249,115,22,0.6)]' : 'bg-transparent hover:bg-orange-500/50'}`}>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-bold text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{['Giriş', 'Neden Biz', 'Yorumlar', 'İletişim', 'Alt Bilgi'][idx]}</span>
          </button>
        ))}
      </div>

      {/* SECTION 1: HERO */}
      <section className="h-[100dvh] w-full snap-start relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
           <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-orange-600/20 rounded-full blur-[120px] animate-float"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col md:grid md:grid-cols-2 md:items-center justify-evenly md:justify-center pt-20 md:pt-0 gap-4 md:gap-12">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-8 max-h-[50vh] md:max-h-none">
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter leading-[0.95] md:leading-[0.85] drop-shadow-2xl">
              PERFORMANSA <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">YENİDEN</span> <br/>
              MERHABA
            </h1>
            
            <p className="text-slate-400 text-sm md:text-xl max-w-lg font-medium leading-relaxed hidden sm:block">
              Profesyonel ekip, dijital diyagnostik ve garantili işçilik ile aracınızın performansını zirveye taşıyoruz.
            </p>
            
            <div className="flex flex-row w-full justify-center md:justify-start gap-3 pt-2">
               <button onClick={openContactModal} className="bg-orange-600 hover:bg-orange-500 text-white px-6 md:px-10 py-3 md:py-5 rounded-2xl font-bold text-sm md:text-lg transition-all hover:scale-105 shadow-2xl shadow-orange-600/30 flex items-center justify-center gap-2 group">
                 Randevu Al <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
               </button>
               <button onClick={() => navigateTo('services')} className="bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 px-6 md:px-10 py-3 md:py-5 rounded-2xl font-bold text-sm md:text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                 <Wrench className="w-4 h-4 md:w-5 md:h-5 text-slate-400" /> <span className="hidden sm:inline">Hizmetleri Gör</span><span className="sm:hidden">Hizmetler</span>
               </button>
            </div>
            
            <div className="pt-4 md:pt-8 flex justify-center md:justify-start items-center gap-6 md:gap-8 border-t border-white/5 w-full">
              {[
                { val: "15+", label: "Yıl" },
                { val: "5K+", label: "Referans" },
                { val: "%100", label: "Garanti" }
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-xl md:text-3xl font-black text-white">{stat.val}</p>
                  <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative flex justify-center items-center perspective-1000 w-full h-[35vh] md:h-auto">
             <div className="relative w-full h-full max-w-xs md:max-w-xl aspect-square md:aspect-auto flex items-center justify-center transform transition-transform duration-500 hover:rotate-1">
               <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-[60px] md:blur-[100px] animate-pulse"></div>
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
      <section className="h-[100dvh] w-full snap-start flex flex-col justify-center bg-[#020617] relative overflow-hidden">
        <div className="container mx-auto px-6 pt-24 md:pt-0">
          <SectionHeader title="NEDEN BİZ?" subtitle="FARKIMIZ" align="left" />
          
          <div 
            ref={featuresRef}
            onScroll={handleFeaturesScroll}
            className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 pb-8 md:pb-0 -mx-6 px-[10vw] md:px-0 md:mx-0 no-scrollbar items-center py-8"
          >
             {[
               { icon: <Settings className="w-10 h-10"/>, title: "DİJİTAL DİYAGNOSTİK", desc: "Aracınızdaki en ufak hatayı bile tespit eden son teknoloji cihazlar." },
               { icon: <Clock className="w-10 h-10"/>, title: "HIZLI SERVİS", desc: "Zamanınız değerli. Optimize edilmiş iş akışımızla en kısa sürede teslimat." },
               { icon: <ShieldCheck className="w-10 h-10"/>, title: "GARANTİLİ İŞÇİLİK", desc: "Ustalığımıza güveniyoruz. Montaj hatası veya eksik parça gibi sorunlara karşı tam güvence." }
             ].map((f, i) => (
               <div 
                  key={i} 
                  className={`transition-all duration-500 ease-out transform ${
                    i === activeFeature 
                      ? "scale-110 opacity-100 z-10" 
                      : "scale-90 opacity-60 z-0 blur-[1px]"
                  } md:scale-100 md:opacity-100 md:blur-none md:z-auto min-w-[80vw] md:min-w-0 snap-center flex flex-col justify-center group h-full`}
               >
                 <SpotlightCard className="p-8 h-full">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:rotate-3">{f.icon}</div>
                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{f.title}</h3>
                    <p className="text-slate-400 group-hover:text-slate-200 text-base font-medium leading-relaxed">{f.desc}</p>
                 </SpotlightCard>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TESTIMONIALS */}
      <section className="h-[100dvh] w-full snap-start flex flex-col justify-center bg-[#020617] border-t border-slate-900 relative overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        <div className="container mx-auto px-6 mb-8 relative z-10">
           <SectionHeader title="MUTLU MÜŞTERİLER" subtitle="REFERANSLARIMIZ" />
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-6 w-max px-6">
            {[...testimonials, ...testimonials].map((t, i) => (
               <SpotlightCard key={i} className="w-[85vw] md:w-[450px] p-8 bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
                  <Quote className="absolute top-6 right-6 text-slate-700 w-8 h-8 opacity-50" />
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">{t.name.charAt(0)}</div>
                     <div>
                        <div className="text-white font-bold text-lg">{t.name}</div>
                        <div className="text-orange-500 text-xs font-black uppercase tracking-wider bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">{t.car}</div>
                     </div>
                  </div>
                  <p className="text-lg text-slate-300 font-medium leading-relaxed pr-8">"{t.text}"</p>
               </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="h-[100dvh] w-full snap-start flex items-center justify-center bg-[#020617] relative overflow-hidden border-t border-slate-900 pt-20 md:pt-0">
         <div className="absolute inset-0 bg-orange-600/5"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[200px] pointer-events-none"></div>
         
         <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-block p-4 rounded-full bg-slate-900 border border-slate-800 mb-8 shadow-2xl animate-pulse-glow">
              <Wrench className="w-12 h-12 text-orange-500" />
            </div>
            <h2 className="text-5xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
              BAKIM <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700">ZAMANI MI?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium">
              Beklenmedik sürprizlerle karşılaşmamak için profesyonel ekibimizden destek alın.
            </p>
            <button onClick={openContactModal} className="group bg-white text-slate-950 hover:bg-orange-500 hover:text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-black text-base md:text-xl transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] flex items-center justify-center gap-3 mx-auto whitespace-nowrap">
               HEMEN RANDEVU AL <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
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
    <section className="py-24 min-h-screen bg-[#020617]">
      <div className="container mx-auto px-6">
        <SectionHeader title="HİZMETLERİMİZ" subtitle="NELER YAPIYORUZ" />
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group relative h-[350px] rounded-[2rem] overflow-hidden cursor-pointer border border-slate-800 shadow-2xl">
               <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg">{React.cloneElement(s.icon, { className: "w-6 h-6" })}</div>
                    <div className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-black transition-all">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">{s.title}</h3>
                  <p className="text-slate-300 font-medium mb-0">{s.desc}</p>
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
      <section className="py-24 min-h-screen bg-[#020617]">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <SectionHeader title="HAKKIMIZDA" subtitle="BİZ KİMİZ?" align="left" />
                 <p className="text-xl text-slate-400 mb-8 font-medium leading-relaxed">
                   2010 yılından bu yana Hatay'da otomotiv bakım sektöründe standartları belirliyoruz. Geleneksel ustalığı modern teknolojiyle birleştirerek, aracınız için en güvenilir çözümleri üretiyoruz.
                 </p>
                 <div className="space-y-4">
                    {[
                      "15 Yıllık Sektör Tecrübesi",
                      "%100 Müşteri Memnuniyeti Garantisi",
                      "Sertifikalı Uzman Kadro",
                      "Yol Yardım Desteği"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-lg font-bold text-slate-200">
                        <CheckCircle2 className="w-6 h-6 text-orange-500" /> {item}
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative group">
                 <div className="absolute -inset-4 bg-gradient-to-tr from-orange-600 to-purple-600 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                 <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000" alt="Workshop" className="relative rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover border border-slate-700" />
              </div>
           </div>
        </div>
      </section>
    );
  }

function ContactSection() {
  return (
    <section className="py-24 bg-[#020617]">
       <div className="container mx-auto px-6">
          <SectionHeader title="İLETİŞİM" subtitle="BİZE ULAŞIN" />
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
             <div className="space-y-4 md:space-y-6">
                {[
                  { icon: <Phone/>, title: "TELEFON", val: "+90 (539) 247 01 43", href: "tel:+905392470143" },
                  { icon: <MapPin/>, title: "ADRES", val: "Çekmece mh. 189. sok. No: 29/1 Defne / HATAY", href: null },
                  { icon: <Clock/>, title: "ÇALIŞMA SAATLERİ", val: "Pzt - Cmt: 08:15 - 18:30", href: null }
                ].map((item, i) => (
                  <SpotlightCard key={i} className="flex items-center gap-6 p-8">
                     <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-orange-500 shadow-inner">{item.icon}</div>
                     <div>
                        <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-1">{item.title}</div>
                        {item.href ? <a href={item.href} className="text-lg md:text-xl font-bold text-white hover:text-orange-500 transition-colors">{item.val}</a> : <div className="text-lg md:text-xl font-bold text-white">{item.val}</div>}
                     </div>
                  </SpotlightCard>
                ))}
             </div>
             <div className="h-[400px] md:h-auto bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl relative">
                <iframe src="https://maps.google.com/maps?q=Turun%C3%A7%20Oto%20Tamir%20Defne%20Hatay&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                <div className="absolute inset-0 pointer-events-none border-[6px] border-slate-800 rounded-[2rem]"></div>
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
    <section className="py-24 min-h-screen flex items-center bg-[#020617] relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
      <div className="container mx-auto px-6 max-w-2xl relative z-10">
        <SpotlightCard className="p-8 md:p-12">
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-800"><div className="h-full bg-orange-500 transition-all duration-500" style={{ width: `${(step/2)*100}%` }}></div></div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center uppercase tracking-tight">ONLİNE RANDEVU</h2>
          
          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right-8 fade-in">
               <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Marka</label>
                 <select name="brand" value={formData.brand} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-4 text-white focus:border-orange-500 outline-none transition-colors font-bold appearance-none"><option>Seçiniz</option><option>BMW</option><option>Mercedes</option><option>Audi</option><option>Volkswagen</option><option>Diğer</option></select>
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Model Yılı</label>
                 <input type="number" name="modelYear" value={formData.modelYear} onChange={handleChange} placeholder="Örn: 2018" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-4 text-white focus:border-orange-500 outline-none transition-colors font-bold" />
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Hizmet Türü</label>
                 <div className="grid grid-cols-2 gap-3">
                   {['Periyodik Bakım', 'Arıza Tespiti', 'Motor Mekanik', 'Diğer'].map((type) => (
                     <button key={type} onClick={() => handleServiceSelect(type)} className={`border p-3 rounded-xl text-sm font-bold text-left transition-all ${formData.serviceType === type ? 'border-orange-500 bg-orange-500/10 text-orange-500' : 'border-slate-700 text-slate-400 hover:border-slate-600 hover:bg-slate-800'}`}>{type}</button>
                   ))}
                 </div>
               </div>
               <button onClick={() => setStep(2)} className="w-full bg-white text-slate-900 hover:bg-orange-500 hover:text-white py-4 rounded-xl font-black text-lg transition-colors mt-4 shadow-lg">DEVAM ET</button>
            </div>
          )}

          {step === 2 && (
             <div className="space-y-6 animate-in slide-in-from-right-8 fade-in">
               <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Ad Soyad</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-4 text-white focus:border-orange-500 outline-none font-bold" />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Telefon</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-4 text-white focus:border-orange-500 outline-none font-bold" />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Tarih</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-4 text-white focus:border-orange-500 outline-none font-bold" />
               </div>
               <div className="flex gap-4 pt-4">
                  <button onClick={() => setStep(1)} className="flex-1 bg-slate-800 text-white hover:bg-slate-700 py-4 rounded-xl font-bold border border-slate-700">GERİ</button>
                  <button onClick={submitAppointment} className="flex-[2] bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-black shadow-lg shadow-orange-600/20">RANDEVUYU ONAYLA</button>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-black/60 animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={() => setIsContactModalOpen(false)}></div>
          <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-8 max-w-md w-full relative z-10 shadow-2xl ring-1 ring-white/10">
            <button onClick={() => setIsContactModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-all"><X className="w-5 h-5" /></button>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 ring-1 ring-orange-500/20"><Calendar className="w-8 h-8 text-orange-500" /></div>
              <h3 className="text-2xl font-black text-white mb-2">Randevu Oluştur</h3>
              <p className="text-slate-400 text-sm">Hızlıca iletişime geçmek için bir yöntem seçin.</p>
            </div>
            <div className="space-y-3">
              <a href="https://wa.me/905392470143?text=Merhaba,%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 w-full p-4 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/20 hover:border-[#25D366] rounded-xl transition-all duration-300">
                <MessageCircle className="w-6 h-6" />
                <div className="text-left"><div className="text-[10px] uppercase font-black opacity-80">WhatsApp</div><div className="text-base font-bold">Mesaj Gönder</div></div>
                <ChevronRight className="w-5 h-5 ml-auto opacity-80 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+905392470143" className="group flex items-center gap-4 w-full p-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 rounded-xl transition-all duration-300">
                <Phone className="w-6 h-6 text-orange-500" />
                <div className="text-left"><div className="text-[10px] uppercase font-black text-slate-500">Telefon</div><div className="text-base font-bold">Hemen Ara</div></div>
                <ChevronRight className="w-5 h-5 ml-auto text-slate-500 group-hover:translate-x-1 transition-transform" />
              </a>
              <button onClick={() => { setIsContactModalOpen(false); navigateTo('appointment'); }} className="w-full py-4 text-slate-400 hover:text-white text-sm font-medium hover:underline decoration-orange-500 underline-offset-4 transition-all">
                Form Doldurarak Devam Et
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HEADER (ŞEFFAF) */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-transparent backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <BrandLogo onClick={() => navigateTo('home')} />
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-md">
            {['Ana Sayfa', 'Hizmetler', 'Kurumsal', 'İletişim'].map((item) => {
              const key = item === 'Ana Sayfa' ? 'home' : item === 'Hizmetler' ? 'services' : item === 'Kurumsal' ? 'corporate' : 'contact';
              const isActive = activeTab === key;
              return (
                <button 
                  key={item} 
                  onClick={() => navigateTo(key)} 
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${isActive ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          <button onClick={() => setIsContactModalOpen(true)} className="hidden md:flex bg-white text-slate-950 hover:bg-orange-500 hover:text-white px-6 py-2.5 rounded-full font-black text-sm transition-all hover:scale-105 shadow-xl items-center gap-2 group">
            <span className="relative">Randevu Al</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="md:hidden text-white bg-white/5 border border-white/10 p-2.5 rounded-xl hover:bg-white/10 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-b border-slate-800 p-6 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-2 h-screen z-50">
            {['Ana Sayfa', 'Hizmetler', 'Kurumsal', 'İletişim'].map((item) => (
              <button 
                key={item} 
                onClick={() => navigateTo(item === 'Ana Sayfa' ? 'home' : item === 'Hizmetler' ? 'services' : item === 'Kurumsal' ? 'corporate' : 'contact')} 
                className="flex items-center justify-between text-left py-4 text-2xl font-bold text-white border-b border-slate-800/50 last:border-0 hover:text-orange-500 transition-colors group"
              >
                {item}
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-orange-500" />
              </button>
            ))}
            <button onClick={() => setIsContactModalOpen(true)} className="bg-gradient-to-r from-orange-600 to-orange-500 w-full py-4 rounded-xl text-white font-black mt-6 text-lg shadow-lg shadow-orange-500/20 active:scale-95 transition-transform flex items-center justify-center gap-2">
              Hemen Randevu Al <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </header>

      {/* CONTENT SWITCHER */}
      <main className="pt-0">
        {activeTab === 'home' && <HomeSection navigateTo={navigateTo} openContactModal={() => setIsContactModalOpen(true)} />}
        {activeTab !== 'home' && (
          <div className="pt-32">
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