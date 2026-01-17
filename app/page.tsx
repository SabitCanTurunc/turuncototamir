'use client';

import { useState, useRef } from 'react';
import { Header } from './components/layout/Header';
import { ContactModal } from './components/modals/ContactModal';
import { HomeSection } from './sections/HomeSection';
import './styles.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const homeScrollToTopRef = useRef<(() => void) | null>(null);

  // navigateTo artık kullanılmıyor ama HomeSection ve ContactModal prop olarak bekleyebilir.
  // Bu yüzden boş bir fonksiyon veya opsiyonel olarak geçebiliriz.
  // HomeSection içinde navigateTo kullanımı sadece 'services' yönlendirmesi içindi, onu Link ile değiştirdik.
  // Ancak type tanımında hala zorunlu olabilir. Şimdilik boş fonksiyon geçiyorum.
  const navigateTo = (tab: string) => {
    // Deprecated: Navigation is handled by Next.js Link
    console.log('Navigation requested to:', tab);
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
        openContactModal={openContactModal}
      />

      <main className="pt-0">
          <HomeSection 
            navigateTo={navigateTo} 
            openContactModal={openContactModal}
            scrollToTopRef={homeScrollToTopRef}
          />
      </main>
    </div>
  );
}
