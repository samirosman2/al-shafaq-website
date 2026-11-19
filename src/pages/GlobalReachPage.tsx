import GlobalReachSection from '../components/GlobalReachSection';
import { CtaBanner, PageHero } from '../components/SectionPrimitives';

export default function GlobalReachPage() {
  return (
    <main id="main-content">
      <PageHero pageKey="page_reach" overlineKey="reach_overline" headingKey="reach_heading" descriptionKey="reach_body" />
      <GlobalReachSection />
      <CtaBanner overline="reach_overline" heading="reach_cta" description="industries_intro" primaryLabel="reach_cta" secondaryLabel="nav_products" />
    </main>
  );
}
