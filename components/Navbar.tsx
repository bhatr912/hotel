'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 w-full">
        <Link href="/" className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
          High-Altitude Curator
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/packages" className={`font-medium text-sm tracking-tight transition-all duration-300 ${isScrolled ? 'text-on-surface-variant hover:text-primary' : 'text-white/80 hover:text-white'}`}>
            Packages
          </Link>
          <Link href="/about" className={`font-medium text-sm tracking-tight transition-all duration-300 ${isScrolled ? 'text-on-surface-variant hover:text-primary' : 'text-white/80 hover:text-white'}`}>
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className={`px-6 py-2.5 rounded-full font-bold text-sm tracking-tight transition-all duration-300 shadow-md active:scale-95 ${isScrolled ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-primary hover:bg-white/90'}`}>
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
