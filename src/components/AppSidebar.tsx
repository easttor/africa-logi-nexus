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
  User,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
  { id: "settings", label: "Settings", icon: Settings }
];

export function AppSidebar({ activeView, onViewChange }: SidebarProps) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<{
    full_name: string | null;
    avatar_url: string | null;
  } | null>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data } = await supabase
        .from('profiles')
        .select('full_name, avatar_url')
        .eq('user_id', user.id)
        .single();
      
      if (data) {
        setProfile(data);
      }
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

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
      <div className="p-3 sm:p-4 border-t border-sidebar-border space-y-2">
        <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sidebar-user-profile">
          <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
            <AvatarImage src={profile?.avatar_url || undefined} />
            <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">
              <User className="h-3 w-3 sm:h-4 sm:w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium text-white truncate">
              {profile?.full_name || 'User'}
            </p>
          </div>
        </div>
        <Button
          variant="destructive"
          size="sm"
          onClick={handleSignOut}
          className="w-full justify-start gap-2"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}