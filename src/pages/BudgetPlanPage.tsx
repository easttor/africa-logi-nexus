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
                <CardTitle className="text-3xl font-bold text-africalogi-green">669.5K CHF</CardTitle>
                <CardDescription>{t('budgetPlan.overview.total')}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-500">18 {t('budgetPlan.overview.months')}</CardTitle>
                <CardDescription>{t('budgetPlan.overview.timeline')}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-purple-500">54+</CardTitle>
                <CardDescription>{t('budgetPlan.overview.countries')}</CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          {/* Cost Advantage Highlight */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-green-50/50 to-blue-50/50 border-green-200">
              <CardHeader>
                <CardTitle className="text-center text-green-800">Strategic Cost Advantage</CardTitle>
                <CardDescription className="text-center">{t('budgetPlan.overview.advantage')}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Salary Breakdown */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('budgetPlan.salaryBreakdown.title')}</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">{t('budgetPlan.salaryBreakdown.description')}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🇨🇭 {t('budgetPlan.salaryBreakdown.switzerland.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50/50">
                  <span className="text-sm font-medium">{t('budgetPlan.salaryBreakdown.switzerland.ceo')}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50/50">
                  <span className="text-sm font-medium">{t('budgetPlan.salaryBreakdown.switzerland.product')}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50/50">
                  <span className="text-sm font-medium">{t('budgetPlan.salaryBreakdown.switzerland.marketing')}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center font-bold text-blue-800">
                    <span>{t('budgetPlan.salaryBreakdown.switzerland.total')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🇲🇦 {t('budgetPlan.salaryBreakdown.morocco.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-green-50/50">
                  <span className="text-sm font-medium">{t('budgetPlan.salaryBreakdown.morocco.techLead')}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-green-50/50">
                  <span className="text-sm font-medium">{t('budgetPlan.salaryBreakdown.morocco.developers')}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-green-50/50">
                  <span className="text-sm font-medium">{t('budgetPlan.salaryBreakdown.morocco.junior')}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-green-50/50">
                  <span className="text-sm font-medium">{t('budgetPlan.salaryBreakdown.morocco.designer')}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-green-50/50">
                  <span className="text-sm font-medium">{t('budgetPlan.salaryBreakdown.morocco.qa')}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center font-bold text-green-800">
                    <span>{t('budgetPlan.salaryBreakdown.morocco.total')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cost Comparison */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">{t('budgetPlan.salaryBreakdown.comparison.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-4 rounded-lg bg-red-50/50 border border-red-200">
                    <div className="text-lg font-bold text-red-600 mb-1">~850K CHF</div>
                    <p className="text-xs text-red-700">{t('budgetPlan.salaryBreakdown.comparison.swissEquivalent')}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-50/50 border border-green-200">
                    <div className="text-lg font-bold text-green-600 mb-1">359K CHF</div>
                    <p className="text-xs text-green-700">{t('budgetPlan.salaryBreakdown.comparison.savings')}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-200">
                    <div className="text-lg font-bold text-blue-600 mb-1">Quality</div>
                    <p className="text-xs text-blue-700">{t('budgetPlan.salaryBreakdown.comparison.advantage')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Operational Costs Breakdown */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('budgetPlan.operationalCosts.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-500" />
                  {t('budgetPlan.operationalCosts.office.title')}
                </CardTitle>
                <CardDescription>{t('budgetPlan.operationalCosts.office.description')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50/50">
                  <span className="text-sm">{t('budgetPlan.operationalCosts.office.switzerland')}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-green-50/50">
                  <span className="text-sm">{t('budgetPlan.operationalCosts.office.morocco')}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-green-500" />
                  {t('budgetPlan.operationalCosts.infrastructure.title')}
                </CardTitle>
                <CardDescription>{t('budgetPlan.operationalCosts.infrastructure.description')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm">{t('budgetPlan.operationalCosts.infrastructure.cloud')}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm">{t('budgetPlan.operationalCosts.infrastructure.subscriptions')}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm">{t('budgetPlan.operationalCosts.infrastructure.accounting')}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-500" />
                  {t('budgetPlan.operationalCosts.legal.title')}
                </CardTitle>
                <CardDescription>{t('budgetPlan.operationalCosts.legal.description')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm">{t('budgetPlan.operationalCosts.legal.incorporation')}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm">{t('budgetPlan.operationalCosts.legal.retainers')}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-yellow-500" />
                  {t('budgetPlan.operationalCosts.marketing.title')}
                </CardTitle>
                <CardDescription>{t('budgetPlan.operationalCosts.marketing.description')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm">{t('budgetPlan.operationalCosts.marketing.digital')}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm">{t('budgetPlan.operationalCosts.marketing.events')}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Investment Allocation */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('budgetPlan.development.title')}</h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">{t('budgetPlan.development.team.title')}</CardTitle>
                <CardDescription className="text-center">{t('budgetPlan.development.team.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 rounded-lg bg-green-50/50 border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                    <h4 className="font-semibold mb-2">{t('budgetPlan.development.team.morocco.title')}</h4>
                    <p className="text-xs text-green-700">{t('budgetPlan.development.team.morocco.description')}</p>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-blue-50/50 border border-blue-200">
                    <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
                    <h4 className="font-semibold mb-2">{t('budgetPlan.development.team.switzerland.title')}</h4>
                    <p className="text-xs text-blue-700">{t('budgetPlan.development.team.switzerland.description')}</p>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-purple-50/50 border border-purple-200">
                    <div className="text-3xl font-bold text-purple-600 mb-2">15%</div>
                    <h4 className="font-semibold mb-2">{t('budgetPlan.development.team.qa.title')}</h4>
                    <p className="text-xs text-purple-700">{t('budgetPlan.development.team.qa.description')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-blue-500" />
                </div>
                <h4 className="font-semibold mb-2">{t('budgetPlan.development.breakdown.frontend')}</h4>
                <p className="text-sm text-muted-foreground">React, TypeScript, Tailwind</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="h-6 w-6 text-green-500" />
                </div>
                <h4 className="font-semibold mb-2">{t('budgetPlan.development.breakdown.backend')}</h4>
                <p className="text-sm text-muted-foreground">Node.js, PostgreSQL, Redis</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-purple-500" />
                </div>
                <h4 className="font-semibold mb-2">{t('budgetPlan.development.breakdown.mobile')}</h4>
                <p className="text-sm text-muted-foreground">React Native, iOS/Android</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-yellow-500" />
                </div>
                <h4 className="font-semibold mb-2">{t('budgetPlan.development.breakdown.management')}</h4>
                <p className="text-sm text-muted-foreground">Agile, Scrum, DevOps</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Infrastructure Investment */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('budgetPlan.infrastructure.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-blue-500" />
                  {t('budgetPlan.infrastructure.server.title')}
                </CardTitle>
                <CardDescription>{t('budgetPlan.infrastructure.server.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50/50">
                    <span className="text-sm">{t('budgetPlan.infrastructure.server.cloud')}</span>
                    <Badge variant="outline">25K CHF</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50/50">
                    <span className="text-sm">{t('budgetPlan.infrastructure.server.cdn')}</span>
                    <Badge variant="outline">8K CHF</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50/50">
                    <span className="text-sm">{t('budgetPlan.infrastructure.server.database')}</span>
                    <Badge variant="outline">7K CHF</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50/50">
                    <span className="text-sm">{t('budgetPlan.infrastructure.server.monitoring')}</span>
                    <Badge variant="outline">5K CHF</Badge>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center font-semibold text-blue-800">
                      <span>{t('budgetPlan.infrastructure.server.total')}</span>
                      <Badge className="bg-blue-600">45K CHF</Badge>
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
                  <div className="flex justify-between items-center p-3 rounded-lg bg-red-50/50">
                    <span className="text-sm">{t('budgetPlan.infrastructure.security.penetration')}</span>
                    <Badge variant="outline">10K CHF</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-red-50/50">
                    <span className="text-sm">{t('budgetPlan.infrastructure.security.compliance')}</span>
                    <Badge variant="outline">8K CHF</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-red-50/50">
                    <span className="text-sm">{t('budgetPlan.infrastructure.security.insurance')}</span>
                    <Badge variant="outline">4K CHF</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-red-50/50">
                    <span className="text-sm">{t('budgetPlan.infrastructure.security.monitoring')}</span>
                    <Badge variant="outline">3K CHF</Badge>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center font-semibold text-red-800">
                      <span>{t('budgetPlan.infrastructure.security.total')}</span>
                      <Badge className="bg-red-600">25K CHF</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 18-Month Budget Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('budgetPlan.timeline.title')}</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-lg">{t('budgetPlan.timeline.phase1.title')}</CardTitle>
                  <CardDescription>280K CHF</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={100} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">{t('budgetPlan.timeline.phase1.description')}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-lg">{t('budgetPlan.timeline.phase2.title')}</CardTitle>
                  <CardDescription>220K CHF</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={75} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">{t('budgetPlan.timeline.phase2.description')}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle className="text-lg">{t('budgetPlan.timeline.phase3.title')}</CardTitle>
                  <CardDescription>169.5K CHF</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={25} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">{t('budgetPlan.timeline.phase3.description')}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-yellow-500" />
                  </div>
                  <CardTitle className="text-lg">{t('budgetPlan.timeline.contingency.title')}</CardTitle>
                  <CardDescription>90K CHF</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={15} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">{t('budgetPlan.timeline.contingency.description')}</p>
                </CardContent>
              </Card>
            </div>

            {/* Use of Funds */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-center">{t('budgetPlan.useOfFunds.title')}</CardTitle>
                <CardDescription className="text-center">{t('budgetPlan.useOfFunds.advantage')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-lg bg-green-50/50 border border-green-200">
                    <div className="text-2xl font-bold text-green-600 mb-2">60%</div>
                    <p className="text-sm text-green-700">{t('budgetPlan.useOfFunds.development')}</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-blue-50/50 border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600 mb-2">25%</div>
                    <p className="text-sm text-blue-700">{t('budgetPlan.useOfFunds.management')}</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-purple-50/50 border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600 mb-2">15%</div>
                    <p className="text-sm text-purple-700">{t('budgetPlan.useOfFunds.operations')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ROI Projections */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">{t('budgetPlan.roi.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  <div className="p-4 rounded-lg bg-green-50/50 border border-green-200">
                    <div className="text-lg font-bold text-green-600 mb-1">42%</div>
                    <p className="text-xs text-green-700">{t('budgetPlan.roi.efficiency')}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-200">
                    <div className="text-lg font-bold text-blue-600 mb-1">24-30M</div>
                    <p className="text-xs text-blue-700">{t('budgetPlan.roi.timeline')}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-purple-50/50 border border-purple-200">
                    <div className="text-lg font-bold text-purple-600 mb-1">$25M</div>
                    <p className="text-xs text-purple-700">{t('budgetPlan.roi.revenue')}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-yellow-50/50 border border-yellow-200">
                    <div className="text-lg font-bold text-yellow-600 mb-1">37x</div>
                    <p className="text-xs text-yellow-700">{t('budgetPlan.roi.multiple')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}