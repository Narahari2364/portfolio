import { Suspense } from "react";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import CategoryFilter from "@/components/portfolio/CategoryFilter";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PageContainer from "@/components/layout/PageContainer";
import Section from "@/components/layout/Section";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function PortfolioPage() {
  return (
    <Section id="portfolio" className="pt-32 pb-24 sm:pb-32 lg:pb-40">
      <PageContainer>
        <PortfolioHeader />
        <Suspense fallback={<LoadingSpinner />}>
          <CategoryFilter />
          <PortfolioGrid />
        </Suspense>
      </PageContainer>
    </Section>
  );
}

