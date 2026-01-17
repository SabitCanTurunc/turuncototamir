import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { HATAY_DISTRICTS, DETAILED_SERVICES, APP_CONFIG, SITE_CONFIG } from '@/app/constants';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { CheckCircle2, Phone, MessageCircle, Wrench, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

// Sadece bu slug'lara sahip ana hizmetleri 'Diğer Hizmetler' bölümünde göster
const MAIN_SERVICES_SLUGS = [
  'motor-mekanik',
  'periyodik-bakim',
  'elektronik',
  'fren',
  'sanziman-tamiri',
  'alt-takim-suspansiyon'
];

// Static Params Generation
export async function generateStaticParams() {
  const params = [];
  for (const district of HATAY_DISTRICTS) {
    for (const service of DETAILED_SERVICES) {
      params.push({
        ilce: district.toLowerCase(),
        hizmet: service.slug,
      });
    }
  }
  return params;
}

type Props = {
  params: Promise<{
    ilce: string;
    hizmet: string;
  }>;
};

// Metadata Generator
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const district = HATAY_DISTRICTS.find(d => d.toLowerCase() === resolvedParams.ilce);
  const service = DETAILED_SERVICES.find(s => s.slug === resolvedParams.hizmet);

  if (!district || !service) return { title: 'Hizmet Bulunamadı' };

  const title = `${district} ${service.title} - Turunç Oto Tamir Hatay`;
  const description = `Hatay ${district} bölgesinde garantili ${service.title} hizmeti. ${service.desc} Randevu: ${APP_CONFIG.phone}`;

  return {
    title,
    description,
    alternates: { canonical: `/hizmetler/${resolvedParams.ilce}/${resolvedParams.hizmet}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const districtName = HATAY_DISTRICTS.find(d => d.toLowerCase() === resolvedParams.ilce);
  const serviceItem = DETAILED_SERVICES.find(s => s.slug === resolvedParams.hizmet);

  if (!districtName || !serviceItem) notFound();

  // Sadece ana hizmetler listesinden filtrele
  const relatedServices = DETAILED_SERVICES
    .filter(s => MAIN_SERVICES_SLUGS.includes(s.slug) && s.slug !== serviceItem.slug);
  
  const isMotorMekanik = serviceItem.slug === 'motor-mekanik';
  
  // Hizmete özel alt maddeler (Diğer hizmetler için varsayılanlar eklenebilir)
  const subServices = isMotorMekanik ? [
    "Motor Revizyonu (Rektifiye)",
    "Silindir Kapak Contası Değişimi",
    "Triger Seti Değişimi",
    "V Kayışı ve Bilye Değişimi",
    "Devirdaim (Su Pompası) Değişimi",
    "Turbo Tamiri ve Bakımı",
    "Subap Ayarı ve Değişimi",
    "Piston ve Segman Değişimi",
    "Yağ Pompası Kontrolü",
    "Radyatör ve Soğutma Sistemi Temizliği",
    "DPF (Dizel Partikül Filtresi) Temizliği",
    "Enjektör Bakım ve Revizyonu"
  ] : serviceItem.slug === 'periyodik-bakim' ? [
    "Motor Yağı Değişimi",
    "Yağ Filtresi Değişimi",
    "Hava Filtresi Değişimi",
    "Polen Filtresi Değişimi",
    "Yakıt Filtresi Değişimi",
    "Şanzıman Yağı Kontrolü ve Değişimi",
    "Fren Hidroliği Kontrolü",
    "Antifriz Ölçümü ve Değişimi",
    "Genel Check-Up (Lastik, Akü, Silecek vb.)"
  ] : serviceItem.slug === 'elektronik' ? [
    "Bilgisayarlı Arıza Tespiti (Diagnostik)",
    "EGR Valfi İptali ve Çözümleri",
    "DPF (Partikül Filtresi) İptali ve Temizliği"
  ] : serviceItem.slug === 'fren' ? [
    "Fren Balataları Değişimi",
    "Fren Diskleri Torna ve Değişimi",
    "Fren Hidroliği Kontrolü ve Değişimi",
    "El Freni (Park Freni) Ayarı ve Onarımı",
    "ABS Sensör ve Sistem Kontrolü",
    "Fren Kaliper Bakımı ve Tamiri"
  ] : serviceItem.slug === 'sanziman-tamiri' ? [
    "Debriyaj Seti Değişimi (Baskı Balata)",
    "Volan (Volant) Kontrolü ve Değişimi",
    "Debriyaj Bilyası Değişimi",
    "Debriyaj Alt/Üst Merkez Değişimi",
    "Şanzıman Dişli Onarımı",
    "Şanzıman Yağı Değişimi",
    "Otomatik Şanzıman Beyni Kontrolü"
  ] : serviceItem.slug === 'alt-takim-suspansiyon' ? [
    "Z Rotu ve Askı Rotu Değişimi",
    "Teker Bilyası (Porya) Değişimi",
    "Alt Tabla ve Salıncak Değişimi",
    "Rotil ve Rot Başı Değişimi",
    "Rot Kolu Değişimi",
    "Amortisör ve Helezon Yay Değişimi",
    "Aks ve Körük Değişimi",
    "Direksiyon Kutusu Kontrolü"
  ] : [
    "Garantili Yedek Parça",
    "Uzman İşçilik",
    "Hızlı Arıza Tespiti",
    "Bilgisayarlı Kontrol",
    "Ekonomik Çözümler",
    "Zamanında Teslimat"
  ];

  return (
    <main className="min-h-screen">
      {/* Modern Hero Section - Split Layout */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Arkaplan Efektleri */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* SOL SÜTUN: Başlık ve Açıklama */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6">
                <Wrench className="w-3 h-3" /> {districtName} Bölgesi Yetkili Servis Kalitesi
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.9] mb-6">
                {serviceItem.title.includes('(') ? (
                  serviceItem.title.split('(')[0]
                ) : (
                  <>
                    {serviceItem.title.split(' ').slice(0, -1).join(' ')} <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                      {serviceItem.title.split(' ').slice(-1)}
                    </span>
                  </>
                )}
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
                Hatay {districtName} ve çevresinde {serviceItem.title.toLowerCase()} işlemleriniz için 
                15 yıllık tecrübemizle yanınızdayız. {serviceItem.desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${APP_CONFIG.phoneRaw}`}
                  className="flex items-center justify-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] group"
                >
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  Hemen Ara
                </a>
                <a 
                  href={`https://wa.me/${APP_CONFIG.whatsapp}?text=Merhaba, ${districtName} bölgesi için ${serviceItem.title} hakkında bilgi almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg border border-slate-700 hover:border-green-500 hover:text-green-400 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>

              {/* Güven Rozetleri */}
              <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap gap-6 text-sm font-medium text-slate-500">
                 <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                    %100 Garanti
                 </div>
                 <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    Hızlı Teslimat
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="flex -space-x-3">
                       {[
                         "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
                         "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
                         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                       ].map((src, i) => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-[#020617] overflow-hidden">
                           <img src={src} alt={`Müşteri ${i+1}`} className="w-full h-full object-cover" />
                         </div>
                       ))}
                    </div>
                    <span>+5K Mutlu Müşteri</span>
                 </div>
              </div>
            </div>

            {/* SAĞ SÜTUN: Hizmet Listesi Kartı */}
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent rounded-3xl blur-2xl transform rotate-3"></div>
               <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
                     <Wrench className="w-5 h-5" />
                   </div>
                   Neler Yapıyoruz?
                 </h3>
                 
                 <div className="grid gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                   {subServices.map((sub, idx) => (
                     <div key={idx} className="flex items-start gap-3 group">
                       <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                       <span className="text-slate-300 group-hover:text-white transition-colors text-base font-medium border-b border-dashed border-slate-800 pb-2 w-full">{sub}</span>
                     </div>
                   ))}
                 </div>

                 <div className="mt-8 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                   <p className="text-sm text-orange-200 text-center font-medium">
                     Aracınızın markası ne olursa olsun, {districtName} şubemizde orijinal ekipmanlarla hizmetinizdeyiz.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diğer Hizmetler - Grid Layout */}
      <section className="py-20 bg-slate-900/30 border-t border-slate-800/50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="DİĞER HİZMETLERİMİZ" 
            subtitle={`${districtName} Bölgesi İçin Sunduğumuz Diğer Çözümler`}
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {relatedServices.map((service) => (
              <Link 
                key={service.slug}
                href={`/hizmetler/${resolvedParams.ilce}/${service.slug}`}
                className="group p-6 rounded-2xl bg-[#020617] border border-slate-800 hover:border-orange-500/50 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-orange-600 transition-colors flex items-center justify-center text-white">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {service.title.includes('(') ? service.title.split('(')[0] : service.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2">
                  {districtName} {service.title.toLowerCase()} hizmeti hakkında detaylı bilgi alın.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `${districtName} ${serviceItem.title}`,
            provider: {
              '@type': 'AutoRepair',
              name: APP_CONFIG.companyName,
              telephone: APP_CONFIG.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: districtName,
                addressRegion: 'Hatay',
                addressCountry: 'TR'
              }
            },
            areaServed: {
              '@type': 'City',
              name: districtName
            },
            description: serviceItem.desc,
            offers: {
              '@type': 'Offer',
              priceCurrency: 'TRY',
              availability: 'https://schema.org/InStock'
            }
          }),
        }}
      />
    </main>
  );
}
