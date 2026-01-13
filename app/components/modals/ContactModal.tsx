'use client';

import { X, Calendar, MessageCircle, Phone, ChevronRight, ArrowRight } from 'lucide-react';
import { EXTERNAL_URLS, APP_CONFIG } from '../../constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigateTo: (tab: string) => void;
}

export const ContactModal = ({ isOpen, onClose, navigateTo }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 backdrop-blur-md bg-black/60 animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="bg-[#0f172a] border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 max-w-md w-full relative z-10 shadow-2xl ring-1 ring-white/10 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 text-slate-400 hover:text-white hover:bg-slate-800 active:bg-slate-700 p-2.5 sm:p-3 rounded-full transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"><X className="w-5 h-5 sm:w-6 sm:h-6" /></button>
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-orange-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 ring-1 ring-orange-500/20"><Calendar className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-orange-500" /></div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-3">Randevu Oluştur</h3>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base">Hızlıca iletişime geçmek için bir yöntem seçin.</p>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <a href={`${EXTERNAL_URLS.whatsapp}?text=Merhaba,%20randevu%20almak%20istiyorum.`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 sm:gap-4 md:gap-5 w-full p-4 sm:p-5 md:p-6 bg-[#25D366]/10 hover:bg-[#25D366] active:bg-[#20ba5a] text-[#25D366] hover:text-white border border-[#25D366]/20 hover:border-[#25D366] rounded-lg sm:rounded-xl transition-all duration-300 min-h-[44px] sm:min-h-[56px]" aria-label="WhatsApp ile randevu al">
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 shrink-0" />
            <div className="text-left flex-1"><div className="text-[10px] sm:text-xs md:text-sm uppercase font-black opacity-80">WhatsApp</div><div className="text-sm sm:text-base md:text-lg font-bold">Mesaj Gönder</div></div>
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 opacity-80 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>
          <a href={EXTERNAL_URLS.phone} className="group flex items-center gap-3 sm:gap-4 md:gap-5 w-full p-4 sm:p-5 md:p-6 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white border border-slate-700 hover:border-slate-600 rounded-lg sm:rounded-xl transition-all duration-300 min-h-[44px] sm:min-h-[56px]" aria-label={`Telefon ile ara: ${APP_CONFIG.phone}`}>
            <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-500 shrink-0" />
            <div className="text-left flex-1"><div className="text-[10px] sm:text-xs md:text-sm uppercase font-black text-slate-500">Telefon</div><div className="text-sm sm:text-base md:text-lg font-bold">Hemen Ara</div></div>
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-slate-500 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>
          <button onClick={() => { onClose(); navigateTo('appointment'); }} className="w-full py-3.5 sm:py-4 md:py-5 text-slate-400 hover:text-white active:text-slate-300 text-xs sm:text-sm md:text-base font-medium hover:underline decoration-orange-500 underline-offset-4 transition-all min-h-[44px] sm:min-h-[52px]">
            Form Doldurarak Devam Et
          </button>
        </div>
      </div>
    </div>
  );
};
