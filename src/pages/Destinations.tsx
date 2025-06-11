import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  MapPin,
  Heart,
  Share2,
  Camera,
  Navigation,
  Filter,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { destinations } from "@/lib/tourismData";

export default function Destinations() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // If ID is provided, show destination details
  if (id) {
    const destination = destinations.find((d) => d.id === id);
    if (!destination) {
      return <div>Destination not found</div>;
    }

    return <DestinationDetail destination={destination} />;
  }

  // Otherwise show destinations listing
  const categories = [
    { value: "all", label: "All" },
    { value: "historical", label: "Historical" },
    { value: "nature", label: "Nature" },
    { value: "cultural", label: "Cultural" },
    { value: "adventure", label: "Adventure" },
  ];

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || destination.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pb-20 bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="text-slate-600"
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold text-slate-800">Destinations</h1>
          <Button variant="ghost" size="icon" className="text-slate-600">
            <Filter size={20} />
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={16}
          />
          <Input
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-slate-200"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category.value
                  ? "bg-nature-500 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 gap-6">
          {filteredDestinations.map((destination) => (
            <Card
              key={destination.id}
              className="overflow-hidden shadow-md border-0 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/destinations/${destination.id}`)}
            >
              <div className="relative h-48">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-slate-700 capitalize"
                  >
                    {destination.category}
                  </Badge>
                  <Badge className="bg-white/90 text-slate-700 hover:bg-white">
                    <Star
                      size={12}
                      className="mr-1 fill-yellow-400 text-yellow-400"
                    />
                    {destination.rating}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-md">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-white/90 text-sm line-clamp-2">
                    {destination.description}
                  </p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {destination.highlights
                    .slice(0, 3)
                    .map((highlight, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs border-nature-200 text-nature-700"
                      >
                        {highlight}
                      </Badge>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

interface DestinationDetailProps {
  destination: (typeof destinations)[0];
}

function DestinationDetail({ destination }: DestinationDetailProps) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  return (
    <div className="pb-20 bg-white">
      {/* Hero Image */}
      <div className="relative h-80">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Header Actions */}
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/destinations")}
            className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
          >
            <ArrowLeft size={20} />
          </Button>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLiked(!liked)}
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
            >
              <Heart
                size={20}
                className={liked ? "fill-red-500 text-red-500" : ""}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
            >
              <Share2 size={20} />
            </Button>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-white/90 text-slate-700">
              <Star
                size={12}
                className="mr-1 fill-yellow-400 text-yellow-400"
              />
              {destination.rating}
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/90 text-slate-700 capitalize"
            >
              {destination.category}
            </Badge>
          </div>
          <h1 className="text-white text-3xl font-bold mb-2">
            {destination.name}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="map">Map</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6 space-y-6">
            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold mb-3 text-slate-800">
                About
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {destination.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-lg font-semibold mb-3 text-slate-800">
                Highlights
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {destination.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-nature-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-nature-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Button className="bg-nature-500 hover:bg-nature-600">
                <Navigation size={16} className="mr-2" />
                Get Directions
              </Button>
              <Button variant="outline" className="border-nature-200">
                <Camera size={16} className="mr-2" />
                View Gallery
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden"
                >
                  <img
                    src={destination.image}
                    alt={`${destination.name} ${index}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="map" className="mt-6">
            <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-slate-400 mx-auto mb-2" />
                <p className="text-slate-600">Interactive map coming soon</p>
                <p className="text-sm text-slate-500 mt-1">
                  Lat: {destination.location.lat}, Lng:{" "}
                  {destination.location.lng}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
