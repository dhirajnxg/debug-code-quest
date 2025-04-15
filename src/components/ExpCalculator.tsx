
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ExpCalculator = () => {
  const [challengeLevel, setChallengeLevel] = useState(5);
  const [timeTaken, setTimeTaken] = useState(60);
  const [expGained, setExpGained] = useState(0);
  
  useEffect(() => {
    const baseXP = challengeLevel * 10;
    const timeBonus = Math.max(0, 100 - Math.floor(timeTaken / 2));
    setExpGained(baseXP + timeBonus);
  }, [challengeLevel, timeTaken]);
  
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Experience Calculator</CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-sm">
                  Experience points (XP) are calculated based on the challenge level and time taken to solve.
                  <br /><br />
                  Formula: <code>XP = (Level × 10) + TimeBonus</code>
                  <br />
                  Where TimeBonus = max(0, 100 - Time/2)
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Challenge Level</label>
            <span className="font-mono">{challengeLevel}</span>
          </div>
          <Slider 
            min={1} 
            max={20} 
            step={1}
            value={[challengeLevel]}
            onValueChange={(value) => setChallengeLevel(value[0])}
          />
          
          <div className="flex items-center justify-between mt-6">
            <label className="text-sm font-medium">Time Taken (seconds)</label>
            <span className="font-mono">{timeTaken}</span>
          </div>
          <Slider 
            min={10} 
            max={300} 
            step={5}
            value={[timeTaken]}
            onValueChange={(value) => setTimeTaken(value[0])}
          />
        </div>
        
        <div className="bg-muted rounded-lg p-4 flex items-center justify-between mt-6">
          <span className="font-medium">Experience Gained:</span>
          <div className="text-debug-purple font-bold text-xl">{expGained} XP</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpCalculator;
