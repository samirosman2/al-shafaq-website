import { t } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle({ mobile = false }: { mobile?: boolean }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className={`lang-switcher${mobile ? ' btn btn--outline' : ''}`}
      type="button"
      aria-label={t(language, 'lang_toggle_label')}
      lang={language === 'en' ? 'ar' : 'en'}
      onClick={toggleLanguage}
    >
      <span className="lang-icon" aria-hidden="true">🌐</span>
      <span>{language === 'en' ? 'العربية' : 'EN'}</span>
    </button>
  );
}
