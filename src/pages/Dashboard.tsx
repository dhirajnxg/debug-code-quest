
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Activity, Zap } from "lucide-react";
import LevelCard from "@/components/LevelCard";
import AdBanner from "@/components/AdBanner";
import ExpCalculator from "@/components/ExpCalculator";
import PremiumBanner from "@/components/PremiumBanner";

// Mock data for challenges
const challenges = [
  {
    id: 1,
    level: 1,
    title: "Missing Semicolon",
    description: "Find the missing semicolon that's breaking the code.",
    difficulty: "Easy" as const,
    status: "completed" as const,
    xpReward: 20
  },
  {
    id: 2,
    level: 2,
    title: "Variable Scope",
    description: "Fix the variable scope issue causing undefined behavior.",
    difficulty: "Easy" as const,
    status: "completed" as const,
    xpReward: 25
  },
  {
    id: 3,
    level: 3,
    title: "Loop Logic",
    description: "Correct the loop logic to prevent infinite execution.",
    difficulty: "Medium" as const,
    status: "available" as const,
    xpReward: 35
  },
  {
    id: 4,
    level: 4,
    title: "Object Properties",
    description: "Debug the incorrect object property access pattern.",
    difficulty: "Medium" as const,
    status: "available" as const,
    xpReward: 40
  },
  {
    id: 5,
    level: 5,
    title: "Promise Chain",
    description: "Fix the broken promise chain causing unhandled rejection.",
    difficulty: "Hard" as const,
    status: "locked" as const,
    xpReward: 65
  },
  {
    id: 6,
    level: 6,
    title: "Callback Hell",
    description: "Refactor and fix the nested callbacks causing issues.",
    difficulty: "Hard" as const,
    status: "locked" as const,
    xpReward: 80
  }
];

const Dashboard = () => {
  // Premium state
  const [isPremium, setIsPremium] = React.useState(false);
  const [debugsRemaining, setDebugsRemaining] = React.useState(5);
  
  const handleUpgrade = () => {
    setIsPremium(true);
    // In a real app, this would trigger payment flow
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Your Dashboard</h1>
          <p className="text-muted-foreground">Track your progress and take on new debugging challenges.</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline">
            View All Challenges
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-background">
            Resume Progress
          </Button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Current Level</p>
              <div className="text-3xl font-bold">5</div>
              <p className="text-sm text-muted-foreground mt-2">40% to Level 6</p>
            </div>
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Trophy className="h-7 w-7 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Total XP</p>
              <div className="text-3xl font-bold">1,250</div>
              <p className="text-sm text-muted-foreground mt-2">+120 XP this week</p>
            </div>
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="h-7 w-7 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Challenges Solved</p>
              <div className="text-3xl font-bold">23</div>
              <p className="text-sm text-muted-foreground mt-2">8 in the last 7 days</p>
            </div>
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Activity className="h-7 w-7 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Main Content */}
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Recent Challenges</CardTitle>
              <CardDescription>Continue where you left off or start a new challenge.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge) => (
                  <LevelCard
                    key={challenge.id}
                    level={challenge.level}
                    title={challenge.title}
                    description={challenge.description}
                    difficulty={challenge.difficulty}
                    status={challenge.status}
                    xpReward={challenge.xpReward}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <PremiumBanner 
            isPremium={isPremium}
            debugsRemaining={debugsRemaining}
            onUpgrade={handleUpgrade}
          />
          <AdBanner position="sidebar" />
          <ExpCalculator />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
