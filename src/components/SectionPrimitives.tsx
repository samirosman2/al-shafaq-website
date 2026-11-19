import { Fragment, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { t, tList, type TranslationKey } from '../data/siteContent';

export function RichText({ children }: { children: string }) {
  const parts = children.split(/(<em>|<\/em>|<br\s*\/?>)/g);
  let emphasized = false;

  return (
    <>
      {parts.map((part, index) => {
        if (part === '<em>') {
          emphasized = true;
          return null;
        }
        if (part === '</em>') {
          emphasized = false;
          return null;
        }
        if (/^<br\s*\/?>$/.test(part)) return <br key={index} />;
        return emphasized ? <em key={index}>{part}</em> : part;
      })}
    </>
  );
}

export function PageHero({
  pageKey,
  overlineKey,
  headingKey,
  descriptionKey,
}: {
  pageKey: TranslationKey;
  overlineKey: TranslationKey;
  headingKey: TranslationKey;
  descriptionKey: TranslationKey;
}) {
  const { language } = useLanguage();

  return (
    <section className="page-hero" aria-label={t(language, pageKey)}>
      <div className="page-hero__pattern" aria-hidden="true" />
      <div className="container page-hero__content">
        <nav className="page-hero__breadcrumb" aria-label={language === 'ar' ? 'مسار التنقل' : 'Breadcrumb'}>
          <Link to="/">{t(language, 'nav_home')}</Link>
          <span aria-hidden="true">/</span>
          <span>{t(language, pageKey)}</span>
        </nav>
        <p className="overline page-hero__overline">{t(language, overlineKey)}</p>
        <h1 className="page-hero__heading"><RichText>{t(language, headingKey)}</RichText></h1>
        <p className="page-hero__sub">{t(language, descriptionKey)}</p>
      </div>
    </section>
  );
}

export function SectionHeading({
  overline,
  heading,
  description,
  centered = false,
}: {
  overline?: TranslationKey;
  heading: TranslationKey;
  description?: TranslationKey;
  centered?: boolean;
}) {
  const { language } = useLanguage();

  return (
    <div className={`section-header${centered ? ' section-header--centered' : ''}`} data-animate>
      {overline && <p className="overline">{t(language, overline)}</p>}
      <h2 className="section-heading"><RichText>{t(language, heading)}</RichText></h2>
      {description && <p className="section-lead body-text">{t(language, description)}</p>}
    </div>
  );
}

export function BrandBridge() {
  const { language } = useLanguage();
  const companies = [
    { role: 'bridge_role1', name: 'bridge_name1', location: 'bridge_loc1', items: 'bridge_items1' },
    { role: 'bridge_role2', name: 'bridge_name2', location: 'bridge_loc2', items: 'bridge_items2' },
  ] as const;

  return (
    <section className="brand-bridge section-padding" aria-labelledby="bridge-heading">
      <div className="container">
        <div className="section-header section-header--centered" data-animate>
          <p className="overline">{t(language, 'bridge_overline')}</p>
          <h2 className="section-heading" id="bridge-heading">{t(language, 'bridge_heading')}</h2>
        </div>
        <div className="brand-bridge__grid" data-animate data-delay="2">
          {companies.map((company, index) => (
            <Fragment key={company.name}>
              {index === 1 && <div className="brand-bridge__connector" aria-hidden="true">
                <div className="brand-bridge__connector-line" />
                <span className="brand-bridge__connector-label">{t(language, 'bridge_connector')}</span>
                <div className="brand-bridge__connector-line" />
              </div>}
              <div className={`brand-bridge__company${index === 1 ? ' brand-bridge__company--primary' : ''}`}>
                <p className="brand-bridge__role">{t(language, company.role)}</p>
                <h3 className="brand-bridge__name">{t(language, company.name)}</h3>
                <p className="brand-bridge__loc">{t(language, company.location)}</p>
                <ul className="brand-bridge__list" role="list">
                  {tList(language, company.items).map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBanner({
  overline,
  heading,
  description,
  primaryLabel = 'nav_enquire',
  secondaryLabel = 'nav_products',
}: {
  overline: TranslationKey;
  heading: TranslationKey;
  description: TranslationKey;
  primaryLabel?: TranslationKey;
  secondaryLabel?: TranslationKey;
}) {
  const { language } = useLanguage();

  return (
    <section className="cta-banner" aria-label={t(language, overline)}>
      <div className="cta-banner__pattern" aria-hidden="true" />
      <div className="container">
        <div className="cta-banner__inner" data-animate>
          <p className="overline cta-banner__overline">{t(language, overline)}</p>
          <h2 className="cta-banner__heading"><RichText>{t(language, heading)}</RichText></h2>
          <p className="cta-banner__sub">{t(language, description)}</p>
          <div className="cta-banner__actions">
            <Link to="/contact/" className="btn btn--gold btn--lg">
              <span>{t(language, primaryLabel)}</span><span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/products/" className="btn btn--outline-white btn--lg">{t(language, secondaryLabel)}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BodySection({ children, className = 'section--white section-padding', ariaLabelledBy }: {
  children: ReactNode;
  className?: string;
  ariaLabelledBy?: string;
}) {
  return <section className={className} aria-labelledby={ariaLabelledBy}><div className="container">{children}</div></section>;
}
