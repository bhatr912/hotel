'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '@/lib/faqData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-surface px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
            <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">
              Plan It Better
            </span>
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-on-surface tracking-tight">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-sm font-medium max-w-lg">
            Everything you need to know before booking your tour package with Kashmir Port.
          </p>
        </div>

        {/* Individual FAQ Cards */}
        <div className="space-y-3 max-w-3xl mx-auto">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-xl border border-on-surface-variant/5 shadow-sm transition-all duration-500 overflow-hidden ${
                  isOpen ? 'ring-1 ring-primary/10 shadow-md shadow-primary/5' : 'hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 md:px-8 py-4 md:py-5 flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <span className={`text-[13px] md:text-sm font-bold transition-colors duration-300 ${
                    isOpen ? 'text-primary' : 'text-on-surface'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`transition-all duration-300 ${
                    isOpen ? 'rotate-180 text-primary' : 'text-on-surface-variant/20'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-8 pb-5 md:pb-6">
                        <div className="h-px w-full bg-primary/5 mb-5" />
                        <p className="text-[11px] md:text-xs text-on-surface-variant font-medium leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
