# 🚀 SEO Yapılacaklar Listesi - Turunç Oto Tamir

Bu dosya, sitenizin SEO performansını maksimize etmek için yapmanız gereken adımları içerir.

---

## ✅ Yapılan İyileştirmeler

Aşağıdaki SEO iyileştirmeleri kod tarafında tamamlandı:

1. ✅ **Structured Data (Schema.org)** - LocalBusiness schema eklendi
2. ✅ **Dinamik robots.txt** - Next.js robots.ts ile otomatik oluşturuluyor
3. ✅ **Sitemap.xml** - Otomatik oluşturuluyor ve güncelleniyor
4. ✅ **OpenGraph & Twitter Cards** - Sosyal medya paylaşımları için hazır
5. ✅ **Metadata Optimizasyonu** - Title, description, keywords optimize edildi
6. ✅ **Canonical URL** - Duplicate content önleme
7. ✅ **Server Components** - StructuredData artık server component

---

## 🔴 KRİTİK: Hemen Yapılması Gerekenler

### 1. `.env.local` Dosyası Oluşturun

Proje kök dizininde (turuncototamir klasöründe) `.env.local` dosyası oluşturun ve aşağıdaki değerleri ekleyin:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Google Maps Koordinatları
NEXT_PUBLIC_LATITUDE=36.1234
NEXT_PUBLIC_LONGITUDE=36.5678

# Google Search Console Verification (Opsiyonel ama önerilir)
NEXT_PUBLIC_GOOGLE_VERIFICATION=

# Bing Webmaster Tools Verification (Opsiyonel)
NEXT_PUBLIC_BING_VERIFICATION=
```

**Önemli Notlar:**
- `NEXT_PUBLIC_SITE_URL`: Gerçek domain adresinizi yazın (örn: `https://turuncototamir.com`)
- `NEXT_PUBLIC_LATITUDE` ve `NEXT_PUBLIC_LONGITUDE`: İş yerinizin gerçek koordinatlarını Google Maps'ten alın
- Değişikliklerden sonra uygulamayı yeniden başlatın: `npm run dev`

---

### 2. OpenGraph Görseli Oluşturun

Sosyal medya paylaşımları için 1200x630px boyutunda bir görsel oluşturun:

**Gereksinimler:**
- Boyut: **1200x630 piksel**
- Format: JPG veya PNG
- İçerik: Şirket logosu, slogan ve görsel tasarım
- Dosya adı: `og-image.jpg`
- Konum: `public/og-image.jpg`

**Öneriler:**
- Canva, Figma veya Photoshop kullanabilirsiniz
- Görselde şirket adı, slogan ve iletişim bilgileri bulunmalı
- Renkler marka kimliğinize uygun olmalı

---

### 3. Google Maps Koordinatlarını Bulun

1. [Google Maps](https://www.google.com/maps) adresine gidin
2. İş yerinizin adresini arayın
3. İş yerinizin üzerine sağ tıklayın
4. Koordinatları kopyalayın (örnek: `36.1234, 36.5678`)
5. `.env.local` dosyasına ekleyin:
   - `NEXT_PUBLIC_LATITUDE=36.1234`
   - `NEXT_PUBLIC_LONGITUDE=36.5678`

---

## 🟡 YÜKSEK ÖNCELİK: 1 Hafta İçinde Yapılmalı

### 4. Google Search Console Kurulumu

1. [Google Search Console](https://search.google.com/search-console) adresine gidin
2. Sitenizi ekleyin
3. Doğrulama yöntemini seçin (HTML tag önerilir)
4. Verification code'u alın
5. `.env.local` dosyasına ekleyin:
   ```env
   NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
   ```
6. Sitemap'i gönderin: `https://yourdomain.com/sitemap.xml`

**Faydaları:**
- Google'da indexleme durumunu takip edebilirsiniz
- Arama performansını görebilirsiniz
- Hataları tespit edebilirsiniz

---

### 5. Google Business Profile (My Business) Kurulumu

1. [Google Business Profile](https://www.google.com/business/) adresine gidin
2. İşletmenizi ekleyin veya mevcut profili yönetin
3. Aşağıdaki bilgileri doğru şekilde doldurun:
   - İşletme adı: **Turunç Oto Tamir**
   - Adres: **Çekmece mh. 189. sok. No: 29/1, Defne, Hatay**
   - Telefon: **+90 539 247 01 43**
   - Çalışma saatleri: **Pazartesi-Cumartesi: 08:15-18:30**
   - Kategori: **Otomotiv Tamir Servisi**
   - Website: Sitenizin URL'i

**Faydaları:**
- Google Maps'te görünürlük
- Yerel aramalarda üst sıralarda çıkma
- Müşteri yorumları alma imkanı

---

### 6. Sosyal Medya Hesapları (Opsiyonel ama Önerilir)

Eğer Facebook, Instagram gibi sosyal medya hesaplarınız varsa:

1. `app/components/StructuredData.tsx` dosyasını açın
2. `sameAs` array'ine hesaplarınızı ekleyin:
   ```typescript
   schema.sameAs.push("https://www.facebook.com/turuncototamir");
   schema.sameAs.push("https://www.instagram.com/turuncototamir");
   ```

---

## 🟢 ORTA ÖNCELİK: 1 Ay İçinde Yapılabilir

### 7. İçerik Optimizasyonu

**Ana Sayfa:**
- H1 etiketinin tek olduğundan emin olun (✅ Zaten var)
- Alt text'lerin tüm görsellere eklendiğinden emin olun
- İçerikte lokasyon vurgusu yapın (Hatay, Defne)

**Hizmetler Sayfası:**
- Her hizmet için detaylı açıklamalar ekleyin
- Görseller için alt text ekleyin
- Hizmet başlıklarında anahtar kelimeler kullanın

---

### 8. Hız Optimizasyonu

**Kontrol Edin:**
- [PageSpeed Insights](https://pagespeed.web.dev/) ile sitenizi test edin
- Görsellerin optimize edildiğinden emin olun (Next.js Image component kullanılıyor ✅)
- Font loading optimize edilmiş (✅ Zaten yapılmış)

---

### 9. Mobil Uyumluluk Testi

1. [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) ile test edin
2. Farklı cihazlarda manuel test yapın
3. Touch-friendly butonların yeterince büyük olduğundan emin olun (✅ Zaten yapılmış)

---

## 📊 SEO Kontrol Listesi

### Teknik SEO ✅
- [x] Structured Data (Schema.org)
- [x] robots.txt
- [x] sitemap.xml
- [x] Canonical URL
- [x] Meta tags (title, description, keywords)
- [x] OpenGraph tags
- [x] Twitter Cards
- [ ] Google Search Console verification (SİZ YAPACAKSINIZ)
- [ ] og-image.jpg görseli (SİZ OLUŞTURACAKSINIZ)

### İçerik SEO ✅
- [x] H1 etiketi (tek)
- [x] Semantic HTML
- [x] Alt text'ler (çoğu yerde var)
- [x] Lokasyon vurgusu
- [x] Anahtar kelime optimizasyonu

### Local SEO ⚠️
- [x] Structured Data (LocalBusiness)
- [x] Adres bilgisi
- [x] Telefon numarası
- [ ] Google Business Profile (SİZ YAPACAKSINIZ)
- [ ] Gerçek koordinatlar (SİZ EKLEYECEKSINIZ)

---

## 🎯 Beklenen Sonuçlar

Bu iyileştirmeleri tamamladıktan sonra:

1. **2-4 Hafta İçinde:**
   - Google'da indexlenme başlar
   - Sitemap otomatik olarak Google'a gönderilir
   - Structured data doğrulanır

2. **1-3 Ay İçinde:**
   - Organik trafikte %30-50 artış
   - "Hatay oto tamir" gibi aramalarda görünürlük
   - Google Maps'te görünürlük (Google Business Profile ile)

3. **3-6 Ay İçinde:**
   - Yerel aramalarda üst sıralarda çıkma
   - Rich snippets (yıldızlı sonuçlar) görünmeye başlar
   - Sosyal medya paylaşımlarında profesyonel görünüm

---

## 🆘 Sorun Giderme

### Sitemap görünmüyor?
- `.env.local` dosyasında `NEXT_PUBLIC_SITE_URL` doğru mu kontrol edin
- `npm run build` yapıp `npm run start` ile production modda test edin
- `https://yourdomain.com/sitemap.xml` adresini tarayıcıda açın

### Structured Data hata veriyor?
- [Google Rich Results Test](https://search.google.com/test/rich-results) ile test edin
- Koordinatların doğru olduğundan emin olun
- `.env.local` dosyasındaki değerleri kontrol edin

### OpenGraph görseli görünmüyor?
- Görselin `public/og-image.jpg` konumunda olduğundan emin olun
- Görselin boyutunun 1200x630px olduğunu kontrol edin
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) ile test edin

---

## 📞 Destek

Herhangi bir sorunla karşılaşırsanız:
1. `.env.local` dosyasını kontrol edin
2. Uygulamayı yeniden başlatın (`npm run dev`)
3. Browser console'da hata olup olmadığını kontrol edin

---

**Son Güncelleme:** 2024  
**Hazırlayan:** SEO Optimizasyon Ekibi
