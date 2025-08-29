import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Package, Clock, TrendingUp, MapPin, Globe, FileText, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Dashboard() {
  const { t } = useLanguage();

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          {t('dashboard.title')}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
          {t('dashboard.subtitle')}
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card className="p-4 sm:p-6 border-l-4 border-l-success card-au-theme">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-success" />
              {t('dashboard.kpis.onTimeDeliveries')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">98.5%</div>
            <p className="text-sm text-muted-foreground">
              {t('dashboard.kpis.fromLastMonth')}
            </p>
          </CardContent>
        </Card>

        <Card className="p-4 sm:p-6 border-l-4 border-l-primary card-au-theme">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              {t('dashboard.kpis.activeShipments')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">247</div>
            <p className="text-sm text-muted-foreground">
              {t('dashboard.kpis.acrossCountries')}
            </p>
          </CardContent>
        </Card>

        <Card className="p-4 sm:p-6 border-l-4 border-l-warning card-au-theme">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
              <Clock className="h-5 w-5 text-warning" />
              {t('dashboard.kpis.pendingActions')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">12</div>
            <p className="text-sm text-muted-foreground">
              {t('dashboard.kpis.requiringAttention')}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Live Map Section */}
      <Card className="p-6 sm:p-8 card-au-theme">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            {t('dashboard.liveMap.title')}
          </CardTitle>
          <CardDescription className="text-base">
            {t('dashboard.liveMap.description')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">
              {t('dashboard.liveMap.comingSoon')}
            </h3>
            <p className="text-muted-foreground">
              {t('dashboard.liveMap.description')}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 card-au-theme">
          <div className="text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              {t('navigation.marketplace')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('landing.features.marketplace.description')}
            </p>
          </div>
        </Card>

        <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 card-au-theme">
          <div className="text-center">
            <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FileText className="h-6 w-6 text-success" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              {t('navigation.documents')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('landing.features.documents.description')}
            </p>
          </div>
        </Card>

        <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 card-au-theme">
          <div className="text-center">
            <div className="h-12 w-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <CreditCard className="h-6 w-6 text-warning" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              {t('navigation.payments')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('landing.features.payments.description')}
            </p>
          </div>
        </Card>

        <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 card-au-theme">
          <div className="text-center">
            <div className="h-12 w-12 bg-info/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="h-6 w-6 text-info" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              {t('navigation.analytics')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('landing.features.analytics.description')}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}