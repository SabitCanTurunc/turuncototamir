import { SubServiceDetail } from './elektronik-data'; // Reusing interface

export const SANZIMAN_DETAILS: SubServiceDetail[] = [
    {
        slug: 'debriyaj-seti-degisimi',
        title: 'Debriyaj Seti Değişimi (Baskı Balata)',
        headerTitle: 'Debriyaj Baskı Balata Seti Değişimi',
        shortDescription: 'Vites geçişlerini sağlayan ve motor gücünü şanzımana ileten sistemin yenilenmesi.',
        image: '/services/sanziman-tamiri/baski-balata.png',
        longDescription: [
            'Debriyaj balatası, motor ile şanzıman arasındaki güç aktarımını sağlayan sürtünme parçasıdır. Zamanla incelir ve biter.',
            'Biten balata "kaçırma" yapar, yani motor bağırır ama araba gitmez. Ayrıca volant yüzeyini yakarak masrafı katlayabilir.',
        ],
        failureReasons: [
            'Yarım debriyaj yapma alışkanlığı',
            'Yokuşta debriyajla aracı tutma',
            'Ani kalkışlar ve pati çekme',
            'Şehir içi yoğun trafik',
        ],
        replacementFrequency: 'Kullanıma göre değişmekle birlikte ortalama 80.000 - 120.000 km.',
        symptoms: [
            'Kavramanın çok yukarıda olması',
            'Yokuşta aracın çekmemesi ve motorun bağırması',
            'Vites geçişlerinde zorlanma',
            'Yanık balata kokusu',
        ],
    },
    {
        slug: 'volan-degisimi',
        title: 'Volan (Volant) Kontrolü ve Değişimi',
        headerTitle: 'Volan Dişlisi ve Oynar Göbek Volant Değişimi',
        shortDescription: 'Motorun titreşimini alan ve debriyajın bastığı yüzeyin tamiri.',
        image: '/services/sanziman-tamiri/volan.png',
        longDescription: [
            'Volan, marş motorunun ilk hareketi verdiği ve debriyaj balatasının tutunduğu büyük dişlidir. Yeni nesil araçlarda "Oynar Göbekli" (Çift Kütleli) volan kullanılır.',
            'Oynar göbekli volanlar konforu artırır ancak bozulduğunda çok ses yapar ve titreme yaratır.',
        ],
        failureReasons: [
            'Baskı balatanın zamanında değişmemesi',
            'Düşük devirde yüksek vitesle aracı zorlama',
            'Sert kalkışlar',
        ],
        replacementFrequency: 'Genellikle her iki debriyaj seti değişiminde bir (150.000 - 200.000 km) değişimi önerilir.',
        symptoms: [
            'Rölantide "tak tak" sesi (Debriyaja basınca kesilir)',
            'Stop ederken metalik vuruntu sesi',
            'Kalkışlarda aşırı titreme',
        ],
    },
    {
        slug: 'debriyaj-bilyasi-degisimi',
        title: 'Debriyaj Bilyası Değişimi',
        headerTitle: 'Debriyaj Rulmanı (Bilyası) Değişimi',
        shortDescription: 'Debriyaj pedalına bastığınızda baskıyı ayıran parçanın değişimi.',
        image: '/services/sanziman-tamiri/debriyaj-bilyasi.png',
        longDescription: [
            'Debriyaj bilyası, pedala bastığınızda dönen baskı yaylarına basarak motorla şanzımanı ayırır.',
            'Bu bilya bozulduğunda genellikle debriyaj seti ile birlikte komple değiştirilir çünkü işçiliği aynıdır.',
        ],
        failureReasons: [
            'Kırmızı ışıkta sürekli debriyaja basılı tutmak',
            'Sürekli ayak debriyajda gitmek',
        ],
        replacementFrequency: 'Baskı balata seti ile birlikte değişir.',
        symptoms: [
            'Debriyaja basınca gelen uğultu veya hışırtı sesi',
            'Pedalda titreşim',
        ],
    },
    {
        slug: 'debriyaj-merkezi-degisimi',
        title: 'Debriyaj Alt/Üst Merkez Değişimi',
        headerTitle: 'Hidrolik Debriyaj Merkezi Tamiri',
        shortDescription: 'Pedal gücünü şanzımana ileten hidrolik pistonların değişimi.',
        image: '/services/sanziman-tamiri/debriyaj-merkezi.png',
        longDescription: [
            'Eski telli sistemlerin yerini alan hidrolik merkezler, pedala basma kuvvetini yağ basıncıyla iletir.',
            'Merkez kaçırırsa debriyaj pedalı boşa düşer ve vites değiştiremezsiniz.',
        ],
        failureReasons: [
            'Hidrolik sıvısının kirlenmesi',
            'Basınç keçelerinin aşınması',
            'Kışın donma (Nadir)',
        ],
        replacementFrequency: 'Pedal boşaldığında veya yağ kaçağı görüldüğünde.',
        symptoms: [
            'Debriyaj pedalının tabana yapışması',
            'Pedalın yumuşaması ve geri gelmemesi',
            'Şanzıman altından yağ damlaması',
        ],
    },
    {
        slug: 'sanziman-disli-onarimi',
        title: 'Şanzıman Dişli Onarımı',
        headerTitle: 'Manuel Şanzıman Revizyonu ve Dişli Tamiri',
        shortDescription: 'Vites atma, ses yapma gibi sorunlarda şanzıman içinin açılıp onarılması.',
        image: '/services/sanziman-tamiri/sanziman-tamiri.png',
        longDescription: [
            'Şanzıman içindeki senkromeçler, grup dişlileri ve manşonlar zamanla aşınır.',
            'Vitesin "cırtlayarak" geçmesi veya vitesten atması (boşa düşmesi) mekanik bir arızadır ve şanzımanın indirilip dağıtılmasını gerektirir.',
        ],
        failureReasons: [
            'Yağsız kullanım',
            'Debriyaja tam basmadan vites değiştirme',
            'Yanlış vites seçimi (Yüksek hızda düşük vitese atma)',
        ],
        replacementFrequency: 'Arıza durumunda yapılır.',
        symptoms: [
            'Vites geçerken "cırt" sesi (Senkromeç)',
            'Seyir halindeyken vitesin boşa atması',
            'Belirli bir viteste (örn. 5. vites) uğultu',
        ],
    },
    {
        slug: 'otomatik-sanziman-beyni',
        title: 'Otomatik Şanzıman Beyni Kontrolü',
        headerTitle: 'Otomatik Şanzıman Beyni ve Selenoid Valf Testi',
        shortDescription: 'Otomatik vites geçişlerini yöneten elektronik ve hidrolik ünitenin bakımı.',
        image: '/services/sanziman-tamiri/otomatik-sanziman.png',
        longDescription: [
            'Otomatik şanzıman beyni (Mekatronik), vites değişim zamanını ve basıncını ayarlar.',
            'Beyin arızalarında araç vitese geçmez, "vuruntulu" geçer veya güvenli moda geçer.',
        ],
        failureReasons: [
            'Şanzıman yağının aşırı ısınması',
            'Elektriksel voltaj dalgalanmaları',
            'Selenoid valflerin tıkanması',
        ],
        replacementFrequency: 'Arıza durumunda.',
        symptoms: [
            'Ekranda "Şanzıman Arızası" uyarısı',
            'Vites geçişlerinde sert tekmeleme (Vuruntu)',
            'Geri vitese geçmeme',
            'Isınınca çekişten düşme',
        ],
    },
];
