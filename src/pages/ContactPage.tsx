import ContactSection from '../components/ContactSection';
import { PageHero } from '../components/SectionPrimitives';

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero pageKey="page_contact" overlineKey="contact_overline" headingKey="contact_heading" descriptionKey="contact_body" />
      <ContactSection />
    </main>
  );
}
