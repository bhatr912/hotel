'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';

export default function TermsAndConditions() {
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
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Legal Agreement</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl lg:text-7xl font-headline font-black text-on-surface mb-6 tracking-tight"
                        >
                            Terms & <span className="text-primary italic">Conditions</span>
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
                                    &quot;Welcome to Holiday Heed Kashmir! By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before booking any tour packages.&quot;
                                </p>
                            </div>

                            <div className="space-y-6">
                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">1</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Booking Policy</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        All bookings are subject to availability. A booking is only confirmed once we receive the required advance payment and issue a formal confirmation voucher.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">2</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Payment Terms</h2>
                                    </div>
                                    <div className="pl-0 md:pl-12 space-y-3 font-medium text-sm text-on-surface-variant">
                                        <div className="p-4 rounded-xl bg-surface-container-low border border-on-surface-variant/5">
                                            <p><strong className="text-on-surface italic">Advance Payment:</strong> 50% of the total package cost is required to initiate the booking process.</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-surface-container-low border border-on-surface-variant/5">
                                            <p><strong className="text-on-surface italic">Balance Payment:</strong> The remaining balance must be cleared upon arrival or as per the specific payment schedule provided at the time of booking.</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">3</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Cancellation & Refund</h2>
                                    </div>
                                    <div className="pl-0 md:pl-12 space-y-4">
                                        <p className="text-on-surface-variant font-medium leading-relaxed text-sm">
                                            Cancellation charges depend on how far in advance the cancellation is made:
                                        </p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { label: '30+ Days', value: 'Full refund minus processing fees.' },
                                                { label: '15-30 Days', value: '25% of the total cost as cancellation fee.' },
                                                { label: '7-14 Days', value: '50% of the total cost as cancellation fee.' },
                                                { label: 'Less than 7 Days', value: '100% cancellation fee (No refund).' }
                                            ].map((item, i) => (
                                                <li key={i} className="group p-4 rounded-xl bg-surface-container-low border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300">
                                                    <div className="text-primary font-black uppercase tracking-widest text-[10px] mb-1">{item.label}</div>
                                                    <p className="text-on-surface-variant font-medium text-sm">{item.value}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">4</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Alteration of Itinerary</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        Holiday Heed Kashmir reserves the right to alter itineraries due to any unforeseen circumstances like weather, road blocks, or political situations. We aim to provide suitable alternatives in such cases.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">5</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Responsibility</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        We act only in the capacity of an agent for hotels, airlines, and transporters. We are not responsible for any injury, loss, or damage to person or property during the tour.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">6</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Health & Medical Conditions</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        Kashmir and Ladakh contain high-altitude regions. It is the responsibility of the traveller to ensure they are medically fit for such travel. Please consult your physician before booking.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">7</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Travel Insurance</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        We strongly recommend all travellers to purchase comprehensive travel insurance that covers cancellations, medical emergencies, and luggage loss.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">8</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Governing Law</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Jammu & Kashmir, India.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">9</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Dispute Resolution</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        In case of any disagreement, we encourage travellers to reach out to our management first. Most issues can be resolved through mutual discussion and understanding.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black text-xs">10</div>
                                        <h2 className="text-lg font-headline font-black text-on-surface tracking-tight">Contact Information</h2>
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed text-sm pl-0 md:pl-12 mt-2 md:mt-0">
                                        If you have any questions regarding these terms, please contact us at the details provided in the website footer.
                                    </p>
                                </section>

                                <div className="pt-16 flex flex-col items-center gap-8 border-t border-on-surface-variant/5">
                                    <div className="text-center space-y-2">
                                        <h3 className="text-on-surface font-black text-xl">Ready to Explore?</h3>
                                        <p className="text-on-surface-variant font-medium">By booking with us, you accept these terms in full.</p>
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
