import { Home, MapPin, Calendar, User, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/home" },
  { icon: MapPin, label: "Explore", path: "/destinations" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: MessageCircle, label: "Chat", path: "/chat" },
  { icon: User, label: "Profile", path: "/profile" },
];

export function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2 safe-area-bottom">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200",
                isActive
                  ? "text-nature-600 bg-nature-50"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-50",
              )}
            >
              <Icon
                size={20}
                className={cn(
                  "mb-1",
                  isActive ? "text-nature-600" : "text-slate-500",
                )}
              />
              <span
                className={cn(
                  "text-xs font-medium",
                  isActive ? "text-nature-600" : "text-slate-500",
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
