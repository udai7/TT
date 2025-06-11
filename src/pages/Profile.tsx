import {
  ArrowLeft,
  User,
  Settings,
  Heart,
  MapPin,
  Globe,
  Bell,
  CreditCard,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Heart, label: "Favorite Places", count: 5 },
    { icon: MapPin, label: "Travel History", count: 12 },
    { icon: CreditCard, label: "Bookings", count: 3 },
    { icon: Globe, label: "Language", value: "English" },
    { icon: Bell, label: "Notifications", toggle: true },
    { icon: Settings, label: "Settings" },
  ];

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
          <h1 className="text-xl font-bold text-slate-800">Profile</h1>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-gradient-to-br from-nature-500 to-nature-600 px-6 py-8">
        <div className="text-center">
          <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-white/20">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
            <AvatarFallback className="bg-white text-nature-600 text-xl font-semibold">
              JS
            </AvatarFallback>
          </Avatar>
          <h2 className="text-white text-xl font-bold mb-1">John Smith</h2>
          <p className="text-nature-100 mb-3">john.smith@email.com</p>
          <Badge className="bg-white/20 text-white border-white/30">
            Explorer Level
          </Badge>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 -mt-6 relative z-10">
        <Card className="shadow-lg border-0">
          <CardContent className="p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-slate-800">12</div>
                <div className="text-sm text-slate-600">Places Visited</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">5</div>
                <div className="text-sm text-slate-600">Favorites</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">8</div>
                <div className="text-sm text-slate-600">Reviews</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Menu Items */}
      <div className="p-6 space-y-2">
        {menuItems.map((item, index) => (
          <Card key={index} className="shadow-sm border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                    <item.icon size={16} className="text-slate-600" />
                  </div>
                  <span className="font-medium text-slate-800">
                    {item.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {item.count && (
                    <Badge variant="secondary" className="text-xs">
                      {item.count}
                    </Badge>
                  )}
                  {item.value && (
                    <span className="text-sm text-slate-600">{item.value}</span>
                  )}
                  <ChevronRight size={16} className="text-slate-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Logout */}
      <div className="px-6">
        <Button
          variant="outline"
          className="w-full border-red-200 text-red-600 hover:bg-red-50"
        >
          <LogOut size={16} className="mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
