import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import PageContainer from "@/components/layout/PageContainer";
import Section from "@/components/layout/Section";

export default function ContactPage() {
  return (
    <Section className="pt-32">
      <PageContainer>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-12">
            Get in Touch
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}

