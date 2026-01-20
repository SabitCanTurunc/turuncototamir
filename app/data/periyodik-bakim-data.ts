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

export const PERIYODIK_BAKIM_DETAILS: SubServiceDetail[] = [
    {
        slug: 'motor-yagi-degisimi',
        title: 'Motor Yağı Değişimi',
        headerTitle: 'Motor Yağı ve Yağ Filtresi Değişimi',
        shortDescription: 'Motorun sürtünmeyi azaltarak rahat çalışmasını sağlayan en temel bakım işlemi.',
        image: '/services/periyodik-bakim/motor-yagi.png',
        longDescription: [
            'Motor yağı, motorun hareketli parçaları arasında kayganlaştırıcı bir film tabakası oluşturarak sürtünmeyi ve aşınmayı önler.',
            'Zamanla özelliğini kaybeden yağ, motorun daha gürültülü çalışmasına, aşırı ısınmasına ve tortu birikimine neden olur. Düzenli değişim motor ömrünü uzatan en önemli faktördür.',
        ],
        failureReasons: [
            'Değişim periyodunun aksatılması',
            'Araca uygun olmayan viskozitede yağ kullanımı',
            'Motorun aşırı zorlanması ve yüksek ısıya maruz kalması',
            'Kalitesiz veya sahte yağ kullanımı',
        ],
        replacementFrequency: 'Her 10.000 - 15.000 km\'de bir veya yılda bir kez (Hangisi önce dolarsa).',
        symptoms: [
            'Motorun gürültülü çalışması',
            'Yağ lambasının geç sönmesi',
            'Motor performansında düşüklük',
            'Yakıt tüketiminde artış',
        ],
    },
    {
        slug: 'yag-filtresi-degisimi',
        title: 'Yağ Filtresi Değişimi',
        headerTitle: 'Yağ Filtresi Değişimi',
        shortDescription: 'Motor yağını partikül ve tortulardan arındıran filtrenin yenilenmesi.',
        image: '/services/periyodik-bakim/yag-filtresi.png',
        longDescription: [
            'Yağ filtresi, motor yağı içinde biriken metal çapaklarını, kurum ve tortuları süzerek motora temiz yağ gitmesini sağlar.',
            'Tıkanmış bir yağ filtresi, bypass valfini açarak kirli yağın motora gitmesine neden olur veya yağ basıncını düşürerek motor hasarına yol açar.',
        ],
        failureReasons: [
            'Yağ değişimi sırasında filtrenin değiştirilmemesi',
            'Kalitesiz yan sanayi filtre kullanımı',
            'Filtre contasının yanlış montajı',
        ],
        replacementFrequency: 'Her motor yağı değişiminde (10.000 - 15.000 km) mutlaka değiştirilmelidir.',
        symptoms: [
            'Düşük yağ basıncı',
            'Kritik durumlarda motor yatak sarması',
            'Kirli yağın çabuk kararması',
        ],
    },
    {
        slug: 'hava-filtresi-degisimi',
        title: 'Hava Filtresi Değişimi',
        headerTitle: 'Motor Hava Filtresi Değişimi',
        shortDescription: 'Motora giren havayı toz ve kirden arındırarak yanma verimini korur.',
        image: '/services/periyodik-bakim/hava-filtresi.png',
        longDescription: [
            'Hava filtresi, motorun "akciğeridir". Yanma odasına giren havayı süzerek toz, kum ve diğer partiküllerin piston ve silindirlere zarar vermesini engeller.',
            'Kirli hava filtresi, motora giren hava miktarını kısıtlar. Bu da yakıtın tam yanmamasına, performans düşüklüğüne ve yakıt tüketiminin artmasına neden olur.',
        ],
        failureReasons: [
            'Tozlu yollarda sık kullanım',
            'Uzun süre değişim yapılmaması',
            'Filtrenin nemlenmesi veya ıslanması',
        ],
        replacementFrequency: 'Her bakımda (10.000 - 15.000 km) kontrol edilir, kirlilik durumuna göre değiştirilir.',
        symptoms: [
            'Yakıt tüketiminde belirgin artış',
            'Çekiş düşüklüğü ve hızlanma sorunları',
            'Egzozdan siyah duman atma',
        ],
    },
    {
        slug: 'polen-filtresi-degisimi',
        title: 'Polen Filtresi Değişimi',
        headerTitle: 'Kabin (Polen) Filtresi Değişimi',
        shortDescription: 'Araç içine giren havayı süzerek sağlıklı ve temiz bir sürüş ortamı sağlar.',
        image: '/services/periyodik-bakim/polen-filtresi.png',
        longDescription: [
            'Polen filtresi, klima ve havalandırma sisteminden gelen havayı toz, polen, egzoz gazı ve kötü kokulardan arındırır.',
            'Özellikle alerjisi olan sürücüler ve çocuklar için hayati önem taşır. Karbonlu modelleri kötü kokuları da etkin şekilde engeller.',
        ],
        failureReasons: [
            'Şehir içi yoğun trafik kullanımı',
            'Ağaçlık veya tozlu bölgelerde park etme',
            'Mevsim geçişlerindeki nem ve polen yoğunluğu',
        ],
        replacementFrequency: 'Her bakımda (10.000 - 15.000 km) veya kötü koku oluştuğunda değiştirilmelidir.',
        symptoms: [
            'Klimadan gelen kötü koku (Rutubet kokusu)',
            'Camların çabuk buğulanması',
            'Havalandırma üfleme gücünün zayıflaması',
            'Alerjik reaksiyonlar (Hapşırma vb.)',
        ],
    },
    {
        slug: 'yakit-filtresi-degisimi',
        title: 'Yakıt Filtresi Değişimi',
        headerTitle: 'Dizel ve Benzin Yakıt Filtresi Değişimi',
        shortDescription: 'Yakıt sistemini koruyan, enjektör ve pompa arızalarını önleyen filtre değişimi.',
        image: '/services/periyodik-bakim/yakit-filtresi.png',
        longDescription: [
            'Yakıt filtresi, depodan gelen yakıtı süzerek içindeki tortu, pas ve (dizel araçlarda) suyu ayrıştırır.',
            'Özellikle dizel araçlarda enjektör ve yüksek basınç pompası çok hassastır. Yakıt filtresinin tıkanması veya suyu geçirmesi binlerce liralık hasara yol açabilir.',
        ],
        failureReasons: [
            'Kalitesiz veya kirli yakıt alımı',
            'Filtrenin zamanında değiştirilmemesi',
            'Depoda oluşan korozyon veya su birikmesi',
        ],
        replacementFrequency: 'Dizel araçlarda her 2 bakımda bir (20.000 - 30.000 km), benzinli araçlarda 40.000 - 60.000 km de bir önerilir. (Markaya göre değişir)',
        symptoms: [
            'Motorun zor çalışması veya çalışmaması',
            'Yüksek hızlarda tekleme ve güç kesilmesi',
            'Gösterge panelinde arıza lambası',
            'Rölantide dalgalanma',
        ],
    },
    {
        slug: 'sanziman-yagi-degisimi',
        title: 'Şanzıman Yağı Kontrolü ve Değişimi',
        headerTitle: 'Otomatik ve Manuel Şanzıman Yağı Bakımı',
        shortDescription: 'Vites geçişlerini yumuşatan ve şanzıman ömrünü uzatan yağ değişimi.',
        image: '/services/periyodik-bakim/sanziman-yagi.png',
        longDescription: [
            'Şanzıman yağı, dişliler arasındaki sürtünmeyi önler ve (otomatik şanzımanlarda) hidrolik basınçla vites geçişlerini sağlar.',
            'Ömürlük yağ diye bir kavram yanlıştır. Zamanla bozulan yağ, şanzımanın vuruntulu çalışmasına ve dişlilerin aşınmasına neden olur.',
        ],
        failureReasons: [
            'Yağın özelliğini yitirmesi ve yanması',
            'Keçe kaçakları nedeniyle yağ seviyesinin düşmesi',
            'Agresif araç kullanımı',
        ],
        replacementFrequency: 'Otomatik şanzımanlarda 60.000 - 80.000 km, manuel şanzımanlarda 80.000 - 100.000 km aralığında değiştirilmelidir.',
        symptoms: [
            'Vites geçişlerinde vuruntu veya sarsıntı',
            'Vitesin geçmemesi veya zor geçmesi',
            'Şanzımandan gelen uğultu sesi',
            'Yokuşlarda aracın geri kaçırması (Otomatik)',
        ],
    },
    {
        slug: 'fren-hidroligi-kontrolu',
        title: 'Fren Hidroliği Kontrolü',
        headerTitle: 'Fren Hidrolik Yağı Değişimi ve Testi',
        shortDescription: 'Fren sisteminin basıncını ileten hidrolik sıvısının nem oranının ölçümü ve değişimi.',
        image: '/services/periyodik-bakim/fren-hidroligi.png',
        longDescription: [
            'Fren hidroliği higroskopiktir, yani havadaki nemi bünyesine çeker. Su oranı artan hidroliğin kaynama noktası düşer.',
            'Uzun süreli frenlemede (örneğin yokuş aşağı inerken) hidrolik kaynayarak frenlerin boşalmasına neden olabilir. Bu hayati bir güvenlik riskidir.',
        ],
        failureReasons: [
            'Zamanla nem emmesi (Doğal süreç)',
            'Sistemde hava olması',
            'Kapak contalarının bozulması',
        ],
        replacementFrequency: 'Her 2 yılda bir veya 40.000 km de bir mutlaka değiştirilmelidir.',
        symptoms: [
            'Fren pedalının yumuşaması veya süngerimsi his',
            'Fren mesafesinin uzaması',
            'Frenlerin çabuk ısınması ve tutmaması',
            'Hidrolik renginin koyulaşması',
        ],
    },
    {
        slug: 'antifriz-degisimi',
        title: 'Antifriz Ölçümü ve Değişimi',
        headerTitle: 'Motor Soğutma Suyu ve Antifriz Bakımı',
        shortDescription: 'Motoru donmaya ve korozyona karşı koruyan sıvının kontrolü.',
        image: '/services/periyodik-bakim/antifriz.png',
        longDescription: [
            'Antifriz sadece kışın donmayı önlemekle kalmaz, yazın harareti geciktirir ve tüm yıl boyunca soğutma sistemini pas ve kirece karşı korur.',
            'Özelliğini yitiren antifriz, motor bloğunda ve silindir kapağında çürümeye, termostat ve devirdaim arızalarına yol açar.',
        ],
        failureReasons: [
            'Sadece su eklenerek derecesinin düşürülmesi',
            'Farklı renk/özellik antifrizlerin karıştırılması',
            'Uzun süre değiştirilmemesi (Asidikleşme)',
        ],
        replacementFrequency: 'Her bakımda derecesi ölçülmeli, rengi bozulduysa veya 2-3 yılda bir değiştirilmelidir.',
        symptoms: [
            'Motor suyunun paslı renge dönmesi',
            'Hararet sorunları',
            'Radyatör veya hortum kaçakları',
            'Kışın motor bloğunun çatlaması (Donma)',
        ],
    },
    {
        slug: 'genel-check-up',
        title: 'Genel Check-Up',
        headerTitle: 'Kapsamlı Araç Check-Up ve Kontrol',
        shortDescription: 'Lastiklerden sileceklerere, aküden aydınlatmaya kadar detaylı araç kontrolü.',
        image: '/services/periyodik-bakim/check-up.png',
        longDescription: [
            'Periyodik bakım sadece yağ değişiminden ibaret değildir. Aracın güvenli sürüşe engel olabilecek tüm noktaları uzman gözüyle kontrol edilir.',
            'Lastik diş derinlikleri, fren balata kalınlıkları, sileceklerin silme performansı, tüm aydınlatma sistemi ve akü voltaj değerleri raporlanır.',
        ],
        failureReasons: [
            'Kullanıma bağlı doğal aşınmalar',
            'Mevsimsel etkiler (Silecek lastiklerinin kuruması vb.)',
            'Yol koşulları (Rot ayarı bozulması)',
        ],
        replacementFrequency: 'Her periyodik bakımda (10.000 - 15.000 km) standart olarak uygulanır.',
        symptoms: [
            'Sileceklerin iz bırakması',
            'Sabahları zor çalışma (Zayıf Akü)',
            'Aydınlatma ampullerinin patlaması',
            'Direksiyonda titreme veya çekme',
        ],
    },
];
