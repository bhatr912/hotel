'use client';

import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

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
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
                Quick Links
              </span>
              <div className="h-px flex-grow bg-primary/20" />
            </div>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Packages', href: '/packages' },
                { name: 'Contact Us', href: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm font-bold text-on-surface-variant/70 hover:text-primary transition-all flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Policy */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
                Our Policy
              </span>
              <div className="h-px flex-grow bg-primary/20" />
            </div>
            <ul className="space-y-4">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms and Conditions', href: '/terms-and-conditions' },
                { name: 'Refund/Cancellation', href: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm font-bold text-on-surface-variant/70 hover:text-primary transition-all flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
                Contact Info
              </span>
              <div className="h-px flex-grow bg-primary/20" />
            </div>
            <ul className="space-y-5">
              {[
                { label: 'Call Us', value: '+91 84919 62370' },
                { label: 'Email Us', value: 'info@kashmirport.com' },
                { label: 'Visit Us', value: '3C complex, medical college road, karanagar, Srinagar, HK 190010' }
              ].map((item, i) => (
                <li key={i} className="space-y-1">
                  <p className="text-[9px] font-black text-on-surface-variant/30 uppercase tracking-widest">{item.label}</p>
                  <p className="text-sm font-bold text-on-surface-variant leading-relaxed">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative py-8 border-t border-on-surface-variant/5 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10 flex justify-center">
          <p className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.3em] text-center">
            © Copyright {new Date().getFullYear()} - <span className="text-primary">Kashmir Port</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
