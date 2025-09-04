import { useLanguage } from "@/hooks/use-language-mock";
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
            📋 Business Strategy
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t('businessPlan.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('businessPlan.subtitle')}
          </p>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('businessPlan.marketAnalysis.title')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">{t('businessPlan.marketAnalysis.opportunity.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="w-fit">$180B</Badge>
                  <span className="text-muted-foreground">{t('businessPlan.marketAnalysis.opportunity.market')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="w-fit">8.2%</Badge>
                  <span className="text-muted-foreground">{t('businessPlan.marketAnalysis.opportunity.growth')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="w-fit">1.4B</Badge>
                  <span className="text-muted-foreground">{t('businessPlan.marketAnalysis.opportunity.population')}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">{t('businessPlan.marketAnalysis.strategy.title')}</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <h4 className="font-semibold mb-2">{t('businessPlan.marketAnalysis.strategy.phase1.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('businessPlan.marketAnalysis.strategy.phase1.description')}</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <h4 className="font-semibold mb-2">{t('businessPlan.marketAnalysis.strategy.phase2.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('businessPlan.marketAnalysis.strategy.phase2.description')}</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <h4 className="font-semibold mb-2">{t('businessPlan.marketAnalysis.strategy.phase3.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('businessPlan.marketAnalysis.strategy.phase3.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('businessPlan.financials.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-africalogi-green">$2.5M</CardTitle>
                <CardDescription>{t('businessPlan.financials.year1')}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-500">$8.2M</CardTitle>
                <CardDescription>{t('businessPlan.financials.year2')}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-purple-500">$25M</CardTitle>
                <CardDescription>{t('businessPlan.financials.year3')}</CardDescription>
              </CardHeader>
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
    </div>
  );
}