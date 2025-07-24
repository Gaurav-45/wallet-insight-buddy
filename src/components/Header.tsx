import { Button } from "@/components/ui/button";
import { Camera, Menu, User } from "lucide-react";
import appIcon from "@/assets/app-icon.jpg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur-sm shadow-google">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3 animate-fade-in">
          <img src={appIcon} alt="Raseed" className="h-10 w-10 rounded-xl shadow-card" />
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Raseed</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-google-blue/10 hover:text-google-blue transition-colors">
            <Camera className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-google-green/10 hover:text-google-green transition-colors">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};