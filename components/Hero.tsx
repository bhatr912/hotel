'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Star, MapPin, Wallet, Users, Headset } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1680701529599-1a9c712fd9b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful Kashmir Background"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-24 pb-12 sm:pt-32 sm:pb-20">

        {/* Left Content */}
        <div className="space-y-8">

          {/* Limited Time Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full pl-2 pr-6 py-2 border border-white/20 shadow-sm"
          >
            <div className="bg-primary px-3 py-1 rounded-full">
              <span className="text-white text-[10px] font-black uppercase tracking-wider">Offer</span>
            </div>
            <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.25em]">
              Save upto 30% on All Packages
            </span>
          </motion.div>

          {/* Main Typography - Font sizes decreased here */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              Top <span className="text-blue-300 italic">Kashmir</span> Tour Package<br />
              Reserve Your <span className="text-blue-300">Perfect Trip</span><br />
              <span className="text-lg sm:text-xl md:text-2xl font-sans font-medium tracking-normal text-white/90">
                4N/5D Starting <span className="text-blue-300">₹12,500</span> only
              </span>
            </h1>

            <p className="text-white/80 text-sm md:text-base font-medium drop-shadow-md max-w-lg leading-relaxed">
Discover the beauty of the valley with our specially curated tours, now at the best price assurance!
            </p>
          </motion.div>

          {/* Features Grid - Added Lucide Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 pt-4"
          >
            {[
              { icon: MapPin, text: "Local", sub: "Tour Operator" },
              { icon: Wallet, text: "Affordable", sub: "Holiday Packages" },
              { icon: Users, text: "25k+", sub: "Happy Travelers" },
              { icon: Headset, text: "24/7", sub: "Customer Assistance" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-md group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-serif text-base leading-tight">{item.text}</span>
                  <span className="text-white/60 text-xs font-medium uppercase tracking-wider">{item.sub}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Google Reviews */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-3 pt-6"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold text-[10px] xs:text-xs sm:text-sm md:text-sm tracking-wide">4.5/5 (147+ Reviews)</span>
            <svg viewBox="0 0 24 24" className="w-7 h-7 ml-1">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          </motion.div>
        </div>

        {/* Right Content - Contact Form */}
        <div className="relative w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[480px] rounded-[1.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)]"
          >
            <ContactForm compact={true} />
          </motion.div>
        </div>

      </div>
    </section>
  );
}