import AboutHero from "@/components/about/AboutHero";
import Biography from "@/components/about/Biography";
import PageContainer from "@/components/layout/PageContainer";
import Section from "@/components/layout/Section";

export default function AboutPage() {
  return (
    <>
      <Section className="pt-32">
        <PageContainer>
          <AboutHero />
        </PageContainer>
      </Section>
      <Section>
        <PageContainer>
          <Biography />
        </PageContainer>
      </Section>
    </>
  );
}

