import { Leaf, TrendingDown, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const emissionsByRoute = [
  { route: "Lagos - Accra", emissions: 2.4, trend: "-12%", color: "success" },
  { route: "Cairo - Nairobi", emissions: 4.8, trend: "-8%", color: "success" },
  { route: "Cape Town - Dar es Salaam", emissions: 6.2, trend: "+3%", color: "warning" },
  { route: "Casablanca - Abidjan", emissions: 3.1, trend: "-15%", color: "success" }
];

export function Sustainability() {
  return (
    <div className="p-8 space-y-6 fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Sustainability Tracking
        </h1>
        <p className="text-muted-foreground">
          Monitor and reduce your environmental impact across logistics operations
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-l-4 border-l-africalogi-green">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total CO₂ Emissions
              </p>
              <p className="text-3xl font-bold text-foreground">1,247</p>
              <p className="text-sm text-muted-foreground">metric tons this quarter</p>
            </div>
            <Leaf className="h-8 w-8 text-africalogi-green" />
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-success">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Carbon Reduction
              </p>
              <p className="text-3xl font-bold text-success">-18.3%</p>
              <p className="text-sm text-success/80 flex items-center gap-1 mt-1">
                <TrendingDown className="h-3 w-3" />
                vs. last quarter
              </p>
            </div>
            <TrendingDown className="h-8 w-8 text-success" />
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-africalogi-yellow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Efficiency Score
              </p>
              <p className="text-3xl font-bold text-africalogi-yellow">8.7</p>
              <p className="text-sm text-muted-foreground">/10 sustainability index</p>
            </div>
            <BarChart3 className="h-8 w-8 text-africalogi-yellow" />
          </div>
        </Card>
      </div>

      {/* Emissions Trend Chart */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Leaf className="h-6 w-6 text-africalogi-green" />
          <h2 className="text-xl font-semibold">Emissions Trend Chart</h2>
        </div>
        
        <div className="aspect-video bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg flex items-center justify-center border border-border">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium text-muted-foreground">
              Carbon Footprint Analytics
            </p>
            <p className="text-sm text-muted-foreground/70 mt-1">
              Monthly emissions tracking and predictions
            </p>
          </div>
        </div>
      </Card>

      {/* Route Performance */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Emissions by Route</h2>
        
        <div className="space-y-4">
          {emissionsByRoute.map((route, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
              <div className="flex-1">
                <h3 className="font-medium">{route.route}</h3>
                <p className="text-sm text-muted-foreground">
                  {route.emissions} tons CO₂ per shipment
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Badge 
                  variant={route.color as any}
                  className="flex items-center gap-1"
                >
                  <TrendingDown className="h-3 w-3" />
                  {route.trend}
                </Badge>
                
                <div className="w-24 bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      route.color === 'success' 
                        ? 'bg-success' 
                        : 'bg-warning'
                    }`}
                    style={{ 
                      width: `${Math.max(20, 100 - (route.emissions * 10))}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Sustainability Initiatives */}
      <Card className="p-6 bg-gradient-to-r from-africalogi-green/5 to-africalogi-yellow/5 border-africalogi-green/20">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
          <Leaf className="h-6 w-6 text-africalogi-green" />
          Green Logistics Initiatives
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Current Programs</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-africalogi-green rounded-full"></div>
                <span>Electric vehicle fleet expansion</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-africalogi-green rounded-full"></div>
                <span>Route optimization algorithms</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-africalogi-green rounded-full"></div>
                <span>Carbon offset partnerships</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-africalogi-green rounded-full"></div>
                <span>Eco-friendly packaging materials</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Upcoming Goals</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-africalogi-yellow rounded-full"></div>
                <span>50% emission reduction by 2025</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-africalogi-yellow rounded-full"></div>
                <span>Zero-waste facilities</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-africalogi-yellow rounded-full"></div>
                <span>Renewable energy adoption</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-africalogi-yellow rounded-full"></div>
                <span>Green certification program</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}