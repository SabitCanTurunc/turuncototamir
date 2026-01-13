'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { APP_CONFIG } from '../constants';

export default function CorporateSection() {
  return (
    <section className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 min-h-screen bg-[#020617]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <SectionHeader title="HAKKIMIZDA" subtitle="BİZ KİMİZ?" align="left" />

         <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-start">
           <div className="relative group order-1">
             <Image
               src="/fotohakkımızda.webp"
               alt="Turunç Oto Tamir atölyesi - Hatay Defne'de profesyonel otomotiv bakım servisi"
               width={1000}
               height={600}
               className="relative rounded-xl sm:rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover border border-slate-700"
               loading="lazy"
             />
           </div>

           <div className="order-2">
             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 font-medium leading-relaxed">
               {APP_CONFIG.establishedYear} yılından bu yana Hatay'da otomotiv bakım sektöründe standartları belirliyoruz. Geleneksel ustalığı modern teknolojiyle birleştirerek, aracınız için en güvenilir çözümleri üretiyoruz.
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
