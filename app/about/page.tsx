'use client';

import React from 'react';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { Heart, Shield, Users, Map, Compass, Award } from 'lucide-react';
import Image from 'next/image';

const VALUES = [
  {
    icon: Heart,
    title: "Passion for Kashmir",
    description: "We don't just sell tours; we share our home. Every itinerary is crafted with deep love for the valley's culture and heritage."
  },
  {
    icon: Shield,
    title: "Safety & Trust",
    description: "Your safety is our priority. We work with verified local partners and provide 24/7 support throughout your journey."
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Our team consists of locals who know every hidden trail, the best kahwa spots, and the untold stories of the mountains."
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "From luxury houseboats to premium transport, we ensure every touchpoint of your trip meets the highest standards."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Hero Section - Matching common pattern */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 lg:w-12 bg-primary/30" />
              <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">
                Our Journey
              </span>
              <div className="h-px w-8 lg:w-12 bg-primary/30" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-on-surface tracking-tight">
              About <span className="text-primary italic">Kashmir Port</span>
            </h1>
            <p className="mt-6 text-on-surface-variant text-base font-medium max-w-2xl">
              Welcome to Kashmir Port! We are dedicated to providing you with the most authentic and memorable travel experiences in the valley.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side: Styled Graphic - Updated to Project Colors */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary-container p-12 flex flex-col justify-between shadow-2xl">
                <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">100% Customised Package</span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-7xl lg:text-8xl font-headline font-black text-white leading-[0.8] mb-4">
                    WHO<br />
                    <span className="text-white/40 italic">WE</span> ARE
                  </h3>
                  <div className="max-w-[280px] p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-white text-xs font-medium leading-relaxed">
                      We provide the best customised tour packages for Kashmir and Ladakh, catering to all our customers with a focus on affordability and a 100% satisfaction guarantee.
                    </p>
                  </div>
                </div>

                {/* Decorative Image Overlay */}
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 pointer-events-none opacity-90">
                  <Image
                    src="https://picsum.photos/seed/traveler-about/600/600"
                    alt="Traveler"
                    width={600}
                    height={600}
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
              {/* Background Decorative Shape - Updated to Primary */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
            </motion.div>

            {/* Right Side: Text Content - Updated to Project Colors */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-headline font-black text-on-surface mb-6">About Us</h2>
                <div className="space-y-6 text-on-surface-variant font-medium leading-relaxed">
                  <p className="text-lg text-primary font-black">Welcome to Kashmir Port!</p>
                  <p>
                    At Kashmir Port, we believe travel is not only about visiting a place — it&apos;s about feeling its soul, living its stories, and returning with memories that stay etched in your heart. Every experience we create is thoughtfully curated to turn your dream of exploring Kashmir into a journey you&apos;ll treasure forever.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-headline font-black text-on-surface flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full" />
                  Our Mission
                </h4>
                <p className="text-on-surface-variant font-medium leading-relaxed">
                  Creating Experiences Beyond Travel. Our vision is simple yet meaningful — to deliver smooth, personalized, and truly memorable travel experiences. Whether you desire a calm escape amidst nature, an adventure in the mountains, or a deep dive into Kashmir&apos;s culture and heritage, we design each trip around your comfort, interests, and budget.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-headline font-black text-on-surface flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary-container rounded-full" />
                  Who We Are
                </h4>
                <p className="text-on-surface-variant font-medium leading-relaxed">
                  Your Local & Trusted Travel Partner. Kashmir Port is more than a travel company — we are your trusted local partner in Kashmir. With on-ground expertise and a passionate team of travel professionals, we manage every detail from planning to execution, ensuring a stress-free, authentic, and unforgettable journey.
                </p>
              </div>

              <button className="px-10 py-4 bg-primary hover:bg-primary/90 text-white font-black rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] uppercase tracking-widest text-sm">
                Get Offer Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Happy Travelers", value: "10K+" },
              { label: "Tour Packages", value: "150+" },
              { label: "Local Guides", value: "50+" },
              { label: "Years Experience", value: "12+" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl lg:text-5xl font-headline font-black mb-2">{stat.value}</div>
                <div className="text-xs lg:text-sm font-bold uppercase tracking-widest text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Why We Care</span>
            <h2 className="text-4xl lg:text-5xl font-headline font-black text-on-surface">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-on-surface-variant/5 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-black text-on-surface mb-4">{value.title}</h3>
                <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-12 rounded-[3rem] border border-on-surface-variant/5">
              <Compass className="w-12 h-12 text-primary mb-8" />
              <h3 className="text-3xl font-headline font-black text-on-surface mb-6">Our Mission</h3>
              <p className="text-on-surface-variant font-medium leading-relaxed text-lg">
                To provide seamless, authentic, and unforgettable travel experiences in Kashmir while promoting sustainable tourism and empowering local communities through meaningful interactions.
              </p>
            </div>
            <div className="bg-primary p-12 rounded-[3rem] text-white">
              <Map className="w-12 h-12 text-white/40 mb-8" />
              <h3 className="text-3xl font-headline font-black mb-6">Our Vision</h3>
              <p className="text-white/80 font-medium leading-relaxed text-lg">
                To be the most trusted and innovative travel partner in the Himalayas, recognized globally for our commitment to excellence, cultural preservation, and guest satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
