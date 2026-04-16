'use client';

import React from 'react';
import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-10 bg-surface-container-lowest overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-6 lg:w-10 bg-primary/30" />
            <span className="text-[9px] lg:text-[10px] font-black text-primary uppercase tracking-[0.3em]">
              Start Your Journey
            </span>
            <div className="h-px w-6 lg:w-10 bg-primary/30" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif text-on-surface tracking-tight">
            Get In <span className="text-primary italic">Touch</span>
          </h2>
        </div>

        <div className="bg-white rounded-[1.5rem] lg:rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row border border-on-surface-variant/5 max-w-6xl mx-auto">
          {/* Left Side: Contact Info */}
          <div className="lg:w-[35%] bg-gradient-to-br from-primary via-primary/90 to-primary-container p-6 lg:p-8 text-white">
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-xl lg:text-2xl font-black mb-1 leading-none">Contact Info</h3>
              <p className="text-white/70 text-[9px] font-black uppercase tracking-widest mb-6 lg:mb-8">Consult with us!</p>

              <div className="space-y-5 lg:space-y-6">
                <div className="flex items-start gap-3 lg:gap-4 group">
                  <div className="p-2 lg:p-2.5 bg-white/10 rounded-xl backdrop-blur-md shrink-0 group-hover:bg-white/20 transition-colors">
                    <MapPin className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-xs lg:text-sm uppercase tracking-wider mb-1">Office Address</h4>
                    <p className="text-white/80 text-[11px] lg:text-xs leading-relaxed max-w-[200px]">
                      Office No. 113,114, Khazir Complex, Munawar Link Road, Munawara Abad, Srinagar, Jammu & Kashmir India - 190001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 lg:gap-4 group cursor-pointer" onClick={() => window.location.href = 'mailto:bookings@holidayheadkashmir.in'}>
                  <div className="p-2 lg:p-2.5 bg-white/10 rounded-xl backdrop-blur-md shrink-0 group-hover:bg-white/20 transition-colors">
                    <Mail className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-xs lg:text-sm uppercase tracking-wider mb-1">Email Support</h4>
                    <p className="text-white/80 text-[11px] lg:text-xs hover:text-white transition-colors">bookings@holidayheadkashmir.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 lg:gap-4 group cursor-pointer" onClick={() => window.location.href = 'tel:+917006787978'}>
                  <div className="p-2 lg:p-2.5 bg-white/10 rounded-xl backdrop-blur-md shrink-0 group-hover:bg-white/20 transition-colors">
                    <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-xs lg:text-sm uppercase tracking-wider mb-1">Direct Call</h4>
                    <p className="text-white/80 text-[11px] lg:text-xs hover:text-white transition-colors">+91 7006 787 978 / +91 9596 492 124</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-[65%] bg-white">
            <ContactForm compact />
          </div>
        </div>
      </div>
    </section>
  );
}
