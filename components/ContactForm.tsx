'use client';

import React from 'react';

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  return (
    <div className={`${compact ? 'p-6' : 'p-10'} bg-white`}>
      <div className="flex items-center gap-2 mb-6">
        <span className="text-lg">Hi <span className="inline-block animate-wave origin-bottom-right">👋</span></span>
        <span className="font-black text-on-surface text-sm lg:text-base">, Get Perfect Kashmir Itinerary.</span>
      </div>

      <form className="space-y-4 lg:space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          <div>
            <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
              Full Name<span className="text-red-500">*</span>:
            </label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-xs lg:text-sm"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
              Mobile No.<span className="text-red-500">*</span>:
            </label>
            <input 
              type="tel" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-xs lg:text-sm"
              placeholder="Enter mobile number"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          <div>
            <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
              Email<span className="text-red-500">*</span>:
            </label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-xs lg:text-sm"
              placeholder="Enter email address"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
              No. Of Travelers<span className="text-red-500">*</span>:
            </label>
            <input 
              type="number" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-xs lg:text-sm"
              placeholder="Number of people"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
            Message <span className="text-gray-400 font-medium">(optional)</span>
          </label>
          <textarea 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-xs lg:text-sm min-h-[100px] lg:min-h-[120px] resize-none"
            placeholder="Write your message (max 200 characters)"
          ></textarea>
        </div>

        <button className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-black rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] uppercase tracking-widest text-xs lg:text-sm cursor-pointer">
          Get Free Quote
        </button>
      </form>
    </div>
  );
}
