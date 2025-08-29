import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { 
  Database, 
  Server, 
  Users, 
  Truck, 
  CreditCard, 
  FileText, 
  Shield, 
  Bell,
  BarChart3,
  Globe,
  Smartphone,
  Cloud,
  ArrowDown,
  ArrowRight,
  Monitor,
  Layers,
  Zap,
  Download,
  Network,
  Lock,
  Activity,
  Cpu,
  HardDrive,
  Wifi,
  MapPin,
  MessageSquare,
  Clock,
  TrendingUp,
  Settings,
  AlertTriangle,
  CheckCircle,
  XCircle
} from "lucide-react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function Architecture() {
  const [isCompactMode, setIsCompactMode] = useState(false);

  const exportToPDF = async () => {
    console.log('PDF export started...');
    
    // First, try a simple test to see if jsPDF is working
    try {
      console.log('Testing basic PDF creation...');
      const testPdf = new jsPDF();
      testPdf.text('Test PDF', 20, 20);
      testPdf.save('test.pdf');
      console.log('Basic PDF test successful');
    } catch (testError) {
      console.error('Basic PDF test failed:', testError);
      alert('PDF library not working. Please check browser compatibility.');
      return;
    }
    
    try {
      const element = document.getElementById('architecture-infographic');
      if (!element) {
        console.error('Architecture infographic element not found');
        alert('Unable to find the architecture diagram. Please try again.');
        return;
      }
      console.log('Found architecture element:', element);

      // Show loading state
      const button = document.querySelector('#export-pdf-button') as HTMLButtonElement;
      if (button) {
        button.disabled = true;
        button.textContent = 'Preparing layout...';
        console.log('Button state updated');
      } else {
        console.warn('Export button not found');
      }

      // Wait a moment for any animations to complete
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Temporarily enable compact mode for PDF export if not already enabled
      const wasCompactMode = isCompactMode;
      if (!isCompactMode) {
        setIsCompactMode(true);
        if (button) button.textContent = 'Optimizing layout...';
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait for layout update
      }

      if (button) button.textContent = 'Rendering architecture...';

      console.log('Starting html2canvas...');
      // Create canvas from the architecture infographic with simplified settings
      const canvas = await html2canvas(element, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: true, // Enable logging for debugging
        imageTimeout: 15000
      });
      console.log('Canvas created:', canvas);

      // Restore original compact mode state
      if (!wasCompactMode) {
        setIsCompactMode(false);
      }

      if (button) button.textContent = 'Creating PDF...';

      console.log('Converting canvas to image data...');
      // Create PDF with A2 format for better compatibility
      const imgData = canvas.toDataURL('image/png', 0.9);
      console.log('Image data created, length:', imgData.length);
      
      console.log('Creating PDF document...');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a2'
      });
      console.log('PDF document created');

      const imgWidth = 594; // A2 landscape width
      const pageHeight = 420; // A2 landscape height
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Simple single-page approach - scale image to fit
      if (imgHeight > pageHeight) {
        // Scale down to fit on single page
        const scaleFactor = pageHeight / imgHeight;
        const scaledWidth = imgWidth * scaleFactor;
        const scaledHeight = imgHeight * scaleFactor;
        const xOffset = (imgWidth - scaledWidth) / 2;
        const yOffset = (pageHeight - scaledHeight) / 2;
        
        pdf.addImage(imgData, 'PNG', xOffset, yOffset, scaledWidth, scaledHeight);
      } else {
        // Center the image
        const yOffset = (pageHeight - imgHeight) / 2;
        pdf.addImage(imgData, 'PNG', 0, yOffset, imgWidth, imgHeight);
      }

      // Save the PDF
      console.log('Saving PDF...');
      
      // Try multiple save methods for better compatibility
      try {
        pdf.save('AfricaLogi-Platform-Architecture-Infographic.pdf');
        console.log('PDF save command executed');
      } catch (saveError) {
        console.warn('Direct save failed, trying blob method:', saveError);
        
        // Fallback: create blob and download
        const pdfBlob = pdf.output('blob');
        const url = URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'AfricaLogi-Platform-Architecture-Infographic.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        console.log('PDF downloaded via blob method');
      }

      // Reset button state
      if (button) {
        button.disabled = false;
        button.innerHTML = '<Download className="h-4 w-4" />Export Architecture as PDF';
      }

      // Show success message
      alert('PDF downloaded successfully!');

    } catch (error) {
      console.error('Error generating PDF:', error);
      
      // Try fallback method - create simple text-based PDF
      try {
        console.log('Trying fallback PDF method...');
        const fallbackPdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4'
        });
        
        fallbackPdf.setFontSize(16);
        fallbackPdf.text('AfricaLogi Platform Architecture', 20, 30);
        
        fallbackPdf.setFontSize(12);
        fallbackPdf.text('User Access Layer: Web App, Mobile Apps, Admin Dashboard, API Gateway', 20, 50);
        fallbackPdf.text('Security Layer: Authentication, Rate Limiting, Load Balancing, Encryption', 20, 70);
        fallbackPdf.text('Business Logic: Load Management, Tracking, Payments, Documents, Analytics', 20, 90);
        fallbackPdf.text('Data Layer: PostgreSQL, Redis Cache, File Storage, Search Engine', 20, 110);
        fallbackPdf.text('Infrastructure: AWS/Azure, Kubernetes, CDN, Monitoring, CI/CD', 20, 130);
        
        fallbackPdf.text('Performance Metrics:', 20, 160);
        fallbackPdf.text('• 99.9% Uptime SLA', 30, 180);
        fallbackPdf.text('• <100ms Response Time', 30, 200);
        fallbackPdf.text('• 10M+ Daily Requests', 30, 220);
        fallbackPdf.text('• 256-bit Encryption', 30, 240);
        
        fallbackPdf.save('AfricaLogi-Architecture-Fallback.pdf');
        alert('PDF created using fallback method. Check downloads folder.');
        
      } catch (fallbackError) {
        console.error('Fallback PDF also failed:', fallbackError);
        alert('Failed to generate PDF. Please try again. Error: ' + error.message);
      }
      
      // Reset button state
      const button = document.querySelector('#export-pdf-button') as HTMLButtonElement;
      if (button) {
        button.disabled = false;
        button.innerHTML = '<Download className="h-4 w-4" />Export Architecture as PDF';
      }
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Platform Architecture & Data Models</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Comprehensive system design for AfricaLogi - Modern logistics platform built for scale
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Button 
            onClick={() => setIsCompactMode(!isCompactMode)} 
            variant={isCompactMode ? "default" : "outline"}
            className="gap-2"
          >
            {isCompactMode ? "📏" : "📐"}
            {isCompactMode ? "Standard Layout" : "Compact Layout"}
          </Button>
          <Button 
            onClick={exportToPDF} 
            className="gap-2"
            data-export-button
            id="export-pdf-button"
          >
            <Download className="h-4 w-4" />
            Export Architecture as PDF
          </Button>
          <Button 
            onClick={() => {
              const testPdf = new jsPDF();
              testPdf.text('Test PDF - AfricaLogi', 20, 20);
              testPdf.save('test-africalogi.pdf');
            }} 
            variant="outline"
            className="gap-2"
          >
            🧪 Test PDF
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">System Overview</TabsTrigger>
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
          <TabsTrigger value="data">Data Models</TabsTrigger>
          <TabsTrigger value="apis">API Design</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Multi-Tenant Platform
                </CardTitle>
                <CardDescription>
                  Supporting multiple user types with role-based access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Shippers</Badge>
                  <Badge variant="secondary">Carriers</Badge>
                  <Badge variant="secondary">Brokers</Badge>
                  <Badge variant="secondary">Drivers</Badge>
                  <Badge variant="secondary">Admins</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-primary" />
                  Cloud-Native Architecture
                </CardTitle>
                <CardDescription>
                  Scalable, resilient, and globally distributed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">Microservices</Badge>
                  <Badge variant="outline">Auto-scaling</Badge>
                  <Badge variant="outline">Multi-region</Badge>
                  <Badge variant="outline">Event-driven</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  Multi-Platform Access
                </CardTitle>
                <CardDescription>
                  Consistent experience across all devices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="destructive">Web Application</Badge>
                  <Badge variant="destructive">Mobile Apps</Badge>
                  <Badge variant="destructive">API Access</Badge>
                  <Badge variant="destructive">Third-party Integrations</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="architecture" className="space-y-6">
          {/* Enhanced Architecture Infographic */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Platform Architecture Infographic</CardTitle>
              <CardDescription className="text-center text-lg">Visual representation of system layers, data flow, and infrastructure components</CardDescription>
            </CardHeader>
            <CardContent>
              <div id="architecture-infographic" className={`bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 rounded-lg border-2 border-blue-200 dark:border-blue-800 ${isCompactMode ? 'p-4' : 'p-6'}`}>
                
                {/* Header Section */}
                <div className={`text-center ${isCompactMode ? 'mb-4' : 'mb-6'}`}>
                  <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-blue-200 dark:border-blue-700">
                    <Globe className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold text-primary">AfricaLogi Platform</h2>
                    <Badge variant="outline" className="text-sm">v2.0</Badge>
                  </div>
                  <p className="text-muted-foreground mt-3 text-lg">Enterprise-Grade Logistics Management System</p>
                </div>

                {/* Main Architecture Flow */}
                <div className="relative max-w-7xl mx-auto">
                  
                  {/* User Access Layer */}
                  <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-4 mb-6 border-2 border-blue-300 dark:border-blue-600 shadow-lg">
                    <div className="text-center mb-3">
                      <Badge variant="secondary" className="text-base px-3 py-1 mb-2">🌐 User Access Layer</Badge>
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200">Multi-Platform Interface</h3>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-blue-200 dark:border-blue-600 shadow-md">
                        <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="font-semibold text-sm text-blue-800 dark:text-blue-200">Web Application</div>
                        <div className="text-xs text-muted-foreground">React + TypeScript</div>
                      </div>
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-blue-200 dark:border-blue-600 shadow-md">
                        <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <Smartphone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="font-semibold text-sm text-blue-800 dark:text-blue-200">Mobile Apps</div>
                        <div className="text-xs text-muted-foreground">iOS & Android</div>
                      </div>
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-blue-200 dark:border-blue-600 shadow-md">
                        <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <Monitor className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="font-semibold text-sm text-blue-800 dark:text-blue-200">Admin Dashboard</div>
                        <div className="text-xs text-muted-foreground">Analytics & Control</div>
                      </div>
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-blue-200 dark:border-blue-600 shadow-md">
                        <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <Network className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="font-semibold text-sm text-blue-800 dark:text-blue-200">API Gateway</div>
                        <div className="text-xs text-muted-foreground">REST & GraphQL</div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Arrow */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-b from-blue-400 to-cyan-400 w-1 h-12 rounded-full shadow-lg"></div>
                  </div>

                  {/* API Gateway & Security Layer */}
                  <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-4 mb-6 border-2 border-indigo-300 dark:border-indigo-600 shadow-lg">
                    <div className="text-center mb-3">
                      <Badge variant="secondary" className="text-base px-3 py-1 mb-2">🔒 Security & Gateway Layer</Badge>
                      <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-200">Traffic Control & Protection</h3>
                    </div>
                    <div className="grid grid-cols-5 gap-3">
                      <div className="text-center p-2 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-indigo-200 dark:border-indigo-600 shadow-md">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 rounded-full p-2 mx-auto mb-2 w-10 h-10 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div className="font-semibold text-xs text-indigo-800 dark:text-indigo-200">Authentication</div>
                        <div className="text-xs text-muted-foreground">JWT + OAuth</div>
                      </div>
                      <div className="text-center p-2 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-indigo-200 dark:border-indigo-600 shadow-md">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 rounded-full p-2 mx-auto mb-2 w-10 h-10 flex items-center justify-center">
                          <Zap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div className="font-semibold text-xs text-indigo-800 dark:text-indigo-200">Rate Limiting</div>
                        <div className="text-xs text-muted-foreground">Per User/IP</div>
                      </div>
                      <div className="text-center p-2 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-indigo-200 dark:border-indigo-600 shadow-md">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 rounded-full p-2 mx-auto mb-2 w-10 h-10 flex items-center justify-center">
                          <Layers className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div className="font-semibold text-xs text-indigo-800 dark:text-indigo-200">Load Balancing</div>
                        <div className="text-xs text-muted-foreground">Round Robin</div>
                      </div>
                      <div className="text-center p-2 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-indigo-200 dark:border-indigo-600 shadow-md">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 rounded-full p-2 mx-auto mb-2 w-10 h-10 flex items-center justify-center">
                          <Lock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div className="font-semibold text-xs text-indigo-800 dark:text-indigo-200">Encryption</div>
                        <div className="text-xs text-muted-foreground">TLS 1.3</div>
                      </div>
                      <div className="text-center p-2 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-indigo-200 dark:border-indigo-600 shadow-md">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 rounded-full p-2 mx-auto mb-2 w-10 h-10 flex items-center justify-center">
                          <Activity className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div className="font-semibold text-xs text-indigo-800 dark:text-indigo-200">Monitoring</div>
                        <div className="text-xs text-muted-foreground">Real-time</div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Arrow */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-b from-indigo-400 to-purple-400 w-1 h-16 rounded-full shadow-lg"></div>
                  </div>

                  {/* Business Logic Layer */}
                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-6 mb-8 border-2 border-emerald-300 dark:border-emerald-600 shadow-lg">
                    <div className="text-center mb-4">
                      <Badge variant="secondary" className="text-lg px-4 py-2 mb-3">⚙️ Business Logic Layer</Badge>
                      <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-200">Core Services & Processing</h3>
                    </div>
                    <div className="grid grid-cols-6 gap-3">
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-emerald-200 dark:border-emerald-600 shadow-md">
                        <div className="bg-emerald-100 dark:bg-emerald-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <Truck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="font-semibold text-xs text-emerald-800 dark:text-emerald-200">Load Mgmt</div>
                        <div className="text-xs text-muted-foreground">Microservice</div>
                      </div>
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-emerald-200 dark:border-emerald-600 shadow-md">
                        <div className="bg-emerald-100 dark:bg-emerald-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="font-semibold text-xs text-emerald-800 dark:text-emerald-200">Tracking</div>
                        <div className="text-xs text-muted-foreground">GPS + IoT</div>
                      </div>
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-emerald-200 dark:border-emerald-600 shadow-md">
                        <div className="bg-emerald-100 dark:bg-emerald-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <CreditCard className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="font-semibold text-xs text-emerald-800 dark:text-emerald-200">Payments</div>
                        <div className="text-xs text-muted-foreground">Multi-gateway</div>
                      </div>
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-emerald-200 dark:border-emerald-600 shadow-md">
                        <div className="bg-emerald-100 dark:bg-emerald-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="font-semibold text-xs text-emerald-800 dark:text-emerald-200">Documents</div>
                        <div className="text-xs text-muted-foreground">Digital + OCR</div>
                      </div>
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-emerald-200 dark:border-emerald-600 shadow-md">
                        <div className="bg-emerald-100 dark:bg-emerald-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <BarChart3 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="font-semibold text-xs text-emerald-800 dark:text-emerald-200">Analytics</div>
                        <div className="text-xs text-muted-foreground">ML + BI</div>
                      </div>
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-emerald-200 dark:border-emerald-600 shadow-md">
                        <div className="bg-emerald-100 dark:bg-emerald-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <MessageSquare className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="font-semibold text-xs text-emerald-800 dark:text-emerald-200">Communication</div>
                        <div className="text-xs text-muted-foreground">Multi-channel</div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Arrow */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-b from-emerald-400 to-teal-400 w-1 h-16 rounded-full shadow-lg"></div>
                  </div>

                  {/* Data Layer */}
                  <div className="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 rounded-xl p-6 mb-8 border-2 border-violet-300 dark:border-violet-600 shadow-lg">
                    <div className="text-center mb-4">
                      <Badge variant="secondary" className="text-lg px-4 py-2 mb-3">💾 Data Layer</Badge>
                      <h3 className="text-xl font-bold text-violet-800 dark:text-violet-200">Storage & Persistence</h3>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-violet-200 dark:border-violet-600 shadow-md">
                        <div className="bg-violet-100 dark:bg-violet-900/50 rounded-full p-3 mx-auto mb-3 w-16 h-16 flex items-center justify-center">
                          <Database className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                        </div>
                        <div className="font-semibold text-violet-800 dark:text-violet-200">PostgreSQL</div>
                        <div className="text-xs text-muted-foreground mt-1">Primary Database</div>
                        <div className="text-xs text-muted-foreground">ACID Compliance</div>
                      </div>
                      <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-violet-200 dark:border-violet-600 shadow-md">
                        <div className="bg-violet-100 dark:bg-violet-900/50 rounded-full p-3 mx-auto mb-3 w-16 h-16 flex items-center justify-center">
                          <Zap className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                        </div>
                        <div className="font-semibold text-violet-800 dark:text-violet-200">Redis Cache</div>
                        <div className="text-xs text-muted-foreground mt-1">Session Storage</div>
                        <div className="text-xs text-muted-foreground">Real-time Data</div>
                      </div>
                      <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-violet-200 dark:border-violet-600 shadow-md">
                        <div className="bg-violet-100 dark:bg-violet-900/50 rounded-full p-3 mx-auto mb-3 w-16 h-16 flex items-center justify-center">
                          <HardDrive className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                        </div>
                        <div className="font-semibold text-violet-800 dark:text-violet-200">File Storage</div>
                        <div className="text-xs text-muted-foreground mt-1">S3 Compatible</div>
                        <div className="text-xs text-muted-foreground">CDN Enabled</div>
                      </div>
                      <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-violet-200 dark:border-violet-600 shadow-md">
                        <div className="bg-violet-100 dark:bg-violet-900/50 rounded-full p-3 mx-auto mb-3 w-16 h-16 flex items-center justify-center">
                          <BarChart3 className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                        </div>
                        <div className="font-semibold text-violet-800 dark:text-violet-200">Search Engine</div>
                        <div className="text-xs text-muted-foreground mt-1">Elasticsearch</div>
                        <div className="text-xs text-muted-foreground">Full-text Search</div>
                      </div>
                    </div>
                  </div>

                  {/* Infrastructure Layer */}
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl p-6 border-2 border-orange-300 dark:border-orange-600 shadow-lg">
                    <div className="text-center mb-4">
                      <Badge variant="secondary" className="text-lg px-4 py-2 mb-3">🏗️ Infrastructure Layer</Badge>
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200">Cloud & DevOps</h3>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-orange-200 dark:border-orange-600 shadow-md">
                        <div className="bg-orange-100 dark:bg-orange-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <Cloud className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="font-semibold text-xs text-orange-800 dark:text-orange-200">AWS/Azure</div>
                        <div className="text-xs text-muted-foreground">Multi-region</div>
                      </div>
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-orange-200 dark:border-orange-600 shadow-md">
                        <div className="bg-orange-100 dark:bg-orange-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <Cpu className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="font-semibold text-xs text-orange-800 dark:text-orange-200">Kubernetes</div>
                        <div className="text-xs text-muted-foreground">Container Orchestration</div>
                      </div>
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-orange-200 dark:border-orange-600 shadow-md">
                        <div className="bg-orange-100 dark:bg-orange-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <Wifi className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="font-semibold text-xs text-orange-800 dark:text-orange-200">CDN</div>
                        <div className="text-xs text-muted-foreground">Global Distribution</div>
                      </div>
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-orange-200 dark:border-orange-600 shadow-md">
                        <div className="bg-orange-100 dark:bg-orange-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <Activity className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="font-semibold text-xs text-orange-800 dark:text-orange-200">Monitoring</div>
                        <div className="text-xs text-muted-foreground">Prometheus + Grafana</div>
                      </div>
                      <div className="text-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-orange-200 dark:border-orange-600 shadow-md">
                        <div className="bg-orange-100 dark:bg-orange-900/50 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <Settings className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="font-semibold text-xs text-orange-800 dark:text-orange-200">CI/CD</div>
                        <div className="text-xs text-muted-foreground">GitHub Actions</div>
                      </div>
                    </div>
                  </div>

                  {/* Data Flow Indicators */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12">
                    <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-b from-blue-400 to-purple-400 w-2 h-32 rounded-full shadow-lg"></div>
                      <div className="text-xs text-primary font-bold rotate-90 whitespace-nowrap mt-4 bg-white dark:bg-gray-800 px-2 py-1 rounded border">DATA FLOW</div>
                      <div className="bg-gradient-to-b from-purple-400 to-orange-400 w-2 h-32 rounded-full shadow-lg mt-4"></div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className={`grid grid-cols-4 gap-4 ${isCompactMode ? 'mt-6' : 'mt-8'}`}>
                    <div className={`text-center bg-white/90 dark:bg-gray-800/90 rounded-lg border border-green-200 dark:border-green-600 shadow-md ${isCompactMode ? 'p-3' : 'p-4'}`}>
                      <CheckCircle className={`text-green-600 mx-auto mb-2 ${isCompactMode ? 'h-6 w-6' : 'h-8 w-8'}`} />
                      <div className={`font-bold text-green-600 ${isCompactMode ? 'text-xl' : 'text-2xl'}`}>99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime SLA</div>
                    </div>
                    <div className={`text-center bg-white/90 dark:bg-gray-800/90 rounded-lg border border-blue-200 dark:border-blue-600 shadow-md ${isCompactMode ? 'p-3' : 'p-4'}`}>
                      <Zap className={`text-blue-600 mx-auto mb-2 ${isCompactMode ? 'h-6 w-6' : 'h-8 w-8'}`} />
                      <div className={`font-bold text-blue-600 ${isCompactMode ? 'text-xl' : 'text-2xl'}`}>&lt;100ms</div>
                      <div className="text-sm text-muted-foreground">Response Time</div>
                    </div>
                    <div className={`text-center bg-white/90 dark:bg-gray-800/90 rounded-lg border border-purple-200 dark:border-purple-600 shadow-md ${isCompactMode ? 'p-3' : 'p-4'}`}>
                      <TrendingUp className={`text-purple-600 mx-auto mb-2 ${isCompactMode ? 'h-6 w-6' : 'h-8 w-8'}`} />
                      <div className={`font-bold text-purple-600 ${isCompactMode ? 'text-xl' : 'text-2xl'}`}>10M+</div>
                      <div className="text-sm text-muted-foreground">Daily Requests</div>
                    </div>
                    <div className={`text-center bg-white/90 dark:bg-gray-800/90 rounded-lg border border-orange-200 dark:border-orange-600 shadow-md ${isCompactMode ? 'p-3' : 'p-4'}`}>
                      <Shield className={`text-orange-600 mx-auto mb-2 ${isCompactMode ? 'h-6 w-6' : 'h-8 w-8'}`} />
                      <div className={`font-bold text-orange-600 ${isCompactMode ? 'text-xl' : 'text-2xl'}`}>256-bit</div>
                      <div className="text-sm text-muted-foreground">Encryption</div>
                    </div>
                  </div>

                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  User Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="font-medium">Users Table</div>
                <div className="text-sm space-y-1">
                  <div>• id (UUID, Primary Key)</div>
                  <div>• email (Unique)</div>
                  <div>• password_hash</div>
                  <div>• role (shipper, carrier, broker, driver, admin)</div>
                  <div>• company_id (Foreign Key)</div>
                  <div>• profile_data (JSONB)</div>
                  <div>• created_at, updated_at</div>
                  <div>• is_active, is_verified</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  Load Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="font-medium">Loads Table</div>
                <div className="text-sm space-y-1">
                  <div>• id (UUID, Primary Key)</div>
                  <div>• shipper_id (Foreign Key)</div>
                  <div>• origin_address, destination_address</div>
                  <div>• cargo_type, weight, dimensions</div>
                  <div>• pickup_date, delivery_date</div>
                  <div>• rate, currency</div>
                  <div>• status (posted, assigned, in_transit, delivered)</div>
                  <div>• special_requirements (JSONB)</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Financial Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="font-medium">Invoices & Payments</div>
                <div className="text-sm space-y-1">
                  <div>• invoice_id (UUID, Primary Key)</div>
                  <div>• shipment_id (Foreign Key)</div>
                  <div>• amount, currency, tax_amount</div>
                  <div>• payment_status, payment_method</div>
                  <div>• due_date, paid_date</div>
                  <div>• billing_address (JSONB)</div>
                  <div>• line_items (JSONB)</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Document Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="font-medium">Documents Table</div>
                <div className="text-sm space-y-1">
                  <div>• id (UUID, Primary Key)</div>
                  <div>• shipment_id (Foreign Key)</div>
                  <div>• document_type (BOL, customs, insurance)</div>
                  <div>• file_url, file_size, mime_type</div>
                  <div>• status (pending, verified, rejected)</div>
                  <div>• uploaded_by, verified_by</div>
                  <div>• metadata (JSONB)</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Analytics & Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="font-medium">Events & Metrics</div>
                <div className="text-sm space-y-1">
                  <div>• event_id (UUID, Primary Key)</div>
                  <div>• entity_type, entity_id</div>
                  <div>• event_type, event_data (JSONB)</div>
                  <div>• timestamp, user_id</div>
                  <div>• location_data (lat, lng)</div>
                  <div>• metadata (JSONB)</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Insurance & Risk
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="font-medium">Insurance Policies</div>
                <div className="text-sm space-y-1">
                  <div>• policy_id (UUID, Primary Key)</div>
                  <div>• shipment_id (Foreign Key)</div>
                  <div>• provider, policy_number</div>
                  <div>• coverage_amount, premium</div>
                  <div>• start_date, end_date</div>
                  <div>• terms_conditions (JSONB)</div>
                  <div>• claims_data (JSONB)</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="apis" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Core API Endpoints</CardTitle>
                <CardDescription>RESTful APIs with GraphQL support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Authentication</h4>
                  <div className="text-sm space-y-1 font-mono">
                    <div>POST /auth/login</div>
                    <div>POST /auth/register</div>
                    <div>POST /auth/refresh</div>
                    <div>POST /auth/logout</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Load Management</h4>
                  <div className="text-sm space-y-1 font-mono">
                    <div>GET /loads</div>
                    <div>POST /loads</div>
                    <div>PUT /loads/:id</div>
                    <div>POST /loads/:id/bid</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Shipment Tracking</h4>
                  <div className="text-sm space-y-1 font-mono">
                    <div>GET /shipments/:id</div>
                    <div>POST /shipments/:id/update</div>
                    <div>GET /shipments/:id/timeline</div>
                    <div>POST /shipments/:id/location</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Integration APIs</CardTitle>
                <CardDescription>Third-party service integrations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Payment Gateways</h4>
                  <div className="text-sm space-y-1">
                    <Badge variant="outline">Stripe</Badge>
                    <Badge variant="outline">PayPal</Badge>
                    <Badge variant="outline">Bank Transfers</Badge>
                    <Badge variant="outline">Mobile Money</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Mapping & GPS</h4>
                  <div className="text-sm space-y-1">
                    <Badge variant="outline">Google Maps API</Badge>
                    <Badge variant="outline">HERE Maps</Badge>
                    <Badge variant="outline">OpenStreetMap</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Communication</h4>
                  <div className="text-sm space-y-1">
                    <Badge variant="outline">SMS Gateway</Badge>
                    <Badge variant="outline">Email Service</Badge>
                    <Badge variant="outline">Push Notifications</Badge>
                    <Badge variant="outline">WhatsApp API</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Real-time Features</CardTitle>
              <CardDescription>WebSocket and Server-Sent Events implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Live Tracking</h4>
                  <div className="text-sm space-y-1">
                    <div>• GPS location updates</div>
                    <div>• ETA calculations</div>
                    <div>• Route optimization</div>
                    <div>• Geofence alerts</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Notifications</h4>
                  <div className="text-sm space-y-1">
                    <div>• Load assignments</div>
                    <div>• Payment confirmations</div>
                    <div>• Document updates</div>
                    <div>• System alerts</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Collaboration</h4>
                  <div className="text-sm space-y-1">
                    <div>• Chat messaging</div>
                    <div>• Status updates</div>
                    <div>• File sharing</div>
                    <div>• Video calls</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Authentication & Authorization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2">Multi-Factor Authentication</h4>
                  <div className="text-sm space-y-1">
                    <div>• SMS-based OTP</div>
                    <div>• Email verification</div>
                    <div>• Authenticator apps</div>
                    <div>• Biometric authentication</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Role-Based Access Control</h4>
                  <div className="text-sm space-y-1">
                    <div>• Granular permissions</div>
                    <div>• Resource-level access</div>
                    <div>• API endpoint protection</div>
                    <div>• Dynamic role assignment</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2">Encryption</h4>
                  <div className="text-sm space-y-1">
                    <div>• AES-256 at rest</div>
                    <div>• TLS 1.3 in transit</div>
                    <div>• End-to-end for sensitive data</div>
                    <div>• Key rotation policies</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Compliance</h4>
                  <div className="text-sm space-y-1">
                    <Badge variant="destructive">GDPR</Badge>
                    <Badge variant="destructive">SOC 2</Badge>
                    <Badge variant="destructive">ISO 27001</Badge>
                    <Badge variant="destructive">PCI DSS</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monitoring & Auditing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-1">
                  <div>• Comprehensive audit logs</div>
                  <div>• Real-time threat detection</div>
                  <div>• Automated incident response</div>
                  <div>• Vulnerability scanning</div>
                  <div>• Penetration testing</div>
                  <div>• Security metrics dashboard</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Continuity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-1">
                  <div>• Automated backups (hourly)</div>
                  <div>• Multi-region redundancy</div>
                  <div>• Disaster recovery plan</div>
                  <div>• 99.9% uptime SLA</div>
                  <div>• Failover mechanisms</div>
                  <div>• Data integrity monitoring</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}