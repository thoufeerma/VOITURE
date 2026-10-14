import { VoitureNavbar } from '@/components/home/VoitureNavbar';
import { VoitureHero } from '@/components/hero/VoitureHero';
import { BrandCarousel } from '@/components/home/BrandCarousel';
import { VehicleFilterBar } from '@/components/home/VehicleFilterBar';
import { ExploreByCategory } from '@/components/home/ExploreByCategory';
import { FeaturedListings } from '@/components/home/FeaturedListings';
import { VoitureExperience } from '@/components/home/VoitureExperience';
import { HowItWorks } from '@/components/home/HowItWorks';
import { MarketplaceTrust } from '@/components/home/MarketplaceTrust';
import { SellYourVehicleBanner } from '@/components/home/SellYourVehicleBanner';
import { VoitureFooter } from '@/components/home/VoitureFooter';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#deba76] selection:text-neutral-950 font-sans">
      {/* Top Navigation */}
      <VoitureNavbar />

      {/* Cinematic Scroll-Driven Hero Section */}
      <VoitureHero scrollDistanceMultiplier={4.5} />

      {/* Main Marketplace Sections */}
      <main className="relative z-10 bg-[#0B0B0B] text-white">
        {/* Infinite Sliding Brand Carousel right under the Hero Section */}
        <BrandCarousel />

        {/* 1. Vehicle Search & Filter Bar */}
        <div className="pt-8 sm:pt-10">
          <VehicleFilterBar />
        </div>

        {/* 2. Explore: Shop by Category */}
        <ExploreByCategory />

        {/* 3. Featured: Premium Vehicles */}
        <FeaturedListings />

        {/* 4. The Voiture Experience */}
        <VoitureExperience />

        {/* 5. How It Works */}
        <HowItWorks />

        {/* 6. Marketplace Trust */}
        <MarketplaceTrust />

        {/* 7. Sell Your Vehicle Banner */}
        <SellYourVehicleBanner />
      </main>

      {/* 8. Editorial Footer */}
      <VoitureFooter />
    </div>
  );
}
