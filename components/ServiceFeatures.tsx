'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Tag, Cpu, Headphones, Landmark } from 'lucide-react';

const features = [
  {
    icon: Tag,
    title: 'ROCK BOTTOM PRICES',
    description: 'Premium trips, surprising value.'
  },
  {
    icon: Cpu,
    title: 'TECHNOLOGY',
    description: 'AI-driven trip optimization.'
  },
  {
    icon: Headphones,
    title: 'STELLAR SUPPORT',
    description: '24/7 dedicated concierge.'
  },
  {
    icon: Landmark,
    title: 'FINANCE',
    description: 'Flexible payment solutions.'
  }
];

export default function ServiceFeatures() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {features.map((feature, i) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h4 className="font-black text-lg mb-2 tracking-tight">{feature.title}</h4>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
