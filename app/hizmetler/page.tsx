'use client';

import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ContactModal } from '../components/modals/ContactModal';
import ServicesSection from '../sections/ServicesSection';

export default function ServicesPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal}
        navigateTo={() => {}} // Modal içindeki yönlendirmeler için boş fonksiyon veya window.location kullanılabilir
      />

      <Header 
        openContactModal={openContactModal}
      />

      <main className="pt-[72px] sm:pt-[80px] md:pt-[88px] lg:pt-[96px]">
        <ServicesSection openContactModal={openContactModal} />
        <Footer openContactModal={openContactModal} />
      </main>
    </div>
  );
}
