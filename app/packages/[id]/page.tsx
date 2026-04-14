'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import Image from 'next/image';
import { 
  Star, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  ChevronLeft, 
  Share2, 
  Heart,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { PACKAGES } from '@/lib/data';

export default function PackageDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);

  const pkg = PACKAGES.find(p => p.id === id);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-serif text-on-surface mb-4">Package Not Found</h1>
        <button 
          onClick={() => router.push('/packages')}
          className="bg-primary text-white px-8 py-3 rounded-2xl font-black uppercase tracking-widest"
        >
          Back to Packages
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] w-full">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => router.back()}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-primary transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  {pkg.category}
                </div>
              </div>

              <h1 className="text-4xl lg:text-7xl font-serif text-white tracking-tight max-w-4xl">
                {pkg.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-bold uppercase tracking-wider text-sm">{pkg.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-bold uppercase tracking-wider text-sm">{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-black text-lg">{pkg.rating}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-on-surface">Overview</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed font-medium">
                {pkg.description}
              </p>
            </div>

            {/* Itinerary */}
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-on-surface">Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary?.map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-surface-container-low border border-on-surface-variant/10 flex items-center justify-center font-black text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        {item.day}
                      </div>
                      {idx !== pkg.itinerary!.length - 1 && (
                        <div className="w-px h-full bg-on-surface-variant/10 my-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-black text-on-surface mb-2">{item.title}</h3>
                      <p className="text-on-surface-variant font-medium leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-on-surface flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Inclusions
                </h3>
                <ul className="space-y-4">
                  {pkg.inclusions?.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-on-surface-variant font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-on-surface flex items-center gap-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  Exclusions
                </h3>
                <ul className="space-y-4">
                  {pkg.exclusions?.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-on-surface-variant font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Booking Card */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-on-surface-variant/5 space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-on-surface-variant/40 uppercase tracking-widest line-through">
                      {pkg.originalPrice}
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {pkg.discount}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-primary">{pkg.price}</span>
                    <span className="text-sm font-medium text-on-surface-variant/60 uppercase">/ Person</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest border border-on-surface-variant/5">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-widest">Duration</p>
                      <p className="text-sm font-black text-on-surface">{pkg.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest border border-on-surface-variant/5">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-widest">Safe & Secure</p>
                      <p className="text-sm font-black text-on-surface">Verified Operators</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest border border-on-surface-variant/5">
                    <Zap className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-widest">Instant Booking</p>
                      <p className="text-sm font-black text-on-surface">Confirmation in 24h</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-on-surface transition-all active:scale-95 shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                  Book This Package
                </button>

                <div className="flex items-center justify-center gap-6 pt-4">
                  <button className="flex items-center gap-2 text-[10px] font-black text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button className="flex items-center gap-2 text-[10px] font-black text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors">
                    <Heart className="w-4 h-4" />
                    Save
                  </button>
                </div>
              </div>

              {/* Need Help Card */}
              <div className="bg-primary rounded-[2.5rem] p-8 text-white space-y-4">
                <h4 className="text-xl font-black">Need Help?</h4>
                <p className="text-white/80 font-medium text-sm">
                  Our travel experts are available 24/7 to help you plan your perfect trip.
                </p>
                <button className="w-full bg-white text-primary py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-on-surface hover:text-white transition-all text-xs">
                  Contact Support
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
