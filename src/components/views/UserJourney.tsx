import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  UserPlus, Shield, Search, FileText, Truck, MapPin, CreditCard, BarChart3,
  MessageCircle, Star, Download, Upload, Eye, CheckCircle, TrendingUp, Users,
  Globe, Smartphone, Package, Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language-mock";

export function UserJourney() {
  const { t } = useLanguage();

  const userTypes = [
    {
      type: "shipper",
      title: t('userJourney.userTypes.shipper'),
      description: t('userJourney.userTypes.shipperDesc'),
      icon: Package,
      features: ["Load posting", "Carrier selection", "Real-time tracking", "Payment management"]
    },
    {
      type: "carrier",
      title: t('userJourney.userTypes.carrier'),
      description: t('userJourney.userTypes.carrierDesc'),
      icon: Truck,
      features: ["Load discovery", "Route optimization", "Document management", "Earnings tracking"]
    },
    {
      type: "broker",
      title: t('userJourney.userTypes.broker'),
      description: t('userJourney.userTypes.brokerDesc'),
      icon: Users,
      features: ["Load matching", "Commission tracking", "Relationship management", "Market insights"]
    }
  ];

  const journeySteps = [
    {
      phase: t('userJourney.phases.onboarding'),
      steps: [
        {
          title: "Account Registration",
          description: "Create your account with basic information",
          duration: "5 minutes",
          status: "completed",
          icon: UserPlus
        },
        {
          title: "Profile Setup",
          description: "Complete your business profile and verification",
          duration: "15 minutes",
          status: "completed",
          icon: Shield
        },
        {
          title: "Platform Orientation",
          description: "Learn the platform features and navigation",
          duration: "10 minutes",
          status: "completed",
          icon: Eye
        }
      ]
    },
    {
      phase: t('userJourney.phases.coreOperations'),
      steps: [
        {
          title: "Load Management",
          description: "Post loads or find available shipments",
          duration: "20 minutes",
          status: "active",
          icon: Package
        },
        {
          title: "Real-time Tracking",
          description: "Monitor shipments and track progress",
          duration: "Ongoing",
          status: "active",
          icon: MapPin
        },
        {
          title: "Payment Processing",
          description: "Handle payments and manage transactions",
          duration: "10 minutes",
          status: "active",
          icon: CreditCard
        }
      ]
    },
    {
      phase: t('userJourney.phases.execution'),
      steps: [
        {
          title: "Document Management",
          description: "Upload and manage shipping documents",
          duration: "15 minutes",
          status: "planned",
          icon: FileText
        },
        {
          title: "Communication",
          description: "Connect with partners and customers",
          duration: "Ongoing",
          status: "planned",
          icon: MessageCircle
        },
        {
          title: "Issue Resolution",
          description: "Handle delays and resolve problems",
          duration: "As needed",
          status: "planned",
          icon: Shield
        }
      ]
    },
    {
      phase: t('userJourney.phases.completion'),
      steps: [
        {
          title: "Performance Analytics",
          description: "Review delivery metrics and performance",
          duration: "10 minutes",
          status: "future",
          icon: BarChart3
        },
        {
          title: "Feedback & Reviews",
          description: "Rate partners and provide feedback",
          duration: "5 minutes",
          status: "future",
          icon: Star
        },
        {
          title: "Continuous Improvement",
          description: "Optimize processes based on insights",
          duration: "Ongoing",
          status: "future",
          icon: TrendingUp
        }
      ]
    }
  ];

  const mobileAppFeatures = [
    {
      title: "Mobile-First Experience",
      description: "Optimized for smartphones and tablets",
      icon: Smartphone
    },
    {
      title: "Offline Capabilities",
      description: "Work without internet connection",
      icon: Download
    },
    {
      title: "Push Notifications",
      description: "Real-time updates and alerts",
      icon: Bell
    },
    {
      title: "GPS Integration",
      description: "Location-based services and tracking",
      icon: MapPin
    }
  ];

  const proTips = [
    {
      title: "Profile Optimization",
      description: "Complete your profile to increase visibility",
      icon: UserPlus
    },
    {
      title: "Regular Updates",
      description: "Keep your information current and accurate",
      icon: Upload
    },
    {
      title: "Communication",
      description: "Maintain clear communication with partners",
      icon: MessageCircle
    },
    {
      title: "Performance Tracking",
      description: "Monitor your metrics and improve",
      icon: TrendingUp
    }
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          {t('userJourney.title')}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
          {t('userJourney.subtitle')}
        </p>
      </div>

      <Tabs defaultValue="journey" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="journey">{t('userJourney.tabs.journey')}</TabsTrigger>
          <TabsTrigger value="user-types">{t('userJourney.tabs.userTypes')}</TabsTrigger>
          <TabsTrigger value="mobile">{t('userJourney.tabs.mobile')}</TabsTrigger>
          <TabsTrigger value="tips">{t('userJourney.tabs.tips')}</TabsTrigger>
        </TabsList>

        <TabsContent value="journey" className="space-y-8">
          {journeySteps.map((phase, phaseIndex) => (
            <Card key={phaseIndex} className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{phaseIndex + 1}</span>
                  </div>
                  {phase.phase}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {phase.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="relative">
                      <div className="absolute left-4 top-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">{stepIndex + 1}</span>
                      </div>
                      <div className="ml-16">
                        <Card className="border-l-4 border-l-primary/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                                <step.icon className="h-4 w-4 text-primary" />
                                {step.title}
                              </CardTitle>
                              <Badge
                                variant={step.status === 'completed' ? 'success' :
                                       step.status === 'active' ? 'default' :
                                       step.status === 'planned' ? 'secondary' : 'outline'}
                                className="text-xs"
                              >
                                {step.status === 'completed' ? '✅ Complete' :
                                 step.status === 'active' ? '🚧 Active' :
                                 step.status === 'planned' ? '📋 Planned' : '🔮 Future'}
                              </Badge>
                            </div>
                            <CardDescription className="text-sm">
                              {step.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>⏱️ {step.duration}</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="user-types" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {userTypes.map((userType, index) => {
              const IconComponent = userType.icon;
              return (
                <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {userType.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {userType.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {userType.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="mobile" className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Mobile App Features
            </h3>
            <p className="text-muted-foreground">
              Access AfricaLogi on the go with our mobile applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {mobileAppFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download Mobile App
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Pro Tips for Success
            </h3>
            <p className="text-muted-foreground">
              Expert advice to maximize your platform experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {proTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{tip.title}</h4>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
