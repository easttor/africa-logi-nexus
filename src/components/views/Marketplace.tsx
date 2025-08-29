import { Plus, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const availableLoads = [
  {
    id: "AL-001",
    origin: "Lagos, Nigeria",
    destination: "Accra, Ghana",
    cargoType: "General Cargo",
    rate: "$2,450",
    weight: "15 tons",
    pickup: "Dec 28, 2024"
  },
  {
    id: "AL-002", 
    origin: "Cairo, Egypt",
    destination: "Nairobi, Kenya",
    cargoType: "Electronics",
    rate: "$3,200",
    weight: "8 tons",
    pickup: "Dec 30, 2024"
  },
  {
    id: "AL-003",
    origin: "Cape Town, South Africa", 
    destination: "Dar es Salaam, Tanzania",
    cargoType: "Manufacturing Equipment",
    rate: "$5,800",
    weight: "25 tons",
    pickup: "Jan 2, 2025"
  },
  {
    id: "AL-004",
    origin: "Casablanca, Morocco",
    destination: "Abidjan, Côte d'Ivoire", 
    cargoType: "Textiles",
    rate: "$1,890",
    weight: "12 tons",
    pickup: "Jan 5, 2025"
  }
];

export function Marketplace() {
  return (
    <div className="p-8 space-y-6 fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Digital Marketplace
          </h1>
          <p className="text-muted-foreground">
            Discover and bid on available loads across Africa
          </p>
        </div>
        <Button variant="africalogi" size="lg" className="gap-2">
          <Plus className="h-4 w-4" />
          Post a New Load
        </Button>
      </div>

      {/* Available Loads Table */}
      <Card className="overflow-hidden">
        <div className="p-6 border-b border-border bg-muted/30">
          <h2 className="text-xl font-semibold">Available Loads</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {availableLoads.length} loads available for bidding
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium text-muted-foreground">Load ID</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Origin</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Destination</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Cargo Type</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Weight</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Pickup Date</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Rate</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {availableLoads.map((load, index) => (
                <tr 
                  key={load.id} 
                  className={`border-b border-border hover:bg-muted/20 transition-colors ${
                    index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                  }`}
                >
                  <td className="p-4 font-medium text-primary">{load.id}</td>
                  <td className="p-4">{load.origin}</td>
                  <td className="p-4">{load.destination}</td>
                  <td className="p-4">{load.cargoType}</td>
                  <td className="p-4 text-muted-foreground">{load.weight}</td>
                  <td className="p-4 text-muted-foreground">{load.pickup}</td>
                  <td className="p-4 font-semibold text-africalogi-green">{load.rate}</td>
                  <td className="p-4">
                    <Button variant="africalogi" size="sm" className="gap-2">
                      <Eye className="h-3 w-3" />
                      View & Bid
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}