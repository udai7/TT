import { useState } from "react";
import {
  Search,
  Bell,
  Star,
  ArrowRight,
  MapPin,
  Camera,
  Hotel,
  Package,
  Landmark,
  Map,
  BookOpen,
  MessageSquare,
  Menu,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { destinations, tourPackages } from "@/lib/tourismData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const quickAccessItems = [
    {
      icon: Map,
      label: "Map",
      color: "nature",
      path: "/map",
    },
    { icon: Hotel, label: "Hotels", color: "ocean", path: "/hotels" },
    { icon: BookOpen, label: "Guide", color: "sand", path: "/packages" },
    { icon: MessageSquare, label: "Chatbot", color: "nature", path: "/chat" },
  ];

  const featuredDestinations = destinations;
  const featuredPackages = tourPackages.slice(0, 2);

  return (
    <div className="h-full overflow-y-auto bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="pb-20">
        {/* Header */}
        <div
          className="relative h-64 bg-cover bg-center overflow-hidden animate-background"
          style={{ backgroundImage: "url('/unakoti.jpg')" }}
        >
          <style>
            {`
              @keyframes backgroundChange {
                0% { background-image: url('/unakoti.jpg'); }
                33% { background-image: url('/kunjaban-palace.webp'); }
                66% { background-image: url('/neermahal.jpg'); }
                100% { background-image: url('/unakoti.jpg'); }
              }
              .animate-background {
                animation: backgroundChange 15s infinite;
                height: 16rem; /* Ensure the height matches the previous size */
              }
            `}
          </style>
          {/* Navbar */}
          <div className="flex items-center justify-between bg-white shadow-md">
            <Button variant="ghost" size="icon" className="text-slate-700">
              <Menu size={24} />
            </Button>
            <div className="flex items-center">
              <img src="/lg.png" alt="Tourism Icon" className="h-10" />
            </div>
            <Button variant="ghost" size="icon" className="text-slate-700">
              <User size={24} />
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative p-6">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
              size={20}
            />
            <Input
              placeholder="Search destinations, hotels, packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/95 backdrop-blur-sm border-0 shadow-lg"
            />
          </div>
        </div>

        {/* Quick Access */}
        <div className="px-6 -mt-8 relative z-20">
          <Card className="shadow-lg border-0">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-3 text-slate-800 text-center">
                Our Features
              </h2>
              <div className="grid grid-cols-4 gap-3">
                {quickAccessItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(item.path)}
                    className="flex flex-col items-center space-y-1 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${
                        item.color === "nature"
                          ? "bg-nature-500"
                          : item.color === "ocean"
                            ? "bg-ocean-500"
                            : "bg-sand-500"
                      }`}
                    >
                      {typeof item.icon === "string" ? (
                        <span className="text-lg">{item.icon}</span>
                      ) : (
                        <item.icon size={18} color="white" />
                      )}
                    </div>
                    <span className="text-xs font-medium text-slate-700">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Destinations */}
        <div className="px-6 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">
              Featured Destinations
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/destinations")}
              className="text-nature-600"
            >
              View All
              <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>

          <div className="flex overflow-x-auto hide-scrollbar pb-4">
            {featuredDestinations.map((destination) => (
              <Card
                key={destination.id}
                className="flex-shrink-0 w-64 mr-4 overflow-hidden shadow-md border-0 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/destinations/${destination.id}`)}
              >
                <div className="relative h-40">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 text-slate-700 hover:bg-white">
                      <Star
                        size={12}
                        className="mr-1 fill-yellow-400 text-yellow-400"
                      />
                      {destination.rating}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/10 backdrop-blur-sm">
                    <h3 className="text-white text-lg font-bold mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-white/90 text-xs line-clamp-2">
                      {destination.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tripura Cuisine */}
        <div className="px-6 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">
              Tripura Cuisine
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/culture-food/local-cuisine")}
              className="text-nature-600"
            >
              View All
              <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>

          <div className="flex overflow-x-auto hide-scrollbar pb-4">
            {[1, 2, 3].map((item) => (
              <Card
                key={item}
                className="flex-shrink-0 w-64 mr-4 overflow-hidden shadow-md border-0 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate("/culture-food/local-cuisine")}
              >
                <div className="relative h-40">
                  <img
                    src={`/tripura-cuisine.webp`}
                    alt={`Food ${item}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/10 backdrop-blur-sm">
                    <h3 className="text-white text-lg font-bold mb-1">
                      Dish {item}
                    </h3>
                    <p className="text-white/90 text-xs line-clamp-2">
                      A brief description of this amazing Tripura dish.
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tripura Culture */}
        <div className="px-6 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">
              Tripura Culture & Festivals
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/culture-food/cultural-heritage")}
              className="text-nature-600"
            >
              View All
              <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>

          <div className="flex overflow-x-auto hide-scrollbar pb-4">
            {[1, 2, 3].map((item) => (
              <Card
                key={item}
                className="flex-shrink-0 w-64 mr-4 overflow-hidden shadow-md border-0 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate("/culture-food/cultural-heritage")}
              >
                <div className="relative h-40">
                  <img
                    src={`garia-festival.jpg`}
                    alt={`Culture ${item}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/10 backdrop-blur-sm">
                    <h3 className="text-white text-lg font-bold mb-1">
                      Festival {item}
                    </h3>
                    <p className="text-white/90 text-xs line-clamp-2">
                      Experience the vibrant culture of Tripura with this
                      festival.
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Packages */}
        <div className="px-6 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">Tour Packages</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/packages")}
              className="text-nature-600"
            >
              View All
              <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>

          <div className="space-y-4">
            {featuredPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className="shadow-md border-0 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/packages/${pkg.id}`)}
              >
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-slate-800">
                          {pkg.name}
                        </h3>
                        <div className="text-right">
                          <div className="text-lg font-bold text-nature-600">
                            ₹{pkg.price.toLocaleString()}
                          </div>
                          <div className="text-xs text-slate-500">
                            {pkg.duration}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Star
                          size={12}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        <span className="text-sm text-slate-600">
                          {pkg.rating}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {pkg.highlights.join(" • ")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Floating Action Button */}
        <button
          onClick={() => navigate("/camera")}
          className="fixed bottom-24 right-6 w-14 h-14 bg-nature-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-nature-600 transition-colors z-30"
        >
          <Camera size={24} />
        </button>
      </div>
    </div>
  );
}
