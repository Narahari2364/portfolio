import { notFound } from "next/navigation";
import { getArtworkBySlug, getRelatedArtworks } from "@/lib/data";
import ArtworkViewer from "@/components/artwork/ArtworkViewer";
import ArtworkInfo from "@/components/artwork/ArtworkInfo";
import RelatedArtwork from "@/components/artwork/RelatedArtwork";
import PageContainer from "@/components/layout/PageContainer";
import Section from "@/components/layout/Section";

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
    <>
      <Section className="pt-32">
        <PageContainer>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ArtworkViewer artwork={artwork} />
            <ArtworkInfo artwork={artwork} />
          </div>
        </PageContainer>
      </Section>
      {related.length > 0 && (
        <Section>
          <PageContainer>
            <RelatedArtwork artworks={related} />
          </PageContainer>
        </Section>
      )}
    </>
  );
}

