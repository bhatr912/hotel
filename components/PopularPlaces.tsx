'use client';

import React, { useState } from 'react';
import { POPULAR_PLACES } from '@/lib/data';
import BookingDialog from './BookingDialog';

export default function PopularPlaces() {
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePlaceClick = (place: string) => {
    setSelectedPlace(place);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
            <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">
              Most Searched
            </span>
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-on-surface tracking-tight">
            Popular <span className="text-primary italic">Places</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-sm font-medium max-w-lg">
            Discover the most sought-after destinations in the valley and start planning your custom itinerary today.
          </p>
        </div>

        {/* Dashed Tags/Buttons Container - Centered */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {POPULAR_PLACES.map((place) => (
            <button
              key={place}
              onClick={() => handlePlaceClick(place)}
              className="px-4 py-2 bg-white border border-dashed border-gray-300 rounded-md text-sm font-bold text-gray-800 hover:border-primary hover:text-primary hover:bg-primary/5 hover:shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              {place}
            </button>
          ))}
        </div>

      </div>

      {/* Booking Dialog mapped to the clicked location */}
      <BookingDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        packageData={selectedPlace ? {
          title: `Custom Itinerary: ${selectedPlace}`,
          destination: selectedPlace,
          duration: "Customizable",
          price: "On Request",
          rating: 4.9,
        } : null}
      />
    </section>
  );
}