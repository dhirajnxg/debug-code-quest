
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface LevelCardProps {
  level: number;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Expert";
  status: "locked" | "available" | "completed";
  xpReward: number;
}

const DifficultyColor = {
  "Easy": "bg-green-100 text-green-800",
  "Medium": "bg-blue-100 text-blue-800",
  "Hard": "bg-orange-100 text-orange-800",
  "Expert": "bg-red-100 text-red-800"
};

const LevelCard: React.FC<LevelCardProps> = ({
  level,
  title,
  description,
  difficulty,
  status,
  xpReward
}) => {
  const navigate = useNavigate();

  return (
    <Card className={`transition-all duration-300 ${status === 'locked' ? 'opacity-75' : ''}`}>
      <CardContent className="p-6 pb-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">Level {level}</span>
            <Badge variant="outline" className={`${DifficultyColor[difficulty]} border-none`}>
              {difficulty}
            </Badge>
          </div>
          {status === "completed" && (
            <CheckCircle className="h-5 w-5 text-debug-green" />
          )}
        </div>
        
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="flex items-center text-muted-foreground text-sm">
          <span>Reward: <span className="text-debug-purple font-medium">{xpReward} XP</span></span>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-2">
        {status === "locked" ? (
          <Button disabled className="w-full" variant="outline">
            <Lock className="mr-2 h-4 w-4" />
            <span>Locked</span>
          </Button>
        ) : status === "completed" ? (
          <Button variant="outline" className="w-full" onClick={() => navigate(`/challenge/${level}`)}>
            <span>Play again</span>
          </Button>
        ) : (
          <Button 
            className="w-full bg-debug-purple hover:bg-debug-purple/90" 
            onClick={() => navigate(`/challenge/${level}`)}
          >
            <span>Start challenge</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default LevelCard;
