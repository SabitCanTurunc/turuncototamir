'use client';

import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ContactModal } from '../modals/ContactModal';

interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    return (
        <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={closeContactModal}
                navigateTo={() => { }}
            />

            <Header openContactModal={openContactModal} />

            {children}

            <div className="relative z-10">
                <Footer openContactModal={openContactModal} />
            </div>
        </div>
    );
};
