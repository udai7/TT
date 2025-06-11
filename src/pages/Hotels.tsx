import { ArrowLeft, Star, MapPin, Wifi, Car, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { hotels } from "@/lib/tourismData";

export default function Hotels() {
  const navigate = useNavigate();

  const amenityIcons: Record<string, any> = {
    "Free WiFi": Wifi,
    Restaurant: Coffee,
    "Room Service": Coffee,
    AC: Car,
    Pool: Car,
    Spa: Car,
  };

  return (
    <div className="pb-20 bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="text-slate-600"
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold text-slate-800">Hotels & Stays</h1>
        </div>
      </div>

      {/* Hotels List */}
      <div className="p-6 space-y-4">
        {hotels.map((hotel) => (
          <Card key={hotel.id} className="shadow-md border-0">
            <CardContent className="p-0">
              <div className="flex">
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover rounded-l-lg"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-slate-800 flex-1">
                      {hotel.name}
                    </h3>
                    <div className="text-right ml-2">
                      <div className="text-lg font-bold text-nature-600">
                        ₹{hotel.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-500">per night</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-sm text-slate-600">
                      {hotel.rating}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <MapPin size={12} />
                      {hotel.location}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => {
                      const Icon = amenityIcons[amenity] || Coffee;
                      return (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-slate-200 text-slate-600 px-2 py-1"
                        >
                          <Icon size={10} className="mr-1" />
                          {amenity}
                        </Badge>
                      );
                    })}
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-nature-500 hover:bg-nature-600"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
