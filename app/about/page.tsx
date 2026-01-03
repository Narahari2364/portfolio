import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import PageContainer from "@/components/layout/PageContainer";
import Section from "@/components/layout/Section";
import PageTransition from "@/components/home/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <Section className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <PageContainer>
          <AboutHero />
          <AboutContent />
        </PageContainer>
      </Section>
    </PageTransition>
  );
}

