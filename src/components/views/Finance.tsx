import { Banknote, FileText, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Finance() {
  return (
    <div className="p-8 space-y-6 fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Trade Finance
        </h1>
        <p className="text-muted-foreground">
          Access financing options for your shipments and trade operations
        </p>
      </div>

      {/* Application Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Banknote className="h-6 w-6 text-africalogi-green" />
              <h2 className="text-xl font-semibold">Apply for Shipment Financing</h2>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="shipmentId">Shipment ID</Label>
                  <Input 
                    id="shipmentId" 
                    value="AL-789234" 
                    readOnly 
                    className="bg-muted/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="amount">Amount Required</Label>
                  <Input 
                    id="amount" 
                    type="number" 
                    placeholder="Enter amount in USD"
                    className="pl-8"
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="purpose">Financing Purpose</Label>
                  <select 
                    id="purpose"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select purpose</option>
                    <option value="working-capital">Working Capital</option>
                    <option value="cargo-insurance">Cargo Insurance</option>
                    <option value="equipment-lease">Equipment Lease</option>
                    <option value="customs-clearance">Customs Clearance</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="term">Financing Term</Label>
                  <select 
                    id="term"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select term</option>
                    <option value="30-days">30 Days</option>
                    <option value="60-days">60 Days</option>
                    <option value="90-days">90 Days</option>
                    <option value="120-days">120 Days</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Additional Details</Label>
                <textarea 
                  id="description"
                  placeholder="Provide additional context for your financing request..."
                  rows={4}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <Button variant="africalogi" size="lg" className="w-full gap-3">
                <FileText className="h-5 w-5" />
                Submit Application
              </Button>
            </form>
          </Card>
        </div>

        {/* Financing Options Sidebar */}
        <div className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="h-5 w-5 text-africalogi-green" />
              <h3 className="font-semibold">Quick Calculator</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Loan Amount</span>
                <span className="font-medium">$25,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Interest Rate</span>
                <span className="font-medium text-africalogi-green">8.5% APR</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Term</span>
                <span className="font-medium">90 days</span>
              </div>
              
              <div className="border-t border-border pt-3 mt-4">
                <div className="flex justify-between">
                  <span className="font-medium">Monthly Payment</span>
                  <span className="font-bold text-africalogi-green">$1,847</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-africalogi-green/5 to-africalogi-yellow/5 border-africalogi-green/20">
            <h3 className="font-semibold mb-2">Fast Track Approval</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Pre-approved customers get financing decisions within 24 hours.
            </p>
            <ul className="text-sm space-y-1">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-africalogi-green rounded-full"></div>
                <span>Competitive rates</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-africalogi-green rounded-full"></div>
                <span>Flexible terms</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-africalogi-green rounded-full"></div>
                <span>No hidden fees</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}