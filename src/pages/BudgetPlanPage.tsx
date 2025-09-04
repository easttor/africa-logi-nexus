import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, DollarSign, Users, Server, Shield, Code, Globe, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BudgetPlanPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('common.backToHome')}
            </Button>
            <div className="flex items-center gap-3">
              <img src="/img/africaLogi_logo.png" alt="AfricaLogi" className="h-8 w-8" />
              <span className="text-xl font-bold text-foreground">{t('common.africaLogi')}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm">
            💰 Financial Planning
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t('budgetPlan.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('budgetPlan.subtitle')}
          </p>
        </div>
      </section>

      {/* Budget Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('budgetPlan.overview.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-africalogi-green">$2.8M</CardTitle>
                <CardDescription>{t('budgetPlan.overview.total')}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-500">6 {t('budgetPlan.overview.months')}</CardTitle>
                <CardDescription>{t('budgetPlan.overview.timeline')}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-purple-500">35+</CardTitle>
                <CardDescription>{t('budgetPlan.overview.countries')}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Costs */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('budgetPlan.development.title')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-500" />
                    {t('budgetPlan.development.team.title')}
                  </CardTitle>
                  <CardDescription>{t('budgetPlan.development.team.description')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{t('budgetPlan.development.team.morocco.title')}</span>
                      <span className="text-sm text-muted-foreground">$1.2M</span>
                    </div>
                    <Progress value={43} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">{t('budgetPlan.development.team.morocco.description')}</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{t('budgetPlan.development.team.switzerland.title')}</span>
                      <span className="text-sm text-muted-foreground">$800K</span>
                    </div>
                    <Progress value={29} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">{t('budgetPlan.development.team.switzerland.description')}</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{t('budgetPlan.development.team.qa.title')}</span>
                      <span className="text-sm text-muted-foreground">$300K</span>
                    </div>
                    <Progress value={11} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">{t('budgetPlan.development.team.qa.description')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-500" />
                    {t('budgetPlan.development.breakdown.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <div>
                        <h4 className="font-semibold">{t('budgetPlan.development.breakdown.frontend')}</h4>
                        <p className="text-sm text-muted-foreground">4 developers</p>
                      </div>
                      <Badge variant="outline">$600K</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <div>
                        <h4 className="font-semibold">{t('budgetPlan.development.breakdown.backend')}</h4>
                        <p className="text-sm text-muted-foreground">6 developers</p>
                      </div>
                      <Badge variant="outline">$900K</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <div>
                        <h4 className="font-semibold">{t('budgetPlan.development.breakdown.mobile')}</h4>
                        <p className="text-sm text-muted-foreground">3 developers</p>
                      </div>
                      <Badge variant="outline">$450K</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <div>
                        <h4 className="font-semibold">{t('budgetPlan.development.breakdown.management')}</h4>
                        <p className="text-sm text-muted-foreground">Switzerland-based</p>
                      </div>
                      <Badge variant="outline">$350K</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Security */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('budgetPlan.infrastructure.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-purple-500" />
                  {t('budgetPlan.infrastructure.server.title')}
                </CardTitle>
                <CardDescription>{t('budgetPlan.infrastructure.server.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{t('budgetPlan.infrastructure.server.cloud')}</span>
                    <Badge variant="outline">$180K</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{t('budgetPlan.infrastructure.server.cdn')}</span>
                    <Badge variant="outline">$60K</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{t('budgetPlan.infrastructure.server.database')}</span>
                    <Badge variant="outline">$120K</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{t('budgetPlan.infrastructure.server.monitoring')}</span>
                    <Badge variant="outline">$40K</Badge>
                  </div>
                  <div className="border-t pt-2 mt-4">
                    <div className="flex justify-between items-center font-semibold">
                      <span>{t('budgetPlan.infrastructure.server.total')}</span>
                      <Badge>$400K</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-500" />
                  {t('budgetPlan.infrastructure.security.title')}
                </CardTitle>
                <CardDescription>{t('budgetPlan.infrastructure.security.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{t('budgetPlan.infrastructure.security.penetration')}</span>
                    <Badge variant="outline">$80K</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{t('budgetPlan.infrastructure.security.compliance')}</span>
                    <Badge variant="outline">$120K</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{t('budgetPlan.infrastructure.security.insurance')}</span>
                    <Badge variant="outline">$60K</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{t('budgetPlan.infrastructure.security.monitoring')}</span>
                    <Badge variant="outline">$40K</Badge>
                  </div>
                  <div className="border-t pt-2 mt-4">
                    <div className="flex justify-between items-center font-semibold">
                      <span>{t('budgetPlan.infrastructure.security.total')}</span>
                      <Badge>$300K</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline & Milestones */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('budgetPlan.timeline.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-lg">{t('budgetPlan.timeline.q1.title')}</CardTitle>
                  <CardDescription>$700K</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={100} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">{t('budgetPlan.timeline.q1.description')}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-lg">{t('budgetPlan.timeline.q2.title')}</CardTitle>
                  <CardDescription>$800K</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={75} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">{t('budgetPlan.timeline.q2.description')}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle className="text-lg">{t('budgetPlan.timeline.q3.title')}</CardTitle>
                  <CardDescription>$800K</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={25} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">{t('budgetPlan.timeline.q3.description')}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-6 w-6 text-yellow-500" />
                  </div>
                  <CardTitle className="text-lg">{t('budgetPlan.timeline.q4.title')}</CardTitle>
                  <CardDescription>$500K</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={0} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">{t('budgetPlan.timeline.q4.description')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}