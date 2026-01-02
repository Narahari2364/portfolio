import Hero from "@/components/home/Hero";
import FeaturedArtwork from "@/components/home/FeaturedArtwork";
import Footer from "@/components/Footer";
import PageTransition from "@/components/home/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <FeaturedArtwork />
      <Footer />
    </PageTransition>
  );
}

