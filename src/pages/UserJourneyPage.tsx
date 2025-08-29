import { UserJourney } from "@/components/views/UserJourney";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UserJourneyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated Background Logo */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <img 
          src="/img/africaLogi_logo.png" 
          alt="AfricaLogi Background" 
          className="w-96 h-96 object-contain opacity-40 animate-[float_6s_ease-in-out_infinite]"
        />
      </div>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back Button and Title */}
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/')}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
              <div className="h-6 w-px bg-border"></div>
              <h1 className="text-lg font-semibold text-foreground">User Journey Guide</h1>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/img/africaLogi_logo.png" 
                alt="AfricaLogi" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-foreground">
                AfricaLogi
              </span>
            </div>

            {/* Home Button */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/')}
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              Home
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <UserJourney />
      </main>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using AfricaLogi to streamline their supply chain operations across Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="africalogi" 
              size="lg"
              onClick={() => navigate('/')}
              className="gap-3 px-8 py-6"
            >
              Get Started Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('/roadmap', '_blank')}
              className="gap-3 px-8 py-6"
            >
              View Development Roadmap
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
