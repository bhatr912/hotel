'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Users, Mountain, Gem, Wallet, Globe, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '@/lib/data';

export default function CategoryPackages() {
  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
            <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">
              Browse by Interest
            </span>
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-on-surface tracking-tight">
            Explore by <span className="text-primary italic">Category</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-sm font-medium max-w-lg">
            Find the perfect travel style that matches your dream vacation in the paradise on earth.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-8 lg:gap-y-12">
          {CATEGORIES.map((cat, index) => {
            const isImageTop = index % 2 === 0;
            return (
              <Link 
                key={cat.id}
                href={`/packages?category=${encodeURIComponent(cat.name)}`}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[60px] lg:rounded-[100px] p-4 lg:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-on-surface-variant/5 flex flex-col items-center text-center transition-all duration-500 h-full"
                >
                  {isImageTop ? (
                    <>
                      {/* Image at Top */}
                      <div className="relative w-24 h-24 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-4 lg:mb-8 border-2 lg:border-4 border-white shadow-lg">
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="space-y-2 lg:space-y-4 flex-grow flex flex-col justify-center">
                        <h3 className="text-sm lg:text-xl font-black text-on-surface group-hover:text-primary transition-colors leading-tight">
                          {cat.name}
                        </h3>
                        <p className="text-on-surface-variant text-[10px] lg:text-xs leading-relaxed font-medium px-1 lg:px-4 line-clamp-2">
                          {cat.description}
                        </p>
                        <p className="text-base lg:text-2xl font-black text-primary pt-1 lg:pt-2">
                          {cat.price}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Text at Top */}
                      <div className="space-y-2 lg:space-y-4 flex-grow flex flex-col justify-center mb-4 lg:mb-8">
                        <h3 className="text-sm lg:text-xl font-black text-on-surface group-hover:text-primary transition-colors leading-tight">
                          {cat.name}
                        </h3>
                        <p className="text-on-surface-variant text-[10px] lg:text-xs leading-relaxed font-medium px-1 lg:px-4 line-clamp-2">
                          {cat.description}
                        </p>
                        <p className="text-base lg:text-2xl font-black text-primary pt-1 lg:pt-2">
                          {cat.price}
                        </p>
                      </div>
                      <div className="relative w-24 h-24 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 lg:border-4 border-white shadow-lg">
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </>
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
