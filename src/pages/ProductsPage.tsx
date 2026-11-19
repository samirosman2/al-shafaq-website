import ProductsSection from '../components/ProductsSection';
import { CtaBanner, PageHero } from '../components/SectionPrimitives';

export default function ProductsPage() {
  return (
    <main id="main-content">
      <PageHero pageKey="page_products" overlineKey="products_overline" headingKey="products_heading" descriptionKey="products_page_intro" />
      <ProductsSection />
      <CtaBanner
        overline="products_overline"
        heading="products_heading"
        description="products_cta_body"
        primaryLabel="products_cta_spec"
        secondaryLabel="nav_manufacturing"
      />
    </main>
  );
}
