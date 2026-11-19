import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { siteContent, t } from '../data/siteContent';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__accent-rule" aria-hidden="true" />
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="brand-wordmark brand-wordmark--white">
              <span className="brand-wordmark__en">{t(language, 'brand_en')}</span>
              <span className="brand-wordmark__tagline">{t(language, 'brand_tagline')}</span>
            </Link>
            <p className="footer__tagline">{t(language, 'footer_tagline')}</p>
          </div>
          <nav aria-label={t(language, 'footer_nav')}>
            <p className="footer__col-title">{t(language, 'footer_nav')}</p>
            <ul className="footer__links" role="list">
              {siteContent.navigation.slice(1).map((item) => (
                <li key={item.href}><Link to={item.href} className="footer__link">{t(language, item.key)}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="footer__col-title">{t(language, 'footer_offices')}</p>
            <div className="footer__links">
              <p className="footer__address">
                <strong className="footer__office-label">{t(language, 'office_mfg_badge')}</strong><br />
                <span>{t(language, 'office_mfg_name')}</span><br />
                <span className="footer__office-location">{t(language, 'office_mfg_loc')}</span>
              </p>
              <p className="footer__address footer__address--second">
                <strong className="footer__office-label">{t(language, 'office_com_badge')}</strong><br />
                <span>{t(language, 'office_com_name')}</span><br />
                <span className="footer__office-location">{t(language, 'office_com_loc')}</span>
              </p>
            </div>
          </div>
          <div>
            <p className="footer__col-title">{t(language, 'footer_legal')}</p>
            <ul className="footer__links" role="list">
              <li><span className="footer__link">{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</span></li>
              <li><span className="footer__link">{language === 'ar' ? 'شروط الاستخدام' : 'Terms of Use'}</span></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">{t(language, 'footer_copy')}</p>
          <p className="footer__copy footer__disclaimer">{t(language, 'footer_disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
}
