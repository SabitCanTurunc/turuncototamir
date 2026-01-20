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

export const MOTOR_MEKANIK_DETAILS: SubServiceDetail[] = [
  {
    slug: 'motor-revizyonu-rektifiye',
    title: 'Motor Revizyonu (Rektifiye)',
    headerTitle: 'Komple Motor Revizyonu ve Rektifiye',
    shortDescription: 'Motorunuzun performansını fabrika ayarlarına döndüren kapsamlı yenileme işlemi.',
    image: '/services/motor-mekanik/motor-revizyonu.png',
    longDescription: [
      'Motor revizyonu, aracınızın kalbi olan motorun tamamen sökülerek, aşınmış parçaların yenilenmesi ve gerekli talaşlı imalat işlemlerinin (rektifiye) yapılması sürecidir.',
      'Bu işlem, motorun ömrünü tamamlaması veya ağır hasar alması durumunda, yeni bir motor almaktan çok daha ekonomik ve garantili bir çözümdür. İşlem sırasında pistonlar, segmanlar, yataklar, contalar ve gerekirse silindir kapağı ve blok üzerinde detaylı çalışmalar yapılır.',
    ],
    failureReasons: [
      'Motor yağının zamanında değiştirilmemesi veya kalitesiz yağ kullanımı',
      'Motorun aşırı hararet yapması sonucu parça deformasyonları',
      'Yüksek kilometreye bağlı doğal metal yorgunluğu ve aşınma',
      'Zamanında yapılmayan triger veya zincir bakımları sonucu oluşan hasarlar',
    ],
    replacementFrequency: 'Belirli bir kilometresi yoktur. Motor performansı düştüğünde, yağ yakma başladığında veya motordan anormal sesler geldiğinde uzman kontrolü gereklidir. Genellikle 200.000 - 300.000 km üzeri araçlarda görülebilir.',
    symptoms: [
      'Egzozdan mavi veya siyah duman atma',
      'Aşırı yağ eksiltme ve sürekli yağ ekleme ihtiyacı',
      'Motor çekişinde belirgin düşüş ve yakıt tüketiminde artış',
      'Motordan gelen vuruntu sesleri (yatak sesi)',
      'Motorun zor çalışması veya düzensiz rölanti',
    ],
  },
  {
    slug: 'silindir-kapak-contasi-degisimi',
    title: 'Silindir Kapak Contası Değişimi',
    headerTitle: 'Silindir Kapak Contası Değişimi',
    shortDescription: 'Motor bloğu ile üst kapak arasındaki sızdırmazlığı sağlayan hayati parçanın değişimi.',
    image: '/services/motor-mekanik/silindir-kapak-contasi.png',
    longDescription: [
      'Silindir kapak contası, motor bloğu ile silindir kapağı arasında yer alan, yanma odasındaki basıncı tutan ve yağ/su kanallarının birbirine karışmasını engelleyen kritik bir parçadır.',
      'Contanın yanması veya deforme olması, motorun ciddi hasar görmesine yol açabilir. Bu işlem sadece conta değişimini değil, silindir kapak yüzeyinin kontrolünü ve gerekirse taşlanmasını da kapsar.',
    ],
    failureReasons: [
      'Motorun susuz kalması veya fan açmaması sonucu aşırı hararet',
      'Antifriz kullanılmaması nedeniyle oluşan korozyon ve çürüme',
      'Termostat veya devirdaim arızaları',
      'Yanlış montaj veya tork değerlerine uyulmaması',
    ],
    replacementFrequency: 'Periyodik bir değişimi yoktur. Genellikle hararet sonrası veya conta özelliğini yitirdiğinde değiştirilir.',
    symptoms: [
      'Motor suyunda yağ veya motorda su karışımı (Tahin kıvamı)',
      'Su eksiltme ve hararet göstergesinin yükselmesi',
      'Egzozdan yoğun beyaz duman atılması',
      'Soğutma suyu hortumlarında aşırı şişme (basınç)',
      'Motorun teklemesi ve güç kaybı',
    ],
  },
  {
    slug: 'triger-seti-degisimi',
    title: 'Triger Seti Değişimi',
    headerTitle: 'Triger Kayışı ve Zincir Seti Değişimi',
    shortDescription: 'Motor zamanlamasını sağlayan ve kopması durumunda ağır hasara yol açan sistemin yenilenmesi.',
    image: '/services/motor-mekanik/triger-seti.png',
    longDescription: [
      'Triger sistemi (kayış veya zincir), krank mili ile eksantrik mili arasındaki senkronizasyonu sağlar. Bu senkronizasyon, subapların doğru zamanda açılıp kapanması için hayati önem taşır.',
      'Triger kayışının kopması veya zincirin uzaması/kopması, pistonların subaplara çarpmasına neden olarak motorda çok ağır ve masraflı hasarlara yol açar.',
    ],
    failureReasons: [
      'Zamanında değişim yapılmaması (Ömür dolması)',
      'Malzeme yorgunluğu ve kauçuk sertleşmesi (Kayışlar için)',
      'Gergi bilyası veya devirdaim pompasının kilitlenmesi',
      'Yağ kaçaklarının kayış üzerine damlayarak yapısını bozması',
    ],
    replacementFrequency: 'Marka ve modele göre değişmekle birlikte genellikle 60.000 km - 100.000 km arasında veya 4-5 yılda bir (hangisi önce dolarsa) değiştirilmelidir. Zincirli motorlarda bu süre daha uzundur.',
    symptoms: [
      'Motordan gelen tıkırtı veya sürtünme sesleri',
      'Motorun düzensiz çalışması veya geç çalışması',
      'Bazı durumlarda hiçbir belirti vermeden aniden kopabilir (Bu yüzden periyodik değişim şarttır)',
    ],
  },
  {
    slug: 'v-kayisi-bilye-degisimi',
    title: 'V Kayışı ve Bilye Değişimi',
    headerTitle: 'V Kayışı (Alternatör Kayışı) Değişimi',
    shortDescription: 'Şarj dinamosu, klima kompresörü ve direksiyon pompasını çalıştıran kayışın bakımı.',
    image: '/services/motor-mekanik/v-kayisi.png',
    longDescription: [
      'V kayışı (veya kanal kayışı), motor gücünü yardımcı elemanlara (alternatör, klima, direksiyon pompası) ileten parçadır.',
      'Bu kayışın kopması durumunda akü şarj olmaz, direksiyon sertleşir ve klima çalışmaz. Bazı araçlarda devirdaim pompası da bu kayışa bağlı olduğu için hararet riski doğabilir.',
    ],
    failureReasons: [
      'Zamanla kauçuk malzemenin sertleşmesi ve çatlaması',
      'Gergi bilyasının bozulması ve kayışı sıyırması',
      'Kayış kasnaklarındaki hizasızlık veya taş girmesi',
    ],
    replacementFrequency: 'Genellikle her 60.000 km bakımında veya 4 yılda bir kontrol edilip değiştirilmesi önerilir.',
    symptoms: [
      'Motor çalışırken (özellikle soğukken) gelen "ciyaklama" sesi',
      'Kayış üzerinde gözle görülür çatlaklar ve saçaklanmalar',
      'Direksiyonda sertleşme veya akü lambasının yanması',
    ],
  },
  {
    slug: 'devirdaim-pompasi-degisimi',
    title: 'Devirdaim (Su Pompası) Değişimi',
    headerTitle: 'Devirdaim Su Pompası Değişimi',
    shortDescription: 'Motor soğutma sıvısının dolaşımını sağlayan pompanın yenilenmesi.',
    image: '/services/motor-mekanik/devirdaim-pompasi.png',
    longDescription: [
      'Devirdaim pompası, soğutma sıvısını motor bloğu ve radyatör arasında sürekli dolaştırarak motorun ideal çalışma sıcaklığında kalmasını sağlar.',
      'Arızalanması durumunda soğutma sıvısı dolaşamaz ve motor çok kısa sürede hararet yapar. Genellikle triger seti ile birlikte değişimi işçilik avantajı sağlar.',
    ],
    failureReasons: [
      'Antifrizsiz kullanım sonucu korozyon ve kanatçıkların erimesi',
      'Pompa keçesinin (salmastra) bozulması ve su kaçırması',
      'Bilye dağılması ve kilitlenme',
    ],
    replacementFrequency: 'Genellikle triger seti değişim periyotlarında (60.000 - 90.000 km) set olarak değiştirilmesi en sağlıklı yöntemdir.',
    symptoms: [
      'Motordan gelen uğultu sesi',
      'Aracın ön kısmından su damlaması (su kaçağı)',
      'Motorun hararet yapması',
    ],
  },
  {
    slug: 'turbo-tamiri-bakimi',
    title: 'Turbo Tamiri ve Bakımı',
    headerTitle: 'Turbo Revizyonu ve Bakımı',
    shortDescription: 'Motor gücünü artıran turboşarj sisteminin onarımı ve temizliği.',
    image: '/services/motor-mekanik/turbo-tamiri.png',
    longDescription: [
      'Turbo, egzoz gazı basıncını kullanarak motora daha fazla taze hava girmesini sağlar, böylece performans artarken yakıt verimliliği sağlanır.',
      'Yüksek devirlerde çalışan hassas bir parçadır. Bakımsız kalması veya yağlama sorunları turbonun mil kesmesine veya kanatçıklarının bozulmasına neden olur.',
    ],
    failureReasons: [
      'Kirli hava filtresi veya hava kaçakları',
      'Kalitesiz motor yağı veya yetersiz yağlama',
      'Motoru rölantide soğutmadan (stop etmeden önce) hemen kapatmak',
      'DPF veya katalitik konvertör tıkanıklığı',
    ],
    replacementFrequency: 'Düzenli yağ bakımı yapılan araçlarda motor ömrü kadar dayanabilir. Ancak 150.000 km sonrası revizyon ihtiyacı doğabilir.',
    symptoms: [
      'Gaza basınca gelen "ıslık" sesi',
      'Çekiş düşüklüğü ve aracın gitmemesi',
      'Egzozdan siyah veya gri duman atma',
      'Turbo borularında aşırı yağlanma',
    ],
  },
  {
    slug: 'subap-ayari-degisimi',
    title: 'Subap Ayarı ve Değişimi',
    headerTitle: 'Subap Ayarı ve Değişimi',
    shortDescription: 'Motorun nefes alıp vermesini sağlayan subapların ayarlanması veya değişimi.',
    image: '/services/motor-mekanik/subap-ayari.png',
    longDescription: [
      'Subaplar, yanma odasına hava-yakıt karışımını alan ve yanmış gazları tahliye eden kapakçıklardır. LPG\'li araçlarda subap erimesi veya uzaması sık görülür.',
      'Subap ayarının bozuk olması veya subapların kaçırması, motorun verimsiz çalışmasına ve yakıt tüketiminin artmasına neden olur.',
    ],
    failureReasons: [
      'LPG kullanımı (Yüksek yanma sıcaklığı)',
      'Zamanla oluşan doğal aşınma ve oturma',
      'Yanlış yapılan önceki ayarlar',
    ],
    replacementFrequency: 'Mekanik iticili araçlarda 20.000 - 40.000 km, hidrolik iticili araçlarda arıza durumunda müdahale edilir.',
    symptoms: [
      'Motorun rölantide titremesi ve stop etmesi',
      'Sabahları zor çalışma',
      'Yakıt tüketiminde artış',
      'Motor sesinin "şıkırtılı" gelmesi',
    ],
  },
  {
    slug: 'piston-segman-degisimi',
    title: 'Piston ve Segman Değişimi',
    headerTitle: 'Piston ve Segman Değişimi',
    shortDescription: 'Kompresyon kaçaklarını ve yağ yakmayı önleyen ana parçaların değişimi.',
    image: '/services/motor-mekanik/piston-segman.png',
    longDescription: [
      'Piston ve segmanlar, yanma basıncını krank miline iletir ve yağın yanma odasına girmesini engeller.',
      'Segmanların aşınması veya pistonun hasar görmesi, motorun "üfleme" yapmasına ve güçten düşmesine neden olur.',
    ],
    failureReasons: [
      'Yetersiz yağlama veya yağsız kalma',
      'Aşırı hararet',
      'Yüksek kilometre',
      'Kalitesiz yakıt kullanımı',
    ],
    replacementFrequency: 'Motor revizyonu kapsamında yapılır. Genellikle 200.000 km üzerindeki araçlarda gerekebilir.',
    symptoms: [
      'Yağ çubuğundan veya yağ kapağından duman gelmesi (Üfleme)',
      'Mavi duman atma',
      'Motor yağının çabuk eksilmesi',
      'Düşük kompresyon testi sonuçları',
    ],
  },
  {
    slug: 'yag-pompasi-kontrolu',
    title: 'Yağ Pompası Kontrolü',
    headerTitle: 'Yağ Pompası Değişimi ve Kontrolü',
    shortDescription: 'Motorun yağlanmasını sağlayan en kritik parçanın kontrolü.',
    image: '/services/motor-mekanik/yag-pompasi.png',
    longDescription: [
      'Yağ pompası, karterdeki yağı emerek motorun tüm hareketli parçalarına (yataklar, pistonlar, eksantrik vb.) basınçlı şekilde iletir.',
      'Yağ pompasının görevini yapmaması, saniyeler içinde motorun "yatak sarmasına" ve kullanılamaz hale gelmesine neden olur.',
    ],
    failureReasons: [
      'Kirli yağ ve tortu birikimi (Sludge)',
      'Yağ filtresinin tıkanması',
      'Pompa dişlilerinin aşınması veya kırılması',
    ],
    replacementFrequency: 'Ağır bakımlarda veya motor revizyonlarında mutlaka değiştirilmesi önerilir.',
    symptoms: [
      'Yağ basınç ikaz lambasının yanması (Kırmızı çaydanlık)',
      'Motor ısınınca gelen fincan sesi veya tıkırtı',
      'Yağ basınç saatinde düşüklük',
    ],
  },
  {
    slug: 'radyator-sogutma-sistemi',
    title: 'Radyatör ve Soğutma Sistemi Temizliği',
    headerTitle: 'Radyatör ve Soğutma Sistemi Bakımı',
    shortDescription: 'Hararet sorunlarını önlemek için soğutma peteklerinin ve kanallarının temizliği.',
    image: '/services/motor-mekanik/radyator-sogutma.png',
    longDescription: [
      'Radyatör, motordan gelen sıcak suyu hava akımıyla soğutur. Zamanla kireç, pas veya dış etkenler (böcek, toz) nedeniyle tıkanabilir.',
      'Sistemin temizlenmesi ve sıvının yenilenmesi, motorun sağlıklı sıcaklıkta çalışmasını garanti eder.',
    ],
    failureReasons: [
      'Çeşme suyu kullanımı (Kireçlenme)',
      'Düzenli antifriz değişimi yapılmaması',
      'Radyatör peteklerinin dışarıdan darbe alması veya tıkanması',
    ],
    replacementFrequency: 'Yılda bir kez sistem kontrolü, 2 yılda bir antifriz değişimi önerilir.',
    symptoms: [
      'Sık sık fan açma',
      'Hararetin çabuk yükselmesi',
      'Kaloriferin ısıtmaması (Peteğin tıkalı olması)',
      'Radyatör üzerinde soğuk bölgeler olması',
    ],
  },
  {
    slug: 'dpf-temizligi',
    title: 'DPF (Dizel Partikül Filtresi) Temizliği',
    headerTitle: 'DPF Temizliği ve Rejenerasyonu',
    shortDescription: 'Egzoz emisyon sisteminin temizlenmesi ve tıkanıklıkların giderilmesi.',
    image: '/services/motor-mekanik/dpf-temizligi.png',
    longDescription: [
      'DPF, dizel motorlardan çıkan zararlı kurum partiküllerini tutar. Şehir içi kısa mesafe kullanımda bu filtre dolar ve tıkanır.',
      'Tıkalı DPF, egzoz gazı çıkışını engellediği için performansı düşürür ve turboya zarar verebilir.',
    ],
    failureReasons: [
      'Sürekli düşük devirde şehir içi kullanım',
      'Kalitesiz yakıt',
      'Sensör arızaları',
    ],
    replacementFrequency: 'Uyarı ışığı yandığında veya 40.000 - 50.000 km periyotlarında temizlenmesi önerilir.',
    symptoms: [
      'Göstergede DPF veya yay işareti ikazı',
      'Motorun koruma moduna geçmesi (Hızlanmama)',
      'Yakıt tüketiminde artış',
    ],
  },
  {
    slug: 'enjektor-bakim-revizyon',
    title: 'Enjektör Bakım ve Revizyonu',
    headerTitle: 'Dizel ve Benzinli Enjektör Tamiri',
    shortDescription: 'Yakıtı silindirlere püskürten enjektörlerin ayarı ve temizliği.',
    image: '/services/motor-mekanik/enjektor-bakimi.png',
    longDescription: [
      'Enjektörler, yakıtı mikronize ederek yanma odasına püskürtür. Hassas parçalardır ve yakıt kalitesinden doğrudan etkilenirler.',
      'İşeme yapan veya tıkalı enjektörler piston erimesine kadar giden hasarlara yol açabilir.',
    ],
    failureReasons: [
      'Kirli veya sulu yakıt',
      'Yakıt filtresinin zamanında değişmemesi',
      'Yüksek kilometre aşınması',
    ],
    replacementFrequency: 'Her 100.000 km de bir kontrol ve ayar, gerektiğinde revizyon önerilir.',
    symptoms: [
      'Siyah duman (Zengin karışım)',
      'Motorun sarsıntılı çalışması',
      'Geç çalışma',
      'Yüksek yakıt tüketimi',
    ],
  },
];
