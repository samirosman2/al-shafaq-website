import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { siteContent, t } from '../data/siteContent';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const { language } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(window.scrollY > 60);
  const isHome = location.pathname === '/';
  const brandName = language === 'ar' ? t(language, 'brand_ar') : t(language, 'brand_en');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = siteContent.navigation.map((item) => (
    <NavLink
      key={item.href}
      to={item.href}
      className={({ isActive }) => `nav__link${isActive ? ' active' : ''}`}
      onClick={() => setMenuOpen(false)}
    >
      {t(language, item.key)}
    </NavLink>
  ));

  return (
    <header>
      <nav className={`nav${isHome && !scrolled ? ' nav--transparent' : ''}${scrolled ? ' scrolled' : ''}`} aria-label={t(language, 'main_navigation')}>
        <div className="nav__inner">
          <Link to="/" className="brand-wordmark" aria-label={`${brandName} — ${t(language, 'nav_home')}`}>
            <span
              className={language === 'ar' ? 'brand-wordmark__ar' : 'brand-wordmark__en'}
              lang={language}
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
              {brandName}
            </span>
            <span className="brand-wordmark__tagline">{t(language, 'brand_tagline')}</span>
          </Link>
          <ul className="nav__links" role="list">{links.map((link, index) => <li key={index}>{link}</li>)}</ul>
          <div className="nav__actions">
            <LanguageToggle />
            <Link to="/contact/" className="nav__cta">{t(language, 'nav_enquire')}</Link>
          </div>
          <button
            className={`nav__toggle${menuOpen ? ' open' : ''}`}
            type="button"
            aria-label={menuOpen ? (language === 'ar' ? 'إغلاق القائمة' : 'Close menu') : (language === 'ar' ? 'فتح القائمة' : 'Open menu')}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <nav className={`nav__mobile${menuOpen ? ' open' : ''}`} id="mobile-nav" aria-label={t(language, 'mobile_navigation')}>
        {links}
        <div className="nav__mobile-actions">
          <LanguageToggle mobile />
          <Link to="/contact/" className="btn btn--primary btn--full" onClick={() => setMenuOpen(false)}>{t(language, 'nav_enquire')}</Link>
        </div>
      </nav>
    </header>
  );
}
