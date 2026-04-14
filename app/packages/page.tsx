'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Star, Clock, MapPin, Filter, X, ChevronRight } from 'lucide-react';
import { PACKAGES, DESTINATIONS, CATEGORIES } from '@/lib/data';

function PackagesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const selectedDestination = searchParams.get('destination') || 'All';
  const selectedCategory = searchParams.get('category') || 'All';

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredPackages = PACKAGES.filter(pkg => {
    const destMatch = selectedDestination === 'All' || pkg.destination === selectedDestination;
    const catMatch = selectedCategory === 'All' || pkg.category === selectedCategory;
    return destMatch && catMatch;
  });

  const updateFilters = (dest: string, cat: string) => {
    const params = new URLSearchParams();
    if (dest !== 'All') params.set('destination', dest);
    if (cat !== 'All') params.set('category', cat);
    router.push(`/packages?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-surface-container-lowest border-b border-on-surface-variant/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-primary/30" />
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
                  Explore Our Collection
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif text-on-surface tracking-tight">
                All <span className="text-primary italic">Packages</span>
              </h1>
            </div>
            
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white px-6 py-3 rounded-2xl shadow-sm border border-on-surface-variant/5 font-black text-xs uppercase tracking-widest text-primary"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-10">
            <div>
              <h3 className="text-sm font-black text-on-surface uppercase tracking-widest mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Destinations
              </h3>
              <div className="space-y-2">
                {['All', ...DESTINATIONS.map(d => d.name)].map(destName => (
                  <button
                    key={destName}
                    onClick={() => updateFilters(destName, selectedCategory)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      selectedDestination === destName 
                        ? 'bg-primary text-white shadow-md shadow-primary/20' 
                        : 'text-on-surface-variant hover:bg-surface-container-low'
                    }`}
                  >
                    {destName}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-on-surface uppercase tracking-widest mb-6 flex items-center gap-2">
                <Filter className="w-4 h-4 text-primary" />
                Categories
              </h3>
              <div className="space-y-2">
                {['All', ...CATEGORIES.map(c => c.name)].map(catName => (
                  <button
                    key={catName}
                    onClick={() => updateFilters(selectedDestination, catName)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === catName 
                        ? 'bg-primary text-white shadow-md shadow-primary/20' 
                        : 'text-on-surface-variant hover:bg-surface-container-low'
                    }`}
                  >
                    {catName}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Packages Grid */}
          <div className="flex-1">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-sm font-medium text-on-surface-variant">
                Showing <span className="text-on-surface font-black">{filteredPackages.length}</span> packages
              </p>
              {(selectedDestination !== 'All' || selectedCategory !== 'All') && (
                <button 
                  onClick={() => updateFilters('All', 'All')}
                  className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>

            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredPackages.map((pkg) => (
                    <motion.div
                      key={pkg.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-on-surface-variant/5 group hover:shadow-xl transition-all duration-500"
                    >
                      {/* Image Container */}
                      <div className="relative h-[220px] w-full overflow-hidden">
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                          {pkg.discount}
                        </div>
                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                          <Star className="w-3 h-3 fill-cyan-vibrant text-cyan-vibrant" />
                          <span className="text-xs font-black text-on-surface">{pkg.rating}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-7 space-y-5">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
                            <span>{pkg.category}</span>
                            <span className="w-1 h-1 rounded-full bg-primary/30" />
                            <span>{pkg.destination}</span>
                          </div>
                          <h3 className="text-xl font-black text-on-surface leading-tight group-hover:text-primary transition-colors line-clamp-2">
                            {pkg.title}
                          </h3>
                          <div className="flex items-center gap-2 text-on-surface-variant/60">
                            <MapPin className="w-3 h-3" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">{pkg.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-on-surface-variant/60">
                          <Clock className="w-4 h-4" />
                          <span className="text-xs font-medium">{pkg.duration}</span>
                        </div>

                        <div className="h-px bg-on-surface-variant/10 w-full" />

                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest line-through">
                              {pkg.originalPrice}
                            </p>
                            <p className="text-2xl font-black text-primary">
                              {pkg.price}
                              <span className="text-[10px] font-medium text-on-surface-variant/60 ml-1 uppercase">/ Person</span>
                            </p>
                          </div>
                          <Link 
                            href={`/packages/${pkg.id}`}
                            className="bg-primary text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-on-surface transition-all active:scale-95 shadow-lg shadow-primary/20"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="py-20 text-center">
                <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-6">
                  <X className="w-10 h-10 text-on-surface-variant/30" />
                </div>
                <h3 className="text-2xl font-black text-on-surface mb-2">No Packages Found</h3>
                <p className="text-on-surface-variant font-medium">Try adjusting your filters to find what you&apos;re looking for.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] lg:hidden p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-black text-on-surface">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-sm font-black text-on-surface uppercase tracking-widest mb-6">Destinations</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['All', ...DESTINATIONS.map(d => d.name)].map(destName => (
                      <button
                        key={destName}
                        onClick={() => {
                          updateFilters(destName, selectedCategory);
                          setIsFilterOpen(false);
                        }}
                        className={`px-4 py-3 rounded-xl text-xs font-black transition-all border ${
                          selectedDestination === destName 
                            ? 'bg-primary text-white border-primary shadow-md shadow-primary/20' 
                            : 'text-on-surface-variant border-on-surface-variant/10'
                        }`}
                      >
                        {destName}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-black text-on-surface uppercase tracking-widest mb-6">Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['All', ...CATEGORIES.map(c => c.name)].map(catName => (
                      <button
                        key={catName}
                        onClick={() => {
                          updateFilters(selectedDestination, catName);
                          setIsFilterOpen(false);
                        }}
                        className={`px-4 py-3 rounded-xl text-xs font-black transition-all border ${
                          selectedCategory === catName 
                            ? 'bg-primary text-white border-primary shadow-md shadow-primary/20' 
                            : 'text-on-surface-variant border-on-surface-variant/10'
                        }`}
                      >
                        {catName}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

export default function PackagesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface flex items-center justify-center"><div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
      <PackagesContent />
    </Suspense>
  );
}
