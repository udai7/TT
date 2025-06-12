import { ArrowLeft, Star, Clock, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { tourPackages } from "@/lib/tourismData";

export default function Packages() {
  const navigate = useNavigate();

  return (
    <div className="pb-20 bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/home")}
            className="text-slate-600"
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold text-slate-800">Tour Packages</h1>
        </div>
      </div>

      {/* Packages List */}
      <div className="p-6 space-y-4">
        {tourPackages.map((pkg) => (
          <Card key={pkg.id} className="shadow-md border-0">
            <CardContent className="p-0">
              <div className="relative h-40">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-white/90 text-slate-700 hover:bg-white">
                    <Star
                      size={12}
                      className="mr-1 fill-yellow-400 text-yellow-400"
                    />
                    {pkg.rating}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/10 backdrop-blur-sm rounded-b-lg">
                  <h3 className="text-white text-lg font-bold mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-white/90 text-xs line-clamp-2">
                    {pkg.description}
                  </p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center text-slate-600 text-sm mb-2">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    2-6 people
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.highlights.slice(0, 3).map((highlight, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs border-nature-200 text-nature-700"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full bg-nature-500 hover:bg-nature-600">
                  <Calendar size={16} className="mr-2" />
                  Book Now
                </Button>
              </CardContent>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
