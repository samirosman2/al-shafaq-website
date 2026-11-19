import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GlobalReachPage from './pages/GlobalReachPage';
import HomePage from './pages/HomePage';
import ManufacturingPage from './pages/ManufacturingPage';
import ProductsPage from './pages/ProductsPage';
import QualityPage from './pages/QualityPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/LanguageContext';
import { t, type TranslationKey } from './data/siteContent';

function ScrollManager() {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const titles: Record<string, TranslationKey> = {
      '/': 'title_home',
      '/about': 'title_about',
      '/products': 'title_products',
      '/manufacturing': 'title_manufacturing',
      '/quality': 'title_quality',
      '/global-reach': 'title_reach',
      '/contact': 'title_contact',
    };
    const route = location.pathname.replace(/\/$/, '') || '/';
    document.title = t(language, titles[route] ?? 'title_home');
  }, [language, location.pathname]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-animate]');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('animated'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollManager />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/products/" element={<ProductsPage />} />
          <Route path="/manufacturing/" element={<ManufacturingPage />} />
          <Route path="/quality/" element={<QualityPage />} />
          <Route path="/global-reach/" element={<GlobalReachPage />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}
