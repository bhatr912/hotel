'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Square } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface relative border-t border-on-surface-variant/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-8">
            <div className="flex flex-col items-start">
              <div className="w-20 h-14 bg-white rounded-xl flex items-center justify-center mb-2 shadow-sm border border-on-surface-variant/5">
                <span className="text-primary font-black text-xl">KP</span>
              </div>
              <p className="text-[10px] font-black text-on-surface uppercase tracking-widest">Kashmir Port</p>
              <p className="text-[8px] text-on-surface-variant/60 italic font-medium">Discover Kashmir&apos;s Finest Journeys</p>
            </div>
            
            <p className="text-sm font-medium text-on-surface-variant leading-relaxed">
              Experience unforgettable journeys with Kashmir Port. We specialize in crafting personalized travel experiences that create lasting memories.
            </p>

            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white border border-on-surface-variant/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline font-black text-on-surface mb-2 tracking-tight uppercase text-base relative inline-block">
              Quick Links
              <div className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-primary" />
            </h4>
            <ul className="space-y-4 mt-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Packages', href: '/packages' },
                { name: 'Contact Us', href: '#' }
              ].map((item) => (
                <li key={item.name} className="flex items-center gap-3 group">
                  <Square className="w-1.5 h-1.5 text-primary/20 group-hover:text-primary transition-colors" />
                  <Link href={item.href} className="text-base font-medium text-on-surface-variant hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Policy */}
          <div>
            <h4 className="font-headline font-black text-on-surface mb-2 tracking-tight uppercase text-base relative inline-block">
              Our Policy
              <div className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-primary" />
            </h4>
            <ul className="space-y-4 mt-8">
              {['Privacy Policy', 'Terms and Conditions', 'Refund/Cancellation'].map((item) => (
                <li key={item} className="flex items-center gap-3 group">
                  <Square className="w-1.5 h-1.5 text-primary/20 group-hover:text-primary transition-colors" />
                  <Link href="#" className="text-base font-medium text-on-surface-variant hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-headline font-black text-on-surface mb-2 tracking-tight uppercase text-base relative inline-block">
              Contact Information
              <div className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-primary" />
            </h4>
            <ul className="space-y-5 mt-8">
              {[
                '+918491962370',
                '+918491962370',
                'info@kashmirport.com',
                '3C complex, medical college road, karanagar, Srinagar, Jammu and Kashmir 190010'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <Square className="w-1.5 h-1.5 text-primary/20 mt-2 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-on-surface-variant leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative py-8 border-t border-on-surface-variant/5 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10 flex justify-center">
          <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
            © Copyright 2025 - <span className="text-primary">Kashmir Port</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
