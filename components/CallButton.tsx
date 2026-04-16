'use client';

import { Phone } from 'lucide-react';

export default function CallButton() {
  return (
    <button
      onClick={() => window.location.href = 'tel:+917006787978'}
      className="fixed bottom-24 right-6 z-40 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
      title="Call us"
    >
      <Phone className="w-6 h-6" />
    </button>
  );
}
