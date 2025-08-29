import { Shield, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const insuranceProviders = [
  {
    id: 1,
    name: "AfricaGuard Insurance",
    price: "$245",
    coverage: "$50,000",
    rating: 4.8,
    features: ["24/7 Claims Support", "Pan-African Coverage", "Digital Claims"],
    isBestValue: true,
    deliveryTime: "Instant Coverage"
  },
  {
    id: 2,
    name: "Continental Cargo Shield",
    price: "$289",
    coverage: "$50,000",
    rating: 4.6,
    features: ["Premium Support", "Global Coverage", "Risk Assessment"],
    isBestValue: false,
    deliveryTime: "2-hour Coverage"
  },
  {
    id: 3,
    name: "TradeSecure Pro",
    price: "$312",
    coverage: "$50,000",
    rating: 4.9,
    features: ["White-glove Service", "Custom Policies", "Priority Claims"],
    isBestValue: false,
    deliveryTime: "4-hour Coverage"
  }
];

export function Insurance() {
  return (
    <div className="p-8 space-y-6 fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Insurance Marketplace
        </h1>
        <p className="text-muted-foreground">
          Protect your cargo with comprehensive insurance coverage
        </p>
      </div>

      {/* Shipment Details */}
      <Card className="p-6 bg-gradient-to-r from-muted/30 to-muted/10 border-l-4 border-l-africalogi-green">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-africalogi-green rounded-lg flex items-center justify-center">
            <Shield className="h-6 w-6 text-africalogi-green-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Get a Quote - Shipment #AL-789234</h2>
            <p className="text-muted-foreground">
              Lagos, Nigeria → Accra, Ghana • General Cargo • Value: $50,000
            </p>
          </div>
        </div>
      </Card>

      {/* Insurance Providers */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Compare Insurance Providers</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {insuranceProviders.map((provider) => (
            <Card 
              key={provider.id} 
              className={`p-6 relative transition-all duration-200 hover:shadow-lg ${
                provider.isBestValue 
                  ? 'border-2 border-africalogi-green shadow-africalogi' 
                  : 'hover:border-africalogi-green/50'
              }`}
            >
              {provider.isBestValue && (
                <Badge 
                  variant="success" 
                  className="absolute -top-3 left-6 bg-africalogi-green text-africalogi-green-foreground"
                >
                  Best Value
                </Badge>
              )}
              
              <div className="space-y-4">
                {/* Provider Header */}
                <div>
                  <h3 className="text-lg font-semibold">{provider.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(provider.rating) 
                              ? 'text-africalogi-yellow fill-current' 
                              : 'text-muted-foreground/30'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {provider.rating}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center py-4 bg-muted/30 rounded-lg">
                  <p className="text-3xl font-bold text-africalogi-green">
                    {provider.price}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    for {provider.coverage} coverage
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {provider.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-africalogi-green flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Delivery Time */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>{provider.deliveryTime}</span>
                </div>

                {/* Select Button */}
                <Button 
                  variant={provider.isBestValue ? "africalogi" : "africalogi-outline"} 
                  className="w-full"
                >
                  Select This Plan
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Coverage Details */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">What's Covered?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <h4 className="font-medium">Theft Protection</h4>
            <p className="text-sm text-muted-foreground">Full coverage</p>
          </div>
          
          <div className="text-center">
            <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <h4 className="font-medium">Damage Coverage</h4>
            <p className="text-sm text-muted-foreground">Physical damage</p>
          </div>
          
          <div className="text-center">
            <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <h4 className="font-medium">Delay Protection</h4>
            <p className="text-sm text-muted-foreground">Time-sensitive cargo</p>
          </div>
          
          <div className="text-center">
            <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <h4 className="font-medium">Weather Events</h4>
            <p className="text-sm text-muted-foreground">Natural disasters</p>
          </div>
        </div>
      </Card>
    </div>
  );
}