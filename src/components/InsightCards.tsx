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
      color: "text-info",
      bgColor: "bg-info/10",
      action: "View Details"
    },
    {
      icon: ShoppingCart,
      title: "Top Category: Groceries",
      description: "72% of your spending this month went to grocery stores",
      category: "Category",
      color: "text-accent",
      bgColor: "bg-accent/10", 
      action: "Create Grocery Pass"
    },
    {
      icon: Calendar,
      title: "Monthly Budget Alert",
      description: "You've used 85% of your $500 monthly grocery budget",
      category: "Budget",
      color: "text-warning",
      bgColor: "bg-warning/10",
      action: "Adjust Budget"
    },
    {
      icon: AlertCircle,
      title: "Subscription Detected",
      description: "Netflix charge detected - would you like to track subscriptions?",
      category: "Alert",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      action: "Track Subscriptions"
    }
  ];

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-1">AI Insights</h2>
          <p className="text-sm text-muted-foreground">Personalized recommendations powered by Google AI</p>
        </div>
        <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">View All</Button>
      </div>

      <div className="grid gap-6">
        {insights.map((insight, index) => {
          const IconComponent = insight.icon;
          return (
            <Card 
              key={index}
              className="p-6 animate-fade-in bg-gradient-surface border-0 shadow-floating hover:shadow-elevated transition-all duration-300 group backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className={`p-3 rounded-xl ${insight.bgColor} group-hover:scale-110 transition-transform duration-300 shadow-card`}>
                  <IconComponent className={`h-6 w-6 ${insight.color}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg text-card-foreground truncate">{insight.title}</h3>
                    <span className="text-xs px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
                      {insight.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {insight.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-colors">
                      {insight.action}
                    </Button>
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90 border-0 shadow-card hover:shadow-elevated transition-all duration-300">
                      <Wallet className="h-4 w-4 mr-2" />
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