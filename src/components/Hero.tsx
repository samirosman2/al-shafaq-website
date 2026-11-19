import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mediaConfig } from '../data/mediaConfig';
import { t } from '../data/siteContent';
import PlaceholderImage from './PlaceholderImage';
import { RichText } from './SectionPrimitives';

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="hero loaded" aria-label={t(language, 'hero_heading')}>
      <div className="hero__bg">
        <PlaceholderImage asset={mediaConfig.hero.main} className="hero__bg-img" loading="eager" />
        <div className="hero__bg-gradient" aria-hidden="true" />
        <div className="hero__bg-pattern" aria-hidden="true" />
      </div>
      <div className="hero__content container">
        <div className="hero__inner">
          <p className="overline hero__overline">{t(language, 'hero_overline')}</p>
          <h1 className="hero__heading"><RichText>{t(language, 'hero_heading')}</RichText></h1>
          <p className="hero__subheading">{t(language, 'hero_sub')}</p>
          <div className="hero__metrics" role="list" aria-label={language === 'ar' ? 'مؤشرات المنشأة الرئيسية' : 'Key facility metrics'}>
            <div className="hero__metric" role="listitem">
              <span className="hero__metric-value">{t(language, 'hero_metric1_val')}</span>
              <span className="hero__metric-label">{t(language, 'hero_metric1_lbl')}</span>
            </div>
            <div className="hero__metric" role="listitem">
              <span className="hero__metric-value">{t(language, 'hero_metric2_val')}</span>
              <span className="hero__metric-label">{t(language, 'hero_metric2_lbl')}</span>
            </div>
            <div className="hero__metric" role="listitem">
              <span className="hero__metric-value">{t(language, 'hero_metric3_val')}</span>
              <span className="hero__metric-label">{t(language, 'hero_metric3_lbl')}</span>
            </div>
          </div>
          <div className="hero__ctas">
            <Link to="/manufacturing/" className="btn btn--gold btn--lg"><span>{t(language, 'hero_cta1')}</span><span className="btn__arrow" aria-hidden="true">→</span></Link>
            <Link to="/products/" className="btn btn--outline-white btn--lg">{t(language, 'hero_cta2')}</Link>
            <Link to="/contact/" className="btn btn--outline-white btn--lg">{t(language, 'hero_cta3')}</Link>
          </div>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true"><div className="hero__scroll-line" /><span>{t(language, 'hero_scroll')}</span></div>
    </section>
  );
}
