'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Star, Clock, MapPin, Filter, X, ChevronRight, ChevronLeft, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { PACKAGES, DESTINATIONS, CATEGORIES } from '@/lib/data';
import PackageCard from '@/components/PackageCard';

function PackagesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedDestination = searchParams.get('destination') || 'All';
  const selectedCategory = searchParams.get('category') || 'All';

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

  const fromDestinations = searchParams.get('from') === 'destinations';

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Breadcrumb Section */}
      <section className="pt-28 pb-8 bg-surface-container-lowest border-b border-on-surface-variant/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <nav className="flex items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap">
              <Link href="/" className="text-on-surface-variant/50 hover:text-primary transition-colors text-xs font-bold tracking-wide">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-on-surface-variant/20 shrink-0" />
              {fromDestinations && selectedDestination !== 'All' ? (
                <>
                  <Link href="/#destinations" className="text-on-surface-variant/50 hover:text-primary transition-colors text-xs font-bold tracking-wide">
                    Destinations
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-on-surface-variant/20 shrink-0" />
                  <span className="text-xs font-bold tracking-wide text-primary">{selectedDestination}</span>
                </>
              ) : (
                <>
                  <Link href="/packages" className={`text-xs font-bold tracking-wide transition-colors ${selectedDestination === 'All' && selectedCategory === 'All' ? 'text-primary' : 'text-on-surface-variant/50 hover:text-primary'}`}>
                    Packages
                  </Link>
                  {selectedDestination !== 'All' && (
                    <>
                      <ChevronRight className="w-3.5 h-3.5 text-on-surface-variant/20 shrink-0" />
                      <span className={`text-xs font-bold tracking-wide ${selectedCategory === 'All' ? 'text-primary' : 'text-on-surface-variant/50'}`}>{selectedDestination}</span>
                    </>
                  )}
                  {selectedCategory !== 'All' && (
                    <>
                      <ChevronRight className="w-3.5 h-3.5 text-on-surface-variant/20 shrink-0" />
                      <span className="text-xs font-bold tracking-wide text-primary">{selectedCategory}</span>
                    </>
                  )}
                </>
              )}
            </nav>

            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl shadow-sm border border-on-surface-variant/5 font-black text-[10px] uppercase tracking-widest text-primary shrink-0"
            >
              <Filter className="w-3.5 h-3.5" />
              Filters
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Sidebar Filters - Desktop */}
          <AnimatePresence mode="wait">
            {isSidebarOpen && (
              <motion.aside
                initial={{ width: 0, opacity: 0, x: -20 }}
                animate={{ width: 256, opacity: 1, x: 0 }}
                exit={{ width: 0, opacity: 0, x: -20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="hidden lg:block shrink-0 space-y-10 overflow-hidden"
              >
                <div className="w-64">
                  <div className="mb-10">
                    <h3 className="text-sm font-black text-on-surface uppercase tracking-widest mb-6 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Destinations
                    </h3>
                    <div className="space-y-2">
                      {['All', ...DESTINATIONS.map(d => d.name)].map(destName => (
                        <button
                          key={destName}
                          onClick={() => updateFilters(destName, selectedCategory)}
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${selectedDestination === destName
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
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${selectedCategory === catName
                            ? 'bg-primary text-white shadow-md shadow-primary/20'
                            : 'text-on-surface-variant hover:bg-surface-container-low'
                            }`}
                        >
                          {catName}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Packages Grid */}
          <div className="flex-1">
            <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="hidden lg:flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-on-surface-variant/5 font-black text-[10px] uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all group cursor-pointer"
              >
                {isSidebarOpen ? (
                  <>
                    <PanelLeftClose className="w-3.5 h-3.5" />
                    Hide Filters
                  </>
                ) : (
                  <>
                    <PanelLeftOpen className="w-3.5 h-3.5" />
                    Show Filters
                  </>
                )}
              </button>
              <p className="text-sm font-medium text-on-surface-variant">
                Showing <span className="text-on-surface font-black">{filteredPackages.length}</span> packages
              </p>
            </div>
              {(selectedDestination !== 'All' || selectedCategory !== 'All') && (
                <button
                  onClick={() => updateFilters('All', 'All')}
                  className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline cursor-pointer"
                >
                  Clear All Filters
                </button>
              )}
            </div>

            {filteredPackages.length > 0 ? (
              <div className={`grid gap-8 ${isSidebarOpen
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}>
                <AnimatePresence mode="popLayout">
                  {filteredPackages.map((pkg) => (
                    <PackageCard
                      key={pkg.id}
                      pkg={pkg}
                      variant="grid"
                    />
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
                        className={`px-4 py-3 rounded-xl text-xs font-black transition-all border cursor-pointer ${selectedDestination === destName
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
                        className={`px-4 py-3 rounded-xl text-xs font-black transition-all border cursor-pointer ${selectedCategory === catName
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
