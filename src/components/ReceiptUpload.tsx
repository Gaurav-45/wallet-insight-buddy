import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Camera, Upload, FileText, CheckCircle, Wallet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ReceiptUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [analyzed, setAnalyzed] = useState(false);
  const { toast } = useToast();

  const handleUpload = async (type: 'camera' | 'file') => {
    setUploading(true);
    setProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setAnalyzed(true);
          toast({
            title: "Receipt Analyzed!",
            description: "AI extraction completed successfully",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    toast({
      title: "Processing Receipt",
      description: type === 'camera' ? "Analyzing camera capture..." : "Processing uploaded file...",
    });
  };

  const mockReceiptData = {
    merchant: "Grocery Plus",
    date: "2024-01-15",
    total: "$47.82",
    tax: "$3.82",
    items: [
      { name: "Organic Bananas", price: "$3.99", category: "Produce" },
      { name: "Milk 2%", price: "$4.29", category: "Dairy" },
      { name: "Bread", price: "$2.99", category: "Bakery" },
      { name: "Chicken Breast", price: "$12.99", category: "Meat" }
    ]
  };

  if (analyzed) {
    return (
      <Card className="p-6 max-w-md mx-auto animate-bounce-in glass-card border-0 shadow-floating">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-google-green/10 rounded-xl">
            <CheckCircle className="h-6 w-6 text-google-green" />
          </div>
          <h3 className="text-xl font-bold text-card-foreground">Receipt Analyzed</h3>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4 p-5 bg-gradient-card rounded-xl border">
            <div>
              <p className="text-sm text-muted-foreground font-medium">Merchant</p>
              <p className="font-semibold text-lg">{mockReceiptData.merchant}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Date</p>
              <p className="font-semibold text-lg">{mockReceiptData.date}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Total</p>
              <p className="font-bold text-xl text-google-green">{mockReceiptData.total}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Tax</p>
              <p className="font-semibold text-lg">{mockReceiptData.tax}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-card-foreground text-lg">Items Detected</h4>
            <div className="space-y-3">
              {mockReceiptData.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-google-blue font-medium bg-google-blue/10 px-2 py-1 rounded-full inline-block mt-1">{item.category}</p>
                  </div>
                  <p className="font-bold text-google-green">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="flex-1 bg-gradient-primary border-0 font-semibold hover:shadow-elevated transition-shadow" size="lg">
              <Wallet className="h-4 w-4 mr-2" />
              Add to Wallet
            </Button>
            <Button variant="outline" size="lg" onClick={() => setAnalyzed(false)} className="font-medium">
              Upload Another
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 max-w-md mx-auto glass-card border-0 shadow-google">
      <div className="text-center mb-8">
        <div className="p-4 bg-gradient-primary rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center animate-float">
          <FileText className="h-10 w-10 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-card-foreground">Upload Receipt</h3>
        <p className="text-muted-foreground leading-relaxed">
          Capture or upload your receipt for AI-powered analysis and insights
        </p>
      </div>

      {uploading ? (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 relative">
              <div className="absolute inset-0 rounded-full border-4 border-google-blue/20"></div>
              <div className="absolute inset-0 rounded-full border-4 border-google-blue border-t-transparent animate-spin"></div>
            </div>
            <p className="text-muted-foreground mb-4 font-medium">Analyzing receipt with AI...</p>
            <Progress value={progress} className="w-full h-3 bg-muted" />
            <p className="text-xs text-muted-foreground mt-2">{progress}% complete</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <Button 
            onClick={() => handleUpload('camera')} 
            className="w-full bg-gradient-primary border-0 font-semibold hover:shadow-elevated transition-shadow"
            size="lg"
          >
            <Camera className="h-5 w-5 mr-3" />
            Capture with Camera
          </Button>
          
          <Button 
            onClick={() => handleUpload('file')} 
            variant="outline" 
            className="w-full font-medium hover:bg-muted/50"
            size="lg"
          >
            <Upload className="h-5 w-5 mr-3" />
            Choose from Gallery
          </Button>
        </div>
      )}
    </Card>
  );
};