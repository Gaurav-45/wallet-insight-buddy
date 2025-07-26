import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Wallet, TrendingUp, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-receipt-scan.jpg";

interface OnboardingFlowProps {
  onSignIn?: () => void;
}

export const OnboardingFlow = ({ onSignIn }: OnboardingFlowProps) => {
  const { toast } = useToast();

  const handleGoogleSignIn = () => {
    toast({
      title: "Signing in...",
      description: "Connecting to Google services",
    });
    
    setTimeout(() => {
      toast({
        title: "Welcome to Raseed!",
        description: "Successfully connected to Google Wallet",
      });
      onSignIn?.();
    }, 2000);
  };
  return (
    <div className="min-h-screen bg-gradient-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-glass"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary-light/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 pt-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="relative mb-8">
            <img 
              src={heroImage} 
              alt="Receipt Scanning" 
              className="mx-auto rounded-3xl shadow-floating w-full max-w-sm animate-bounce-in"
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-glow"></div>
          </div>
          <h1 className="text-4xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Welcome to Raseed
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-md mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Professional receipt scanning with AI insights and seamless Google Wallet integration
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-8 animate-fade-in bg-card/95 backdrop-blur-sm border-0 shadow-floating hover:shadow-elevated transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-primary rounded-xl shadow-card group-hover:scale-110 transition-transform duration-300">
                <Camera className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Smart Scanning</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Advanced AI-powered extraction with real-time analysis for accurate data capture
            </p>
          </Card>

          <Card className="p-8 animate-fade-in bg-card/95 backdrop-blur-sm border-0 shadow-floating hover:shadow-elevated transition-all duration-300 group" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-success rounded-xl shadow-card group-hover:scale-110 transition-transform duration-300">
                <Wallet className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Wallet Integration</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Seamless Google Wallet integration for instant pass creation and management
            </p>
          </Card>

          <Card className="p-8 animate-fade-in bg-card/95 backdrop-blur-sm border-0 shadow-floating hover:shadow-elevated transition-all duration-300 group" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">AI Insights</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Intelligent spending analysis with personalized recommendations and trends
            </p>
          </Card>

          <Card className="p-8 animate-fade-in bg-card/95 backdrop-blur-sm border-0 shadow-floating hover:shadow-elevated transition-all duration-300 group" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-google-yellow/10 rounded-xl border border-google-yellow/20 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-6 w-6 text-google-yellow" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Multilingual</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Natural language processing in multiple languages for global accessibility
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center pb-12">
          <div className="relative inline-block">
            <Button 
              size="lg" 
              onClick={handleGoogleSignIn}
              className="bg-card text-primary hover:bg-card/95 shadow-floating hover:shadow-elevated mb-6 w-full max-w-sm animate-scale-in px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105"
              style={{ animationDelay: '0.4s' }}
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>
            <div className="absolute -inset-1 bg-gradient-primary rounded-xl blur opacity-30 animate-glow"></div>
          </div>
          <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs mx-auto">
            Secure authentication with Google Wallet integration for professional expense management
          </p>
        </div>
      </div>
    </div>
  );
};