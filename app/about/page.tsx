'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import BookingDialog from '@/components/BookingDialog';
import Image from 'next/image';



export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Hero Section - Matching common pattern */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 lg:w-12 bg-primary/30" />
              <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">
                Our Journey
              </span>
              <div className="h-px w-8 lg:w-12 bg-primary/30" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-on-surface tracking-tight">
              About <span className="text-primary italic">Kashmir Port</span>
            </h1>
            <p className="mt-6 text-on-surface-variant text-[13px] md:text-sm font-medium max-w-2xl">
              Welcome to Kashmir Port! We are dedicated to providing you with the most authentic and memorable travel experiences in the valley.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side: Styled Graphic - Updated to Project Colors */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary-container p-12 flex flex-col justify-between shadow-2xl">
                <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">100% Customised Package</span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-7xl lg:text-8xl font-headline font-black text-white leading-[0.8] mb-4">
                    WHO<br />
                    <span className="text-white/40 italic">WE</span> ARE
                  </h3>
                  <div className="max-w-[280px] p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-white text-xs font-medium leading-relaxed">
                      We provide the best customised tour packages for Kashmir and Ladakh, catering to all our customers with a focus on affordability and a 100% satisfaction guarantee.
                    </p>
                  </div>
                </div>

                {/* Decorative Image Overlay */}
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 pointer-events-none opacity-90">
                  <Image
                    src="https://picsum.photos/seed/traveler-about/600/600"
                    alt="Traveler"
                    width={600}
                    height={600}
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
              {/* Background Decorative Shape - Updated to Primary */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
            </motion.div>

            {/* Right Side: Text Content - Updated to Project Colors */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                
                <div className="space-y-4 text-on-surface-variant font-medium leading-relaxed">
                  <p className="text-base text-primary font-black uppercase tracking-widest">Welcome to Kashmir Port!</p>
                  <p className="text-sm">
                    At Kashmir Port, we believe travel is not only about visiting a place — it&apos;s about feeling its soul, living its stories, and returning with memories that stay etched in your heart. Every experience we create is thoughtfully curated to turn your dream of exploring Kashmir into a journey you&apos;ll treasure forever.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-headline font-black text-on-surface flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full" />
                  Our Mission
                </h4>
                <p className="text-on-surface-variant font-medium leading-relaxed text-sm">
                  Creating Experiences Beyond Travel. Our vision is simple yet meaningful — to deliver smooth, personalized, and truly memorable travel experiences. Whether you desire a calm escape amidst nature, an adventure in the mountains, or a deep dive into Kashmir&apos;s culture and heritage, we design each trip around your comfort, interests, and budget.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-headline font-black text-on-surface flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary-container rounded-full" />
                  Who We Are
                </h4>
                <p className="text-on-surface-variant font-medium leading-relaxed text-sm">
                  Your Local & Trusted Travel Partner. Kashmir Port is more than a travel company — we are your trusted local partner in Kashmir. With on-ground expertise and a passionate team of travel professionals, we manage every detail from planning to execution, ensuring a stress-free, authentic, and unforgettable journey.
                </p>
              </div>

              <button 
                onClick={() => setIsBookingOpen(true)}
                className="px-10 py-4 bg-primary hover:bg-primary/90 text-white font-black rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] uppercase tracking-widest text-sm cursor-pointer"
              >
                Get Offer Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />



      <Footer />
    </main>
  );
}
