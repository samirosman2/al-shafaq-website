import ManufacturingSection from '../components/ManufacturingSection';
import StatsStrip from '../components/StatsStrip';
import { CtaBanner, PageHero } from '../components/SectionPrimitives';

export default function ManufacturingPage() {
  return (
    <main id="main-content">
      <PageHero pageKey="page_manufacturing" overlineKey="mfg_overline" headingKey="mfg_heading" descriptionKey="mfg_body" />
      <StatsStrip />
      <ManufacturingSection />
      <CtaBanner overline="contact_overline" heading="contact_heading" description="contact_form_note" secondaryLabel="nav_products" />
    </main>
  );
}
