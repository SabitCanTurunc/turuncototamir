'use client';

import { useState, useRef, lazy, Suspense } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ContactModal } from './components/modals/ContactModal';
import { HomeSection } from './sections/HomeSection';
import './styles.css';

// Lazy load sections for better performance - only load when needed
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const CorporateSection = lazy(() => import('./sections/CorporateSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));
const AppointmentSection = lazy(() => import('./sections/AppointmentSection'));

// Loading component
const SectionLoader = () => (
  <div className="min-h-screen bg-[#020617] flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-400 text-sm">Yükleniyor...</p>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const homeScrollToTopRef = useRef<(() => void) | null>(null);

  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    if(tab !== 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Home'a geçildiğinde, eğer home section yüklüyse scroll'u en üste götür
      setTimeout(() => {
        if (homeScrollToTopRef.current) {
          homeScrollToTopRef.current();
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    if (activeTab === 'home') {
      // Zaten home tab'ındaysa, scroll'u en üste götür
      if (homeScrollToTopRef.current) {
        homeScrollToTopRef.current();
      }
    } else {
      // Başka bir tab'daysa, önce home'a geç
      navigateTo('home');
    }
  };

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal}
        navigateTo={navigateTo}
      />

      <Header 
        activeTab={activeTab}
        navigateTo={navigateTo}
        openContactModal={openContactModal}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onLogoClick={handleLogoClick}
      />

      <main className="pt-0">
        {activeTab === 'home' && (
          <HomeSection 
            navigateTo={navigateTo} 
            openContactModal={openContactModal}
            scrollToTopRef={homeScrollToTopRef}
          />
        )}
        {activeTab !== 'home' && (
          <div className="pt-[72px] sm:pt-[80px] md:pt-[88px] lg:pt-[96px] scroll-mt-[72px] sm:scroll-mt-[80px] md:scroll-mt-[88px] lg:scroll-mt-[96px]">
            <Suspense fallback={<SectionLoader />}>
              {activeTab === 'services' && <ServicesSection openContactModal={openContactModal} />}
              {activeTab === 'corporate' && <CorporateSection />} 
              {activeTab === 'contact' && <ContactSection />}
              {activeTab === 'appointment' && <AppointmentSection />}
            </Suspense>
            <Footer navigateTo={navigateTo} openContactModal={openContactModal} />
          </div>
        )}
      </main>
    </div>
  );
}
