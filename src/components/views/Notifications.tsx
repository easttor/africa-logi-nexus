import { useState } from "react";
import { Bell, Check, X, Clock, AlertTriangle, Info, Package, CreditCard, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const notifications = [
  {
    id: 1,
    type: "shipment",
    title: "Shipment Delivered Successfully",
    message: "Shipment ALG-2024-001 has been delivered to Lagos, Nigeria",
    time: "2 hours ago",
    read: false,
    icon: Package,
    variant: "success" as const,
  },
  {
    id: 2,
    type: "payment",
    title: "Payment Processed",
    message: "Payment of $2,450 has been processed for invoice INV-001",
    time: "4 hours ago",
    read: false,
    icon: CreditCard,
    variant: "success" as const,
  },
  {
    id: 3,
    type: "document",
    title: "Document Verification Required",
    message: "Please verify customs declaration for shipment ALG-2024-003",
    time: "6 hours ago",
    read: true,
    icon: FileText,
    variant: "warning" as const,
  },
  {
    id: 4,
    type: "alert",
    title: "Route Delay Alert",
    message: "Expected 2-hour delay on Lagos-Accra route due to weather",
    time: "8 hours ago",
    read: true,
    icon: AlertTriangle,
    variant: "destructive" as const,
  },
  {
    id: 5,
    type: "info",
    title: "New Feature Available",
    message: "Carbon footprint tracking is now available in your dashboard",
    time: "1 day ago",
    read: true,
    icon: Info,
    variant: "secondary" as const,
  },
];

export function Notifications() {
  const [notificationList, setNotificationList] = useState(notifications);
  const [filter, setFilter] = useState("all");

  const markAsRead = (id: number) => {
    setNotificationList(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotificationList(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotificationList(prev => prev.filter(notification => notification.id !== id));
  };

  const filteredNotifications = notificationList.filter(notification => {
    if (filter === "unread") return !notification.read;
    if (filter === "read") return notification.read;
    return true;
  });

  const unreadCount = notificationList.filter(n => !n.read).length;

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Bell className="h-8 w-8 text-africalogi-green" />
            Notifications
          </h1>
          <p className="text-muted-foreground mt-2">
            Stay updated with your shipments, payments, and alerts
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="text-sm">
            {unreadCount} unread
          </Badge>
          <Button onClick={markAllAsRead} variant="africalogi-outline" size="sm">
            Mark All Read
          </Button>
        </div>
      </div>

      <Tabs value={filter} onValueChange={setFilter} className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
          <TabsTrigger value="read">Read</TabsTrigger>
        </TabsList>

        <TabsContent value={filter} className="space-y-4 mt-6">
          {filteredNotifications.length === 0 ? (
            <Card className="p-12 text-center">
              <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No notifications</h3>
              <p className="text-muted-foreground">
                {filter === "unread" 
                  ? "You're all caught up! No unread notifications."
                  : "No notifications found."
                }
              </p>
            </Card>
          ) : (
            <div className="space-y-3">
              {filteredNotifications.map((notification) => {
                const IconComponent = notification.icon;
                return (
                  <Card
                    key={notification.id}
                    className={`p-4 transition-all duration-200 hover:shadow-md ${
                      !notification.read 
                        ? "border-l-4 border-l-africalogi-green bg-muted/30" 
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${
                        notification.variant === "success" ? "bg-success/10" :
                        notification.variant === "warning" ? "bg-warning/10" :
                        notification.variant === "destructive" ? "bg-destructive/10" :
                        "bg-muted"
                      }`}>
                        <IconComponent className={`h-5 w-5 ${
                          notification.variant === "success" ? "text-success" :
                          notification.variant === "warning" ? "text-warning" :
                          notification.variant === "destructive" ? "text-destructive" :
                          "text-muted-foreground"
                        }`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className={`font-semibold ${
                              !notification.read ? "text-foreground" : "text-muted-foreground"
                            }`}>
                              {notification.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {notification.message}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Clock className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">
                                {notification.time}
                              </span>
                              {!notification.read && (
                                <Badge variant="success" className="text-xs px-2 py-0">
                                  New
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-1">
                            {!notification.read && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => markAsRead(notification.id)}
                                className="h-8 w-8 p-0"
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deleteNotification(notification.id)}
                              className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}