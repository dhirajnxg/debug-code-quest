
import React from "react";
import { Button } from "@/components/ui/button";
import { Bug, User, Crown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  // Mock authentication state
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userExp, setUserExp] = React.useState(1250);
  const [userLevel, setUserLevel] = React.useState(5);
  const [isPremium, setIsPremium] = React.useState(false);
  const [debugsRemaining, setDebugsRemaining] = React.useState(5);
  
  // Toggle premium status for demo
  const togglePremium = () => {
    setIsPremium(!isPremium);
  };
  
  return (
    <header className="border-b border-debug-green bg-background sticky top-0 z-10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Bug 
            className="h-8 w-8 animate-bug-loop" 
            strokeWidth={2} 
          />
          <span className="text-2xl font-bold text-primary">DebugMe</span>
        </div>
        
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Button 
                variant="outline" 
                onClick={() => setIsLoggedIn(true)}
                className="flex gap-2 items-center"
              >
                <span>Sign in</span>
              </Button>
              <Button 
                onClick={() => setIsLoggedIn(true)}
                className="bg-primary hover:bg-primary/90 text-background"
              >
                Get Started
              </Button>
            </>
          ) : (
            <>
              <div className="hidden md:flex items-center gap-4 mr-4">
                <div className="text-sm text-primary">
                  <span className="font-semibold text-primary">Level {userLevel}</span> · {userExp} XP
                </div>
                <div className="w-32 h-2 rounded-full bg-background-foreground/20 overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "60%" }}></div>
                </div>
              </div>
              
              {isPremium ? (
                <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                  <Crown className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-primary">Premium</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-background-foreground/10 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-primary">{debugsRemaining} debugs left</span>
                </div>
              )}
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full border-primary">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/avatar.png" />
                      <AvatarFallback className="bg-primary text-background">JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="end">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/avatar.png" />
                        <AvatarFallback className="bg-primary text-background">JD</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">John Doe</span>
                        <span className="text-sm text-muted-foreground">john@example.com</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col text-sm gap-2">
                      <div className="flex justify-between">
                        <span>Level:</span>
                        <span className="font-medium">{userLevel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Experience:</span>
                        <span className="font-medium">{userExp} XP</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Challenges Solved:</span>
                        <span className="font-medium">23</span>
                      </div>
                      {!isPremium && (
                        <div className="flex justify-between">
                          <span>Debug Challenges Left:</span>
                          <span className="font-medium">{debugsRemaining}</span>
                        </div>
                      )}
                    </div>
                    
                    {!isPremium && (
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-background"
                        onClick={togglePremium}
                      >
                        <Crown className="mr-2 h-4 w-4" />
                        Upgrade to Premium
                      </Button>
                    )}
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => setIsLoggedIn(false)}
                      >
                        Sign out
                      </Button>
                      
                      {isPremium && (
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={togglePremium}
                        >
                          Manage Premium
                        </Button>
                      )}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
