import type { Language } from './siteContent';

export interface MediaAsset {
  src: string;
  alt: Record<Language, string>;
}

export const mediaConfig = {
  hero: {
    main: {
      src: '/images/hero/hero-main.jpg',
      alt: {
        en: 'Al Shafaq Gum Arabic manufacturing facility, Salalah Free Zone, Oman',
        ar: 'منشأة الشفق لتصنيع الصمغ العربي في المنطقة الحرة بصلالة، عُمان',
      },
    },
    aerial: {
      src: '/images/hero/hero-aerial.svg',
      alt: {
        en: 'Aerial view placeholder of the Al Shafaq manufacturing facility',
        ar: 'صورة جوية افتراضية لمنشأة الشفق التصنيعية',
      },
    },
    processing: {
      src: '/images/hero/hero-processing.svg',
      alt: {
        en: 'Gum Arabic processing placeholder at Al Shafaq',
        ar: 'صورة افتراضية لمعالجة الصمغ العربي في الشفق',
      },
    },
  },
  products: [
    { src: '/images/products/Spray-Dried_Gum_Arabic_Powder.jpg', alt: { en: 'Spray-dried Gum Arabic powder', ar: 'مسحوق الصمغ العربي المجفف بالرش' } },
    { src: '/images/products/Food-Grade_Gum_Arabic.jpg', alt: { en: 'Food-grade Gum Arabic', ar: 'صمغ عربي مخصص للاستخدام الغذائي' } },
    { src: '/images/products/Pharmaceutical-Grade_Gum_Arabic.jpg', alt: { en: 'Pharmaceutical-grade Gum Arabic', ar: 'صمغ عربي مخصص للاستخدام الصيدلاني' } },
    { src: '/images/products/Cosmetic-Grade_Gum_Arabic.jpg', alt: { en: 'Cosmetic-grade Gum Arabic', ar: 'صمغ عربي مخصص للاستخدام التجميلي' } },
    { src: '/images/products/Industrial-Grade_Gum_Arabic.jpg', alt: { en: 'Industrial-grade Gum Arabic', ar: 'صمغ عربي مخصص للاستخدام الصناعي' } },
    { src: '/images/products/Specialty.jpg', alt: { en: 'Specialty Gum Arabic solutions', ar: 'حلول متخصصة للصمغ العربي' } },
  ],
  facility: [
    { src: '/images/facility/01-industrial-infrastructure.jpg', alt: { en: 'Al Shafaq industrial infrastructure', ar: 'البنية التحتية الصناعية في الشفق' } },
    { src: '/images/facility/02-raw-material-handling.jpg', alt: { en: 'Raw material handling', ar: 'مناولة المواد الخام' } },
    { src: '/images/facility/03-advanced-processing.jpg', alt: { en: 'Advanced processing operations', ar: 'عمليات المعالجة المتقدمة' } },
    { src: '/images/facility/04-quality-control-laboratory.jpg', alt: { en: 'Quality control laboratory', ar: 'مختبر مراقبة الجودة' } },
    { src: '/images/facility/05-packaging-preparation.jpg', alt: { en: 'Packaging and preparation', ar: 'التعبئة والتحضير' } },
    { src: '/images/facility/06-warehousing-storage.jpg', alt: { en: 'Warehousing and storage', ar: 'التخزين والمستودعات' } },
    { src: '/images/facility/07-transportation-supply-chain.jpg', alt: { en: 'Transportation and supply chain', ar: 'النقل وسلسلة التوريد' } },
    { src: '/images/facility/08-our-people.jpg', alt: { en: 'Al Shafaq manufacturing team', ar: 'فريق التصنيع في الشفق' } },
  ],
  location: [
    { src: '/images/location/salalah-free-zone.jpg', alt: { en: 'Salalah Free Zone location', ar: 'موقع المنطقة الحرة بصلالة' } },
    { src: '/images/location/bousher-muscat.jpg', alt: { en: 'Bousher, Muscat location for United Arab Gum', ar: 'موقع الصمغ العربي المتحد في بوشر، مسقط' } },
    { src: '/images/location/oman-map.jpg', alt: { en: 'Map showing Oman', ar: 'خريطة توضح موقع عُمان' } },
  ],
} satisfies {
  hero: Record<string, MediaAsset>;
  products: MediaAsset[];
  facility: MediaAsset[];
  location: MediaAsset[];
};
