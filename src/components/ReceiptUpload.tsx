import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Camera, Upload, FileText, CheckCircle } from "lucide-react";
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
      <Card className="p-6 max-w-md mx-auto animate-slide-up bg-card border-0 shadow-card">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="h-6 w-6 text-success" />
          <h3 className="text-lg font-semibold text-card-foreground">Receipt Analyzed</h3>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
            <div>
              <p className="text-sm text-muted-foreground">Merchant</p>
              <p className="font-medium">{mockReceiptData.merchant}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-medium">{mockReceiptData.date}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="font-medium text-primary">{mockReceiptData.total}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tax</p>
              <p className="font-medium">{mockReceiptData.tax}</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2 text-card-foreground">Items</h4>
            <div className="space-y-2">
              {mockReceiptData.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.category}</p>
                  </div>
                  <p className="font-medium text-sm">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Button className="flex-1" size="sm">
              Add to Wallet
            </Button>
            <Button variant="outline" size="sm" onClick={() => setAnalyzed(false)}>
              Upload Another
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 max-w-md mx-auto bg-gradient-surface border-0 shadow-floating backdrop-blur-sm">
      <div className="text-center mb-8">
        <div className="relative inline-block mb-4">
          <div className="p-4 bg-gradient-primary rounded-2xl shadow-elevated">
            <FileText className="h-8 w-8 text-primary-foreground" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full border-2 border-background flex items-center justify-center">
            <span className="text-xs text-accent-foreground font-bold">AI</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-card-foreground">Smart Receipt Upload</h3>
        <p className="text-muted-foreground leading-relaxed">
          Professional AI-powered analysis for accurate data extraction and Google Wallet integration
        </p>
      </div>

      {uploading ? (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center animate-glow">
              <FileText className="h-8 w-8 text-primary-foreground animate-bounce" />
            </div>
            <p className="text-lg font-medium text-card-foreground mb-2">Processing Receipt</p>
            <p className="text-sm text-muted-foreground mb-4">AI analysis in progress...</p>
            <Progress value={progress} className="w-full h-2" />
            <p className="text-xs text-muted-foreground mt-2">{progress}% completed</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <Button 
            onClick={() => handleUpload('camera')} 
            className="w-full bg-gradient-primary hover:opacity-90 border-0 shadow-elevated hover:shadow-floating transition-all duration-300 py-4"
            size="lg"
          >
            <Camera className="h-5 w-5 mr-3" />
            Capture with Camera
          </Button>
          
          <Button 
            onClick={() => handleUpload('file')} 
            variant="outline" 
            className="w-full border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 py-4"
            size="lg"
          >
            <Upload className="h-5 w-5 mr-3" />
            Upload from Gallery
          </Button>
          
          <p className="text-center text-xs text-muted-foreground mt-6">
            Supports JPG, PNG, PDF • Max 10MB • Secure processing
          </p>
        </div>
      )}
    </Card>
  );
};