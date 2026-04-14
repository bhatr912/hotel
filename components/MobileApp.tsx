'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Smartphone, AppWindow } from 'lucide-react';

export default function MobileApp() {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Phone Mockup */}
          <div className="w-[300px] h-[600px] bg-on-surface rounded-[3.5rem] p-3 mx-auto shadow-2xl relative border-[8px] border-on-surface">
            <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIP5CNUBQVqeJeTX9YGhMxx5w23qz98TXovDZU-Cs0xwLvrU6hBTpdzDCboSNm3m2Vw43u0F3vxdcfoZ2LSWR0wsR8blf0IKLjdIrhLW3DqR6uJoJVfU4IOjJmxZWqMQyiieFgmkp9wba1uygo8TOVUbLe3R7T_JSmISFg4gcA-k9_UsUwusEdvAkCb6xKLx6QN9hGjj3duREYkNXNmLlMNxLSiW1ml9LOS-hzRG4M4Z15w5KAmommdhWxMYTx95YQMsUiZkmWDnM"
                alt="Mobile app UI showing luxury villa search"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-on-surface rounded-b-3xl" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:pl-20"
        >
          <h2 className="text-5xl font-black tracking-tighter leading-tight mb-8">
            DOWNLOAD <br/>MOBILE APP
          </h2>
          <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">
            Take the curator with you. Get real-time alerts on deals, manage your itinerary offline, and access 24/7 support with one tap.
          </p>
          <div className="flex flex-wrap gap-6">
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-on-surface text-white flex items-center gap-4 px-8 py-4 rounded-3xl hover:bg-primary transition-colors duration-300 shadow-lg"
            >
              <Smartphone className="w-8 h-8" />
              <div>
                <p className="text-[10px] uppercase font-bold opacity-70">Download on</p>
                <p className="text-lg font-black">App Store</p>
              </div>
            </motion.a>
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-on-surface text-white flex items-center gap-4 px-8 py-4 rounded-3xl hover:bg-primary transition-colors duration-300 shadow-lg"
            >
              <AppWindow className="w-8 h-8" />
              <div>
                <p className="text-[10px] uppercase font-bold opacity-70">Get it on</p>
                <p className="text-lg font-black">Google Play</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
