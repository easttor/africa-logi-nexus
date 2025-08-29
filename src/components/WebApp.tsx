import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { Dashboard } from "./views/Dashboard";
import { Marketplace } from "./views/Marketplace";
import { Documents } from "./views/Documents";
import { Payments } from "./views/Payments";
import { Analytics } from "./views/Analytics";
import { Finance } from "./views/Finance";
import { Insurance } from "./views/Insurance";
import { Sustainability } from "./views/Sustainability";
import { Notifications } from "./views/Notifications";
import { Settings } from "./views/Settings";
import { Architecture } from "./views/Architecture";
import { Roadmap } from "./views/Roadmap";

const views = {
  dashboard: Dashboard,
  marketplace: Marketplace,
  documents: Documents,
  payments: Payments,
  analytics: Analytics,
  finance: Finance,
  insurance: Insurance,
  sustainability: Sustainability,
  architecture: Architecture,
  roadmap: Roadmap,
  notifications: Notifications,
  settings: Settings,
};

export function WebApp() {
  const [activeView, setActiveView] = useState("dashboard");

  const ViewComponent = views[activeView as keyof typeof views] || Dashboard;

  return (
    <div className="flex h-screen bg-background overflow-hidden relative">
      {/* Animated Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img 
          src="/img/africaLogi_logo.png" 
          alt="AfricaLogi Background" 
          className="w-96 h-96 object-contain opacity-20 animate-[float_6s_ease-in-out_infinite]"
        />
      </div>
      
      <AppSidebar activeView={activeView} onViewChange={setActiveView} />
      
      <main className="flex-1 overflow-y-auto relative z-10">
        <ViewComponent />
      </main>
    </div>
  );
}