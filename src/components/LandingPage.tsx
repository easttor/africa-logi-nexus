import { useState } from "react";
import { 
  BarChart3, 
  Package, 
  FileText, 
  CreditCard, 
  TrendingUp, 
  Banknote, 
  Shield, 
  Leaf,
  ArrowRight,
  Check,
  Menu,
  X,
  ChevronDown,
  Clock,
  Target,
  Star,
  UserPlus,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    key: "smartDashboard",
    icon: BarChart3,
    title: "Smart Dashboard",
    description: "Real-time insights and analytics for your logistics operations across Africa."
  },
  {
    key: "marketplace",
    icon: Package,
    title: "Digital Marketplace",
    description: "Connect with trusted carriers and find the best rates for your shipments."
  },
  {
    key: "documents",
    icon: FileText,
    title: "Document Management",
    description: "Streamline customs and compliance with digital document processing."
  },
  {
    key: "payments",
    icon: CreditCard,
    title: "Secure Payments",
    description: "Safe and fast payment processing with multiple currency support."
  },
  {
    key: "analytics",
    icon: TrendingUp,
    title: "Analytics & Reporting",
    description: "Data-driven insights to optimize your supply chain performance."
  },
  {
    key: "finance",
    icon: Banknote,
    title: "Trade Finance",
    description: "Access working capital and financing solutions for your shipments."
  },
  {
    key: "insurance",
    icon: Shield,
    title: "Insurance Marketplace",
    description: "Comprehensive cargo protection from leading African insurers."
  },
  {
    key: "sustainability",
    icon: Leaf,
    title: "Sustainability Tracking",
    description: "Monitor and reduce your environmental impact with green logistics."
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 5 shipments per month",
      "Basic dashboard access",
      "Standard support",
      "Essential documentation tools"
    ],
    cta: "Get Started",
    variant: "africalogi-outline" as const,
    popular: false
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "Ideal for growing logistics operations",
    features: [
      "Unlimited shipments",
      "Advanced analytics",
      "Priority support",
      "Full document management",
      "Trade finance access",
      "Insurance marketplace"
    ],
    cta: "Start Free Trial",
    variant: "africalogi" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Dedicated account manager",
      "White-label options",
      "Advanced API access",
      "24/7 phone support"
    ],
    cta: "Contact Sales",
    variant: "hero" as const,
    popular: false
  }
];

interface LandingPageProps {
  onViewDemo: () => void;
}

export function LandingPage({ onViewDemo }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated Background Logo */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <img 
          src="/img/africaLogi_logo.png" 
          alt="AfricaLogi Background" 
          className="w-96 h-96 object-contain opacity-20 animate-[float_6s_ease-in-out_infinite]"
        />
      </div>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/img/africaLogi_logo.png"
                alt="AfricaLogi" 
                className="h-10 w-10 sm:h-16 sm:w-16 object-contain"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
                <span className="text-africalogi-green">Africa</span>
                <span className="text-africalogi-gold">Logi</span>
              </span>
            </div>

            {/* Desktop Navigation - Hidden on small screens */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-sm xl:text-base text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {t('common.features')}
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-sm xl:text-base text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {t('common.pricing')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm xl:text-base text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {t('common.contact')}
              </button>
            </nav>

            {/* Desktop CTA and Language Selector - Hidden on small screens */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <LanguageSelector />
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('/presentation', '_blank')}
                className="hidden xl:inline-flex"
              >
                Investor Deck
              </Button>
              <Button 
                variant="africalogi-outline" 
                size="sm"
                onClick={onViewDemo}
              >
                {t('common.viewDemo')}
              </Button>
              <Button 
                variant="africalogi"
                size="sm"
              >
                {t('common.getStarted')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
              <div className="px-4 py-4 space-y-3">
                {/* Main Navigation */}
                <div className="grid grid-cols-1 gap-2">
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="flex items-center justify-between px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                  >
                    <span>{t('common.features')}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="flex items-center justify-between px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                  >
                    <span>{t('common.pricing')}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="flex items-center justify-between px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                  >
                    <span>{t('common.contact')}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>

                {/* Additional Links */}
                <div className="pt-2 border-t border-border">
                  <button 
                    onClick={() => window.open('/roadmap', '_blank')}
                    className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                  >
                    {t('landing.roadmap.viewFullRoadmap')}
                  </button>
                  <button 
                    onClick={() => window.open('/user-journey', '_blank')}
                    className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                  >
                    {t('landing.userJourney.viewCompleteGuide')}
                  </button>
                </div>

                {/* Language Selector for Mobile */}
                <div className="pt-2 border-t border-border">
                  <div className="px-3 py-2">
                    <LanguageSelector />
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-2 border-t border-border space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('/presentation', '_blank')}
                  >
                    Investor Deck
                  </Button>
                  <Button 
                    variant="africalogi-outline" 
                    className="w-full"
                    onClick={onViewDemo}
                  >
                    {t('common.viewDemo')}
                  </Button>
                  <Button 
                    variant="africalogi"
                    className="w-full"
                  >
                    {t('common.getStarted')}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 xl:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="success" className="mb-4 sm:mb-6 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 status-au-success">
              {t('landing.hero.badge')}
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              {t('landing.hero.title')}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              {t('landing.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={onViewDemo}
                className="gap-2 sm:gap-3 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 btn-au-primary w-full sm:w-auto"
              >
                {t('landing.hero.cta')}
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="africalogi-outline" 
                size="lg"
                className="gap-2 sm:gap-3 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 btn-au-secondary w-full sm:w-auto"
              >
                {t('landing.hero.secondaryCta')}
                <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('/roadmap', '_blank')}
                className="gap-2 sm:gap-3 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
              >
                {t('landing.roadmap.viewFullRoadmap')}
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-africalogi-green/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-africalogi-gold/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-africalogi-green/5 rounded-full blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              {t('landing.features.title')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              {t('landing.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <Card 
                  key={index} 
                  className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 card-au-theme"
                >
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-africalogi-green/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-africalogi-green" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    {t(`landing.features.${feature.key}.title`)}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {t(`landing.features.${feature.key}.description`)}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap Preview Section */}
      <section id="roadmap" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-r from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              {t('landing.roadmap.title')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              {t('landing.roadmap.subtitle')}
            </p>
            <div className="mt-4 p-3 sm:p-4 bg-africalogi-green/10 rounded-lg inline-block">
              <p className="text-xs sm:text-sm font-medium text-africalogi-green">
                🚀 {t('landing.roadmap.targetLaunch').replace('{date}', new Date(new Date().getFullYear(), new Date().getMonth() + 6, 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }))}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-8 sm:mb-12">
            <div className="text-center p-4 sm:p-6 rounded-lg bg-white shadow-lg border border-border">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-africalogi-green/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Check className="h-6 w-6 sm:h-8 sm:w-8 text-africalogi-green" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{t('landing.roadmap.phase1')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">{t('landing.roadmap.foundation')}</p>
              <Badge variant="success" className="text-xs">{t('landing.roadmap.complete')}</Badge>
            </div>

            <div className="text-center p-4 sm:p-6 rounded-lg bg-white shadow-lg border border-border">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{t('landing.roadmap.phase2')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">{t('landing.roadmap.coreFeatures')}</p>
              <Badge variant="default" className="text-xs">{t('landing.roadmap.active')}</Badge>
            </div>

            <div className="text-center p-4 sm:p-6 rounded-lg bg-white shadow-lg border border-border">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{t('landing.roadmap.phase3')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">{t('landing.roadmap.advancedFeatures')}</p>
              <Badge variant="secondary" className="text-xs">{t('landing.roadmap.planned')}</Badge>
            </div>

            <div className="text-center p-4 sm:p-6 rounded-lg bg-white shadow-lg border border-border">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{t('landing.roadmap.phase4')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">{t('landing.roadmap.productionLaunch')}</p>
              <Badge variant="outline" className="text-xs">{t('landing.roadmap.launch')}</Badge>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="africalogi-outline" 
              size="lg"
              onClick={() => window.open('/roadmap', '_blank')}
              className="gap-2 sm:gap-3 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              {t('landing.roadmap.viewFullRoadmap')}
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section id="user-journey" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-r from-background to-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              {t('landing.userJourney.title')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              {t('landing.userJourney.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
            <div className="text-center p-4 sm:p-6 rounded-lg bg-white shadow-lg border border-border">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-africalogi-green/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <UserPlus className="h-6 w-6 sm:h-8 sm:w-8 text-africalogi-green" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{t('landing.userJourney.phase1')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">{t('landing.userJourney.onboarding')}</p>
              <ul className="text-xs text-muted-foreground space-y-1 text-left">
                <li>{t('landing.userJourney.accountRegistration')}</li>
                <li>{t('landing.userJourney.profileSetup')}</li>
                <li>{t('landing.userJourney.platformOrientation')}</li>
              </ul>
            </div>

            <div className="text-center p-4 sm:p-6 rounded-lg bg-white shadow-lg border border-border">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{t('landing.userJourney.phase2')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">{t('landing.userJourney.operations')}</p>
              <ul className="text-xs text-muted-foreground space-y-1 text-left">
                <li>{t('landing.userJourney.loadManagement')}</li>
                <li>{t('landing.userJourney.realTimeTracking')}</li>
                <li>{t('landing.userJourney.paymentProcessing')}</li>
              </ul>
            </div>

            <div className="text-center p-4 sm:p-6 rounded-lg bg-white shadow-lg border border-border sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-africalogi-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-africalogi-gold" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{t('landing.userJourney.phase3')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">{t('landing.userJourney.optimization')}</p>
              <ul className="text-xs text-muted-foreground space-y-1 text-left">
                <li>{t('landing.userJourney.performanceAnalytics')}</li>
                <li>{t('landing.userJourney.continuousImprovement')}</li>
                <li>{t('landing.userJourney.scaleOperations')}</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="africalogi-outline" 
              size="lg"
              onClick={() => window.open('/user-journey', '_blank')}
              className="gap-2 sm:gap-3 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              {t('landing.userJourney.viewCompleteGuide')}
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              {t('landing.pricing.title')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              {t('landing.pricing.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative p-6 sm:p-8 ${
                  plan.popular 
                    ? 'border-2 border-africalogi-green shadow-africalogi' 
                    : 'hover:shadow-lg'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <Badge 
                    variant="success" 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-africalogi-green text-africalogi-green-foreground text-xs sm:text-sm"
                  >
                    {t('landing.pricing.mostPopular')}
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {t(`landing.pricing.${plan.name.toLowerCase()}`)}
                  </h3>
                  <div className="mb-2">
                    <span className="text-3xl sm:text-4xl font-bold text-foreground">
                      {plan.price === 'Free' ? t('landing.pricing.free') : plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      {plan.period === '/month' ? t('landing.pricing.month') : plan.period}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {t(`landing.pricing.${plan.name.toLowerCase()}Desc`)}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-africalogi-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.variant} 
                  className="w-full"
                  size="lg"
                >
                  {plan.cta === 'Get Started' ? t('landing.pricing.getStarted') : 
                   plan.cta === 'Start Free Trial' ? t('landing.pricing.startFreeTrial') : 
                   t('landing.pricing.contactSales')}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-au-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            {t('landing.cta.title')}
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto px-4">
            {t('landing.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button 
              variant="secondary" 
              size="lg"
              className="gap-2 sm:gap-3 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
            >
              {t('landing.cta.getStarted')}
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={onViewDemo}
              className="gap-2 sm:gap-3 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
            >
              {t('landing.cta.viewDemo')}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <img 
                  src="/img/africaLogi_logo.png" 
                  alt="AfricaLogi" 
                  className="h-10 w-10 sm:h-8 sm:w-8 object-contain invert"
                />
                <span className="text-lg sm:text-xl font-bold">
                  <span className="text-white">Africa</span>
                  <span className="text-africalogi-gold">Logi</span>
                </span>
              </div>
              <p className="text-sm sm:text-base text-white/80">
                Connecting Africa's supply chain with modern logistics solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Platform</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketplace</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
            
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-white/80">
                <li>support@africalogi.com</li>
                <li>+234 800 AFRICA</li>
                <li>Lagos, Nigeria</li>
                <li>Accra, Ghana</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-white/80">
            <p className="text-xs sm:text-sm">&copy; 2024 AfricaLogi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}