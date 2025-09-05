import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Target, Users, TrendingUp, Globe, DollarSign, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BusinessPlanPage() {
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
            📋 Strategic Business Plan
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t('businessPlan.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('businessPlan.subtitle')}
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('businessPlan.executiveSummary.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-500" />
                    Mission & Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Concept</h4>
                    <p className="text-sm text-muted-foreground">{t('businessPlan.executiveSummary.concept')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Mission</h4>
                    <p className="text-sm text-muted-foreground">{t('businessPlan.executiveSummary.mission')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Strategic Advantage</h4>
                    <p className="text-sm text-muted-foreground">{t('businessPlan.executiveSummary.advantage')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    Problem & Solution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">The Problem</h4>
                    <p className="text-sm text-muted-foreground">{t('businessPlan.executiveSummary.problem')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Our Solution</h4>
                    <p className="text-sm text-muted-foreground">{t('businessPlan.executiveSummary.solution')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Funding Strategy</h4>
                    <p className="text-sm text-muted-foreground">{t('businessPlan.executiveSummary.funding')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('businessPlan.companyDescription.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Dual-Location Strategic Structure</CardTitle>
                <CardDescription>{t('businessPlan.companyDescription.strategy')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-200">
                    <h4 className="font-semibold mb-2 text-blue-800">🇨🇭 Switzerland Operations</h4>
                    <p className="text-sm text-blue-700">{t('businessPlan.companyDescription.headquarters')}</p>
                    <p className="text-xs text-blue-600 mt-1">Strategic management, investor relations, credibility</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-50/50 border border-green-200">
                    <h4 className="font-semibold mb-2 text-green-800">🇲🇦 Morocco Development</h4>
                    <p className="text-sm text-green-700">{t('businessPlan.companyDescription.development')}</p>
                    <p className="text-xs text-green-600 mt-1">Technical excellence at competitive costs</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="p-4 rounded-lg bg-purple-50/50 border border-purple-200">
                    <h4 className="font-semibold mb-2 text-purple-800">Our Vision</h4>
                    <p className="text-sm text-purple-700">{t('businessPlan.companyDescription.vision')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('businessPlan.businessModel.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>{t('businessPlan.businessModel.b2b.title')}</CardTitle>
                <CardDescription>{t('businessPlan.businessModel.b2b.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t('businessPlan.businessModel.b2b.features.enterprises')}</li>
                  <li>• {t('businessPlan.businessModel.b2b.features.logistics')}</li>
                  <li>• {t('businessPlan.businessModel.b2b.features.government')}</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50/50 rounded-lg border border-blue-200">
                  <p className="text-xs text-blue-700 font-medium">Target: Enterprise clients with $10K+ monthly volumes</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle>{t('businessPlan.businessModel.saas.title')}</CardTitle>
                <CardDescription>{t('businessPlan.businessModel.saas.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t('businessPlan.businessModel.saas.features.monthly')}</li>
                  <li>• {t('businessPlan.businessModel.saas.features.transaction')}</li>
                  <li>• {t('businessPlan.businessModel.saas.features.premium')}</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50/50 rounded-lg border border-green-200">
                  <p className="text-xs text-green-700 font-medium">Revenue: 70% subscription, 30% transaction fees</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>{t('businessPlan.businessModel.marketplace.title')}</CardTitle>
                <CardDescription>{t('businessPlan.businessModel.marketplace.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t('businessPlan.businessModel.marketplace.features.commission')}</li>
                  <li>• {t('businessPlan.businessModel.marketplace.features.verified')}</li>
                  <li>• {t('businessPlan.businessModel.marketplace.features.insurance')}</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-50/50 rounded-lg border border-purple-200">
                  <p className="text-xs text-purple-700 font-medium">Network effect: Value increases with each new participant</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('businessPlan.marketAnalysis.title')}</h2>
          
          {/* Market Opportunity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-2xl">$180B</CardTitle>
                <CardDescription>{t('businessPlan.marketAnalysis.opportunity.market')}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-2xl">8.2%</CardTitle>
                <CardDescription>{t('businessPlan.marketAnalysis.opportunity.growth')}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-2xl">1.4B</CardTitle>
                <CardDescription>{t('businessPlan.marketAnalysis.opportunity.population')}</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Competitive Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle>{t('businessPlan.marketAnalysis.competition.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-red-50/50 border border-red-200">
                  <h4 className="font-semibold mb-2 text-red-800">Current Market State</h4>
                  <p className="text-sm text-red-700">{t('businessPlan.marketAnalysis.competition.current')}</p>
                </div>
                <div className="p-4 rounded-lg bg-green-50/50 border border-green-200">
                  <h4 className="font-semibold mb-2 text-green-800">Our Advantage</h4>
                  <p className="text-sm text-green-700">{t('businessPlan.marketAnalysis.competition.advantage')}</p>
                </div>
                <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-200">
                  <h4 className="font-semibold mb-2 text-blue-800">Strategic Positioning</h4>
                  <p className="text-sm text-blue-700">{t('businessPlan.marketAnalysis.competition.positioning')}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('businessPlan.marketAnalysis.strategy.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-200">
                  <h4 className="font-semibold mb-2 text-blue-800">{t('businessPlan.marketAnalysis.strategy.phase1.title')}</h4>
                  <p className="text-sm text-blue-700">{t('businessPlan.marketAnalysis.strategy.phase1.description')}</p>
                </div>
                <div className="p-4 rounded-lg bg-green-50/50 border border-green-200">
                  <h4 className="font-semibold mb-2 text-green-800">{t('businessPlan.marketAnalysis.strategy.phase2.title')}</h4>
                  <p className="text-sm text-green-700">{t('businessPlan.marketAnalysis.strategy.phase2.description')}</p>
                </div>
                <div className="p-4 rounded-lg bg-purple-50/50 border border-purple-200">
                  <h4 className="font-semibold mb-2 text-purple-800">{t('businessPlan.marketAnalysis.strategy.phase3.title')}</h4>
                  <p className="text-sm text-purple-700">{t('businessPlan.marketAnalysis.strategy.phase3.description')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team & Organization */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('businessPlan.team.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground mb-8">{t('businessPlan.team.structure')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🇨🇭 {t('businessPlan.team.switzerland.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-blue-50/50">
                    <p className="text-sm font-medium">{t('businessPlan.team.switzerland.ceo')}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50/50">
                    <p className="text-sm font-medium">{t('businessPlan.team.switzerland.product')}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50/50">
                    <p className="text-sm font-medium">{t('businessPlan.team.switzerland.marketing')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🇲🇦 {t('businessPlan.team.morocco.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-green-50/50">
                    <p className="text-sm font-medium">{t('businessPlan.team.morocco.techLead')}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-50/50">
                    <p className="text-sm font-medium">{t('businessPlan.team.morocco.developers')}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-50/50">
                    <p className="text-sm font-medium">{t('businessPlan.team.morocco.design')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Development */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('businessPlan.products.title')}</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">Months 1-6</Badge>
                  <CardTitle>{t('businessPlan.products.mvp.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• {t('businessPlan.products.mvp.dashboard')}</li>
                    <li>• {t('businessPlan.products.mvp.matching')}</li>
                    <li>• {t('businessPlan.products.mvp.tracking')}</li>
                    <li>• {t('businessPlan.products.mvp.messaging')}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">Months 7-12</Badge>
                  <CardTitle>{t('businessPlan.products.phase2.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• {t('businessPlan.products.phase2.documents')}</li>
                    <li>• {t('businessPlan.products.phase2.payments')}</li>
                    <li>• {t('businessPlan.products.phase2.analytics')}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">Months 13-18</Badge>
                  <CardTitle>{t('businessPlan.products.phase3.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• {t('businessPlan.products.phase3.ai')}</li>
                    <li>• {t('businessPlan.products.phase3.marketplace')}</li>
                    <li>• {t('businessPlan.products.phase3.integration')}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('businessPlan.financials.title')}</h2>
          
          {/* Funding Requirements */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">{t('businessPlan.financials.funding.title')}</CardTitle>
                <CardDescription className="text-center">{t('businessPlan.financials.funding.breakdown')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-africalogi-green mb-2">669,500 CHF</div>
                  <p className="text-muted-foreground">{t('businessPlan.financials.funding.seed')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-blue-50/50">
                    <div className="text-2xl font-bold text-blue-600">60%</div>
                    <p className="text-sm text-blue-700">Development Team</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-green-50/50">
                    <div className="text-2xl font-bold text-green-600">25%</div>
                    <p className="text-sm text-green-700">Management & Strategy</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-purple-50/50">
                    <div className="text-2xl font-bold text-purple-600">15%</div>
                    <p className="text-sm text-purple-700">Operations & Marketing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Projections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-africalogi-green">$2.5M</CardTitle>
                <CardDescription>{t('businessPlan.financials.projections.year1')}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-500">$8.2M</CardTitle>
                <CardDescription>{t('businessPlan.financials.projections.year2')}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-purple-500">$25M</CardTitle>
                <CardDescription>{t('businessPlan.financials.projections.year3')}</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Cost Advantage */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">{t('businessPlan.financials.costAdvantage.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-lg bg-green-50/50 border border-green-200">
                    <div className="text-xl font-bold text-green-600 mb-2">70%</div>
                    <p className="text-sm text-green-700">{t('businessPlan.financials.costAdvantage.morocco')}</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-blue-50/50 border border-blue-200">
                    <div className="text-xl font-bold text-blue-600 mb-2">Quality</div>
                    <p className="text-sm text-blue-700">{t('businessPlan.financials.costAdvantage.quality')}</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-purple-50/50 border border-purple-200">
                    <div className="text-xl font-bold text-purple-600 mb-2">Credibility</div>
                    <p className="text-sm text-purple-700">{t('businessPlan.financials.costAdvantage.credibility')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Assessment */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('businessPlan.risks.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-yellow-500" />
                  {t('businessPlan.risks.mitigation.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t('businessPlan.risks.mitigation.diversification')}</li>
                  <li>• {t('businessPlan.risks.mitigation.partnerships')}</li>
                  <li>• {t('businessPlan.risks.mitigation.compliance')}</li>
                  <li>• {t('businessPlan.risks.mitigation.technology')}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  {t('businessPlan.risks.opportunities.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t('businessPlan.risks.opportunities.digital')}</li>
                  <li>• {t('businessPlan.risks.opportunities.infrastructure')}</li>
                  <li>• {t('businessPlan.risks.opportunities.trade')}</li>
                  <li>• {t('businessPlan.risks.opportunities.sustainability')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('businessPlan.competitive.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Operational Model</h3>
                  <p className="text-sm text-muted-foreground">{t('businessPlan.competitive.operational')}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Comprehensive Solution</h3>
                  <p className="text-sm text-muted-foreground">{t('businessPlan.competitive.comprehensive')}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Strategic Alignment</h3>
                  <p className="text-sm text-muted-foreground">{t('businessPlan.competitive.alignment')}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Cost Structure</h3>
                  <p className="text-sm text-muted-foreground">{t('businessPlan.competitive.cost')}</p>
                </CardContent>
              </Card>

              <Card className="text-center md:col-span-2 lg:col-span-1">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Quality Standards</h3>
                  <p className="text-sm text-muted-foreground">{t('businessPlan.competitive.quality')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}