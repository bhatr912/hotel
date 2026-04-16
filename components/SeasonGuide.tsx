'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Flower2, Sun, Leaf, Snowflake } from 'lucide-react';
import BookingDialog from './BookingDialog';

const SEASONS = [
  {
    name: "Spring",
    icon: <Flower2 className="w-5 h-5 text-green-600" />,
    dates: "March 15th – May 15th",
    description: "Best time to visit Kashmir if you love flowers. Tulip Garden, Badamwari, snow-clad mountains, cool breeze, and charming weather.",
    bgColor: "bg-green-50/50",
    labelColor: "bg-green-100 text-green-700"
  },
  {
    name: "Summer",
    icon: <Sun className="w-5 h-5 text-orange-500" />,
    dates: "May 15th – August 31st",
    description: "Best time if you love camping by riverside, warm temperatures, and trekking to glaciers.",
    bgColor: "bg-orange-50/50",
    labelColor: "bg-orange-100 text-orange-700"
  },
  {
    name: "Autumn",
    icon: <Leaf className="w-5 h-5 text-amber-600" />,
    dates: "September 1st – November 15th",
    description: "The season of fall (harvest season). See red apples in orchards and enjoy local organic produce like walnuts, almonds, and more.",
    bgColor: "bg-amber-50/50",
    labelColor: "bg-amber-100 text-amber-700"
  },
  {
    name: "Winter",
    icon: <Snowflake className="w-5 h-5 text-blue-500" />,
    dates: "December – February (peak snow)",
    description: "Skiing in Gulmarg, heli-skiing, romantic trips, cold weather, snow, snowflakes — winter magic all around.",
    bgColor: "bg-blue-50/50",
    labelColor: "bg-blue-100 text-blue-700"
  }
];

export default function SeasonGuide() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
            <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">
              Plan Your Visit
            </span>
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-on-surface tracking-tight">
            Ideal Time to <span className="text-primary italic">Explore Kashmir</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-sm font-medium max-w-lg">
         Pick your perfect vibe — blooms, hikes, harvest scenes, or snowy thrills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {SEASONS.map((season, index) => (
            <motion.div
              key={season.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${season.bgColor} p-6 rounded-[2rem] border border-on-surface-variant/5 hover:shadow-lg transition-all duration-300 group flex flex-col`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`${season.labelColor} px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest`}>
                  {season.name}
                </span>
                <div className="p-2 rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform">
                  {season.icon}
                </div>
              </div>
              
              <h3 className="text-sm font-black text-on-surface mb-2 flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-primary" />
                {season.dates}
              </h3>
              
              <p className="text-on-surface-variant leading-relaxed text-[11px] font-medium">
                {season.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => setIsDialogOpen(true)}
            className="bg-primary text-white px-12 py-5 rounded-full font-black text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-300 shadow-2xl shadow-primary/20 active:scale-95 cursor-pointer"
          >
            Plan My Kashmir Trip
          </button>
        </div>
      </div>

      <BookingDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        packageData={{
          title: "Custom Kashmir Trip Plan",
          destination: "Kashmir",
          duration: "Customizable",
          price: "On Request",
          rating: 4.8
        }}
      />
    </section>
  );
}
