import React from "react";
import HeroSection from "@/components/HeroSection";
import KeyFigures from "@/components/KeyFigures";
import FeaturedFormations from "@/components/FeaturedFormations";
import PracticalPillars from "@/components/PracticalPillars";
import TestimonialHighlight from "@/components/TestimonialHighlight";
import LocationSection from "@/components/LocationSection";
import { getFilieres, getTemoignages } from "@/lib/supabase";

export const revalidate = 60; // ISR cache revalidation

export default async function HomePage() {
  const [filieres, temoignages] = await Promise.all([
    getFilieres(),
    getTemoignages(),
  ]);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <KeyFigures />
      <FeaturedFormations filieres={filieres} />
      <PracticalPillars />
      <TestimonialHighlight temoignages={temoignages} />
      <LocationSection />
    </div>
  );
}
