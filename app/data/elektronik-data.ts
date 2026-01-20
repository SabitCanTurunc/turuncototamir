export interface SubServiceDetail {
    slug: string;
    title: string;
    headerTitle: string;
    shortDescription: string;
    longDescription: string[];
    failureReasons: string[];
    replacementFrequency: string;
    symptoms: string[];
    image?: string;
}

export const ELEKTRONIK_DETAILS: SubServiceDetail[] = [
    {
        slug: 'bilgisayarli-ariza-tespiti',
        title: 'Bilgisayarlı Arıza Tespiti (Diagnostik)',
        headerTitle: 'Profesyonel Arıza Tespit ve Diagnostik',
        shortDescription: 'Son teknoloji cihazlarla aracınızdaki tüm elektronik arızaların nokta atışı tespiti.',
        image: '/services/elektronik/ariza-tespiti.png',
        longDescription: [
            'Yeni nesil araçlar yüzlerce sensör ve beyin (ECU) ile yönetilir. Arıza tespiti artık deneme-yanılma ile değil, ileri teknoloji diyagnostik cihazlarla yapılır.',
            'Motor, şanzıman, ABS, Airbag gibi tüm sistemlerin hata kodlarını okuyor, canlı değerleri inceliyor ve sorunun kaynağını %100 doğrulukla tespit ediyoruz.',
        ],
        failureReasons: [
            'Sensör arızaları (Oksijen, Krank, Eksantrik vb.)',
            'Kablo tesisatında kopukluk veya oksitlenme',
            'Akü voltaj düzensizlikleri',
            'Beyin (ECU) yazılım hataları',
        ],
        replacementFrequency: 'Arıza lambası yandığında veya periyodik bakımlarda kontrol amaçlı yapılır.',
        symptoms: [
            'Gösterge panelinde arıza lambalarının yanması',
            'Motorun sarsıntılı çalışması veya stop etmesi',
            'Yakıt tüketiminin artması',
            'Çekiş düşüklüğü',
        ],
    },
    {
        slug: 'egr-iptali-cozumleri',
        title: 'EGR Valfi İptali ve Çözümleri',
        headerTitle: 'EGR Valfi Temizliği ve Yazılımsal Çözümler',
        shortDescription: 'Egzoz gazı geri dönüşüm sistemindeki tıkanıklık ve arızaların giderilmesi.',
        image: '/services/elektronik/egr-valfi.png',
        longDescription: [
            'EGR (Exhaust Gas Recirculation), egzoz gazının bir kısmını yanma odasına geri göndererek emisyonu düşürür. Ancak zamanla kurum bağlayarak tıkanır.',
            'Tıkanan EGR valfi açık kalırsa motor boğulur, kapalı kalırsa motor ısısı artar ve emisyon değerleri yükseler. Temizliği veya (yasal çerçevede) iptali/değişimi gerekebilir.',
        ],
        failureReasons: [
            'Kalitesiz yakıt kullanımı',
            'Sürekli düşük devirde kullanım',
            'Turbo arızaları nedeniyle yağ yakma',
        ],
        replacementFrequency: '60.000 - 80.000 km de bir temizlenmesi motor ömrünü uzatır.',
        symptoms: [
            'Siyah duman atma',
            'Motorun geç çalışması',
            'Rölantide dalgalanma',
            'Hızlanmada kesiklik',
        ],
    },
    {
        slug: 'dpf-iptali-temizligi',
        title: 'DPF (Partikül Filtresi) İptali ve Temizliği',
        headerTitle: 'DPF Partikül Filtresi Çözümleri',
        shortDescription: 'Dizel araçların baş belası olan tıkanıklık sorununa kesin çözümler.',
        image: '/services/elektronik/dpf-filtresi.png',
        longDescription: [
            'Dizel Partikül Filtresi (DPF), kurumları tutar. Şehir içi kullanımda araç "rejenerasyon" (kendi kendini temizleme) yapamaz ve filtre tıkanır.',
            'Tıkanan filtre egzoz gazını geri teper, turboyu bozar ve motoru "Koruma Modu"na alır. Profesyonel makinelerle %99 oranında temizliyoruz.',
        ],
        failureReasons: [
            'Kısa mesafe sürüşler (Motor ısınmadan stop etme)',
            'Yanlış motor yağı kullanımı (DPF onaylı olmayan yağ)',
            'Enjektör arızaları',
        ],
        replacementFrequency: 'Uyarı ışığı yandığında acilen müdahale edilmelidir. Genellikle 100.000 km sonrası sıklaşır.',
        symptoms: [
            'Motor arıza lambası ve DPF uyarısı',
            'Aracın gaz yememesi (Koruma modu)',
            'Yakıt tüketiminde aşırı artış',
            'Egzozdan kötü koku',
        ],
    },
];
