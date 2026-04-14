'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function CruiseDeals() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-0 rounded-[4rem] overflow-hidden bg-surface-container shadow-2xl">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-16 flex flex-col justify-center"
        >
          <h2 className="text-5xl font-black tracking-tighter leading-tight mb-8">
            OUR CRUISE DEALS? <br/>
            <span className="text-primary italic">UNMATCHED.</span>
          </h2>
          <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
            Set sail on the world&apos;s most luxurious ocean liners. From private balconies to Michelin-star dining at sea, our cruise partnerships offer exclusive access you won&apos;t find anywhere else.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg hover:scale-105 active:scale-95">
              EXPLORE CRUISES
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all hover:scale-105 active:scale-95">
              GET BROCHURE
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[500px]"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyS8VvkVIh3tzgB7RJGmQNU7ROVKnUDPFirzS4FNzRViDtR-rwCpYFzN1lhYWTF6p0pVPVPdY6uZP-KUpLKc1Novi5hOlQais1oDplr8ZKOCL8FBxPt3sapDPDipl5SuQdHBVwWkHrQlNSm_b2Sb0ONX66P1A9kNzhbFAqjjclQoG3MAXQy3Bu7sFe1zq1DEpZ8RHhBINR94Rtg4nRDGK-i9Et4GB8CzAcSD8gxgiRdt7zu_6iGIf_XVEwGpvb7BDl6BJDYs0jboQ"
            alt="Luxury cruise ship sailing across turquoise ocean"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <motion.div 
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 12 }}
            className="absolute top-8 right-8 bg-white/90 backdrop-blur p-6 rounded-full shadow-lg text-center"
          >
            <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Last Minute Deal</p>
            <p className="text-2xl font-black">SAVE 40%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
