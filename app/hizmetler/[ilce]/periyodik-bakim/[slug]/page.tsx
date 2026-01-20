import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { APP_CONFIG, HATAY_DISTRICTS } from '@/app/constants';
import { PERIYODIK_BAKIM_DETAILS } from '@/app/data/periyodik-bakim-data';
import { PageLayout } from '@/app/components/layout/PageLayout';
import {
    ArrowLeft,
    Phone,
    MessageCircle,
    CheckCircle2,
    Wrench,
    AlertTriangle,
    Activity,
    Clock
} from 'lucide-react';

export async function generateStaticParams() {
    const params = [];
    for (const district of HATAY_DISTRICTS) {
        for (const service of PERIYODIK_BAKIM_DETAILS) {
            params.push({
                ilce: district.toLowerCase(),
                slug: service.slug,
            });
        }
    }
    return params;
}

type Props = {
    params: Promise<{
        ilce: string;
        slug: string;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const district = HATAY_DISTRICTS.find(d => d.toLowerCase() === resolvedParams.ilce);
    const service = PERIYODIK_BAKIM_DETAILS.find(s => s.slug === resolvedParams.slug);

    if (!district || !service) return { title: 'Hizmet Bulunamadı' };

    const title = `${district} ${service.title} - Turunç Oto Tamir`;
    const description = `${district} bölgesinde ${service.title} hizmeti. ${service.shortDescription}`;

    return {
        title,
        description,
        alternates: { canonical: `/hizmetler/${resolvedParams.ilce}/periyodik-bakim/${resolvedParams.slug}` },
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const resolvedParams = await params;
    const districtName = HATAY_DISTRICTS.find(d => d.toLowerCase() === resolvedParams.ilce);
    const service = PERIYODIK_BAKIM_DETAILS.find(s => s.slug === resolvedParams.slug);

    if (!districtName || !service) return notFound();

    // Other related sub-services for sidebar
    const otherServices = PERIYODIK_BAKIM_DETAILS.filter(s => s.slug !== service.slug);


    return (
        <PageLayout>
            <main className="min-h-screen bg-[#020617] text-slate-100 font-sans pt-[72px] sm:pt-[80px] md:pt-[88px] lg:pt-[96px] relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>


                <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Header Section */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6">
                                    <Wrench className="w-3 h-3" /> {districtName} Periyodik Bakım Servisi
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
                                    {service.headerTitle}
                                </h1>
                                <p className="text-xl text-slate-300 leading-relaxed border-l-4 border-orange-500 pl-6 mb-8">
                                    {service.shortDescription}
                                </p>

                                {service.image && (
                                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-8 group">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur border border-white/10 text-white/80 text-xs font-medium">
                                                <CheckCircle2 className="w-3 h-3 text-green-500" />
                                                Orijinal Görsel
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Content Blocks */}
                            <div className="prose prose-invert prose-lg max-w-none">
                                {service.longDescription.map((desc, i) => (
                                    <p key={i} className="text-slate-400">{desc}</p>
                                ))}
                            </div>

                            {/* Failure Reasons & Symptoms Grid */}
                            <div className="grid md:grid-cols-2 gap-8">

                                {/* Neden Bozulur? */}
                                <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 hover:border-red-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                                            <AlertTriangle className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Neden Eskir/Bozulur?</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {service.failureReasons.map((reason, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                                                {reason}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Belirtileri Nelerdir? */}
                                <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 hover:border-orange-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                                            <Activity className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Değişim Belirtileri</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {service.symptoms.map((symptom, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                                                {symptom}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Replacement Frequency */}
                            <div className="bg-blue-900/10 rounded-2xl p-8 border border-blue-500/20 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Değişim ve Bakım Sıklığı</h3>
                                    <p className="text-blue-200/80">{service.replacementFrequency}</p>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">

                            {/* Contact Card */}
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-6">Hemen Randevu Alın</h3>
                                <p className="text-slate-400 text-sm mb-6">
                                    {districtName} şubemizde uzman ekibimizle aracınızın {service.title.toLowerCase()} işlemlerini en titiz şekilde yapıyoruz.
                                </p>

                                <div className="space-y-4">
                                    <a
                                        href={`tel:${APP_CONFIG.phoneRaw}`}
                                        className="flex items-center justify-center gap-3 bg-white text-slate-950 px-6 py-4 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all w-full"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Hemen Ara
                                    </a>
                                    <a
                                        href={`https://wa.me/${APP_CONFIG.whatsapp}?text=Merhaba, ${districtName} bölgesi için ${service.title} hakkında bilgi almak istiyorum.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all w-full"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        WhatsApp
                                    </a>
                                </div>

                            </div>

                            {/* Other Services List */}
                            <div className="hidden lg:block">
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Diğer Bakım İşlemleri</h3>
                                <div className="space-y-2">
                                    {otherServices.map((s) => (
                                        <Link
                                            key={s.slug}
                                            href={`/hizmetler/${resolvedParams.ilce}/periyodik-bakim/${s.slug}`}
                                            className="block p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/30 hover:bg-slate-800 transition-all group"
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-300 group-hover:text-white text-sm font-medium">{s.title}</span>
                                                <ArrowLeft className="w-4 h-4 text-slate-600 group-hover:text-orange-500 rotate-180 transition-colors" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </PageLayout>
    );
}
