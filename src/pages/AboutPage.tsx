import AboutSection from '../components/AboutSection';
import StatsStrip from '../components/StatsStrip';
import { BrandBridge, CtaBanner, PageHero } from '../components/SectionPrimitives';
import { useLanguage } from '../context/LanguageContext';
import { mediaConfig } from '../data/mediaConfig';
import { t } from '../data/siteContent';
import PlaceholderImage from '../components/PlaceholderImage';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <main id="main-content">
      <PageHero pageKey="page_about" overlineKey="about_overline" headingKey="about_heading" descriptionKey="about_body1" />
      <AboutSection fullPage />
      <StatsStrip />
      <BrandBridge />
      <section className="section--white section-padding" aria-labelledby="people-heading">
        <div className="container">
          <div className="two-col">
            <div className="about-image-wrap" data-animate>
              <div className="two-col__image"><PlaceholderImage asset={mediaConfig.facility[7]} /></div>
            </div>
            <div data-animate data-delay="2">
              <p className="overline">{t(language, 'people_overline')}</p>
              <h2 className="section-heading" id="people-heading">{t(language, 'about_people_heading')}</h2>
              <p className="body-lead" style={{ marginTop: '1.5rem' }}>{t(language, 'about_people_body')}</p>
              <p className="body-text" style={{ marginTop: '1rem' }}>{language === 'ar'
                ? 'نؤمن بأن القدرة الصناعية تُبنى من خلال تكامل الأفراد والعمليات والبنية التحتية. يعمل فريقنا معًا لدعم التصنيع الفعّال والموثوقية التشغيلية والتطوير المستمر لقدراتنا الإنتاجية.'
                : 'We believe that industrial capability is built through the combination of people, processes and infrastructure. Our team works collectively to support efficient manufacturing, operational reliability and the continuous development of our production capabilities.'}</p>
            </div>
          </div>
        </div>
      </section>
      <CtaBanner overline="contact_overline" heading="contact_heading" description="contact_form_note" />
    </main>
  );
}
