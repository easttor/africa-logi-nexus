import { BarChart3, TrendingUp, DollarSign, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const metrics = [
  {
    title: "Total Revenue",
    value: "$324,580",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "success"
  },
  {
    title: "Avg Delivery Time",
    value: "4.2 days",
    change: "-0.8 days",
    trend: "down",
    icon: Clock,
    color: "africalogi-green"
  },
  {
    title: "Cost Efficiency",
    value: "94.7%",
    change: "+2.1%",
    trend: "up",
    icon: TrendingUp,
    color: "success"
  },
  {
    title: "Route Optimization",
    value: "87.3%",
    change: "+5.4%",
    trend: "up",
    icon: BarChart3,
    color: "warning"
  }
];

export function Analytics() {
  return (
    <div className="p-8 space-y-6 fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Analytics & Reporting
        </h1>
        <p className="text-muted-foreground">
          Gain insights into your logistics performance and operations
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const IconComponent = metric.icon;
          return (
            <Card key={metric.title} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <IconComponent className={`h-8 w-8 text-${metric.color}`} />
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  metric.trend === 'up' 
                    ? 'bg-success/10 text-success' 
                    : 'bg-africalogi-green/10 text-africalogi-green'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </h3>
              <p className="text-2xl font-bold text-foreground">
                {metric.value}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cost Per Mile Chart */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="h-6 w-6 text-africalogi-green" />
            <h2 className="text-xl font-semibold">Cost Per Mile Analysis</h2>
          </div>
          
          <div className="aspect-video bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg flex items-center justify-center border border-border">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium text-muted-foreground">
                Interactive Chart
              </p>
              <p className="text-sm text-muted-foreground/70 mt-1">
                Cost efficiency trends over time
              </p>
            </div>
          </div>
        </Card>

        {/* On-Time Performance Chart */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-6 w-6 text-africalogi-yellow" />
            <h2 className="text-xl font-semibold">On-Time Performance by Route</h2>
          </div>
          
          <div className="aspect-video bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg flex items-center justify-center border border-border">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium text-muted-foreground">
                Performance Dashboard
              </p>
              <p className="text-sm text-muted-foreground/70 mt-1">
                Route efficiency analytics
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Performance Summary */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Performance Summary</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Lagos - Accra Route</span>
            <div className="flex items-center gap-4">
              <div className="w-32 bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
              <span className="font-semibold text-success">94%</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Cairo - Nairobi Route</span>
            <div className="flex items-center gap-4">
              <div className="w-32 bg-muted rounded-full h-2">
                <div className="bg-warning h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
              <span className="font-semibold text-warning">87%</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Cape Town - Dar es Salaam Route</span>
            <div className="flex items-center gap-4">
              <div className="w-32 bg-muted rounded-full h-2">
                <div className="bg-africalogi-green h-2 rounded-full" style={{ width: '91%' }}></div>
              </div>
              <span className="font-semibold text-africalogi-green">91%</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}