'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, 
  Utensils, 
  Building2, 
  Car, 
  ChevronsRight,
  Phone
} from 'lucide-react';
import { motion } from 'motion/react';
import { PACKAGES } from '@/lib/data';
import BookingDialog from './BookingDialog';

// Extend the type locally just in case your lib/data doesn't have these properties yet
type Package = (typeof PACKAGES)[0] & {
  inclusions?: string[];
  highlights?: string[];
};

interface PackageCardProps {
  pkg: Package;
  variant?: 'scroll' | 'grid';
  onBook?: (e: React.MouseEvent, pkg: Package) => void;
  index?: number;
}

// Fallback data if not present in pkg object
const DEFAULT_INCLUSIONS = [
  "Sightseeing in Private Car",
  "Stay in Deluxe Hotel",
  "Stay in Houseboat",
  "Daily Breakfast & Dinner",
  "Sightseeing in Popular Places",
  "All Tax Included",
  "Pickup & Drop from Airport Or Railway Station"
];

const DEFAULT_HIGHLIGHTS = [
  "Srinagar Sightseeing",
  "Day Trip Gulmarg",
  "Day Trip Pahalgam",
  "Day Trip Sonamarg",
  "1N Houseboat"
];

export default function NewPackageCard({ pkg, variant = 'grid', onBook, index }: PackageCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const inclusions = pkg.inclusions || DEFAULT_INCLUSIONS;
  const highlights = pkg.highlights || DEFAULT_HIGHLIGHTS;

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onBook) {
      onBook(e, pkg); // Fallback if a parent still passes onBook
    } else {
      setIsDialogOpen(true); // Open local dialog
    }
  };

  const CardContent = () => (
    <>
      {/* 1. Top Image Header */}
      <div className="relative h-40 w-full shrink-0">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Duration Badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <span className="text-xs font-bold text-gray-800">{pkg.duration}</span>
        </div>
        {/* Discount Badge */}
        {pkg.discount && (
          <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
            {pkg.discount}
          </div>
        )}
      </div>

      {/* 2. Card Content Body */}
      <div className="p-4 flex flex-col gap-3 flex-grow">
        
        {/* Title Badge */}
        <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary/20 to-primary/5 pr-4 pl-1.5 py-1.5 rounded-r-full mr-auto -ml-4">
          <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-black shadow-md shrink-0">
            {(index ?? 0) + 1}
          </div>
          <h3 className="font-bold text-gray-900 text-[15px] leading-tight line-clamp-1">{pkg.title}</h3>
        </div>

        {/* 3. Include Section (Icons) */}
        <div className="flex border border-gray-200 rounded-lg overflow-hidden shadow-sm shrink-0">
          <div className="bg-primary text-white flex items-center justify-center px-1.5 py-1">
            <span 
              className="text-[8px] font-black tracking-widest uppercase"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Include
            </span>
          </div>
          <div className="flex-1 grid grid-cols-4 divide-x divide-gray-100 bg-gray-50/50">
            <div className="flex flex-col items-center justify-center py-1.5 px-1 gap-1">
              <div className="bg-blue-100 p-1.5 rounded-full"><MapPin className="w-3.5 h-3.5 text-blue-600" /></div>
              <span className="text-[9px] font-bold text-gray-700">Sightseeing</span>
            </div>
            <div className="flex flex-col items-center justify-center py-1.5 px-1 gap-1">
              <div className="bg-orange-100 p-1.5 rounded-full"><Utensils className="w-3.5 h-3.5 text-orange-600" /></div>
              <span className="text-[9px] font-bold text-gray-700">Meals</span>
            </div>
            <div className="flex flex-col items-center justify-center py-1.5 px-1 gap-1">
              <div className="bg-purple-100 p-1.5 rounded-full"><Building2 className="w-3.5 h-3.5 text-purple-600" /></div>
              <span className="text-[9px] font-bold text-gray-700">Hotels</span>
            </div>
            <div className="flex flex-col items-center justify-center py-1.5 px-1 gap-1">
              <div className="bg-yellow-100 p-1.5 rounded-full"><Car className="w-3.5 h-3.5 text-yellow-600" /></div>
              <span className="text-[9px] font-bold text-gray-700">Transfer</span>
            </div>
          </div>
        </div>

        {/* 4. Package Inclusion List */}
        <div className="space-y-1.5 border-t border-dashed border-gray-200 pt-2.5 shrink-0">
          <h4 className="text-primary font-bold text-xs">Package Inclusion:</h4>
          <ul className="max-h-[72px] overflow-y-auto space-y-1 pr-2 custom-scrollbar">
            {inclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <ChevronsRight className="w-3.5 h-3.5 text-primary shrink-0 mt-[1px]" />
                <span className="text-[11px] font-medium text-gray-600 leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Package Highlights */}
        <div className="space-y-2 border-t border-dashed border-gray-200 pt-2.5 shrink-0">
          <h4 className="text-primary font-bold text-xs">Package Highlights</h4>
          <div className="flex gap-1.5 overflow-x-auto pb-2 custom-scrollbar-x">
            {highlights.map((highlight, idx) => (
              <span 
                key={idx} 
                className="whitespace-nowrap px-2 py-1 bg-white border border-gray-200 text-gray-600 text-[9px] font-bold uppercase tracking-wide rounded-md shadow-sm"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* 6. Pricing */}
        <div className="border-t border-dashed border-gray-200 pt-2.5 flex items-end justify-between shrink-0">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">From</span>
            <span className="text-xl font-black text-primary leading-none">{pkg.price}</span>
            <span className="text-[9px] font-bold text-gray-400">/ Adult</span>
          </div>
          {pkg.originalPrice && (
            <span className="text-[10px] font-bold text-gray-400 line-through mb-0.5">{pkg.originalPrice}</span>
          )}
        </div>

        {/* 7. Action Buttons */}
        <div className="grid grid-cols-3 gap-1.5 mt-1 shrink-0">
          <button 
            onClick={(e) => { 
              e.preventDefault(); 
              e.stopPropagation(); 
              window.location.href = 'tel:+917006787978';
            }}
            className="bg-[#f59e0b] hover:bg-[#d97706] text-white py-2 rounded-lg text-[10px] font-black tracking-wide transition-colors flex items-center justify-center gap-1 shadow-sm active:scale-95 cursor-pointer"
          >
            <Phone className="w-3 h-3" /> Call
          </button>
          
          <button 
            onClick={(e) => { 
              e.preventDefault(); 
              e.stopPropagation(); 
              window.open('https://wa.me/+917006787978', '_blank');
            }}
            className="bg-[#16a34a] hover:bg-[#15803d] text-white py-2 rounded-lg text-[10px] font-black tracking-wide transition-colors flex items-center justify-center gap-1 shadow-sm active:scale-95 cursor-pointer"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-3.5 h-3.5"
            /> Chat
          </button>
          
          <button 
            onClick={handleBookClick}
            className="bg-primary hover:bg-primary/90 text-white py-2 rounded-lg text-[10px] font-black tracking-wide transition-colors shadow-sm active:scale-95 cursor-pointer"
          >
            Book
          </button>
        </div>

      </div>
    </>
  );

  const BookingDialogComponent = (
    <BookingDialog
      isOpen={isDialogOpen}
      onClose={() => setIsDialogOpen(false)}
      packageData={{
        title: pkg.title,
        destination: pkg.destination,
        duration: pkg.duration,
        price: pkg.price,
        rating: pkg.rating,
      }}
    />
  );

  if (variant === 'scroll') {
    return (
      <>
        <Link
          href={`/packages/${pkg.id}`}
          key={`${pkg.id}-${index}`}
          className="flex-shrink-0 w-[340px] flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <CardContent />
        </Link>
        {BookingDialogComponent}
      </>
    );
  }

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="bg-white flex flex-col rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300 max-w-[400px] w-full mx-auto"
      >
        
        <CardContent />
        
      </motion.div>
      {BookingDialogComponent}
    </>
  );
}