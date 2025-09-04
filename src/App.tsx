import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import AppPage from "./pages/AppPage";
import { ArchitecturePage } from "./pages/ArchitecturePage";
import RoadmapPage from "./pages/RoadmapPage";
import UserJourneyPage from "./pages/UserJourneyPage";
import BusinessPlanPage from "./pages/BusinessPlanPage";
import BudgetPlanPage from "./pages/BudgetPlanPage";
import NotFound from "./pages/NotFound";

// African Union Theme Applied - Using colors: #00764B (green), #C3A466 (gold), #951F39 (red)

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/app" element={<AppPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/user-journey" element={<UserJourneyPage />} />
            <Route path="/business-plan" element={<BusinessPlanPage />} />
            <Route path="/budget-plan" element={<BudgetPlanPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;
