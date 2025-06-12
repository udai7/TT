import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Filter, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CultureFood() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(
    location.pathname.includes("local-cuisine") ? "cuisine" : "heritage",
  );

  const cuisineItems = [
    {
      id: 1,
      name: "Mui Borok",
      description:
        "Traditional Tripura dish made with fermented fish and vegetables",
      image: "/tripura-cuisine.webp",
      location: "Agartala",
      rating: 4.8,
      category: "Traditional",
    },
    {
      id: 2,
      name: "Chakhwi",
      description: "A popular meat dish cooked with local herbs and spices",
      image: "/chakwi.webp",
      location: "Udaipur",
      rating: 4.6,
      category: "Meat",
    },
    {
      id: 3,
      name: "Berma",
      description: "Fermented fish paste, a staple in Tripura cuisine",
      image: "/berma.jpg",
      location: "Dharmanagar",
      rating: 4.7,
      category: "Seafood",
    },
    {
      id: 4,
      name: "Wahan Mosdeng",
      description: "Traditional pork dish with bamboo shoots and local spices",
      image: "/wahan.jpg",
      location: "Kailashahar",
      rating: 4.5,
      category: "Meat",
    },
  ];

  const heritageItems = [
    {
      id: 1,
      name: "Garia Puja",
      description: "A major festival celebrating the deity Garia",
      image: "/garia-festival.jpg",
      location: "Agartala",
      rating: 4.9,
      category: "Festival",
    },
    {
      id: 2,
      name: "Kharchi Puja",
      description: "Seven-day festival honoring the fourteen deities",
      image: "/tribal-festival.jpg",
      location: "Udaipur",
      rating: 4.8,
      category: "Festival",
    },
    {
      id: 3,
      name: "Ker Puja",
      description: "Traditional festival for community welfare",
      image: "/ker.jpg",
      location: "Dharmanagar",
      rating: 4.7,
      category: "Festival",
    },
    {
      id: 4,
      name: "Durga Puja",
      description:
        "Grand celebration of Goddess Durga with cultural performances",
      image: "/durga.webp",
      location: "Agartala",
      rating: 4.9,
      category: "Festival",
    },
  ];

  const categories =
    activeTab === "cuisine"
      ? ["All", "Traditional", "Meat", "Seafood"]
      : ["All", "Festival", "Dance", "Music", "Art"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = (
    activeTab === "cuisine" ? cuisineItems : heritageItems
  ).filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  return (
    <div className="h-full overflow-y-auto bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="mr-2"
          >
            <ArrowLeft size={24} />
          </Button>
          <h1 className="text-xl font-bold">Culture & Food</h1>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
              size={20}
            />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white border-slate-200"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-3 text-center ${
              activeTab === "cuisine"
                ? "text-nature-600 border-b-2 border-nature-600"
                : "text-slate-500"
            }`}
            onClick={() => {
              setActiveTab("cuisine");
              setSelectedCategory("All");
              navigate("/culture-food/local-cuisine");
            }}
          >
            Local Cuisine
          </button>
          <button
            className={`flex-1 py-3 text-center ${
              activeTab === "heritage"
                ? "text-nature-600 border-b-2 border-nature-600"
                : "text-slate-500"
            }`}
            onClick={() => {
              setActiveTab("heritage");
              setSelectedCategory("All");
              navigate("/culture-food/cultural-heritage");
            }}
          >
            Cultural Heritage
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-between gap-2 p-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={`flex-1 ${
                selectedCategory === category
                  ? "bg-nature-600 text-white hover:bg-nature-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden shadow-md border-0 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() =>
                activeTab === "cuisine"
                  ? navigate(`/culture-food/local-cuisine/${item.id}`)
                  : navigate(`/culture-food/cultural-heritage/${item.id}`)
              }
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-white/90 text-slate-700 hover:bg-white">
                    <Star
                      size={12}
                      className="mr-1 fill-yellow-400 text-yellow-400"
                    />
                    {item.rating}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={12} className="text-white" />
                    <span className="text-white text-xs">{item.location}</span>
                  </div>
                  <h3 className="text-white text-lg font-bold mb-1">
                    {item.name}
                  </h3>
                  <p className="text-white/90 text-xs line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
