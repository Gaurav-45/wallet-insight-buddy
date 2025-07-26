import { Button } from "@/components/ui/button";
import { Camera, Bell, User } from "lucide-react";
import appIcon from "@/assets/app-icon.jpg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-gradient-surface backdrop-blur-sm shadow-card">
      <div className="container flex h-20 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src={appIcon} alt="Raseed" className="h-12 w-12 rounded-xl shadow-card" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-primary rounded-full border-2 border-background"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Raseed</h1>
            <p className="text-xs text-muted-foreground">Google Wallet Ready</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-primary/10 hover:text-primary transition-colors rounded-xl">
            <Camera className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-primary/10 hover:text-primary transition-colors rounded-xl">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-primary/10 hover:text-primary transition-colors rounded-xl">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};