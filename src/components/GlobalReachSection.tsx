import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mediaConfig } from '../data/mediaConfig';
import { siteContent, t } from '../data/siteContent';
import PlaceholderImage from './PlaceholderImage';
import { SectionHeading } from './SectionPrimitives';

const locationCards = [
  { asset: mediaConfig.location[0], badge: 'bridge_role2', title: 'bridge_name2', description: 'bridge_loc2', detail: 'location_facility_desc' },
  { asset: mediaConfig.location[1], badge: 'bridge_role1', title: 'bridge_name1', description: 'bridge_loc1', detail: 'location_commercial_desc' },
  { asset: mediaConfig.location[2], badge: 'location_oman_badge', title: 'location_oman_title', description: 'location_oman_desc', detail: undefined },
] as const;

export default function GlobalReachSection({ preview = false }: { preview?: boolean }) {
  const { language } = useLanguage();

  if (preview) {
    return (
      <section className="section--light section-padding" aria-labelledby="reach-preview-heading">
        <div className="container">
          <SectionHeading overline="reach_overline" heading="reach_heading" description="reach_body" centered />
          <div className="industry-tags industry-tags--centered" data-animate data-delay="2">
            {siteContent.industries.map((key) => <span className="industry-tag" key={key}>{t(language, key)}</span>)}
          </div>
          <div className="products-action" data-animate data-delay="3">
            <Link to="/global-reach/" className="btn btn--primary btn--lg"><span>{t(language, 'reach_cta')}</span><span className="btn__arrow" aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section--white section-padding" aria-labelledby="location-heading">
        <div className="container">
          <div className="two-col">
            <div data-animate>
              <p className="overline">{t(language, 'reach_loc_overline')}</p>
              <h2 className="section-heading" id="location-heading">{t(language, 'reach_loc_heading')}</h2>
              <p className="body-lead" style={{ marginTop: '1.5rem' }}>{t(language, 'reach_loc_body')}</p>
              <p className="body-text" style={{ marginTop: '1rem' }}>{language === 'ar'
                ? 'يعكس وجودنا في عُمان التزامنا ببناء منصة تصنيع تربط الإنتاج الصناعي بالطلب العالمي. ومن خلال المقر التجاري للصمغ العربي المتحد في مسقط، نصل بهذه القدرات التصنيعية إلى العملاء والشركاء التجاريين حول العالم.'
                : "Our presence in Oman reflects our commitment to building a manufacturing platform that connects industrial production with global demand. Through United Arab Gum's commercial headquarters in Muscat, we extend this manufacturing capability to customers and business partners around the world."}</p>
            </div>
            <div className="about-image-wrap" data-animate data-delay="2">
              <div className="two-col__image"><PlaceholderImage asset={mediaConfig.location[0]} /></div>
              <div className="two-col__accent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
      <section className="section--light section-padding" aria-labelledby="locations-heading">
        <div className="container">
          <SectionHeading overline="reach_loc_overline" heading="location_heading" centered />
          <div className="location-cards" data-animate data-delay="2">
            {locationCards.map((card) => {
              return (
                <article className="location-card" key={card.asset.src}>
                  <div className="location-card__image"><PlaceholderImage asset={card.asset} /></div>
                  <div className="location-card__body">
                    <span className="location-card__badge">{t(language, card.badge)}</span>
                    <h3 className="location-card__title">{t(language, card.title)}</h3>
                    <p className="location-card__desc">{t(language, card.description)}</p>
                    {card.detail && <p className="location-card__desc location-card__detail">{t(language, card.detail)}</p>}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section--white section-padding" aria-labelledby="supply-chain-heading">
        <div className="container">
          <div className="two-col two-col--wide-right">
            <div className="about-image-wrap" data-animate>
              <div className="two-col__image"><PlaceholderImage asset={mediaConfig.facility[6]} /></div>
            </div>
            <div data-animate data-delay="2">
              <p className="overline">{t(language, 'reach_sc_overline')}</p>
              <h2 className="section-heading" id="supply-chain-heading">{t(language, 'reach_sc_heading')}</h2>
              <p className="body-lead" style={{ marginTop: '1.5rem' }}>{t(language, 'reach_sc_body')}</p>
              <p className="body-text" style={{ marginTop: '1rem' }}>{t(language, 'reach_sc_detail')}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section--light section-padding" aria-labelledby="industries-heading">
        <div className="container">
          <SectionHeading overline="reach_industries_heading" heading="reach_industries_heading" description="industries_intro" centered />
          <div className="industry-tags industry-tags--centered" data-animate data-delay="2">
            {siteContent.industries.map((key) => <span className="industry-tag" key={key}>{t(language, key)}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
