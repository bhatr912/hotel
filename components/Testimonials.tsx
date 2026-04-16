'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Maina Garg",
    role: "Traveler",
    text: "Our kasmir trip that was planned by Holiday Heed Kashmir (through mr. Junned) are exciting and hassel free.",
    rating: 5
  },
  {
    id: 2,
    name: "sheetal Bhosle",
    role: "Traveler",
    text: "I can confidently say that Holiday Heed Kashmir is one of the best travel agencies in Kashmir.",
    rating: 5
  },
  {
    id: 3,
    name: "HETAL SHINGADIA",
    role: "Traveler",
    text: "We planned a trip to Kashmir and Vaishno Devi, and choosing Holiday Heed Kashmir was truly the best decision.",
    rating: 5
  },
  {
    id: 4,
    name: "Mario Maskar",
    role: "Traveler",
    text: "It was our first trip to Kashmir, we enjoyed a lot. Stay was good, hotel staff were accommodating. Gulmarg hotel had an awesome view. Tanveer Ahmed provided great support.",
    rating: 5
  },
  {
    id: 5,
    name: "Swapnil Shedge",
    role: "Traveler",
    text: "Trip to Kashmir and Ladakh was great. Customized package was provided. Coordination and arrangements were handled excellently.",
    rating: 5
  },
  {
    id: 6,
    name: "Jayant Panrui",
    role: "Traveler",
    text: "Initially worried about parents traveling alone, but Holiday Heed and Sabah Ma'am managed everything perfectly. Very helpful.",
    rating: 5
  },
  {
    id: 7,
    name: "Poonam Thorave",
    role: "Traveler",
    text: "Visited Srinagar with Holiday Heed. Incredible experience. Hotels were clean and pleasant. Transportation and food arrangements were very good.",
    rating: 5
  },
  {
    id: 8,
    name: "Sumit Kumbharikar",
    role: "Traveler",
    text: "Superb experience. Nature is beautiful. Service from Holiday Heed was awesome. Bilal Wani was very helpful.",
    rating: 5
  },
  {
    id: 9,
    name: "Preet Doshi",
    role: "Traveler",
    text: "Trip was an absolute delight. Everything from arrival to departure was perfectly arranged. Memorable experience.",
    rating: 5
  },
  {
    id: 10,
    name: "Ravirajsinh Jadeja",
    role: "Traveler",
    text: "First experience with Holiday tours. Services and facilities were extraordinary. Special thanks to driver for making the trip memorable.",
    rating: 5
  },
  {
    id: 11,
    name: "Yashraj Patel",
    role: "Traveler",
    text: "Wonderful winter Kashmir trip. Good hotels, itinerary, and great experience with driver Aasim bhai. Worth the money.",
    rating: 5
  },
  {
    id: 12,
    name: "Mihin Patel",
    role: "Traveler",
    text: "Great itinerary and memorable Kashmir trip. Thanks to Holiday Heed.",
    rating: 5
  },
  {
    id: 13,
    name: "Ganesh Alkunte",
    role: "Traveler",
    text: "One of the best travel agencies. Guide and driver Tanveer Ahmad was humble and helpful. Vehicles were in good condition.",
    rating: 5
  },
  {
    id: 14,
    name: "DSVKA Narasimha Raju",
    role: "Traveler",
    text: "Excellent experience. Package booked at reasonable price even on short notice. Coordinator Arbela was very committed.",
    rating: 5
  },
  {
    id: 15,
    name: "Shanmuganathan Krishnakumar",
    role: "Traveler",
    text: "Great family holiday experience. Happy to connect with Holiday Heed.",
    rating: 5
  },
  {
    id: 16,
    name: "Rishabh Mehta",
    role: "Traveler",
    text: "Trip was well organized but some issues like last-minute hotel change and mismatch in expectations.",
    rating: 4
  },
  {
    id: 17,
    name: "Adi Shelar",
    role: "Traveler",
    text: "Best service. Everything from sightseeing to accommodation was perfect. Drivers were polite. Highly recommended.",
    rating: 5
  },
  {
    id: 18,
    name: "Ajay Kalyani",
    role: "Traveler",
    text: "Great experience. Team was excellent. Family enjoyed a lot. Highly recommended for Kashmir travel.",
    rating: 5
  },
  {
    id: 19,
    name: "Jay Shah",
    role: "Traveler",
    text: "Cab, hotel, and shikara ride were great. Driver Tanveer was kind, punctual, and maintained cleanliness.",
    rating: 5
  },
  {
    id: 20,
    name: "Simran Meshram",
    role: "Traveler",
    text: "Amazing experience. Hotels were clean with great views. Food was delicious. Drivers were professional. Very well-organized trip.",
    rating: 5
  },
  {
    id: 21,
    name: "Shannon Borthwick",
    role: "Traveler",
    text: "Best experience. Stay and food were great. Special appreciation for Sajid bhai for making trip memorable.",
    rating: 5
  },
  {
    id: 22,
    name: "Atul Malhotra",
    role: "Traveler",
    text: "Great itinerary. Special thanks to Ms. Asraa for making the trip successful.",
    rating: 5
  },
  {
    id: 23,
    name: "Sameer Ghogre",
    role: "Traveler",
    text: "Amazing Kashmir experience. Well-arranged vacation with great sightseeing and comfort.",
    rating: 5
  },
  {
    id: 24,
    name: "Rohit Supekar",
    role: "Traveler",
    text: "Dream journey to Ladakh from Srinagar. Memorable trip.",
    rating: 5
  },
  {
    id: 25,
    name: "Swaminathan Subramanian",
    role: "Traveler",
    text: "Trip was awesome. Hotels were comfortable. Special thanks to Ms. Shabha for planning.",
    rating: 5
  },
  {
    id: 26,
    name: "Kanchan Kolhe",
    role: "Traveler",
    text: "Very good first experience. Driver Tanveer treated like family. Great attitude and service.",
    rating: 5
  },
  {
    id: 27,
    name: "Suraj Pawar",
    role: "Traveler",
    text: "Great experience. Hotel bookings and arrangements were good.",
    rating: 5
  },
  {
    id: 28,
    name: "Abhishek Patel",
    role: "Traveler",
    text: "Really good experience. Aasim bhai was a great driver and entertainer.",
    rating: 5
  },
  {
    id: 29,
    name: "Neha Lokre",
    role: "Traveler",
    text: "Unforgettable Kashmir tour. Tour guide Asim made the experience amazing.",
    rating: 5
  },
  {
    id: 30,
    name: "Amie Vora",
    role: "Traveler",
    text: "Super experience with Rahil and Tanveer. Memorable trip. They took great care and showed many places.",
    rating: 5
  },
  {
    id: 31,
    name: "Vedantkumar Patel",
    role: "Traveler",
    text: "Family trip was magical. Beautiful experience with excellent service.",
    rating: 5
  },
  {
    id: 32,
    name: "Shrikant Patil",
    role: "Traveler",
    text: "7-day family trip. Hotel and car arrangements were very good.",
    rating: 5
  },
  {
    id: 33,
    name: "Sanjay Karadkar",
    role: "Traveler",
    text: "Very disappointed. Poor driver experience affected the trip significantly.",
    rating: 3
  },
  {
    id: 34,
    name: "Kushal Shah",
    role: "Traveler",
    text: "Driver Irshadbhai was excellent. Very knowledgeable and well-behaved.",
    rating: 5
  },
  {
    id: 35,
    name: "Rohan Gupta",
    role: "Traveler",
    text: "Luxurious and well-planned trip. Hotels were excellent and within budget.",
    rating: 5
  },
  {
    id: 36,
    name: "Jagadishwar Rumandla",
    role: "Traveler",
    text: "Excellent 7D/6N tour for group. Hotels, food, and driver service were great.",
    rating: 5
  },
  {
    id: 37,
    name: "Atanu Ghosh",
    role: "Traveler",
    text: "Very satisfied with 5N/6D trip. Perfect planning and coordination.",
    rating: 5
  },
  {
    id: 38,
    name: "Priti P Mehta",
    role: "Traveler",
    text: "Breathtaking experience. Travel arrangements were smooth and enjoyable.",
    rating: 5
  },
  {
    id: 39,
    name: "Paras Mehandiratta",
    role: "Traveler",
    text: "7N/8D package was amazing. Driver Zahoor bhai was excellent. Hotels were great.",
    rating: 5
  },
  {
    id: 40,
    name: "Mesmerizing Mandala",
    role: "Traveler",
    text: "Amazing experience. Aasim bhai was knowledgeable, helpful, and cooperative.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section - Matching common pattern */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
            <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">
              Guest Experiences
            </span>
            <div className="h-px w-8 lg:w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-on-surface tracking-tight">
            What Our <span className="text-primary italic">Guests Say</span>
          </h2>
          <p className="mt-4 text-on-surface-variant text-sm font-medium max-w-lg">
            Real stories from travelers who explored the paradise on earth with us.
          </p>
        </div>

        {/* Google Rating Summary Card */}
        <div className="flex justify-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-on-surface-variant/5 flex flex-col items-center justify-center text-center space-y-4 relative overflow-hidden group max-w-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex flex-col items-center relative z-10">
              <div className="mb-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-2 shadow-sm border border-on-surface-variant/5">
                  <span className="text-primary font-black text-xl">HH</span>
                </div>
                <p className="text-[10px] font-black text-on-surface uppercase tracking-widest">Holiday Heed Kashmir</p>
              </div>

              <div className="flex items-center gap-1 mb-2">
                <span className="text-2xl font-bold text-[#4285F4]">G</span>
                <span className="text-2xl font-bold text-[#EA4335]">o</span>
                <span className="text-2xl font-bold text-[#FBBC05]">o</span>
                <span className="text-2xl font-bold text-[#4285F4]">g</span>
                <span className="text-2xl font-bold text-[#34A853]">l</span>
                <span className="text-2xl font-bold text-[#EA4335]">e</span>
              </div>
              <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Reviews</p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <p className="text-[9px] text-on-surface-variant/60 mt-4 uppercase font-black tracking-widest">4.5 Average Rating</p>
            </div>
          </motion.div>
        </div>

        <div className="relative overflow-hidden mb-12">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .reviews-carousel {
              animation: scroll 30s linear infinite;
            }
            .reviews-carousel:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="flex gap-6 reviews-carousel">
            {[...REVIEWS, ...REVIEWS].map((review, index) => (
              <motion.div 
                key={`${review.id}-${index}`}
                className="bg-white p-7 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-on-surface-variant/5 relative group hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex-shrink-0 w-80"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-black text-xs border border-primary/10">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-on-surface font-black text-sm leading-tight group-hover:text-primary transition-colors">{review.name}</h3>
                      <p className="text-on-surface-variant/60 text-[10px] font-bold uppercase tracking-wider mt-0.5">{review.role}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-surface-container-low flex items-center justify-center shadow-sm">
                    <span className="text-[10px] font-bold text-[#4285F4]">G</span>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20 rounded-full overflow-hidden">
                    <div className="w-full h-1/2 bg-primary group-hover:h-full transition-all duration-700" />
                  </div>
                  <p className="text-on-surface-variant text-xs leading-relaxed font-medium line-clamp-4">
                    &quot;{review.text}&quot;
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-on-surface-variant/5 flex items-center justify-between">
                  <span className="text-[9px] font-black text-on-surface-variant/40 uppercase tracking-widest">Verified Review</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
