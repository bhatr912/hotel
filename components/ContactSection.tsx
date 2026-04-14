'use client';

import React from 'react';
import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="py-20 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header Section - Matching other components */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
            <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">
              Start Your Journey
            </span>
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-on-surface tracking-tight">
            Get In <span className="text-primary italic">Touch</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-sm font-medium max-w-lg">
            Ready to plan your dream Kashmir vacation? Reach out to our experts for a personalized itinerary.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col lg:flex-row border border-on-surface-variant/5 max-w-5xl mx-auto">
          {/* Left Side: Contact Info - Slightly smaller padding */}
          <div className="lg:w-[38%] bg-gradient-to-br from-primary via-primary/90 to-primary-container p-8 lg:p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black mb-1">Contact Info</h3>
              <p className="text-white/80 text-xs font-medium mb-10">Feel free to consult with us!</p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-white/20 rounded-lg backdrop-blur-md shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-base">Address</h4>
                    <p className="text-white/80 text-xs leading-relaxed">
                      3C complex, medical college road, karanagar, Srinagar, Jammu and Kashmir 190010
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-white/20 rounded-lg backdrop-blur-md shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-base">Email</h4>
                    <p className="text-white/80 text-xs">info@kashmirport.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-white/20 rounded-lg backdrop-blur-md shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-base">Phone</h4>
                    <p className="text-white/80 text-xs">+91-8491962370</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-white/20 rounded-lg backdrop-blur-md shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-base">Whatsapp</h4>
                    <p className="text-white/80 text-xs">+918491962370</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form - Using common component */}
          <div className="lg:w-[62%]">
            <ContactForm compact />
          </div>
        </div>
      </div>
    </section>
  );
}
