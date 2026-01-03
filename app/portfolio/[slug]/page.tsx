import { notFound } from "next/navigation";
import { getArtworkBySlug, getRelatedArtworks, artworks } from "@/lib/data";
import ArtworkViewer from "@/components/artwork/ArtworkViewer";
import ArtworkInfo from "@/components/artwork/ArtworkInfo";
import ArtworkNavigation from "@/components/artwork/ArtworkNavigation";
import KeyboardNavigation from "@/components/artwork/KeyboardNavigation";
import RelatedArtwork from "@/components/artwork/RelatedArtwork";
import PageContainer from "@/components/layout/PageContainer";
import Section from "@/components/layout/Section";
import PageTransition from "@/components/home/PageTransition";
import { motion } from "framer-motion";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ArtworkDetailPage({ params }: PageProps) {
  const artwork = getArtworkBySlug(params.slug);

  if (!artwork) {
    notFound();
  }

  const related = getRelatedArtworks(artwork);

  return (
    <PageTransition>
      <KeyboardNavigation currentArtwork={artwork} allArtworks={artworks} />
      <Section className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <PageContainer>
          {/* Main artwork display - gallery-like layout */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 mb-16">
            {/* Large artwork viewer */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <ArtworkViewer artwork={artwork} />
            </motion.div>

            {/* Artwork info sidebar */}
            <div className="lg:col-span-1">
              <ArtworkInfo artwork={artwork} />
            </div>
          </div>

          {/* Navigation to next/previous */}
          <ArtworkNavigation
            currentArtwork={artwork}
            allArtworks={artworks}
          />
        </PageContainer>
      </Section>

      {/* Related artworks */}
      {related.length > 0 && (
        <Section className="bg-background-surface/50">
          <PageContainer>
            <RelatedArtwork artworks={related} />
          </PageContainer>
        </Section>
      )}
    </PageTransition>
  );
}

