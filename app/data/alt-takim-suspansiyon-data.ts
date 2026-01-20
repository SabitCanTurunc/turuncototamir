import { SubServiceDetail } from './elektronik-data'; // Reusing interface

export const ALT_TAKIM_DETAILS: SubServiceDetail[] = [
    {
        slug: 'z-rotu-degisimi',
        title: 'Z Rotu ve Askı Rotu Değişimi',
        headerTitle: 'Z Rot – Askı Rotu Değişimi',
        shortDescription: 'Bozuk yollardaki tıkırtı sesinin en yaygın kaynağı olan parçanın değişimi.',
        image: '/services/alt-takim/z-rot.png',
        longDescription: [
            'Z rotları, viraj demirini amortisöre bağlar ve aracın virajlarda yatmasını dengeler.',
            'Çok hareketli ve zayıf bir parça olduğu için bozuk yollarda en çabuk bozulan ön takım elemanıdır.',
        ],
        failureReasons: [
            'Çukurlara sert girme',
            'Kasislerden hızlı geçme',
            'Zamanla körüklerinin yırtılıp boşluk yapması',
        ],
        replacementFrequency: 'Ortalama 20.000 - 30.000 km (Yol şartlarına göre çok değişir).',
        symptoms: [
            'Küçük çukurlarda bile gelen "lıkır lıkır" sesi',
            'Direksiyon tepkilerinde hafif gevşeklik',
        ],
    },
    {
        slug: 'teker-bilyasi-degisimi',
        title: 'Teker Bilyası (Porya) Değişimi',
        headerTitle: 'Ön ve Arka Teker Porya Bilyası Değişimi',
        shortDescription: 'Tekerleğin dönmesini sağlayan rulmanların değişimi.',
        image: '/services/alt-takim/teker-bilyasi.png',
        longDescription: [
            'Teker bilyası, aracın tüm yükünü taşıyarak tekerleğin sürtünmesiz dönmesini sağlar.',
            'Bozulduğunda uçak kalkıyormuş gibi artan bir uğultu yapar. İhmal edilirse teker kilitlenebilir veya kopabilir.',
        ],
        failureReasons: [
            'Yüksek kilometre (Metal yorgunluğu)',
            'Su birikintilerine hızlı girmek (Ani soğuma)',
            'Darbe ve kazalar',
        ],
        replacementFrequency: 'Genellikle 100.000 km ve üzeri.',
        symptoms: [
            'Hızlandıkça artan şiddetli uğultu sesi',
            'Tekerlekte boşluk',
            'Uğultunun virajlarda yön değiştirmesi',
        ],
    },
    {
        slug: 'alt-tabla-salincak',
        title: 'Alt Tabla ve Salıncak Değişimi',
        headerTitle: 'Salıncak (Tabla) ve Burç Değişimi',
        shortDescription: 'Tekerleği şasiye bağlayan ana taşıyıcı kolun değişimi.',
        image: '/services/alt-takim/salincak.png',
        longDescription: [
            'Salıncaklar, tekerleğin aşağı-yukarı hareket etmesine izin verirken ileri-geri oynamasını engeller.',
            'Salıncak burçları yırtıldığında araç yolda gezme yapar, frenlemede sağa-sola çeker.',
        ],
        failureReasons: [
            'Kauçuk burçların zamanla çatlaması',
            'Sert darbelerde metal kolun eğilmesi',
        ],
        replacementFrequency: '60.000 - 80.000 km.',
        symptoms: [
            'Frende veya gaza basınca direksiyonda boşluk hissi',
            'Lastiklerin içten veya dıştan aşınması',
            'Tokur tuşur sesler',
        ],
    },
    {
        slug: 'rotil-rot-basi',
        title: 'Rotil ve Rot Başı Değişimi',
        headerTitle: 'Rot Başı ve Rotil Değişimi',
        shortDescription: 'Direksiyon hareketini tekerleklere ileten mafsalların değişimi.',
        image: '/services/alt-takim/rot-basi.png',
        longDescription: [
            'Rot başı, direksiyon kutusundan gelen hareketi tekerleğe iletir. Boşluk yaparsa direksiyon hissizleşir.',
            'Rotil ise tekerleğin dingil (aks) taşıyıcısına tutunduğu noktadır. Kopması çok tehlikelidir, tekerlek yerinden çıkabilir.',
        ],
        failureReasons: [
            'Körüklerin yırtılıp toz/su alması',
            'Sürekli direksiyonu olduğu yerde çevirmek (Lastikler yere sürterken)',
        ],
        replacementFrequency: '40.000 - 50.000 km.',
        symptoms: [
            'Direksiyonda boşluk',
            'Yüksek hızda direksiyon titremesi',
            'Düz yolda aracın sağa-sola çekmesi',
        ],
    },
    {
        slug: 'amortisor-degisimi',
        title: 'Amortisör ve Helezon Yay Değişimi',
        headerTitle: 'Ön ve Arka Amortisör Değişimi',
        shortDescription: 'Yol tutuşu ve konforun temeli olan süspansiyon sisteminin yenilenmesi.',
        image: '/services/alt-takim/amortisor.png',
        longDescription: [
            'Amortisörler yayların salınımını sönümler. Patlak amortisörle araç yaylanır durmaz, virajda savrulur ve fren mesafesi uzar.',
            'Sadece konfor değil, sürüş güvenliği için en önemli parçalardan biridir.',
        ],
        failureReasons: [
            'Yağ keçesinin patlaması (Yağ kaçağı)',
            'Çukurlara sert girme',
            'Ağır yük taşıma',
        ],
        replacementFrequency: 'Her 80.000 - 100.000 km de bir çift olarak değişmesi önerilir.',
        symptoms: [
            'Aracın aşırı yaylanması (Tekne gibi)',
            'Virajlarda aşırı yatma',
            'Lastiklerin dalgalı aşınması',
            'Tümseklerden geçerken vurma sesi',
        ],
    },
    {
        slug: 'aks-koruk-degisimi',
        title: 'Aks ve Körük Değişimi',
        headerTitle: 'Aks Kafası ve Körük Değişimi',
        shortDescription: 'Motor gücünü tekerleğe ileten şaftın ve koruyucu körüklerinin değişimi.',
        image: '/services/alt-takim/akis-ve-koruk.png',
        longDescription: [
            'Aks kafaları, tekerlek dönerken ve amortisör çalışırken gücü kesintisiz iletmeyi sağlar.',
            'Aks körüğü yırtılırsa, içeri giren toz ve kum aks kafasını çok kısa sürede bozar.',
        ],
        failureReasons: [
            'Körük kelepçelerinin gevşemesi',
            'Körüğün yaşlanıp çatlaması',
            'Tam tur direksiyon çevirip sert kalkış yapma',
        ],
        replacementFrequency: 'Körükler her bakımda kontrol edilmeli, aks kafası ses yapınca değişmeli.',
        symptoms: [
            'Tam sağ veya tam sol dönüşlerde "küt küt" sesi',
            'Hızlanırken araçta titreme (İç aks arızası)',
            'Jantın iç kısmında gres yağı lekeleri',
        ],
    },
    {
        slug: 'direksiyon-kutusu',
        title: 'Direksiyon Kutusu Kontrolü',
        headerTitle: 'Direksiyon Kutusu Tamiri ve Revizyonu',
        shortDescription: 'Direksiyon boşluğu ve yağ kaçaklarının giderilmesi.',
        image: '/services/alt-takim/direksiyon-kutusu.png',
        longDescription: [
            'Direksiyon kutusu, direksiyon simidinin hareketini tekerleklere yönlendirir.',
            'Hidrolik veya elektrikli sistemlerde zamanla boşluk oluşur veya keçelerden yağ kaçırır.',
        ],
        failureReasons: [
            'Bozuk yollar',
            'Park ederken tekerleği kaldırıma yaslama',
            'Hidrolik sıvısının değişmemesi',
        ],
        replacementFrequency: 'Arıza durumunda revizyon yapılır.',
        symptoms: [
            'Direksiyonda aşırı boşluk',
            'Direksiyonu çevirirken takılma veya ses',
            'Alt kısımdan yağ damlaması (Kırmızı hidrolik)',
        ],
    },
];
