'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  packageData?: {
    title: string;
    destination: string;
    duration: string;
    price: string;
    rating: number;
  } | null;
}

export default function BookingDialog({ isOpen, onClose }: BookingDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80]"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6 lg:p-10 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-on-surface-variant/40 hover:text-on-surface transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-8 justify-center">
                <span className="text-2xl font-black text-on-surface">Hi 👋 ,</span>
                <span className="text-xl font-black text-on-surface">Enquire Now To Get Best Price.</span>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-black text-on-surface mb-2 ml-1">
                    Full Name<span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-sm"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-on-surface mb-2 ml-1">
                    Mobile No.<span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-sm"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-on-surface mb-2 ml-1">
                    Email<span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-sm"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-on-surface mb-2 ml-1">
                    No. Of Travelers<span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-sm"
                    placeholder="Number of people"
                    min="1"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-on-surface-variant mb-2 ml-1">
                    Message <span className="text-on-surface-variant/40 font-medium">(optional)</span>
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-sm min-h-[100px] resize-none"
                    placeholder="Write your message (max 200 characters)"
                  ></textarea>
                </div>

                <button className="w-full py-4 bg-primary hover:bg-on-surface text-white font-black rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] uppercase tracking-widest text-sm mt-4 cursor-pointer">
                  Get Free Quote
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
