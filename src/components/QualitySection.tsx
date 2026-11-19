import { useLanguage } from '../context/LanguageContext';
import { mediaConfig } from '../data/mediaConfig';
import { t } from '../data/siteContent';
import PlaceholderImage from './PlaceholderImage';
import { SectionHeading } from './SectionPrimitives';

const commitments = [
  { icon: '📋', title: 'qc1', description: 'quality_commitment_1' },
  { icon: '🔬', title: 'qc2', description: 'quality_commitment_2' },
  { icon: '✅', title: 'qc3', description: 'quality_commitment_3' },
  { icon: '🔎', title: 'qc4', description: 'quality_commitment_4' },
  { icon: '📄', title: 'qc5', description: 'quality_commitment_5' },
  { icon: '🌐', title: 'qc6', description: 'quality_commitment_6' },
] as const;

export default function QualitySection() {
  const { language } = useLanguage();

  return (
    <>
      <section className="section--white section-padding" aria-labelledby="quality-philosophy-heading">
        <div className="container">
          <div className="two-col">
            <div data-animate>
              <p className="overline">{t(language, 'quality_philosophy_label')}</p>
              <h2 className="section-heading" id="quality-philosophy-heading">{t(language, 'qual_heading')}</h2>
              <p className="body-lead" style={{ marginTop: '1.5rem' }}>{t(language, 'qual_body')}</p>
              <p className="body-text" style={{ marginTop: '1.25rem' }}>{t(language, 'quality_source_note')}</p>
            </div>
            <div className="about-image-wrap" data-animate data-delay="2">
              <div className="two-col__image"><PlaceholderImage asset={mediaConfig.facility[3]} /></div>
              <div className="two-col__accent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
      <section className="section--light section-padding" aria-labelledby="commitments-heading">
        <div className="container">
          <SectionHeading overline="qual_overline" heading="qual_commit_heading" centered />
          <div className="quality-grid" data-animate data-delay="2">
            {commitments.map(({ icon, title, description }) => {
              return (
                <article className="quality-card" key={title}>
                  <div className="quality-card__icon" aria-hidden="true">{icon}</div>
                  <h3 className="quality-card__title">{t(language, title)}</h3>
                  <p className="quality-card__desc">{t(language, description)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
