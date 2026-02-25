export interface PostItem {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
}

export const featuredPost: PostItem = {
  id: 1,
  title: "Bali in 2026: The Ultimate First-Timer's Guide",
  description: "Everything you need to know before visiting Bali — from choosing the right neighborhood to the best temples, beaches, and rice terraces. A detailed 10-day itinerary with budget tips and local hacks.",
  category: "Islands",
  date: "Feb 18, 2026",
  imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
};

export const postList: PostItem[] = [
  {
    id: 2,
    title: "3 Days in Istanbul: What to See & Where to Eat",
    description: "A compact itinerary covering Istanbul's highlights — from Hagia Sophia to the street food stalls of Kadikoy. Transport tips and budget breakdown included.",
    category: "Cities",
    date: "Feb 17, 2026",
    imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Trekking Nepal: The Everest Base Camp Route",
    description: "A complete guide to the EBC trek — preparation, gear, acclimatization, and daily stages. First-hand experience with real photos from the trail.",
    category: "Mountains",
    date: "Feb 16, 2026",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "10 Secret Beaches in Thailand You Haven't Heard Of",
    description: "Tired of Phuket crowds? We've found hidden beaches on Ko Lipe, Ko Kradan, and Ko Mook that are still blissfully uncrowded.",
    category: "Beaches",
    date: "Feb 15, 2026",
    imageUrl: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "A Food Lover's Road Trip Through Italy",
    description: "Pizza, pasta, wine, and truffles — travel through Italy via its cuisine. The best restaurants, markets, and cooking classes from Naples to Bologna.",
    category: "Food & Travel",
    date: "Feb 14, 2026",
    imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Japan in Spring: Cherry Blossom Season 2026",
    description: "When and where to see the best cherry blossoms. Our 2026 forecast, top parks in Tokyo and Kyoto, and the art of hanami picnics.",
    category: "Culture",
    date: "Feb 13, 2026",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    title: "Iceland's Ring Road: A 7-Day Self-Drive Adventure",
    description: "Route 1 around the entire island — waterfalls, geysers, glaciers, and black sand beaches. Car rental tips, overnight stops, and budget planning.",
    category: "Adventure",
    date: "Feb 12, 2026",
    imageUrl: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    title: "How to Pack a Backpack for a Round-the-World Trip",
    description: "Minimalism in action — what to bring on a long-term trip so your pack stays under 10 kg. A tried-and-tested packing checklist.",
    category: "Tips",
    date: "Feb 11, 2026",
    imageUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    title: "Morocco: From the Medinas of Fez to the Sahara Desert",
    description: "A two-week Morocco itinerary — Marrakech, Fez, Chefchaouen, a night in the desert, and the Atlantic coast. Haggling tips and mint tea rituals.",
    category: "Adventure",
    date: "Feb 10, 2026",
    imageUrl: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400&h=300&fit=crop",
  },
];

export const categories = [
  { id: 1, name: "Beaches", icon: "Umbrella" },
  { id: 2, name: "Mountains", icon: "Mountain" },
  { id: 3, name: "Cities", icon: "Building2" },
  { id: 4, name: "Culture", icon: "Landmark" },
  { id: 5, name: "Adventure", icon: "Compass" },
  { id: 6, name: "Food & Travel", icon: "UtensilsCrossed" },
];
