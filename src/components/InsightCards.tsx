import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, ShoppingCart, Calendar, AlertCircle, Wallet } from "lucide-react";

export const InsightCards = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: "Weekly Spending Up 15%",
      description: "You spent $127 more this week compared to last week",
      category: "Trending",
      color: "text-google-blue",
      bgColor: "bg-google-blue/10",
      action: "View Details",
      ctaVariant: "google-blue" as const
    },
    {
      icon: ShoppingCart,
      title: "Top Category: Groceries",
      description: "72% of your spending this month went to grocery stores",
      category: "Category",
      color: "text-google-green",
      bgColor: "bg-google-green/10", 
      action: "Create Grocery Pass",
      ctaVariant: "google-green" as const
    },
    {
      icon: Calendar,
      title: "Monthly Budget Alert",
      description: "You've used 85% of your $500 monthly grocery budget",
      category: "Budget",
      color: "text-google-yellow",
      bgColor: "bg-google-yellow/10",
      action: "Adjust Budget",
      ctaVariant: "google-yellow" as const
    },
    {
      icon: AlertCircle,
      title: "Subscription Detected",
      description: "Netflix charge detected - would you like to track subscriptions?",
      category: "Alert",
      color: "text-google-red",
      bgColor: "bg-google-red/10",
      action: "Track Subscriptions",
      ctaVariant: "google-red" as const
    }
  ];

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">AI Insights</h2>
        <Button variant="ghost" size="sm" className="text-google-blue hover:bg-google-blue/10">View All</Button>
      </div>

      <div className="grid gap-4">
        {insights.map((insight, index) => {
          const IconComponent = insight.icon;
          return (
            <Card 
              key={index}
              className="p-6 animate-fade-in glass-card border-0 shadow-google hover:shadow-floating transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${insight.bgColor} group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`h-6 w-6 ${insight.color}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-card-foreground truncate text-lg">{insight.title}</h3>
                    <span className="text-xs px-3 py-1 bg-muted/80 rounded-full text-muted-foreground font-medium">
                      {insight.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {insight.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="text-xs font-medium">
                      {insight.action}
                    </Button>
                    <Button size="sm" className="text-xs font-medium bg-gradient-primary border-0 hover:shadow-elevated transition-shadow">
                      <Wallet className="h-3 w-3 mr-1" />
                      Add to Wallet
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};