'use client';

import React, { useState, useCallback } from 'react';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { EXTERNAL_URLS, SERVICE_TYPES, CAR_BRANDS } from '../constants';
import type { FormData } from '../types';

export default function AppointmentSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({ brand: 'Seçiniz', model: '', modelYear: '', serviceType: '', name: '', phone: '', date: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleServiceSelect = (service: string) => setFormData({ ...formData, serviceType: service });
  const submitAppointment = useCallback(() => {
    const message = `*Yeni Randevu!* 📅%0A%0A*Araç:* ${formData.brand} ${formData.model ? formData.model + ' ' : ''}(${formData.modelYear})%0A*Hizmet:* ${formData.serviceType}%0A*Kişi:* ${formData.name}%0A*Tel:* ${formData.phone}%0A*Tarih:* ${formData.date}`;
    window.open(`${EXTERNAL_URLS.whatsapp}?text=${message}`, '_blank');
  }, [formData]);
  
  return (
    <section className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 min-h-screen flex items-center bg-[#020617] relative">
      <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: `url(${EXTERNAL_URLS.noiseTexture})`}}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl relative z-10">
        <SpotlightCard className="p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 z-0"><div className="h-full bg-orange-500 transition-all duration-500" style={{ width: `${(step/2)*100}%` }}></div></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 md:mb-10 text-center uppercase tracking-tight pt-4 sm:pt-5 md:pt-6">ONLİNE RANDEVU</h2>
          
          {step === 1 && (
            <div className="space-y-5 sm:space-y-6 md:space-y-8 animate-in slide-in-from-right-8 fade-in">
               <div className="space-y-2 sm:space-y-3">
                 <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Marka</label>
                 <select name="brand" value={formData.brand} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg text-white focus:border-orange-500 outline-none transition-colors font-bold appearance-none min-h-[44px]" aria-label="Araç markası seçin">
                   {CAR_BRANDS.map(brand => (
                     <option key={brand} value={brand}>{brand}</option>
                   ))}
                 </select>
               </div>
               <div className="space-y-2 sm:space-y-3">
                 <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Araç Modeli</label>
                 <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="Örn: Focus, Civic, Passat" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg text-white focus:border-orange-500 outline-none transition-colors font-bold min-h-[44px]" />
               </div>
               <div className="space-y-2 sm:space-y-3">
                 <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Model Yılı</label>
                 <input type="number" name="modelYear" value={formData.modelYear} onChange={handleChange} placeholder="Örn: 2018" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg text-white focus:border-orange-500 outline-none transition-colors font-bold min-h-[44px]" />
               </div>
               <div className="space-y-2 sm:space-y-3">
                 <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Hizmet Türü</label>
                 <div className="grid grid-cols-2 gap-3 sm:gap-4" role="group" aria-label="Hizmet türü seçin">
                   {SERVICE_TYPES.map((type) => (
                     <button key={type} onClick={() => handleServiceSelect(type)} className={`border p-3 sm:p-4 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-bold text-left transition-all min-h-[44px] sm:min-h-[52px] ${formData.serviceType === type ? 'border-orange-500 bg-orange-500/10 text-orange-500' : 'border-slate-700 text-slate-400 hover:border-slate-600 hover:bg-slate-800 active:scale-95'}`} aria-pressed={formData.serviceType === type}>{type}</button>
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
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
