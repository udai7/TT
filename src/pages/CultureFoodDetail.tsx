import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CultureFoodDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCuisine = location.pathname.includes("local-cuisine");

  const cuisineContent = {
    title: "Tripura Cuisine",
    description:
      "Tripura's cuisine is a delightful blend of tribal and Bengali influences, offering a unique gastronomic experience. The state's traditional dishes are known for their use of local herbs, bamboo shoots, and fermented fish, creating flavors that are both distinctive and memorable.",
    image: "/tripura-cuisine.webp",
    highlights: [
      "Traditional fermented fish dishes",
      "Bamboo shoot delicacies",
      "Local herbs and spices",
      "Tribal cooking methods",
    ],
    popularDishes: [
      {
        name: "Mui Borok",
        description:
          "A traditional dish made with fermented fish and vegetables, seasoned with local herbs.",
      },
      {
        name: "Chakhwi",
        description:
          "A popular meat dish cooked with bamboo shoots and local spices.",
      },
      {
        name: "Berma",
        description:
          "Fermented fish paste, a staple in Tripura cuisine, used in various dishes.",
      },
      {
        name: "Wahan Mosdeng",
        description:
          "Traditional pork dish with bamboo shoots and local spices.",
      },
    ],
  };

  const cultureContent = {
    title: "Cultural Heritage",
    description:
      "Tripura's cultural heritage is a vibrant tapestry of tribal traditions, festivals, and artistic expressions. The state's rich cultural diversity is reflected in its numerous festivals, traditional dances, music, and handicrafts, making it a fascinating destination for cultural exploration.",
    image: "/culture1.jpg",
    highlights: [
      "Traditional festivals",
      "Tribal dance forms",
      "Folk music",
      "Handicrafts and art",
    ],
    festivals: [
      {
        name: "Garia Puja",
        description:
          "A major festival celebrating the deity Garia, marked by traditional dances and rituals.",
      },
      {
        name: "Kharchi Puja",
        description:
          "Seven-day festival honoring the fourteen deities, featuring grand celebrations.",
      },
      {
        name: "Ker Puja",
        description:
          "Traditional festival for community welfare, celebrated with great enthusiasm.",
      },
      {
        name: "Durga Puja",
        description:
          "Grand celebration of Goddess Durga with cultural performances and festivities.",
      },
    ],
  };

  const content = isCuisine ? cuisineContent : cultureContent;

  return (
    <div className="h-full overflow-y-auto bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Header Image */}
      <div className="relative h-64">
        <img
          src={content.image}
          alt={content.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="bg-white/90 hover:bg-white"
          >
            <ArrowLeft size={24} />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/10 backdrop-blur-sm">
          <h2 className="text-white text-2xl font-bold mb-2">
            {content.title}
          </h2>
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <MapPin size={16} />
            <span>{content.location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-slate-600 mb-6">{content.description}</p>

        {/* Highlights */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Highlights</h2>
          <div className="grid grid-cols-2 gap-2">
            {content.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-slate-50 p-3 rounded-lg text-slate-700"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* Popular Dishes/Festivals */}
        <div>
          <h2 className="text-lg font-semibold mb-3">
            {isCuisine ? "Popular Dishes" : "Major Festivals"}
          </h2>
          <div className="space-y-4">
            {(isCuisine ? content.popularDishes : content.festivals).map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-lg p-4"
                >
                  <h3 className="font-semibold text-slate-800 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
