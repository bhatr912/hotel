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
          src="https://images.unsplash.com/photo-1623684003870-fca853da2d21?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful Kashmir Background"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center pt-32 pb-20">
        
        {/* Left Content */}
        <div className="space-y-8">
          
          {/* Limited Time Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-5 py-2 border border-white/30 shadow-sm"
          >
            <span>🔥</span>
            <span className="text-white text-xs md:text-sm font-bold tracking-wide">
              Limited Time Offer: Save upto 45% on All Tour Packages Today!
            </span>
          </motion.div>

          {/* Main Typography - Font sizes decreased here */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h5 className="text-4xl md:text-5xl font-black text-white leading-[1.2] drop-shadow-xl">
              <span className="whitespace-nowrap">Best Kashmir Tour Package</span><br />
              Book Your Dream Tour<br />
              <span className="whitespace-nowrap">4N/5D Starting ₹12,500 only</span>
            </h5>
            
            <p className="text-white text-base md:text-lg font-medium drop-shadow-md max-w-xl">
              Best Kashmir Tour Package with Meal, Hotels, Taxi & Sightseeing. <span className="font-bold">Best Price Guaranteed!</span>
            </p>
          </motion.div>

          {/* Features Grid - Added Lucide Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 pt-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-white font-medium text-sm md:text-base"><strong className="font-bold">Local</strong> Tour Operator</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
              <span className="text-white font-medium text-sm md:text-base"><strong className="font-bold">Affordable</strong> Holiday Packages</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <span className="text-white font-medium text-sm md:text-base"><strong className="font-bold">25k+</strong> Happy Travelers</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                <Headset className="w-5 h-5 text-primary" />
              </div>
              <span className="text-white font-medium text-sm md:text-base"><strong className="font-bold">24/7</strong> Customer Assistance</span>
            </div>
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
            <span className="text-white font-bold text-sm md:text-base tracking-wide">4.6/5 (30.6K+ Reviews)</span>
            <svg viewBox="0 0 24 24" className="w-7 h-7 ml-1">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </motion.div>
        </div>

        {/* Right Content - Contact Form */}
        <div className="relative w-full flex justify-center lg:justify-end">
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