'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Maina Garg",
    role: "Traveler",
    text: "Our kasmir trip that was planned by kasmir port ( through mr. Junned) are exciting and hassel free. We thor-",
    rating: 5
  },
  {
    id: 2,
    name: "sheetal Bhosle",
    role: "Traveler",
    text: "I can confidently say that Kashmir Port Travel Company is one of the best travel agencies in Kashmir. From the",
    rating: 5
  },
  {
    id: 3,
    name: "HETAL SHINGADIA",
    role: "Traveler",
    text: "We planned a trip to Kashmir and Vaishno Devi, and choosing Kashmir Port was truly the best decision we",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section - Matching common pattern */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
            <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">
              Guest Experiences
            </span>
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-on-surface tracking-tight">
            What Our <span className="text-primary italic">Guests Say</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-sm font-medium max-w-lg">
            Real stories from travelers who explored the paradise on earth with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Google Summary Card - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-on-surface-variant/5 flex flex-col items-center justify-center text-center space-y-4 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex flex-col items-center relative z-10">
              {/* Company Logo Placeholder */}
              <div className="mb-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-2 shadow-sm border border-on-surface-variant/5">
                  <span className="text-primary font-black text-xl">KP</span>
                </div>
                <p className="text-[10px] font-black text-on-surface uppercase tracking-widest">Kashmir Port</p>
              </div>

              <div className="flex items-center gap-1 mb-2">
                <span className="text-2xl font-bold text-[#4285F4]">G</span>
                <span className="text-2xl font-bold text-[#EA4335]">o</span>
                <span className="text-2xl font-bold text-[#FBBC05]">o</span>
                <span className="text-2xl font-bold text-[#4285F4]">g</span>
                <span className="text-2xl font-bold text-[#34A853]">l</span>
                <span className="text-2xl font-bold text-[#EA4335]">e</span>
              </div>
              <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Reviews</p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <p className="text-[9px] text-on-surface-variant/60 mt-4 uppercase font-black tracking-widest">4.9 Average Rating</p>
            </div>
          </motion.div>

          {/* Individual Review Cards - Enhanced */}
          {REVIEWS.map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1 }}
              className="bg-white p-7 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-on-surface-variant/5 relative group hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-black text-xs border border-primary/10">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-on-surface font-black text-sm leading-tight group-hover:text-primary transition-colors">{review.name}</h3>
                    <p className="text-on-surface-variant/60 text-[10px] font-bold uppercase tracking-wider mt-0.5">{review.role}</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-surface-container-low flex items-center justify-center shadow-sm">
                  <span className="text-[10px] font-bold text-[#4285F4]">G</span>
                </div>
              </div>

              <div className="flex gap-0.5 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>

              <div className="relative pl-4">
                {/* Blue vertical bar on the left - more premium */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20 rounded-full overflow-hidden">
                  <div className="w-full h-1/2 bg-primary group-hover:h-full transition-all duration-700" />
                </div>
                <p className="text-on-surface-variant text-xs leading-relaxed font-medium line-clamp-4">
                  &quot;{review.text}&quot;
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-on-surface-variant/5 flex items-center justify-between">
                <span className="text-[9px] font-black text-on-surface-variant/40 uppercase tracking-widest">Verified Review</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
