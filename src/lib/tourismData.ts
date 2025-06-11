export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  category: "historical" | "nature" | "cultural" | "adventure";
  highlights: string[];
  location: {
    lat: number;
    lng: number;
  };
}

export interface TourPackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  image: string;
  highlights: string[];
  rating: number;
  destinations: string[];
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  rating: number;
  price: number;
  amenities: string[];
  location: string;
}

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Unakoti",
    description:
      "Ancient rock-cut sculptures and carvings dating back to 7th-9th centuries, featuring Hindu deities.",
    image:
      "/unakoti.jpg",
    rating: 4.6,
    category: "historical",
    highlights: [
      "Rock-cut sculptures",
      "1000+ carvings",
      "Ancient heritage",
      "Spiritual significance",
    ],
    location: { lat: 24.3155, lng: 92.0869 },
  },
  {
    id: "2",
    name: "Ujjayanta Palace",
    description:
      "Former royal palace and current state museum showcasing Tripura's rich cultural heritage.",
    image:
      "ujjayanta-palace.png",
    rating: 4.4,
    category: "historical",
    highlights: [
      "Royal architecture",
      "Museum collections",
      "Mughal gardens",
      "Cultural artifacts",
    ],
    location: { lat: 23.8315, lng: 91.2868 },
  },
  {
    id: "3",
    name: "Neermahal",
    description:
      "Beautiful water palace built in the middle of Rudrasagar Lake, blending Hindu and Islamic architecture.",
    image:
      "neermahal.jpg",
    rating: 4.7,
    category: "historical",
    highlights: [
      "Water palace",
      "Boat rides",
      "Unique architecture",
      "Lake views",
    ],
    location: { lat: 23.7937, lng: 91.3478 },
  },
  {
    id: "4",
    name: "Sepahijala Wildlife Sanctuary",
    description:
      "Home to diverse flora and fauna including spectacled monkeys, birds, and botanical gardens.",
    image:
      "sepahijala.jpeg",
    rating: 4.3,
    category: "nature",
    highlights: [
      "Wildlife sanctuary",
      "Spectacled monkeys",
      "Bird watching",
      "Nature trails",
    ],
    location: { lat: 23.6288, lng: 91.2527 },
  },
  {
    id: "5",
    name: "Jampui Hills",
    description:
      "Scenic hill station known for orange cultivation, tribal culture, and breathtaking sunrise views.",
    image:
      "jampui-hills.webp",
    rating: 4.5,
    category: "nature",
    highlights: [
      "Hill station",
      "Orange gardens",
      "Tribal culture",
      "Mountain views",
    ],
    location: { lat: 24.1022, lng: 92.3767 },
  },
  {
    id: "6",
    name: "Tripura Sundari Temple",
    description:
      "One of the 51 Shakti Peethas, this ancient temple is dedicated to Goddess Tripura Sundari.",
    image:
      "tripura-sundari.jpeg",
    rating: 4.8,
    category: "cultural",
    highlights: [
      "Sacred temple",
      "Shakti Peetha",
      "Religious significance",
      "Ancient architecture",
    ],
    location: { lat: 23.8962, lng: 91.31 },
  },
];

export const tourPackages: TourPackage[] = [
  {
    id: "1",
    name: "Heritage Tripura",
    price: 12999,
    duration: "4 Days / 3 Nights",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    highlights: ["Ujjayanta Palace", "Neermahal", "Unakoti", "Local cuisine"],
    rating: 4.6,
    destinations: ["1", "2", "3"],
  },
  {
    id: "2",
    name: "Nature Explorer",
    price: 9999,
    duration: "3 Days / 2 Nights",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    highlights: [
      "Sepahijala Wildlife",
      "Jampui Hills",
      "Orange orchards",
      "Tribal villages",
    ],
    rating: 4.4,
    destinations: ["4", "5"],
  },
  {
    id: "3",
    name: "Spiritual Journey",
    price: 8999,
    duration: "2 Days / 1 Night",
    image:
      "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=800&h=600&fit=crop",
    highlights: [
      "Tripura Sundari Temple",
      "Chaturdasha Temple",
      "Spiritual ceremonies",
      "Temple tours",
    ],
    rating: 4.7,
    destinations: ["6"],
  },
  {
    id: "4",
    name: "Complete Tripura",
    price: 18999,
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop",
    highlights: [
      "All major destinations",
      "Cultural experiences",
      "Adventure activities",
      "Local interactions",
    ],
    rating: 4.8,
    destinations: ["1", "2", "3", "4", "5", "6"],
  },
];

export const hotels: Hotel[] = [
  {
    id: "1",
    name: "Royal Guest House",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    rating: 4.3,
    price: 3500,
    amenities: ["Free WiFi", "AC", "Restaurant", "Room Service"],
    location: "Agartala",
  },
  {
    id: "2",
    name: "Hill View Resort",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    rating: 4.5,
    price: 4200,
    amenities: ["Mountain View", "Restaurant", "Spa", "Garden"],
    location: "Jampui Hills",
  },
  {
    id: "3",
    name: "Heritage Palace Hotel",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    rating: 4.6,
    price: 5500,
    amenities: ["Heritage Property", "Pool", "Fine Dining", "Cultural Shows"],
    location: "Near Ujjayanta Palace",
  },
];

export const foodItems = [
  {
    id: "1",
    name: "Mui Borok",
    description: "Traditional fermented fish curry with vegetables",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    category: "Main Course",
  },
  {
    id: "2",
    name: "Bhangui",
    description: "Fermented fish with bamboo shoots and vegetables",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    category: "Main Course",
  },
  {
    id: "3",
    name: "Wahan Mosdeng",
    description: "Pork curry with black sesame seeds",
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop",
    category: "Main Course",
  },
  {
    id: "4",
    name: "Chakhwi",
    description: "Bamboo shoot curry with dried fish",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    category: "Curry",
  },
];

export const events = [
  {
    id: "1",
    name: "Kharchi Puja",
    date: "2024-07-25",
    description: "Major festival celebrating the 14 deities of Tripura",
    image:
      "spiritual.jpg",
    location: "Chaturdasha Temple",
  },
  {
    id: "2",
    name: "Garia Puja",
    date: "2024-04-15",
    description: "Harvest festival celebrating prosperity and abundance",
    image:
      "garia-festival.jpg",
    location: "Various Temples",
  },
  {
    id: "3",
    name: "Orange Festival",
    date: "2024-12-10",
    description: "Celebration of orange harvest in Jampui Hills",
    image:
      "orange-festival.jpg",
    location: "Jampui Hills",
  },
];
