import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mediaConfig } from '../data/mediaConfig';
import { t } from '../data/siteContent';
import PlaceholderImage from './PlaceholderImage';

export default function AboutSection({ fullPage = false }: { fullPage?: boolean }) {
  const { language } = useLanguage();
  const overline = fullPage ? 'about_section_label' : 'intro_overline';
  const heading = fullPage ? 'about_heading' : 'intro_heading';
  const description = fullPage ? 'about_body1' : 'intro_body';

  return (
    <section className="section--white section-padding" aria-labelledby="about-heading">
      <div className="container">
        <div className="two-col two-col--wide-right">
          <div className="two-col__text">
            <p className="overline" data-animate>{t(language, overline)}</p>
            <h2 className="section-heading" id="about-heading" data-animate data-delay="1">{t(language, heading)}</h2>
            <p className="body-lead" style={{ marginTop: '1.5rem' }} data-animate data-delay="2">{t(language, description)}</p>
            {fullPage ? (
              <>
                <p className="body-text" style={{ marginTop: '1.25rem' }} data-animate>{t(language, 'about_body2_full')}</p>
                <p className="body-text" style={{ marginTop: '1.25rem' }} data-animate>{t(language, 'about_body3')}</p>
              </>
            ) : null}
            <div className="about-actions" data-animate data-delay="3">
              <Link to="/about/" className="btn btn--primary"><span>{language === 'ar' ? 'تعرف على المزيد' : 'Learn More About Us'}</span><span className="btn__arrow" aria-hidden="true">→</span></Link>
              <Link to="/manufacturing/" className="btn btn--outline">{t(language, 'nav_manufacturing')}</Link>
            </div>
          </div>
          <div className="about-image-wrap" data-animate data-delay="2">
            <div className="two-col__image">
              <PlaceholderImage asset={mediaConfig.facility[fullPage ? 7 : 0]} />
            </div>
            <div className="two-col__accent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
