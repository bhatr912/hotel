'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Headphones, Users, BadgePercent } from 'lucide-react';

const FEATURES = [
  {
    id: 1,
    title: "Best Price Guarantee",
    description: "Affordable price or it's on us — with an extra 10% off.",
    icon: <BadgePercent className="w-8 h-8 text-orange-500" />,
    bgColor: "bg-orange-50"
  },
  {
    id: 2,
    title: "100% Safe Booking",
    description: "Secure payments. Verified partners. Worry-free travel.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
    bgColor: "bg-blue-50"
  },
  {
    id: 3,
    title: "25K+ Happy Travelers",
    description: "Customers trust us for their dream vacations.",
    icon: <Users className="w-8 h-8 text-green-500" />,
    bgColor: "bg-green-50"
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Dedicated travel assistance for your hassle-free journey.",
    icon: <Headphones className="w-8 h-8 text-purple-500" />,
    bgColor: "bg-purple-50"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
            <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">
              Our Excellence
            </span>
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-on-surface tracking-tight">
            Why <span className="text-primary italic">Pick Us?</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-sm font-medium max-w-lg">
            Our Experts Go An Extra Mile to Make Your Tour Package Truly Unforgettable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] border border-on-surface-variant/5 flex flex-col items-center text-center group transition-all duration-300"
            >
              <div className={`${feature.bgColor} p-5 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-black text-on-surface mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-on-surface-variant text-xs leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
