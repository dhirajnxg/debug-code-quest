
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface AdBannerProps {
  position: "sidebar" | "inline";
}

const AdBanner: React.FC<AdBannerProps> = ({ position }) => {
  return (
    <Card className={`overflow-hidden ${position === 'sidebar' ? 'h-64' : 'h-32'}`}>
      <CardContent className="p-0 relative h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-debug-purple/10 to-debug-purple/30 flex flex-col justify-center items-center text-center p-4">
          <div className="text-xs text-muted-foreground mb-2 bg-background/80 px-2 py-1 rounded">Advertisement</div>
          <p className="font-medium mb-2">Want to learn more about coding?</p>
          <div className="text-sm">Check out our recommended resources</div>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-1 text-xs text-debug-purple hover:underline"
          >
            <span>Learn more</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdBanner;
