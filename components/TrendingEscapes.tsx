'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PACKAGES } from '@/lib/data';
import NewPackageCard from './NewPackageCard';
import BookingDialog from './BookingDialog';


export default function PopularPackages() {
  const displayPackages = PACKAGES.slice(0, 6);

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
            <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">
              Best Price Guaranteed
            </span>
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-on-surface tracking-tight">
            Popular <span className="text-primary italic"> Ladakh Package</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-sm font-medium max-w-lg">
           Best Kashmir & Ladakh Tour Packages.
          </p>
        </div>

        {/* Responsive Grid Layout with Explicit Hiding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {displayPackages.map((pkg, idx) => (
            <div 
              key={pkg.id} 
              className={`w-full ${
                idx === 1 ? 'hidden md:block' : // Card 2: Hidden on Mobile, Shows on Tablet+
                idx >= 2 ? 'hidden lg:block' :  // Cards 3-6: Hidden on Mobile & Tablet, Shows on Desktop+
                'block'                         // Card 1: Always visible
              }`}
            >
              <NewPackageCard
                pkg={pkg}
                variant="grid"
                index={idx}
              />
            </div>
          ))}
        </div>

        {/* View All Packages Button */}
        <div className="mt-16 flex justify-center">
          <Link 
            href="/packages"
            className="bg-primary text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95"
          >
            View All Packages
          </Link>
        </div>

      </div>
    </section>
  );
}

function setSelectedPackage(pkg: { id: number; title: string; image: string; duration: string; location: string; price: string; originalPrice: string; discount: string; rating: number; destination: string; category: string; description: string; itinerary: { day: number; title: string; details: string; }[]; inclusions: string[]; exclusions: string[]; }) {
  throw new Error('Function not implemented.');
}
function setIsDialogOpen(arg0: boolean) {
  throw new Error('Function not implemented.');
}

