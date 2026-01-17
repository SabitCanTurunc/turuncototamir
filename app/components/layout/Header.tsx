'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '../ui/BrandLogo';
import { NAV_ITEMS } from '../../constants';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  openContactModal: () => void;
}

export const Header = ({ openContactModal }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aktif menü öğesini belirle
  const isActiveLink = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#020617]/80 backdrop-blur-md border-b border-white/5 py-2 sm:py-2.5 md:py-3' : 'bg-[#020617]/40 backdrop-blur-sm py-3 sm:py-4 md:py-5 lg:py-6'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-[102]">
          <Link href="/">
            <BrandLogo />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-md" role="navigation" aria-label="Ana navigasyon">
            {NAV_ITEMS.map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <Link
                  key={item.key} 
                  href={item.href}
                  className={`px-4 xl:px-5 2xl:px-6 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm 2xl:text-base font-bold transition-all duration-300 min-h-[44px] flex items-center ${isActive ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button onClick={openContactModal} className="hidden lg:flex bg-white text-slate-950 hover:bg-orange-500 active:bg-orange-600 hover:text-white px-4 xl:px-6 2xl:px-8 py-2 xl:py-2.5 2xl:py-3 rounded-full font-black text-xs xl:text-sm 2xl:text-base transition-all hover:scale-105 active:scale-95 shadow-xl items-center gap-2 group whitespace-nowrap min-h-[44px]">
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
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute inset-y-0 right-0 w-[78vw] sm:w-[70vw] md:w-[320px] bg-[#020617]/98 backdrop-blur-xl overflow-y-auto border-l border-slate-800 shadow-2xl rounded-l-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-8 flex flex-col gap-2" role="navigation" aria-label="Mobil menü">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.key} 
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between text-left py-3 sm:py-4 md:py-5 text-lg sm:text-xl md:text-2xl font-bold border-b border-slate-800/50 last:border-0 hover:text-orange-500 active:text-orange-600 transition-colors group min-h-[52px] sm:min-h-[60px] ${isActiveLink(item.href) ? 'text-orange-500' : 'text-white'}`}
                aria-current={isActiveLink(item.href) ? 'page' : undefined}
              >
                {item.label}
                <ArrowRight className={`w-6 h-6 sm:w-7 sm:h-7 -translate-x-2 group-hover:translate-x-0 transition-all ${isActiveLink(item.href) ? 'opacity-100 translate-x-0' : 'opacity-0 text-orange-500'}`} />
              </Link>
            ))}
            <button 
              onClick={() => {
                openContactModal();
                setIsMenuOpen(false);
              }} 
              className="bg-gradient-to-r from-orange-600 to-orange-500 w-full py-3.5 sm:py-4 md:py-5 rounded-xl text-white font-black mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-transform flex items-center justify-center gap-2 min-h-[52px] sm:min-h-[60px]"
            >
              Hemen Randevu Al <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
