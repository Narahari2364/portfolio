"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Artwork } from "@/types";

interface KeyboardNavigationProps {
  currentArtwork: Artwork;
  allArtworks: Artwork[];
}

export default function KeyboardNavigation({
  currentArtwork,
  allArtworks,
}: KeyboardNavigationProps) {
  const router = useRouter();

  useEffect(() => {
    const currentIndex = allArtworks.findIndex(
      (art) => art.id === currentArtwork.id
    );

    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't navigate if user is typing in an input
      if (
        (e.target as HTMLElement).tagName === "INPUT" ||
        (e.target as HTMLElement).tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        const previousArtwork = allArtworks[currentIndex - 1];
        router.push(`/portfolio/${previousArtwork.slug}`);
      } else if (
        e.key === "ArrowRight" &&
        currentIndex < allArtworks.length - 1
      ) {
        const nextArtwork = allArtworks[currentIndex + 1];
        router.push(`/portfolio/${nextArtwork.slug}`);
      } else if (e.key === "Escape") {
        router.push("/portfolio");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentArtwork, allArtworks, router]);

  return null;
}

