'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, MapPin } from 'lucide-react';
import { PACKAGES } from '@/lib/data';
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
            <Link
              href={`/packages/${pkg.id}`}
              key={`${pkg.id}-${idx}`}
              className="flex-shrink-0 w-[280px] bg-white rounded-[2rem] overflow-hidden shadow-lg border border-on-surface-variant/5 group hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-[180px] w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg">
                  {pkg.discount}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-[9px] font-black text-on-surface">{pkg.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-base font-black text-on-surface leading-tight group-hover:text-primary transition-colors line-clamp-1">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-on-surface-variant/60">
                    <MapPin className="w-2.5 h-2.5" />
                    <span className="text-[8px] font-bold uppercase tracking-wider line-clamp-1">{pkg.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-on-surface-variant/60">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-medium">{pkg.duration}</span>
                </div>

                <div className="h-px bg-on-surface-variant/10 w-full" />

                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[8px] font-bold text-on-surface-variant/40 uppercase tracking-widest line-through">
                      {pkg.originalPrice}
                    </p>
                    <p className="text-lg font-black text-primary truncate">
                      {pkg.price}
                      <span className="text-[8px] font-medium text-on-surface-variant/60 ml-1 uppercase">/ Person</span>
                    </p>
                  </div>
                  <button
                    onClick={(e) => handleBook(e, pkg)}
                    className="bg-primary text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-95 shadow-md whitespace-nowrap cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </div>
            </Link>
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
