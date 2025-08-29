import { 
  BarChart3, 
  Package, 
  FileText, 
  CreditCard, 
  TrendingUp, 
  Banknote, 
  Shield, 
  Leaf,
  Bell,
  Settings,
  Building2,
  Map,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "marketplace", label: "Digital Marketplace", icon: Package },
  { id: "documents", label: "Document Management", icon: FileText },
  { id: "payments", label: "Secure Payments", icon: CreditCard },
  { id: "analytics", label: "Analytics & Reporting", icon: TrendingUp },
  { id: "finance", label: "Trade Finance", icon: Banknote },
  { id: "insurance", label: "Insurance Marketplace", icon: Shield },
  { id: "sustainability", label: "Sustainability Tracking", icon: Leaf },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "architecture", label: "Architecture", icon: Building2 },
  { id: "roadmap", label: "Roadmap", icon: Map }
];

export function AppSidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <div className="w-64 h-screen sidebar-container border-r border-sidebar-border flex flex-col">
      {/* Logo Section */}
      <div className="p-4 sm:p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2 sm:gap-3">
          <img 
            src="/img/africaLogi_logo.png" 
            alt="AfricaLogi" 
            className="h-10 w-10 sm:h-16 sm:w-16 object-contain"
          />
          <span className="text-lg sm:text-xl font-bold text-sidebar-foreground">
            <span className="text-white">Africa</span>
            <span className="text-africalogi-gold">Logi</span>
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 sm:p-4 space-y-1 sm:space-y-2 overflow-y-auto">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-3 rounded-lg text-left transition-all duration-200",
                isActive
                  ? "sidebar-nav-item active"
                  : "sidebar-nav-item"
              )}
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-3 sm:p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sidebar-user-profile">
          <div className="h-6 w-6 sm:h-8 sm:w-8 bg-sidebar-primary rounded-full flex items-center justify-center">
            <User className="h-3 w-3 sm:h-4 sm:w-4 text-sidebar-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium text-white truncate">
              John Doe
            </p>
            <p className="text-xs text-white/70 truncate">
              Logistics Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}