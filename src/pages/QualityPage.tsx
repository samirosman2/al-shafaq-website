import QualitySection from '../components/QualitySection';
import { CtaBanner, PageHero } from '../components/SectionPrimitives';

export default function QualityPage() {
  return (
    <main id="main-content">
      <PageHero pageKey="page_quality" overlineKey="qual_overline" headingKey="qual_heading" descriptionKey="qual_body" />
      <QualitySection />
      <CtaBanner overline="contact_overline" heading="quality_cta_heading" description="quality_cta_body" primaryLabel="nav_enquire" secondaryLabel="products_cta_spec" />
    </main>
  );
}
