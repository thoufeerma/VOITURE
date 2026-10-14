import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { VoitureNavbar } from '@/components/home/VoitureNavbar';
import { VoitureFooter } from '@/components/home/VoitureFooter';
import { PdpGallery } from '@/components/pdp/PdpGallery';
import { PdpHeaderBarWrapper } from '@/components/pdp/PdpHeaderBarWrapper';
import { PdpKeySpecs } from '@/components/pdp/PdpKeySpecs';
import { PdpAccordionSpecs } from '@/components/pdp/PdpAccordionSpecs';
import { InspectionChecklist } from '@/components/pdp/InspectionChecklist';
import { SimilarVehicles } from '@/components/pdp/SimilarVehicles';
import { getVehicleById, getAllVehicleIds } from '@/lib/data/vehiclesData';

export function generateStaticParams() {
  const ids = getAllVehicleIds();
  return ids.map((id) => ({ id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const vehicle = getVehicleById(id);

  if (!vehicle) {
    return {
      title: 'Vehicle Details | Voiture',
    };
  }

  return {
    title: `${vehicle.name} (${vehicle.regYear}) | Voiture Luxury Showroom`,
    description: `Discover this pristine ${vehicle.name} ${vehicle.variant}. ${vehicle.kmDriven}, ${vehicle.fuelType}, ${vehicle.price}. Verified 200-point inspection at Voiture.`,
    openGraph: {
      title: `${vehicle.name} - ${vehicle.price} | Voiture Atelier`,
      description: `View full specifications, high-resolution gallery, inspection report and EMI breakdown for ${vehicle.name}.`,
      images: [
        {
          url: vehicle.heroImage,
          width: 1200,
          height: 630,
          alt: vehicle.name,
        },
      ],
    },
  };
}

export default async function VehiclePdpPage({ params }: PageProps) {
  const { id } = await params;
  const vehicle = getVehicleById(id);

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#deba76] selection:text-neutral-950 font-sans">
      {/* 1. Global Navigation */}
      <VoitureNavbar />

      {/* Main Content Area */}
      <main className="pt-24 sm:pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-xs font-mono text-neutral-400 flex items-center flex-wrap gap-2">
            <Link href="/" className="hover:text-[#deba76] transition-colors">
              HOME
            </Link>
            <span className="text-neutral-600">/</span>
            <Link href="/#filter-section" className="hover:text-[#deba76] transition-colors">
              CARS
            </Link>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-500 uppercase">{vehicle.brand}</span>
            <span className="text-neutral-600">/</span>
            <span className="text-[#deba76] font-semibold">{vehicle.name}</span>
          </nav>

          {/* 2. High-Resolution Gallery Viewport */}
          <PdpGallery
            gallery={vehicle.gallery}
            vehicleName={vehicle.name}
          />

          {/* 3. Primary Vehicle Info & Action Header */}
          <PdpHeaderBarWrapper vehicle={vehicle} />

          {/* 4. Technical Architecture & Key Highlights */}
          <PdpKeySpecs vehicle={vehicle} />

          {/* 5. Comprehensive 200-Point Inspection Report */}
          <InspectionChecklist />

          {/* 6. Full Specifications Accordion (Modeled after cars.co.in/cars/3004) */}
          <PdpAccordionSpecs specifications={vehicle.specifications} />

          {/* 8. Similar Recommended Vehicles */}
          <SimilarVehicles similarCarIds={vehicle.similarCarIds} />
        </div>
      </main>

      {/* Global Footer */}
      <VoitureFooter />
    </div>
  );
}
