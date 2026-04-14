'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight, MapPin } from 'lucide-react';

const destinations = [
  {
    name: 'Srinagar',
    image: 'https://picsum.photos/seed/srinagar_trend/800/600',
    rating: 4.9,
    description: 'The summer capital, famous for its iconic Dal Lake, houseboats, and vibrant Mughal gardens.',
    price: '₹12,999'
  },
  {
    name: 'Gulmarg',
    image: 'https://picsum.photos/seed/gulmarg_trend/800/600',
    rating: 5,
    description: 'A winter wonderland and a summer meadow, home to one of the world\'s highest gondolas.',
    price: '₹18,500'
  },
  {
    name: 'Pahalgam',
    image: 'https://picsum.photos/seed/pahalgam_trend/800/600',
    rating: 4.8,
    description: 'The valley of shepherds, offering pristine rivers, lush forests, and breathtaking mountain views.',
    price: '₹15,000'
  }
];

export default function TrendingEscapes() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
            <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">
              Handpicked for You
            </span>
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-on-surface tracking-tight">
            The Curator&apos;s <span className="text-primary italic">Choice</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-sm font-medium max-w-lg">
            Our most requested destinations this season, carefully selected for an unforgettable journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {destinations.map((dest, i) => (
            <motion.div 
              key={dest.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row h-full md:h-64 border border-on-surface-variant/5"
            >
              {/* Image Section - Wide but small height in horizontal view */}
              <div className="relative w-full md:w-2/5 h-64 md:h-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <span className="text-xs font-black text-on-surface">{dest.rating}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>Kashmir</span>
                  </div>
                  <h3 className="text-2xl font-black text-on-surface mb-3 group-hover:text-primary transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-on-surface-variant text-sm font-medium line-clamp-2 max-w-xl">
                    {dest.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Starting From</p>
                    <p className="text-2xl font-black text-primary">{dest.price}</p>
                  </div>
                  <Link 
                    href={`/packages?destination=${encodeURIComponent(dest.name)}`}
                    className="flex items-center gap-3 bg-surface-container-low text-on-surface px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all group/btn"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
