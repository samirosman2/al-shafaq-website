import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mediaConfig } from '../data/mediaConfig';
import { siteContent, t } from '../data/siteContent';
import PlaceholderImage from './PlaceholderImage';
import { SectionHeading } from './SectionPrimitives';

export default function ProductsSection({ preview = false }: { preview?: boolean }) {
  const { language } = useLanguage();
  const products = preview ? siteContent.products.slice(0, 3) : siteContent.products;

  return (
    <section className={`section-padding ${preview ? 'section--light' : 'section--white'}`} aria-labelledby="products-heading">
      <div className="container">
        <SectionHeading
          overline="products_overline"
          heading={preview ? 'products_heading' : 'products_list_heading'}
          description={preview ? 'products_intro' : undefined}
          centered={preview}
        />
        <div className="products-grid" data-animate data-delay="2">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className="product-card__image">
                <PlaceholderImage asset={mediaConfig.products[index]} />
                <span className="product-card__number">{t(language, product.number)}</span>
              </div>
              <div className="product-card__body">
                <h3 className="product-card__title">{t(language, product.name)}</h3>
                <p className="product-card__desc">{t(language, product.description)}</p>
                <p className="product-card__applications">{t(language, product.applications)}</p>
              </div>
            </article>
          ))}
        </div>
        {preview && <div className="products-action" data-animate data-delay="3">
          <Link to="/products/" className="btn btn--primary btn--lg"><span>{t(language, 'products_cta')}</span><span className="btn__arrow" aria-hidden="true">→</span></Link>
        </div>}
      </div>
    </section>
  );
}
