
import React from "react";
import { Button } from "@/components/ui/button";
import { Bug, User } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Header = () => {
  // Mock authentication state
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userExp, setUserExp] = React.useState(1250);
  const [userLevel, setUserLevel] = React.useState(5);
  
  return (
    <header className="border-b border-border bg-background sticky top-0 z-10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Bug className="h-8 w-8 text-debug-purple" />
          <span className="text-2xl font-bold">DebugMe</span>
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
                className="bg-debug-purple hover:bg-debug-purple/90"
              >
                Get Started
              </Button>
            </>
          ) : (
            <>
              <div className="hidden md:flex items-center gap-4 mr-4">
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Level {userLevel}</span> · {userExp} XP
                </div>
                <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-debug-purple" style={{ width: "60%" }}></div>
                </div>
              </div>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56" align="end">
                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <span className="font-medium">User1234</span>
                      <span className="text-sm text-muted-foreground">user@example.com</span>
                    </div>
                    <div className="flex flex-col text-sm gap-1">
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
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => setIsLoggedIn(false)}
                    >
                      Sign out
                    </Button>
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
