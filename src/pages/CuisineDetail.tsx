import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CuisineDetail() {
  const navigate = useNavigate();

  const content = {
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
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h1 className="text-white text-2xl font-bold mb-2">
            {content.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-slate-600 mb-6">{content.description}</p>

        {/* Highlights */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-nature-700">
            Highlights
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {content.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-nature-100/60 p-3 rounded-lg text-nature-800 border border-nature-200 shadow-sm"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* Popular Dishes */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-nature-700">
            Popular Dishes
          </h2>
          <div className="space-y-4">
            {content.popularDishes.map((dish, index) => (
              <div
                key={index}
                className="bg-nature-100/60 border border-nature-200 rounded-lg p-4 hover:border-nature-400 transition-colors shadow-sm"
              >
                <h3 className="font-semibold text-nature-700 mb-1">
                  {dish.name}
                </h3>
                <p className="text-slate-700 text-sm">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
