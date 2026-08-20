import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { CrewSection } from "@/components/sections/crew-section";
import { RulesSection } from "@/components/sections/rules-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { PlanSection } from "@/components/sections/plan-section";
import { TripStatsSection } from "@/components/sections/trip-stats-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MissionSection />
      <CrewSection />
      <RulesSection />
      <GallerySection />
      <PlanSection />
      <TripStatsSection />
      <ReviewsSection />
      <FooterSection />
    </main>
  );
}
