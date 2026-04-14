'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    bgImage: "https://images.unsplash.com/photo-1567601169793-64703dc5324a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "GULMARG\nTHE MEADOW\nOF FLOWERS.",
    subtitle: "Experience the winter wonderland of Asia. From world-class skiing to the highest gondola rides, adventure awaits in every snowflake.",
    cardTitle: "Gulmarg Alpine Resort",
    cardDescription: "A luxurious sanctuary nestled amidst the snow-capped peaks of the Pir Panjal range.",
    rating: 4.9,
    location: "Baramulla, Kashmir",
    price: "$299",
    tag: "Adventure"
  },
  {
    id: 2,
    bgImage: "https://images.unsplash.com/photo-1590695127027-3134fb332c9d?q=80&w=2070&auto=format&fit=crop",
    title: "PAHALGAM\nVALLEY OF\nSHEPHERDS.",
    subtitle: "Walk through the lush green meadows and pine forests where the Lidder river sings. A true heaven for nature lovers.",
    cardTitle: "Lidder Valley Retreat",
    cardDescription: "Experience traditional Kashmiri hospitality with a modern touch of luxury by the riverside.",
    rating: 4.8,
    location: "Anantnag, Kashmir",
    price: "$249",
    tag: "Nature"
  },
  {
    id: 3,
    bgImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop",
    title: "DAL LAKE\nJEWEL IN THE\nCROWN.",
    subtitle: "Stay in a floating palace and wake up to the gentle ripples of the water. Experience the timeless charm of Srinagar.",
    cardTitle: "Royal Houseboat Palace",
    cardDescription: "Intricately carved cedar wood houseboats offering a unique and regal stay on the water.",
    rating: 5.0,
    location: "Srinagar, Kashmir",
    price: "$399",
    tag: "Heritage"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.bgImage}
            alt={slide.title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-brightness-90"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-12 items-center pt-32 pb-20">
        {/* Left Content */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[1] tracking-tighter drop-shadow-2xl whitespace-pre-line">
                {slide.title}
              </h1>
              
              <p className="text-white text-lg md:text-xl max-w-lg leading-relaxed font-medium drop-shadow-md">
                {slide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-white text-primary px-10 py-4 rounded-full font-black text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300 shadow-2xl active:scale-95 cursor-pointer">
              Explore Destinations
            </button>
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex gap-3 pt-12">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  i === currentSlide ? 'w-12 bg-white' : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Content - Clean Info Card with Destination Details */}
        <div className="relative w-full flex justify-center lg:justify-end items-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={slide.id}
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -50 }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 40px 80px -15px rgba(0,0,0,0.4)" 
              }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-xl p-6 lg:p-8 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] w-full max-w-md border border-white/20 cursor-pointer group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📍</span>
                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{slide.tag}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <span className="text-[10px] font-black text-primary">{slide.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-2xl font-black text-on-surface tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {slide.cardTitle}
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed text-xs font-medium">
                    {slide.location}
                  </p>
                </div>

                <div className="h-px bg-on-surface-variant/10 w-full" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[8px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Starting from</p>
                    <p className="text-xl font-black text-primary">{slide.price}<span className="text-[10px] font-medium text-on-surface-variant/60 ml-1">/ NIGHT</span></p>
                  </div>
                  <button className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95 cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

