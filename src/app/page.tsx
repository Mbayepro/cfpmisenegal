import React from "react";
import HeroSection from "@/components/HeroSection";
import KeyFigures from "@/components/KeyFigures";
import FeaturedFormations from "@/components/FeaturedFormations";
import PracticalPillars from "@/components/PracticalPillars";
import TestimonialHighlight from "@/components/TestimonialHighlight";
import LatestNewsSection from "@/components/LatestNewsSection";
import LocationSection from "@/components/LocationSection";
import { getFilieres, getTemoignages, getActualites } from "@/lib/supabase";

export const revalidate = 60; // ISR cache revalidation

export default async function HomePage() {
  const [filieres, temoignages, actualites] = await Promise.all([
    getFilieres(),
    getTemoignages(),
    getActualites(),
  ]);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <KeyFigures />
      <FeaturedFormations filieres={filieres} />
      <PracticalPillars />
      <TestimonialHighlight temoignages={temoignages} />
      <LatestNewsSection actualites={actualites} />
      <LocationSection />
    </div>
  );
}

