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

export const FREN_DETAILS: SubServiceDetail[] = [
    {
        slug: 'fren-balatasi-degisimi',
        title: 'Fren Balataları Değişimi',
        headerTitle: 'Fren Balatası Değişimi',
        shortDescription: 'Güvenli duruş mesafesi için aşınmış balataların orijinal kalite yenileriyle değişimi.',
        image: '/services/fren/fren-balatasi.png',
        longDescription: [
            'Fren balataları, fren diskine baskı uygulayarak aracı yavaşlatan ve durduran sürtünme elemanlarıdır.',
            'Her frene basıldığında mikron seviyesinde aşınırlar. Balata bittiğinde metal metale sürterek hem diski bozar hem de fren performansını sıfıra indirir.',
        ],
        failureReasons: [
            'Sürekli dur-kalk trafikte kullanım',
            'Agresif sürüş ve sert frenleme',
            'Aracın yüklü kullanılması',
            'Kalitesiz balata kullanımı',
        ],
        replacementFrequency: 'Şehir içi kullanımda ortalama 30.000 - 40.000 km, uzun yolda 50.000 - 60.000 km.',
        symptoms: [
            'Frende sürtünme ve "ciyaklama" sesi',
            'Fren pedalında titreme',
            'Gösterge panelinde fren ikaz ışığı',
            'Fren mesafesinin uzaması',
        ],
    },
    {
        slug: 'fren-diski-degisimi',
        title: 'Fren Diskleri Torna ve Değişimi',
        headerTitle: 'Fren Diski Değişimi ve Torna İşlemi',
        shortDescription: 'Eğilen veya incelen fren disklerinin bakımı ve değişimi.',
        image: '/services/fren/fren-diski.png',
        longDescription: [
            'Fren diskleri, tekerlekle birlikte dönen ve balataların sıkıştırmasıyla aracı durduran metal plakalardır.',
            'Sıcakken su birikintisine girilmesi disklerin eğilmesine (balans bozukluğuna) neden olur. Ayrıca incelen diskler çabuk ısınır ve tutmaz.',
        ],
        failureReasons: [
            'Ani ısı değişimleri (Sıcak diske su gelmesi)',
            'Biten balata ile kullanmaya devam etmek (Diski çizer)',
            'Zamanla incelmesi (Doğal aşınma)',
        ],
        replacementFrequency: 'Genellikle 2 balata değişiminde bir (60.000 - 80.000 km) kontrol edilir ve gerekirse değişir.',
        symptoms: [
            'Frene basınca direksiyonda titreme (Disk eğriliği)',
            'Fren pedalında vuruntu',
            'Yüksek hızda frenlemede uğultu sesi',
        ],
    },
    {
        slug: 'fren-hidroligi-degisimi',
        title: 'Fren Hidroliği Kontrolü ve Değişimi',
        headerTitle: 'Fren Hidrolik Yağı Bakımı',
        shortDescription: 'Fren basıncının iletilmesini sağlayan hayati sıvının nem kontrolü ve değişimi.',
        image: '/services/fren/fren-hidroligi.png',
        longDescription: [
            'Fren hidroliği, pedal gücünü kaliperlere iletir. Havadaki nemi emme özelliği (higroskopik) vardır.',
            'Su oranı artan hidrolik ısınıp kaynayabilir, bu da frenlerin tamamen boşalmasına neden olur. Güvenlik için en kritik sıvıdır.',
        ],
        failureReasons: [
            'Zamanla nem çekmesi (Kapak kapalı olsa bile)',
            'Kapak contalarının eskimesi',
            'Sistemde çok hafif kaçaklar',
        ],
        replacementFrequency: 'Her 2 yılda bir veya 40.000 km\'de bir mutlaka komple değiştirilmelidir.',
        symptoms: [
            'Frenin şişmesi veya boşalması',
            'Pedalın yumuşaması',
            'ABS sisteminin sık devreye girmesi',
        ],
    },
    {
        slug: 'el-freni-tamiri',
        title: 'El Freni (Park Freni) Ayarı ve Onarımı',
        headerTitle: 'El Freni Teli Değişimi ve Ayarı',
        shortDescription: 'Aracın park halindeyken sabit kalmasını sağlayan sistemin bakımı.',
        image: '/services/fren/el-freni.png',
        longDescription: [
            'El freni (veya elektronik park freni), aracı sabitlemek için arka frenleri mekanik veya elektrikli olarak kilitler.',
            'Halatların gevşemesi veya kopması, aracın yokuşta kaymasına neden olur.',
        ],
        failureReasons: [
            'El freni telinin uzaması veya paslanması',
            'Elektronik el freni motorunun bozulması',
            'Kaliper mekanizmasının sıkışması',
        ],
        replacementFrequency: 'Her bakımda tutma performansı kontrol edilir, gerekirse tel gerdirilir.',
        symptoms: [
            'El freni çekik olmasına rağmen aracın kayması',
            'El freni kolunun çok yukarıda tutması',
            'Elektronik fren arıza lambası',
        ],
    },
    {
        slug: 'abs-sensor-kontrolu',
        title: 'ABS Sensör ve Sistem Kontrolü',
        headerTitle: 'ABS Beyni ve Sensör Onarımı',
        shortDescription: 'Tekerleklerin kilitlenmesini önleyen güvenlik sisteminin diyagnostik kontrolü.',
        image: '/services/fren/abs-sensor.png',
        longDescription: [
            'ABS (Kilitlenmeyi Önleyici Sistem), ani frenlemede tekerleklerin kilitlenmesini engelleyerek direksiyon hakimiyetini korur.',
            'Tekerlek hız sensörleri çamur veya metal tozuyla kirlenebilir, kabloları kopabilir. Bu durumda ABS devre dışı kalır.',
        ],
        failureReasons: [
            'Sensörlerin kirlenmesi veya darbe alması',
            'Tekerlek porya bilyasının bozulması',
            'Kablo tesisatında kopukluk',
        ],
        replacementFrequency: 'Arıza lambası yandığında veya periyodik bakımlarda bilgisayarla kontrol edilir.',
        symptoms: [
            'Göstergede ABS arıza lambası',
            'Ani frenlemede tekerleklerin kızaklaması',
            'ASR/ESP sisteminin çalışmaması',
        ],
    },
    {
        slug: 'fren-kaliper-tamiri',
        title: 'Fren Kaliper Bakımı ve Tamiri',
        headerTitle: 'Fren Kaliper Piston ve Conta Değişimi',
        shortDescription: 'Balataları diske iten mekanizmanın temizliği ve tamir takımı değişimi.',
        image: '/services/fren/fren-kaliper.png',
        longDescription: [
            'Kaliperler, hidrolik basınçla pistonları iterek balataların diski sıkmasını sağlar. Pistonların çevresindeki toz körükleri zamanla yırtılabilir.',
            'Sıkışan bir kaliper, balatanın sürekli diske sürtmesine, aşırı ısınmaya ve yakıt tüketiminin artmasına neden olur.',
        ],
        failureReasons: [
            'Toz körüklerinin yırtılıp içeri su/çamur girmesi',
            'Pistonların paslanması',
            'Kızak pimlerinin yağsız kalması',
        ],
        replacementFrequency: 'Balata değişimlerinde kontrol edilir, sıkışma varsa tamir takımı ile yenilenir.',
        symptoms: [
            'Aracın bir tarafa çekmesi',
            'Jantın aşırı ısınması',
            'Balataların dengesiz aşınması',
            'Yakıt tüketiminin artması (Fren sıkması)',
        ],
    },
];
