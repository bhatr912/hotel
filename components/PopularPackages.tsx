'use client';

import React from 'react';
import Link from 'next/link';
import { PACKAGES } from '@/lib/data';
import NewPackageCard from './NewPackageCard';

export default function PopularPackages() {
  // Take the first 6 packages for the desktop view
  const displayPackages = PACKAGES.slice(0, 6);

  return (
    <section className="py-20 bg-surface-container-lowest overflow-hidden">
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
            Popular <span className="text-primary italic">Kashmir Packages</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-sm font-medium max-w-lg">
            Experience the magic of the valley with our handpicked tour packages, now at up to <span className="text-primary font-bold">45% off</span>.
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