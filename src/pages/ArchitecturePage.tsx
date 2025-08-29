import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  XCircle,
  ArrowLeft
} from "lucide-react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function ArchitecturePage() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => window.history.back()}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <div className="flex items-center space-x-3">
                <Globe className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AfricaLogi Platform</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Platform Architecture & Data Models</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
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
                id="export-pdf-button"
              >
                <Download className="h-4 w-4" />
                Export as PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Platform Architecture & Data Models
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Comprehensive system design for AfricaLogi - Modern logistics platform built for scale, 
            featuring microservices architecture, cloud-native infrastructure, and enterprise-grade security.
          </p>
        </div>

        {/* Architecture Infographic */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div id="architecture-infographic" className={`bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 ${isCompactMode ? 'p-4' : 'p-6'}`}>
            
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
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-b from-indigo-400 to-purple-400 w-1 h-12 rounded-full shadow-lg"></div>
              </div>

              {/* Business Logic Layer */}
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-4 mb-6 border-2 border-emerald-300 dark:border-emerald-600 shadow-lg">
                <div className="text-center mb-3">
                  <Badge variant="secondary" className="text-base px-3 py-1 mb-2">⚙️ Business Logic Layer</Badge>
                  <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200">Core Services & Processing</h3>
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
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-b from-emerald-400 to-teal-400 w-1 h-12 rounded-full shadow-lg"></div>
              </div>

              {/* Data Layer */}
              <div className="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 rounded-xl p-4 mb-6 border-2 border-violet-300 dark:border-violet-600 shadow-lg">
                <div className="text-center mb-3">
                  <Badge variant="secondary" className="text-base px-3 py-1 mb-2">💾 Data Layer</Badge>
                  <h3 className="text-lg font-bold text-violet-800 dark:text-violet-200">Storage & Persistence</h3>
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

              {/* Connection Arrow */}
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-b from-emerald-400 to-teal-400 w-1 h-12 rounded-full shadow-lg"></div>
              </div>

              {/* Infrastructure Layer */}
              <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl p-4 border-2 border-orange-300 dark:border-orange-600 shadow-lg">
                <div className="text-center mb-3">
                  <Badge variant="secondary" className="text-base px-3 py-1 mb-2">🏗️ Infrastructure Layer</Badge>
                  <h3 className="text-lg font-bold text-orange-800 dark:text-orange-200">Cloud & DevOps</h3>
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
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Microservices architecture for scalability</li>
              <li>• Multi-tenant platform support</li>
              <li>• Real-time tracking and monitoring</li>
              <li>• Enterprise-grade security</li>
              <li>• Cloud-native infrastructure</li>
              <li>• API-first design approach</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technology Stack</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Frontend: React + TypeScript</li>
              <li>• Backend: Node.js + Express</li>
              <li>• Database: PostgreSQL + Redis</li>
              <li>• Cloud: AWS/Azure</li>
              <li>• Container: Docker + Kubernetes</li>
              <li>• Monitoring: Prometheus + Grafana</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
