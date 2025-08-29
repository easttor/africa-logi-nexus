import { CreditCard, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Payments() {
  return (
    <div className="p-8 space-y-6 fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Secure Payments
        </h1>
        <p className="text-muted-foreground">
          Manage your invoices and payments securely
        </p>
      </div>

      {/* Invoice Card */}
      <Card className="p-8 max-w-2xl">
        <div className="space-y-6">
          {/* Invoice Header */}
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Invoice #AL-INV-2024-001</h2>
              <p className="text-muted-foreground">From: AfricaLogi Logistics Services</p>
            </div>
            <Badge variant="warning" className="text-sm">
              Due Soon
            </Badge>
          </div>

          {/* Invoice Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Bill To:</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Ghana Import/Export Ltd.</p>
                <p>123 Independence Avenue</p>
                <p>Accra, Ghana</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Shipment Details:</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Shipment ID: AL-789234</p>
                <p>Route: Lagos → Accra</p>
                <p>Service: Express Logistics</p>
              </div>
            </div>
          </div>

          {/* Amount & Due Date */}
          <div className="bg-muted/30 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-warning" />
                <span className="font-medium">Due Date</span>
              </div>
              <span className="text-lg font-semibold text-warning">December 30, 2024</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-africalogi-green" />
                <span className="font-medium">Total Amount</span>
              </div>
              <span className="text-3xl font-bold text-africalogi-green">$2,450.00</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-semibold mb-4">Payment Method</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Card className="p-4 cursor-pointer hover:bg-muted/50 transition-colors border-2 border-africalogi-green bg-africalogi-green/5">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-africalogi-green" />
                  <div>
                    <p className="font-medium">Credit Card</p>
                    <p className="text-sm text-muted-foreground">Visa, Mastercard, Amex</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Bank Transfer</p>
                    <p className="text-sm text-muted-foreground">Direct bank payment</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Payment Button */}
          <Button variant="africalogi" size="lg" className="w-full gap-3">
            <CreditCard className="h-5 w-5" />
            Pay Now - $2,450.00
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            🔒 Your payment is secured with 256-bit SSL encryption
          </p>
        </div>
      </Card>
    </div>
  );
}