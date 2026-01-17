'use client';

import { useState } from 'react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { ContactModal } from '@/app/components/modals/ContactModal';

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal}
        navigateTo={() => {}} 
      />

      <Header 
        openContactModal={openContactModal}
      />

      {/* Header yüksekliği kadar padding bırakıyoruz */}
      <div className="pt-[72px] sm:pt-[80px] md:pt-[88px] lg:pt-[96px]">
        {children}
      </div>

      <Footer openContactModal={openContactModal} />
    </div>
  );
}
