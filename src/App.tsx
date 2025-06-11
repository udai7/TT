import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { MobileContainer } from "@/components/MobileContainer";
import { BottomNavigation } from "@/components/BottomNavigation";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Events from "./pages/Events";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Packages from "./pages/Packages";
import Hotels from "./pages/Hotels";
import Culture from "./pages/Culture";
import NotFound from "./pages/NotFound";
import LandingPage from "./LandingPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();
  const hideBottomNavigation =
    location.pathname === "/" || location.pathname === "/auth";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <MobileContainer>
          <div className="relative h-full bg-white">
            <Routes>
              <Route path="/" element={<LandingPage />} replace />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destinations/:id" element={<Destinations />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/packages/:id" element={<Packages />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/events" element={<Events />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            {!hideBottomNavigation && <BottomNavigation />}
          </div>
        </MobileContainer>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
