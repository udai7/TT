import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { events } from "@/lib/tourismData";

export default function Events() {
  const navigate = useNavigate();

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
          <h1 className="text-xl font-bold text-slate-800">
            Events & Festivals
          </h1>
        </div>
      </div>

      {/* Events List */}
      <div className="p-6 space-y-4">
        {events.map((event) => (
          <Card key={event.id} className="shadow-md border-0">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800 mb-1">
                    {event.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100">
                <Button size="sm" className="bg-nature-500 hover:bg-nature-600">
                  <Users size={14} className="mr-1" />
                  Register Interest
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
