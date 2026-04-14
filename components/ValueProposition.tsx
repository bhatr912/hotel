'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';

export default function ValueProposition() {
  return (
    <section className="py-32 px-8 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 text-primary text-xs font-bold tracking-widest uppercase">
            The curator&apos;s choice
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-on-surface">
            PUTTING TRAVEL <br/>IN YOUR HANDS
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
            We believe travel should be seamless, inspiring, and deeply personal. Our platform leverages cutting-edge curation technology to place the world&apos;s most exclusive adventures right at your fingertips. No noise, just pure exploration.
          </p>
          <div className="flex items-center gap-4 text-primary font-bold">
            <BadgeCheck className="w-6 h-6" />
            <span className="tracking-tight">Verified Luxury Standards</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:rotate-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp5cbRhUAWymJNtZRKH2J72DrUjl9KTRLPSXBn679d5H7dBuqQ7N3iu7djKTb8VY7YBfr4H1G0_1YFg0O54poJb-25WKS4f-40oL0iRvUpUvnTLSb_kKb4NwhQx0D3t--Gf1w3LaHhi-uS3zcj2AkLYJHLS3J6vNu2Wq_jKJIAT1l1CvN0MiyVy3TjGMzhRP2vwuFUOue8YAbvzuHI8o-JwVzOk3VCkemv2VKMQAq4s_BZM8SWn9nEir4Im9d4ILDog49EkaC0aFU"
              alt="Stylish traveler looking at a map in a sun-drenched coastal village"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-10 -left-10 glass-card p-8 rounded-[2rem] shadow-xl max-w-xs border border-white/20"
          >
            <p className="text-sm font-medium text-on-surface-variant italic">
              &quot;A paradigm shift in how I plan my annual expeditions. Truly bespoke.&quot;
            </p>
            <p className="mt-4 font-black text-primary">— Julian V.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
