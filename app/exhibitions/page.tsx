import PageContainer from "@/components/layout/PageContainer";
import Section from "@/components/layout/Section";
import FadeIn from "@/components/animations/FadeIn";

export default function ExhibitionsPage() {
  return (
    <Section className="pt-32">
      <PageContainer>
        <FadeIn className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
            Exhibitions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            Past and upcoming exhibitions, shows, and events
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-light">
              This section will display a timeline of exhibitions, shows, and events where the
              artwork has been featured.
            </p>
          </div>
        </FadeIn>
      </PageContainer>
    </Section>
  );
}

