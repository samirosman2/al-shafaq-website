import AboutSection from '../components/AboutSection';
import { BrandBridge, CtaBanner } from '../components/SectionPrimitives';
import GlobalReachSection from '../components/GlobalReachSection';
import Hero from '../components/Hero';
import ManufacturingSection from '../components/ManufacturingSection';
import ProductsSection from '../components/ProductsSection';
import StatsStrip from '../components/StatsStrip';

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <AboutSection />
      <BrandBridge />
      <StatsStrip />
      <ProductsSection preview />
      <ManufacturingSection preview />
      <GlobalReachSection preview />
      <CtaBanner overline="contact_overline" heading="contact_heading" description="contact_body" primaryLabel="nav_enquire" secondaryLabel="products_cta_spec" />
    </main>
  );
}
