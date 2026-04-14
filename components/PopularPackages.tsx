'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, MapPin } from 'lucide-react';
import { PACKAGES } from '@/lib/data';
import PackageCard from './PackageCard';
import BookingDialog from './BookingDialog';

export default function PopularPackages() {
  const [selectedPackage, setSelectedPackage] = useState<typeof PACKAGES[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Duplicate packages for infinite scroll
  const duplicatedPackages = [...PACKAGES, ...PACKAGES];

  const handleBook = (e: React.MouseEvent, pkg: typeof PACKAGES[0]) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedPackage(pkg);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-20 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <div className="flex flex-col items-center text-center">
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
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex">
        <div
          className="flex gap-6 px-4 animate-scroll-x hover:[animation-play-state:paused]"
          onTouchStart={(e) => { e.currentTarget.style.animationPlayState = 'paused'; }}
          onTouchEnd={(e) => { e.currentTarget.style.animationPlayState = 'running'; }}
        >
          {duplicatedPackages.map((pkg, idx) => (
            <PackageCard
              key={`${pkg.id}-${idx}`}
              pkg={pkg}
              variant="scroll"
              onBook={handleBook}
              index={idx}
            />
          ))}
        </div>
      </div>


      {/* Booking Dialog */}
      <BookingDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        packageData={selectedPackage ? {
          title: selectedPackage.title,
          destination: selectedPackage.destination,
          duration: selectedPackage.duration,
          price: selectedPackage.price,
          rating: selectedPackage.rating,
        } : null}
      />
    </section>
  );
}
