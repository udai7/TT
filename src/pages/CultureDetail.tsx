import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CultureDetail() {
  const navigate = useNavigate();

  const content = {
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

        {/* Major Festivals */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-nature-700">
            Major Festivals
          </h2>
          <div className="space-y-4">
            {content.festivals.map((festival, index) => (
              <div
                key={index}
                className="bg-nature-100/60 border border-nature-200 rounded-lg p-4 hover:border-nature-400 transition-colors shadow-sm"
              >
                <h3 className="font-semibold text-nature-700 mb-1">
                  {festival.name}
                </h3>
                <p className="text-slate-600 text-sm">{festival.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
