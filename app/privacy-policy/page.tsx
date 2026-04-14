'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            <div className="pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Compliance & Safety</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl lg:text-7xl font-headline font-black text-on-surface mb-6 tracking-tight"
                        >
                            Privacy <span className="text-primary italic">Policy</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center justify-center gap-2"
                        >
                            <div className="h-px w-8 bg-on-surface-variant/20" />
                            <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">
                                Last updated: February 03, 2026
                            </p>
                            <div className="h-px w-8 bg-on-surface-variant/20" />
                        </motion.div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-[2rem] md:rounded-[3rem] p-5 md:p-12 lg:p-20 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.08)] border border-on-surface-variant/5 relative overflow-hidden"
                    >
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/2 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/2 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />

                        <div className="relative space-y-8">
                            <div className="p-5 rounded-xl bg-surface-container-low border border-on-surface-variant/5">
                                <p className="text-base text-on-surface-variant leading-relaxed font-medium italic">
                                    &quot;This Privacy Policy explains how Kashmir Port (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, shares, and protects your information when you visit our website, submit an enquiry, or book a tour package with us. By using our website or services, you agree to the practices described here.&quot;
                                </p>
                            </div>

                            <div className="space-y-6">
                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">1</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Who we are</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        Kashmir Port is a tour and travel service provider based in Jammu & Kashmir, India. We help travellers plan and book packages, hotels, transport, activities, and related travel services through our team and trusted partner vendors.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">2</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Information we collect</h2>
                                    </div>
                                    <div className="pl-0 md:pl-12">
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { label: 'Contact details', value: 'name, phone number, email, and city.' },
                                                { label: 'Trip details', value: 'travel month/dates, number of travellers, hotel category, itinerary preferences, and special requirements.' },
                                                { label: 'Communication data', value: 'details you share with us on forms, WhatsApp, call, SMS, or email.' },
                                                { label: 'Technical/usage data', value: 'IP address, device type, browser, pages visited, and approximate location.' },
                                                { label: 'Marketing parameters', value: 'UTM source/medium/campaign, keyword, and similar tracking fields.' }
                                            ].map((item, i) => (
                                                <li key={i} className="group p-6 rounded-2xl bg-surface-container-low border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                                                    <div className="text-primary font-black uppercase tracking-widest text-[10px] mb-2">{item.label}</div>
                                                    <p className="text-on-surface-variant font-medium text-sm leading-relaxed">{item.value}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">3</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">How we use your information</h2>
                                    </div>
                                    <div className="pl-12 space-y-3">
                                        {[
                                            'To respond to enquiries, prepare itineraries, provide quotes, and confirm bookings.',
                                            'To coordinate your trip with hotels, transport providers, and activity operators.',
                                            'To provide customer support before, during, and after your trip.',
                                            'To send booking updates, payment confirmations, and itinerary changes.',
                                            'To improve website performance and user experience using analytics.',
                                            'To share offers or updates only if you have opted in (you can opt out anytime).'
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                                <p className="text-on-surface-variant font-medium leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">4</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Legal basis / consent</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        We process your information to provide travel services you request, to communicate about your enquiry/booking, to comply with legal obligations, and where applicable, based on your consent.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">5</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Sharing of information</h2>
                                    </div>
                                    <div className="pl-12 space-y-6">
                                        <p className="text-on-surface-variant font-medium leading-relaxed text-sm">
                                            We may share limited necessary information with trusted third parties only for delivering your trip:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {[
                                                { label: 'Travel partners', value: 'Hotels, drivers, and transport providers.' },
                                                { label: 'Service providers', value: 'Website hosting and analytics tools.' },
                                                { label: 'Legal compliance', value: 'If required by law or valid legal process.' }
                                            ].map((item, i) => (
                                                <div key={i} className="p-6 rounded-2xl bg-primary/5 text-center">
                                                    <div className="font-headline font-black text-primary mb-2">{item.label}</div>
                                                    <p className="text-on-surface-variant text-sm font-medium">{item.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-4 rounded-xl border-2 border-dashed border-primary/20 bg-primary/5 flex items-center justify-center gap-3">
                                            <span className="text-primary text-xl">🛡️</span>
                                            <p className="text-on-surface font-black uppercase tracking-wider text-sm">We do not sell your personal information.</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">6</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Cookies & analytics</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        We may use cookies and analytics tools to understand traffic and improve performance. You can control cookies using your browser settings.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">7</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Data retention</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        We retain information only as long as needed for enquiry handling, booking support, and legal requirements.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">8</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Security</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        We use reasonable administrative, technical, and organizational measures to protect your data. However, no online transmission or storage is 100% secure.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">9</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Your rights & choices</h2>
                                    </div>
                                    <div className="pl-12 space-y-3">
                                        {[
                                            'You can request access, correction, or deletion of your personal information.',
                                            'You can opt out of promotional communication anytime by informing our team.',
                                            'You can control cookies through your browser settings.'
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                                <p className="text-on-surface-variant font-medium leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">10</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Children&apos;s privacy</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        Our website and services are not intended for children. If you believe a child has shared personal data with us, please contact us immediately.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">11</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Links to other websites</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        Our website may contain links to third-party websites. We are not responsible for their privacy practices.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-sm">12</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Policy updates</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">13</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Contact</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        For privacy-related questions or requests, please contact us using the details in the website footer.
                                    </p>
                                </section>

                                <div className="pt-16 flex flex-col items-center gap-8 border-t border-on-surface-variant/5">
                                    <div className="text-center space-y-2">
                                        <h3 className="text-on-surface font-black text-xl">Any questions?</h3>
                                        <p className="text-on-surface-variant font-medium">We&apos;re here to help you understand your rights.</p>
                                    </div>
                                    <Link
                                        href="/"
                                        className="bg-primary text-white px-12 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 shadow-xl shadow-primary/20"
                                    >
                                        Back to Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
