'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Packages', href: '/packages' },
  { name: 'Destinations', href: '/#destinations', id: 'destinations' },
  { name: 'Category', href: '/#category', id: 'category' },
  { name: 'Testimonials', href: '/#testimonials', id: 'testimonials' },
  { name: 'Contact', href: '/#contact', id: 'contact' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Intersection Observer for sections
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Only observe if on home page
    if (pathname === '/') {
      const sections = ['destinations', 'category', 'testimonials', 'contact'];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [pathname]);

  const isActive = (item: typeof NAV_ITEMS[0]) => {
    if (item.href.startsWith('/#')) {
      return pathname === '/' && activeSection === item.id;
    }
    return pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
  };

  const shouldShowSolid = isScrolled || isMenuOpen || pathname !== '/';

  return (
    <>
      <nav className={`fixed top-0 w-full z-[60] transition-all duration-300 ${shouldShowSolid ? 'bg-white shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 w-full">
          <Link href="/" className={`text-xl md:text-2xl font-black tracking-tighter transition-colors duration-300 ${shouldShowSolid ? 'text-primary' : 'text-white'}`}>
            Kashmir Port
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium text-sm tracking-tight transition-all duration-300 py-1 ${active
                      ? 'text-primary'
                      : shouldShowSolid
                        ? 'text-on-surface-variant hover:text-primary'
                        : 'text-white/80 hover:text-white'
                    }`}
                >
                  {item.name}
                  {active && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <button className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm tracking-tight transition-all duration-300 shadow-md active:scale-95 whitespace-nowrap ${shouldShowSolid ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-primary hover:bg-white/90'}`}>
              Book Now
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 md:hidden transition-colors duration-300 ${shouldShowSolid ? 'text-on-surface' : 'text-white'}`}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[50] bg-black/20 backdrop-blur-sm md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] z-[55] bg-white pt-24 px-8 md:hidden shadow-2xl"
            >
              <div className="flex flex-col space-y-7">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-base font-black tracking-tight flex items-center gap-3 transition-colors ${active ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                        }`}
                    >
                      {active && <motion.div layoutId="mobileActive" className="w-1.5 h-1.5 rounded-full bg-primary" />}
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Info in Sidebar */}
              <div className="absolute bottom-10 left-8 right-8">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/40 mb-2">Support</p>
                <p className="text-sm font-bold text-on-surface">info@kashmirport.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


