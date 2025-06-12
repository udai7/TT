import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MapPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");

  const filters = ["All", "Hotels", "Petrol Pump", "Restaurants"];
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="h-full overflow-y-auto bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Top Search Bar (Navbar) */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="mr-2"
        >
          <ArrowLeft size={24} />
        </Button>
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <Input
            placeholder="Search on map..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white border-slate-200"
          />
        </div>
      </div>

      {/* Map Image */}
      <div className="relative h-64 bg-gray-200 flex items-center justify-center">
        <img
          src="/map.png" // Placeholder image for Tripura Map
          alt="Tripura Map"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between gap-2 p-4 overflow-x-auto hide-scrollbar border-b border-slate-200">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            size="sm"
            className={`flex-shrink-0 ${activeFilter === filter ? "bg-nature-600 text-white hover:bg-nature-700" : "text-slate-600 hover:bg-slate-100"}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Location Inputs */}
      <div className="p-4 space-y-4">
        <div className="relative">
          <MapPin
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <Input
            placeholder="Current Location"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
            className="pl-10 bg-white border-slate-200"
          />
        </div>
        <div className="relative">
          <MapPin
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <Input
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="pl-10 bg-white border-slate-200"
          />
        </div>
        <Button className="w-full bg-nature-600 hover:bg-nature-700 text-white">
          Get Directions
        </Button>

        {/* Nearby Event Ad */}
        <div className="mt-6 p-4 border border-slate-200 rounded-lg flex items-center space-x-4 bg-slate-50">
          <img
            src="/spiritual.jpg" // Placeholder for event image
            alt="Nearby Event"
            className="w-20 h-20 object-cover rounded-md"
          />
          <div>
            <h3 className="font-semibold text-slate-800">
              Upcoming Cultural Fest!
            </h3>
            <p className="text-sm text-slate-600">
              Join us for a vibrant celebration of local traditions. Date: 25th
              Dec
            </p>
            <button className="text-nature-600 text-sm mt-1 hover:underline">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
