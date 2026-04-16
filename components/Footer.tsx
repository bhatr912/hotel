'use client';

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
                <span className="text-primary font-black text-xl">HH</span>
              </div>
              <p className="text-[10px] font-black text-on-surface uppercase tracking-widest">Holiday Heed</p>
              <p className="text-[8px] text-on-surface-variant/60 italic font-medium">Kashmir & Ladakh Tours</p>
            </div>

            <p className="text-sm font-medium text-on-surface-variant leading-relaxed">
              Plan Kashmir & Ladakh Tours with Holiday Heed Kashmir. Get upto 30% OFF on all Tour Packages. We specialize in crafting personalized travel experiences that create lasting memories.
            </p>
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
                { name: 'Terms and Conditions', href: '/terms-and-conditions' }
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
                { 
                  label: 'Call Us', 
                  value: '+91 7006 787 978 / +91 9596 492 124',
                  href: 'tel:+917006787978'
                },
                { 
                  label: 'Email Us', 
                  value: 'bookings@holidayheadkashmir.in',
                  href: 'mailto:bookings@holidayheadkashmir.in'
                },
                { 
                  label: 'WhatsApp', 
                  value: '+91 7006 787 978',
                  href: 'https://wa.me/+917006787978'
                },
                { 
                  label: 'Visit Us', 
                  value: 'Office No. 113,114, Khazir Complex, Munawar Link Road, Munawara Abad, Srinagar, Jammu & Kashmir India - 190001',
                  href: null
                }
              ].map((item, i) => (
                <li key={i} className="space-y-1">
                  <p className="text-[9px] font-black text-on-surface-variant/30 uppercase tracking-widest">{item.label}</p>
                  {item.href ? (
                    <a 
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-bold text-on-surface-variant leading-relaxed hover:text-primary transition-colors cursor-pointer block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-bold text-on-surface-variant leading-relaxed">
                      {item.value}
                    </p>
                  )}
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
            © Copyright {new Date().getFullYear()} - <span className="text-primary">Holiday Heed Kashmir</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
