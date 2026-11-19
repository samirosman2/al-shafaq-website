import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mediaConfig } from '../data/mediaConfig';
import { siteContent, t } from '../data/siteContent';
import PlaceholderImage from './PlaceholderImage';
import { SectionHeading } from './SectionPrimitives';

const advantageIcons = ['🏭', '📦', '📐', '👥', '⚙️', '🚛', '🌍'];
const previewAdvantages = ['adv1', 'adv3', 'adv5', 'adv6'] as const;

export default function ManufacturingSection({ preview = false }: { preview?: boolean }) {
  const { language } = useLanguage();

  if (preview) {
    return (
      <section className="section--white section-padding" aria-labelledby="manufacturing-preview-heading">
        <div className="container">
          <div className="two-col">
            <div className="about-image-wrap" data-animate>
              <div className="two-col__image"><PlaceholderImage asset={mediaConfig.facility[2]} /></div>
              <div className="two-col__accent" aria-hidden="true" />
            </div>
            <div data-animate data-delay="2">
              <p className="overline">{t(language, 'mfg_overline')}</p>
              <h2 className="section-heading" id="manufacturing-preview-heading">{t(language, 'mfg_heading')}</h2>
              <p className="body-text" style={{ marginTop: '1.25rem' }}>{t(language, 'mfg_body')}</p>
              <ul className="brand-bridge__list manufacturing-preview-list" role="list">
                {previewAdvantages.map((key) => <li key={key}>{t(language, key)}</li>)}
              </ul>
              <Link to="/manufacturing/" className="btn btn--primary">{language === 'ar' ? 'استكشف منشأتنا' : 'Explore Our Facility'}<span className="btn__arrow" aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section--white section-padding" aria-labelledby="facility-overview-heading">
        <div className="container">
          <div className="two-col">
            <div data-animate>
              <p className="overline">{t(language, 'facility_overview_label')}</p>
              <h2 className="section-heading" id="facility-overview-heading">{t(language, 'mfg_cap_heading')}</h2>
              <p className="body-lead" style={{ marginTop: '1.5rem' }}>{t(language, 'mfg_cap_body')}</p>
              <p className="body-text" style={{ marginTop: '1rem' }}>{language === 'ar'
                ? 'تضم منشأتنا التي تبلغ مساحتها 6,600 متر مربع مناطق مخصصة للإنتاج والتشغيل، فيما يدعم أكثر من 90 موظفًا أنشطة التصنيع اليومية. وبالاقتران مع سلسلة توريد مكثفة قائمة على الشاحنات، صُممت عملياتنا لدعم حركة المواد وتنسيق الإنتاج وتجهيز المنتجات النهائية.'
                : 'Our 6,600-square-metre facility accommodates dedicated production and operational areas, while our workforce of more than 90 employees supports daily manufacturing activities. Combined with an extensive truck-based supply chain, our operations are structured to support the movement of materials, coordination of production and preparation of finished products.'}</p>
            </div>
            <div className="about-image-wrap" data-animate data-delay="2">
              <div className="two-col__image"><PlaceholderImage asset={mediaConfig.facility[0]} /></div>
              <div className="two-col__accent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
      <section className="section--light section-padding" aria-labelledby="advantages-heading">
        <div className="container">
          <SectionHeading overline="strengths_label" heading="mfg_adv_heading" />
          <div className="advantages-grid" data-animate data-delay="2">
            {advantageIcons.map((icon, index) => (
              <div className="advantage-card" key={index}>
                <span className="advantage-card__icon" aria-hidden="true">{icon}</span>
                <span className="advantage-card__text">{t(language, siteContent.advantages[index])}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section--white section-padding" aria-labelledby="factory-sections-heading">
        <div className="container">
          <SectionHeading overline="mfg_overline" heading="factory_sections_heading" description="factory_sections_intro" centered />
          <div className="factory-grid" data-animate data-delay="2">
            {siteContent.factorySections.map((factory, index) => (
              <article className="factory-card" key={factory.title}>
                <div className="factory-card__image"><PlaceholderImage asset={mediaConfig.facility[index]} /></div>
                <div className="factory-card__body">
                  <p className="factory-card__num">{t(language, factory.number)}</p>
                  <h3 className="factory-card__title">{t(language, factory.title)}</h3>
                  <p className="factory-card__desc">{t(language, factory.description)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
