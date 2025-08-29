import { CheckCircle, XCircle, Clock, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const shipmentDocuments = [
  {
    name: "Bill of Lading",
    status: "verified",
    icon: CheckCircle,
    lastUpdated: "2 hours ago",
    description: "Commercial invoice and packing list verified"
  },
  {
    name: "Customs Declaration",
    status: "missing",
    icon: XCircle,
    lastUpdated: "Pending",
    description: "Required for customs clearance"
  },
  {
    name: "Insurance Certificate",
    status: "pending",
    icon: Clock,
    lastUpdated: "4 hours ago",
    description: "Awaiting underwriter approval"
  },
  {
    name: "Certificate of Origin",
    status: "verified",
    icon: CheckCircle,
    lastUpdated: "1 day ago",
    description: "Origin verification completed"
  },
  {
    name: "Phytosanitary Certificate",
    status: "pending",
    icon: Clock,
    lastUpdated: "6 hours ago",
    description: "Health inspection in progress"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "verified":
      return "success";
    case "missing":
      return "destructive";
    case "pending":
      return "warning";
    default:
      return "secondary";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "verified":
      return "Verified";
    case "missing":
      return "Missing";
    case "pending":
      return "Pending";
    default:
      return "Unknown";
  }
};

export function Documents() {
  return (
    <div className="p-8 space-y-6 fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Document Management
        </h1>
        <p className="text-muted-foreground">
          Track and manage shipment documentation for <span className="font-medium text-primary">Shipment #AL-789234</span>
        </p>
      </div>

      {/* Shipment Overview */}
      <Card className="p-6 bg-gradient-to-r from-muted/30 to-muted/10 border-l-4 border-l-africalogi-green">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-africalogi-green rounded-lg flex items-center justify-center">
            <FileText className="h-6 w-6 text-africalogi-green-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Shipment #AL-789234</h2>
            <p className="text-muted-foreground">
              Lagos, Nigeria → Accra, Ghana • General Cargo • 15 tons
            </p>
          </div>
        </div>
      </Card>

      {/* Document Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shipmentDocuments.map((doc) => {
          const IconComponent = doc.icon;
          return (
            <Card key={doc.name} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <IconComponent 
                    className={`h-5 w-5 ${
                      doc.status === 'verified' ? 'text-success' :
                      doc.status === 'missing' ? 'text-destructive' :
                      'text-warning'
                    }`} 
                  />
                  <h3 className="font-semibold">{doc.name}</h3>
                </div>
                <Badge variant={getStatusColor(doc.status) as any}>
                  {getStatusText(doc.status)}
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">
                {doc.description}
              </p>
              
              <p className="text-xs text-muted-foreground">
                Last updated: {doc.lastUpdated}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Progress Summary */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Documentation Progress</h3>
          <span className="text-2xl font-bold text-africalogi-green">60%</span>
        </div>
        
        <div className="w-full bg-muted rounded-full h-3 mb-4">
          <div 
            className="bg-gradient-to-r from-africalogi-green to-africalogi-yellow h-3 rounded-full transition-all duration-500" 
            style={{ width: '60%' }}
          ></div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-muted-foreground">Verified</p>
            <p className="font-semibold text-success">2 documents</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="font-semibold text-warning">2 documents</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Missing</p>
            <p className="font-semibold text-destructive">1 document</p>
          </div>
        </div>
      </Card>
    </div>
  );
}