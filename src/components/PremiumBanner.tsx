
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Zap, Lock } from "lucide-react";

interface PremiumBannerProps {
  isPremium: boolean;
  debugsRemaining: number;
  onUpgrade: () => void;
}

const PremiumBanner = ({ isPremium, debugsRemaining, onUpgrade }: PremiumBannerProps) => {
  return (
    <Card className={`overflow-hidden ${isPremium ? 'border-primary' : 'border-debug-red'}`}>
      <div className={`h-1 w-full ${isPremium ? 'bg-primary' : 'bg-debug-red'}`} />
      <CardContent className="p-6">
        {isPremium ? (
          <div className="flex flex-col items-center text-center gap-3">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Crown className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Premium Active</h3>
            <p className="text-sm text-muted-foreground">
              You have unlimited access to all debug challenges.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm">Unlimited challenges</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center gap-3">
            <div className="h-12 w-12 rounded-full bg-debug-red/20 flex items-center justify-center">
              <Lock className="h-6 w-6 text-debug-red" />
            </div>
            <h3 className="font-semibold text-lg">Upgrade to Premium</h3>
            <p className="text-sm text-muted-foreground">
              {debugsRemaining > 0 
                ? `You have ${debugsRemaining} debug challenges left.` 
                : "You've reached your free debug challenges limit."}
            </p>
            <Button 
              onClick={onUpgrade}
              className="mt-2 bg-primary text-background hover:bg-primary/90 w-full"
            >
              <Crown className="mr-2 h-4 w-4" />
              Get Unlimited Access
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PremiumBanner;
