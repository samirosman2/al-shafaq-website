import { useLanguage } from '../context/LanguageContext';
import { siteContent, t } from '../data/siteContent';

export default function StatsStrip() {
  const { language } = useLanguage();

  return (
    <section className="stats-band" aria-label={language === 'ar' ? 'مؤشرات المنشأة' : 'Facility metrics'}>
      <div className="container">
        <div className="stats-grid" role="list">
          {siteContent.metrics.map((metric, index) => (
            <div className="stat" role="listitem" key={metric.value} data-animate data-delay={String(index + 1)}>
              <span className="stat__value">{t(language, metric.value)}</span>
              <span className="stat__label">{t(language, metric.label)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
