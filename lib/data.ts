export const DESTINATIONS = [
  {
    id: 1,
    name: "Srinagar",
    image: "https://picsum.photos/seed/srinagar/800/600",
  },
  {
    id: 2,
    name: "Gulmarg",
    image: "https://picsum.photos/seed/gulmarg/800/600",
  },
  {
    id: 3,
    name: "Pahalgam",
    image: "https://picsum.photos/seed/pahalgam/800/600",
  },
  {
    id: 4,
    name: "Sonamarg",
    image: "https://picsum.photos/seed/sonamarg/800/600",
  },
  {
    id: 5,
    name: "Yusmarg",
    image: "https://picsum.photos/seed/yusmarg/800/600",
  },
  {
    id: 6,
    name: "Gurez Valley",
    image: "https://picsum.photos/seed/gurez/800/600",
  },
  {
    id: 7,
    name: "Ladakh",
    image: "https://picsum.photos/seed/ladakh/800/600",
  }
];

export const CATEGORIES = [
  {
    id: 1,
    name: "Honeymoon Specials",
    price: "₹24,999",
    image: "https://picsum.photos/seed/honeymoon/800/600",
    description: "Romantic getaways designed for newlyweds in the heart of the valley.",
  },
  {
    id: 2,
    name: "Family Packages",
    price: "₹18,500",
    image: "https://picsum.photos/seed/family/800/600",
    description: "Fun-filled vacations for all ages with comfortable stays and activities.",
  },
  {
    id: 3,
    name: "Adventure Tours",
    price: "₹15,000",
    image: "https://picsum.photos/seed/adventure/800/600",
    description: "Trekking, skiing, and rafting for those who seek the thrill of the wild.",
  },
  {
    id: 4,
    name: "Luxury Escapes",
    price: "₹35,000",
    image: "https://picsum.photos/seed/luxury/800/600",
    description: "World-class resorts and private houseboats for a regal experience.",
  },
  {
    id: 5,
    name: "Budget Friendly",
    price: "₹9,999",
    image: "https://picsum.photos/seed/budget/800/600",
    description: "Explore the beauty of Kashmir without breaking the bank.",
  },
  {
    id: 6,
    name: "Group Tours",
    price: "₹12,500",
    image: "https://picsum.photos/seed/group/800/600",
    description: "Join fellow travelers and share the magic of the mountains together.",
  },
  {
    id: 7,
    name: "Winter Special",
    price: "₹21,000",
    image: "https://picsum.photos/seed/winter/800/600",
    description: "Experience the winter wonderland of Gulmarg with our special skiing packages.",
  }
];

export const PACKAGES = [
  {
    id: 1,
    title: "Kashmir Honeymoon Special",
    image: "https://picsum.photos/seed/kashmir1/800/600",
    duration: "5 Nights / 6 Days",
    location: "Srinagar - Gulmarg - Pahalgam",
    price: "₹24,999",
    originalPrice: "₹45,450",
    discount: "45% OFF",
    rating: 4.9,
    destination: "Srinagar",
    category: "Honeymoon Specials",
    description: "Experience the ultimate romantic getaway in the heart of Kashmir. This specially curated honeymoon package takes you through the most scenic spots of Srinagar, Gulmarg, and Pahalgam, providing a perfect blend of luxury, comfort, and breathtaking views.",
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", details: "Welcome to Srinagar! Transfer to a luxury houseboat on Dal Lake. Enjoy a romantic Shikara ride at sunset." },
      { day: 2, title: "Srinagar Local Sightseeing", details: "Visit the famous Mughal Gardens - Nishat Bagh and Shalimar Bagh. Explore the old city and local markets." },
      { day: 3, title: "Srinagar to Gulmarg", details: "Drive to Gulmarg, the 'Meadow of Flowers'. Enjoy the Gondola ride and walk through the pine forests." },
      { day: 4, title: "Gulmarg to Pahalgam", details: "Proceed to Pahalgam, the 'Valley of Shepherds'. Visit the saffron fields and Awantipora ruins on the way." },
      { day: 5, title: "Pahalgam Exploration", details: "Visit Betaab Valley, Aru Valley, and Chandanwari. Enjoy a pony ride along the Lidder River." },
      { day: 6, title: "Departure from Srinagar", details: "Transfer to Srinagar Airport for your onward journey with beautiful memories." }
    ],
    inclusions: ["Luxury Houseboat Stay", "Deluxe Hotel Accommodation", "Daily Breakfast & Dinner", "Private AC Vehicle", "Shikara Ride", "All Tolls & Taxes"],
    exclusions: ["Airfare", "Gondola Ride Tickets", "Pony Rides", "Lunch", "Personal Expenses"]
  },
  {
    id: 2,
    title: "Family Adventure in Gulmarg",
    image: "https://picsum.photos/seed/kashmir2/800/600",
    duration: "4 Nights / 5 Days",
    location: "Gulmarg - Sonamarg",
    price: "₹18,500",
    originalPrice: "₹33,600",
    discount: "45% OFF",
    rating: 4.8,
    destination: "Gulmarg",
    category: "Family Packages",
    description: "A perfect adventure for the whole family. Explore the snowy peaks of Gulmarg and the golden meadows of Sonamarg. This package is designed to keep both kids and adults engaged with fun activities and comfortable stays.",
    itinerary: [
      { day: 1, title: "Arrival & Transfer to Gulmarg", details: "Pickup from Srinagar Airport and direct transfer to Gulmarg. Evening at leisure." },
      { day: 2, title: "Gulmarg Snow Fun", details: "Full day for Gondola rides, skiing, and snow activities. Perfect for family photos." },
      { day: 3, title: "Gulmarg to Sonamarg", details: "Scenic drive to Sonamarg. Check-in at hotel and evening walk by the river." },
      { day: 4, title: "Sonamarg Glacier Visit", details: "Visit Thajiwas Glacier on a pony. Enjoy the breathtaking views of the golden meadows." },
      { day: 5, title: "Departure via Srinagar", details: "Transfer back to Srinagar Airport for departure." }
    ],
    inclusions: ["Family Suite Stays", "Breakfast & Dinner", "All Transfers", "Local Guide Assistance"],
    exclusions: ["Activity Charges", "Gondola Tickets", "Lunches", "Tips"]
  },
  {
    id: 3,
    title: "Srinagar & Dal Lake Escape",
    image: "https://picsum.photos/seed/kashmir3/800/600",
    duration: "3 Nights / 4 Days",
    location: "Dal Lake - Mughal Gardens",
    price: "₹12,999",
    originalPrice: "₹23,600",
    discount: "45% OFF",
    rating: 5.0,
    destination: "Srinagar",
    category: "Budget Friendly",
    description: "A quick and affordable escape to the beautiful city of Srinagar. Experience the iconic Dal Lake and the historic Mughal Gardens without stretching your budget.",
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", details: "Check-in at hotel/houseboat. Evening Shikara ride on Dal Lake." },
      { day: 2, title: "Mughal Gardens Tour", details: "Visit Nishat, Shalimar, and Cheshmashahi gardens. Visit the Shankaracharya Temple." },
      { day: 3, title: "Day Trip to Doodhpathri", details: "Explore the hidden gem of Doodhpathri, the 'Valley of Milk'." },
      { day: 4, title: "Departure", details: "Morning shopping at local market and transfer to airport." }
    ],
    inclusions: ["Standard Accommodation", "Breakfast", "Airport Transfers", "Sightseeing"],
    exclusions: ["Entry Fees", "Personal Expenses", "Dinner"]
  },
  {
    id: 4,
    title: "Complete Kashmir Tour",
    image: "https://picsum.photos/seed/kashmir4/800/600",
    duration: "7 Nights / 8 Days",
    location: "Srinagar - Gulmarg - Pahalgam - Sonamarg",
    price: "₹32,500",
    originalPrice: "₹59,000",
    discount: "45% OFF",
    rating: 4.9,
    destination: "Srinagar",
    category: "Family Packages",
    description: "The ultimate Kashmir experience covering all major destinations. From the houseboats of Srinagar to the glaciers of Sonamarg, this 8-day journey covers it all.",
    itinerary: [
      { day: 1, title: "Arrival & Houseboat Stay", details: "Welcome to Srinagar. Overnight stay in a traditional houseboat." },
      { day: 2, title: "Srinagar to Pahalgam", details: "Drive to Pahalgam. Visit Saffron fields and Awantipora ruins." },
      { day: 3, title: "Pahalgam Local", details: "Visit Betaab Valley and Aru Valley." },
      { day: 4, title: "Pahalgam to Gulmarg", details: "Transfer to Gulmarg. Evening walk in the meadows." },
      { day: 5, title: "Gulmarg Activities", details: "Gondola ride and local sightseeing." },
      { day: 6, title: "Gulmarg to Sonamarg", details: "Full day drive to Sonamarg." },
      { day: 7, title: "Sonamarg to Srinagar", details: "Visit Thajiwas Glacier and return to Srinagar." },
      { day: 8, title: "Departure", details: "Final shopping and airport transfer." }
    ],
    inclusions: ["All Accommodations", "Breakfast & Dinner", "AC Vehicle", "Local Sightseeing"],
    exclusions: ["Airfare", "Activity Tickets", "Personal Expenses"]
  },
  {
    id: 5,
    title: "Winter Special Gulmarg",
    image: "https://picsum.photos/seed/kashmir5/800/600",
    duration: "4 Nights / 5 Days",
    location: "Gulmarg Skiing Resort",
    price: "₹21,000",
    originalPrice: "₹38,200",
    discount: "45% OFF",
    rating: 4.7,
    destination: "Gulmarg",
    category: "Winter Special",
    description: "Embrace the winter magic in Gulmarg. This package is perfect for snow lovers and skiing enthusiasts. Stay close to the slopes and enjoy the best of winter in Kashmir.",
    itinerary: [
      { day: 1, title: "Arrival & Transfer", details: "Transfer from Srinagar to Gulmarg. Check-in at a heated hotel." },
      { day: 2, title: "Skiing Lesson 1", details: "Introduction to skiing with professional instructors." },
      { day: 3, title: "Gondola Phase 2", details: "Take the Gondola to the highest point for breathtaking views." },
      { day: 4, title: "Local Exploration", details: "Visit the historic St. Mary's Church and local market." },
      { day: 5, title: "Departure", details: "Transfer back to Srinagar Airport." }
    ],
    inclusions: ["Heated Rooms", "Skiing Gear (1 day)", "Breakfast & Dinner", "Transfers"],
    exclusions: ["Gondola Tickets", "Advanced Skiing Lessons", "Lunch"]
  },
  {
    id: 6,
    title: "Leh Ladakh Adventure",
    image: "https://picsum.photos/seed/kashmir6/800/600",
    duration: "6 Nights / 7 Days",
    location: "Leh - Nubra Valley - Pangong",
    price: "₹28,500",
    originalPrice: "₹52,000",
    discount: "45% OFF",
    rating: 4.9,
    destination: "Ladakh",
    category: "Adventure Tours",
    description: "A journey to the 'Land of High Passes'. Experience the unique culture and stunning landscapes of Ladakh, including the high-altitude Pangong Lake and the sand dunes of Nubra Valley.",
    itinerary: [
      { day: 1, title: "Arrival in Leh", details: "Rest and acclimatize to the high altitude." },
      { day: 2, title: "Leh Local", details: "Visit Leh Palace, Shanti Stupa, and Hall of Fame." },
      { day: 3, title: "Leh to Nubra Valley", details: "Drive via Khardung La, the highest motorable road." },
      { day: 4, title: "Nubra to Pangong", details: "Drive to the stunning Pangong Tso via Shyok river." },
      { day: 5, title: "Pangong to Leh", details: "Return to Leh via Chang La pass." },
      { day: 6, title: "Leh Departure", details: "Transfer to Leh Airport." }
    ],
    inclusions: ["Inner Line Permits", "Accommodation", "Breakfast & Dinner", "Oxygen Cylinders in Vehicle"],
    exclusions: ["Airfare", "Monastery Entry Fees", "Personal Expenses"]
  },
  {
    id: 7,
    title: "Luxury Houseboat Stay",
    image: "https://picsum.photos/seed/kashmir7/800/600",
    duration: "2 Nights / 3 Days",
    location: "Dal Lake, Srinagar",
    price: "₹15,000",
    originalPrice: "₹27,000",
    discount: "45% OFF",
    rating: 4.8,
    destination: "Srinagar",
    category: "Luxury Escapes",
    description: "Indulge in the regal charm of a luxury houseboat on Dal Lake. Experience personalized service, traditional Kashmiri cuisine, and the serene beauty of the lake.",
    itinerary: [
      { day: 1, title: "Arrival & Welcome", details: "Traditional welcome on the houseboat. Evening Shikara ride." },
      { day: 2, title: "Lake Exploration", details: "Visit floating markets and nearby gardens by Shikara." },
      { day: 3, title: "Departure", details: "Morning breakfast and transfer to airport." }
    ],
    inclusions: ["Luxury Houseboat", "All Meals", "Private Shikara", "Airport Transfers"],
    exclusions: ["Personal Shopping", "Tips", "Laundry"]
  },
  {
    id: 8,
    title: "Sonamarg Meadow Trek",
    image: "https://picsum.photos/seed/kashmir8/800/600",
    duration: "3 Nights / 4 Days",
    location: "Sonamarg - Thajiwas Glacier",
    price: "₹14,500",
    originalPrice: "₹26,000",
    discount: "45% OFF",
    rating: 4.7,
    destination: "Sonamarg",
    category: "Adventure Tours",
    description: "Trek through the golden meadows of Sonamarg to the majestic Thajiwas Glacier. A perfect short trek for nature lovers and adventure seekers.",
    itinerary: [
      { day: 1, title: "Arrival in Sonamarg", details: "Transfer from Srinagar. Evening walk in the meadows." },
      { day: 2, title: "Glacier Trek", details: "Full day trek to Thajiwas Glacier. Picnic lunch included." },
      { day: 3, title: "River Rafting", details: "Optional river rafting in the Sindh river." },
      { day: 4, title: "Departure", details: "Transfer back to Srinagar." }
    ],
    inclusions: ["Tent/Hotel Stay", "All Meals", "Trekking Guide", "Pony for Luggage"],
    exclusions: ["Rafting Charges", "Personal Gear", "Tips"]
  }
];
