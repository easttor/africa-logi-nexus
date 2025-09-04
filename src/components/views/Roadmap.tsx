import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Rocket, 
  CheckCircle, 
  Clock, 
  Target, 
  TrendingUp, 
  Users, 
  Globe,
  Zap,
  Shield,
  BarChart3
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language-mock";

export function Roadmap() {
  const { t } = useLanguage();

  // Calculate dates for 6-month timeline from today
  const today = new Date();
  const month1 = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const month2 = new Date(today.getFullYear(), today.getMonth() + 2, 1);
  const month3 = new Date(today.getFullYear(), today.getMonth() + 3, 1);
  const month4 = new Date(today.getFullYear(), today.getMonth() + 4, 1);
  const month5 = new Date(today.getFullYear(), today.getMonth() + 5, 1);
  const month6 = new Date(today.getFullYear(), today.getMonth() + 6, 1);

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const phases = [
    {
      id: "phase1",
      title: t('roadmap.phases.phase1'),
      duration: `${formatMonth(month1)} - ${formatMonth(month2)}`,
      status: "completed",
      color: "bg-green-500",
      items: [
        { title: "Core Platform Architecture", completed: true },
        { title: "User Authentication System", completed: true },
        { title: "Basic Dashboard Framework", completed: true },
        { title: "Database Schema Design", completed: true },
        { title: "Basic Payment Integration", completed: true },
        { title: "Core Database Architecture", completed: true }
      ]
    },
    {
      id: "phase2",
      title: t('roadmap.phases.phase2'),
      duration: `${formatMonth(month2)} - ${formatMonth(month3)}`,
      status: "inProgress",
      color: "bg-blue-500",
      items: [
        { title: "Marketplace Core Features", completed: false },
        { title: "Document Management System", completed: false },
        { title: "Real-time Tracking", completed: false },
        { title: "Payment Processing", completed: false },
        { title: "User Management", completed: false },
        { title: "API Development", completed: false }
      ]
    },
    {
      id: "phase3",
      title: t('roadmap.phases.phase3'),
      duration: `${formatMonth(month4)} - ${formatMonth(month5)}`,
      status: "planned",
      color: "bg-yellow-500",
      items: [
        { title: "Advanced Analytics", completed: false },
        { title: "AI-Powered Insights", completed: false },
        { title: "Mobile Applications", completed: false },
        { title: "Integration APIs", completed: false },
        { title: "Security Enhancements", completed: false },
        { title: "Performance Optimization", completed: false }
      ]
    },
    {
      id: "phase4",
      title: t('roadmap.phases.phase4'),
      duration: `${formatMonth(month5)} - ${formatMonth(month6)}`,
      status: "future",
      color: "bg-purple-500",
      items: [
        { title: "Production Deployment", completed: false },
        { title: "User Testing & Feedback", completed: false },
        { title: "Performance Monitoring", completed: false },
        { title: "Security Audits", completed: false },
        { title: "Documentation", completed: false },
        { title: "Go-Live Preparation", completed: false }
      ]
    }
  ];

  const milestones = [
    { date: formatMonth(today), title: "Project Kickoff", status: "completed", icon: Rocket },
    { date: formatMonth(month2), title: "MVP Complete", status: "completed", icon: CheckCircle },
    { date: formatMonth(month4), title: "Beta Testing", status: "planned", icon: Target },
    { date: formatMonth(month6), title: "Production Launch", status: "future", icon: Zap }
  ];

  const successMetrics = [
    { metric: "Platform Performance", target: "99.9% Uptime", current: "99.5%", icon: Zap },
    { metric: "User Adoption", target: "10,000+ Users", current: "2,500+", icon: Users },
    { metric: "Geographic Coverage", target: "54 Countries", current: "12 Countries", icon: Globe },
    { metric: "Security Standards", target: "ISO 27001", current: "In Progress", icon: Shield },
    { metric: "API Response Time", target: "<200ms", current: "250ms", icon: BarChart3 }
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          {t('roadmap.title')}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
          {t('roadmap.subtitle')}
        </p>
        <div className="mt-4 p-3 sm:p-4 bg-africalogi-green/10 rounded-lg inline-block">
          <p className="text-sm font-medium text-africalogi-green">
            🚀 {t('roadmap.targetLaunch').replace('{date}', formatMonth(month6))}
          </p>
        </div>
      </div>

      <Tabs defaultValue="timeline" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="timeline">{t('roadmap.tabs.timeline')}</TabsTrigger>
          <TabsTrigger value="milestones">{t('roadmap.tabs.milestones')}</TabsTrigger>
          <TabsTrigger value="metrics">{t('roadmap.tabs.metrics')}</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="space-y-6">
          {phases.map((phase, index) => (
            <Card key={phase.id} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${phase.color}`}></div>
                      {phase.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      {phase.duration}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant={phase.status === 'completed' ? 'success' : 
                           phase.status === 'inProgress' ? 'default' : 
                           phase.status === 'planned' ? 'secondary' : 'outline'}
                    className="text-xs"
                  >
                    {phase.status === 'completed' ? t('roadmap.status.completed') :
                     phase.status === 'inProgress' ? t('roadmap.status.inProgress') :
                     phase.status === 'planned' ? t('roadmap.status.planned') :
                     t('roadmap.status.future')}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      {item.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className={`text-sm ${item.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="milestones" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <Card key={index} className="text-center p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{milestone.date}</p>
                  <Badge 
                    variant={milestone.status === 'completed' ? 'success' : 
                           milestone.status === 'planned' ? 'secondary' : 'outline'}
                    className="text-xs"
                  >
                    {milestone.status === 'completed' ? t('roadmap.status.completed') :
                     milestone.status === 'planned' ? t('roadmap.status.planned') :
                     t('roadmap.status.future')}
                  </Badge>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {successMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index} className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{metric.metric}</h3>
                      <p className="text-sm text-muted-foreground">Target: {metric.target}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Current:</span>
                    <span className="font-semibold text-foreground">{metric.current}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}