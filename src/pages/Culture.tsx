import { ArrowLeft, Utensils, Music, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { foodItems, events } from "@/lib/tourismData";

export default function Culture() {
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
          <h1 className="text-xl font-bold text-slate-800">Culture & Food</h1>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="food" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="food">Local Cuisine</TabsTrigger>
            <TabsTrigger value="culture">Cultural Heritage</TabsTrigger>
          </TabsList>

          <TabsContent value="food" className="mt-6 space-y-4">
            {foodItems.map((food) => (
              <Card key={food.id} className="shadow-md border-0">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-slate-800">
                          {food.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className="text-xs border-nature-200 text-nature-700"
                        >
                          {food.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">
                        {food.description}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-nature-200 text-nature-700"
                      >
                        <Utensils size={14} className="mr-1" />
                        Find Restaurants
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="culture" className="mt-6 space-y-6">
            {/* Cultural Heritage */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-slate-800">
                Traditional Arts & Crafts
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Bamboo Crafts",
                  "Traditional Weaving",
                  "Wood Carving",
                  "Tribal Music",
                ].map((craft, index) => (
                  <Card key={index} className="shadow-sm border-0">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-nature-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Camera size={20} className="text-nature-600" />
                      </div>
                      <h3 className="font-medium text-slate-800 text-sm">
                        {craft}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cultural Events */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-slate-800">
                Cultural Festivals
              </h2>
              <div className="space-y-3">
                {events.slice(0, 2).map((event) => (
                  <Card key={event.id} className="shadow-sm border-0">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-nature-100 rounded-lg flex items-center justify-center">
                          <Music size={16} className="text-nature-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-slate-800">
                            {event.name}
                          </h3>
                          <p className="text-sm text-slate-600">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
