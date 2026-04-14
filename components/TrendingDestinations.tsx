'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DESTINATIONS } from '@/lib/data';

export default function TrendingDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations" className="py-20 bg-surface-container-lowest scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
            <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">
              Explore the Valley
            </span>
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-on-surface tracking-tight">
            Trending <span className="text-primary italic">Destinations</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-sm font-medium max-w-lg">
            Immerse yourself in the vibrant culture of Trending Destination. Discover hidden gems, delectable cuisine, and unforgettable experiences.
          </p>
        </div>

        {/* Destinations List with Side Navigation */}
        <div className="relative group/container">
          {/* Navigation Buttons - Side Positioned */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-4 rounded-full bg-white shadow-2xl border border-on-surface/5 text-on-surface hover:bg-primary hover:text-white transition-all duration-300 active:scale-90 opacity-0 group-hover/container:opacity-100 hidden md:flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-4 rounded-full bg-white shadow-2xl border border-on-surface/5 text-on-surface hover:bg-primary hover:text-white transition-all duration-300 active:scale-90 opacity-0 group-hover/container:opacity-100 hidden md:flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-8 overflow-x-auto pt-6 pb-4 no-scrollbar snap-x snap-mandatory"
          >
            {DESTINATIONS.map((dest) => (
              <Link 
                key={dest.id}
                href={`/packages?destination=${encodeURIComponent(dest.name)}&from=destinations`}
                className="flex-shrink-0 flex flex-col items-center gap-4 snap-start group"
              >
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center gap-4"
                >
                  {/* Circular Image Container */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-4 border-white group-hover:border-primary transition-colors duration-500">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                  
                  <h3 className="text-sm md:text-lg font-black text-on-surface tracking-tight group-hover:text-primary transition-colors">
                    {dest.name}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
