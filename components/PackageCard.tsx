'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { PACKAGES } from '@/lib/data';

type Package = (typeof PACKAGES)[0];

interface PackageCardProps {
  pkg: Package;
  variant?: 'scroll' | 'grid';
  onBook?: (e: React.MouseEvent, pkg: Package) => void;
  index?: number;
}

export default function PackageCard({ pkg, variant = 'grid', onBook, index }: PackageCardProps) {
  if (variant === 'scroll') {
    return (
      <Link
        href={`/packages/${pkg.id}`}
        key={`${pkg.id}-${index}`}
        className="flex-shrink-0 w-[280px] bg-white rounded-[2rem] overflow-hidden shadow-lg border border-on-surface-variant/5 group hover:shadow-xl transition-all duration-500 cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative h-[180px] w-full overflow-hidden">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg">
            {pkg.discount}
          </div>
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
            <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
            <span className="text-[9px] font-black text-on-surface">{pkg.rating}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <div className="space-y-1.5">
            <h3 className="text-base font-black text-on-surface leading-tight group-hover:text-primary transition-colors line-clamp-1">
              {pkg.title}
            </h3>
            <div className="flex items-center gap-1.5 text-on-surface-variant/60">
              <MapPin className="w-2.5 h-2.5" />
              <span className="text-[8px] font-bold uppercase tracking-wider line-clamp-1">{pkg.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-on-surface-variant/60">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-[10px] font-medium">{pkg.duration}</span>
          </div>

          <div className="h-px bg-on-surface-variant/10 w-full" />

          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[8px] font-bold text-on-surface-variant/40 uppercase tracking-widest line-through">
                {pkg.originalPrice}
              </p>
              <p className="text-lg font-black text-primary truncate">
                {pkg.price}
                <span className="text-[8px] font-medium text-on-surface-variant/60 ml-1 uppercase">/ Person</span>
              </p>
            </div>
            <button
              onClick={(e) => onBook && onBook(e, pkg)}
              className="bg-primary text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-95 shadow-md whitespace-nowrap cursor-pointer"
            >
              Book
            </button>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-on-surface-variant/5 group hover:shadow-xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
          {pkg.discount}
        </div>
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-black text-on-surface">{pkg.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 lg:p-6 space-y-3 lg:space-y-4">
        <div className="space-y-1 lg:space-y-1.5">
          <div className="flex items-center gap-2 text-primary font-black text-[8px] lg:text-[9px] uppercase tracking-widest">
            <span>{pkg.category}</span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span>{pkg.destination}</span>
          </div>
          <h3 className="text-base lg:text-lg font-black text-on-surface leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {pkg.title}
          </h3>
          <div className="flex items-center gap-1.5 text-on-surface-variant/60">
            <MapPin className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
            <span className="text-[8px] lg:text-[9px] font-bold uppercase tracking-wider">{pkg.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 lg:gap-3 text-on-surface-variant/60">
          <Clock className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
          <span className="text-[10px] lg:text-[11px] font-medium">{pkg.duration}</span>
        </div>

        <div className="h-px bg-on-surface-variant/10 w-full" />

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            <div>
              <p className="text-[8px] lg:text-[9px] font-bold text-on-surface-variant/40 uppercase tracking-widest line-through mb-0.5">
                {pkg.originalPrice}
              </p>
              <div className="flex items-baseline gap-1">
                <p className="text-base lg:text-lg font-black text-primary leading-none">
                  {pkg.price}
                </p>
                <span className="text-[8px] lg:text-[9px] font-black text-on-surface-variant/40 uppercase tracking-widest leading-none">
                  / Person
                </span>
              </div>
            </div>
          </div>
          <Link
            href={`/packages/${pkg.id}`}
            className="bg-primary text-white px-5 lg:px-6 py-2.5 rounded-xl text-[9px] lg:text-[10px] font-black uppercase tracking-widest hover:bg-on-surface transition-all active:scale-95 shadow-lg shadow-primary/20 whitespace-nowrap shrink-0"
          >
            View
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
