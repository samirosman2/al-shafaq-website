import { useState, type FormEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../data/siteContent';

const inquiryOptions = [
  ['product-info', 'contact_form_inquiry_opt2'],
  ['bulk-supply', 'contact_form_inquiry_opt3'],
  ['export-partnership', 'contact_form_inquiry_opt4'],
  ['custom-formulation', 'contact_form_inquiry_opt5'],
  ['general', 'contact_form_inquiry_opt6'],
] as const;

export default function ContactSection() {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      form.reset();
      window.setTimeout(() => setSubmitted(false), 3000);
    }, 1200);
  };

  return (
    <section className="section--white section-padding" aria-labelledby="contact-form-heading">
      <div className="container">
        <div className="contact-layout">
          <div>
            <h2 className="section-heading contact-form-heading" id="contact-form-heading">{t(language, 'contact_send_heading')}</h2>
            <div className="contact-form">
              <form name="al-shafaq-enquiry" onSubmit={submitEnquiry} aria-label={t(language, 'contact_form_inquiry')}>
                <div className="form-group form-group--half">
                  <div className="form-group">
                    <label className="form-label" htmlFor="full-name">{t(language, 'contact_form_name')}</label>
                    <input type="text" id="full-name" name="full_name" className="form-input" placeholder={t(language, 'form_full_name_placeholder')} required autoComplete="name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">{t(language, 'contact_form_company')}</label>
                    <input type="text" id="company" name="company" className="form-input" placeholder={t(language, 'form_company_placeholder')} required autoComplete="organization" />
                  </div>
                </div>
                <div className="form-group form-group--half">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">{t(language, 'contact_form_email')}</label>
                    <input type="email" id="email" name="email" className="form-input" placeholder={t(language, 'form_email_placeholder')} required autoComplete="email" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">{t(language, 'contact_form_phone')}</label>
                    <input type="tel" id="phone" name="phone" className="form-input" placeholder={t(language, 'form_phone_placeholder')} autoComplete="tel" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="country">{t(language, 'contact_form_country')}</label>
                  <input type="text" id="country" name="country" className="form-input" placeholder={t(language, 'form_country_placeholder')} autoComplete="country-name" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="inquiry-type">{t(language, 'contact_form_inquiry')}</label>
                  <select id="inquiry-type" name="inquiry_type" className="form-select" required defaultValue="">
                    <option value="" disabled>{t(language, 'contact_form_inquiry_opt1')}</option>
                    {inquiryOptions.map(([value, key]) => <option value={value} key={value}>{t(language, key)}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">{t(language, 'contact_form_message')}</label>
                  <textarea id="message" name="message" className="form-textarea" placeholder={t(language, 'form_message_placeholder')} required rows={6} />
                </div>
                <p className="form-note">{t(language, 'contact_form_note')}</p>
                <button type="submit" className="btn btn--primary btn--full contact-submit" disabled={sending}>
                  <span>{sending ? t(language, 'form_sending') : submitted ? t(language, 'form_sent') : t(language, 'contact_form_submit')}</span>
                  <span className="btn__arrow" aria-hidden="true">→</span>
                </button>
              </form>
            </div>
          </div>
          <div className="contact-offices">
            <h2 className="section-heading contact-form-heading">{t(language, 'contact_offices_heading')}</h2>
            <article className="office-card office-card--primary" data-animate>
              <p className="office-card__badge">{t(language, 'office_mfg_badge')}</p>
              <h3 className="office-card__name">{t(language, 'office_mfg_name')}</h3>
              <p className="office-card__location">{t(language, 'office_mfg_loc')}</p>
              <p className="office-card__activity"><span aria-hidden="true">🏭</span>{t(language, 'contact_mfg_activity')}</p>
              <p className="office-card__note">{language === 'ar' ? 'هذا هو موقع التصنيع. للاستفسارات التجارية والتصدير، يُرجى التواصل مع الصمغ العربي المتحد.' : 'This is the manufacturing site. For commercial and export enquiries, please contact United Arab Gum.'}</p>
            </article>
            <article className="office-card" data-animate data-delay="2">
              <p className="office-card__badge">{t(language, 'office_com_badge')}</p>
              <h3 className="office-card__name">{t(language, 'office_com_name')}</h3>
              <p className="office-card__location">{t(language, 'office_com_loc')}</p>
              <p className="office-card__activity"><span aria-hidden="true">🌍</span>{t(language, 'contact_com_activity')}</p>
              <p className="office-card__note">{t(language, 'office_com_note')}</p>
            </article>
            <div className="contact-routing-note" data-animate data-delay="3">
              <p><strong>{t(language, 'contact_routing_heading')}</strong><br />{t(language, 'contact_routing_body')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
